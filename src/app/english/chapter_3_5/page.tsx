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
  title: "Chapter 3.5 | English",
};

export default function Chapter_3_5() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.5 :</div>
        <div className="text-xl">&nbsp; Plural, Interpunktion und Artikel</div>
      </div>
      <div className={`${cg.className}`}>
        Next, let us translate a series of sentences describing something: Boys
        went to the ground. A boy wore a ring. The boy wearing the ring was
        eating. बालकः बालकः बालकः अगच्छ क्रीडाड़गणे बालकः अड़गुलिकम् अधारय अखादय
        बालकः अड़गुलिकम् धारय This is a mess. Remind yourself that I could’ve
        shuffled the entire word order and grouped all the बालकः together,
        throwing everyone for a loop. This is also where it is imperative to
        see, that even within the same sentence, the breaking of the plural unit
        yields disastrous results, especially since if the noun is repeated, 3rd
        person personal pronouns do not exist to distinguish them. This means
        that the repetition of the noun needs to behave like a single unit if it
        is to be understood. Does this mean that the original assumption of
        विभक्ति eliminating the need for syntax was incorrect? Not quite. The
        plural form of a noun has a certain context. When excess words merely
        signifying more of a noun are thrown into different parts of the
        sentence, the brain has difficulty identifying what the first occurrence
        of a noun means. A sentence will then need to be reread multiple times
        if it is complex, in order for different nouns to be parsed.
        Consequently, if repeated nouns signifying the plural form have to
        behave as a single unit for understandability, it now makes sense to
        introduce a separate word form for them, rather than merely repeating
        the noun. Since there are 7 cases, 7 additional word forms per word are
        now added. The other missing thing here is… a pause. Despite the plural
        simplification, sentences can still be mixed into each other. For longer
        paragraphs, psychopaths can throw the last verb somewhere near the
        beginning and make the entire thing legally unreadable. Something that
        signals the demarcation of a sentence and allows for short pauses, to
        avoid breathlessness and separate list items should exist. We therefore
        introduce both the full stop and comma. This is how the new sentence
        would look: बालकाः अगच्छ क्रीडाड़गणे. बालकः अड़गुलिकम् अधारय. अखादय
        बालकः अड़गुलिकम् धारय. Slightly better. Now, we come to something
        slightly more subtle. The English version that was to be translated
        referred to a boy among the ones going to the park in the second
        sentence and it referred to the same boy in the third sentence. The fact
        that the boys are the same is not apparent in our language, since a 3rd
        person pronoun cannot be put in the तृतीया विभक्ति to highlight this.
        There are 2 options: introduce 3rd person pronouns or articles, and
        pronouns have a better solution. Articles allow a general/specific
        reference to one among a class, even when there is no prior context, but
        simple ordinal numbers or 3rd person pronouns can take up this job just
        as well: एकः मानवः धाव. A man runs. सः मानवः धाव. The man runs. The
        effect is essentially the same. Therefore, pronouns of all
        persons(1/2/3) are required. In fact, संस्कृतम् has no particular word
        for ‘the’ unlike Deutsch, yet it manages to be the most precise language
        in the world. This article like extension of the noun forms an
        inseparable unit, since if placed randomly, it may get referenced with
        another noun or go out of context.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_4" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_6" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
