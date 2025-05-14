// app/lib/roles.ts

export const Roles = {
  STUDENT: "STUDENT",
  TEACHER: "TEACHER",
  PARENT: "PARENT",
  ADMIN: "ADMIN",
} as const;

export type Role = keyof typeof Roles; // "STUDENT" | "TEACHER" | etc.

export const allRoles = Object.values(Roles); // ["STUDENT", "TEACHER", ...]
