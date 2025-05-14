import { notFound } from "next/navigation";
// import EditUserForm from "@/app/ui/users/edit-user-form";
import Breadcrumbs from "@/app/ui/users/breadcrumbs";
import { fetchUserById, fetchRoles } from "@/app/lib/data";
import EditUserForm from "@/app/ui/users/edit-form";

// Solution garantie pour Next.js 15.3.2
export default async function Page({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [user, roles] = await Promise.all([
    fetchUserById(params.id), // Récupérer les informations de l'utilisateur par son ID
    fetchRoles(), // Récupérer la liste des rôles pour le sélecteur de rôle dans le formulaire
  ]);

  if (!user) notFound(); // Si l'utilisateur n'est pas trouvé, afficher une page "non trouvé"

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Utilisateurs", href: "/dashboard/users" },
          {
            label: "Modifier l'utilisateur",
            href: `/dashboard/users/${params.id}/edit`,
            active: true,
          },
        ]}
      />
      <EditUserForm
        user={{
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email ?? "",
          role: user.role,
        }}
      />
    </main>
  );
}
