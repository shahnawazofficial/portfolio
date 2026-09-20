import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * The single scroll-reveal primitive for the whole site.
 * One curve, one duration, index-based stagger — so every section
 * enters with the same rhythm instead of each inventing its own.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
  distance,
  duration = 0.7,
  once = true,
}: {
  children: ReactNode;
  /** Stagger index — multiplied by 90ms. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "h2" | "h3" | "p" | "article" | "span";
  direction?: Direction;
  distance?: number;
  duration?: number;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const base = OFFSET[direction];
  const scale = distance != null ? distance / 28 : 1;

  const variants: Variants = {
    hidden: reduced
      ? { opacity: 0 }
      : { opacity: 0, x: base.x * scale, y: base.y * scale },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0.25 : duration,
        delay: reduced ? 0 : i * 0.09,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Word-by-word mask reveal for display headings. Cheaper than a per-letter
 * animation (one transform per word) and reads far more "designed".
 */
export function RevealLines({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
        >
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
