"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronUp, MoonStar, SunMedium } from "lucide-react";

export function TypingText({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];
    const timeout = window.setTimeout(
      () => {
        if (deleteMode) {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length <= 1) {
            setDeleteMode(false);
            setIndex((value) => (value + 1) % words.length);
          }
        } else {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length === currentWord.length) {
            setDeleteMode(true);
          }
        }
      },
      deleteMode ? 45 : 70,
    );

    return () => window.clearTimeout(timeout);
  }, [deleteMode, index, text, words]);

  return (
    <span className="inline-flex min-h-[1.75rem] min-w-[14rem] items-center rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 font-semibold tracking-wide text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.14)]">
      {text}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300" />
    </span>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as
      | "dark"
      | "light"
      | null;
    const nextTheme = savedTheme ?? "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const label = useMemo(
    () => (theme === "dark" ? "Light mode" : "Dark mode"),
    [theme],
  );

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgb(var(--panel)/0.55)] px-4 py-2 text-sm font-medium text-[rgb(var(--text))] backdrop-blur-xl transition hover:border-cyan-300/30 hover:text-cyan-200"
      aria-label={label}
    >
      {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
      {label}
    </button>
  );
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handleLeave = () =>
      setPosition((current) => ({ ...current, visible: false }));

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{ opacity: position.visible ? 1 : 0 }}
    >
      <div
        className="absolute h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
        style={{ left: position.x - 144, top: position.y - 144 }}
      />
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(nextProgress);
      setVisible(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[rgb(var(--panel)/0.7)] text-[rgb(var(--text))] shadow-[0_0_30px_rgba(34,211,238,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200 ${visible ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"}`}
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
}
