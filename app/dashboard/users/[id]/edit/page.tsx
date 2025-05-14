import UserForm from "@/app/ui/users/create-form";
import { fetchUserById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modifier Utilisateur",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await fetchUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <UserForm user={user} />
    </main>
  );
}
