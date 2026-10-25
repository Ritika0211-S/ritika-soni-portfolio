import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";
import { PageHeader, T } from "@/components/site";
import { certificates } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Ritika Soni" },
      { name: "description", content: "NSS B and C certificates and other learning certificates of Ritika Soni." },
      { property: "og:title", content: "Certifications — Ritika Soni" },
      { property: "og:description", content: "Certificates from NSS, language courses and technical learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHeader eyebrow="Certifications" title="Certificates & learning">
        Certificate images and links will be added as they're verified.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <article key={i} className="card flex flex-col overflow-hidden">
            {c.image ? (
              <img src={c.image} alt={`${c.title} certificate`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            ) : (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border-b border-dashed border-border bg-accent text-sm">
                <Award size={20} className="text-primary" aria-hidden="true" /> Certificate image to be added
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="eyebrow">{c.category}</p>
              <h2 className="mt-2 text-lg"><T>{c.title}</T></h2>
              <dl className="mt-3 space-y-1 text-sm">
                <div><dt className="inline text-foreground">Issued by: </dt><dd className="inline"><T>{c.issuer}</T></dd></div>
                <div><dt className="inline text-foreground">Completed: </dt><dd className="inline"><T>{c.date}</T></dd></div>
                {c.credentialId && <div><dt className="inline text-foreground">Credential ID: </dt><dd className="inline">{c.credentialId}</dd></div>}
              </dl>
              <div className="mt-auto flex gap-4 pt-4 text-sm">
                {c.file && <a href={c.file} target="_blank" rel="noreferrer" className="text-foreground hover:underline">View PDF</a>}
                {c.verifyUrl && <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-foreground hover:underline">Verify <ExternalLink size={12} /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
