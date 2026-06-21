import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-sm text-accent">{index}</span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <span className="ml-2 h-px flex-1 bg-border" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
