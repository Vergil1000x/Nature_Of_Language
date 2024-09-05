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
  title: "Chapter 4 | English",
};

export default function Chapter_4() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 4 :</div>
        <div className="text-xl">&nbsp; Eingaben : Hören/Lesen</div>
      </div>
      <div className={`${cg.className}`}>
        Once the cluster relations between sounds and letters have been
        established, there remains little to do on the input side. The ability
        to hear the sounds depends on the ability of the brain to associate the
        known chained sounds to the meaning of the word, something which
        requires practice. When heard enough after making a word-sound
        association, a learner will be able to hear meaningful things out of
        supposed gibberish. As far as reading is concerned, the letter-sound
        associations are the only things holding anyone back. Chaining the
        sounds while reading and correcting them according to what the word was
        intended to be pronounced as, will eventually make reading easier.
        Obviously, both input methods require solely your pattern recognition
        with the base of some prerequisite knowledge. The features hence
        incorporated into our base language, or the ‘grammar’ as we may call it,
        consists of the following: नाम(Nouns - Singular, Plural)
        सर्वनाम(Pronouns - 1st, 2nd, 3rd person) क्रियापद(Tenses - Past,
        Present, Future, Order) विशेषण, क्रियाविशेषण(base, comparative,
        superlative forms) विभक्ति(Case + Prepositions) विराम चिन्ह(Punctuation
        - Comma, Fullstop) Try it. Using only these grammatical features, use
        languages you have fluency in and analyse if it falls short anywhere.
        Test it out with other native speakers and see if they actually
        understand what you’re trying to say with this base form. I’m willing to
        bet that you won’t need any other tools at your disposal to communicate
        anything, even though you may be faced with unnecessarily complicated
        and tedious sentences. I’m not saying this is perfect, obviously there’s
        a lot missing here, but the subtleties they control are not enough to
        seriously mar human understanding. But if any one of the mentioned
        features is removed, the language can no longer support all possible
        situations that it should be able to support.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_7" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_5" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
