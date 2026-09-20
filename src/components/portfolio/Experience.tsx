import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const timeline = [
  {
    role: "AI Micro-Drama Director & Producer",
    org: "Independent & Streaming Platforms",
    period: "2024 — Present",
    current: true,
    points: [
      "Direct and produce vertical episodic AI micro-dramas engineered for platforms like ReelShort, DramaBox, and TikTok.",
      "Develop multi-character continuity pipelines, character LoRA locks, and facial reference consistency across consecutive episodes.",
      "Script binge-optimized narratives with 3-second retention hooks, high-stakes emotional beats, and cliffhanger payoffs.",
      "Execute complete episodic post-production: dialogue lip-sync, dynamic Foley, episodic scoring, and 9:16 vertical master delivery.",
    ],
  },
  {
    role: "AI Video Ads & Commercial Creator",
    org: "Brands, Agencies & DTC Clients",
    period: "2024 — Present",
    current: true,
    points: [
      "Create high-converting AI commercial ads, product launch teasers, and authentic UGC video campaigns.",
      "Direct generative pipelines across Kling 3.0, Seedance 2, and Veo 3.1 paired with precision Premiere Pro editorial pacing.",
      "Deliver turnkey multi-ratio master suites (9:16, 1:1, 16:9) with A/B creative hook variants for paid social testing.",
      "Craft scroll-stopping thumbnails and key art built to maximize click-through rate across ad platforms.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Lovely Professional University, Punjab",
    period: "2022 — 2026",
  },
];


export function Experience() {
  return (
    <section id="experience" className="cv-auto relative">
      <div className="container-prose section-pad">
        <SectionHeading
          index="06"
          eyebrow="Journey"
          title="Two years of craft,"
          titleAccent="powered by AI."
          lead="The craft and models evolved hand-in-hand — where every principle of pacing, rhythm, and storytelling still applies."
        />

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-[1.5fr_0.82fr] lg:gap-8">
          {/* Timeline */}
          <ol className="relative flex flex-col gap-3.5">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.role} delay={i}>
                <div className="pane pane-lift group relative overflow-hidden p-5 sm:p-6">
                  <span
                    aria-hidden
                    className="uv-rail pointer-events-none absolute inset-y-6 left-0 w-[3px] rounded-full"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip chip-uv mono-cap !px-2.5 !py-0.5 text-[11px]">{t.period}</span>
                    {t.current && (
                      <span className="chip mono-cap text-muted-foreground !px-2.5 !py-0.5 text-[11px]">
                        <span className="status-dot !h-1.5 !w-1.5" aria-hidden />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="type-display mt-3 text-[clamp(1.2rem,2vw,1.65rem)] font-bold text-foreground">
                    {t.role}
                  </h3>
                  <p className="mt-1 text-[13px] text-muted-foreground font-medium">{t.org}</p>

                  <ul className="mt-4 space-y-2">
                    {t.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-[13px] leading-[1.6] text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-uv-bright to-uv"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Side column */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i + 1}>
                <div className="pane pane-lift p-5 sm:p-5.5">
                  <h3 className="mono-cap flex items-center gap-2 text-[11px] text-muted-foreground">
                    <GraduationCap className="h-3.5 w-3.5 text-uv" strokeWidth={1.8} />{" "}
                    Education
                  </h3>
                  <p className="type-display mt-3.5 text-[1.12rem] font-bold leading-snug text-foreground">
                    {e.degree}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-[13px] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                    {e.school}
                  </p>
                  <p className="chip chip-uv mono-cap mt-4 !px-2.5 !py-0.5 text-[11px]">{e.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
