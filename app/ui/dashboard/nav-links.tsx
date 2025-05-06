"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  ArchiveBoxIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Tableau de bord", href: "/dashboard", icon: HomeIcon },
  {
    name: "Personnes",
    href: "/dashboard/personnes",
    icon: UserGroupIcon,
  },
  {
    name: "Cours",
    href: "/dashboard/cours",
    icon: AcademicCapIcon,
  },
  {
    name: "Evaluations",
    href: "/dashboard/evaluation",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Présences",
    href: "/dashboard/presence",
    icon: ClockIcon,
  },
  {
    name: "Finances",
    href: "/dashboard/finance",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Paiements",
    href: "/dashboard/paiement",
    icon: CreditCardIcon,
  },
  {
    name: "Communications",
    href: "/dashboard/communication",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Archives",
    href: "/dashboard/archives",
    icon: ArchiveBoxIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-sm bg-white p-3 text-sm font-medium hover:bg-kelasi-red/5 hover:text-kelasi-red md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-kelasi-red/5 text-kelasi-red border-b-2 border-kelasi-red":
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
