import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ToolLogo } from "./ToolLogo";

type Item = { name: string; url?: string; primary?: boolean };
type Group = {
  title: string;
  index: string;
  note: string;
  items: Item[];
  span: "flagship" | "wide" | "compact";
};

const groups: Group[] = [
  {
    title: "AI Video Models",
    index: "01",
    note: "Daily driver — the core of the practice.",
    span: "flagship",
    items: [
      { name: "Kling 3.0", url: "https://klingai.com/", primary: true },
      { name: "Seedance 2", url: "https://seedance.com/", primary: true },
      { name: "Veo 3.1", url: "https://deepmind.google/technologies/veo/", primary: true },
      { name: "Wan 2.7", url: "https://wanx.aliyun.com/", primary: true },
      { name: "Runway Gen-4", url: "https://runwayml.com/", primary: true },
      { name: "Luma Ray 3", url: "https://lumalabs.ai/dream-machine" },
      { name: "Kling Motion Control", url: "https://klingai.com/" },
      { name: "Omni Flash", url: "https://omnihuman.ai/" },
      { name: "LTX Video", url: "https://ltx.video/" },
      { name: "Grok Imagine", url: "https://x.ai/" },
      { name: "Pika 2.2", url: "https://pika.art/" },
      { name: "Hailuo / MiniMax", url: "https://hailuoai.video/" },
    ],
  },
  {
    title: "AI Image Models",
    index: "02",
    note: "For frames, references, and stills that seed the shot.",
    span: "wide",
    items: [
      { name: "Seedream 5 Pro", url: "https://seedream.ai/", primary: true },
      { name: "Nano Banana Pro", url: "https://nanobanana.com/", primary: true },
      { name: "Midjourney v7", url: "https://www.midjourney.com/", primary: true },
      { name: "GPT Image 2", url: "https://chatgpt.com/" },
      { name: "Flux 1.1 Ultra", url: "https://blackforestlabs.ai/" },
      { name: "Ideogram 3.0", url: "https://ideogram.ai/" },
      { name: "Recraft V3", url: "https://www.recraft.ai/" },
      { name: "Grok Imagine", url: "https://x.ai/" },
    ],
  },
  {
    title: "Platforms",
    index: "03",
    note: "Where the models are wired into pipelines.",
    span: "wide",
    items: [
      { name: "Higgsfield AI", url: "https://higgsfield.ai/", primary: true },
      { name: "Runway ML", url: "https://runwayml.com/", primary: true },
      { name: "Google Flow / Veo", url: "https://labs.google/fx/tools/flow", primary: true },
      { name: "Dreamina (CapCut)", url: "https://dreamina.capcut.com/" },
      { name: "Adobe Firefly", url: "https://firefly.adobe.com/" },
      { name: "Hedra", url: "https://www.hedra.com/" },
      { name: "OpenArt", url: "https://openart.ai/" },
      { name: "Pika", url: "https://pika.art/" },
      { name: "Kling AI", url: "https://klingai.com/" },
      { name: "Krea AI", url: "https://www.krea.ai/" },
      { name: "Freepik AI", url: "https://www.freepik.com/ai" },
    ],
  },
  {
    title: "Editing & Design",
    index: "04",
    note: "Post, polish, and packaging.",
    span: "wide",
    items: [
      { name: "Premiere Pro", url: "https://www.adobe.com/products/premiere.html", primary: true },
      { name: "Photoshop", url: "https://www.adobe.com/products/photoshop.html", primary: true },
      { name: "Filmora", url: "https://filmora.wondershare.com/" },
      { name: "Canva", url: "https://www.canva.com/" },
      { name: "Sound Design", url: "#process" },
      { name: "Thumbnail Design", url: "#work" },
    ],
  },
  {
    title: "Research",
    index: "05",
    note: "For scripts, structure, and second opinions.",
    span: "compact",
    items: [
      { name: "Claude Opus", url: "https://claude.ai/", primary: true },
      { name: "GPT-5.5", url: "https://chatgpt.com/", primary: true },
      { name: "Gemini 3 Pro", url: "https://gemini.google.com/" },
      { name: "Grok 4", url: "https://x.ai/" },
      { name: "Claude Fable", url: "https://claude.ai/" },
    ],
  },
  {
    title: "Strategy",
    index: "06",
    note: "The layer above the tools.",
    span: "compact",
    items: [
      { name: "Creative Direction", url: "#services", primary: true },
      { name: "Content Strategy", url: "#services", primary: true },
      { name: "Audience Retention", url: "#about" },
      { name: "Trend Analysis", url: "#services" },
    ],
  },
];

function Chip({ item }: { item: Item }) {
  const isInternal = item.url?.startsWith("#");
  const cls = `chip !py-1 !px-2.5 text-[12px] transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
    item.primary
      ? "chip-uv font-medium hover:-translate-y-0.5 hover:shadow-xs hover:border-uv/50"
      : "text-muted-foreground hover:border-uv/40 hover:text-foreground hover:-translate-y-0.5 hover:bg-foreground/[0.02]"
  }`;
  const inner = (
    <>
      <ToolLogo name={item.name} url={item.url} size={15} />
      <span>{item.name}</span>
      {item.url && !isInternal && (
        <ExternalLink
          className="h-2.5 w-2.5 shrink-0 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:text-uv"
          strokeWidth={2}
          aria-hidden
        />
      )}
    </>
  );

  if (item.url) {
    return (
      <a
        href={item.url}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noreferrer"}
        className={`group ${cls}`}
      >
        {inner}
      </a>
    );
  }
  return <span className={`group ${cls}`}>{inner}</span>;
}

function GroupBlock({ g }: { g: Group }) {
  const isFlagship = g.span === "flagship";

  return (
    <div
      className={`${isFlagship ? "pane-uv" : "pane"} pane-lift group flex h-full flex-col p-4.5 sm:p-5.5 ${
        isFlagship ? "sm:p-7" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`type-display text-foreground font-bold ${
            isFlagship
              ? "text-[clamp(1.5rem,2.6vw,2.1rem)]"
              : g.span === "wide"
                ? "text-[clamp(1.2rem,1.7vw,1.55rem)]"
                : "text-[clamp(1.1rem,1.4vw,1.3rem)]"
          }`}
        >
          {g.title}
        </h3>
        <span className="tnum mono-cap mt-1 shrink-0 text-[11px] text-uv/70">{g.index}</span>
      </div>

      <p className="mt-2.5 max-w-[44ch] text-[12.5px] leading-relaxed text-muted-foreground font-medium">
        {g.note}
      </p>

      <div className="mt-4.5 flex flex-wrap gap-1.5">
        {g.items.map((item) => (
          <Chip key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="cv-auto relative">
      <div className="container-prose section-pad">
        <SectionHeading
          index="05"
          eyebrow="Toolkit"
          title="The stack,"
          titleAccent="in order of use."
          lead="Every generative model, video platform, and creative application in active rotation. Click any tool to visit its platform."
          meta={
            <>
              <p className="mono-cap text-muted-foreground">Models in rotation</p>
              <p className="type-display mt-1.5 text-[1.5rem] text-foreground">20+</p>
            </>
          }
        />

        {/* Masonry: flagship stays tall on the left, the rest stack beside it */}
        <div className="mt-14 columns-1 gap-4 sm:mt-16 sm:gap-5 lg:columns-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i} className="mb-4 block break-inside-avoid sm:mb-5">
              <GroupBlock g={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
