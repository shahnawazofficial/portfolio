import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { ToolLogo } from "./ToolLogo";
import { YouTubeModal, getYouTubeId } from "./YouTubeModal";

import seedance2 from "@/assets/seedance2-thumb.webp.asset.json";
import ranaSanga from "@/assets/rana-sanga-thumb.webp.asset.json";
import haircare from "@/assets/haircare-thumb.webp.asset.json";
import ugcPoster from "@/assets/ugc-girl-thumb.webp.asset.json";
import coffeePoster from "@/assets/coffee-poster.jpg.asset.json";
import fastFiredPoster from "@/assets/fastfired-poster.jpg.asset.json";
import pinkPhoolPoster from "@/assets/pink-phool-poster.jpg.asset.json";
import pandaBabyPoster from "@/assets/panda-baby-poster.jpg.asset.json";
import pandaForestPoster from "@/assets/panda-forest-poster.jpg.asset.json";
import influencer from "@/assets/proj-influencer.jpg.asset.json";

const REEL_URL = "https://www.youtube.com/watch?v=g4vHot5uwmg";

const rowOne = [
  { src: seedance2.url, label: "Oryx & Crake", tag: "Short film" },
  { src: fastFiredPoster.url, label: "FastFired India", tag: "Brand teaser" },
  { src: haircare.url, label: "Hair Care", tag: "Product ad" },
  { src: ranaSanga.url, label: "Rana Sanga", tag: "Animation" },
  { src: coffeePoster.url, label: "Coffee Commercial", tag: "Product ad" },
];

const rowTwo = [
  { src: pinkPhoolPoster.url, label: "Pink Phool", tag: "Fashion / UGC" },
  { src: ugcPoster.url, label: "UGC Reel", tag: "Social ad" },
  { src: pandaBabyPoster.url, label: "Panda Series", tag: "Character" },
  { src: influencer.url, label: "AI Influencers", tag: "Virtual persona" },
  { src: pandaForestPoster.url, label: "Magical Forest", tag: "Character" },
];

const tools = [
  { name: "Kling 3.0" },
  { name: "Seedance 2" },
  { name: "Veo 3.1", url: "https://labs.google/fx/tools/flow" },
  { name: "Runway Gen-4", url: "https://runwayml.com/" },
  { name: "Midjourney v7" },
  { name: "Nano Banana Pro" },
  { name: "Higgsfield AI", url: "https://higgsfield.ai/" },
  { name: "Premiere Pro" },
  { name: "Photoshop" },
  { name: "Flux 1.1 Ultra" },
  { name: "Wan 2.7" },
  { name: "Luma Ray 3" },
];

function Frame({
  item,
  width,
}: {
  item: { src: string; label: string; tag: string };
  width: string;
}) {
  return (
    <figure className="group/frame pane-media relative shrink-0" style={{ width }}>
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/frame:scale-[1.06] motion-reduce:transition-none"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-uv-deep/70 via-uv-deep/5 to-transparent"
        />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-3 p-4">
        <span className="type-display text-[15px] text-white">{item.label}</span>
        <span className="mono-cap text-[9px] text-white/70">{item.tag}</span>
      </figcaption>
    </figure>
  );
}

export function Showreel() {
  const [open, setOpen] = useState(false);
  const reelId = getYouTubeId(REEL_URL);

  return (
    <section id="reel" aria-label="Showreel" className="relative">
      {/* Tool strip */}
      <div className="container-page">
        <Reveal>
          <div className="pane flex items-center gap-5 px-4 py-3.5 sm:px-6">
            <span className="mono-cap hidden shrink-0 text-muted-foreground sm:block">
              Built with
            </span>
            <span aria-hidden className="hidden h-6 w-px bg-border sm:block" />
            <Marquee duration={44} gap="2rem" className="flex-1">
              {tools.map((t) => (
                <span
                  key={t.name}
                  className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-uv-deep"
                >
                  <ToolLogo name={t.name} url={t.url} size={17} />
                  {t.name}
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>

      {/* Reel band */}
      <div className="cv-auto relative overflow-hidden pb-4 pt-16 sm:pt-24">
        <div className="container-page">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
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
                  <span className="font-mono text-[13px] font-semibold tracking-[0.18em] uppercase text-foreground/85">
                    Showreel
                  </span>
                </span>
              </Reveal>
              <h2 className="type-display mt-5 text-[clamp(2rem,5vw,3.6rem)] text-foreground">
                Ten frames, <span className="uv-text">one pipeline.</span>
              </h2>
            </div>
            <Reveal delay={1}>
              <p className="mono-cap max-w-[30ch] text-muted-foreground sm:text-right">
                2025&ndash;2026 · ads, films, UGC
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:mt-14 sm:gap-5">
          <Marquee duration={62} gap="1.1rem">
            {rowOne.map((item) => (
              <Frame key={item.label} item={item} width="clamp(240px, 30vw, 400px)" />
            ))}
          </Marquee>
          <Marquee duration={74} reverse gap="1.1rem">
            {rowTwo.map((item) => (
              <Frame key={item.label} item={item} width="clamp(200px, 25vw, 330px)" />
            ))}
          </Marquee>
        </div>

        {/* Play CTA */}
        <div className="container-page mt-12 sm:mt-14">
          <Reveal>
            <div className="pane-uv flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <p className="mono-cap text-uv-deep/80">Flagship · 8 min · 2026</p>
                <p className="type-display mt-3 text-[clamp(1.5rem,3vw,2.3rem)] text-foreground">
                  Watch <span className="uv-text">Oryx &amp; Crake</span> in full.
                </p>
              </div>

              <button
                type="button"
                onClick={() => reelId && setOpen(true)}
                className="btn btn-uv shrink-0 !px-7"
                aria-label="Play Oryx & Crake"
              >
                <Play className="h-3.5 w-3.5 translate-x-[1px]" fill="currentColor" />
                Play the film
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {open && reelId && <YouTubeModal id={reelId} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
