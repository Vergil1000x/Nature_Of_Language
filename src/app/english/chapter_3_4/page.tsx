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
  title: "Chapter 3.4 | English",
};

export default function Chapter_3_4() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.4 :</div>
        <div className="text-xl">&nbsp; Fälle der Nomen</div>
      </div>
      <div className={`${cg.className}`}>
        संस्कृतभाषा has the most advanced system of cases(7) among any language
        of the world, the closest second being Русский(6). The idea behind these
        cases is that there are only 7 types of actions that can be done with a
        noun, or that the noun can do. These are: प्रथमा - कर्ता - Doer द्वितीया
        - कर्म - Object तृतीया - करण - Instrument by which something is done
        चतुर्थी - सम्प्रदान - For which something is done पंचमी - अपादान - From
        which something emerges षष्ठी - सम्बन्ध - Related to which something is
        सप्तमी - अधिकरण - Inside the noun or when something goes within it
        अष्टमी - Greeting/Exclamation That 8th part is not that relevant, since
        it can be easily taken over by other words, and pronouns do not possess
        it, since they are never spoken to like a person. Think of any sentence
        in a language you are fluent in, and try to ascertain which context each
        noun is used in. You will always find that context within these 7 cases.
        The real beauty of these cases is that on changing the form of a word
        with respect to a particular case, its meaning becomes inherently
        defined into the word, and a syntax is no longer required. This is also
        why संस्कृतम् has the special feature of allowing any word order, yet
        retaining the exact meaning and intentions of the speaker. This has the
        added advantage of assigning a word form to a specific category of
        meaning, which is something easier and more intuitive to remember than
        memorising a mere syntactic rule. Adopting this means that syntax is now
        irrelevant. These inherent meanings have another effect - meaning can be
        conveyed without prepositions. Words like ‘with’, ‘by’, ‘for’, ‘from’
        and ‘of’ are not compulsory. Let us now rewrite our original sentence: A
        fire burned down a man’s house. मानवस्य गृहम् अग्निः दह This sentence
        construction should be self explanatory for all the above points. For
        the sake of creating these word forms, the male विभक्ति table of
        संस्कृतम् shall be adopted in the singular form. For Plural forms, the
        same form shall be repeated.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_3" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_5" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
