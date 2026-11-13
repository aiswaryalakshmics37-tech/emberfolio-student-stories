import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/ProjectCard";
import { profile, projects } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Student Portfolio` },
      { name: "description", content: `Portfolio of ${profile.name}: student projects, skills and achievements.` },
      { property: "og:title", content: `${profile.name} — Student Portfolio` },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="grain overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-24">
          <div className="animate-rise">
            <p className="eyebrow">Hello, I'm</p>
            <h1 className="mt-4 text-6xl leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
              Aiswarya<span className="text-ember">lakshmi</span>
              <br />
              CS<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {profile.role}
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/85">{profile.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  See my work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="ember" size="xl">
                <Link to="/contact">Say hello</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-rise" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-ember opacity-20 blur-3xl" />
            <img
              src={heroArt}
              alt="Illustrated study desk glowing in ember light"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl border border-border object-cover"
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card px-5 py-4 shadow-ember">
              <p className="font-display text-3xl text-primary">{projects.length}+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Projects built</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-4xl text-foreground sm:text-5xl">Things I've made</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            All projects <ArrowDownRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grain overflow-hidden rounded-2xl bg-ember px-8 py-14 text-center sm:px-16">
          <h2 className="text-4xl text-primary-foreground sm:text-5xl">Open to internships & collabs</h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Have a project, a team, or an opportunity in mind? I'd love to hear about it.
          </p>
          <Button asChild size="xl" className="mt-8 bg-background text-foreground hover:bg-card">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
