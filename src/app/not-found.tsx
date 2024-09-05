"use client";
import Image from "next/image";
import { Cinzel, Cormorant_Garamond, Six_Caps } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const cn = Cinzel({ weight: "400", subsets: ["latin"], display: "swap" });
const scap = Six_Caps({ weight: "400", subsets: ["latin"], display: "swap" });
const cg = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden relative z-50"
    >
      <Image
        src="/sukuna.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="absolute brightness-[25%] w-full select-none"
      />
      <div
        className={`${scap.className} sm:text-9xl text-5xl z-10 text-red-600`}
      >
        Ayo!
      </div>
      <div className={`${cn.className} text-base z-10 text-red-600`}>
        Know your place...
      </div>
      <div
        className={`${cg.className} text-2xl z-10 text-white underline py-5`}
      >
        <Link href="/" className={`${cg.className}`}>You: I wanna go home...</Link>
      </div>
    </motion.div>
  );
}
