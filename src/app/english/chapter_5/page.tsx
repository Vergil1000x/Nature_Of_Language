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
  title: "Chapter 5 | English",
};

export default function Chapter_5() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 5 :</div>
        <div className="text-xl">&nbsp; Wie lernt man eine Sprache?</div>
      </div>
      <div className={`${cg.className}`}>
        Now that the most basic requirements for the creation of a language have
        been established, it is time to return to the basic question: How to
        language? And more importantly, what have these previous pages even
        achieved? The elements of this basic language explain what fundamental
        components a language truly needs as grammar in terms of rules. Tourists
        may easily communicate with locals using this framework at the cost of
        sounding like a moron, assuming they train their ears to comprehend
        speech well. To go beyond mere make do behaviour(and you should to avoid
        adopting bad and ungrammatical habits), further development must be
        carried upon this base language to match the forms of your target
        language, and identify the areas where complexities, whether necessary
        or unnecessary have arisen. As such, depending on the nature of your
        target language, it will present different challenges. Each of the base
        categories will first be expanded into more detail based on the grammar
        of the target language. Some of these are frequent: conjunctions, verb
        conjugations, figures of speech, articles and a plethora of other
        things. Doing this will allow you to efficiently learn all the
        surrounding grammar rules which may or may not be simple, and help you
        realise a critical thing: The soul of the target language. Every
        language has an individuality, which cannot be translated word to word
        to another with a different personality. This personality is hidden in
        its core grammar, pronunciation and the way words are formed.
        Understanding this will help you automatically link things you don’t
        even know need to be linked. This is a phase where as you learn all the
        different grammar rules of the new language, you must make an important
        decision frequently: must I learn this rule or leave it up to pattern
        recognition? A simple rule takes care of this: if the concept has a
        logical base, learn the rule then look for patterns. If there is little
        or no logical base, let pattern recognition work its magic alone.
        Incorporating this systematic base of rules that govern a language and
        make it understandable will help you grasp things much faster than
        relying solely on input. Let us take the example of English in order to
        understand what this means. Firstly, English has scarce unique
        letter-sound clusters, making it phonetically inconsistent and a
        consequent hellscape for new learners. It is a tragedy that it
        eventually became a world language. The best way to proceed is to leave
        these exceptions to pattern recognition after learning the basic
        associations. Conjunctions to join sentences have specific rules behind
        each one. Verb conjugations have certain set patterns, yet many
        exceptions. Blend both methods again, since this language uses syntax
        rather than विभक्ति for solving the multiple subject problem. Each
        language has the same essential structure, and it helps to use this for
        the learning process. Many readers might still not be convinced. Why
        this entire text to find out such an obvious result? It’s quite obvious
        that blending both methods was the way to go, no? Yes, but to what
        extent should they be blended is not always as obvious? Most language
        courses involve basic phrases along with some grammatical rules, and I
        believe that this doesn’t really introduce you to the language, it
        merely teaches how to use it and survive. The real introduction to any
        language may only be acquired when one meets its soul, understands its
        inner workings and thereby becomes able to guess how unknown words might
        work together. For example, guessing the genders of words or whether a
        verb conjugates regularly or is an exception, and what kind of
        exceptional conjugation might it have. Turns out, there is a pattern in
        almost everything, since the same brains that love patterns have been
        responsible for creating all these languages. It is not possible to
        translate languages into each other word for word, but it is possible to
        say everything in every language. On undertaking such a detailed
        analysis of your target language, it then becomes possible to switch
        between languages easily, since your internal workings change the nature
        of your thought process to adopt the soul of that language. This will
        not only reduce the chances of mixing them, especially for
        multilinguals, but also allow you to reach fluency earlier and
        concretely. The only hitch then would be the vocabulary which… will
        always remain a matter of time. There’s no way around it. So the most
        general answer to the original question of how to learn a language is
        this: Do NOT rush. Incorrect fundamentals are fatal. Learn the alphabets
        and form the proper letter-sound clusters. If it’s difficult to
        remember, write the character while pronouncing it for days until you
        can remember at least 80% of the characters. Look into the 6 features of
        the base language so derived in this book, and find out how your target
        language has dealt with those problems. This gives you its basic
        structure. Once you have the basic structure, start expanding upon it by
        studying grammar from the beginning to the end(what is considered
        fluency or C2 as per the CEFR) to fill in all possible structural gaps
        between our basic language and the target. Now, you should have the
        entire introduction of the ‘soul’. Make विभक्ति, verb conjugation tables
        etc. in whatever way suits you for quick reference. Add vocabulary:
        Verbs, Adjectives, Adverbs and Nouns. Pronouns, prepositions and some
        other components will be required earlier, hence are not mentioned in
        this step. Keep revising the structure while adding vocabulary, using
        input based pattern learning: Podcasts, News articles, Books etc. Let
        pattern recognition work its magic over the course of however long it
        takes until you can summon sentences as naturally as breathing. At this
        stage, some years have probably passed, but the target language should
        no longer be foreign. It would be unsurprising if you speak with a
        fluency like or greater than your mother tongue. And that’s it. Using
        this method of deep analysis also means that you will be that much more
        unlikely to forget it easily. Now that you have another language under
        your belt, you are now free to travel to and grab the opportunities of
        that place, and all content related to the language is now open to you.
        You may also choose to shock natives by speaking their language with
        greater fluency than them but… maybe that’s just me.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_4" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_6" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
