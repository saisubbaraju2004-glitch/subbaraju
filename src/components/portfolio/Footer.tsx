import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid w-full max-w-[1280px] gap-6 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">AI Engineering | Web Development | Computer Science</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm">
          <a className="text-muted-foreground hover:text-cyan" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a
            className="text-muted-foreground hover:text-cyan"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-muted-foreground hover:text-cyan"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-8 w-full max-w-[1280px] px-5 sm:px-8">
        <div aria-hidden="true" className="hairline h-px w-full" />
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
