import { useState } from "react";
import { z } from "zod";
import { profile } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  type: z.enum(["Internship", "Collaboration", "Hackathon / Event", "Other"]),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    if (!profile.email) {
      setStatus("Message is valid, but no email address has been configured yet. Please reach out on LinkedIn for now.");
      return;
    }
    const subject = encodeURIComponent(`[${r.data.type}] from ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-2xl p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm">Name</label>
          <input id="name" name="name" className={field} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm">Email</label>
          <input id="email" name="email" type="email" className={field} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="type" className="mb-1.5 block text-sm">Inquiry type</label>
        <select id="type" name="type" className={field} defaultValue="Internship">
          <option>Internship</option><option>Collaboration</option><option>Hackathon / Event</option><option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm">Message</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" className="bg-brand w-full rounded-xl px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
        Send message
      </button>
      <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{status}</p>
    </form>
  );
}
