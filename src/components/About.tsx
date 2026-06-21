import { GraduationCap } from "lucide-react";
import { profile, education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted">{profile.about}</p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-faint">
              <GraduationCap size={16} className="text-accent" /> EDUCATION
            </h3>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-muted">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-faint">
                    {e.period} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
