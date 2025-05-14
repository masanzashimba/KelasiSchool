"use client";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteUser } from "@/app/lib/actions"; // Modification : fonction pour supprimer un utilisateur

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";

// Bouton pour ajouter un utilisateur
export function CreateUser() {
  return (
    <Link
      href="/dashboard/users/create"
      className="flex h-10 items-center rounded-lg bg-kelasi-red px-4 text-sm font-medium text-white transition-colors hover:bg-kelasi-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Ajouter un utilisateur</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// Bouton pour mettre à jour un utilisateur
export function UpdateUser({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/users/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// Bouton pour supprimer un utilisateur
export function DeleteUser({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const deleteUserWithId = deleteUser.bind(null, id); // Modification : suppression d'utilisateur
  const [state, formAction] = useFormState(deleteUserWithId, {
    message: "",
    success: false,
  });

  return (
    <>
      {/* Bouton de déclenchement */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-md border p-2 hover:bg-gray-100"
        aria-label="Supprimer"
      >
        <TrashIcon className="w-5" />
      </button>

      {/* Modale de confirmation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative rounded-lg bg-white p-6 shadow-xl">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h3 className="mb-4 text-lg font-medium">
              Confirmer la suppression
            </h3>
            <p className="mb-6 text-gray-600">
              Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action
              est irréversible.
            </p>

            <form action={formAction}>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Annuler
                </button>
                <SubmitButton onSuccess={() => setIsOpen(false)} />
              </div>
            </form>

            {/* Feedback */}
            {state.message && (
              <p
                className={`mt-4 text-sm ${
                  state.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {state.message}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Bouton de soumission pour la suppression
function SubmitButton({ onSuccess }: { onSuccess: () => void }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
        pending ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
      }`}
      onClick={(e) => {
        if (pending) e.preventDefault();
      }}
    >
      {pending ? "Suppression en cours..." : "Confirmer la suppression"}
    </button>
  );
}
