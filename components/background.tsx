export function FuturisticBackdrop() {
  const particles = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_80%_12%,_rgba(168,85,247,0.18),_transparent_25%),radial-gradient(circle_at_15%_20%,_rgba(59,130,246,0.13),_transparent_20%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_90%)]" />

      <div className="absolute -top-24 left-1/5 h-80 w-80 animate-float rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-20 h-96 w-96 animate-float rounded-full bg-violet-500/20 blur-3xl [animation-delay:1.2s]" />
      <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 animate-glow rounded-full bg-fuchsia-500/15 blur-3xl" />

      {particles.map((particle) => (
        <span
          key={particle}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/40 shadow-[0_0_18px_rgba(34,211,238,0.65)]"
          style={{
            left: `${(particle * 9) % 100}%`,
            top: `${(particle * 13) % 88}%`,
            opacity: 0.25 + (particle % 5) * 0.12,
            animationDelay: `${particle * 0.35}s`,
            animationDuration: `${6 + (particle % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}
