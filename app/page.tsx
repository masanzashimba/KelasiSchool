import KELASI from "@/app/ui/kelasi_logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana, poppins } from "@/app/ui/fonts";
import Image from "next/image";
import { UserButton } from "@stackframe/stack";
import Navbar from "./ui/navbar";
import { Header } from "./ui/header";
import SectionCard from "./ui/sectionCard";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar />

      <div>
        <Header />
      </div>
      <SectionCard />

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${poppins.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Bienvenue chez KELASI.</strong> Gérons l'avenir intellectuel
            de nos enfants
            <a href="https://nextjs.org/learn/" className="text-kelasi-red">
              En savoir plus sur Nous!
            </a>
            , Accéder au tableau de bord et commencer.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-kelasi-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-kelasi-red/30 md:text-base"
          >
            <span>
              Se connecter
              <UserButton />
            </span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/children.jpg"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
