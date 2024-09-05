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
  title: "Chapter 3 | English",
};

export default function Chapter_3() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3 :</div>
        <div className="text-xl">&nbsp; Ausgaben : Sprechen/Schreiben</div>
      </div>
      <div className={`${cg.className}`}>
        In order to develop a system of speech, it is necessary to understand
        what kind of sounds a larynx is capable of making in the first place.
        This would take you deep into the study of phonetics along with tons of
        experimentation, but it is good practice to consider critically before
        performing any hard work behind it. The thing with speech is, that
        irrespective of how you define it, you aren’t going to be around to
        teach every single speaker how something is supposed to be pronounced.
        They will have their own personalities and unique traits, and will
        majorly be concerned with whether the other person understands them and
        vice versa, rather than bother to perfect their pronunciation. That is
        the entire reason why dialects and accents exist to begin with. So, what
        should be done is to define general rules about how something is
        supposed to sound and let the people do the rest. What monstrosity it
        evolves into later is not your botheration. When assigning sounds, we
        cannot forget that these sounds must be approximated in writing later,
        and randomly making up sounds for different concepts will lead to
        disaster. Symbolic writing also helps the brain to assign a
        sound(intangible) to a character(tangible) and encode them into memory
        in clusters, instead of trying to remember complex sounds by themselves.
        Ideally, these clusters should be simple, since it’s easier and more
        accurate to remember small clusters of information. This sound-letter
        association also allows you to use the power of permutation and
        combination to use some basic sounds denoted by concrete letters, and
        chain them later to make complex ones. Another advantage is that you can
        write the letter associated with a tiny sound unit, and learners will
        automatically translate the symbol into sound when they see it. These
        associations are the foundations of your language. An important
        consideration for these clusters is thereby the simplicity: in both
        speech and writing. Phonetically, most languages have two categories of
        letters : vowels and consonants, of which the vowels are used
        frequently. Observing the vowels yields an interesting result : their
        sounds are mostly present in languages throughout the world with either
        a short or long pronunciation. (English) a/e/i/o/u or (German)
        a/e/o/u/i/ü/ä or (Indian languages) अ/इ/उ/ए/ओ or (Japanese) あ/い/う/お.
        It is not all encompassing by any means, but the bottomline is that all
        languages have commonalities in their vowels. It is not difficult to see
        why : Phonetically, it is not possible to accurately chain sounds
        without passing through one of these phases, since vowels are pronounced
        in the simplest way possible. Just generate a sound and slightly modify
        your mouth from its natural resting position, and there you have a
        vowel. As nobody stops generating sound while speaking, and merely
        modifies their oral structure to create various sounds, vowel sounds are
        inevitable, even though the vowels themselves may not appear in words
        (English is a major offender-rhythm). The structure of all the
        consonants hence normally pass through vowels while chaining them,
        unless consonants are similar in oral shape, and all these computations
        decide which sound may be possible to chain after a particular one.
        Needless to say, one does not need to calculate so many things when
        speaking, since they become second nature, yet it becomes necessary to
        recognize these trivialities when constructing a language. Thus, we come
        to the phase of actually selecting what vowel and consonant sounds we
        want in our medium. It’s time to get creative… or so I say but it’s
        quite a tedious process to create a script, assign sounds to them and
        then create words by chaining those sounds. Not only is it a
        particularly irrelevant thing to spend time upon, but it will also take
        unnecessary effort to type in this new language, so we will just use one
        that is scarcely known, but exists for our purposes. For efficiency, we
        should logically have unique clusters that link a sound and letter, with
        easy methods to chain letters(and hence sounds) as a word progresses.
        Doing this means that the generated clusters will be phonetically
        consistent(like an invertible mathematical function), with one sound
        having only one letter and vice versa. In fact, the oldest known
        languages of the world, from whence most other languages are said to
        have originated share this feature of phonetic consistency : Deutsch and
        संस्कृतम् . For our purposes, we will use the देवनागरी(Devnagri) script
        of the Sanskrit language. ///Script photo It is therefore imperative
        that readers look up the pronunciation of the Devnagri script(whose
        pronunciations I clearly cannot write here), which is also used in
        Hindi, Marathi or most other Indian languages. Learning them perfectly
        is unnecessary, just the basic idea is enough. Eventually, as they are
        used and you keep revising them, the letter-sound associations will
        become engraved into your bloodstream. Another prudent thing to be
        mentioned is that… this is supposed to be the development of a new
        language: nothing that hasn’t been discussed will be used. दएवनआगरई अशई
        दइसतए…
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_2" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_1" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
