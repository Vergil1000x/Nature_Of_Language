import { Metadata } from "next";
import { title } from "process";
import Link from "next/link";

type Props = {
  params: {
    chapter_id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `English Chapter ${params.chapter_id}`,
  };
};

export default function German({ params }: { params: { chapter_id: string }; }) {
  return (
    <div className="bg-slate-300">
      <div>Chapters</div>
      <Link href="\chapter_1">Chapter 1</Link>
      <Link href={`/${params.chapter_id}`}>Chapter 1</Link>
    </div>
  );
}
