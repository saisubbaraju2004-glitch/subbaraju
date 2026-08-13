import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Academics" title="Education">
      <article className="panel relative overflow-hidden p-7 sm:p-9">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan/60 via-blue-500/60 to-cyan/60" aria-hidden="true" />

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex min-w-0 gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-cyan/20 bg-cyan/10">
              <GraduationCap className="h-7 w-7 text-cyan" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-1 text-base text-muted-foreground">
                {education.institution}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-4 text-center">
              <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Expected Graduation
              </dt>
              <dd className="text-gradient mt-1 text-2xl font-bold sm:text-3xl">
                {education.graduation}
              </dd>
            </div>
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-4 text-center">
              <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">CGPA</dt>
              <dd className="text-gradient mt-1 text-2xl font-bold sm:text-3xl">
                {education.cgpa}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </Section>
  );
}
