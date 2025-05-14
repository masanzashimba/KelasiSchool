"use client";

import { User, UserRole } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "./ui/button";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "firstName",
    header: "Prénom",
  },
  {
    accessorKey: "lastName",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Rôle",
    cell: ({ row }) => {
      const role = row.getValue("role") as UserRole;

      const roleMap = {
        [UserRole.STUDENT]: {
          label: "Élève",
          color: "bg-blue-100 text-blue-800",
        },
        [UserRole.TEACHER]: {
          label: "Professeur",
          color: "bg-purple-100 text-purple-800",
        },
        [UserRole.PARENT]: {
          label: "Parent",
          color: "bg-green-100 text-green-800",
        },
        [UserRole.ADMIN]: { label: "Admin", color: "bg-red-100 text-red-800" },
      };

      return (
        <Badge className={roleMap[role].color}>{roleMap[role].label}</Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date de création",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return format(date, "PP", { locale: fr });
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/users/${user.id}`}>Voir détails</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/users/${user.id}/edit`}>Modifier</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
