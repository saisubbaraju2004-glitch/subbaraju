import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" label="Learning" title="Certifications & Training">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <article key={cert.title} className="panel flex flex-col p-6">
            <BadgeCheck className="h-5 w-5 text-cyan" aria-hidden="true" />
            <h3 className="mt-4 text-base leading-snug font-semibold">{cert.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
            {cert.meta && <p className="mt-1 text-xs text-muted-foreground">{cert.meta}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
