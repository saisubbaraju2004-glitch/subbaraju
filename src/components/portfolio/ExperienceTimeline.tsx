import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function ExperienceTimeline() {
  const item = experience[0];

  return (
    <Section id="experience" label="HANDS-ON EXPERIENCE" title="Experience">
      <article className="panel relative overflow-hidden p-6 sm:p-8">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan/60 via-blue-500/60 to-cyan/60" aria-hidden="true" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-widest text-cyan uppercase">
              {item.organisation}
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {item.role}
            </h3>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {item.location}
            </p>
          </div>

          <div className="shrink-0 rounded-lg border border-border/60 bg-secondary/30 px-3 py-2 text-center sm:text-right">
            <p className="text-sm font-semibold text-foreground">{item.duration}</p>
          </div>
        </div>

        <ul className="mt-8 space-y-3">
          {item.responsibilities.map((r) => (
            <li key={r.slice(0, 24)} className="flex gap-3 text-sm text-muted-foreground">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Environment:</span>
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[13px] font-medium text-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Section>
  );
}
