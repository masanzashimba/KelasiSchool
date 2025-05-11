import { UpdateLesson, DeleteLesson } from "@/app/ui/cours/buttons";
import LessonStatus from "@/app/ui/cours/status"; // Vous pouvez créer ce composant si nécessaire
import { formatDateToLocal } from "@/app/lib/utils";
import { fetchFilteredLessons } from "@/app/lib/data";

export default async function LessonsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const lessons = await fetchFilteredLessons(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {lessons?.map((lesson) => (
              <div
                key={lesson.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="text-lg font-semibold">{lesson.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {lesson.subject?.name}
                    </p>
                  </div>
                  {/* <LessonStatus status={lesson.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm line-clamp-2">{lesson.content}</p>
                    <p>{formatDateToLocal(lesson.createdAt.toISOString())}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateLesson id={lesson.id} />
                    <DeleteLesson id={lesson.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Titre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sujet
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contenu
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date de création
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Statut
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {lessons?.map((lesson) => (
                <tr
                  key={lesson.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p className="font-medium">{lesson.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {lesson.subject?.name}
                  </td>
                  <td className="px-3 py-3">
                    <p className="line-clamp-2">{lesson.content}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(lesson.createdAt.toISOString())}
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    <LessonStatus status={lesson.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateLesson id={lesson.id} />
                      <DeleteLesson id={lesson.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
