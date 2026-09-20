import { motion } from "motion/react";
import { Reveal, RevealLines } from "./Reveal";
import portrait from "@/assets/mohammad-shahnawaz-portrait.webp.asset.json";

const traits = [
  { k: "Micro-drama mastery", v: "Episodic arcs, retention hooks & cliffhangers" },
  { k: "Character consistency", v: "Persistent faces, costumes & scene continuity" },
  { k: "End to end", v: "Script → gen → lip-sync → score → delivery" },
];

const stats = [
  { value: "8", unit: "min", label: "Longest AI film shipped", wide: true },
  { value: "2", unit: "+", label: "Years in AI & post" },
  { value: "8", unit: "+", label: "Generative tools in rotation" },
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="container-prose section-pad">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Portrait */}
          <Reveal direction="right" className="lg:sticky lg:top-28 lg:self-start">
            <div className="pane pane-lift group p-3">
              <div className="pane-media">
                <motion.img
                  src={portrait.url}
                  alt="Mohammad Shahnawaz Khan"
                  width={959}
                  height={1280}
                  decoding="async"
                  loading="lazy"
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-4/5 w-full object-cover [filter:saturate(0.9)] transition-[filter] duration-700 group-hover:[filter:saturate(1.05)] motion-reduce:transition-none"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-uv-deep/35 via-transparent to-transparent"
                />
              </div>

              <div className="flex items-end justify-between gap-4 px-2 pb-1 pt-4">
                <div>
                  <p className="mono-cap text-muted-foreground">Mohammad Shahnawaz Khan</p>
                  <p className="type-display mt-1.5 text-[1.15rem] text-foreground">
                    AI Micro-Drama &amp; Video Director
                  </p>
                </div>
                <p className="mono-cap shrink-0 text-[9px] text-muted-foreground/70">
                  IN / 2024 —
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
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

            <h2 className="type-display mt-6 text-[clamp(2.2rem,5.6vw,4.2rem)] text-foreground">
              <RevealLines text="A storyteller," as="span" className="block" />
              <RevealLines
                text="rewired for the AI era."
                as="span"
                delay={0.07}
                className="uv-text block"
              />
            </h2>

            <Reveal delay={2}>
              <div className="mt-8 space-y-5 text-[16.5px] leading-[1.75] text-muted-foreground">
                <p>
                  I&rsquo;ve spent the last{" "}
                  <span className="font-semibold text-foreground">two years</span>{" "}
                  cutting film and pioneering generative video pipelines, currently
                  working majorly on{" "}
                  <span className="font-semibold text-foreground">
                    AI micro-drama creation
                  </span>
                  . My practice unites cinematic storytelling discipline (pacing,
                  cliffhangers, emotional tension) with next-generation generative
                  workflows (character reference locks, voice synthesis, motion control).
                </p>
                <p>
                  I engineer high-hook vertical episodic series for platforms like
                  ReelShort, DramaBox, and YouTube Shorts, alongside cinematic brand
                  ads and narrative projects — including a{" "}
                  <span className="font-semibold text-foreground">
                    eight-minute AI short film
                  </span>{" "}
                  built end to end across eight generative tools.
                </p>
              </div>
            </Reveal>

            {/* Traits */}
            <Reveal delay={3}>
              <dl className="mt-9 grid gap-2.5">
                {traits.map((t) => (
                  <div
                    key={t.k}
                    className="pane-soft group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3.5 transition-colors duration-300 hover:border-uv/25"
                  >
                    <dt className="mono-cap text-foreground/75 transition-colors duration-300 group-hover:text-uv-deep">
                      {t.k}
                    </dt>
                    <dd className="text-[14.5px] text-muted-foreground">{t.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Stats */}
            <Reveal delay={4}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className={`${s.wide ? "pane-uv col-span-2" : "pane"} p-5`}
                  >
                    <p className="tnum type-display text-[clamp(2.2rem,5vw,3.2rem)] text-foreground">
                      {s.value}
                      <span className="ml-1 align-top text-[0.35em] text-muted-foreground">
                        {s.unit}
                      </span>
                    </p>
                    <p className="mono-cap mt-2.5 text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
