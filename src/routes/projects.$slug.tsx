import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, ImageIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Github } from "@/components/brand-icons";
import { ProjectArt, T, Tag, accentText, btnDisabled, btnOutline, btnPrimary } from "@/components/site";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Ritika Soni` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.name} — Ritika Soni` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary" },
        ]
      : [{ title: "Project unavailable" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectPage,
});

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-8 md:grid md:grid-cols-[200px_1fr] md:gap-8">
      <h2 className="mb-3 text-xl">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function ProjectPage() {
  const p = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-4xl px-5 pt-12">
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm hover:text-foreground">
        <ArrowLeft size={14} /> All projects
      </Link>
      <header className="mt-8 flex items-start justify-between gap-6">
        <div>
          <p className={`font-display ${accentText[p.accent]}`}>Project {p.number} · <T>{p.status}</T></p>
          <h1 className="mt-3 text-4xl md:text-5xl">{p.name}</h1>
          <p className="mt-5 text-lg">{p.summary}</p>
        </div>
        <ProjectArt slug={p.slug} className="hidden h-32 w-28 shrink-0 sm:block" />
      </header>
      <div className="mt-8 flex flex-wrap gap-3">
        {p.demo ? (
          <a href={p.demo} target="_blank" rel="noreferrer" className={btnPrimary}><ExternalLink size={14} /> Live Demo</a>
        ) : (
          <span className={btnDisabled} title="Demo link not added yet">Live Demo — link coming soon</span>
        )}
        {p.github ? (
          <a href={p.github} target="_blank" rel="noreferrer" className={btnOutline}><Github size={14} /> GitHub Repository</a>
        ) : (
          <span className={btnDisabled} title="Repository link not added yet">GitHub Repository — link coming soon</span>
        )}
      </div>
      {p.disclaimer && (
        <p className="mt-8 rounded-md border-l-2 border-primary bg-cream px-4 py-3 text-sm text-foreground">{p.disclaimer}</p>
      )}
      <div className="mt-10">
        <Block title="Problem"><p><T>{p.problem}</T></p></Block>
        <Block title="Solution"><p><T>{p.solution}</T></p></Block>
        <Block title="Key features">
          <ul className="space-y-4">
            {p.features.map((f) => (
              <li key={f.title}>
                <p className="font-medium text-foreground">
                  <T>{f.title}</T>
                  {f.planned && <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-xs font-normal">Planned</span>}
                </p>
                <p className="mt-1"><T>{f.text}</T></p>
              </li>
            ))}
          </ul>
        </Block>
        <Block title="My role"><p><T>{p.role}</T></p></Block>
        <Block title="Technologies"><div className="flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div></Block>
        <Block title="Screenshots">
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex aspect-video flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-card text-sm">
                <ImageIcon size={18} aria-hidden="true" /> Add screenshot {i}
              </div>
            ))}
          </div>
        </Block>
        <Block title="Challenges & learnings"><p><T>{p.learnings}</T></p></Block>
        <Block title="Future improvements">
          <ul className="list-disc space-y-1 pl-5">{p.future.map((f) => <li key={f}><T>{f}</T></li>)}</ul>
        </Block>
      </div>
    </article>
  );
}
