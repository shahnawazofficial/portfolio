import { useState } from "react";
import BorderGlow from "@/components/BorderGlow";

import { AnimatePresence, motion } from "motion/react";
import { Play, Lock, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { LightboxShell, YouTubeModal, getYouTubeId } from "./YouTubeModal";
import seedance2 from "@/assets/seedance2-thumb.webp.asset.json";
import haircare from "@/assets/haircare-thumb.webp.asset.json";
import ranaSanga from "@/assets/rana-sanga-thumb.webp.asset.json";
import influencer from "@/assets/proj-influencer.jpg.asset.json";
import ugcVideo from "@/assets/ugc-example.mp4.asset.json";
import ugcPoster from "@/assets/ugc-girl-thumb.webp.asset.json";
import coffeeVideo from "@/assets/coffee-final-film.mp4.asset.json";
import coffeePoster from "@/assets/coffee-poster.jpg.asset.json";
import haircareVideo1 from "@/assets/haircare-ad-1.mp4.asset.json";
import haircareVideo2 from "@/assets/haircare-ad-2.mp4.asset.json";
import haircarePoster1 from "@/assets/haircare-ad-1-poster.jpg.asset.json";
import haircarePoster2 from "@/assets/haircare-ad-2-poster.jpg.asset.json";
import pandaBabyVideo from "@/assets/panda-baby.mp4.asset.json";
import pandaForestVideo from "@/assets/panda-forest.mp4.asset.json";
import pandaBabyPoster from "@/assets/panda-baby-poster.jpg.asset.json";
import pandaForestPoster from "@/assets/panda-forest-poster.jpg.asset.json";
import ranaSangaVideo from "@/assets/rana-sanga.mp4.asset.json";
import pinkPhoolVideo from "@/assets/pink-phool.mp4.asset.json";
import pinkPhoolPoster from "@/assets/pink-phool-poster.jpg.asset.json";
import fastFiredVideo from "@/assets/fastfired-teaser.mp4.asset.json";
import fastFiredPoster from "@/assets/fastfired-poster.jpg.asset.json";

/** Tiny "pop" click sound via the Web Audio API. */
let _audioCtx: AudioContext | null = null;
function playPop() {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    _audioCtx = _audioCtx || new AC();
    const ctx = _audioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(720, now + 0.09);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
  } catch {
    /* no-op */
  }
}

type Category = "Micro-Drama" | "Short Film" | "Product Ads" | "UGC" | "Animation" | "AI Influencers";

interface VideoItem {
  label: string;
  poster: string;
  src?: string;
  link?: string;
}

interface Project {
  title: string;
  category: Category;
  image: string;
  hook: string;
  /** Genre / format — one word, mono caps. */
  format: string;
  /** AI tools / models used — outlined pills. */
  tools: string[];
  /** Optional credit line — appears only on hero card. */
  credit?: string;
  /** Optional runtime / spec. */
  runtime?: string;
  featured?: boolean;
  meta?: string;
  link?: string;
  privacy?: boolean;
  videos?: VideoItem[];
}

const projects: Project[] = [
  {
    title: "Oryx & Crake",
    category: "Short Film",
    image: seedance2.url,
    hook: "An eight-minute AI-generated short film — a full studio-grade production built end-to-end with generative video. Written, directed, edited and scored for pacing, restraint, and real cinematic weight.",
    format: "AI Short Film",
    tools: ["Seedance 2", "Kling 3.0", "Sound Design"],
    credit: "Written, directed & edited by Mohammad Shahnawaz Khan",
    runtime: "8 MIN · 2026",
    featured: true,
    link: "https://www.youtube.com/watch?v=g4vHot5uwmg",
  },
  {
    title: "The Heiress's Secret",
    category: "Micro-Drama",
    image: ugcPoster.url,
    hook: "A high-stakes vertical AI episodic micro-drama series built for high-retention streaming. Features multi-character continuity across dramatic confrontations, 3-second retention hooks, mid-scene twists, and seamless 9:16 cinematic framing.",
    format: "Episodic Micro-Drama",
    tools: ["Seedance 2", "Kling 3.0", "Nano Banana Pro", "LipSync AI", "Sound Design"],
    runtime: "EPISODIC · 9:16 VERTICAL",
    meta: "Pilot + 3 episodes",
    videos: [{ label: "Watch episode pilot", src: ugcVideo.url, poster: ugcPoster.url }],
  },
  {
    title: "Rana Sanga",
    category: "Animation",
    image: ranaSanga.url,
    hook: "An AI-animated historical short retelling the story of Rana Sanga.",
    format: "Historical Animation",
    tools: ["AI Animation", "Kling 3.0"],
    videos: [{ label: "Play film", src: ranaSangaVideo.url, poster: ranaSanga.url }],
  },
  {
    title: "Hair Care — Pixar Style",
    category: "Product Ads",
    image: haircare.url,
    hook: "Stylized 3D-inspired product ads for a hair care brand.",
    format: "Product Ad",
    tools: ["Seedance 2"],
    meta: "2 videos",
    videos: [
      { label: "9:16 TikTok Style Ad", src: haircareVideo1.url, poster: haircarePoster1.url },
      { label: "16:9 Cinematic Ad", src: haircareVideo2.url, poster: haircarePoster2.url },
    ],
  },
  {
    title: "UGC Reel",
    category: "UGC",
    image: ugcPoster.url,
    hook: "A creator-style short-form ad built to feel native to social feeds.",
    format: "Social Ad",
    tools: ["Seedance 2"],
    videos: [{ label: "Play reel", src: ugcVideo.url, poster: ugcPoster.url }],
  },
  {
    title: "FastFired India",
    category: "Product Ads",
    image: fastFiredPoster.url,
    hook: "A cinematic launch teaser for FastFired's India debut — a dough-toss frozen mid-air over open flame, wood-fired oven reveal, and a campaign tagline built for reach.",
    format: "Brand Teaser",
    tools: ["Kling 3.0", "Seedance 2", "Sound Design"],
    videos: [{ label: "Watch teaser", src: fastFiredVideo.url, poster: fastFiredPoster.url }],
  },
  {
    title: "Pink Phool Collection",
    category: "Product Ads",
    image: pinkPhoolPoster.url,
    hook: "A creator-style fashion drop for the Pink Phool floral kurta collection — outdoor street walk, close-up fabric detail, shot to feel native to social feeds.",
    format: "Fashion / UGC",
    tools: ["Seedance 2", "Kling 3.0"],
    videos: [{ label: "Play ad", src: pinkPhoolVideo.url, poster: pinkPhoolPoster.url }],
  },
  {
    title: "Coffee Commercial",
    category: "Product Ads",
    image: coffeePoster.url,
    hook: "A premium-look product commercial for a coffee brand.",
    format: "Product Ad",
    tools: ["Kling 3.0"],
    videos: [{ label: "Play ad", src: coffeeVideo.url, poster: coffeePoster.url }],
  },
  {
    title: "Panda Series",
    category: "Animation",
    image: pandaBabyPoster.url,
    hook: "Short animated videos featuring an expressive panda character.",
    format: "Character Animation",
    tools: ["Veo 3.1"],
    meta: "2 videos",
    videos: [
      { label: "Baby Panda in the Snow", src: pandaBabyVideo.url, poster: pandaBabyPoster.url },
      { label: "Magical Forest Hide & Seek", src: pandaForestVideo.url, poster: pandaForestPoster.url },
    ],
  },
  {
    title: "AI Influencers",
    category: "AI Influencers",
    image: influencer.url,
    hook: "Fully AI-generated virtual influencer personas with consistent character design across a full content pipeline.",
    format: "Virtual Persona",
    tools: ["Kling Motion Control", "Nano Banana Pro", "Seedance 2"],
    meta: "2 clients · 150K+ combined",
    privacy: true,
  },
];

const filters = ["All", "Micro-Drama", "Short Film", "Product Ads", "UGC", "Animation", "AI Influencers"] as const;



/* ------------------------------- Lightbox ------------------------------- */

function Meta({ project }: { project: Project }) {
  return (
    <div className="mx-auto mb-5 max-w-3xl text-center">
      <p className="mono-cap text-muted-foreground">
        {project.format}
        {project.runtime ? ` · ${project.runtime}` : ""}
      </p>
      <h3 className="type-display mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
        {project.hook}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {project.tools.map((t, i) => (
          <span
            key={t}
            className={`chip mono-cap !py-1 !text-[9.5px] ${
              i === 0 ? "chip-uv" : "text-muted-foreground"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const videos = project.videos ?? [];
  const single = videos.length === 1;
  const [selected, setSelected] = useState<number | null>(single ? 0 : null);
  const active = selected !== null ? videos[selected] : null;

  return (
    <LightboxShell onClose={onClose}>
      <div>
        <Meta project={project} />

        {active && active.src ? (
          <>
            <BorderGlow
              active
              borderRadius={22}
              glowRadius={38}
              glowColor="290 90 60"
              backgroundColor="#ffffff"
              colors={["#7C3AED", "#A78BFA", "#38BDF8"]}
              className="mx-auto w-fit"
            >
              <video
                key={active.src}
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="mx-auto max-h-[62vh] w-auto max-w-full rounded-[21px]"
              />
            </BorderGlow>

            {videos.length > 1 && (
              <div className="mx-auto mt-5 flex max-w-full flex-wrap justify-center gap-3">
                {videos.map((v, i) => {
                  const isActive = selected === i;
                  return (
                    <button
                      key={v.label}
                      type="button"
                      onClick={() => setSelected(i)}
                      className={`group/thumb relative block w-36 shrink-0 overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                        isActive
                          ? "border-uv/50 shadow-[0_0_0_1px_var(--uv),0_18px_40px_-22px_var(--uv)]"
                          : "border-white/70 hover:border-uv/35"
                      }`}
                    >
                      <img
                        src={v.poster}
                        alt={v.label}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full bg-white/40 object-cover"
                      />
                      <span className="mono-cap absolute bottom-1.5 left-1.5 rounded-md bg-white/80 px-1.5 py-1 text-[8.5px] text-foreground backdrop-blur-md">
                        {v.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {videos.map((v, i) => {
              const content = (
                <>
                  <img
                    src={v.poster}
                    alt={v.label}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full bg-white/40 object-cover transition-transform duration-700 group-hover/thumb:scale-105 motion-reduce:transition-none"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-uv-deep/20 transition-colors duration-300 group-hover/thumb:bg-uv-deep/35">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/75 text-uv-deep backdrop-blur-md transition-transform duration-300 group-hover/thumb:scale-110 motion-reduce:transform-none">
                      {v.link ? (
                        <ExternalLink className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5 translate-x-[2px]" fill="currentColor" />
                      )}
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-lg bg-white/80 px-2.5 py-1 text-[13px] font-medium text-foreground backdrop-blur-md">
                    {v.label}
                  </span>
                </>
              );
              const cls =
                "group/thumb pane-media relative block transition-colors duration-300 hover:border-uv/40";
              return v.link ? (
                <a key={v.label} href={v.link} target="_blank" rel="noreferrer" className={cls}>
                  {content}
                </a>
              ) : (
                <button key={v.label} type="button" onClick={() => setSelected(i)} className={cls}>
                  {content}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </LightboxShell>
  );
}

/* --------------------------------- Tile --------------------------------- */

function Tile({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: string;
  featured?: boolean;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);
  const hasVideos = !!project.videos?.length;
  const youTubeId = project.link ? getYouTubeId(project.link) : null;
  const isLocked = !!project.privacy;

  const activate = () => {
    if (isLocked) return;
    playPop();
    if (hasVideos) setShowVideo(true);
    else if (youTubeId) setShowYouTube(true);
    else if (project.link) window.open(project.link, "_blank", "noreferrer");
  };

  return (
    <>
      <button
        type="button"
        onClick={activate}
        aria-label={
          isLocked ? `${project.title} — client-gated` : `Play ${project.title}`
        }
        className={`pane-media group relative block w-full text-left transition-all duration-500 hover:border-uv/35 ${
          featured
            ? "col-span-2 row-span-2 h-full"
            : "aspect-4/3"
        } ${isLocked ? "cursor-default" : ""}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full bg-white/40 object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] motion-reduce:transition-none ${
            isLocked ? "opacity-75 [filter:saturate(0.45)]" : ""
          }`}
        />

        {/* Veil — always on, so the caption stays legible without a hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-uv-deep/85 via-uv-deep/15 to-transparent"
        />

        {/* Top row */}
        <span className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
          <span className="mono-cap rounded-md bg-white/65 px-1.5 py-1 text-[8.5px] text-foreground backdrop-blur-md">
            {index}
          </span>
          {project.runtime && featured && (
            <span className="mono-cap rounded-md bg-white/65 px-1.5 py-1 text-[8.5px] text-foreground backdrop-blur-md">
              {project.runtime}
            </span>
          )}
          {isLocked ? (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/60 text-uv-deep backdrop-blur-md">
              <Lock className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
          ) : (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/65 text-uv-deep opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 motion-reduce:transition-none">
              <Play className="h-3 w-3 translate-x-[1px]" fill="currentColor" />
            </span>
          )}
        </span>

        {/* Caption */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
          <span className="mono-cap block text-[8.5px] text-white/70">
            {isLocked ? "Client-gated · NDA" : project.format}
            {project.meta ? ` · ${project.meta}` : ""}
          </span>
          <span
            className={`type-display mt-1.5 block text-white ${
              featured
                ? "text-[clamp(1.4rem,3.4vw,2.4rem)]"
                : "text-[clamp(0.95rem,1.7vw,1.25rem)]"
            }`}
          >
            {project.title}
          </span>
          {featured && (
            <span className="mt-2 hidden max-w-[46ch] text-[13.5px] leading-snug text-white/80 sm:block">
              {project.hook}
            </span>
          )}
        </span>
      </button>

      <AnimatePresence>
        {hasVideos && showVideo && (
          <VideoModal project={project} onClose={() => setShowVideo(false)} />
        )}
        {youTubeId && showYouTube && (
          <YouTubeModal id={youTubeId} onClose={() => setShowYouTube(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------- Section -------------------------------- */

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="work" className="cv-auto relative">
      <div className="container-page section-pad">
        {/* Compact header — title, count and filters share one band */}
        <Reveal>
          <div className="flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="chip !px-4 !py-2 shadow-xs transition-all duration-300 hover:border-uv/40">
                <span
                  aria-hidden
                  className="relative flex h-2.5 w-2.5 items-center justify-center"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-uv/40 duration-1000" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-linear-to-br from-uv-bright to-uv" />
                </span>
                <span className="font-mono text-[13.5px] font-bold tracking-[0.14em] uppercase text-uv-deep">
                  04
                </span>
                <span className="font-mono text-[13px] text-foreground/35">/</span>
                <span className="font-mono text-[13px] font-semibold tracking-[0.18em] uppercase text-foreground/85">
                  Work
                </span>
              </span>
              <h2 className="type-display mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] text-foreground">
                Selected work, <span className="uv-text">2025&nbsp;&mdash;&nbsp;2026.</span>
              </h2>
            </div>

            <p className="mono-cap shrink-0 text-muted-foreground md:text-right">
              {projects.length} projects
              <br className="hidden md:block" /> ads · films · UGC
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div
            role="tablist"
            aria-label="Filter work by category"
            className="mt-6 flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const isActive = active === f;
              const count =
                f === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  className={`chip !py-1.5 text-[12.5px] font-medium transition-all duration-300 ${
                    isActive
                      ? "chip-uv"
                      : "text-muted-foreground hover:border-uv/30 hover:text-foreground"
                  }`}
                >
                  {f}
                  <span
                    className={`tnum text-[9.5px] ${
                      isActive ? "text-uv/70" : "text-muted-foreground/55"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Dense media grid — one fade per filter change, not one per tile */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {featured && <Tile project={featured} index="00" featured />}
          {rest.map((p, i) => (
            <Tile key={p.title} project={p} index={String(i + 1).padStart(2, "0")} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
