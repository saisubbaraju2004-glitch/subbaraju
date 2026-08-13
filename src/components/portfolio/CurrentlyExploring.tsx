import { Bot, Brain, GitBranch, Globe, Code2 } from "lucide-react";
import { Section } from "./Section";

const exploring = [
  {
    title: "Generative AI",
    description: "Exploring modern Generative AI concepts and applications.",
    icon: Brain,
  },
  {
    title: "AI-assisted Development",
    description:
      "Using AI-assisted development tools such as Lovable to accelerate learning and development.",
    icon: Bot,
  },
  {
    title: "React",
    description:
      "Developing modern user interfaces and strengthening React development skills.",
    icon: Code2,
  },
  {
    title: "Modern Web Development",
    description:
      "Building responsive and user-focused web applications.",
    icon: Globe,
  },
  {
    title: "Software Engineering Practices",
    description:
      "Improving version control, development workflows, problem-solving, and software engineering practices.",
    icon: GitBranch,
  },
];

export function CurrentlyExploring() {
  return (
    <Section id="currently-exploring" title="Currently Exploring">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exploring.map((topic) => {
          const Icon = topic.icon;
          return (
            <div
              key={topic.title}
              className="group relative flex items-start gap-4 rounded-xl border border-border/60 bg-secondary/20 p-4 transition-colors hover:border-cyan/30 hover:bg-secondary/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {topic.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
