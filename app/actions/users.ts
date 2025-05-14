// app/actions/users.ts
"use server";

import { createUser, updateUser } from "@/app/lib/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUserAction(formData: FormData) {
  const result = await createUser(formData);
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function updateUserAction(id: string, formData: FormData) {
  const result = await updateUser(id, formData);
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
