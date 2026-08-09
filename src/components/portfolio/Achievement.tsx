import { Trophy } from "lucide-react";
import { achievement } from "@/data/portfolio";
import { Section } from "./Section";

export function Achievement() {
  return (
    <Section id="achievements" label="Recognition" title="Achievements">
      <article className="panel relative overflow-hidden p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "var(--gradient-deep)" }}
        />
        <div className="relative flex flex-col items-start gap-7 sm:flex-row sm:items-center">
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border"
            style={{
              borderColor: "color-mix(in oklab, var(--cyan) 40%, transparent)",
              boxShadow: "var(--glow-cyan)",
            }}
          >
            <Trophy className="h-8 w-8 text-cyan" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
              {achievement.prize}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{achievement.event}</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{achievement.organizer}</p>
            <p className="mt-1 text-sm text-muted-foreground">{achievement.date}</p>
          </div>
        </div>
      </article>
    </Section>
  );
}
