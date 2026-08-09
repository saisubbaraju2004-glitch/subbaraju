import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Academics" title="Education">
      <article className="panel p-7 sm:p-9">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div className="flex min-w-0 gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-secondary">
              <GraduationCap className="h-6 w-6 text-cyan" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold">{education.institution}</h3>
              <p className="mt-1 text-base text-muted-foreground">{education.degree}</p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-secondary/40 p-4 text-center">
              <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Graduation</dt>
              <dd className="text-gradient mt-1 text-2xl font-bold">{education.graduation}</dd>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-4 text-center">
              <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">CGPA</dt>
              <dd className="text-gradient mt-1 text-2xl font-bold">{education.cgpa}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Section>
  );
}
