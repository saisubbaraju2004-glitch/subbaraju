import { Compass } from "lucide-react";
import { Section } from "./Section";

const topics = [
  "Generative AI",
  "AI-assisted Development",
  "React",
  "Modern Web Development",
  "Software Engineering Practices",
];

export function CurrentlyExploring() {
  return (
    <Section id="currently-exploring" title="Currently Exploring">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {topics.map((topic) => (
          <div
            key={topic}
            className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground/90"
          >
            <Compass className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
