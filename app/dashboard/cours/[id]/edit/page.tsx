import EditForm from "@/app/ui/cours/edit-form";
import Breadcrumbs from "@/app/ui/cours/breadcrumbs";
import { fetchLessonById, fetchSubjects } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // Récupérer les données en parallèle
  const [lesson, subjects] = await Promise.all([
    fetchLessonById(id),
    fetchSubjects(),
  ]);

  // Si le cours n'existe pas, afficher la page 404
  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Cours", href: "/dashboard/cours" },
          {
            label: "Modifier le cours",
            href: `/dashboard/cours/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm lesson={lesson} subjects={subjects} />
    </main>
  );
}
