"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import ProceduralGroundBackground from "../ui/ProceduralGroundBackground";
import { heroContent } from "@/lib/constants";

// Smooth, "expensive" easing — slow tail for a settled feel
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <AuroraBackground className="overflow-hidden bg-black min-h-0">
      {/* WebGL procedural background — lowest layer */}
      <ProceduralGroundBackground />

      {/* Radial gradient layer — dark-to-blue, blends with WebGL */}
      <div className="absolute inset-0 z-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0b_40%,#2d3866_100%)] opacity-60" />

      {/* Content — high z-index above aurora */}
      <div className="relative z-20 flex flex-col px-5 md:px-8 lg:px-12 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20 max-w-7xl w-full mx-auto">
        {/* Badge — glassmorphism */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          <span
            className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 text-[13px] font-[var(--font-inter)] font-normal"
            style={{
              background: "rgba(10, 10, 12, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: "#D4D4D8",
              boxShadow:
                "0 0 0 1px rgba(255, 255, 255, 0.03) inset, 0 8px 24px -12px rgba(138, 150, 196, 0.4)",
            }}
          >
            <span
              className="inline-flex items-center justify-center px-2 py-1 text-[11px] font-[var(--font-inter)] font-normal tracking-wide uppercase"
              style={{
                background: "#8a96c4",
                color: "#0a0a0b",
                borderRadius: "6px",
                boxShadow:
                  "0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 0 12px rgba(138, 150, 196, 0.5)",
              }}
            >
              NAUJA
            </span>
            Svetainės &middot; SEO &middot; Google Atsiliepimai
          </span>
        </motion.div>

        {/* Heading — Inter Regular. Opacity stays at 1 (LCP), only translateY animates */}
        <motion.h1
          className="font-[var(--font-inter)] font-normal max-w-4xl"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            color: "#FFFFFF",
          }}
          initial={{ y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
        >
          {heroContent.headline}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 font-[var(--font-inter)] font-light max-w-[620px]"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: 1.6,
            color: "#A0A0A0",
          }}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          {heroContent.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-start gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
        >
          <a
            href="/kontaktai"
            className="inline-flex items-center justify-center font-[var(--font-inter)] font-normal text-[15px] transition-all duration-200 hover:brightness-95 active:scale-[0.98]"
            style={{
              background: "#FFFFFF",
              color: "#000000",
              borderRadius: "12px",
              padding: "12px 24px",
              boxShadow:
                "0 0 0 1px rgba(0, 0, 0, 0.08) inset, 0 8px 24px -8px rgba(255, 255, 255, 0.25)",
            }}
          >
            {heroContent.cta}
          </a>

          <a
            href="/darbai"
            className="inline-flex items-center justify-center font-[var(--font-inter)] font-normal text-[15px] transition-all duration-200 hover:bg-white/[0.12] active:scale-[0.98]"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#FFFFFF",
              borderRadius: "12px",
              padding: "12px 24px",
            }}
          >
            Žiūrėti darbus
          </a>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
