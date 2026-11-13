import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { profile, projects } from "@/lib/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${profile.name}` },
      { name: "description", content: `Web, mobile and research projects by student ${profile.name}.` },
      { property: "og:title", content: `Projects — ${profile.name}` },
      { property: "og:description", content: "A collection of student projects across code, design and research." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow animate-rise">Portfolio</p>
      <h1 className="mt-3 animate-rise text-5xl text-foreground sm:text-7xl">
        Projects<span className="text-primary">.</span>
      </h1>
      <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground">
        Class assignments that grew legs, hackathon builds and side projects I couldn't stop thinking about.
      </p>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
