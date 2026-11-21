import getNewses from "@/_libs/getNews";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/[lang]/loading";
import NewsDetailes from "@/_components/NewsDetails";
import { selectLangDictionary } from "@/_libs/selectDictionary";

type Props = { params: Promise<{ slug: string; lang: string }> };
export default async function DetailPage(props: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <DetailPageContent {...props} />
    </Suspense>
  );
}

async function DetailPageContent({ params }: Props) {
  const { slug, lang } = await params;

  const news = getNewses().find((news) => news.slug === slug);

  if (!news) notFound();

  const { back_home } = selectLangDictionary(lang);

  return (
    <main className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
        >
          {back_home}
        </Link>
      </div>
      <NewsDetailes news={news} lang={lang} />
    </main>
  );
}
