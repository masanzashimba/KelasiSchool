import { Gender, UserRole } from "@prisma/client";
import { UserWithRelations } from "../types";
import { prisma } from "@/app/lib/prisma";

export const getUsers = async (
  role?: UserRole,
  search?: string
): Promise<UserWithRelations[]> => {
  const where: any = {};

  if (role) {
    where.role = role;
  }

  if (search) {
    where.OR = [
      { firstName: { contains: search, mode: "insensitive" } },
      { lastName: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ];
  }

  return prisma.user.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      children: {
        include: {
          student: true,
        },
      },
      parents: {
        include: {
          parent: true,
        },
      },
    },
  });
};

export const getUserById = async (
  id: string
): Promise<UserWithRelations | null> => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      children: {
        include: {
          student: true,
        },
      },
      parents: {
        include: {
          parent: true,
        },
      },
    },
  });
};

type CreateUserData = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  gender: Gender;
  birthDate: Date;
  phone?: string;
  address?: string;
  passwordHash: string;
};

export const createUser = async (data: CreateUserData) => {
  return prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      gender: data.gender,
      birthDate: data.birthDate,
      phone: data.phone,
      address: data.address,
      passwordHash: data.passwordHash,
      // Valeurs par défaut pour les champs requis
      username: data.email.split("@")[0], // génération automatique de username
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};

export const updateUser = async (
  id: string,
  data: Partial<UserWithRelations>
) => {
  return prisma.user.update({
    where: { id },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      gender: data.gender,
      birthDate: data.birthDate,
      phone: data.phone,
      address: data.address,
      passwordHash: data.passwordHash,
      // Valeurs par défaut pour les champs requis
      username: (data.email ?? "").split("@")[0], // génération automatique de username
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};

export const deleteUser = async (id: string) => {
  return prisma.user.delete({
    where: { id },
  });
};
