"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { processSteps } from "@/lib/constants";
import { fadeInUp, staggerContainerSlow, viewportConfig } from "@/lib/animations";

/* ── Icons ── */

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function PenToolIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function Code2Icon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16l4-4-4-4" />
      <path d="M6 8l-4 4 4 4" />
      <path d="M14.5 4l-5 16" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  search: <SearchIcon />,
  pen: <PenToolIcon />,
  code: <Code2Icon />,
  rocket: <RocketIcon />,
};

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-20 bg-[#000000]">
      <Container>
        {/* ── Section heading ── */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="mb-6">
            <EyebrowTag>Procesas</EyebrowTag>
          </div>
          <h2
            className="font-[var(--font-inter)] font-normal"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Trys{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
            >
              žingsniai
            </span>
            <br />
            <span style={{ color: "#999999" }}>iki pirmųjų rezultatų</span>
          </h2>
        </motion.div>

        {/* ── Editorial timeline: horizontal rule with step nodes ── */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Continuous timeline rule — desktop only, spans behind all nodes */}
          <div
            className="hidden md:block absolute left-0 right-0 pointer-events-none"
            style={{
              top: "48px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 12%, rgba(255,255,255,0.12) 88%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 gap-x-8 md:gap-x-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col"
                variants={fadeInUp}
              >
                {/* ── Step node: oversized numeral behind a small icon disc ── */}
                <div className="relative flex items-center mb-8" style={{ height: "96px" }}>
                  {/* Oversized step numeral — editorial accent */}
                  <span
                    className="absolute left-0 font-[var(--font-inter)] font-light select-none pointer-events-none"
                    style={{
                      fontSize: "96px",
                      lineHeight: 1,
                      letterSpacing: "-0.06em",
                      color: "rgba(255,255,255,0.04)",
                      top: "-8px",
                    }}
                    aria-hidden
                  >
                    {step.number}
                  </span>

                  {/* Small icon disc — sits on the timeline rule */}
                  <div
                    className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full"
                    style={{
                      background: "#050506",
                      border: "1px solid rgba(255, 255, 255, 0.14)",
                      boxShadow: "0 0 0 6px #000000",
                    }}
                  >
                    {iconMap[step.icon]}
                  </div>

                  {/* Step index tag */}
                  <span
                    className="relative z-10 ml-4 font-[var(--font-inter)] font-light tracking-wider"
                    style={{
                      fontSize: "12px",
                      color: "#52525b",
                      letterSpacing: "0.14em",
                    }}
                  >
                    / {step.number}
                  </span>
                </div>

                {/* ── Stage label ── */}
                <p
                  className="font-[var(--font-inter)] font-light uppercase tracking-wider mb-2"
                  style={{
                    fontSize: "11px",
                    color: "#8a96c4",
                    letterSpacing: "0.14em",
                  }}
                >
                  {step.stage}
                </p>

                {/* ── Title ── */}
                <h3
                  className="font-[var(--font-inter)] font-normal mb-3"
                  style={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>

                {/* ── Description ── */}
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#A0A0A0",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
