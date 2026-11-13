import { createFileRoute } from "@tanstack/react-router";
import { profile, skills, timeline } from "@/lib/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      { name: "description", content: `Education, skills and achievements of ${profile.name}.` },
      { property: "og:title", content: `About — ${profile.name}` },
      { property: "og:description", content: "My story, skills and journey as a student." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <section className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div className="animate-rise">
          <p className="eyebrow">About me</p>
          <h1 className="mt-3 text-5xl leading-tight text-foreground sm:text-6xl">
            Learning out <span className="text-ember">loud</span>.
          </h1>
        </div>
        <div className="animate-rise space-y-5 text-lg leading-relaxed text-foreground/85" style={{ animationDelay: "150ms" }}>
          <p>
            I'm {profile.name}, a student who loves figuring out how things work — and then making them
            work a little better. Most of my projects start as a question in class and end as something
            I can share.
          </p>
          <p className="text-muted-foreground">
            Outside of studies you'll find me at hackathons, sketching interface ideas, or helping friends
            debug their code.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <p className="eyebrow">Toolkit</p>
        <h2 className="mt-3 text-4xl text-foreground">Skills</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-2xl text-primary">{s.group}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-card-foreground">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <p className="eyebrow">Journey</p>
        <h2 className="mt-3 text-4xl text-foreground">Education & achievements</h2>
        <ol className="mt-10 border-l border-border">
          {timeline.map((t) => (
            <li key={t.title} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{t.period}</p>
              <h3 className="mt-2 text-2xl text-foreground">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.place}</p>
              <p className="mt-2 max-w-xl text-foreground/80">{t.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
