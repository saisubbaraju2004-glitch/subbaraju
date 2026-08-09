import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function ExperienceTimeline() {
  return (
    <Section id="experience" label="Journey" title="Experience">
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={item.organisation} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-7 -left-[31px] h-3 w-3 rounded-full ring-4 ring-background sm:-left-[39px]"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            />
            <article className="panel p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-gradient text-sm font-semibold">{item.organisation}</p>
                </div>
                <p className="shrink-0 text-right text-xs text-muted-foreground">{item.duration}</p>
              </div>

              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {item.location}
              </p>

              <ul className="mt-5 space-y-2.5">
                {item.responsibilities.map((r) => (
                  <li key={r.slice(0, 20)} className="flex gap-3 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-[13px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
