import UserForm from "@/app/ui/users/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer Utilisateur",
};

export default async function Page() {
  return (
    <main>
      <UserForm />
    </main>
  );
}
