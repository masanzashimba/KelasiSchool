import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { titillium_Web } from "@/app/ui/fonts";

export default function KELASI() {
  return (
    <div
      className={`${titillium_Web.className} flex flex-row items-center leading-none font-bold text-[45px] w-[209px] h-[59px]`}
      style={{
        background: "linear-gradient(91.74deg, #BA2138 38.29%, #2BAA97 92.61%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] text-kelasi-red" />
      <p className="text-[44px]">KELASI</p>
    </div>
  );
}
