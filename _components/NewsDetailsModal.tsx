"use client";

import { usePathname, useRouter } from "next/navigation";
import ReactModal from "react-modal";
import NewsDetails from "./NewsDetails";
import { NewsType } from "@/_types/types";

if (typeof document !== "undefined") {
  ReactModal.setAppElement("#app-root");
}

export default function NewsDetailsModal({
  news,
  lang,
}: {
  news: NewsType;
  lang: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isOpen = pathname === `/${lang}/news/${news.slug}`;

  const onClose = () => {
    router.back();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={(options) => options?.contentEl.focus()}
      overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center"
      className="w-full max-w-5xl max-h-[90vh] overflow-hidden overflow-y-auto rounded-2xl bg-zinc-900 p-6 text-white outline-none"
    >
      <NewsDetails news={news} lang={lang} />
    </ReactModal>
  );
}
