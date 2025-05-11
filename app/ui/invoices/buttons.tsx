import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { useFormState, useFormStatus } from "react-dom";
import { deleteLesson } from "@/app/lib/actions";
import { LessonState } from "@/app/lib/definitions";

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/cours/create"
      className="flex h-10 items-center rounded-lg bg-kelasi-red px-4 text-sm font-medium text-white transition-colors hover:bg-kelasi-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Ajouter un cours</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href="/dashboard/cours"
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
export function DeleteLesson({ id }: { id: string }) {
  const deleteLessonWithId = deleteLesson.bind(null, id);
  const [state, formAction] = useFormState(deleteLessonWithId, {
    message: "",
    success: false,
  });

  return (
    <form action={formAction}>
      <DeleteButton />
      {state.message && (
        <p
          className={`mt-2 text-sm ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md border p-2 hover:bg-gray-100 disabled:opacity-50"
      aria-disabled={pending}
    >
      <span className="sr-only">Supprimer</span>
      <TrashIcon className="w-5" />
      {pending && <span className="ml-2">Suppression...</span>}
    </button>
  );
}
