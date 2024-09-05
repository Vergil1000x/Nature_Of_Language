import { Cinzel_Decorative } from "next/font/google";
import Link from "next/link";
const cinzel_dec = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Final() {
  return (
    <div
      className={`h-screen overflow-hidden w-screen flex justify-center items-center`}
    >
      <div className="grow border-[1px] mx-5 border-neutral-950"></div>
      <div className={`${cinzel_dec.className} text-4xl`}>
        Bitteschön Leute!
      </div>
      <div className="grow border-[1px] mx-5 border-neutral-950"></div>
      <div className={`${cinzel_dec.className} absolute bottom-[50px]`}>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
