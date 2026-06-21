import { Mail, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-sm text-accent">06</span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Contact
            </h2>
            <span className="ml-2 h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-muted">
              I&apos;m open to AI/ML engineering roles and research
              collaborations. The fastest way to reach me is email.
            </p>

            <a
              href={`mailto:${socials.email}`}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-accent-dim"
            >
              <Mail size={16} /> {socials.email}
            </a>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon size={16} /> {socials.githubHandle}
                <ArrowUpRight size={14} className="text-faint" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={16} /> {socials.linkedinHandle}
                <ArrowUpRight size={14} className="text-faint" />
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-faint sm:flex-row">
          <p className="font-mono">
            © {profile.name.split(" ")[0]} Patel — 2026
          </p>
          <p className="font-mono">Built with Next.js · Tailwind · Vercel</p>
        </footer>
      </div>
    </section>
  );
}
