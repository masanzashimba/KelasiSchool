"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

// Schéma de validation amélioré
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

export type LessonState = {
  errors?: {
    title?: string[];
    content?: string[];
    subjectId?: string[];
  };
  message: string;
  success?: boolean;
};

export async function createLesson(
  prevState: LessonState,
  formData: FormData
): Promise<LessonState> {
  // Extraction et validation des données
  const validatedData = LessonFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    subjectId: formData.get("subjectId"),
  });

  if (!validatedData.success) {
    console.error("Validation error:", validatedData.error);
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

    // Création du cours
    await prisma.lesson.create({
      data: {
        title,
        content,
        subjectId,
      },
    });

    // Revalidation des caches
    revalidatePath("/dashboard/cours");
    revalidatePath("/dashboard"); // Si nécessaire

    return {
      message: "Cours créé avec succès !",
      success: true,
    };
  } catch (error) {
    console.error("Database error details:", error);

    // Initialisation du message d'erreur
    let errorMessage = "Erreur lors de la création du cours";
    const errors: LessonState["errors"] = {};

    // Vérification du type d'erreur
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;

      // Gestion spécifique des erreurs Prisma
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
  // Validation des données
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
    // Vérification que la leçon existe
    const lessonExists = await prisma.lesson.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!lessonExists) {
      return {
        message: "Erreur: La leçon à modifier n'existe pas",
        success: false,
      };
    }

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

    // Mise à jour de la leçon
    await prisma.lesson.update({
      where: { id },
      data: {
        title,
        content,
        subjectId,
      },
    });

    // Revalidation des caches
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
export async function deleteLesson(
  id: string,
  prevState: LessonState,
  formData: FormData
): Promise<LessonState> {
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
