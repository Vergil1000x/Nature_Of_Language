"use client";
import { Cinzel } from "next/font/google";
import { Cinzel_Decorative } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { useState, useEffect, Component } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const cinzel = Cinzel({ weight: "400", subsets: ["latin"], display: "swap" });
const cinzeldec = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const cg = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
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
    <div className={`bg-neutral-100 overflow-hidden`}>
      <div className="flex sm:flex-row flex-col w-[100vw] min-h-screen items-center justify-evenly">
        <div className="flex flex-col sm:w-[48vw] justify-center p-10">
          <div className={`${cinzel.className} p-3 text-5xl`}>
            Nature Of Language
          </div>
          <div className={`${cg.className} p-3 h-0`}>
            <Typewriter
              options={{
                strings: [
                  "Within those hollow eyes, I have seen joy bloom with the hope of tommorow",
                  "Behind that smiling face, I have seen happiness twined with awaiting death on the morrow",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div
          className={`${cinzel.className} flex flex-col sm:w-[48vw] w-full justify-center items-center sm:p-0 px-4`}
        >
          <Link
            href="/english"
            className={`w-full flex items-center justify-center mx-10 my-3 h-14 rounded-lg relative group scale-95 hover:scale-100 transition-op overflow-hidden shadow-op-down hover:shadow-op-down-eng`}
          >
            <Image
              src="/english.png"
              width={500}
              height={500}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] grayscale-[100%] w-full group-hover:grayscale-0 transition-op duration-300 scale-[101%]"
            />
            <div className="z-10 group-hover:text-xl transition-op">
              English
            </div>
          </Link>
          <div className="flex w-full items-center">
            <div className="grow border-[1px] h-0"></div>
            <div className={`${cinzeldec.className} px-3 text-[10px]`}>
              Choose A Language
            </div>
            <div className="grow border-[1px] h-0"></div>
          </div>
          <Link
            href="/english"
            className={`w-full flex items-center justify-center mx-10 my-3 h-14 rounded-lg relative group scale-95 hover:scale-100 transition-op overflow-hidden shadow-op-down hover:shadow-op-down-ger`}
          >
            <Image
              src="/german.png"
              width={500}
              height={500}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[65%] grayscale-[100%] w-full group-hover:grayscale-0 transition-op duration-300 scale-[101%]"
            />
            <div className="z-10 group-hover:text-xl transition-op">
              Deutsch
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
