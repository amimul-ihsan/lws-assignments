import { NewsType } from "@/_types/types";
import { getDaysAgo } from "@/_utils/dateUtils";
import { formatNumber } from "@/_utils/numberFormatter";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
export default function NewsCard({
  news,
  lang,
}: {
  news: NewsType;
  lang: string;
}) {
  const {
    slug,
    title,
    author_name,
    author_avatar,
    published_date,
    tags,
    upvotes,
    downvotes,
    views,
    thumbnail,
  } = news;

  const [formattedViews, formattedUpvotes, formattedDownvotes] = [
    formatNumber(Number(views)),
    formatNumber(Number(upvotes)),
    formatNumber(Number(downvotes)),
  ];

  return (
    <Link
      href={`/${lang}/news/${slug}/`}
      className="rounded-2xl bg-linear-to-br from-white/15 via-white/5 to-transparent p-px reveal"
      style={{ animationDelay: "0ms" }}
    >
      <article className="group h-full rounded-2xl border border-white/10 bg-(--surface) p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
        <div className="aspect-video overflow-hidden rounded-xl">
          <Image
            src={`/assets/${thumbnail}`}
            alt="Circuit board"
            width={160}
            height={90}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Image
              src={`/assets/${author_avatar}`}
              alt="Author"
              width={30}
              height={30}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>{author_name}</span>
          </div>
          <Suspense>
            <Published published_date={published_date} />
          </Suspense>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-emerald-300"
              >
                <path d="M12 4L5 11H9V20H15V11H19L12 4Z" fill="currentColor" />
              </svg>
              {formattedUpvotes}
            </span>
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-rose-300"
              >
                <path d="M12 20L19 13H15V4H9V13H5L12 20Z" fill="currentColor" />
              </svg>
              {formattedDownvotes}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-zinc-500"
            >
              <path
                d="M2 12C4.5 7 7.5 5 12 5C16.5 5 19.5 7 22 12C19.5 17 16.5 19 12 19C7.5 19 4.5 17 2 12Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            {`${formattedViews} views`}
          </span>
        </div>
      </article>
    </Link>
  );
}

async function Published({ published_date }: { published_date: string }) {
  await connection();
  return <span>{getDaysAgo(published_date)}</span>;
}
