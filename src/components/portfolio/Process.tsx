import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  PackageCheck,
  Scissors,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type ProcessStep = {
  step: string;
  duration: string;
  icon: LucideIcon;
  title: string;
  lead: string;
  tasks: string[];
  deliverable: string;
};

const steps: ProcessStep[] = [
  {
    step: "01",
    duration: "Day 1",
    icon: Compass,
    title: "Hook & Treatment",
    lead: "3-second viral hook, pacing arc, and visual style locked.",
    tasks: [
      "3s hook & cliffhanger design",
      "9:16 / 16:9 format & visual tone",
    ],
    deliverable: "Creative Treatment & Brief",
  },
  {
    step: "02",
    duration: "Day 1–2",
    icon: FileText,
    title: "Script & Characters",
    lead: "Scene beats, dialogue timing, and character seed locks.",
    tasks: [
      "Cliffhanger beat sheet",
      "Multi-angle face & wardrobe locks",
    ],
    deliverable: "Locked Script & Character Bible",
  },
  {
    step: "03",
    duration: "Day 2–3",
    icon: Sparkles,
    title: "AI Video Synthesis",
    lead: "Cinematic camera movement and character acting.",
    tasks: [
      "Kling 3.0, Seedance 2 & Veo 3.1",
      "Motion direction & lip-syncing",
    ],
    deliverable: "Curated 4K Video Stems",
  },
  {
    step: "04",
    duration: "Day 3–4",
    icon: Scissors,
    title: "Edit & Sound Master",
    lead: "Premiere assembly, Foley, and cinematic audio mix.",
    tasks: [
      "Fast-paced retention cuts",
      "Cinematic SFX, score & color grade",
    ],
    deliverable: "Master Cut & Audio Mix",
  },
  {
    step: "05",
    duration: "Day 4",
    icon: CheckCircle2,
    title: "Platform Masters",
    lead: "Turnkey delivery optimized for social and streaming.",
    tasks: [
      "Clean 4K exports (9:16 & 16:9)",
      "High-CTR thumbnail key art",
    ],
    deliverable: "Final Platform Masters",
  },
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="relative">
      <div className="container-page section-pad">
        <SectionHeading
          index="03"
          eyebrow="Process"
          title="From initial concept"
          titleAccent="to final master."
          lead="A structured 3–4 day production pipeline engineered for rapid turnaround, multi-character consistency, and cinematic polish."
          meta={
            <>
              <p className="mono-cap text-muted-foreground">Typical Turnaround</p>
              <p className="type-display mt-1.5 text-[1.5rem] text-foreground">3–4 days</p>
            </>
          }
        />

        {/* Stage Timeline Navigation Bar (Desktop & Tablet) */}
        <div className="mt-12 hidden md:block">
          <div className="pane p-2.5">
            <div className="grid grid-cols-5 gap-2">
              {steps.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`group relative flex flex-col items-start rounded-lg p-2.5 sm:p-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border border-uv/35 bg-linear-to-br from-uv/12 to-uv/4 shadow-xs"
                        : "border border-transparent hover:bg-foreground/[0.03]"
                    }`}
                  >
                    <div className="mb-1.5 flex w-full items-center justify-between">
                      <span
                        className={`mono-cap text-[10.5px] font-bold transition-colors ${
                          isActive ? "text-uv-deep" : "text-muted-foreground/70"
                        }`}
                      >
                        Stage {s.step}
                      </span>
                      <span className="chip !px-2 !py-0.2 mono-cap text-[9.5px]">
                        {s.duration}
                      </span>
                    </div>
                    <span
                      className={`w-full truncate text-[12.5px] font-semibold transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/70 group-hover:text-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="process-stage-indicator"
                        className="absolute inset-x-2 -bottom-2.5 h-[2.5px] rounded-full bg-linear-to-r from-uv to-uv-bright"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5-Stage Workflow Cards Grid */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
          {steps.map((s, i) => {
            const isSelected = i === activeIndex;
            return (
              <Reveal key={s.step} delay={i}>
                <div
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`group relative flex h-full flex-col justify-between rounded-xl p-3.5 transition-all duration-300 sm:p-4 ${
                    isSelected
                      ? "pane-uv border-uv/40 ring-1 ring-uv/30 shadow-[0_10px_24px_-10px_var(--uv)]"
                      : "pane hover:-translate-y-1 hover:border-uv/25"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="mb-2.5 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300 ${
                          isSelected
                            ? "border-white/60 bg-linear-to-br from-uv-bright to-uv text-white shadow-xs"
                            : "border-border/80 bg-foreground/[0.03] text-foreground/80 group-hover:border-uv/30 group-hover:text-uv"
                        }`}
                      >
                        <s.icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="mono-cap text-[10px] font-bold text-muted-foreground/60">
                          {s.step}
                        </span>
                        <span className="chip chip-uv !px-2 !py-0.5 text-[9.5px] font-medium">
                          {s.duration}
                        </span>
                      </div>
                    </div>

                    {/* Title & Lead */}
                    <h3 className="type-display text-[1.05rem] font-bold leading-snug text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] font-normal leading-snug text-muted-foreground">
                      {s.lead}
                    </p>

                    {/* Actionable Tasks List */}
                    <ul className="mt-2.5 space-y-1">
                      {s.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex items-start gap-1.5 text-[11px] leading-snug text-foreground/85"
                        >
                          <span className="mt-0.5 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-uv/15 text-uv-deep">
                            <Check className="h-1.5 w-1.5" strokeWidth={3.5} />
                          </span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverable Footer */}
                  <div className="mt-3 border-t border-border/70 pt-2.5">
                    <div className="flex items-start gap-1.5">
                      <PackageCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-uv" />
                      <div className="min-w-0 flex-1">
                        <span className="mono-cap block text-[8.5px] text-muted-foreground">
                          Deliverable
                        </span>
                        <span className="block text-[11px] font-semibold leading-tight text-foreground">
                          {s.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Turnaround Summary CTA */}
        <Reveal>
          <div className="pane mt-8 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-uv-bright/20 to-uv/20 text-uv sm:flex">
                <Clock className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-foreground">
                  Typical Turnaround: 3–4 Days
                </p>
                <p className="mt-0.5 text-[13.5px] text-muted-foreground">
                  From initial hook &amp; script to final 4K masters. 48-hour rush delivery available for urgent campaigns.
                </p>
              </div>
            </div>
            <a href="#contact" className="btn btn-uv shrink-0">
              Start your project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
