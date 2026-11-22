import NewsDetailsModal from "@/_components/NewsDetailsModal";
import getNewses from "@/_libs/getNews";

import { notFound } from "next/navigation";
import { Suspense } from "react";
import ModalLoading from "./loading";

type Props = {
  params: Promise<{ slug: string; lang: string }>;
};

export default function page(props: Props) {
  return (
    <Suspense fallback={<ModalLoading />}>
      <NewsDetailsPageContent {...props} />
    </Suspense>
  );
}

async function NewsDetailsPageContent({ params }: Props) {
  const { slug, lang } = await params;
  const news = getNewses().find((n) => n.slug === slug);
  if (!news) notFound();

  return <NewsDetailsModal news={news} lang={lang} />;
}
