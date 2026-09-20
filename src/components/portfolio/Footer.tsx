import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const sitemap = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#skills" },
  { label: "Journey", href: "#experience" },
];

const offerings = [
  "AI micro-dramas",
  "UGC & marketing ads",
  "AI short films",
  "Image-to-video",
  "Thumbnail design",
  "Sound design",
  "Content strategy",
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mdshahnawazk/" },
  { icon: Github, label: "GitHub", href: "https://github.com/shahnawazofficial" },
  { icon: Mail, label: "Email", href: "mailto:khanshahnawazmoh@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative pb-8 pt-4">
      <div className="container-page">
        <Reveal>
          <div className="pane overflow-hidden p-7 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              {/* CTA */}
              <div>
                <span className="chip">
                  <span className="status-dot" aria-hidden />
                  <span className="mono-cap text-foreground/70">
                    Taking on new work
                  </span>
                </span>

                <a
                  href="#contact"
                  className="group mt-6 block max-w-[13ch] type-display text-[clamp(2.4rem,7vw,4.6rem)] text-foreground"
                >
                  Let&rsquo;s make it{" "}
                  <span className="uv-text">move</span>
                  <ArrowUpRight className="ml-1 inline h-[0.55em] w-[0.55em] text-uv transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                </a>

                <a
                  href="mailto:khanshahnawazmoh@gmail.com"
                  className="link-line mt-8 inline-block text-[15px] text-muted-foreground transition-colors duration-300 hover:text-foreground [overflow-wrap:anywhere]"
                >
                  khanshahnawazmoh@gmail.com
                </a>
              </div>

              {/* Index */}
              <div className="grid grid-cols-2 gap-8">
                <nav aria-label="Sections">
                  <p className="mono-cap mb-5 text-muted-foreground/70">Index</p>
                  <ul className="space-y-2.5">
                    {sitemap.map((n) => (
                      <li key={n.href}>
                        <a
                          href={n.href}
                          className="link-line text-[14.5px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                        >
                          {n.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div>
                  <p className="mono-cap mb-5 text-muted-foreground/70">Services</p>
                  <ul className="space-y-2.5">
                    {offerings.map((o) => (
                      <li key={o} className="text-[14.5px] leading-snug text-muted-foreground">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Wordmark */}
            <div className="mt-12 sm:mt-16">
              <p
                aria-hidden
                className="type-display select-none bg-linear-to-b from-uv/18 to-uv/[0.04] bg-clip-text leading-[0.78] text-transparent"
                style={{ fontSize: "clamp(3.2rem, 16vw, 13rem)" }}
              >
                SHAHNAWAZ
              </p>
            </div>

            <hr className="divider-glow mt-8" />

            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <p className="text-[13px] text-muted-foreground">
                  © {new Date().getFullYear()} Mohammad Shahnawaz Khan
                </p>
                <span className="mono-cap text-muted-foreground/60">
                  AI Video Generalist · India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="chip inline-flex h-10 w-10 items-center justify-center !p-0 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-uv/40 hover:text-uv motion-reduce:transform-none"
                  >
                    <s.icon className="h-[17px] w-[17px]" strokeWidth={1.7} />
                  </a>
                ))}
                <a
                  href="#home"
                  aria-label="Back to top"
                  className="chip ml-1 inline-flex h-10 w-10 items-center justify-center !p-0 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-uv/40 hover:text-uv motion-reduce:transform-none"
                >
                  <ArrowUp className="h-[17px] w-[17px]" strokeWidth={1.7} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
