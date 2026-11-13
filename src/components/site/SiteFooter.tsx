import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Made with curiosity.
        </p>
        <div className="flex gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
