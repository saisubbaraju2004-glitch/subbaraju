import { aboutParagraphs, focusAreas } from "@/data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="Profile" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <aside className="panel h-fit p-7">
          <h3 className="text-sm font-semibold tracking-[0.18em] text-cyan uppercase">Engineering Focus</h3>
          <div aria-hidden="true" className="hairline my-5 h-px w-full" />
          <ul className="space-y-3">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-sm text-foreground/90">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                />
                {area}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
