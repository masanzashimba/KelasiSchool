"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { allRoles } from "@/app/lib/role";

export default function RoleFilter({ currentRole }: { currentRole: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilter = (role: string) => {
    const params = new URLSearchParams(searchParams);
    if (role) {
      params.set("role", role);
    } else {
      params.delete("role");
    }
    params.delete("page"); // Reset to first page
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="role-filter" className="text-sm font-medium">
        Filtrer par rôle:
      </label>
      <select
        id="role-filter"
        value={currentRole}
        onChange={(e) => handleFilter(e.target.value)}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Tous les rôles</option>
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
    </div>
  );
}
