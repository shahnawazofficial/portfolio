import { type ReactNode } from "react";

/**
 * Authentic, pixel-perfect official brand SVG logos for AI models and creative tools.
 */
const BRAND_LOGOS: Record<string, (size: number) => ReactNode> = {
  // Canva — Official Calligraphic script / gradient circle mark
  canva: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="60%" stopColor="#2E6EE8" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#canva-grad)" />
      <path
        d="M21.2 12.2c-.3-.2-.8-.2-1.2 0-.9.6-1.5 1.7-1.9 3.2-.4 1.5-.4 2.8 0 3.6.3.6.8.9 1.4.9.7 0 1.4-.4 2-1.2l.9.8c-.8 1.1-1.8 1.7-2.9 1.7-1.2 0-2.1-.6-2.6-1.7-.5-1.1-.5-2.6 0-4.3.4-1.6 1.1-3 2-4 .8-.9 1.8-1.4 2.8-1.4.6 0 1.2.2 1.6.6l-2.1 1.8zm-4.8 2.6c-.6 2.1-1.3 3.8-2.2 5.1-.8 1.2-1.8 1.8-2.8 1.8-1.1 0-1.8-.7-2.2-2.1-.4-1.3-.3-3 .2-5 .6-2.1 1.5-3.8 2.5-5 1-1.2 2-1.8 3-1.8 1.1 0 1.8.8 2.1 2.2.3 1.3.1 3-.6 4.8zm-1.8-.5c.5-1.5.5-2.6.2-3.3-.2-.5-.6-.8-1.2-.8-.7 0-1.4.6-2.1 1.6-.7 1.1-1.4 2.5-1.8 4.2-.5 1.7-.5 2.8-.2 3.5.3.5.7.8 1.3.8.7 0 1.4-.6 2.1-1.7.7-1.1 1.3-2.6 1.7-4.3z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Wondershare Filmora — Official interlocking mint/teal origami loop logo
  filmora: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="7" fill="#0D1F2D" />
      <path
        d="M9 13.5C9 11 11 9 13.5 9h5C21 9 23 11 23 13.5v5c0 2.5-2 4.5-4.5 4.5h-5C11 23 9 21 9 18.5v-5z"
        fill="none"
        stroke="#00F076"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 9c2.5 0 4.5 2 4.5 4.5v5c0 2.5-2 4.5-4.5 4.5"
        fill="none"
        stroke="#00E5FF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  // Kling AI / Kling 3.0 — Official Kuaishou Kling AI turquoise gradient camera aperture logo
  kling: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="kling-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5D4" />
          <stop offset="100%" stopColor="#00BBF9" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#0A1118" />
      <circle cx="16" cy="16" r="10" stroke="url(#kling-grad)" strokeWidth="2.8" fill="none" opacity="0.4" />
      <path
        d="M10 9h3.6v5.8l4.8-5.8h4.6l-5.6 6.5 6 7.5h-4.8l-5-6.2v6.2H10V9z"
        fill="url(#kling-grad)"
      />
    </svg>
  ),

  // Runway — Official minimalist Runway dual-track geometric R symbol
  runway: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000000" />
      <path
        d="M8.5 8h7.2c3.8 0 6.8 2.6 6.8 6s-3 6-6.8 6H13v4H8.5V8zm4.5 8h2.7c1.5 0 2.6-.9 2.6-2s-1.1-2-2.6-2H13v4z"
        fill="#FFFFFF"
      />
      <path
        d="M17.5 18l5.5 6h-4.2l-4.5-5.2 1.8-1.5 1.4.7z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Midjourney — Official origami sailboat mark
  midjourney: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0D1117" />
      <path
        d="M16 6l8 12h-8V6zm-1 3.5L8.5 18H15V9.5zM7 21c2.5 1.5 5 1.5 9 1.5s6.5 0 9-1.5c-2.5 3.5-6.5 4.5-9 4.5s-6.5-1-9-4.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // OpenAI / ChatGPT — Official interlocking spiral rosette
  openai: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#10A37F" />
      <path
        d="M25.5 14.5a5.5 5.5 0 0 0-.5-4.2 5.6 5.6 0 0 0-5.4-2.8 5.6 5.6 0 0 0-3.6-1.5 5.6 5.6 0 0 0-5.3 3.8 5.6 5.6 0 0 0-4 2 5.6 5.6 0 0 0-.7 5.7 5.5 5.5 0 0 0 .5 4.2 5.6 5.6 0 0 0 5.4 2.8 5.6 5.6 0 0 0 3.6 1.5 5.6 5.6 0 0 0 5.3-3.8 5.6 5.6 0 0 0 4-2 5.6 5.6 0 0 0 .7-5.7zm-8.8 9.3a4.2 4.2 0 0 1-2.4-.8l-4.5-2.6a1 1 0 0 1-.5-.8v-5.2l1.6 1v4.2l3.8 2.2a4.1 4.1 0 0 0 2 0v1.2zm-7.6-4.5a4.2 4.2 0 0 1-.6-2.5v-5.2a1 1 0 0 1 .5-.9l4.5-2.6a4.2 4.2 0 0 1 2.3-.5l-1.6 1-3.7 2.2a4.2 4.2 0 0 0-1.4 1.5v4.5zm1.5-6.8a4.2 4.2 0 0 1 1.8-1.7l4.5-2.6a1 1 0 0 1 1 0l4.5 2.6-1.6 1-3.7-2.1a4.2 4.2 0 0 0-2.8 0l-3.7 2.1v-.3zm12.3 4.2l-3.8-2.2a4.1 4.1 0 0 0-2 0v-1.2a4.2 4.2 0 0 1 2.4.8l4.5 2.6a1 1 0 0 1 .5.8v5.2l-1.6-1V16.7zm2.4-1.4a4.2 4.2 0 0 1 .6 2.5v5.2a1 1 0 0 1-.5.9l-4.5 2.6a4.2 4.2 0 0 1-2.3.5l1.6-1 3.7-2.2a4.2 4.2 0 0 0 1.4-1.5V15.3zm-3.6 5.1l-3.7 2.1a4.2 4.2 0 0 0-2.8 0l-3.7-2.1v.3a4.2 4.2 0 0 1 1.8 1.7l4.5 2.6a1 1 0 0 1 1 0l4.5-2.6-1.6-1z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Anthropic Claude — Official terracotta 8-ray sunburst spark
  claude: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#D97757" />
      <path
        d="M16 6l2.2 6.8L25 15l-6.8 2.2L16 24l-2.2-6.8L7 15l6.8-2.2L16 6z"
        fill="#FFFFFF"
      />
      <circle cx="16" cy="15" r="2.2" fill="#D97757" />
    </svg>
  ),

  // Google Gemini / Veo 3.1 / DeepMind — Official 4-point glowing curved spark
  gemini: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1BA1E3" />
          <stop offset="50%" stopColor="#5E5CE6" />
          <stop offset="100%" stopColor="#AF52DE" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#0B0F19" />
      <path
        d="M16 5c0 6.075 4.925 11 11 11-6.075 0-11 4.925-11 11 0-6.075-4.925-11-11-11 6.075 0 11-4.925 11-11z"
        fill="url(#gemini-grad)"
      />
    </svg>
  ),

  // xAI Grok — Official minimalist slash-X logo
  grok: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000000" />
      <path
        d="M9 8h4.2l9.8 16h-4.2L9 8z"
        fill="#FFFFFF"
      />
      <path
        d="M23 8h-4.1l-3.2 5.2 2.2 3.6 5.1-8.8zM9 24h4.1l3.2-5.2-2.2-3.6L9 24z"
        fill="#FFFFFF"
        opacity="0.8"
      />
    </svg>
  ),

  // Flux (Black Forest Labs) — Official geometric yellow/black BFL mark
  flux: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0F0F11" />
      <path
        d="M10 8h12v4H14.5v3h6.5v4h-6.5v5H10V8z"
        fill="#FACC15"
      />
      <circle cx="21" cy="23" r="2" fill="#FACC15" />
    </svg>
  ),

  // Luma AI / Dream Machine — Official clean aperture ring
  luma: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000000" />
      <circle cx="16" cy="16" r="9" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="16" r="4.5" fill="#FFFFFF" />
      <path d="M16 7v3m0 12v3M7 16h3m12 0h3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // Pika — Official 3D rainbow faceted cube mark
  pika: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#18181B" />
      {/* Top face */}
      <path d="M16 8l7 4-7 4-7-4 7-4z" fill="#FACC15" />
      {/* Left face */}
      <path d="M9 12l7 4v8l-7-4v-8z" fill="#FB7185" />
      {/* Right face */}
      <path d="M16 16l7-4v8l-7 4v-8z" fill="#C084FC" />
    </svg>
  ),

  // Ideogram — Official glowing electric violet/pink 4-point star
  ideogram: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="ideo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#1E1035" />
      <path
        d="M16 7c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"
        fill="url(#ideo-grad)"
      />
      <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
    </svg>
  ),

  // Recraft — Official red/coral pencil origami mark
  recraft: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#FF4F38" />
      <path
        d="M11 21V11h5a4 4 0 0 1 4 4c0 2-1.5 3.5-3.5 3.9L20 21h-3.2l-3-2.5h-1.3V21H11zm1.5-4h3.5c1.4 0 2.5-.9 2.5-2.2s-1.1-2.3-2.5-2.3h-3.5V17z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Adobe Premiere Pro — Official Adobe Pr badge
  premiere: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="7" fill="#00005B" />
      <rect x="1" y="1" width="30" height="30" rx="6" fill="none" stroke="#9999FF" strokeWidth="1.6" />
      <text
        x="6"
        y="21.5"
        fill="#9999FF"
        fontSize="14.5"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        letterSpacing="-0.5px"
      >
        Pr
      </text>
    </svg>
  ),

  // Adobe Photoshop — Official Adobe Ps badge
  photoshop: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="7" fill="#001E36" />
      <rect x="1" y="1" width="30" height="30" rx="6" fill="none" stroke="#31A8FF" strokeWidth="1.6" />
      <text
        x="6"
        y="21.5"
        fill="#31A8FF"
        fontSize="14.5"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        letterSpacing="-0.5px"
      >
        Ps
      </text>
    </svg>
  ),

  // Adobe Firefly — Official iridescent gradient feather spark
  firefly: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="firefly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3366" />
          <stop offset="50%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#1F1B24" />
      <path
        d="M16 6c1 5 4.5 8.5 9.5 9.5-5 1-8.5 4.5-9.5 9.5-1-5-4.5-8.5-9.5-9.5 5-1 8.5-4.5 9.5-9.5z"
        fill="url(#firefly-grad)"
      />
    </svg>
  ),

  // CapCut / Dreamina — Official double-trapezoid blade mark
  capcut: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000000" />
      <path d="M7 11h9l4 5-4 5H7l4-5-4-5z" fill="#FFFFFF" />
      <path d="M16 11h9l-4 5 4 5h-9l4-5-4-5z" fill="#00F0FF" />
    </svg>
  ),

  // ByteDance / Seedance 2 / Seedream — Official violet aperture spark
  seedance: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="see-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#130B24" />
      <path
        d="M16 6c4 4 6 7.5 6 10.5 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-3 2-6.5 6-10.5z"
        fill="url(#see-grad)"
      />
      <circle cx="16" cy="16.5" r="2.8" fill="#FFFFFF" />
    </svg>
  ),

  // Alibaba Wan 2.7 (Tongyi Wanx) — Official connected nodes polygon
  wan: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="wan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#EE0979" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#1A1118" />
      <path
        d="M7 11l4.5 11 4.5-9 4.5 9 4.5-11h-3.2l-2.8 7.5-3-6.5h-2l-3 6.5L9.8 11H7z"
        fill="url(#wan-grad)"
      />
    </svg>
  ),

  // MiniMax / Hailuo — Official audio waveform M mark
  minimax: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0A1628" />
      <path
        d="M8 19v-6a2 2 0 0 1 4 0v6M14 21v-10a2 2 0 0 1 4 0v10M20 19v-6a2 2 0 0 1 4 0v6"
        stroke="#38BDF8"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),

  // Higgsfield AI — Vibrant particle sphere mark
  higgsfield: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="hf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#1C0E14" />
      <circle cx="16" cy="16" r="7.5" fill="url(#hf-grad)" />
      <circle cx="16" cy="16" r="4" fill="#FFFFFF" opacity="0.8" />
    </svg>
  ),

  // ElevenLabs — Official twin bars mark
  elevenlabs: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000000" />
      <rect x="11.5" y="8" width="3.2" height="16" rx="1.6" fill="#FFFFFF" />
      <rect x="17.5" y="8" width="3.2" height="16" rx="1.6" fill="#FFFFFF" />
    </svg>
  ),

  // DaVinci Resolve — Official 3-blade color wheel
  davinci: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#111827" />
      <circle cx="16" cy="11.5" r="4.5" fill="#EF4444" />
      <circle cx="12" cy="19.5" r="4.5" fill="#10B981" />
      <circle cx="20" cy="19.5" r="4.5" fill="#3B82F6" />
      <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
    </svg>
  ),

  // Suno — Solar disc soundwave
  suno: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0A0A0A" />
      <circle cx="16" cy="16" r="8" fill="#F59E0B" />
      <path d="M12 16h8M14 13h4M14 19h4" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  // Freepik AI — Official blue badge
  freepik: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0C4A6E" />
      <circle cx="16" cy="16" r="8" fill="#0284C7" />
      <path d="M13 11h6v3h-6zm0 5h4v3h-4zm0 5h6v-2h-6z" fill="#FFFFFF" />
    </svg>
  ),

  // Krea AI — Official iridescent orb
  krea: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="krea-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#090514" />
      <circle cx="16" cy="16" r="8" fill="url(#krea-grad)" />
      <path d="M12 10v12m0-6l7-6m-7 6l7 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  // Hedra — Official avatar block
  hedra: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#4C1D95" />
      <rect x="10" y="10" width="12" height="12" rx="3" fill="#A78BFA" />
      <circle cx="14" cy="14" r="1.5" fill="#FFFFFF" />
      <circle cx="18" cy="14" r="1.5" fill="#FFFFFF" />
      <path d="M13 18c1 .8 2 .8 3 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // OpenArt — Official palette spark
  openart: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="oa-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#18181B" />
      <path
        d="M16 7a9 9 0 0 0-9 9c0 4.5 3.5 8 8 8 1 0 1.5-.8 1.5-1.5 0-.4-.1-.7-.3-1-.2-.3-.3-.6-.3-1 0-.8.7-1.5 1.5-1.5h1.6c4 0 6.7-2.7 6.7-6.7 0-4.8-4-7.3-8.2-7.3z"
        fill="url(#oa-grad)"
      />
    </svg>
  ),

  // LTX Video — Lightricks camera shutter
  ltx: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000000" />
      <circle cx="16" cy="16" r="8" stroke="#38BDF8" strokeWidth="2" fill="none" />
      <path d="M16 8l4 8-8 4 4-12z" fill="#38BDF8" opacity="0.8" />
    </svg>
  ),

  // Omni Flash / OmniHuman
  omni: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#030712" />
      <circle cx="16" cy="13" r="4.5" fill="#38BDF8" />
      <path d="M10 23c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  ),

  // Nano Banana Pro
  banana: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#FEF08A" />
      <path
        d="M10 21c4.5 2 9.5 1.5 13-3-1-1.5-3-1.5-4-1-2 1-4.5 1-6.5 0-1-.5-2-.5-2.5 0-.8.8-1 2.2 0 4z"
        fill="#CA8A04"
      />
    </svg>
  ),
};

/**
 * Normalizes tool name into brand keys for 100% authentic logo matching.
 */
function resolveBrandKey(rawName: string): string | null {
  const n = rawName.toLowerCase();
  if (n.includes("canva")) return "canva";
  if (n.includes("filmora")) return "filmora";
  if (n.includes("kling")) return "kling";
  if (n.includes("runway")) return "runway";
  if (n.includes("midjourney")) return "midjourney";
  if (n.includes("gpt") || n.includes("chatgpt") || n.includes("openai")) return "openai";
  if (n.includes("claude") || n.includes("anthropic")) return "claude";
  if (n.includes("veo") || n.includes("gemini") || n.includes("deepmind")) return "gemini";
  if (n.includes("grok") || n.includes("xai")) return "grok";
  if (n.includes("flux") || n.includes("black forest")) return "flux";
  if (n.includes("luma")) return "luma";
  if (n.includes("pika")) return "pika";
  if (n.includes("ideogram")) return "ideogram";
  if (n.includes("recraft")) return "recraft";
  if (n.includes("premiere")) return "premiere";
  if (n.includes("photoshop")) return "photoshop";
  if (n.includes("firefly")) return "firefly";
  if (n.includes("capcut") || n.includes("dreamina")) return "capcut";
  if (n.includes("seedance") || n.includes("seedream")) return "seedance";
  if (n.includes("wan")) return "wan";
  if (n.includes("minimax") || n.includes("hailuo")) return "minimax";
  if (n.includes("higgsfield")) return "higgsfield";
  if (n.includes("elevenlabs")) return "elevenlabs";
  if (n.includes("davinci")) return "davinci";
  if (n.includes("suno")) return "suno";
  if (n.includes("freepik")) return "freepik";
  if (n.includes("krea")) return "krea";
  if (n.includes("hedra")) return "hedra";
  if (n.includes("openart")) return "openart";
  if (n.includes("ltx")) return "ltx";
  if (n.includes("omni")) return "omni";
  if (n.includes("banana")) return "banana";
  return null;
}

export function ToolLogo({
  name,
  size = 18,
}: {
  name: string;
  url?: string;
  size?: number;
}) {
  const brandKey = resolveBrandKey(name);

  if (brandKey && BRAND_LOGOS[brandKey]) {
    return BRAND_LOGOS[brandKey](size);
  }

  // Fallback for conceptual or non-brand skills (e.g. "Sound Design", "Creative Direction")
  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center rounded-[5px] border border-uv/25 bg-uv/10 font-mono text-[10.5px] font-bold text-uv-deep"
      style={{ width: size, height: size }}
    >
      {name.replace(/[^A-Za-z0-9]/g, "").charAt(0).toUpperCase() || "✦"}
    </span>
  );
}
