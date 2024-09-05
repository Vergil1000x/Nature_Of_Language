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
  title: "Chapter 3.1 | English",
};

export default function Chapter_3_1() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.1 :</div>
        <div className="text-xl">&nbsp; Arten der Töne</div>
      </div>
      <div className={`${cg.className}`}>
        It will become obvious while learning that there are 2 kinds of sounds
        in this(or any) script: ह् रस् व(short) and दईर् घ(long). Based on how
        long we pull a sound, we can create new similar yet distinct sounds, for
        the purpose of maximising the number of chainable units we have. As a
        result, there is a long and short version of each letter: Vowels: अ/आ,
        इ/ई, उ/ऊ, ए/ऐ, ओ/औ. Consonants: ब/ब्. In the case of consonants, the
        distinction of short and long sounds is made by the small dash at the
        bottom, which represents that the consonant must not be pronounced
        completely with the ending अ sound. It is easily identified because half
        of the consonant disappears when written to be partially pronounced like
        this. For consonants that can’t practically be halved (र/ड/ट etc), a
        slightly exceptional system is adopted, or the consonant remains as a
        dashed character. Some specific cases also have exceptions for when
        partial consonants join them, either due to it being another
        letter(क्ष/ज्ञ/श्र) or for no real reason(र - which is rare). I will
        still introduce this र oddity to make my typing easier, though it is not
        compulsory to do so. Ex: नमस्कआरः - स् क भ्रमण - भ् र कर्ण - र् ण क्षमआ
        - क् श बउद्धइ - द् ध A further simplification which may be made is to
        avoid writing vowels in their entirety each time, by introducing
        something called मात्रा. This is a method to append vowels in shorthand
        after consonants, to save both time and effort. A short sound curves
        backwards(left) to the beginning of the word, and a long sound curves
        forwards. In some cases, the length may also be determined by the number
        of मात्रा. Now, the reading clusters are no longer just the words, but
        the consonant and its matra both. This also serves to enhance
        readability in longer words. अ cannot be added as a मात्रा, since it
        exists by default in every consonant. Ex: नमस्कारः, बुद्धि, मातृभाषा,
        निर्माण, गुरू, दुर्बुद्धेर्युद्धे Some other obvious things like आ्=अ,
        ई्=इ can be derived easily. Now we have a definite system of clusters by
        which our language can be formed. Permuting these clusters will then
        allow us to form various words.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_2" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
