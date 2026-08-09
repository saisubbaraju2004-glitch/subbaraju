import { Braces, Brain, Code2, GitBranch, Layers } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";

const icons = [Brain, Code2, Layers, GitBranch, Braces];

export function Skills() {
  return (
    <Section
      id="skills"
      label="Toolkit"
      title="Technical Skills"
      subtitle="Technologies and tools I’m currently working with."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article key={group.category} className="panel p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary">
                  <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
                </span>
                <h3 className="min-w-0 text-base font-semibold">{group.category}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
