"use client";

import { useFormState } from "react-dom";
import { updateLesson } from "@/app/lib/actions";
import { LessonState, SubjectField } from "@/app/lib/definitions";
import {
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export default function EditForm({
  lesson,
  subjects,
}: {
  lesson: { id: string; title: string; content: string; subjectId: string };
  subjects: SubjectField[];
}) {
  const initialState: LessonState = {
    message: "", // Utilisez une string vide au lieu de null
    errors: {},
  };

  // Typez explicitement la fonction bind
  const updateLessonWithId = updateLesson.bind(null, lesson.id) as (
    prevState: LessonState,
    formData: FormData
  ) => Promise<LessonState>;

  const [state, dispatch] = useFormState(updateLessonWithId, initialState);
  return (
    <form action={dispatch} className="space-y-6">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Titre du cours */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Titre du cours
          </label>
          <div className="relative">
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={lesson.title}
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.title ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="title-error"
            />
            <BookOpenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.title && (
            <div id="title-error" className="mt-2 text-sm text-red-500">
              {state.errors.title.join(", ")}
            </div>
          )}
        </div>

        {/* Contenu du cours */}
        <div className="mb-4">
          <label htmlFor="content" className="mb-2 block text-sm font-medium">
            Contenu du cours
          </label>
          <div className="relative">
            <textarea
              id="content"
              name="content"
              rows={10}
              defaultValue={lesson.content}
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.content ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="content-error"
            />
            <DocumentTextIcon className="pointer-events-none absolute left-3 top-4 h-[18px] w-[18px] text-gray-500" />
          </div>
          {state.errors?.content && (
            <div id="content-error" className="mt-2 text-sm text-red-500">
              {state.errors.content.join(", ")}
            </div>
          )}
        </div>

        {/* Matière associée */}
        <div className="mb-4">
          <label htmlFor="subjectId" className="mb-2 block text-sm font-medium">
            Matière
          </label>
          <div className="relative">
            <select
              id="subjectId"
              name="subjectId"
              defaultValue={lesson.subjectId}
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.subjectId ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="subject-error"
            >
              <option value="" disabled>
                Sélectionnez une matière
              </option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
            <AcademicCapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.subjectId && (
            <div id="subject-error" className="mt-2 text-sm text-red-500">
              {state.errors.subjectId.join(", ")}
            </div>
          )}
        </div>

        {/* Message général */}
        {state.message && (
          <div
            className={`mt-4 text-sm ${
              state.success ? "text-green-600" : "text-red-500"
            }`}
          >
            {state.message}
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/cours"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Modifier le cours</Button>
      </div>
    </form>
  );
}
