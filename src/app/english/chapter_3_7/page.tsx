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
  title: "Chapter 3.7 | English",
};

export default function Chapter_3_7() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.7 :</div>
        <div className="text-xl">&nbsp; Aufforderungen, Aufträge und mehr</div>
      </div>
      <div className={`${cg.className}`}>
        What must we do to ask or order someone to do something in our language?
        So far, we have introduced the tenses, but never defined a feature to do
        this. Note that an order or request is essentially related to the way
        something is spoken or supposed to be done, rather than being related to
        any nouns. Consequently, a change in the verb is the best way to portray
        this information. Ex: बालके गच्छन्तु. Go to the boy. कृपया बालके
        गच्छन्तु. Please go to the boy. It is possible to introduce a separate
        verb form merely for eliminating the usage of words like कृपया, but not
        necessary. There is an interesting observation to be made here though:
        In both the aforementioned sentences, there is nothing defining how many
        people the order has been given to. A 2nd person pronoun like त्वम् may
        be added for the purpose, but a certain connection between the verb and
        noun becomes evident. There is no necessity to modify the verb form for
        the singular and plural forms of the doer in each person, yet if we do,
        then there is no longer a need to write the subject anymore, since the
        unique form of the verb itself clarifies what the context is. The
        following examples are from pure संस्कृतम् Ex: किम् वदसि? What are you
        saying? किम् वदथ? What are you all saying? पुस्तकात् अध्ययनं करोमि. I am
        studying from the book. Doing so is more along the lines of
        beautification and adding additional context to each sentence aside from
        the subject, and most languages tend to have this feature. We will NOT.
        There also comes the question of conjunctions, but that may be handled
        by creating multiple repetitive sentences. Tedious, but possible.
        Comparisons may be handled using adjective / adverb forms. Our base
        language is almost complete.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_6" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_4" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
