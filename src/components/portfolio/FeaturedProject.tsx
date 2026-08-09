import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function FeaturedProject() {
  const [featured, ...rest] = projects;
  return (
    <Section id="projects" label="Work" title="Featured Project">
      <ProjectCard project={featured} />
      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      )}
      <p className="mt-8 text-center text-sm text-muted-foreground">More projects coming soon.</p>
    </Section>
  );
}
