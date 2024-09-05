"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cinzel } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import Menu from "@/components/menu";

const cinzel = Cinzel({ weight: "400", subsets: ["latin"], display: "swap" });
const cg = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function LayoutEnglish({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  return (
    <div className={`bg-neutral-100 min-h-[100vh] flex items-center justify-center flex-col h-full relative`} >
      <div className={`sticky top-[35px] w-full lg:hidden flex items-end justify-end h-0 z-40`}><Menu></Menu></div>
      <div className="flex flex-row w-full container grow px-10 items-start justify-center">
        <div className="relative flex md:w-3/4 w-full h-full">
          {children}
        </div>
        <div className={`${cg.className} flex flex-col justify-center top-[90px] sticky lg:w-fit w-0 overflow-hidden lg:border-l-[1px] lg:pl-3 lg:h-fit h-0`}>
          <Link href="/english" className={`${pathname.endsWith("/english")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>Intro</Link>
          <Link href="/english/chapter_1"   className={`${pathname.startsWith("/english/chapter_1")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>    Chapter 1 - Die Seelen der Sprachen</Link>
          <Link href="/english/chapter_2"   className={`${pathname.startsWith("/english/chapter_2")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>    Chapter 2 - Gründe des Algorithmus</Link>
          <Link href="/english/chapter_3"   className={`${pathname.endsWith("/english/chapter_3"  )?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>        Chapter 3 - Ausgaben: Sprechen/Schreiben</Link>
          <Link href="/english/chapter_3_1" className={`${pathname.endsWith("/english/chapter_3_1")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Arten der Töne</Link>
          <Link href="/english/chapter_3_2" className={`${pathname.endsWith("/english/chapter_3_2")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Was ist wichtig?</Link>
          <Link href="/english/chapter_3_3" className={`${pathname.endsWith("/english/chapter_3_3")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Natur des Lebens</Link>
          <Link href="/english/chapter_3_4" className={`${pathname.endsWith("/english/chapter_3_4")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Fälle der Nomen</Link>
          <Link href="/english/chapter_3_5" className={`${pathname.endsWith("/english/chapter_3_5")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Plural, Interpunktion und Artikel</Link>
          <Link href="/english/chapter_3_6" className={`${pathname.endsWith("/english/chapter_3_6")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Präpositionen und Passiv</Link>
          <Link href="/english/chapter_3_7" className={`${pathname.endsWith("/english/chapter_3_7")?"underline font-bold translate-x-2":""} transition-op py-[2px] pl-4`}>     Aufforderungen,Aufträge und mehr</Link>
          <Link href="/english/chapter_4"   className={`${pathname.startsWith("/english/chapter_4")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>    Chapter 4 - Eingaben: Hören/Lesen</Link>
          <Link href="/english/chapter_5"   className={`${pathname.startsWith("/english/chapter_5")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>    Chapter 5 - Wie lernt man eine Sprache?</Link>
          <Link href="/english/chapter_6"   className={`${pathname.startsWith("/english/chapter_6")?"underline font-bold translate-x-2":""} transition-op py-[2px]`}>    Chapter 6 - Ausnahmen</Link>
        </div>
      </div>
    </div>
  );
}
