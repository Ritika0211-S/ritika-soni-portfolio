import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, btnOutline } from "@/components/site";
import { education } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ritika Soni" },
      { name: "description", content: "About Ritika Soni: B.Tech CSE student at Government Engineering College, Bilaspur." },
      { property: "og:title", content: "About — Ritika Soni" },
      { property: "og:description", content: "Education, interests and community involvement of Ritika Soni." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="A little about me" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-lg">
          <p>I'm pursuing a B.Tech in Computer Science Engineering at Government Engineering College, Bilaspur. My interests include software development, artificial intelligence, machine learning, and web technologies.</p>
          <p>I enjoy exploring how technology can solve practical problems, experimenting with new ideas, and learning through hands-on projects. Alongside academics, I have participated in student developer communities, helped organize technical events, and contributed to volunteering activities through NSS.</p>
          <p>I'm continuing to strengthen my technical foundation while exploring opportunities to build meaningful projects, collaborate with others, and grow as a developer.</p>
        </div>
        <aside className="card h-fit p-6">
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 text-xl">{education.degree}</h2>
          <p className="mt-2">{education.institution}</p>
          <p className="mt-3 text-sm text-foreground">{education.years}</p>
          <p className="text-sm text-foreground">{education.score}</p>
        </aside>
      </div>
      <div className="mx-auto mt-16 grid max-w-6xl gap-px overflow-hidden border-y border-border bg-border px-0 md:grid-cols-3">
        {[
          ["Currently learning", "Strengthening data structures and algorithms, getting comfortable with Python data tools like NumPy and Pandas, and exploring how machine learning models are built and evaluated."],
          ["Why I build", "Projects are how I learn best. Taking an idea — like making herbal knowledge easier to explore — and turning it into something usable teaches me more than reading about it."],
          ["Community & volunteering", "I've been part of student developer communities and Google Cloud learning activities, helped organize college hackathons and quizzes, and volunteer with NSS."],
        ].map(([t, d]) => (
          <div key={t} className="bg-background p-6 md:p-8">
            <h3 className="text-xl">{t}</h3>
            <p className="mt-3">{d}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-5 pt-12">
        <Link to="/projects" className={btnOutline}>See what I'm building</Link>
      </div>
    </>
  );
}
