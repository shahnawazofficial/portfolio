/**
 * The light behind the glass.
 *
 * A fixed, pointer-transparent field of slow ultraviolet orbs. Every pane on
 * the site is translucent, so this is what they pick up — without it the UI
 * is just white boxes. Orbs are plain radial gradients (no blur filter) moved
 * by transform only, so the whole field costs one composited layer.
 */
export function Bloom() {
  return (
    <div className="bloom-field grain" aria-hidden>
      <span className="bloom-orb bloom-a left-[-18vw] top-[-22vh] h-[75vw] w-[75vw] max-h-[900px] max-w-[900px]" />
      <span className="bloom-orb bloom-b right-[-22vw] top-[18vh] h-[70vw] w-[70vw] max-h-[820px] max-w-[820px]" />
      <span className="bloom-orb bloom-c bottom-[-25vh] left-[20vw] h-[65vw] w-[65vw] max-h-[760px] max-w-[760px]" />
    </div>
  );
}
