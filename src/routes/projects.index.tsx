import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, ProjectArt, T, Tag, accentText, btnPrimary } from "@/components/site";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ritika Soni" },
      { name: "description", content: "Projects by Ritika Soni: Herbora-AI, AI Mental Health Companion and Learnify." },
      { property: "og:title", content: "Projects — Ritika Soni" },
      { property: "og:description", content: "A small collection of things I've built and am building." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [first, ...rest] = projects;
  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I'm building and learning from">
        Each project is labelled honestly — current work, prototypes and concepts.
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-8 px-5">
        <article className="card grid gap-8 overflow-hidden p-8 md:grid-cols-[1.6fr_1fr] md:p-10">
          <div>
            <div className="flex items-center gap-3 text-sm">
              <span className="font-display text-sage">{first.number}</span>
              <span className="rounded-full border border-sage/50 px-2.5 py-0.5 text-xs text-sage">{first.status}</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl">{first.name}</h2>
            <p className="mt-4 text-lg">{first.summary}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {first.features.filter((f) => !f.planned).map((f) => (
                <li key={f.title} className="border-l-2 border-sage/50 pl-3 text-sm text-foreground">{f.title}</li>
              ))}
            </ul>
            <Link to="/projects/$slug" params={{ slug: first.slug }} className={`${btnPrimary} mt-8`}>
              View Project <ArrowRight size={14} />
            </Link>
          </div>
          <div className="hidden items-center justify-center rounded-md bg-accent md:flex">
            <ProjectArt slug={first.slug} className="h-56 w-44" />
          </div>
        </article>
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((p) => (
            <article key={p.slug} className="card flex flex-col p-8">
              <div className="flex items-start justify-between">
                <span className={`font-display ${accentText[p.accent]}`}>{p.number}</span>
                <ProjectArt slug={p.slug} className="h-14 w-14" />
              </div>
              <h2 className="mt-2 text-2xl">{p.name}</h2>
              <p className="mt-1 text-sm"><T>{p.status}</T></p>
              <p className="mt-4 flex-1">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">
                View Project <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
