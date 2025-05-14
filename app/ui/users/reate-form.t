"use client";

import { useActionState } from "react";
import Link from "next/link";
import {
  EnvelopeIcon,
  UserIcon,
  KeyIcon,
  UsersIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createUser, State } from "@/app/lib/actions";
import { allRoles } from "@/app/lib/role";

const initialState: State = {
  message: "",
  errors: undefined,
};

export default function UserForm() {
  const [state, dispatch] = useActionState<State, FormData>(
    createUser,
    initialState
  );

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 grid gap-4">
        {/* Nom */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">
            Nom
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Ex: Shimba"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.lastName ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.lastName && (
            <p className="text-sm text-red-500">{state.errors.lastName}</p>
          )}
        </div>

        {/* Prénom */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">
            Prénom
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Ex: Masanza"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.firstName ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.firstName && (
            <p className="text-sm text-red-500">{state.errors.firstName}</p>
          )}
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1">Genre</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="gender" value="MALE" className="mr-1" />
              Homme
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="FEMALE"
                className="mr-1"
              />
              Femme
            </label>
          </div>
          {state.errors?.gender && (
            <p className="text-sm text-red-500">{state.errors.gender}</p>
          )}
        </div>

        {/* Date de naissance */}
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium">
            Date de naissance
          </label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.birthDate ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.birthDate && (
            <p className="text-sm text-red-500">{state.errors.birthDate}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemple@email.com"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.email ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+243..."
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.phone ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.phone && (
            <p className="text-sm text-red-500">{state.errors.phone}</p>
          )}
        </div>

        {/* Nom d'utilisateur */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            Nom d'utilisateur
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="masanza26"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.username ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.username && (
            <p className="text-sm text-red-500">{state.errors.username}</p>
          )}
        </div>

        {/* Mot de passe */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.password ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password}</p>
          )}
        </div>

        {/* Rôle */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium">
            Rôle
          </label>
          <select
            id="role"
            name="role"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.role ? "border-red-500" : "border-gray-200"
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Choisissez un rôle
            </option>
            {allRoles.map((role) => (
              <option key={role} value={role}>
                {{
                  ADMIN: "Administrateur",
                  STUDENT: "Élève",
                  TEACHER: "Enseignant",
                  PARENT: "Parent",
                }[role] || role}
              </option>
            ))}
          </select>
          {state.errors?.role && (
            <p className="text-sm text-red-500">{state.errors.role}</p>
          )}
        </div>

        {/* Adresse */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium">
            Adresse
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Adresse actuelle"
            className={`w-full rounded-md border py-2 px-3 text-sm ${
              state.errors?.address ? "border-red-500" : "border-gray-200"
            }`}
          />
          {state.errors?.address && (
            <p className="text-sm text-red-500">{state.errors.address}</p>
          )}
        </div>

        {state.message && (
          <div className="text-sm text-red-500">{state.message}</div>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Créer l’utilisateur</Button>
      </div>
    </form>
  );
}
