import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, T } from "@/components/site";
import { activities } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Community, Leadership & Activities — Ritika Soni" },
      { name: "description", content: "Google Cloud Arcade facilitation, college technical events and NSS volunteering." },
      { property: "og:title", content: "Community, Leadership & Activities — Ritika Soni" },
      { property: "og:description", content: "Student community involvement, event coordination and volunteering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Experience & Activities" title="Community, Leadership & Activities" />
      <ol className="mx-auto max-w-4xl px-5">
        {activities.map((a) => (
          <li key={a.title} className="relative border-l border-border pb-12 pl-8 last:pb-0">
            <span className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm text-foreground"><T>{a.period}</T></p>
            <h2 className="mt-1 text-2xl">{a.title}</h2>
            <p className="mt-3">{a.text}</p>
            <p className="mt-2 text-sm"><T>{a.extra}</T></p>
            <p className="mt-3 text-sm text-foreground">{a.tags.join(" · ")}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
