import { skills } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.06}>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="mb-4 font-mono text-sm text-faint">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
