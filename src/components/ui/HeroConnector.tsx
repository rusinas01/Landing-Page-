/**
 * HeroConnector — a soft shadow block that sits directly under the Hero.
 *
 * Reuses the exact radial gradient from the hero (`Hero.tsx` line 16),
 * flipped upside-down so the navy rim sits at the top (touching the
 * hero) and the dark center falls to the bottom (dissolving into the
 * black Problems section).
 *
 * Pure decoration: pointer-events-none, aria-hidden.
 */
export default function HeroConnector() {
  return (
    <div
      className="relative h-20 md:h-28 w-full overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute inset-0 h-full w-full opacity-60 [background:radial-gradient(125%_125%_at_50%_90%,#0a0a0b_40%,#2d3866_100%)]"
      />
    </div>
  );
}
