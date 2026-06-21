import { FileText, ArrowUpRight } from "lucide-react";
import { research } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Research() {
  return (
    <Section id="research" index="04" title="Research">
      <div className="space-y-4">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <article className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 hover:bg-surface-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent">
                <FileText size={14} /> {r.venue}
              </div>

              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {r.title}
              </h3>
              <p className="mt-1 text-sm text-faint">{r.authors}</p>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {r.abstract}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {r.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-dim"
              >
                Read paper
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
