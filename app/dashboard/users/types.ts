import { User, UserRole, Gender, StudentParentRelation } from "@prisma/client";

export type UserWithRelations = User & {
  children?: (StudentParentRelation & { student: User })[];
  parents?: (StudentParentRelation & { parent: User })[];
  taughtClasses?: any[];
  taughtSubjects?: any[];
};

export type UserFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: UserRole;
  gender: Gender;
  birthDate: Date;
  address?: string;
  password?: string;
  confirmPassword?: string;
};

export type UserTableColumn = {
  id: keyof User | "actions";
  header: string;
  cell?: (value: any, row: User) => React.ReactNode;
};

export type UserWithFamilyRelations = User & {
  children: User[];
  parents: User[];
};

export type CreateUserData = Omit<User, "id" | "createdAt" | "updatedAt"> & {
  passwordHash: string;
};
