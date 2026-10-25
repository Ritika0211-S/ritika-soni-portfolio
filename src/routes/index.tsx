import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, GraduationCap, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer, Header, Placeholder, Section, Socials, StatusBadge } from "@/components/site";
import { HeroVisual } from "@/components/HeroVisual";
import { ContactForm } from "@/components/ContactForm";
import { achievements, education, experiences, exploring, profile, projects, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritika Soni — CSE Student, AI/ML Learner & Builder" },
      { name: "description", content: "Portfolio of Ritika Soni, Computer Science Engineering student at Government Engineering College, Bilaspur — projects, community work and learning." },
      { property: "og:title", content: "Ritika Soni — Building ideas into meaningful technology" },
      { property: "og:description", content: "CSE student exploring software development, AI/ML and developer communities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function RoleCycler() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-8 overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={reduce ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: -24, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gradient font-semibold"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pt-24 pb-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs text-muted-foreground">
              <Sparkles size={13} className="text-primary" /> {profile.location}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Hi, I'm Ritika Soni.
              <span className="mt-2 block text-gradient">{profile.tagline}</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground"><RoleCycler /></p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="bg-brand inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                Explore My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="glass rounded-xl px-5 py-3 font-medium transition-colors hover:border-primary/50">Let's Connect</a>
              <div className="ml-1"><Socials /></div>
            </div>
          </motion.div>
          <HeroVisual />
        </section>

        <Section id="about" eyebrow="01 · About" title="Curious, hands-on, and always learning.">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="space-y-4 leading-relaxed text-muted-foreground md:col-span-3">
              <p>I'm studying Computer Science Engineering at <span className="text-foreground">Government Engineering College, Bilaspur</span>. I'm drawn to the space where software meets real problems — especially through artificial intelligence and machine learning.</p>
              <p>I learn best by building. Whether it's a small experiment or a project idea, I enjoy turning concepts into something people can actually use, and figuring things out along the way.</p>
              <p>Outside of coursework, I take part in developer communities and technical events, where I get to collaborate, share what I've learned, and learn from others.</p>
            </div>
            <ul className="grid gap-3 md:col-span-2">
              {["Software development", "AI / ML", "Project building", "Developer communities", "Learning by experimenting"].map((t) => (
                <li key={t} className="glass rounded-xl px-4 py-3 text-sm">{t}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 · Skills" title="Technical toolkit">
          <p className="-mt-8 mb-8 text-sm text-muted-foreground">Dashed tags are placeholders awaiting confirmation.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="glass rounded-2xl p-5 transition-colors hover:border-primary/30">
                <h3 className="mb-4 font-medium">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s.name} className={`rounded-lg px-2.5 py-1 font-mono text-xs ${s.verified ? "bg-secondary" : "border border-dashed border-warning/50 text-warning"}`}>{s.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="03 · Projects" title="Things I'm building">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, idx) => (
              <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="grid-lines absolute inset-x-0 top-0 h-28 opacity-60 [mask-image:linear-gradient(black,transparent)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
                    <StatusBadge status={p.status} />
                  </div>
                  <h3 className="mt-10 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary">View details <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="04 · Experience & Leadership" title="Community and leadership">
          <ol className="relative space-y-6 border-l border-border pl-8">
            {experiences.map((e) => (
              <li key={e.title} className="relative">
                <span className="bg-brand absolute -left-[37px] top-2 h-3 w-3 rounded-full" />
                <div className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{e.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="text-sm text-primary">{e.org}</p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  {!e.verified && <p className="mt-3 text-xs"><Placeholder>Needs verification</Placeholder></p>}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="achievements" eyebrow="05 · Achievements" title="Certifications & recognition">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.title} className="glass rounded-2xl p-5">
                <Award className="text-violet" size={22} />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{a.category}</p>
                <p className="mt-1 text-sm">{a.link ? <a href={a.link} target="_blank" rel="noreferrer" className="hover:text-primary">{a.title}</a> : <Placeholder>{a.title}</Placeholder>}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="06 · Education" title="Education">
          <div className="glass flex flex-col gap-6 rounded-2xl p-7 md:flex-row">
            <div className="bg-brand flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground"><GraduationCap /></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="text-muted-foreground">{education.institution}</p>
              <p className="text-sm"><Placeholder>{education.years}</Placeholder></p>
              <p className="text-sm"><Placeholder>{education.details}</Placeholder></p>
              <div className="flex flex-wrap gap-2 pt-2">{education.coursework.map((c) => <span key={c} className="rounded-lg border border-dashed border-warning/50 px-2.5 py-1 font-mono text-xs text-warning">{c}</span>)}</div>
            </div>
          </div>
        </Section>

        <Section id="exploring" eyebrow="07 · Now" title="Currently Exploring">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {exploring.map((x) => (
              <div key={x.title} className="glass rounded-2xl p-5">
                <span className="inline-block h-2 w-2 rounded-full bg-success" />
                <h3 className="mt-3 text-sm font-semibold">{x.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{x.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="08 · Contact" title={<>Have an idea? <span className="text-gradient">Let's build something meaningful.</span></>}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">Open to internships, collaborations, hackathons and community events.</p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 hover:border-primary/40"><Linkedin className="text-primary" /> LinkedIn profile</a>
              {profile.email
                ? <a href={`mailto:${profile.email}`} className="glass flex items-center gap-3 rounded-xl p-4 hover:border-primary/40"><Mail className="text-primary" /> {profile.email}</a>
                : <div className="glass flex items-center gap-3 rounded-xl p-4"><Mail className="text-muted-foreground" /> <Placeholder>Professional email — to be added</Placeholder></div>}
              {!profile.github && <div className="glass rounded-xl p-4 text-sm"><Placeholder>GitHub profile — to be added</Placeholder></div>}
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
