import Image from "next/image";
import LoginButton from "./loginButton";
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export function Header() {
  return (
    <header className="w-full px-6 py-12 md:px-20 flex flex-col md:flex-row items-center justify-between bg-white">
      {/* Texte à gauche */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1
          className={`${titillium.className} text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-[length:200%] animate-gradient-x`}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1B2E59 12.02%, #2BAA97 64.42%)",
          }}
        >
          Kelasi, Gérons la vie scolaire de nos enfants
        </h1>

        <p className="text-gray-700 text-lg md:text-xl">
          Kelasi vous accompagne dans la gestion scolaire avec une solution
          complète, moderne et facile à utiliser pour tous les acteurs de
          l’école.
        </p>
        <div className="flex justify-center md:justify-start">
          <LoginButton />
        </div>
      </div>

      {/* Image à droite */}
      <div className=" mt-10 md:mt-0 md:ml-10 flex justify-center">
        <div>
          <Image
            src="/child.png"
            width={330}
            height={539}
            alt="Enfant"
            className="rounded-lg "
          />
        </div>
      </div>
    </header>
  );
}
