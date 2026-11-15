import Link from "next/link";
import Image from "next/image";
import { Video } from "@/_types/types";
import getURLSlug from "@/_libs/urlSlug";

export default function VideoCard({ video }: { video: Video }) {
  const {
    thumbnailURL,
    duration,
    channelAvatar,
    videoTitle,
    channelName,
    views,
    publishedDate,
  } = video;

  const URLSlug = getURLSlug(videoTitle);

  return (
    <Link
      href={`video/${URLSlug}`}
      className="group block transition-transform hover:scale-[1.01]"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-[#262626] mb-3 ring-1 ring-white/5">
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
      <div className="flex gap-3">
        <div className="shrink-0">
          <Image
            src={channelAvatar}
            alt="Ed Hill | AI Automation avatar"
            loading="lazy"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover bg-[#262626] ring-1 ring-white/10"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-[#e50914] transition-colors">
            {videoTitle}
          </h3>
          <p className="text-xs text-gray-400 mb-0.5">{channelName}</p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>{views}</span>
            <span>•</span>
            <span>{publishedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
