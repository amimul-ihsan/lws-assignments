import React from "react";

export default function Video({ src }: { src: string }) {
  const videoId = src.split("?v=")[1];
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
      <iframe
        id="videoPlayer"
        className="w-full h-full"
        title="Video player"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
