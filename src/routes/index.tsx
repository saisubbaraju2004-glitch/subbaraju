import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievement } from "@/components/portfolio/Achievement";
import { ResumeCTA } from "@/components/portfolio/ResumeCTA";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Gadhiraju D V S Subbaraju | AI Engineering & Web Development";
const description =
  "Portfolio of Gadhiraju D V S Subbaraju, a Computer Science and Engineering student focused on AI Engineering, Generative AI, Web Development, and practical technology solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gadhiraju D V S Subbaraju",
          jobTitle: "AI Engineering | Web Development",
          email: "mailto:saisubbaraju2004@gmail.com",
          address: "Palivela, Near Rajahmundry, Andhra Pradesh",
          alumniOf: "Srinivas Institute of Engineering and Technology",
          sameAs: [
            "https://www.linkedin.com/in/subbaraju-gadhiraju-590838358",
            "https://github.com/saisubbaraju2004-glitch",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <ExperienceTimeline />
        <Education />
        <Certifications />
        <Achievement />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
