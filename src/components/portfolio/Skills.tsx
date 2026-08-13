import { Brain, Code2, GitBranch, Globe, Layers } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";

const icons = [
  { icon: Brain, label: "AI & Emerging Technologies" },
  { icon: Code2, label: "Programming" },
  { icon: Globe, label: "Web Development" },
  { icon: GitBranch, label: "Tools & Development" },
  { icon: Layers, label: "Computer Science" },
] as const;

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
          const isPrimary = group.category === "AI & Emerging Technologies";
          const { icon: Icon } = icons[i] ?? icons[0];
          return (
            <article
              key={group.category}
              className={`panel relative overflow-hidden p-6 transition-all hover:border-cyan/30 ${
                isPrimary ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {isPrimary && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-10"
                  aria-hidden="true"
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan blur-3xl" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan blur-3xl" />
                </div>
              )}
              <div className="relative flex items-center gap-3">
                <span
                  className={`grid shrink-0 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 ${
                    isPrimary ? "h-12 w-12" : "h-10 w-10"
                  }`}
                >
                  <Icon
                    className={`text-cyan ${isPrimary ? "h-6 w-6" : "h-5 w-5"}`}
                    aria-hidden="true"
                  />
                </span>
                <h3
                  className={`min-w-0 font-semibold ${
                    isPrimary ? "text-lg" : "text-base"
                  }`}
                >
                  {group.category}
                </h3>
              </div>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground ${
                      isPrimary ? "px-3.5 py-2" : ""
                    }`}
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

