import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Github, Linkedin } from "./brand-icons";
import { isPlaceholder, profile, type Accent } from "@/data/portfolio";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

const linkBase = "text-sm transition-colors hover:text-foreground";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-xl text-foreground" onClick={() => setOpen(false)}>
          Ritika Soni
        </Link>
        <nav aria-label="Main" className="hidden gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`${linkBase} border-b py-1`}
              activeProps={{ className: "border-primary text-foreground font-medium", "aria-current": "page" }}
              inactiveProps={{ className: "border-transparent text-muted-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col border-t border-border bg-background px-5 py-2 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="border-b border-border py-3 last:border-0"
              activeProps={{ className: "text-foreground font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row">
        <p>Designed with curiosity by Ritika Soni.</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Github size={14} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-4 h-px w-12 bg-primary" />
      <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl">{title}</h1>
      {children && <div className="mt-5 max-w-2xl text-lg">{children}</div>}
    </div>
  );
}

export const btnPrimary =
  "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:translate-y-px";
export const btnOutline =
  "inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent active:translate-y-px";
export const btnDisabled =
  "inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-border px-5 py-2.5 text-sm text-muted-foreground";

/** Renders text; if it's a [placeholder], shows it as a dashed chip. */
export function T({ children }: { children: string }) {
  if (isPlaceholder(children))
    return <span className="rounded border border-dashed border-ochre/60 bg-accent px-1.5 py-0.5 text-sm text-ochre">{children}</span>;
  return <>{children}</>;
}

export function Tag({ children }: { children: string }) {
  if (isPlaceholder(children)) return <T>{children}</T>;
  return <span className="rounded border border-border bg-card px-2.5 py-1 text-sm text-foreground">{children}</span>;
}

export const accentText: Record<Accent, string> = { sage: "text-sage", clay: "text-clay", ochre: "text-ochre" };

export function LeafArt({ className = "", accent = "sage" }: { className?: string; accent?: Accent }) {
  return (
    <svg viewBox="0 0 120 160" fill="none" aria-hidden="true" className={`${accentText[accent]} ${className}`} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M60 155 C60 110 58 70 62 8" />
      <path d="M60 120 C40 112 26 96 22 76 C42 80 56 96 60 120Z" />
      <path d="M61 95 C80 88 94 72 98 52 C78 56 64 72 61 95Z" />
      <path d="M61 66 C46 60 36 46 34 30 C50 34 60 48 61 66Z" />
      <path d="M62 40 C72 34 78 24 80 12 C70 16 63 26 62 40Z" />
    </svg>
  );
}

export function MindArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={`text-clay ${className}`} stroke="currentColor" strokeWidth="1.1">
      <circle cx="60" cy="60" r="44" />
      <circle cx="60" cy="60" r="28" />
      <path d="M38 64 C46 52 52 70 60 58 C68 46 74 66 82 56" strokeLinecap="round" />
    </svg>
  );
}

export function BookArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={`text-ochre ${className}`} stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
      <path d="M60 34 C48 26 30 26 18 30 V92 C30 88 48 88 60 96 Z" />
      <path d="M60 34 C72 26 90 26 102 30 V92 C90 88 72 88 60 96 Z" />
      <path d="M28 44 H48 M28 54 H48 M72 44 H92 M72 54 H92" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectArt({ slug, className = "" }: { slug: string; className?: string }) {
  if (slug === "herbora-ai") return <LeafArt className={className} />;
  if (slug === "ai-mental-health-companion") return <MindArt className={className} />;
  return <BookArt className={className} />;
}
