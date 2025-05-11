import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "200%": "200% 200%",
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
      },

      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },

      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        "kelasi-red": "#CA0914",
        "kelasi-orange": "#E94922",
        "noir-noir": "#1F1F1F",
      },
    },
    keyframes: {
      "gradient-x": {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), scrollbarHide],
  safelist: [
    "text-kelasi-red",
    "hover:text-kelasi-red",
    "bg-kelasi-gradient", // utilisé ci-dessous
  ],
};
export default config;
