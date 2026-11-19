import NewsDetailsModal from "@/_components/NewsDetailsModal";
import getNewses from "@/_libs/getNews";

import { notFound } from "next/navigation";

export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  const news = getNewses().find((n) => n.slug === slug);
  if (!news) notFound();

  return <NewsDetailsModal news={news} lang={lang} />;
}
