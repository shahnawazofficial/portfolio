import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, RevealLines } from "./Reveal";
import portrait from "@/assets/mohammad-shahnawaz-portrait.webp.asset.json";

const traits = [
  {
    k: "Micro-drama mastery",
    v: "Episodic arcs, retention hooks & cliffhangers",
    icon: "🎬",
  },
  {
    k: "Character consistency",
    v: "Persistent faces, costumes & scene continuity",
    icon: "🎭",
  },
  {
    k: "End to end",
    v: "Script → gen → lip-sync → score → delivery",
    icon: "⚡",
  },
];

const stats = [
  { value: "8", unit: "min", label: "Longest AI film shipped", wide: true },
  { value: "2", unit: "+", label: "Years in AI & post" },
  { value: "8", unit: "+", label: "Generative tools in rotation" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section id="about" className="relative overflow-hidden" ref={sectionRef}>
      {/* Subtle ambient backdrop for this section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 15% 50%, color-mix(in oklab, var(--uv) 6%, transparent), transparent 80%), radial-gradient(ellipse 50% 40% at 85% 30%, color-mix(in oklab, var(--cyan-edge) 5%, transparent), transparent 80%)",
        }}
      />

      <div className="container-prose section-pad">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-24">

          {/* ── Portrait Column ── */}
          <Reveal direction="right" className="lg:sticky lg:top-28 lg:self-start">
            <div className="pane pane-lift group relative p-2.5">
              {/* Corner accent lines */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-uv/30 rounded-tl-sm transition-colors duration-500 group-hover:border-uv/60"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-uv/30 rounded-br-sm transition-colors duration-500 group-hover:border-uv/60"
              />

              <div className="pane-media overflow-hidden">
                <motion.img
                  src={portrait.url}
                  alt="Mohammad Shahnawaz Khan"
                  width={959}
                  height={1280}
                  decoding="async"
                  loading="lazy"
                  style={{ y: portraitY }}
                  initial={{ scale: 1.06, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-4/5 w-full object-cover [filter:saturate(0.88)_contrast(1.04)] transition-[filter] duration-700 group-hover:[filter:saturate(1.08)_contrast(1.02)] motion-reduce:transition-none"
                />
                {/* Photo gradient overlay — richer, multi-stop */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--uv-deep) 55%, oklch(0.08 0.04 290)) 0%, color-mix(in oklab, var(--uv) 12%, transparent) 28%, transparent 55%)",
                  }}
                />
                {/* Subtle vignette on edges */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow: "inset 0 0 60px 10px oklch(0.15 0.04 290 / 25%)",
                  }}
                />
              </div>

              {/* Name + role footer */}
              <div className="flex items-end justify-between gap-4 px-3 pb-1.5 pt-4">
                <div>
                  <p className="mono-cap text-muted-foreground">
                    Mohammad Shahnawaz Khan
                  </p>
                  <p className="type-display mt-1.5 text-[1.12rem] text-foreground">
                    AI Micro-Drama &amp; Video Director
                  </p>
                </div>
                {/* Availability badge */}
                <span className="chip shrink-0 !gap-1.5 !px-3 !py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 duration-1000" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] font-semibold tracking-widest uppercase text-emerald-700">
                    Available
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Bio Column ── */}
          <div>
            {/* Section label */}
            <Reveal>
              <span className="chip !px-4 !py-2 shadow-xs transition-all duration-300 hover:border-uv/40">
                <span
                  aria-hidden
                  className="relative flex h-2.5 w-2.5 items-center justify-center"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-uv/40 duration-1000" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-linear-to-br from-uv-bright to-uv" />
                </span>
                <span className="font-mono text-[13.5px] font-bold tracking-[0.14em] uppercase text-uv-deep">
                  01
                </span>
                <span className="font-mono text-[13px] text-foreground/35">/</span>
                <span className="font-mono text-[13px] font-semibold tracking-[0.18em] uppercase text-foreground/85">
                  The practice
                </span>
              </span>
            </Reveal>

            {/* Heading */}
            <h2 className="type-display mt-7 text-[clamp(2.6rem,6.8vw,4.9rem)] font-bold tracking-[-0.038em] leading-[1.03] text-foreground">
              <RevealLines text="A storyteller," as="span" className="block" />
              <RevealLines
                text="rewired for the AI era."
                as="span"
                delay={0.07}
                className="uv-text block"
              />
            </h2>

            {/* Lead paragraph with left accent bar */}
            <Reveal delay={1}>
              <div className="relative mt-6 pl-5">
                <div
                  aria-hidden
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--uv-bright), var(--uv), var(--cyan-edge))",
                  }}
                />
                <p className="text-[clamp(1.1rem,1.75vw,1.38rem)] font-normal leading-[1.65] text-foreground/88">
                  Directing vertical episodic micro-dramas and cinematic films
                  with complete end-to-end generative pipelines.
                </p>
              </div>
            </Reveal>

            {/* Body copy */}
            <Reveal delay={2}>
              <div className="mt-5 space-y-3.5 text-[15px] leading-[1.75] text-muted-foreground">
                <p>
                  Over the last{" "}
                  <span className="font-semibold text-foreground">
                    two years
                  </span>
                  , I've combined classic directorial craft — dramatic tension,
                  pacing, cliffhangers — with cutting-edge AI generation,
                  currently focusing majorly on{" "}
                  <span className="font-semibold text-foreground">
                    micro-drama creation
                  </span>
                  .
                </p>
                <p>
                  From character face consistency and scene geography locking to
                  voice synthesis, sound design, and 9:16 vertical delivery —
                  every project is built end to end with rapid{" "}
                  <span className="font-semibold text-foreground">
                    3–4 day turnaround
                  </span>
                  .
                </p>
              </div>
            </Reveal>

            {/* Traits */}
            <Reveal delay={3}>
              <dl className="mt-7 grid gap-2">
                {traits.map((t, i) => (
                  <motion.div
                    key={t.k}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.55 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex flex-wrap items-center justify-between gap-x-5 gap-y-1 rounded-2xl border border-white/60 bg-white/45 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-uv/30 hover:bg-white/60 hover:shadow-[0_4px_20px_-8px_color-mix(in_oklab,var(--uv)_25%,transparent)]"
                  >
                    <dt className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{t.icon}</span>
                      <span className="mono-cap text-foreground/75 transition-colors duration-300 group-hover:text-uv-deep">
                        {t.k}
                      </span>
                    </dt>
                    <dd className="text-[13.5px] text-muted-foreground">
                      {t.v}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </Reveal>

            {/* Stats */}
            <Reveal delay={4}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.7 + i * 0.1,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`${
                      s.wide ? "pane-uv col-span-2" : "pane"
                    } group relative overflow-hidden p-4 sm:p-5`}
                  >
                    {/* Subtle top-right orb per stat */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle, color-mix(in oklab, var(--uv) 22%, transparent), transparent 70%)",
                      }}
                    />
                    <p className="tnum type-display text-[clamp(2rem,4.4vw,2.9rem)] font-bold text-foreground">
                      {s.value}
                      <span className="ml-0.5 align-top text-[0.34em] text-muted-foreground">
                        {s.unit}
                      </span>
                    </p>
                    <p className="mono-cap mt-2 text-[10.5px] text-muted-foreground">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
