import { fetchFilteredUsers } from "@/app/lib/data";
import { UserRole } from "@prisma/client";
import { formatDateToLocal } from "@/app/lib/utils";
import { DeleteUser, UpdateUser } from "./buttons";

export default async function UsersTable({
  query,
  currentPage,
  roleFilter,
}: {
  query: string;
  currentPage: number;
  roleFilter: string;
}) {
  const users = await fetchFilteredUsers(query, currentPage, roleFilter);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4 shadow"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">Nom</p>
                    <p className="font-medium">{`${user.lastName} ${user.firstName}`}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rôle</p>
                    <p className="font-medium">{getRoleLabel(user.role)}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email || "N/A"}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user.id} />
                    <DeleteUser id={user.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nom Complet
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Téléphone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rôle
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date de création
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{`${user.lastName} ${user.firstName}`}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email || "N/A"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.phone || "N/A"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getRoleColor(user.role)}`}
                    >
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(user.createdAt.toISOString())}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={user.id} />
                      <DeleteUser id={user.id} />
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

function getRoleLabel(role: UserRole): string {
  switch (role) {
    case "ADMIN":
      return "Administrateur";
    case "TEACHER":
      return "Enseignant";
    case "STUDENT":
      return "Élève";
    case "PARENT":
      return "Parent";
    default:
      return role;
  }
}

function getRoleColor(role: UserRole): string {
  switch (role) {
    case "ADMIN":
      return "bg-purple-100 text-purple-800";
    case "TEACHER":
      return "bg-blue-100 text-blue-800";
    case "STUDENT":
      return "bg-green-100 text-green-800";
    case "PARENT":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
