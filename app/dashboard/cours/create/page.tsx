import Form from "@/app/ui/cours/create-form";
import Breadcrumbs from "@/app/ui/cours/breadcrumbs";
import { fetchSubjects } from "@/app/lib/data"; // Changé de fetchCustomers à fetchSubjects

export default async function Page() {
  const subjects = await fetchSubjects(); // Récupère les sujets au lieu des clients

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Cours", href: "/dashboard/cours" }, // Modifié le chemin
          {
            label: "Créer un cours",
            href: "/dashboard/cours/create",
            active: true,
          },
        ]}
      />
      <Form subjects={subjects} /> {/* Passé les sujets au formulaire */}
    </main>
  );
}
