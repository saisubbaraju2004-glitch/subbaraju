import { Check, Terminal } from "lucide-react";
import { projects } from "@/data/portfolio";

export type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(80%_70%_at_80%_0%,black,transparent)]"
      />
      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
            <span
              className="rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-cyan"
              style={{ borderColor: "color-mix(in oklab, var(--cyan) 40%, transparent)" }}
            >
              {project.status}
            </span>
          </div>
          <p className="text-gradient mt-2 text-base font-semibold">{project.subtitle}</p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{project.description}</p>

          <ul className="mt-6 space-y-3">
            {project.details.map((d) => (
              <li key={d.slice(0, 20)} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-[13px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm text-muted-foreground">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan" />
            Project currently in development
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden rounded-xl border border-border bg-background/70"
            style={{ boxShadow: "var(--shadow-elevate)" }}
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Terminal className="h-4 w-4 text-cyan" />
              <span className="text-xs text-muted-foreground">codesphere / platform</span>
            </div>
            <div className="space-y-3 p-5">
              {[92, 66, 78, 48, 84, 58].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                  <span
                    className="h-2 rounded-full"
                    style={{
                      width: `${w}%`,
                      backgroundImage: i % 3 === 0 ? "var(--gradient-accent)" : undefined,
                      backgroundColor: i % 3 === 0 ? undefined : "var(--secondary)",
                      opacity: i % 3 === 0 ? 0.8 : 1,
                    }}
                  />
                </div>
              ))}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["Practice", "Build", "Connect"].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg border border-border px-3 py-4 text-center text-[11px] tracking-wide text-muted-foreground uppercase"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
