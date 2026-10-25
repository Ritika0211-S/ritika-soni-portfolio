import { createFileRoute } from "@tanstack/react-router";
import { FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader, T } from "@/components/site";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ritika Soni" },
      { name: "description", content: "Get in touch with Ritika Soni via LinkedIn, GitHub or the contact form." },
      { property: "og:title", content: "Contact — Ritika Soni" },
      { property: "og:description", content: "Have an idea or want to collaborate?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const row = "flex items-center gap-3 border-b border-border py-4 text-foreground";

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Have an idea or want to collaborate?">
        I'm always interested in learning, exchanging ideas, and exploring opportunities to build useful things with technology.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.3fr]">
        <div>
          <div className={row}>
            <Mail size={16} aria-hidden="true" />
            {profile.email ? <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a> : <T>[Email address — to be added]</T>}
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className={`${row} hover:underline`}><Github size={16} /> github.com/Ritika0211-S</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${row} hover:underline`}><Linkedin size={16} /> linkedin.com/in/ritika-soni</a>
          <div className={row}>
            <FileText size={16} aria-hidden="true" />
            {profile.resume ? <a href={profile.resume} download className="hover:underline">Download resume</a> : <T>[Resume — to be uploaded]</T>}
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
