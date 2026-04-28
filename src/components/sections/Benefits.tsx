"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import ActiveNodeGlow from "../ui/ActiveNodeGlow";
import { benefits, benefitsContent } from "@/lib/constants";
import {
  fadeInUp,
  hardenIn,
  logicGateStagger,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

/* ── Icons ── */

function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
      <path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GemIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <path d="M11 3L8 9l4 12 4-12-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  bolt: <BoltIcon />,
  shield: <ShieldIcon />,
  gem: <GemIcon />,
};

const cardAccents = [
  {
    iconBg: "#8a96c4",
    iconGlow: "rgba(138, 150, 196, 0.4)",
    backGlowColor: "138, 150, 196",
    peak: 0.32,
  },
  {
    iconBg: "#000000",
    iconGlow: "rgba(0, 0, 0, 0.6)",
    backGlowColor: "34, 197, 94",
    peak: 0.22,
  },
  {
    iconBg: "#F97316",
    iconGlow: "rgba(249, 115, 22, 0.35)",
    backGlowColor: "249, 115, 22",
    peak: 0.28,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-16 md:py-24 bg-[#000000]">
      <div className="workbench-lines" aria-hidden />
      <Container>
        <motion.div
          variants={sectionAssembly}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Heading */}
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <EyebrowTag>{benefitsContent.eyebrow}</EyebrowTag>
            </motion.div>
            <motion.h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
              variants={fadeInUp}
            >
              {benefitsContent.heading}{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                {benefitsContent.headingAccent}
              </span>
            </motion.h2>
            <motion.p
              className="font-[var(--font-inter)] font-light mt-5 mx-auto"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#A0A0A0",
                maxWidth: "520px",
              }}
              variants={fadeInUp}
            >
              {benefitsContent.subtitle}
            </motion.p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={logicGateStagger}
          >
            {benefits.map((benefit, i) => {
              const accent = cardAccents[i];
              return (
                <motion.div
                  key={i}
                  className="relative p-10 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #0A0A0C 0%, #050506 55%, #000000 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    boxShadow:
                      "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
                  }}
                  variants={hardenIn}
                >
                  <ActiveNodeGlow
                    color={accent.backGlowColor}
                    peakOpacity={accent.peak}
                    restOpacity={0.08}
                  />

                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${accent.backGlowColor},0.5), transparent)`,
                    }}
                  />

                  {/* Icon tab */}
                  <div
                    className="relative flex items-center justify-center w-12 h-12 rounded-full mb-10"
                    style={{
                      background: accent.iconBg,
                      boxShadow: `0 0 24px ${accent.iconGlow}, 0 0 0 1px rgba(255,255,255,0.15) inset`,
                    }}
                  >
                    <div style={{ color: "#FFFFFF" }}>
                      {iconMap[benefit.icon]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="relative font-[var(--font-inter)] font-normal mb-3"
                    style={{
                      fontSize: "20px",
                      color: "#FFFFFF",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="relative mb-4"
                    style={{
                      height: "1px",
                      background: "rgba(255, 255, 255, 0.06)",
                    }}
                  />

                  {/* Body */}
                  <p
                    className="relative font-[var(--font-inter)] font-light"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#A0A0A0",
                    }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
