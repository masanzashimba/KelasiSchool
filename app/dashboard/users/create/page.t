import UserForm from "@/app/ui/users/create-form";
import Breadcrumbs from "@/app/ui/users/breadcrumbs";
import { fetchRoles } from "@/app/lib/data";

export default async function Page() {
  const roles = await fetchRoles(); // Doit renvoyer ["ADMIN", "USER"] par exemple

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Utilisateurs", href: "/dashboard/users" },
          {
            label: "Créer un utilisateur",
            href: "/dashboard/users/create",
            active: true,
          },
        ]}
      />
      <UserForm />
    </main>
  );
}
