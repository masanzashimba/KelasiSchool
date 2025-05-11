import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/app/ui/fonts";
import { LatestLesson } from "@/app/lib/definitions";

export default async function LatestLessons({
  latestLessons,
}: {
  latestLessons: LatestLesson[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Cours récents
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestLessons.map((lesson, i) => (
            <div
              key={lesson.id}
              className={clsx(
                "flex flex-col md:flex-row md:items-center md:justify-between py-4",
                {
                  "border-t": i !== 0,
                }
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base">
                  {lesson.title}
                </p>
                <p className="text-sm text-gray-500">
                  Matière : {lesson.subject?.name || "Inconnue"}
                </p>
                <p className="text-sm text-gray-500">
                  Enseignant : {lesson.teacher?.name || "N/A"}
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                {new Date(lesson.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">
            Mis à jour à l’instant
          </h3>
        </div>
      </div>
    </div>
  );
}
