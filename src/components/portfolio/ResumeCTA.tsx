import { FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";

export function ResumeCTA() {
  const hasResume = Boolean(profile.resumeUrl);

  return (
    <Section id="resume" label="Documents" title="Resume">
      <div className="panel flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <p className="max-w-xl text-base text-muted-foreground">
          Explore my academic background, technical skills, project experience, and professional
          development.
        </p>
        {hasResume ? (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            View Resume
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Resume document will be linked here"
            className="inline-flex h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-semibold text-muted-foreground sm:w-auto"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            View Resume
          </button>
        )}
      </div>
    </Section>
  );
}
