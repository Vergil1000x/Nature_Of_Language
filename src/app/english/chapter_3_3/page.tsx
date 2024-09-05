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
  title: "Chapter 3.3 | English",
};

export default function Chapter_3_3() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.3 :</div>
        <div className="text-xl">&nbsp; Natur des Lebens</div>
      </div>
      <div className={`${cg.className}`}>
        All things in life come in varying degrees of goodness. And a language
        must support this reality: words are required that compare and contrast
        different nouns/verbs and expound upon their qualities and attributes.
        These words are adjectives(विशेषण) / adverbs(क्रियाविशेषण). These words
        can be differentiated from nouns easily, since they refer to qualities
        rather than any idea. Ex: कुक्करः चतुरः अस् Dog is clever नर्तकः
        उत्कृष्ट नृत्य Dancer good dancing बालकः शनैः चालय Boy slowly walking
        Another modification may be made to represent their degrees, but this
        may also be defined using words that indicate ‘more’ or ‘most. Ex:
        good/better/best उत्तम/अधिक उत्तम/अधिकतम उत्तम As with plural, these
        words cannot be decoupled, so it makes sense to change the words
        themselves instead of doing this. उत्तम/श्रेष्ठम/सर्वश्रेष्ठम Returning
        to the sentences, they have limited functionality. There is a single
        doer who does something, but there is absolutely no information about
        the receiver of his deeds, the nature of interaction, how he/she does
        this or about its consequences. Say we want to say a fire burned down a
        man’s house: अग्निः मानवः गृहः दह अग्निः गृहः मानवः दह दह मानवः अग्निः
        गृहः …clearly, there is a problem. Despite adding additional words to
        define the interaction, we are unable to interpret it properly, since
        our brain interprets every word with an ः as a doer. Along with the
        undefined word order, attempts to assign meaning based on expected logic
        also fail. The third sentence will end up having meaning along ‘burn the
        man(‘s) fire house’, other sentences being equally nonsensical. A
        solution can be to define the word order - Subject Verb Object or
        Subject Object Verb(Syntax). Another option is to change the word forms
        to directly show the reader what context the noun is taking(Cases), in
        which case the order matters less. And of course, you may combine both
        these methods to make the entire ordeal simple in terms of both cases
        and syntax. Examples of languages that use these methods are English,
        संस्कृतम् and Deutsch respectively. There is no clear cut optimal answer
        here, since adding word forms will imply additional data per word, while
        a syntax is merely a rule, though it makes the language a bit
        restrictive. My personal preference is towards changing word forms
        rather than creating a syntax for learning efficiency. This choice can
        be supported by introducing the theory of विभक्ति(Cases) a bit
        rigorously.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_2" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_4" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
