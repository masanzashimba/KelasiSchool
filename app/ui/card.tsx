"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LoginButton from "./loginButton";

import { Titillium_Web } from "next/font/google";
import { poppins } from "./fonts";

const titillium = Titillium_Web({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function Card({
  image,
  title,
  description,
  buttonText,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-2 pb-4 flex flex-col items-center space-y-4 w-full md:w-[400px] justify-between"
    >
      <Image
        src={image}
        width={453}
        height={270}
        alt={title}
        className="rounded-lg"
      />
      <h3
        className={`${titillium.className} text-xl font-semibold text-gray-900 text-transparent bg-clip-text`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #1B2E59 12.02%, #2BAA97 64.42%)",
        }}
      >
        {title}
      </h3>
      <p
        className={`${poppins.className}text-gray-600 text-center text-capitalize`}
      >
        {description}
      </p>

      <LoginButton />
    </motion.div>
  );
}
