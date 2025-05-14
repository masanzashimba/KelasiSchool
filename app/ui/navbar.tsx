"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import KELASI from "@/app/ui/kelasi_logo";
import { poppins } from "@/app/ui/fonts";
import { motion, AnimatePresence } from "framer-motion";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Tableau de bord" },
];

const SERVICES_ITEMS = [
  { href: "/services/admin", label: "Administrateur" },
  { href: "/services/prof", label: "Professeur" },
  { href: "/services/parent", label: "Parents" },
  { href: "/services/etudiant", label: "Étudiant" },
];

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`${poppins.className} bg-white shadow-md fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <KELASI />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link ${
                  isActive ? "nav-link-active" : "nav-link-inactive"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Dropdown avec animation */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[16px] font-semibold text-Noir-noir hover:text-kelasi-red/50">
              Services{" "}
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 z-50"
                >
                  {SERVICES_ITEMS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <SignedIn>
            <div className="clerk-user-button">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10", // Taille augmentée
                  },
                }}
              />
            </div>
          </SignedIn>

          <SignedOut>
            <SignUpButton mode="modal">
              <button className="btn-connexion">S'inscrire</button>
            </SignUpButton>

            <SignInButton mode="modal">
              <button className="btn-connexion">Se connecter</button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Menu mobile"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white shadow-md px-6 py-4 space-y-3 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
        }`}
      >
        {NAV_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block text-gray-700 text-base hover:text-kelasi-red"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
        <div>
          <span className="block text-gray-900 font-medium mb-1">Services</span>
          {SERVICES_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block pl-4 text-gray-600 hover:text-kelasi-red"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        <SignedIn>
          <div className="flex justify-center">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10", // Même taille que desktop
                },
              }}
            />
          </div>
        </SignedIn>

        <SignedOut>
          <SignUpButton mode="modal">
            <button className="block btn-connexion w-full">S'inscrire</button>
          </SignUpButton>

          <SignInButton mode="modal">
            <button className="block btn-connexion w-full mt-2">
              Se connecter
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
