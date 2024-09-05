import Link from "next/link";
import { Cinzel } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { title } from "process";

const cinzel = Cinzel({ weight: "400", subsets: ["latin"], display: "swap" });
const cg = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Introduction | English",
};

export default function English() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div
        className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}
      >
        <div>Introduction</div>
      </div>
      <div className={`${cg.className}`}>
        In today’s globalised world, one cannot remain monolingual if he/she
        wants to seriously improve themselves; irrespective of whether in their
        career or personal lives, since each part of the world has its own
        specialty. Every new language is like unlocking DLC of the world: it
        will unlock the opportunities of certain regions, whether for
        travelling, working, learning about various cultures and histories,
        improving self expression, creating code languages with international
        friends or simply improving one&apos;s own brain capacity. With the near
        complete invasion of the entire world, English is a language thrust upon
        most people, aside from their own mother tongue which they naturally
        acquire. But a question that any language learner inevitably finds
        themselves asking is: What is the best way to learn a language?
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op">
          <Link href="/" className="font-[600] active:underline">
            Home
          </Link>
        </div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op">
          <Link
            href="/english/chapter_1"
            className="font-[600] active:underline"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
