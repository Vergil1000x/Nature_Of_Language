"use client";
import { useState, useEffect, Component } from "react";
import { Cinzel_Decorative, Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const cinzel_dec = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y:"5%", rotateX:"5deg", transformPerspective:500  }}
      animate={{ opacity: 1, y:"0%", rotateX:"0deg", transformPerspective:500  }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="opacity-95"
    >
      <div className={`${cinzel_dec.className} p-3 flex items-center justify-center transition-op2 w-full rounded-b-xl bg-neutral-100 ${scroll ? "shadow-op-down-head bg-neutral-50" : ""}`}>
        <div className="grow lg:text-center sm:px-10">
          <Link href="/">Nature Of Language</Link>
        </div>
      </div>
    </motion.div>
  );
}
