import { z } from "zod";
import { UserRole, Gender } from "@prisma/client";

export const userFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Veuillez entrer une adresse email valide"),
    phone: z.string().optional(),
    role: z.nativeEnum(UserRole),
    gender: z.nativeEnum(Gender),
    birthDate: z.date({
      required_error: "La date de naissance est requise",
    }),
    address: z.string().optional(),
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .optional()
      .or(z.literal("")),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => !data.password || data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type UserFormValues = z.infer<typeof userFormSchema>;
