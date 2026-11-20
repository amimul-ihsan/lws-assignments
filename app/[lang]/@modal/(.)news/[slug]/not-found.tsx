"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import "@/app/globals.css";

export default function NotFound() {
  const { slug, lang } = useParams();

  return (
    <div className="min-w-full min-h-screen flex justify-center items-center flex-col gap-4">
      <div className="flex justify-center items-center">
        <span className="font-bold text-xl px-2 border-r border-gray-500">
          404
        </span>
        <span className="px-2 text-gray-300">{`This News with "${slug}" id was not found!`}</span>
      </div>
      <Link
        href={`/${lang}`}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
      >
        Back to home
      </Link>
    </div>
  );
}
