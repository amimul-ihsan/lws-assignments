import ReletedVideo from "@/_components/ReletedVideo";
import Video from "@/_components/Video";
import VideoInfo from "@/_components/VideoInfo";
import getURLSlug from "@/_libs/urlSlug";
import getVideos from "@/_libs/videoData";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function VideoPage(props: Props) {
  return (
    <Suspense>
      <VideoPageContent {...props} />
    </Suspense>
  );
}

async function VideoPageContent({ params }: Props) {
  const { slug: videoURLSlug } = await params;

  const videos = getVideos();

  const currentVideo = videos.find(
    (video) => getURLSlug(video.videoTitle) === videoURLSlug,
  );

  const similerVideos = videos.filter((video) => {
    return currentVideo?.categories.some(
      (category) =>
        video.videoURL !== currentVideo.videoURL &&
        video.categories.includes(category),
    );
  });

  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {currentVideo ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* <!-- Primary --> */}
            <section className="lg:col-span-8">
              {/* <!-- Video --> */}
              <Video src={currentVideo.videoURL} />

              {/* <!-- Info --> */}
              <VideoInfo video={currentVideo} />
            </section>

            {/* <!-- Similar Videos --> */}
            <aside className="lg:col-span-4">
              <h2 className="text-base font-medium mb-4">Similar videos</h2>
              <div id="similarVideos" className="space-y-3" aria-live="polite">
                {similerVideos.map((video, i) => (
                  <ReletedVideo
                    key={`${video.videoURL.split("?v=")[1]}-${i}`}
                    video={video}
                  />
                ))}
              </div>
            </aside>
          </div>
        ) : (
          <div className="min-w-full min-h-20 flex items-center justify-center">
            <p className="text-center text-gray-500">No video found!</p>
          </div>
        )}
      </div>
    </main>
  );
}
