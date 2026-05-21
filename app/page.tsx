import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";

import { FuturisticBackdrop } from "@/components/background";
import {
  CursorGlow,
  ScrollProgress,
  TypingText,
} from "@/components/interactive";
import { Navbar } from "@/components/navbar";
import {
  GlassCard,
  ProjectCard,
  Reveal,
  SectionTitle,
  SkillMeter,
  TimelineItem,
} from "@/components/ui";
import {
  aboutPoints,
  certifications,
  educationData,
  experienceData,
  projectData,
  skillGroups,
  typingRoles,
} from "@/lib/site-data";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Rakshitha1427",
    icon: Github,
    glow: "hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/d-rakshitha-b280a826a",
    icon: Linkedin,
    glow: "hover:border-violet-300/40 hover:text-violet-200 hover:shadow-[0_0_24px_rgba(168,85,247,0.18)]",
  },
  {
    label: "Email",
    href: "mailto:drakshitha1427@gmail.com",
    icon: Mail,
    glow: "hover:border-fuchsia-300/40 hover:text-fuchsia-200 hover:shadow-[0_0_24px_rgba(217,70,239,0.16)]",
  },
] as const;

function HeroVisual() {
  return (
    <GlassCard className="relative overflow-hidden p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_32%)]" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            AI Startup Mode
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))]">
            Open to opportunities
          </span>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-[rgb(var(--panel)/0.45)] p-5">
          <p className="text-sm uppercase tracking-[0.34em] text-cyan-200">
            Current focus
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-[rgb(var(--text))]">
            Generative AI, automation workflows, and intelligent product
            experiences.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["AI/ML", "TensorFlow • NLP • Deep Learning"],
            ["Full Stack", "Django • FastAPI • Streamlit"],
            ["Tooling", "Git • GitHub • VS Code"],
            ["Automation", "n8n • LangGraph • APIs"],
          ].map(([title, detail]) => (
            <div
              key={title}
              className="rounded-[1.35rem] border border-white/10 bg-[rgb(var(--panel)/0.45)] p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
                {title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgb(var(--text))]">
                {detail}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 p-5">
          <div className="flex items-center gap-3 text-cyan-200">
            <Sparkles size={18} />
            <p className="text-sm uppercase tracking-[0.3em]">
              Recruiter-ready summary
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
            Strong in design and integration, fast at learning new technologies,
            and focused on turning ideas into clean AI-powered solutions that
            work in the real world.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function ContactForm() {
  return (
    <GlassCard className="space-y-5">
      <div>
        <p className="text-sm uppercase tracking-[0.34em] text-cyan-200">
          Contact form
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-[rgb(var(--text))]">
          Let&apos;s build something intelligent.
        </h3>
      </div>

      <form className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border border-white/10 bg-[rgb(var(--panel)/0.55)] px-4 py-3 text-sm outline-none placeholder:text-[rgb(var(--muted))] focus:border-cyan-300/40"
            placeholder="Your name"
          />
          <input
            className="rounded-2xl border border-white/10 bg-[rgb(var(--panel)/0.55)] px-4 py-3 text-sm outline-none placeholder:text-[rgb(var(--muted))] focus:border-cyan-300/40"
            placeholder="Your email"
            type="email"
          />
        </div>
        <input
          className="rounded-2xl border border-white/10 bg-[rgb(var(--panel)/0.55)] px-4 py-3 text-sm outline-none placeholder:text-[rgb(var(--muted))] focus:border-cyan-300/40"
          placeholder="Subject"
        />
        <textarea
          className="min-h-36 rounded-2xl border border-white/10 bg-[rgb(var(--panel)/0.55)] px-4 py-3 text-sm outline-none placeholder:text-[rgb(var(--muted))] focus:border-cyan-300/40"
          placeholder="Tell me about your project, role, or idea..."
        />
        <button type="button" className="glow-button-primary w-fit">
          Send Message <Send size={16} />
        </button>
      </form>
    </GlassCard>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <FuturisticBackdrop />

      <section
        id="home"
        className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                <BrainCircuit size={14} />
                Generative AI Developer
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-[rgb(var(--text))] sm:text-6xl lg:text-7xl">
                D Rakshitha
              </h1>

              <p className="mt-4 text-lg text-[rgb(var(--muted))] sm:text-xl">
                Aspiring AI &amp; Software Developer passionate about building
                intelligent AI-powered applications, automation systems, and
                scalable solutions using modern AI technologies.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-[rgb(var(--muted))]">
                <span className="uppercase tracking-[0.3em] text-cyan-200">
                  Typing roles
                </span>
                <TypingText words={typingRoles} />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="glow-button-primary">
                  View Projects <ArrowRight size={16} />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="glow-button-secondary"
                >
                  Download Resume <Download size={16} />
                </a>
                <a href="#contact" className="glow-button-secondary">
                  Contact Me <ExternalLink size={16} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon, glow }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={`grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[rgb(var(--panel)/0.45)] text-[rgb(var(--text))] transition duration-300 ${glow}`}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="About me"
            title="A builder at the intersection of AI, software, and product thinking."
            description="I enjoy creating practical AI experiences with modern engineering stacks, strong UX, and a product mindset. The focus is always on usefulness, reliability, and a clean developer experience."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <GlassCard>
              <div className="space-y-4 text-[rgb(var(--muted))]">
                {aboutPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <BadgeCheck
                      className="mt-1 shrink-0 text-cyan-200"
                      size={18}
                    />
                    <p className="leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {[
                [
                  "AI-first",
                  "Generative AI, workflow automation, and real-world product solutions.",
                ],
                [
                  "Full-stack mindset",
                  "Comfortable connecting models, APIs, and polished interfaces.",
                ],
                [
                  "Problem solver",
                  "Approaches challenges with clean reasoning and practical execution.",
                ],
                [
                  "Continuous learner",
                  "Keeps exploring new tools, models, and architectures.",
                ],
              ].map(([title, text]) => (
                <GlassCard key={title} className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                    {text}
                  </p>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="Skills matrix"
            title="A futuristic stack presented with confidence and clarity."
            description="Each card mixes clean design with meaningful progress indicators so recruiters can understand the breadth of your technical toolkit quickly."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <GlassCard className="h-full">
                <div className="mb-6 flex items-center gap-3">
                  {group.title === "Programming" ? (
                    <Code2 className="text-cyan-200" />
                  ) : group.title === "AI / ML" ? (
                    <Cpu className="text-cyan-200" />
                  ) : (
                    <Workflow className="text-cyan-200" />
                  )}
                  <h3 className="font-display text-2xl font-semibold text-[rgb(var(--text))]">
                    {group.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <SkillMeter
                      key={item.name}
                      label={item.name}
                      value={item.value}
                    />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="Experience"
            title="Professional timeline with remote AI internship work."
            description="The timeline layout keeps the content recruiter-friendly while still delivering the futuristic visual style of a modern AI startup website."
          />
        </Reveal>

        <div className="space-y-6 border-l border-white/10 pl-4 sm:pl-6">
          {experienceData.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.08}>
              <TimelineItem
                time={experience.type}
                title={experience.company}
                subtitle={experience.role}
                bullets={experience.highlights}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="Projects"
            title="Selected projects"
            description="Showcases AI and automation projects with concise summaries and technology stacks."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-2">
          {projectData.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <ProjectCard
                title={project.name}
                tech={project.tech}
                description={project.description}
                github={project.github}
                live={project.live}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="certifications"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="Certifications"
            title="Certifications"
            description="Selected certifications and professional courses."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert} delay={index * 0.06}>
              <GlassCard className="h-full p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                  <BadgeCheck size={20} />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                  Certification
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[rgb(var(--text))]">
                  {cert}
                </h3>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="Education"
            title="Futuristic timeline UI for an academic path that supports the story."
            description="Designed to feel like a product timeline, this section keeps education structured, readable, and visually consistent with the rest of the page."
          />
        </Reveal>

        <div className="space-y-6 border-l border-white/10 pl-4 sm:pl-6">
          {educationData.map((entry, index) => (
            <Reveal key={`${entry.school}-${entry.year}`} delay={index * 0.06}>
              <TimelineItem
                time={entry.year}
                title={entry.school}
                subtitle={entry.detail}
                bullets={[entry.meta]}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-16 pb-24 sm:px-6 lg:px-8"
      >
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Built for recruiters, internship teams, and clients who want to connect fast."
            description="The contact area combines a form, social links, and direct contact details, making it easy to start a conversation immediately."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.34em] text-cyan-200">
                  Direct contact
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[rgb(var(--text))]">
                  Reach out via any channel below.
                </h3>
              </div>

              <div className="space-y-4 text-[rgb(var(--muted))]">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-200" size={18} />
                  <a
                    href="mailto:drakshitha1427@gmail.com"
                    className="transition hover:text-cyan-200"
                  >
                    drakshitha1427@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="text-cyan-200" size={18} />
                  <a
                    href="tel:+917483915014"
                    className="transition hover:text-cyan-200"
                  >
                    +91-7483915014
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-200" size={18} />
                  <span>Bengaluru, Karnataka</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon, glow }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgb(var(--panel)/0.45)] px-4 py-2 text-sm text-[rgb(var(--text))] transition duration-300 ${glow}`}
                  >
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>

              <a
                href="/resume.pdf"
                download
                className="glow-button-primary w-full justify-center"
              >
                Download Resume <Download size={16} />
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <footer className="relative border-t border-white/10 pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_24px_rgba(34,211,238,0.22)]" />
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-[rgb(var(--muted))]">
              Designed &amp; Developed by D Rakshitha
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              Premium futuristic AI portfolio
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
