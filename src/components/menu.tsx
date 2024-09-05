"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Cinzel } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const cg = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Menu() {
  const pathname = usePathname()||"";
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  

  return (
    <div ref={menuRef} className={`${isOpen ? "open" : ""} ${cg.className} relative mr-3`}>
      <div className={``} onClick={toggleMenu}>
        <div className={`${isOpen ? "opacity-0 scale-0":"rotate-90 scale-100"} transition-op`}>|||</div>
      </div>
      <div className={`${isOpen ? "scale-100 translate-x-0 translate-y-0" : "scale-0 translate-x-[50%] translate-y-[-50%]"} flex flex-col px-2 absolute top-0 right-0 w-[295px] bg-neutral-50 rounded-xl transition-op shadow-op-down`}>
          <div className={`absolute top-0 right-[10px] rotate-45 text-3xl z-50`} onClick={closeMenu}>+</div>
          <Link href="/english" className={`${pathname.endsWith("/english")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>Intro</Link>
          <Link href="/english/chapter_1"   className={`${pathname.endsWith("/english/chapter_1"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>          Chapter 1 - Die Seelen der Sprachen</Link>
          <Link href="/english/chapter_2"   className={`${pathname.endsWith("/english/chapter_2"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>          Chapter 2 - Gründe des Algorithmus</Link>
          <Link href="/english/chapter_3"   className={`${pathname.endsWith("/english/chapter_3"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>          Chapter 3 - Ausgaben: Sprechen/Schreiben</Link>
          <Link href="/english/chapter_3_1" className={`${pathname.endsWith("/english/chapter_3_1")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Arten der Töne</Link>
          <Link href="/english/chapter_3_2" className={`${pathname.endsWith("/english/chapter_3_2")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Was ist wichtig?</Link>
          <Link href="/english/chapter_3_3" className={`${pathname.endsWith("/english/chapter_3_3")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Natur des Lebens</Link>
          <Link href="/english/chapter_3_4" className={`${pathname.endsWith("/english/chapter_3_4")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Fälle der Nomen</Link>
          <Link href="/english/chapter_3_5" className={`${pathname.endsWith("/english/chapter_3_5")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Plural, Interpunktion und Artikel</Link>
          <Link href="/english/chapter_3_6" className={`${pathname.endsWith("/english/chapter_3_6")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Präpositionen und Passiv</Link>
          <Link href="/english/chapter_3_7" className={`${pathname.endsWith("/english/chapter_3_7")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Aufforderungen,Aufträge und mehr</Link>
          <Link href="/english/chapter_4"   className={`${pathname.endsWith("/english/chapter_4"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>          Chapter 4 - Eingaben: Hören/Lesen</Link>
          <Link href="/english/chapter_5"   className={`${pathname.endsWith("/english/chapter_5"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>          Chapter 5 - Wie lernt man eine Sprache?</Link>
          <Link href="/english/chapter_6"   className={`${pathname.endsWith("/english/chapter_6"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>          Chapter 6 - Ausnahmen</Link>
      </div>
    </div>
  );
}
