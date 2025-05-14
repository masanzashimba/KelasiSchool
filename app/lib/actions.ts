"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

// ==================== SCHÉMAS DE VALIDATION ====================
export type LessonState = {
  errors?: {
    title?: string[];
    content?: string[];
    subjectId?: string[];
  };
  message: string;
  success?: boolean;
};

const UserFormSchema = z.object({
  id: z.string().optional(),
  lastName: z.string().min(1, { message: "Le nom est requis" }),
  firstName: z.string().min(1, { message: "Le prénom est requis" }),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  birthDate: z.coerce.date({
    required_error: "La date de naissance est requise",
    invalid_type_error: "Format de date invalide",
  }),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  username: z.string().optional().or(z.literal("")),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit avoir au moins 6 caractères" })
    .optional()
    .or(z.literal("")),
  role: z.enum(["ADMIN", "TEACHER", "STUDENT", "PARENT"]),
  address: z.string().optional().or(z.literal("")),
});

const LessonFormSchema = z.object({
  title: z
    .string()
    .min(1, "Le titre est requis")
    .max(100, "Le titre ne doit pas dépasser 100 caractères"),
  content: z
    .string()
    .min(1, "Le contenu est requis")
    .max(5000, "Le contenu ne doit pas dépasser 5000 caractères"),
  subjectId: z
    .string()
    .min(1, "Veuillez sélectionner une matière")
    .uuid("ID de matière invalide"),
});

export async function createLesson(
  prevState: LessonState,
  formData: FormData
): Promise<LessonState> {
  const validatedData = LessonFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    subjectId: formData.get("subjectId"),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Erreur de validation. Veuillez vérifier les champs.",
      success: false,
    };
  }

  const { title, content, subjectId } = validatedData.data;

  try {
    // Vérification que le sujet existe
    const subjectExists = await prisma.subject.findUnique({
      where: { id: subjectId },
      select: { id: true },
    });

    if (!subjectExists) {
      return {
        message: "Erreur: La matière sélectionnée n'existe pas",
        errors: { subjectId: ["Matière invalide"] },
        success: false,
      };
    }

    await prisma.lesson.create({
      data: { title, content, subjectId },
    });

    revalidatePath("/dashboard/cours");
    revalidatePath("/dashboard");

    return {
      message: "Cours créé avec succès !",
      success: true,
    };
  } catch (error) {
    console.error("Database error details:", error);
    let errorMessage = "Erreur lors de la création du cours";
    const errors: LessonState["errors"] = {};

    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
      if ("code" in error && error.code === "P2002") {
        errors.title = ["Un cours avec ce titre existe déjà"];
      }
    }

    return {
      message: errorMessage,
      success: false,
      errors,
    };
  }
}

export async function updateLesson(
  id: string,
  prevState: LessonState,
  formData: FormData
): Promise<LessonState> {
  const validatedData = LessonFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    subjectId: formData.get("subjectId"),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Erreur de validation. Veuillez vérifier les champs.",
      success: false,
    };
  }

  const { title, content, subjectId } = validatedData.data;

  try {
    const [lessonExists, subjectExists] = await Promise.all([
      prisma.lesson.findUnique({ where: { id }, select: { id: true } }),
      prisma.subject.findUnique({
        where: { id: subjectId },
        select: { id: true },
      }),
    ]);

    if (!lessonExists) {
      return {
        message: "Erreur: La leçon à modifier n'existe pas",
        success: false,
      };
    }
    if (!subjectExists) {
      return {
        message: "Erreur: La matière sélectionnée n'existe pas",
        errors: { subjectId: ["Matière invalide"] },
        success: false,
      };
    }

    await prisma.lesson.update({
      where: { id },
      data: { title, content, subjectId },
    });

    revalidatePath("/dashboard/cours");
    revalidatePath(`/dashboard/cours/${id}`);

    return {
      message: "Leçon mise à jour avec succès !",
      success: true,
    };
  } catch (error) {
    console.error("Database error:", error);
    let errorMessage = "Erreur lors de la mise à jour de la leçon";
    const errors: LessonState["errors"] = {};

    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
      if ("code" in error && error.code === "P2002") {
        errors.title = ["Un cours avec ce titre existe déjà"];
      }
    }

    return {
      message: errorMessage,
      success: false,
      errors,
    };
  }
}

export async function deleteLesson(id: string): Promise<LessonState> {
  try {
    const lessonExists = await prisma.lesson.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!lessonExists) {
      return {
        message: "Erreur: La leçon à supprimer n'existe pas",
        success: false,
      };
    }

    await prisma.lesson.delete({ where: { id } });

    revalidatePath("/dashboard/cours");
    revalidatePath("/dashboard");

    return {
      message: "Leçon supprimée avec succès !",
      success: true,
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      message: "Erreur lors de la suppression de la leçon",
      success: false,
    };
  }
}
// ==================== TYPES D'ÉTAT ====================

export type UserFormState = {
  message: string; // Rendons ce champ obligatoire
  errors?: {
    lastName?: string[];
    firstName?: string[];
    gender?: string[];
    birthDate?: string[];
    email?: string[];
    phone?: string[];
    username?: string[];
    password?: string[];
    role?: string[];
    address?: string[];
  };
  success?: boolean;
};

// ==================== FONCTIONS UTILITAIRES ====================

const handlePrismaError = (error: unknown) => {
  let errors: UserFormState["errors"] = {};
  let message = "Erreur de base de données";
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      const target = (error.meta?.target as string[]) || [];

      if (target.includes("email")) errors.email = ["Email déjà utilisé"];
      if (target.includes("phone")) errors.phone = ["Téléphone déjà utilisé"];
      if (target.includes("username"))
        errors.username = ["Nom d'utilisateur déjà pris"];

      message = "Un conflit de données est survenu";
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return { errors, message };
};

// ==================== ACTIONS CRUD UTILISATEURS ====================

export async function createUser(prevState: any, formData: FormData) {
  const validatedFields = UserFormSchema.omit({ id: true }).safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation échouée. Veuillez corriger les champs.",
      success: false,
    };
  }

  const { password, ...userData } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(
      password || `${userData.firstName}${userData.lastName}`.toLowerCase(),
      10
    );

    await prisma.user.create({
      data: {
        ...userData,
        email: userData.email || null,
        phone: userData.phone || null,
        username: userData.username || null,
        address: userData.address || null,
        passwordHash: hashedPassword,
      },
    });

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users?success=create");
  } catch (error) {
    const { errors, message } = handlePrismaError(error);
    return {
      errors,
      message: `Échec de la création: ${message}`,
      success: false,
    };
  }
}

export async function updateUser(
  id: string,
  prevState: any,
  formData: FormData
) {
  const validatedFields = UserFormSchema.omit({
    id: true,
    password: true,
  }).safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation échouée. Veuillez corriger les champs.",
      success: false,
    };
  }

  const userData = validatedFields.data;

  try {
    await prisma.user.update({
      where: { id },
      data: {
        ...userData,
        email: userData.email || null,
        phone: userData.phone || null,
        username: userData.username || null,
        address: userData.address || null,
      },
    });

    revalidatePath("/dashboard/users");
    revalidatePath(`/dashboard/users/${id}`);
    redirect("/dashboard/users?success=update");
  } catch (error) {
    const { errors, message } = handlePrismaError(error);
    return {
      errors,
      message: `Échec de la mise à jour: ${message}`,
      success: false,
    };
  }
}

export async function updateUserPassword(
  id: string,
  prevState: UserFormState,
  formData: FormData
): Promise<UserFormState> {
  const password = formData.get("password")?.toString() || "";

  if (password.length < 6) {
    return {
      errors: {
        password: ["Le mot de passe doit avoir au moins 6 caractères"],
      },
      message: "Mot de passe trop court",
      success: false,
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id },
      data: { passwordHash: hashedPassword },
    });

    return { message: "Mot de passe mis à jour", success: true };
  } catch (error) {
    return {
      message: "Échec de la mise à jour du mot de passe",
      success: false,
    };
  }
}

export async function deleteUser(id: string): Promise<UserFormState> {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath("/dashboard/users");
    return {
      message: "Utilisateur supprimé avec succès",
      success: true,
    };
  } catch (error) {
    console.error("Erreur suppression utilisateur:", error);
    return {
      message: "Échec de la suppression de l'utilisateur",
      success: false,
    };
  }
}

// ==================== FONCTIONS DE RECHERCHE ====================

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      lastName: true,
      firstName: true,
      gender: true,
      birthDate: true,
      email: true,
      phone: true,
      username: true,
      role: true,
      address: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function searchUsers(query: string, page = 1, limit = 10) {
  const where: Prisma.UserWhereInput = {
    OR: [
      { lastName: { contains: query, mode: "insensitive" } },
      { firstName: { contains: query, mode: "insensitive" } },
      { email: { contains: query, mode: "insensitive" } },
      { phone: { contains: query, mode: "insensitive" } },
    ],
  };

  const [count, users] = await prisma.$transaction([
    prisma.user.count({ where }),
    prisma.user.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        lastName: true,
        firstName: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    }),
  ]);

  return {
    total: count,
    users,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  };
}
