import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera } from "lucide-react";
import { LeafArt, btnOutline, btnPrimary } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritika Soni — Computer Science Engineering Student" },
      { name: "description", content: "Portfolio of Ritika Soni, a CSE student exploring software development, AI and machine learning." },
      { property: "og:title", content: "Ritika Soni — Computer Science Engineering Student" },
      { property: "og:description", content: "Building with curiosity. Growing through technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const highlights = ["Computer Science Engineering", "AI/ML Exploration", "Student Developer Community", "NSS Volunteer"];

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.4fr_1fr] md:pt-24">
        <div>
          <p className="eyebrow">Computer Science Engineering Student</p>
          <div className="mt-4 h-px w-12 bg-primary" />
          <h1 className="mt-6 text-4xl md:text-[3.4rem]">
            Building with curiosity. <em className="font-normal">Growing through technology.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg">
            I'm Ritika Soni, a Computer Science Engineering student interested in software development, artificial intelligence, machine learning, and building technology that can make everyday tasks simpler and more useful.
          </p>
          <p className="mt-4 max-w-xl italic">Exploring ideas, learning by building, and turning curiosity into practical projects.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className={btnPrimary}>Explore My Projects</Link>
            <Link to="/about" className={btnOutline}>Get to Know Me</Link>
            <Link to="/contact" className="ml-2 inline-flex items-center gap-1 text-sm text-foreground underline-offset-4 hover:underline">
              Let's Connect <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs">
          <LeafArt className="absolute -top-8 -left-10 h-40 w-32 opacity-70" />
          <div className="card relative flex aspect-[4/5] flex-col items-center justify-center gap-2 border-dashed text-center">
            <Camera size={22} className="text-primary" aria-hidden="true" />
            <p className="text-sm text-foreground">Photo placeholder</p>
            <p className="px-6 text-xs">Replace with your own photo in src/routes/index.tsx</p>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-cream">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4">
          {highlights.map((h, i) => (
            <li key={h} className={`py-6 text-center md:py-8 ${i ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""}`}>
              <span className="font-display text-foreground">{h}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
