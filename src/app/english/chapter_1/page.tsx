import Link from "next/link";
import { Cinzel } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

const cinzel = Cinzel({ weight: "400", subsets: ["latin"], display: "swap" });
const cg = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Chapter 1 | English",
};

export default function Chapter_1() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div
        className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}
      >
        <div>Chapter 1 :</div>
        <div className="text-xl">&nbsp; Die Seelen der Sprachen</div>
      </div>
      <div className={`${cg.className}`}>
        The answer varies for different goals: A traveller won’t require full
        proficiency and will make do with basic phrases, whereas a working
        professional will want a deeper understanding. However, care must be
        taken while developing the basics of any topic: these can generally not
        be changed easily once made. As such, it is important to avoid
        developing any bad habits or gaps in knowledge, which may be near
        impossible to find and fill in later, and will keep affecting your
        speech or interpretation. Anyone who has researched and analysed this
        topic enough will have come upon the famous idea of full-immersion:
        wherein you surround yourself with the target language and allow your
        brain to eventually do its thing. Unfortunately, this takes years,
        requires your brain to churn tons of data: most of which may be
        unnecessary, and is still susceptible to flaws. Another method is to
        complement this with basic grammatical structures in order to see how
        the language functions and then make things up as exposure increases.
        Not bad, but I would personally recommend something else entirely, since
        not all grammar is important either. There are certain parts of a
        language that are better interpreted using pattern recognition and some
        that require structural understanding, rather than mere data churning.
        In this linguistic description, I will try to, based on my
        understanding, try to give an efficient algorithm wherein detailed
        proficiency may be achieved while optimising both brain storage and time
        for learning.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_2" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
