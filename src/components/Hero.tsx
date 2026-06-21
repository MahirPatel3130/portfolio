import Image from "next/image";
import { ArrowDown, Mail, FileText, MapPin } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="accent-glow absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 px-6 pt-24 pb-16 md:grid-cols-[1.6fr_1fr] md:pt-16">
        <div>
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to AI/ML Engineer roles · 2026
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {profile.name}
            <span className="block text-muted">{profile.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-3 font-mono text-sm text-accent sm:text-base">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-accent-dim"
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              <FileText size={16} /> Resume
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-faint">
            <MapPin size={13} /> {profile.location}
          </p>
        </Reveal>
        </div>

        <Reveal delay={0.15} className="order-first md:order-none">
          <div className="relative mx-auto w-44 sm:w-52 md:w-full md:max-w-xs">
            <div
              className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border ring-1 ring-accent/20">
              <Image
                src={profile.image}
                alt={`${profile.name} — ${profile.role}`}
                fill
                priority
                sizes="(max-width: 768px) 13rem, 20rem"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint transition-colors hover:text-accent"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
