"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ActiveNodeGlowProps {
  children: ReactNode;
  className?: string;
  /** Peak opacity when card hits viewport center. Default 0.3 */
  peakOpacity?: number;
  /** Resting opacity at viewport edges. Default 0.1 */
  restOpacity?: number;
  /** Radial glow color. Default electric blue. */
  color?: string;
  /** Pixel height of the top-biased radial. Default 40% */
  height?: string;
}

/*
 * ActiveNodeGlow — scroll-linked radial glow that brightens when the
 * wrapped card passes through the viewport center. Replaces the static
 * blue back-glow layer on bento cards with a "live node" signal.
 *
 * Drop this INSIDE the card container (absolute-positioned overlay).
 */
export default function ActiveNodeGlow({
  className = "",
  peakOpacity = 0.3,
  restOpacity = 0.1,
  color = "138, 150, 196",
  height = "40%",
}: Omit<ActiveNodeGlowProps, "children">) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Bell curve: 0 at edges, peak at 0.5
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [restOpacity, peakOpacity, peakOpacity, peakOpacity, restOpacity],
  );

  return (
    <motion.div
      ref={ref}
      className={`absolute top-0 left-0 right-0 pointer-events-none ${className}`.trim()}
      style={{
        height,
        opacity,
        background: `radial-gradient(ellipse at 50% 0%, rgba(${color}, 1), transparent 70%)`,
      }}
      aria-hidden
    />
  );
}
