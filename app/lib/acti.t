"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { User, UserRole, Gender } from "@prisma/client";
import prisma from "./prisma";
import bcrypt from "bcrypt";

// ==================== SCHÉMAS DE VALIDATION ====================

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

const UserFormSchema = z.object({
  id: z.string(),
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

// ==================== TYPES D'ÉTAT ====================

export type LessonState = {
  errors?: {
    title?: string[];
    content?: string[];
    subjectId?: string[];
  };
  message: string;
  success?: boolean;
};

export type UserState = {
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
  message?: string | null;
  success?: boolean;
};

// ==================== FONCTIONS POUR LES COURS ====================

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

// ==================== FONCTIONS POUR LES UTILISATEURS ====================

export async function createUser(prevState: UserState, formData: FormData) {
  const validatedFields = UserFormSchema.omit({ id: true }).safeParse({
    lastName: formData.get("lastName"),
    firstName: formData.get("firstName"),
    gender: formData.get("gender"),
    birthDate: formData.get("birthDate"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    username: formData.get("username"),
    password: formData.get("password"),
    role: formData.get("role"),
    address: formData.get("address"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la création.",
      success: false,
    };
  }

  const {
    lastName,
    firstName,
    gender,
    birthDate,
    email,
    phone,
    username,
    password,
    role,
    address,
  } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password || "defaultPassword", 10);

    await prisma.user.create({
      data: {
        lastName,
        firstName,
        gender: gender as Gender,
        birthDate,
        email: email || null,
        phone: phone || null,
        username: username || null,
        passwordHash: hashedPassword,
        role: role as UserRole,
        address: address || null,
      },
    });

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  } catch (error) {
    console.error("Database Error:", error);
    let errors: UserState["errors"] = {};

    if (error instanceof Error && "code" in error && error.code === "P2002") {
      if (error.meta?.target?.includes("email"))
        errors.email = ["Email déjà utilisé"];
      if (error.meta?.target?.includes("phone"))
        errors.phone = ["Téléphone déjà utilisé"];
      if (error.meta?.target?.includes("username"))
        errors.username = ["Nom d'utilisateur déjà pris"];
    }

    return {
      message: "Erreur de base de données: Échec de la création.",
      errors,
      success: false,
    };
  }
}

export async function updateUser(
  id: string,
  prevState: UserState,
  formData: FormData
) {
  const validatedFields = UserFormSchema.omit({
    id: true,
    password: true,
  }).safeParse({
    lastName: formData.get("lastName"),
    firstName: formData.get("firstName"),
    gender: formData.get("gender"),
    birthDate: formData.get("birthDate"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    username: formData.get("username"),
    role: formData.get("role"),
    address: formData.get("address"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la mise à jour.",
      success: false,
    };
  }

  const {
    lastName,
    firstName,
    gender,
    birthDate,
    email,
    phone,
    username,
    role,
    address,
  } = validatedFields.data;

  try {
    await prisma.user.update({
      where: { id },
      data: {
        lastName,
        firstName,
        gender: gender as Gender,
        birthDate,
        email: email || null,
        phone: phone || null,
        username: username || null,
        role: role as UserRole,
        address: address || null,
      },
    });

    revalidatePath("/dashboard/users");
    revalidatePath(`/dashboard/users/${id}`);
    redirect("/dashboard/users");
  } catch (error) {
    console.error("Database Error:", error);
    let errors: UserState["errors"] = {};

    if (error instanceof Error && "code" in error && error.code === "P2002") {
      if (error.meta?.target?.includes("email"))
        errors.email = ["Email déjà utilisé"];
      if (error.meta?.target?.includes("phone"))
        errors.phone = ["Téléphone déjà utilisé"];
      if (error.meta?.target?.includes("username"))
        errors.username = ["Nom d'utilisateur déjà pris"];
    }

    return {
      message: "Erreur de base de données: Échec de la mise à jour.",
      errors,
      success: false,
    };
  }
}

export async function deleteUser(id: string): Promise<UserState> {
  try {
    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      return { message: "Utilisateur introuvable.", success: false };
    }

    await prisma.user.delete({ where: { id } });

    revalidatePath("/dashboard/users");
    return { message: "Utilisateur supprimé avec succès.", success: true };
  } catch (error) {
    console.error("Erreur suppression utilisateur:", error);
    return { message: "Erreur lors de la suppression.", success: false };
  }
}
