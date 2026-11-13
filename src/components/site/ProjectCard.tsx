import type { Project } from "@/lib/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group animate-rise overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-ember"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl text-card-foreground">{project.title}</h3>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
