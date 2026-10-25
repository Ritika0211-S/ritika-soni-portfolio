import { useState } from "react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { btnPrimary } from "./site";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const r = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      setStatus({ ok: false, text: "Please fix the highlighted fields." });
      return;
    }
    setErrors({});
    if (!profile.email) {
      setStatus({ ok: false, text: "Your message looks good, but an email address hasn't been added to this site yet. Please reach out on LinkedIn for now." });
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({ ok: true, text: "Opening your email app with the message ready to send." });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4 p-6">
      {(["name", "email"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1.5 block text-sm text-foreground">{k === "name" ? "Name" : "Email"}</label>
          <input id={k} name={k} type={k === "email" ? "email" : "text"} className={field} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} />
          {errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-destructive">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-foreground">Message</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby="message-err" />
        {errors.message && <p id="message-err" className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" className={btnPrimary}>Send message</button>
      <p className="text-xs">This opens your own email app — nothing is stored on this website.</p>
      <p role="status" aria-live="polite" className={`text-sm ${status?.ok ? "text-sage" : "text-destructive"}`}>{status?.text}</p>
    </form>
  );
}
