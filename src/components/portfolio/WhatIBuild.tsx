import { BrainCircuit, Code2, Layers3, Network } from "lucide-react";
import { Section } from "./Section";

const buildAreas = [
  {
    title: "AI Engineering",
    description: "Exploring Artificial Intelligence and practical AI engineering workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Generative AI",
    description: "Learning and experimenting with Generative AI technologies and applications.",
    icon: Layers3,
  },
  {
    title: "Web Applications",
    description: "Building modern web interfaces using HTML, CSS, JavaScript and React.",
    icon: Code2,
  },
  {
    title: "Developer Platforms",
    description: "Currently building CodeSphere, an all-in-one developer platform.",
    icon: Network,
  },
];

export function WhatIBuild() {
  return (
    <Section
      id="what-i-build"
      title="What I Build"
      subtitle="Areas where I’m developing practical skills and building technology solutions."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {buildAreas.map((area) => {
          const Icon = area.icon;
          return (
            <article key={area.title} className="panel p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary">
                <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
