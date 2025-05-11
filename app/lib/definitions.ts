// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};

export type Revenue = {
  month: string;
  revenue: number;
};
export interface LatestLesson {
  id: string;
  title: string;
  createdAt: string | Date;
  subject?: {
    name: string;
  };
  teacher?: {
    name: string;
  };
}

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};
// types/definitions.ts
export type LessonField = {
  id: string;
  title: string;
};

export type SubjectField = {
  id: string;
  name: string;
};

export interface LessonFormState {
  errors?: {
    title?: string[];
    content?: string[];
    subjectId?: string[];
  };
  message: string | null; // Déclaré comme obligatoire
  success?: boolean;
}

export type LessonsTable = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  subject: {
    id: string;
    name: string;
  };
};

export type LatestLessonRaw = {
  id: string;
  title: string;
  subject: {
    name: string;
  };
  createdAt: Date;
};
export type LessonState = {
  errors?: {
    title?: string[];
    content?: string[];
    subjectId?: string[];
  };
  message: string; // Toujours string, pas null
  success?: boolean;
};
