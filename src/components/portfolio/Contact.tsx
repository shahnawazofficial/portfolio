import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import cvAsset from "@/assets/Shahnawaz-CV.pdf.asset.json";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "khanshahnawazmoh@gmail.com",
    href: "mailto:khanshahnawazmoh@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/mdshahnawazk",
    href: "https://www.linkedin.com/in/mdshahnawazk/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "shahnawazofficial",
    href: "https://github.com/shahnawazofficial",
    external: true,
  },
  {
    icon: FileText,
    label: "Résumé / CV",
    value: "View or download PDF",
    href: cvAsset.url,
    external: true,
    download: true,
  },
];

const briefTypes = [
  "Micro-drama series",
  "Product ad",
  "UGC / social",
  "Short film",
  "AI influencer",
  "Thumbnails",
  "Something else",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSending(true);

    const targetEmail = "khanshahnawazmoh@gmail.com";
    let sentSuccessfully = false;
    let activationPending = false;

    // 1. Direct browser-to-FormSubmit delivery (works in all browsers without backend dependency)
    try {
      const directRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
          _replyto: result.data.email,
          _subject: `🎬 New Portfolio Inquiry from ${result.data.name} (AI Micro-Drama & Video)`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (directRes.ok) {
        const json = (await directRes.json().catch(() => null)) as { success?: string; message?: string } | null;
        if (json?.message && json.message.toLowerCase().includes("activation")) {
          activationPending = true;
        }
        sentSuccessfully = true;
      }
    } catch {
      // In case an aggressive ad-blocker blocks third-party form domains, try internal server relay
      try {
        const relayRes = await fetch("/api/public/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result.data),
        });
        if (relayRes.ok) {
          const json = (await relayRes.json().catch(() => null)) as { message?: string } | null;
          if (json?.message && json.message.toLowerCase().includes("activation")) {
            activationPending = true;
          }
          sentSuccessfully = true;
        }
      } catch {
        // Both network requests failed
      }
    }

    setSending(false);

    if (activationPending) {
      toast.info(
        "Almost done! FormSubmit sent a 1-click activation link to khanshahnawazmoh@gmail.com. Please confirm it in your Gmail to receive submissions.",
        { duration: 9000 }
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else if (sentSuccessfully) {
      toast.success(
        "Thank you! Your message has been delivered directly to khanshahnawazmoh@gmail.com. I'll get back to you within 24 hours.",
        { duration: 6000 }
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      // 3. Fail-safe mailto trigger so no submission is ever dropped
      toast.error(
        "Could not connect to the form mailer. Opening your email app to send directly...",
        { duration: 5000 }
      );
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        `Project Brief from ${result.data.name}`
      )}&body=${encodeURIComponent(
        `Name: ${result.data.name}\nEmail: ${result.data.email}\n\nBrief:\n${result.data.message}`
      )}`;
      window.location.href = mailtoUrl;
    }
  };

  const addBrief = (type: string) => {
    setForm((f) => ({
      ...f,
      message: f.message.trim() ? `${f.message.trim()}\n${type}: ` : `${type} — `,
    }));
  };

  return (
    <section id="contact" className="cv-auto relative">
      <div className="container-prose section-pad">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Let's make something"
          titleAccent="worth watching."
          lead="Tell me the objective, the platform and the deadline. A one-paragraph brief is enough to quote from."
        />

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Reach */}
          <div className="flex min-w-0 flex-col gap-4">
            <Reveal>
              <div className="pane flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4">
                <span className="inline-flex items-center gap-2.5">
                  <span className="status-dot" aria-hidden />
                  <span className="mono-cap text-foreground/75">Open for 2026 work</span>
                </span>
                <span className="mono-cap inline-flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.7} /> Replies within 24h
                </span>
              </div>
            </Reveal>

            <div className="grid min-w-0 gap-3">
              {contacts.map((c, i) => (
                <Reveal key={c.label} delay={i}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    className="pane pane-lift group flex items-center gap-4 p-4 sm:p-5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/60 text-uv-deep transition-all duration-300 group-hover:border-transparent group-hover:bg-linear-to-br group-hover:from-uv-bright group-hover:to-uv group-hover:text-white">
                      <c.icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="mono-cap text-muted-foreground">{c.label}</p>
                      <p className="mt-1 text-[15px] font-medium [overflow-wrap:anywhere]">
                        {c.value}
                      </p>
                    </div>
                    {c.download ? (
                      <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-uv" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-uv motion-reduce:transform-none" />
                    )}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Brief */}
          <Reveal delay={1} className="min-w-0">
            {submitted ? (
              <div className="pane flex flex-col items-center justify-center p-8 text-center sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/25">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="type-title mt-4 text-xl font-semibold">Message delivered!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your brief has been forwarded directly to{" "}
                  <span className="font-medium text-foreground">khanshahnawazmoh@gmail.com</span>.
                  I review every project brief personally and reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost mt-6 text-xs text-muted-foreground hover:text-foreground"
                >
                  Send another message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="pane p-6 sm:p-8">
                <p className="mono-cap text-muted-foreground">Start a brief</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="c-name" className="mono-cap mb-2 block text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      placeholder="Your name"
                      className="field"
                    />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="c-email" className="mono-cap mb-2 block text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      placeholder="you@email.com"
                      className="field"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mono-cap mb-2.5 block text-muted-foreground">
                    What do you need?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {briefTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => addBrief(t)}
                        className="chip !py-1.5 text-[12.5px] text-muted-foreground hover:border-uv/35 hover:text-uv-deep"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="c-message" className="mono-cap mb-2 block text-muted-foreground">
                    Brief
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    placeholder="Objective, platform, runtime, deadline..."
                    className="field resize-none"
                  />
                  <p className="tnum mt-2 text-right text-[11px] text-muted-foreground/70">
                    {form.message.length}/1000
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group btn btn-uv mt-4 w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Delivering to khanshahnawazmoh@gmail.com…" : "Send message"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                </button>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-black/5 pt-3.5 text-[12px] text-muted-foreground dark:border-white/5">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <span className="status-dot !h-1.5 !w-1.5 !bg-emerald-500" aria-hidden />
                    Direct to khanshahnawazmoh@gmail.com
                  </span>
                  <a
                    href="mailto:khanshahnawazmoh@gmail.com?subject=Project%20Brief%20%E2%80%94%20AI%20Video%20%26%20Micro-Drama"
                    className="link-line text-[11px] text-uv-deep hover:underline"
                  >
                    Prefer mail client? &rarr;
                  </a>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
