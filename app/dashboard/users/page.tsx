import Search from "@/app/ui/search";
import { UsersTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import UsersTable from "@/app/ui/users/table";
import { CreateUser } from "@/app/ui/users/buttons";
import Pagination from "@/app/ui/users/pagination";
import RoleFilter from "@/app/ui/users/role-filter";
import { fetchUsersPages } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    role?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const role = searchParams?.role || "";

  const totalPages = await fetchUsersPages(query, role);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Utilisateurs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher utilisateurs..." />
        <div className="flex gap-2">
          <RoleFilter currentRole={role} />
          <CreateUser />
        </div>
      </div>

      <Suspense
        key={`${query}-${currentPage}-${role}`}
        fallback={<UsersTableSkeleton />}
      >
        <UsersTable query={query} currentPage={currentPage} roleFilter={role} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
