"use client";

import { useRouter } from "next/navigation";
import ReactModal from "react-modal";
import NewsDetails from "./NewsDetails";
import { NewsType } from "@/_types/types";

ReactModal.setAppElement("body");

export default function NewsDetailsModal({
  news,
  lang,
}: {
  news: NewsType;
  lang: string;
}) {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };

  return (
    <ReactModal
      isOpen
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center"
      className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 p-6 text-white outline-none"
    >
      <NewsDetails news={news} lang={lang} />
    </ReactModal>
  );
}
