"use client";

import { SubjectField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { useActionState } from "react";
import { createLesson, State } from "@/app/lib/actions";

const initialState: State = {
  message: "",
  errors: undefined,
};

export default function Form({ subjects }: { subjects: SubjectField[] }) {
  const [state, dispatch] = useActionState<State, FormData>(
    createLesson,
    initialState
  ); // Changé ici

  return (
    <form action={dispatch}>
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
              placeholder="Entrez le titre du cours"
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.title ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="title-error"
              required
            />
            <BookOpenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.title && (
            <div id="title-error" className="mt-2 text-sm text-red-500">
              {state.errors.title}
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
              rows={4}
              placeholder="Détails du cours..."
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.content ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="content-error"
              required
            />
            <DocumentTextIcon className="pointer-events-none absolute left-3 top-4 h-[18px] w-[18px] text-gray-500" />
          </div>
          {state.errors?.content && (
            <div id="content-error" className="mt-2 text-sm text-red-500">
              {state.errors.content}
            </div>
          )}
        </div>

        {/* Sélection du sujet */}
        <div className="mb-4">
          <label htmlFor="subjectId" className="mb-2 block text-sm font-medium">
            Matière associée
          </label>
          <div className="relative">
            <select
              id="subjectId"
              name="subjectId"
              className={`peer block w-full cursor-pointer rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.subjectId ? "border-red-500" : "border-gray-200"
              }`}
              defaultValue=""
              aria-describedby="subject-error"
              required
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
              {state.errors.subjectId}
            </div>
          )}
        </div>

        {/* Message général */}
        {state.message && (
          <div className="mb-4 text-sm text-red-500">{state.message}</div>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/cours"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Créer le cours</Button>
      </div>
    </form>
  );
}
