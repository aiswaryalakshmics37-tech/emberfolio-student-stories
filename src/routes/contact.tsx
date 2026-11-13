import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      { name: "description", content: `Get in touch with ${profile.name} for internships, projects or collaborations.` },
      { property: "og:title", content: `Contact — ${profile.name}` },
      { property: "og:description", content: "Say hello — open to internships and collaborations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="grain mx-auto max-w-6xl px-6 py-24">
      <p className="eyebrow animate-rise">Contact</p>
      <h1 className="mt-3 animate-rise text-5xl leading-[1] text-foreground sm:text-7xl lg:text-8xl">
        Let's make
        <br />
        something <span className="text-ember">great</span>.
      </h1>
      <p className="mt-8 max-w-lg animate-rise text-lg text-muted-foreground">
        Internships, group projects, events or just a friendly chat — my inbox is always open.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button asChild variant="hero" size="xl">
          <a href={`mailto:${profile.email}`}>
            <Mail /> {profile.email}
          </a>
        </Button>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-6">
          <MapPin className="size-5 text-primary" />
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
          <p className="mt-1 text-lg text-card-foreground">{profile.location}</p>
        </div>
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-ember"
          >
            <ArrowUpRight className="size-5 text-primary transition-transform group-hover:rotate-45" />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Find me on</p>
            <p className="mt-1 text-lg text-card-foreground">{s.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
