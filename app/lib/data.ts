import postgres from "postgres";
import { Prisma, UserRole } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
} from "./definitions";

import { formatCurrency } from "./utils";
import { prisma } from "./prisma";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ITEMS_PER_PAGE = 6;

// ─────────────────────────────────────────────────────────────
// 🧾 INVOICES
// ─────────────────────────────────────────────────────────────

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable[]>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return invoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
    `;
    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm[]>`
      SELECT id, customer_id, amount, status
      FROM invoices
      WHERE id = ${id}
    `;
    return { ...data[0], amount: data[0].amount / 100 };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

// ─────────────────────────────────────────────────────────────
// 👤 CUSTOMERS
// ─────────────────────────────────────────────────────────────

export async function fetchCustomers() {
  try {
    return await sql<CustomerField[]>`
      SELECT id, name FROM customers ORDER BY name ASC
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType[]>`
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url,
        COUNT(invoices.id) AS total_invoices,
        SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
        SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
      FROM customers
      LEFT JOIN invoices ON customers.id = invoices.customer_id
      WHERE customers.name ILIKE ${`%${query}%`} OR customers.email ILIKE ${`%${query}%`}
      GROUP BY customers.id, customers.name, customers.email, customers.image_url
      ORDER BY customers.name ASC
    `;

    return data.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customer table.");
  }
}

// ─────────────────────────────────────────────────────────────
// 📚 LESSONS
// ─────────────────────────────────────────────────────────────

export async function fetchLatestLessons() {
  try {
    return await prisma.lesson.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { subject: true },
    });
  } catch (error) {
    console.error("Erreur Prisma:", error);
    throw new Error("Échec de la récupération des dernières leçons.");
  }
}

export async function fetchFilteredLessons(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    return await prisma.lesson.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          { subject: { name: { contains: query, mode: "insensitive" } } },
        ],
      },
      orderBy: { createdAt: "desc" },
      include: { subject: true },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Échec de la récupération des cours.");
  }
}

export async function fetchLessonsPages(query: string) {
  try {
    const count = await prisma.lesson.count({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          { subject: { name: { contains: query, mode: "insensitive" } } },
        ],
      },
    });

    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Échec du calcul du nombre total de pages de cours.");
  }
}

export async function fetchLessonById(id: string) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: { subject: true },
    });

    if (!lesson) throw new Error("Cours non trouvé");
    return lesson;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Échec de la récupération du cours.");
  }
}

export async function fetchSubjects() {
  try {
    return await prisma.subject.findMany({ orderBy: { name: "asc" } });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Échec de la récupération des sujets.");
  }
}

// ─────────────────────────────────────────────────────────────
// 📊 DASHBOARD
// ─────────────────────────────────────────────────────────────

export async function fetchDashboardStats() {
  try {
    const totalLessons = await prisma.lesson.count();
    const usersByRole = await prisma.user.groupBy({
      by: ["role"],
      _count: { role: true },
    });

    return { totalLessons, usersByRole };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch dashboard statistics.");
  }
}

// ─────────────────────────────────────────────────────────────
// 👥 USERS (PRISMA)
// ─────────────────────────────────────────────────────────────

export async function fetchFilteredUsers(
  query: string,
  currentPage: number,
  roleFilter: string
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    return await prisma.user.findMany({
      where: {
        AND: [
          {
            OR: [
              { lastName: { contains: query, mode: "insensitive" } },
              { firstName: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
              { phone: { contains: query, mode: "insensitive" } },
            ],
          },
          roleFilter ? { role: roleFilter as UserRole } : {},
        ],
      },
      orderBy: { createdAt: "desc" },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchUsersPages(query: string, roleFilter: string) {
  noStore();
  try {
    const count = await prisma.user.count({
      where: {
        AND: [
          {
            OR: [
              { lastName: { contains: query, mode: "insensitive" } },
              { firstName: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
              { phone: { contains: query, mode: "insensitive" } },
            ],
          },
          roleFilter ? { role: roleFilter as UserRole } : {},
        ],
      },
    });

    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

export async function fetchUserById(id: string) {
  noStore();
  try {
    return await prisma.user.findUnique({ where: { id } });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
}

// ─────────────────────────────────────────────────────────────
// 📝 Notes
// ─────────────────────────────────────────────────────────────

// 🔸 Tu peux réactiver les blocs commentés (anciens fetchs SQL) si besoin
// 🔸 Tous les appels utilisent des messages d’erreur clairs + logging
// 🔸 Prisma & SQL sont utilisés en parallèle — bien penser à unifier à terme
