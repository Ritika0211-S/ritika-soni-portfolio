import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Footer, Header, StatusBadge } from "@/components/site";
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
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{title}</h2>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function ProjectPage() {
  const p = Route.useLoaderData();
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5 pt-28 pb-20">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={16} /> All projects</Link>
        <div className="mt-8 flex flex-wrap items-center gap-3"><StatusBadge status={p.status} /></div>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{p.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{p.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.github
            ? <a href={p.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 hover:border-primary/40"><Github size={16} /> Repository</a>
            : <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2.5 text-sm text-muted-foreground"><Github size={16} /> Repository not linked yet</span>}
          {p.demo
            ? <a href={p.demo} target="_blank" rel="noreferrer" className="bg-brand inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-primary-foreground"><ExternalLink size={16} /> Live demo</a>
            : <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2.5 text-sm text-muted-foreground"><ExternalLink size={16} /> No live demo yet</span>}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Block title="Problem">{p.problem}</Block>
          <Block title="Solution">{p.solution}</Block>
          <Block title="Key features"><ul className="list-inside list-disc space-y-1">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></Block>
          <Block title="My contribution">{p.contribution}</Block>
          <div className="md:col-span-2"><Block title="Tech stack"><div className="flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="rounded-lg bg-secondary px-2.5 py-1 font-mono text-xs">{s}</span>)}</div></Block></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
