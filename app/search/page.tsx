import VideoCard from "@/_components/VideoCard";
import getVideos from "@/_libs/videoData";
import { Suspense } from "react";
type Props = { searchParams: Promise<{ query: string }> };

export default function page(props: Props) {
  return (
    <Suspense>
      <SearchPageContent {...props} />
    </Suspense>
  );
}

async function SearchPageContent({ searchParams }: Props) {
  const videos = getVideos();
  const { query } = await searchParams;

  // normalize: could be string | string[] | undefined
  const rawQuery = Array.isArray(query) ? query[0] : query;

  const queryWords =
    rawQuery?.trim().toLowerCase().split(/\s+/).filter(Boolean) ?? [];

  const set = new Set<string>();

  const filteredVideos = videos.filter((video) => {
    // 1. Dedupe
    if (set.has(video.videoURL)) return false;

    // 2. No search → keep all
    if (queryWords.length === 0) {
      set.add(video.videoURL);
      return true;
    }

    // 3. Word-prefix search
    const fields = [
      video.videoTitle,
      video.channelName,
      ...video.categories,
    ].map((f) => f.toLowerCase());

    const matches = queryWords.every((qWord: string) =>
      fields.some((field) =>
        field.split(/[\s\-_/]+/).some((word) => word.startsWith(qWord)),
      ),
    );

    if (matches) set.add(video.videoURL);
    return matches;
  });

  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      {/* <!-- Video Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, i) => (
            <VideoCard
              key={`${video.videoURL.split("?v=")[1]}-${i}`}
              video={video}
            />
          ))
        ) : (
          <div className="min-w-full min-h-20 flex items-center justify-center">
            <p className="text-center text-gray-500">No video found!</p>
          </div>
        )}
      </div>
    </main>
  );
}
