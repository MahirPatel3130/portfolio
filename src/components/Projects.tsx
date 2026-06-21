import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./BrandIcons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.06}>
            <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 hover:bg-surface-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug">
                  {p.title}
                </h3>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} on GitHub`}
                    className="shrink-0 rounded-md p-1.5 text-faint transition-colors hover:bg-background hover:text-accent"
                  >
                    <GithubIcon size={18} />
                  </a>
                ) : (
                  <span
                    aria-label="Private repository"
                    title="Private repository"
                    className="shrink-0 rounded-md p-1.5 text-faint"
                  >
                    <Lock size={16} />
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.blurb}
              </p>

              <ul className="mt-4 space-y-2">
                {p.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-dim"
                >
                  View code
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
