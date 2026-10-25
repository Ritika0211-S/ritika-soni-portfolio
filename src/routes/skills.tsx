import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Tag } from "@/components/site";
import { skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Ritika Soni" },
      { name: "description", content: "Languages, CS fundamentals, data tools and developer tools Ritika Soni works with." },
      { property: "og:title", content: "Skills — Ritika Soni" },
      { property: "og:description", content: "What I've been learning and using so far." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Skills" title="What I've been learning and using">
        No percentages — just an honest list of the tools and concepts I've worked with so far.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-x-12 px-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <section key={g.title} className="border-t border-border py-7">
            <h2 className="text-xl">{g.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">{g.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            {g.note && <p className="mt-3 text-sm italic">{g.note}</p>}
          </section>
        ))}
      </div>
    </>
  );
}
