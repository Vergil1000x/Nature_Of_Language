import { Cinzel } from "next/font/google";
import Image from "next/image";

const inter = Cinzel({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "I know the way...",
};

export default function Zoro() {
  return (
    <div
      className={`${inter.className} lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-center h-[100vh] flex justify-center items-center bg-white`}
    >
      <div className="relative overflow-hidden">
        I&apos;m Everywhere
        <Image
          src="/zoro.jpeg"
          alt=""
          width={500} height={300}
          className="absolute top-[-11px] mix-blend-lighten w-[100vw] h-full"
        />
      </div>
    </div>
  );
}
