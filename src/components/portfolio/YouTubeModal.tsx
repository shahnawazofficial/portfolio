import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { X } from "lucide-react";

export function getYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

/** Hides the navigation and freezes the page while a lightbox is open. */
export function useLightboxChrome() {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("portfolio:video", { detail: true }));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.dispatchEvent(new CustomEvent("portfolio:video", { detail: false }));
      document.body.style.overflow = prevOverflow;
    };
  }, []);
}

export function useEscape(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
}

export function LightboxShell({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  useLightboxChrome();
  useEscape(onClose);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-white/80 p-4 backdrop-blur-2xl"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="chip absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center !p-0 text-foreground transition-colors duration-300 hover:border-uv/45 hover:text-uv sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.99 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export function YouTubeModal({ id, onClose }: { id: string; onClose: () => void }) {
  return (
    <LightboxShell onClose={onClose}>
      <div className="pane-media relative aspect-video w-full">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </LightboxShell>
  );
}
