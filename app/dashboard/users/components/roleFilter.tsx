"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { UserRole } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function RoleFilter({
  initialValue,
}: {
  initialValue?: UserRole | "ALL";
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "ALL") {
      params.delete("role");
    } else {
      params.set("role", value);
    }

    router.push(`/users?${params.toString()}`);
  };

  return (
    <Select value={initialValue || "ALL"} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filtrer par rôle" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ALL">Tous les rôles</SelectItem>
        <SelectItem value={UserRole.STUDENT}>Élèves</SelectItem>
        <SelectItem value={UserRole.TEACHER}>Professeurs</SelectItem>
        <SelectItem value={UserRole.PARENT}>Parents</SelectItem>
        <SelectItem value={UserRole.ADMIN}>Administrateurs</SelectItem>
      </SelectContent>
    </Select>
  );
}
