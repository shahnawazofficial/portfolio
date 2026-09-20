import { useState, type ReactNode } from "react";

/**
 * Built-in SVGs for high-fidelity rendering without relying on external CDN network calls.
 */
const BUILTIN_LOGOS: Record<string, (size: number) => ReactNode> = {
  "premiere pro": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#00005B" />
      <text
        x="4.5"
        y="16.5"
        fill="#9999FF"
        fontSize="11"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
      >
        Pr
      </text>
    </svg>
  ),
  photoshop: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#001E36" />
      <text
        x="4.5"
        y="16.5"
        fill="#31A8FF"
        fontSize="11"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
      >
        Ps
      </text>
    </svg>
  ),
  canva: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#00C4CC" />
      <path
        d="M12.8 15.6c-2.4 0-4.1-1.6-4.1-4.2 0-2.8 2-4.5 4.6-4.5 1.5 0 2.5.6 3.1 1.4l-1.3 1.2c-.5-.6-1.1-.9-1.8-.9-1.5 0-2.6 1.1-2.6 2.8 0 1.6 1 2.6 2.4 2.6.8 0 1.5-.4 2-1l1.2 1.1c-.8 1-2 1.5-3.5 1.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  filmora: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#00F0A0" />
      <path d="M7 6h4v12H7zm6 0h4v6h-4z" fill="#0E1A24" />
    </svg>
  ),
  "kling 3.0": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#06B6D4" />
      <path
        d="M6.5 6.5h3.2v4.2L14.2 6.5H18l-5.2 5.5L18 17.5h-3.8l-4.5-5.2v5.2H6.5v-11z"
        fill="#081A2A"
      />
    </svg>
  ),
  "kling ai": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#06B6D4" />
      <path
        d="M6.5 6.5h3.2v4.2L14.2 6.5H18l-5.2 5.5L18 17.5h-3.8l-4.5-5.2v5.2H6.5v-11z"
        fill="#081A2A"
      />
    </svg>
  ),
  "kling motion control": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#0891B2" />
      <path
        d="M6.5 6.5h3.2v4.2L14.2 6.5H18l-5.2 5.5L18 17.5h-3.8l-4.5-5.2v5.2H6.5v-11z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "seedance 2": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#7C3AED" />
      <path
        d="M12 4.5c3.8 3.8 5.5 7.2 5.5 10 0 3-2.5 5.5-5.5 5.5S6.5 17.5 6.5 14.5c0-2.8 1.7-6.2 5.5-10z"
        fill="#E9D5FF"
      />
      <circle cx="12" cy="14" r="2.2" fill="#7C3AED" />
    </svg>
  ),
  "seedream 5 pro": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#8B5CF6" />
      <path
        d="M12 4.5c3.8 3.8 5.5 7.2 5.5 10 0 3-2.5 5.5-5.5 5.5S6.5 17.5 6.5 14.5c0-2.8 1.7-6.2 5.5-10z"
        fill="#F3E8FF"
      />
    </svg>
  ),
  "veo 3.1": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.74 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.57.38-2.27V6.58H1.25A11.96 11.96 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  ),
  "google flow / veo": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.74 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.57.38-2.27V6.58H1.25A11.96 11.96 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  ),
  "wan 2.7": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FF6A00" />
      <path
        d="M4.5 7.5l2.4 9 2.8-6.5 2.8 6.5 2.4-9h2.2L13.8 19h-2.5L8.5 12.8 5.7 19H3.2L6.8 7.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "runway gen-4": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M6 6h5.8c3.2 0 5.6 2.4 5.6 5.5 0 2-1 3.7-2.6 4.7L18 20h-3.5l-2.6-3.5H8.8V20H6V6zm2.8 2.6v5.3h3c1.6 0 2.8-1.2 2.8-2.6s-1.2-2.7-2.8-2.7H8.8z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "runway ml": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M6 6h5.8c3.2 0 5.6 2.4 5.6 5.5 0 2-1 3.7-2.6 4.7L18 20h-3.5l-2.6-3.5H8.8V20H6V6zm2.8 2.6v5.3h3c1.6 0 2.8-1.2 2.8-2.6s-1.2-2.7-2.8-2.7H8.8z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "luma ray 3": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#0F172A" />
      <path
        d="M12 4l2.4 5.4L20 12l-5.6 2.6L12 20l-2.4-5.4L4 12l5.6-2.6z"
        fill="#38BDF8"
      />
    </svg>
  ),
  "omni flash": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#0891B2" />
      <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
    </svg>
  ),
  "ltx video": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#6366F1" />
      <path d="M7 6h3v8.5h5V17H7V6z" fill="#FFFFFF" />
    </svg>
  ),
  "grok imagine": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M17.2 4h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H3.3l6.5-7.5L2.9 4h5.8l4 5.3zm-1 14.8h1.6L7.9 5.6H6.2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "grok 4": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M17.2 4h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H3.3l6.5-7.5L2.9 4h5.8l4 5.3zm-1 14.8h1.6L7.9 5.6H6.2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "pika 2.2": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FF5E3A" />
      <path
        d="M7 6h5c2.4 0 4.2 1.6 4.2 3.8s-1.8 3.8-4.2 3.8H9.5V18H7V6zm2.5 2.4v3h2.5c1 0 1.8-.7 1.8-1.5s-.8-1.5-1.8-1.5H9.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  pika: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FF5E3A" />
      <path
        d="M7 6h5c2.4 0 4.2 1.6 4.2 3.8s-1.8 3.8-4.2 3.8H9.5V18H7V6zm2.5 2.4v3h2.5c1 0 1.8-.7 1.8-1.5s-.8-1.5-1.8-1.5H9.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "hailuo / minimax": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#2563EB" />
      <path d="M5.5 10.5h2v3h-2zm3-3h2v9h-2zm3-3h2v15h-2zm3 3h2v9h-2zm3 3h2v3h-2z" fill="#FFFFFF" />
    </svg>
  ),
  "nano banana pro": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FACC15" />
      <path
        d="M16 6c-2 0-4 1-5 3-1.5 3-.5 6 1 8 2 2 4.5 2.5 6 2 .5-.2.8-.7.7-1.2-.5-2-2-4.5-3-6 .8-.8 2-1.5 2-2.8 0-1.6-1-3-1.7-3z"
        fill="#1C1917"
      />
    </svg>
  ),
  "midjourney v7": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#1E293B" />
      <path
        d="M12 4.5C8.4 4.5 5.5 7.4 5.5 11c0 2.2 1.1 4.1 2.8 5.3l3.7-4.3V4.5zm1 0v7.5l3.7 4.3c1.7-1.2 2.8-3.1 2.8-5.3 0-3.6-2.9-6.5-6.5-6.5zm-5 13.5c1.2.6 2.6 1 4 1s2.8-.4 4-1l-4-2.5-4 2.5z"
        fill="#F8FAFC"
      />
    </svg>
  ),
  midjourney: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#1E293B" />
      <path
        d="M12 4.5C8.4 4.5 5.5 7.4 5.5 11c0 2.2 1.1 4.1 2.8 5.3l3.7-4.3V4.5zm1 0v7.5l3.7 4.3c1.7-1.2 2.8-3.1 2.8-5.3 0-3.6-2.9-6.5-6.5-6.5zm-5 13.5c1.2.6 2.6 1 4 1s2.8-.4 4-1l-4-2.5-4 2.5z"
        fill="#F8FAFC"
      />
    </svg>
  ),
  "gpt image 2": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#10A37F" />
      <path
        d="M12 5.5a6.5 6.5 0 0 0-4.6 1.9l-.8.8v2.4l1.2-.7 1.4-.8a4.5 4.5 0 0 1 5.6.8l.8 1.4 1.9-1.1A6.5 6.5 0 0 0 12 5.5zm5.5 4.8l-1.9 1.1a4.5 4.5 0 0 1-.8 5.6l.8 1.4 1.1-.6a6.5 6.5 0 0 0 2.3-4.5 6.5 6.5 0 0 0-1.5-3zm-9.8 1.1l-1.2.7A6.5 6.5 0 0 0 5 16.5c1.3 2.1 3.5 3.5 6 3.5a6.5 6.5 0 0 0 4.6-1.9l.8-.8v-2.4l-1.2.7-1.4.8a4.5 4.5 0 0 1-5.6-.8l-.5-.7z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "gpt-5.5": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#10A37F" />
      <path
        d="M12 5.5a6.5 6.5 0 0 0-4.6 1.9l-.8.8v2.4l1.2-.7 1.4-.8a4.5 4.5 0 0 1 5.6.8l.8 1.4 1.9-1.1A6.5 6.5 0 0 0 12 5.5zm5.5 4.8l-1.9 1.1a4.5 4.5 0 0 1-.8 5.6l.8 1.4 1.1-.6a6.5 6.5 0 0 0 2.3-4.5 6.5 6.5 0 0 0-1.5-3zm-9.8 1.1l-1.2.7A6.5 6.5 0 0 0 5 16.5c1.3 2.1 3.5 3.5 6 3.5a6.5 6.5 0 0 0 4.6-1.9l.8-.8v-2.4l-1.2.7-1.4.8a4.5 4.5 0 0 1-5.6-.8l-.5-.7z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "flux 1.1 ultra": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path d="M6 6h12v3H9v3h6.5v3H9v3H6V6z" fill="#00FF88" />
    </svg>
  ),
  "ideogram 3.0": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#EC4899" />
      <circle cx="12" cy="7.5" r="2" fill="#FFFFFF" />
      <rect x="10" y="11" width="4" height="7.5" rx="1" fill="#FFFFFF" />
    </svg>
  ),
  "recraft v3": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#E11D48" />
      <path
        d="M6.5 6h4.8c2.8 0 4.5 1.5 4.5 3.8 0 1.6-.9 2.8-2.3 3.3L16.5 18h-3.2l-2.4-4.5H9.2V18H6.5V6zm2.7 2.4v3h2.1c1.2 0 2-.6 2-1.5s-.8-1.5-2-1.5H9.2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "claude opus": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#D97706" />
      <path
        d="M12 4l1.8 5.6H19l-4.5 3.4 1.7 5.6L12 15l-4.2 3.6 1.7-5.6L5 9.6h5.2z"
        fill="#FEF3C7"
      />
    </svg>
  ),
  "claude fable": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#D97706" />
      <path
        d="M12 4l1.8 5.6H19l-4.5 3.4 1.7 5.6L12 15l-4.2 3.6 1.7-5.6L5 9.6h5.2z"
        fill="#FEF3C7"
      />
    </svg>
  ),
  "gemini 3 pro": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#4F46E5" />
      <path
        d="M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"
        fill="#A5B4FC"
      />
    </svg>
  ),
  "higgsfield ai": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#0D9488" />
      <ellipse
        cx="12"
        cy="12"
        rx="7"
        ry="3"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="7"
        ry="3"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-30 12 12)"
      />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  ),
  "dreamina (capcut)": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M6 7l6 4.5L18 7M6 17l6-4.5 6 4.5"
        stroke="#00E5FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  "adobe firefly": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FA551E" />
      <path
        d="M12 4.5c1 2.3 3 4.2 5 5.5-2 .5-3.8 1.5-4.2 3.5-.5-2-2-3-4.2-3.5 2-1.3 3.4-3.2 3.4-5.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  hedra: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#4F46E5" />
      <path d="M7 6.5h10v2.5H7zm0 4.5h10v2.5H7zm0 4.5h7v2.5H7z" fill="#FFFFFF" />
    </svg>
  ),
  openart: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#9333EA" />
      <circle cx="9" cy="9" r="1.5" fill="#FFFFFF" />
      <circle cx="15" cy="9" r="1.5" fill="#FFFFFF" />
      <circle cx="12" cy="15" r="1.5" fill="#FFFFFF" />
    </svg>
  ),
  "krea ai": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#18181B" />
      <path
        d="M6.5 6.5h3.2v4.8l4.8-4.8H18l-5.5 6 5.5 6.5h-3.5L10 13v5H6.5v-11.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "freepik ai": (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#1D4ED8" />
      <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="2.5" fill="#1D4ED8" />
    </svg>
  ),
  "sound design": (s) => (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-uv"
      aria-hidden
    >
      <path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4" />
    </svg>
  ),
  "thumbnail design": (s) => (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-uv"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-5-5-8 8" />
    </svg>
  ),
  "creative direction": (s) => (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-uv"
      aria-hidden
    >
      <path d="m19 19-4-10-10 4 5 2 2 5Z" />
    </svg>
  ),
  "content strategy": (s) => (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-uv"
      aria-hidden
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  "audience retention": (s) => (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-uv"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "trend analysis": (s) => (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-uv"
      aria-hidden
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  ),
};

const DOMAIN_ICON = (url: string) => {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  } catch {
    return null;
  }
};

export function ToolLogo({
  name,
  url,
  size = 18,
}: {
  name: string;
  url?: string;
  size?: number;
}) {
  const key = name.trim().toLowerCase();

  // 1. Direct high-res SVG renderer
  const customSvg = BUILTIN_LOGOS[key];
  if (customSvg) {
    return customSvg(size);
  }

  // 2. High-res Google Favicon if URL is provided
  const faviconUrl = url && !url.startsWith("#") ? DOMAIN_ICON(url) : null;
  const [failed, setFailed] = useState(false);

  if (faviconUrl && !failed) {
    return (
      <img
        src={faviconUrl}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        width={size}
        height={size}
        onError={() => setFailed(true)}
        className="shrink-0 rounded-[4px] object-contain transition-opacity duration-300 group-hover:opacity-100"
        style={{ width: size, height: size }}
      />
    );
  }

  // 3. Fallback monogram
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-[5px] border border-foreground/15 bg-foreground/[0.04] font-bold text-foreground/70"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      {name.replace(/[^A-Za-z0-9]/g, "").charAt(0).toUpperCase() || "•"}
    </span>
  );
}
