import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Check,
  ChevronDown,
  Clapperboard,
  Clock,
  Film,
  Image as ImageIcon,
  LayoutGrid,
  PackageCheck,
  TrendingUp,
  Tv,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Service = {
  icon: LucideIcon;
  category: string;
  tagline: string;
  title: string;
  desc: string;
  points: string[];
  /** What a client actually receives. */
  deliverable: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Tv,
    category: "Series",
    tagline: "Vertical episodic micro-dramas",
    title: "AI micro-drama creation",
    desc: "Working majorly in this format — vertical episodic micro-dramas engineered for platforms like ReelShort, DramaBox, TikTok, and YouTube Shorts. High-hook narrative arcs, persistent character casting, gripping cliffhangers, and rapid episodic turnaround.",
    points: [
      "Binge-optimized scriptwriting: 3-second hook & cliffhanger formula",
      "Strict multi-angle character, wardrobe & lighting consistency",
      "Expressive emotive acting, synchronized dialogue & voiceover",
      "Turnkey 9:16 vertical masters with episodic score & stems",
    ],
    deliverable: "Episodic series package (9:16)",
    featured: true,
  },
  {
    icon: Clapperboard,
    category: "Paid Social",
    tagline: "Feed-native creator-style ads",
    title: "UGC & marketing ads",
    desc: "Authentic, feed-native ads and creator-style content built to convert with high-retention hooks and multi-format variants.",
    points: [
      "Hook written before a single frame is generated",
      "9:16, 1:1 and 16:9 masters from one shoot",
      "A/B variants for paid testing on request",
    ],
    deliverable: "3 masters + variants",
  },
  {
    icon: Film,
    category: "Narrative",
    tagline: "Cinematic story-driven films",
    title: "AI short films",
    desc: "Full narrative pieces generated and edited for pacing, tone and emotional impact — the format the eight-minute Oryx & Crake came out of.",
    points: [
      "Script, shotlist and storyboard first",
      "Character consistency across every shot",
      "Score, SFX and final cinematic grade included",
    ],
    deliverable: "Graded master + stems",
  },
  {
    icon: ImageIcon,
    category: "Motion",
    tagline: "Stills & concepts into motion",
    title: "Image-to-video",
    desc: "Turning stills, product shots and concept frames into motion with current image-to-video models.",
    points: [
      "Your stills or custom generated keyframes",
      "Camera and subject motion direction",
    ],
    deliverable: "Curated motion clip set",
  },
  {
    icon: LayoutGrid,
    category: "Design",
    tagline: "High-CTR scroll-stopping art",
    title: "Thumbnails & key art",
    desc: "Scroll-stopping thumbnails and key art built around one readable idea, not five competing ones.",
    points: [
      "Readable at 120px wide on mobile feeds",
      "Title-safe variants for each platform",
    ],
    deliverable: "Layered 4K source files",
  },
  {
    icon: AudioLines,
    category: "Audio",
    tagline: "Cinematic score, SFX & mix",
    title: "Sound design",
    desc: "Score, SFX and mix work that gives a generated cut its weight. Usually the difference between 'AI video' and cinematic video.",
    points: [
      "Sourced or custom generated score",
      "Foley, ambience, dialogue sweetening and mix",
    ],
    deliverable: "Master mixed audio stems",
  },
  {
    icon: TrendingUp,
    category: "Strategy",
    tagline: "Retention & creative direction",
    title: "Content strategy & growth",
    desc: "Retention-first strategy, trend analysis and creative direction — the layer above the tools that decides what gets made and why.",
    points: [
      "Retention analysis on existing content",
      "Format and trend mapping",
      "Creative direction for an entire slate",
    ],
    deliverable: "Content plan + roadmap",
  },
];

function Detail({ s }: { s: Service }) {
  return (
    <div className="relative">
      {/* Ambient background bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 -right-8 -z-10 h-48 w-48 rounded-full bg-linear-to-br from-uv/20 to-cyan-edge/15 blur-3xl opacity-60"
      />

      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-linear-to-br from-uv-bright to-uv text-white shadow-[0_10px_24px_-10px_var(--uv)]">
            <s.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
          </span>
          <div>
            <span className="chip chip-uv !px-2.5 !py-0.5 text-[11px] font-semibold mono-cap">
              {s.category}
            </span>
          </div>
        </div>

        <span className="chip !px-3 !py-1 text-[11.5px] font-medium text-muted-foreground flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-uv" />
          <span>3–4 Days Turnaround</span>
        </span>
      </div>

      {/* Main Title */}
      <h3 className="type-display mt-6 text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-foreground leading-tight">
        {s.title}
      </h3>

      {/* Description */}
      <p className="mt-3.5 text-[15px] leading-[1.7] text-muted-foreground font-normal">
        {s.desc}
      </p>

      {/* Capabilities Grid */}
      <div className="mt-7">
        <p className="mono-cap text-[11px] font-bold text-muted-foreground mb-3">
          Core Capabilities &amp; Specs
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {s.points.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border/80 bg-white/65 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-uv/30 hover:bg-white/85"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-uv/15 text-uv-deep">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-[13px] font-medium leading-snug text-foreground/90">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverable + Action Bar */}
      <div className="mt-8 rounded-2xl border border-border/80 bg-foreground/[0.02] p-5 sm:p-6 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-uv/15 text-uv-deep">
            <PackageCheck className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <div>
            <span className="mono-cap block text-[10px] text-muted-foreground">
              What you receive
            </span>
            <span className="mt-0.5 block text-[14.5px] font-semibold text-foreground">
              {s.deliverable}
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="btn btn-uv shrink-0 !px-5 !py-2.5 text-[13px] flex items-center gap-1.5"
        >
          <span>Discuss this</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="cv-auto relative">
      <div className="container-prose section-pad">
        <SectionHeading
          index="02"
          eyebrow="Services"
          title="Seven offerings,"
          titleAccent="one pipeline."
          lead="From concept and generation through edit, sound and packaging — handled by one person, so nothing gets lost between hand-offs."
          meta={
            <>
              <p className="mono-cap text-muted-foreground">Typical turnaround</p>
              <p className="type-display mt-1.5 text-[1.5rem] text-foreground">3–4 days</p>
            </>
          }
        />

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
          {/* Index — Interactive Studio Selector */}
          <ul className="flex flex-col gap-2.5">
            {services.map((s, i) => {
              const isOpen = i === active;
              return (
                <Reveal as="li" key={s.title} delay={i}>
                  <div className="overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isOpen}
                      aria-controls={`service-${i}`}
                      className={`group relative flex w-full items-center justify-between gap-3.5 rounded-2xl p-3.5 sm:p-4 text-left transition-all duration-300 ${
                        isOpen
                          ? "pane-uv border-uv/40 shadow-[0_8px_24px_-10px_var(--uv)] ring-1 ring-uv/30"
                          : "pane hover:border-uv/30 hover:bg-white/90 hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Icon Frame */}
                        <span
                          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                            isOpen
                              ? "border-white/60 bg-linear-to-br from-uv-bright to-uv text-white shadow-xs"
                              : "border-border/80 bg-foreground/[0.03] text-foreground/75 group-hover:border-uv/30 group-hover:text-uv"
                          }`}
                        >
                          <s.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                        </span>

                        {/* Title & Tagline */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-mono text-[11px] font-bold transition-colors ${
                                isOpen ? "text-uv-deep" : "text-muted-foreground/60"
                              }`}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`type-display truncate text-[1.1rem] font-bold transition-colors ${
                                isOpen
                                  ? "text-uv-deep"
                                  : "text-foreground group-hover:text-foreground"
                              }`}
                            >
                              {s.title}
                            </span>
                          </div>
                          <p className="mt-0.5 truncate text-[12px] font-medium text-muted-foreground">
                            {s.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Right Tag / Indicator */}
                      <div className="flex items-center gap-2 shrink-0">
                        {s.featured && (
                          <span className="chip chip-uv !px-2.5 !py-0.5 text-[10.5px] font-semibold">
                            Flagship
                          </span>
                        )}
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-uv/15 text-uv-deep"
                              : "text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5"
                          }`}
                        >
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </div>
                      </div>
                    </button>

                    {/* Phone + tablet: the row expands in place */}
                    <div
                      id={`service-${i}`}
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mt-2.5 rounded-2xl pane p-5 sm:p-6">
                          <Detail s={s} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          {/* Desktop: a single sticky detail pane swaps content */}
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="pane p-8 relative overflow-hidden backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_-20px_rgba(124,58,237,0.12)]"
              >
                <Detail s={current} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
