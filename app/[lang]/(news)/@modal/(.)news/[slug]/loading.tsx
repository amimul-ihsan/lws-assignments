export default function ModalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-6 text-white">
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="inline-block size-4 animate-bounce rounded-full bg-cyan-300"
              style={{ animationDelay: `${i * 100}ms` }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
