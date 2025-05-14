import { notFound } from "next/navigation";
import EditForm from "@/app/ui/cours/edit-form";
import Breadcrumbs from "@/app/ui/cours/breadcrumbs";
import { fetchLessonById, fetchSubjects } from "@/app/lib/data";

// Solution garantie pour Next.js 15.3.2
export default async function Page({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [lesson, subjects] = await Promise.all([
    fetchLessonById(params.id),
    fetchSubjects(),
  ]);

  if (!lesson) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Cours", href: "/dashboard/cours" },
          {
            label: "Modifier le cours",
            href: `/dashboard/cours/${params.id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm lesson={lesson} subjects={subjects} />
    </main>
  );
}
