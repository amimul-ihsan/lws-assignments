export default function Loading() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center gap-2">
      <span className="inline-block size-4 animate-bounce rounded-full bg-cyan-300 [animation-delay:0ms]"></span>
      <span className="inline-block size-4 animate-bounce rounded-full bg-cyan-300 [animation-delay:100ms]"></span>
      <span className="inline-block size-4 animate-bounce rounded-full bg-cyan-300 [animation-delay:200ms]"></span>
    </div>
  );
}
