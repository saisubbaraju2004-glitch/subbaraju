import { ArrowRight } from "lucide-react";
import portraitAsset from "@/assets/profile-portrait.png.asset.json";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-deep)" }}
      />
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p
            className="rise mb-5 text-xs font-semibold tracking-[0.24em] text-cyan uppercase"
            style={{ animationDelay: "40ms" }}
          >
            {profile.eyebrow}
          </p>

          <h1
            className="rise text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "90ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="rise text-gradient mt-4 text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl"
            style={{ animationDelay: "180ms" }}
          >
            {profile.headline}
          </p>

          <p
            className="rise mt-3 text-lg font-medium text-foreground/90 sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            {profile.supporting}
          </p>

          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            style={{ animationDelay: "300ms" }}
          >
            {profile.description}
          </p>

          <p
            className="rise mt-4 text-sm text-muted-foreground"
            style={{ animationDelay: "360ms" }}
          >
            Open to Opportunities · 2027 Graduate
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "380ms" }}
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-accent)", boxShadow: "var(--shadow-elevate)" }}
            >
              View My Projects
            </a>
            <a
              href="#resume"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-cyan/50 hover:bg-secondary"
            >
              View Resume
            </a>
          </div>

          <a
            href="#contact"
            className="rise mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:underline"
            style={{ animationDelay: "440ms" }}
          >
            Let’s Connect <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="fade-scale flex justify-center lg:justify-end" style={{ animationDelay: "260ms" }}>
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] opacity-60 blur-2xl"
              style={{ backgroundImage: "var(--gradient-accent)", opacity: 0.18 }}
            />
            <div
              className="relative aspect-[4/5] w-[240px] overflow-hidden rounded-[1.75rem] border sm:w-[300px]"
              style={{ borderColor: "color-mix(in oklab, var(--cyan) 45%, transparent)", boxShadow: "var(--glow-cyan)" }}
            >
              <img
                src={portraitAsset.url}
                alt="Gadhiraju D V S Subbaraju presenting at a university event"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
