import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function KELASI() {
  return (
    <div
      className={`${titillium.className} w-[119px] h-[57px] text-[39px] leading-[59px] font-bold bg-gradient-to-r from-[#BA2138] via-[#BA2138] to-[#2BAA97] text-transparent bg-clip-text`}
    >
      KELASI
    </div>
  );
}
