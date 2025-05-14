"use client";
import { useFormState } from "react-dom";

import Link from "next/link";
import {
  EnvelopeIcon,
  UserIcon,
  KeyIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { User } from "@prisma/client";
import { createUser, updateUser, UserFormState } from "@/app/lib/actions";

const initialState: UserFormState = {
  message: "",
  errors: {},
  success: false,
};

export default function UserForm({ user }: { user?: User }) {
  const action = user
    ? (prevState: UserFormState, formData: FormData) =>
        updateUser(user.id, prevState, formData)
    : createUser;

  const [state, dispatch] = useFormState<UserFormState, FormData>(
    action,
    initialState
  );
  return (
    <form action={dispatch} className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {user ? "Modifier Utilisateur" : "Créer Nouvel Utilisateur"}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Nom */}
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <IdentificationIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                defaultValue={user?.lastName}
                placeholder="Ex: Shimba"
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.lastName ? "ring-red-500" : ""
                }`}
                aria-describedby="lastName-error"
              />
            </div>
            {state.errors?.lastName && (
              <p id="lastName-error" className="mt-2 text-sm text-red-600">
                {state.errors.lastName.join(", ")}
              </p>
            )}
          </div>

          {/* Prénom */}
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <IdentificationIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                defaultValue={user?.firstName}
                placeholder="Ex: Masanza"
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.firstName ? "ring-red-500" : ""
                }`}
                aria-describedby="firstName-error"
              />
            </div>
            {state.errors?.firstName && (
              <p id="firstName-error" className="mt-2 text-sm text-red-600">
                {state.errors.firstName.join(", ")}
              </p>
            )}
          </div>

          {/* Genre */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="MALE"
                  defaultChecked={user?.gender === "MALE"}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Homme</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="FEMALE"
                  defaultChecked={user?.gender === "FEMALE"}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Femme</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="OTHER"
                  defaultChecked={user?.gender === "OTHER"}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Autre</span>
              </label>
            </div>
            {state.errors?.gender && (
              <p className="mt-2 text-sm text-red-600">
                {state.errors.gender.join(", ")}
              </p>
            )}
          </div>

          {/* Date de naissance */}
          <div className="space-y-2">
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date de naissance
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                defaultValue={
                  user?.birthDate
                    ? new Date(user.birthDate).toISOString().split("T")[0]
                    : ""
                }
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.birthDate ? "ring-red-500" : ""
                }`}
                aria-describedby="birthDate-error"
              />
            </div>
            {state.errors?.birthDate && (
              <p id="birthDate-error" className="mt-2 text-sm text-red-600">
                {state.errors.birthDate.join(", ")}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email || ""}
                placeholder="exemple@email.com"
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.email ? "ring-red-500" : ""
                }`}
                aria-describedby="email-error"
              />
            </div>
            {state.errors?.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {state.errors.email.join(", ")}
              </p>
            )}
          </div>

          {/* Téléphone */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Téléphone
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={user?.phone || ""}
                placeholder="+243..."
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.phone ? "ring-red-500" : ""
                }`}
                aria-describedby="phone-error"
              />
            </div>
            {state.errors?.phone && (
              <p id="phone-error" className="mt-2 text-sm text-red-600">
                {state.errors.phone.join(", ")}
              </p>
            )}
          </div>

          {/* Nom d'utilisateur */}
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nom d'utilisateur
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={user?.username || ""}
                placeholder="masanza26"
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.username ? "ring-red-500" : ""
                }`}
                aria-describedby="username-error"
              />
            </div>
            {state.errors?.username && (
              <p id="username-error" className="mt-2 text-sm text-red-600">
                {state.errors.username.join(", ")}
              </p>
            )}
          </div>

          {/* Mot de passe (seulement pour la création) */}
          {!user && (
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <KeyIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                    state.errors?.password ? "ring-red-500" : ""
                  }`}
                  aria-describedby="password-error"
                />
              </div>
              {state.errors?.password && (
                <p id="password-error" className="mt-2 text-sm text-red-600">
                  {state.errors.password.join(", ")}
                </p>
              )}
            </div>
          )}

          {/* Rôle */}
          <div className="space-y-2">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Rôle
            </label>
            <select
              id="role"
              name="role"
              defaultValue={user?.role || ""}
              className={`block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                state.errors?.role ? "ring-red-500" : ""
              }`}
              aria-describedby="role-error"
            >
              <option value="" disabled>
                Choisissez un rôle
              </option>
              <option value="ADMIN">Administrateur</option>
              <option value="TEACHER">Enseignant</option>
              <option value="STUDENT">Élève</option>
              <option value="PARENT">Parent</option>
            </select>
            {state.errors?.role && (
              <p id="role-error" className="mt-2 text-sm text-red-600">
                {state.errors.role.join(", ")}
              </p>
            )}
          </div>

          {/* Adresse */}
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="address"
                name="address"
                type="text"
                defaultValue={user?.address || ""}
                placeholder="Adresse actuelle"
                className={`block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 ${
                  state.errors?.address ? "ring-red-500" : ""
                }`}
                aria-describedby="address-error"
              />
            </div>
            {state.errors?.address && (
              <p id="address-error" className="mt-2 text-sm text-red-600">
                {state.errors.address.join(", ")}
              </p>
            )}
          </div>
        </div>

        {state.message && (
          <p className="mt-4 text-sm text-red-600">{state.message}</p>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">
          {user ? "Mettre à jour" : "Créer"} l'utilisateur
        </Button>
      </div>
    </form>
  );
}
