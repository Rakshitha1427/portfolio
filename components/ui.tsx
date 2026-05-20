"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
        <Sparkles size={14} />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`glass-panel rounded-[1.75rem] p-6 ${className}`}>
      {children}
    </div>
  );
}

export function SkillMeter({
  label,
  value,
}: Readonly<{ label: string; value: number }>) {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-[rgb(var(--panel)/0.45)] p-4 transition duration-300 hover:border-cyan-300/20 hover:shadow-neon">
      <div className="flex items-center justify-between gap-4">
        <p className="font-medium text-[rgb(var(--text))]">{label}</p>
        <span className="text-sm text-[rgb(var(--muted))]">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function TimelineItem({
  time,
  title,
  subtitle,
  bullets,
}: Readonly<{
  time: string;
  title: string;
  subtitle: string;
  bullets: string[];
}>) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-2 h-4 w-4 rounded-full border border-cyan-300/40 bg-cyan-400/60 shadow-[0_0_24px_rgba(34,211,238,0.45)]" />
      <div className="glass-panel rounded-[1.5rem] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-cyan-200">
              {time}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[rgb(var(--text))]">
              {title}
            </h3>
            <p className="mt-1 text-[rgb(var(--muted))]">{subtitle}</p>
          </div>
        </div>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProjectCard({
  title,
  tech,
  description,
  github,
  live,
}: Readonly<{
  title: string;
  tech: string[];
  description: string;
  github: string;
  live: string;
}>) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group glass-panel overflow-hidden rounded-[1.75rem] p-6 transition duration-300 hover:border-cyan-300/25 hover:shadow-neon"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
            Featured project
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-[rgb(var(--text))]">
            {title}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))]">
          Premium
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-[rgb(var(--panel)/0.45)] px-3 py-1 text-xs text-[rgb(var(--muted))]"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-5 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="glow-button-secondary text-sm hover:text-cyan-200"
        >
          <Github size={16} /> GitHub
        </a>
        <a href={live} className="glow-button-primary text-sm">
          Live Demo <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
