import Image from "next/image";
import Link from "next/link";
import { Assignment } from "../_types/types";

export default function Card({
  project,
  eager,
}: {
  project: Assignment;
  eager: boolean;
}) {
  const { title, description, thumbnailURL, liveURL } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/40">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 animate-pulse bg-zinc-700/60" />
        <Image
          src={thumbnailURL}
          alt={title}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-lg font-semibold text-zinc-50">{title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <Link
          href={liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
        >
          See live
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
