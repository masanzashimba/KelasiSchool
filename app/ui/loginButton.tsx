// app/ui/LoginButton.tsx

"use client";

import { UserButton } from "@stackframe/stack";

export default function LoginButton() {
  return (
    <div className="flex items-center justify-center px-4 py-2 gap-3 w-[140px] h-[40px] bg-gradient-to-r from-[#CA0914] to-[#E94922] rounded-full text-white font-semibold hover:opacity-90 transition">
      <UserButton />
    </div>
    // <button className="flex items-center justify-center px-4 py-2 gap-3 w-[140px] h-[40px] bg-gradient-to-r from-[#CA0914] to-[#E94922] rounded-full text-white font-semibold hover:opacity-90 transition">
    //   Se connecter
    // </button>
  );
}
