import type { ReactNode } from "react";
import { Reveal, RevealLines } from "./Reveal";

/**
 * Every section opens with a frosted index chip, a large display line whose
 * closing clause is filled with the ultraviolet gradient, and a lead
 * paragraph directly beneath it.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  titleAccent,
  lead,
  meta,
  id,
  align = "left",
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: string;
  /** Closing clause, rendered in the ultraviolet gradient. */
  titleAccent?: string;
  lead?: ReactNode;
  /** Small right-hand detail, desktop only. */
  meta?: ReactNode;
  id?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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
              {index}
            </span>
            <span className="font-mono text-[13px] text-foreground/35">/</span>
            <span className="font-mono text-[13px] font-semibold tracking-[0.18em] uppercase text-foreground/85">
              {eyebrow}
            </span>
          </span>
        </Reveal>

        <h2
          id={id}
          className="type-display mt-5 text-[clamp(2.55rem,6.8vw,4.85rem)] font-bold tracking-[-0.035em] leading-[1.05] text-foreground"
        >
          <RevealLines text={title} as="span" className="block" />
          {titleAccent && (
            <RevealLines
              text={titleAccent}
              as="span"
              delay={0.08}
              className="uv-text block"
            />
          )}
        </h2>

        {lead && (
          <Reveal delay={2}>
            <p
              className={`mt-6 text-[16.5px] leading-[1.7] text-muted-foreground ${
                centered ? "mx-auto max-w-[56ch]" : "max-w-[58ch]"
              }`}
            >
              {lead}
            </p>
          </Reveal>
        )}
      </div>

      {meta && (
        <Reveal delay={3} className="shrink-0">
          <div className="pane-soft px-5 py-4">{meta}</div>
        </Reveal>
      )}
    </div>
  );
}
