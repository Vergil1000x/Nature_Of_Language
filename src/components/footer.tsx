"use client";
import { Cinzel_Decorative, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
const cinzel_dec = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "5%",
        rotateX: "5deg",
        transformPerspective: 500,
      }}
      animate={{
        opacity: 1,
        y: "0%",
        rotateX: "0deg",
        transformPerspective: 500,
      }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`${cinzel_dec.className} p-3 flex items-center justify-center transition-op2 w-full rounded-t-xl bg-neutral-100`}
    >
      <div className="w-full grow border-[1px] mx-3"></div>
      <Link
        href="https://www.linkedin.com/in/ojas-sevekar/"
        className="px-1 grayscale-[100%] scale-50 transition-op hover:scale-100 hover:grayscale-0"
      >
        <Image
          src="/linkedin.png"
          width={50}
          height={50}
          alt=""
          className=""
        />
      </Link>
      <Link
        href="https://www.instagram.com/sajo141/"
        className="px-1 grayscale-[100%] scale-50 transition-op hover:scale-100 hover:grayscale-0"
      >
        <Image
          src="/instagram.png"
          width={50}
          height={50}
          alt=""
          className=""
        />
      </Link>
      <Link
        href="mailto:ojas.sevekar.mec20@itbhu.ac.in?subject=Hello&body=How are you?"
        className="px-1 grayscale-[100%] scale-50 transition-op hover:scale-100 hover:grayscale-0"
      >
        <Image
          src="/mail.png"
          width={50}
          height={50}
          alt=""
          className=""
        />
      </Link>
      <Link
        href="https://github.com/Vergil1000x/Nature_Of_Language"
        className="px-1 grayscale-[100%] scale-50 transition-op hover:scale-100 hover:grayscale-0"
      >
        <Image
          src="/github.png"
          width={50}
          height={50}
          alt=""
          className=""
        />
      </Link>
    </motion.div>
  );
}
