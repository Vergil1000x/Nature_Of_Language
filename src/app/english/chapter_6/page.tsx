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
  title: "Chapter 6 | English",
};

export default function Chapter_6() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 6 :</div>
        <div className="text-xl">&nbsp; Ausnahmen</div>
      </div>
      <div className={`${cg.className}`}>
        There are rare cases where these steps may need some modification, and
        in particular I am speaking of 2 languages: Japanese(日本語) and
        Chinese(中文). The issue here is that it is impossible to complete the
        first step. These languages have thousands of alphabets, along with too
        much unnecessary complexity. In such cases, only the most basic alphabet
        should be learned, for example the Hiragana(ひらがな) and
        Katakana(カタカナ) script, and the Kanji(感じ) script can be left for
        later. In fact, learning to write them isn’t even relevant, since
        natives themselves struggle and leave it to electronic systems. Only
        pattern recognition becomes important for these. Same is the case with
        their ‘pitch accent’ that often changes the meaning of a word when
        pronounced differently. These oddities also become a part of the souls
        of these languages, and must be known at least partially before moving
        to step 2. Another last tip to consider is that there is a high chance
        that irrespective of how thorough you are, you may miss something from
        an earlier step after moving ahead, and realise it later. This is fine,
        since language acquisition isn’t a linear process anyway. At that time,
        simply learn the rules surrounding the concept, fill in the gaps and
        move on. Eventually, this process will converge and you will have
        sufficient fluency. With that said,
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_5" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/final" className="font-[600] active:underline">Final</Link></div>
      </div>
    </div>
  );
}
