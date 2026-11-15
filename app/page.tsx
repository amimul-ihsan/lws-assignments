import VideoCard from "@/_components/VideoCard";
import getVideos from "@/_libs/videoData";

export default function HomePage() {
  const videos = getVideos();

  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      {/* <!-- Video Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {videos.map((video, i) => (
          <VideoCard
            key={`${video.videoURL.split("?v=")[1]}-${i}`}
            video={video}
          />
        ))}
      </div>
    </main>
  );
}
