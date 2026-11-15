import React from "react";
import Image from "next/image";
import { Video } from "@/_types/types";
import Link from "next/link";
import getURLSlug from "@/_libs/urlSlug";
export default function ReletedVideo({ video }: { video: Video }) {
  const {
    videoTitle,
    duration,
    channelName,
    views,
    publishedDate,
    thumbnailURL,
  } = video;

  return (
    <Link
      href={`/video/${getURLSlug(videoTitle)}`}
      className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
    >
      <div className="relative w-40 sm:w-44 aspect-video shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
        <Image
          src={thumbnailURL}
          alt="How to Build an ENTIRE iPhone/Android App From Scratch (AI + No code) | Rork AI"
          loading="lazy"
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0"></div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
          {videoTitle}
        </p>
        <p className="text-xs text-gray-400 mt-1 truncate">{channelName}</p>
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
          <span>{views}</span>
          <span>•</span>
          <span>{publishedDate}</span>
        </div>
      </div>
    </Link>
  );
}
