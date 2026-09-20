import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Item = { label: string; href: string; wide?: boolean };

/** `wide: true` items are held back until there is room for them. */
const items: Item[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process", wide: true },
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#skills" },
  { label: "Journey", href: "#experience", wide: true },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "process",
  "work",
  "skills",
  "experience",
  "contact",
];

export function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.0008,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    const goingDown = y > lastY.current;
    lastY.current = y;
    setHidden(goingDown && y > 460);
  });

  useEffect(() => {
    const seen = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) seen.set(entry.target.id, entry.isIntersecting);
        const current = SECTION_IDS.find((id) => seen.get(id));
        if (current) setActiveId(current);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (n): n is HTMLElement => !!n,
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVideo = (e: Event) => setVideoPlaying((e as CustomEvent<boolean>).detail);
    window.addEventListener("portfolio:video", onVideo as EventListener);
    return () => window.removeEventListener("portfolio:video", onVideo as EventListener);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const off = videoPlaying || (hidden && !mobileOpen);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-linear-to-r from-uv-deep via-uv to-cyan-edge"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          off ? "-translate-y-[130%] opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="container-page pt-3 sm:pt-4">
          <div
            className={`flex items-center justify-between gap-4 rounded-full px-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 ${
              scrolled
                ? "pane-bar h-14 sm:h-[3.75rem]"
                : "h-14 border border-transparent sm:h-[3.75rem]"
            }`}
          >
            <a
              href="#home"
              aria-label="Mohammad Shahnawaz Khan — home"
              className="group flex shrink-0 items-center gap-2.5 pl-2"
            >
              <span
                aria-hidden
                className="h-7 w-7 rounded-[10px] bg-linear-to-br from-uv-bright via-uv to-uv-deep shadow-[0_6px_16px_-6px_var(--uv)] transition-transform duration-500 group-hover:rotate-12 motion-reduce:transform-none"
              />
              <span className="font-display text-[1.05rem] font-semibold tracking-[-0.04em] text-foreground">
                Shahnawaz
              </span>
            </a>

            <nav className="hidden lg:block" aria-label="Primary">
              <ul className="flex items-center gap-0.5">
                {items.map((it) => {
                  const active = `#${activeId}` === it.href;
                  return (
                    <li key={it.href} className={it.wide ? "hidden xl:block" : undefined}>
                      <a
                        href={it.href}
                        aria-current={active ? "true" : undefined}
                        className={`relative block rounded-full px-3.5 py-2 text-[12px] font-medium transition-colors duration-300 ${
                          active
                            ? "text-uv-deep"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full border border-white/70 bg-linear-to-b from-white/85 to-white/45 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_6px_18px_-10px_var(--uv)]"
                            transition={{ type: "spring", stiffness: 420, damping: 38 }}
                          />
                        )}
                        {it.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <a href="#contact" className="btn btn-uv !px-5 !py-2.5 !text-[12px]">
                  Start a project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="chip inline-flex h-11 w-11 items-center justify-center !p-0 lg:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      mobileOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-white/70 backdrop-blur-2xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="container-page relative flex h-full flex-col justify-center pb-16 pt-24"
            >
              <ul className="flex flex-col gap-2.5">
                {items.map((it, i) => {
                  const active = `#${activeId}` === it.href;
                  return (
                    <motion.li
                      key={it.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.04,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <a
                        href={it.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
                          active ? "pane-uv" : "pane"
                        } rounded-2xl`}
                      >
                        <span
                          className={`type-display text-[clamp(1.5rem,7vw,2.1rem)] ${
                            active ? "uv-text" : "text-foreground"
                          }`}
                        >
                          {it.label}
                        </span>
                        <span className="mono-cap text-muted-foreground/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="btn btn-uv mt-7 w-full"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
