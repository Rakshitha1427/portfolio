import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ThemeToggle } from "./interactive";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgb(var(--bg)/0.72)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/20 bg-white/5 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.18)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-300/40">
            <Sparkles size={20} />
          </span>
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">
              D Rakshitha
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-[rgb(var(--muted))]">
              Generative AI Developer
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-[rgb(var(--muted))] transition hover:text-cyan-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/Rakshitha1427"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/d-rakshitha-b280a826a"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] transition hover:border-violet-300/40 hover:text-violet-200 hover:shadow-[0_0_24px_rgba(168,85,247,0.18)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:drakshitha1427@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] transition hover:border-fuchsia-300/40 hover:text-fuchsia-200 hover:shadow-[0_0_24px_rgba(217,70,239,0.16)]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
