import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Github, Linkedin } from "./brand-icons";
import { useState, type ReactNode } from "react";
import { profile, type ProjectStatus } from "@/data/portfolio";

const nav = [
  ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Experience", "experience"], ["Education", "education"], ["Contact", "contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-lg font-semibold">
          Ritika<span className="text-gradient">.</span>
        </Link>
        <nav aria-label="Main" className="hidden gap-7 md:flex">
          {nav.map(([l, id]) => (
            <a key={id} href={`/#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {nav.map(([l, id]) => (
            <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="py-2 text-muted-foreground hover:text-foreground">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Socials({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass rounded-full p-2.5 transition-colors hover:text-primary">
        <Linkedin size={size} />
      </a>
      {profile.github ? (
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass rounded-full p-2.5 transition-colors hover:text-primary">
          <Github size={size} />
        </a>
      ) : (
        <span title="GitHub link not added yet" aria-label="GitHub (not added yet)" className="glass cursor-not-allowed rounded-full p-2.5 opacity-40">
          <Github size={size} />
        </span>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display font-semibold">Ritika Soni</p>
          <p className="text-sm text-muted-foreground">Computer Science Engineering | Technology | Building &amp; Learning</p>
        </div>
        <Socials size={16} />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ritika Soni</p>
      </div>
    </footer>
  );
}

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 id={`${id}-h`} className="mt-3 mb-12 text-3xl font-semibold md:text-4xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

const statusStyle: Record<ProjectStatus, string> = {
  Completed: "text-success border-success/40",
  Ongoing: "text-primary border-primary/40",
  Planned: "text-violet border-violet/40",
  "To verify": "text-warning border-warning/40",
};
export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusStyle[status]}`}>{status}</span>;
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="rounded-md border border-dashed border-warning/50 px-2 py-0.5 text-warning">{children}</span>;
}
