import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";

const cards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/subbaraju-gadhiraju-590838358",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/saisubbaraju2004-glitch",
    href: profile.github,
    icon: Github,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let’s Build the Future with AI & Technology"
      subtitle="I’m open to opportunities where I can apply my skills in AI engineering, software development, and web technologies."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="panel group flex flex-col p-6"
          >
            <card.icon className="h-5 w-5 text-cyan" aria-hidden="true" />
            <span className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {card.label}
            </span>
            <span className="mt-1 truncate text-sm text-foreground group-hover:text-cyan">
              {card.value}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-cyan" aria-hidden="true" />
        {profile.location}
      </p>
    </Section>
  );
}
