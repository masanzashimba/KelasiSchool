"use client";

import { useFormState } from "react-dom";
import { UserState } from "@/app/lib/definitions";
import {
  BookOpenIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { updateUser } from "@/app/lib/actions";

export default function EditUserForm({
  user,
}: {
  user: { id: string; name: string; email: string; role: string };
}) {
  const initialState: UserState = {
    message: "", // Utilisez une string vide au lieu de null
    errors: {},
  };

  // Typez explicitement la fonction bind
  const updateUserWithId = updateUser.bind(null, user.id) as (
    prevState: UserState,
    formData: FormData
  ) => Promise<UserState>;

  const [state, dispatch] = useFormState(updateUserWithId, initialState);
  return (
    <form action={dispatch} className="space-y-6">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Nom de l'utilisateur */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nom de l'utilisateur
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={user.name}
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.name ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="name-error"
            />
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.name && (
            <div id="name-error" className="mt-2 text-sm text-red-500">
              {state.errors.name.join(", ")}
            </div>
          )}
        </div>

        {/* Email de l'utilisateur */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={user.email}
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.email ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="email-error"
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.email && (
            <div id="email-error" className="mt-2 text-sm text-red-500">
              {state.errors.email.join(", ")}
            </div>
          )}
        </div>

        {/* Rôle de l'utilisateur */}
        <div className="mb-4">
          <label htmlFor="role" className="mb-2 block text-sm font-medium">
            Rôle
          </label>
          <div className="relative">
            <select
              id="role"
              name="role"
              defaultValue={user.role}
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 ${
                state.errors?.role ? "border-red-500" : "border-gray-200"
              }`}
              aria-describedby="role-error"
            >
              <option value="" disabled>
                Sélectionnez un rôle
              </option>
              <option value="admin">Administrateur</option>
              <option value="user">Utilisateur</option>
            </select>
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.role && (
            <div id="role-error" className="mt-2 text-sm text-red-500">
              {state.errors.role.join(", ")}
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
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Modifier l'utilisateur</Button>
      </div>
    </form>
  );
}
