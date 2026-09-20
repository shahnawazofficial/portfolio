import type { CSSProperties, ReactNode } from "react";

/**
 * Infinite marquee. The track holds the children twice and translates -50%,
 * so the loop is seamless and costs exactly one composited transform —
 * no JS, no scroll listener, no layout work per frame.
 *
 * The inter-item gap lives inside each half (plus a trailing gap), so the
 * two halves are exactly equal in width and -50% lands on a perfect seam.
 */
export function Marquee({
  children,
  duration = 48,
  reverse = false,
  pauseOnHover = true,
  className = "",
  gap = "3rem",
}: {
  children: ReactNode;
  /** Seconds for one full pass. */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  gap?: string;
}) {
  const track = reverse ? "marquee-track-reverse" : "marquee-track";
  const halfStyle: CSSProperties = { gap, paddingRight: gap };

  return (
    <div
      className={`marquee-mask group/marquee relative w-full overflow-hidden ${className}`}
    >
      <div
        className={`${track} ${
          pauseOnHover ? "group-hover/marquee:[animation-play-state:paused]" : ""
        }`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center" style={halfStyle}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={halfStyle} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
