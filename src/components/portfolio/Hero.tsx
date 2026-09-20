import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Aurora from "@/components/Aurora";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const auroraY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden"
    >
      {/* Aurora sits on top of the global bloom and adds the movement */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: auroraY }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {mounted && (
          <div className="absolute inset-0 opacity-40 mix-blend-multiply">
            <Aurora
              colorStops={["#DCD3FF", "#A78BFA", "#7C3AED"]}
              blend={0.62}
              amplitude={1.25}
              speed={0.38}
            />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-background to-transparent" />
      </motion.div>

      <div className="container-page relative w-full pb-28 pt-32 sm:pb-32 sm:pt-36">
        <motion.div
          style={reduced ? undefined : { y: copyY, opacity: fade }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            <span className="chip">
              <span className="status-dot" aria-hidden />
              <span className="mono-cap text-foreground/70">Available for 2026</span>
            </span>
            <span className="chip chip-uv">
              <Sparkles className="h-3 w-3" strokeWidth={2} aria-hidden />
              <span className="mono-cap">Focus: AI Micro-Drama Creation</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="type-display mt-7 text-[clamp(2.85rem,8.5vw,6.5rem)] font-bold tracking-[-0.035em] leading-[1.04] text-foreground"
          >
            Directing Cinematic <br className="hidden sm:inline" />
            <span className="uv-text">AI Micro-Dramas</span> &amp; Films
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.7] text-muted-foreground"
          >
            Two years cutting film and pioneering generative pipelines, working majorly on
            AI micro-drama creation. Delivering high-hook episodic series, cinematic films,
            and viral ads — written, directed, generated, and scored end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#work" className="group btn btn-uv">
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
            </a>
            <a href="#contact" className="btn btn-glass">
              Let&rsquo;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        aria-label="Scroll to about"
        className="chip absolute inset-x-0 bottom-8 mx-auto hidden h-11 w-11 items-center justify-center !p-0 text-muted-foreground transition-colors duration-300 hover:border-uv/40 hover:text-uv sm:flex"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.8} />
        </motion.span>
      </motion.a>
    </section>
  );
}
