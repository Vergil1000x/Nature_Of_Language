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
  title: "Chapter 3.2 | English",
};

export default function Chapter_3_2() {
  return (
    <div className={`lg:w-[80%] w-[95%] py-12`}>
      <div className={`${cinzel.className} text-3xl p-5 flex lg:flex-row flex-col items-end`}>
        <div>Chapter 3.2 :</div>
        <div className="text-xl">&nbsp; Was ist wichtig?</div>
      </div>
      <div className={`${cg.className}`}>
        What kind of words are necessary in a language? Firstly, languages are
        for exchanging ideas, so all these ideas need words - नाम(noun). The
        nouns will be described or interacted with by people or things. Words
        must exist to refer to these doers(सर्वनाम) in all possible frames of
        reference - something ascribed to as 1st/2nd/3rd person in languages.
        1st person refers to the speaker unit, 2nd to the listener unit, 3rd to
        everything outside these two units. These units may be one or many
        (एकवचन/बहुवचन). And lastly, words must exist to define the nature of
        interactions - Verbs(क्रियापद). There also comes another form of
        association here, aside from our letter-sound clusters: the word-meaning
        clusters. The brain must be taught to associate a certain pattern of
        sound with a word, and to associate this word with a meaning. It is
        worth considering how the brain interprets meaning at this phase, and
        for this, one diverts his attention to the way an infant acquires
        his/her mother tongue. An infant possesses only an extremely flexible
        and receptive brain, without having any grammatical abilities. When
        teaching them how to associate things, parents often point to a tangible
        thing and repeat its associated word a few times, until the association
        is made. Essentially, this assignment of meaning is pictorial, and this
        is a language that everyone is born with. After some pictorial
        representation is completed, the infant picks up intangible concepts
        based on behavioural cues and conversation eavesdropping, until he/she
        is ready to enter school and begin learning on a formal level. In other
        words, the learning has to be not from language to language, but from
        mind to language, and that too pictorially. It is hence good practice
        even when learning as an adult to isolate centres for different
        languages and learn words not by translation, but by assigning some
        pictures/action to them, both for efficiency and prevention of language
        mixing. For the sake of avoiding the work of imagining everything from
        scratch, let us grab the base words from संस्कृतभाषा. Though it has 3
        genders, we shall consider each word as male in an attempt to make our
        language genderless. Kindly note though, that our language is entirely
        distinct from संस्कृतम्, though it will steal a lot of things from it
        during development. Now, we have enough to make basic sentences. रामः
        गच्छ Ram go कुक्कुरः क्रीड Dog play Another important consideration is
        time - When is the action in question occurring: has it ended, is it
        ongoing or will it start later?- Tense(काल). Since tenses are associated
        with the action of a sentence, it makes sense to slightly modify the
        base verb depending on the tense. Let us consider 3 basic tenses :
        Past(भूतकाल), Present(वर्तमानकाल), Future(भविष्यत् काल). Similarly,
        altering word form(बालकाः) instead of writing nouns repeatedly for
        multiple occurrences(बालकः बालकः बालकः) is a logical but not necessary
        simplification, though it may be advised to limit repetitions to three,
        irrespective of how many there are. Using 3rd person pronouns to avoid
        repetition of nouns in consequent sentences is also of a similar nature
        - logical but unnecessary. We shall currently NOT consider these until
        they become necessary. Some English examples of a similar nature would
        be: girl girl park going [बालिकाः बालिकाः उद्यानः गच्छ]/ girl girl park
        gone [बालिकाः बालिकाः उद्यानः अगच्छ]/ girl girl park will go [बालिकाः
        बालिकाः उद्यानः गमिष्य] father speaks [पितृः वद]/ father spoke [पितृः
        अवद]/ father will speak [पितृः वदिष्य] So, we now have words and some
        basic forms for the following categories of words: Nouns - नाम Pronouns
        - सर्वनाम (1st, 2nd Person) Verbs - क्रियापद (भूत, भविष्यत्, वर्तमान
        काल) It is entirely possible that some readers disagree with the way
        this development progresses, yet the point is not to define this
        process, but to justify the outcomes and to highlight the requirement of
        every feature that most languages use. When the most defining features
        of a language are found to create the most basic functioning language, a
        learner will know that these are the elements that are necessary to know
        if a language is to be understood. The rules regarding these elements
        must be learned directly using various resources and not left to pattern
        recognition, by which I mean that one must possess a basic idea of these
        elements, not that they must be perfect in their replication. As
        mentioned before, they slowly become engraved into your bloodstream.
        Everything else may then be left up to the natural pattern algorithms of
        the brain. The way these necessary elements will be added is by first
        producing an example that explains the shortcomings of the current
        structure.
      </div>
      <div className={`${cg.className} flex`}>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_1" className="font-[600] active:underline">Prev</Link></div>
        <div className="px-2 pt-10 pb-5 hover:scale-[105%] transition-op"><Link href="/english/chapter_3_3" className="font-[600] active:underline">Next</Link></div>
      </div>
    </div>
  );
}
