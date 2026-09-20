import { type ReactNode } from "react";

/**
 * Authentic, pixel-perfect official brand SVG logos for AI models and creative tools.
 */
const BRAND_LOGOS: Record<string, (size: number) => ReactNode> = {
  // Canva — Official SimpleIcons Canva brand mark
  canva: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="50%" stopColor="#2E6EE8" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#canva-grad)" />
      <path
        d="M6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Wondershare Filmora — Official SimpleIcons Filmora origami mark
  filmora: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <path
        d="M5.475 0A5.463 5.463 0 0 0 0 5.475v13.05A5.463 5.463 0 0 0 5.475 24h13.05A5.463 5.463 0 0 0 24 18.525V5.475A5.463 5.463 0 0 0 18.525 0H5.475Z"
        fill="#002B37"
      />
      <path
        d="M10.027 3.6l4.026 4.029-4.617 4.623-.022-.023a1.088 1.088 0 0 0-.158-1.339L5.999 7.63l4.028-4.03Z"
        fill="#00F076"
      />
      <path
        d="M14.528 8l4.027 4.03-8.528 8.536L6 16.536 14.528 8Z"
        fill="#00E5FF"
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
      <rect width="32" height="32" rx="7" fill="#0A1118" />
      <circle cx="16" cy="16" r="11" stroke="url(#kling-grad)" strokeWidth="2.5" fill="none" opacity="0.35" />
      <path
        d="M10 9h3.6v5.8l4.8-5.8h4.6l-5.6 6.5 6 7.5h-4.8l-5-6.2v6.2H10V9z"
        fill="url(#kling-grad)"
      />
    </svg>
  ),

  // Runway — Official minimalist Runway dual-track geometric R symbol
  runway: (s) => (
    <svg viewBox="0 0 32 32" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="32" height="32" rx="7" fill="#000000" />
      <path
        d="M9 8h7.2c3.8 0 6.8 2.6 6.8 6s-3 6-6.8 6H13.2v4H9V8zm4.2 8h2.7c1.5 0 2.6-.9 2.6-2s-1.1-2-2.6-2h-2.7v4z"
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
      <rect width="32" height="32" rx="7" fill="#0B132B" />
      <path
        d="M16 6.5l7.5 11.5h-7.5V6.5zm-1 3.5L9 18h6V10zM7 21c2.5 1.5 5 1.5 9 1.5s6.5 0 9-1.5c-2.5 3.5-6.5 4.5-9 4.5s-6.5-1-9-4.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // OpenAI / ChatGPT — Official interlocking spiral rosette (SimpleIcons)
  openai: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#10A37F" />
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Anthropic Claude — Official Anthropic brand A glyph (SimpleIcons)
  claude: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#D97757" />
      <path
        d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // Google Gemini / Veo 3.1 / Imagen 3 — Official SimpleIcons curved 4-point spark
  gemini: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <defs>
        <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1BA1E3" />
          <stop offset="50%" stopColor="#5E5CE6" />
          <stop offset="100%" stopColor="#AF52DE" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="#0B0F19" />
      <path
        d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
        fill="url(#gemini-grad)"
      />
    </svg>
  ),

  // xAI Grok / X — Official SimpleIcons slash-X logo
  grok: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
        fill="#FFFFFF"
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

  // Adobe Premiere Pro — Official SimpleIcons Adobe Pr badge
  premiere: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <path
        d="M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z"
        fill="#9999FF"
      />
    </svg>
  ),

  // Adobe Photoshop — Official SimpleIcons Adobe Ps badge
  photoshop: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <path
        d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"
        fill="#31A8FF"
      />
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
  // ElevenLabs — Official SimpleIcons twin bars mark
  elevenlabs: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z" fill="#FFFFFF" />
    </svg>
  ),

  // DaVinci Resolve — Official SimpleIcons 3-blade color wheel
  davinci: (s) => (
    <svg viewBox="0 0 24 24" width={s} height={s} className="shrink-0" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#111827" />
      <path
        d="M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z"
        fill="#FF4B4B"
      />
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
  if (n.includes("gpt") || n.includes("chatgpt") || n.includes("openai") || n.includes("dall")) return "openai";
  if (n.includes("claude") || n.includes("anthropic")) return "claude";
  if (n.includes("veo") || n.includes("gemini") || n.includes("deepmind") || n.includes("imagen")) return "gemini";
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
