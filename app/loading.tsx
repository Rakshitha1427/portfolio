export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--bg))] px-6 text-[rgb(var(--text))]">
      <div className="glass-panel w-full max-w-md rounded-[2rem] p-8 text-center">
        <div className="mx-auto mb-5 h-14 w-14 rounded-full border border-cyan-400/40 border-t-cyan-400 animate-spin" />
        <div className="space-y-3">
          <div className="mx-auto h-4 w-48 rounded-full bg-[rgb(var(--border)/0.5)]" />
          <div className="mx-auto h-3 w-72 rounded-full bg-[rgb(var(--border)/0.35)]" />
          <div className="mx-auto h-3 w-60 rounded-full bg-[rgb(var(--border)/0.35)]" />
        </div>
      </div>
    </div>
  );
}
