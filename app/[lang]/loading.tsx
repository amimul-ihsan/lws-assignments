export default function Loading() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center gap-2">
      <span className="inline-block size-4 animate-bounce rounded-full bg-cyan-300"></span>
      <span className="inline-block size-4 animate-bounce rounded-full bg-cyan-300 [animation-delay:200ms]"></span>
      <span className="inline-block size-4 animate-bounce rounded-full bg-cyan-300 [animation-delay:400ms]"></span>
    </div>
  );
}
