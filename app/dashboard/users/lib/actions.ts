"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { createUser, updateUser, deleteUser, getUserById } from "./queries";
import { UserFormValues } from "./validations";

export const createUserAction = async (data: UserFormValues) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Non autorisé");
  }

  try {
    await createUser({
      ...data,
      passwordHash: data.password || "temp_password",
    });
  } catch (error) {
    throw new Error("Erreur lors de la création");
  }

  revalidatePath("/users");
  redirect("/users");
};

export const updateUserAction = async (id: string, data: UserFormValues) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Non autorisé");
  }

  try {
    await updateUser(id, {
      ...data,
      passwordHash: data.password || undefined,
    });
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour");
  }

  revalidatePath("/users");
  revalidatePath(`/users/${id}`);
  redirect("/users");
};

export const deleteUserAction = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Non autorisé");
  }

  try {
    await deleteUser(id);
  } catch (error) {
    throw new Error("Erreur lors de la suppression");
  }

  revalidatePath("/users");
};
