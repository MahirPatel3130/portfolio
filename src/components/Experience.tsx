import { experience } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="relative space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.role} delay={i * 0.05}>
            <article className="group relative rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 hover:bg-surface-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="shrink-0 font-mono text-xs text-faint">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-faint">
                {job.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
