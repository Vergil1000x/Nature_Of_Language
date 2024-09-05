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
  title: "Chapter 3.6 | English",
};

export default function Chapter_3_6() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.6 :</div>
        <div className="text-xl">&nbsp; Präpositionen und Passiv</div>
      </div>
      <div className={`${cg.className}`}>
        Consider some sentences: वृक्षे वानरः गच्छ. The monkey goes to the
        tree/inside the tree. A man sat in front of the tree A man placed a
        flower beside the tree The idea of being ‘in front of’ or ‘beside’ is
        not defined in any विभक्ति and thus cannot be translated by us. Words
        are required to describe relative position of nouns with respect to each
        other : Prepositions. One may argue that विभक्ति was supposed to
        eliminate this limitation. Technically, it does, since the context of
        going to or into something(सप्तमी) and that of emerging from
        something(पञ्चमी) are quite common. Even if you don’t agree with that
        and want to eliminate these 2 cases entirely, that’s totally fine, but
        consider something first… similar to the problem with plural forms or
        3rd person pronouns functioning as articles, prepositions cannot be
        decoupled from the nouns they are ascribed to, and essentially end up
        forming an inseparable unit anyway. This means that they’re no different
        than an undefined विभक्ति on their own. On analysing languages they have
        fluency in, readers might be beginning to realise that these units exist
        everywhere, albeit in different forms. A useful contraction feature that
        every language should support is to allow descriptions, wherein the doer
        is either unknown or unimportant. For example, if someone reports a
        robbery, they would be forced to use a placebo doer for every sentence.
        Ex: ‘An unknown person broke into my house. He took my valuables. He hit
        me.’ This isn’t ideal, but it’s not necessary to change this. We will
        hence NOT be including the passive voice.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_5" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_7" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
