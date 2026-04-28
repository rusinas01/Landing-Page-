"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import ActiveNodeGlow from "../ui/ActiveNodeGlow";
import { comparisonFeatures } from "@/lib/constants";
import {
  fadeInUp,
  hardenIn,
  logicGateStagger,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

/* ── Row icons ── */

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  clock: <ClockIcon />,
  eye: <EyeIcon />,
  settings: <SettingsIcon />,
  target: <TargetIcon />,
  coin: <CoinIcon />,
  message: <MessageIcon />,
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-[#000000]">
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
            className="text-center mb-14 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <EyebrowTag>Palyginimas</EyebrowTag>
            </motion.div>
            <motion.h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
              variants={fadeInUp}
            >
              Kodėl{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                mes?
              </span>
            </motion.h2>
          </motion.div>

          {/* Comparison container */}
          <motion.div
            className="relative max-w-5xl mx-auto overflow-hidden"
            variants={hardenIn}
          >
            <div
              className="relative p-6 md:p-8 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #0A0A0C 0%, #050506 55%, #000000 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                boxShadow:
                  "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
              }}
            >
              <ActiveNodeGlow peakOpacity={0.3} restOpacity={0.08} />

              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(138,150,196,0.45), transparent)",
                }}
              />

              {/* ═══════════════ DESKTOP ═══════════════ */}
              <div className="relative hidden lg:block">
                {/* Column headers */}
                <div className="grid grid-cols-12 items-center pb-6 mb-2">
                  <div className="col-span-5" />
                  <div className="col-span-3 text-center">
                    <span
                      className="font-[var(--font-inter)] font-light uppercase tracking-wider"
                      style={{
                        fontSize: "11px",
                        color: "#52525b",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Kiti
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    <img
                      src="/wordmark.svg"
                      alt="Arktiv Media"
                      width={140}
                      height={100}
                      className="h-9 w-auto"
                    />
                  </div>
                </div>

                <div
                  className="mb-1"
                  style={{
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.06)",
                  }}
                />

                <motion.div variants={logicGateStagger}>
                  {comparisonFeatures.map((row, i) => (
                    <motion.div
                      key={i}
                      className="grid grid-cols-12 items-center py-5"
                      style={{
                        borderBottom:
                          i < comparisonFeatures.length - 1
                            ? "1px solid rgba(255, 255, 255, 0.04)"
                            : "none",
                      }}
                      variants={fadeInUp}
                    >
                      {/* Label */}
                      <div className="col-span-5 flex items-center gap-3">
                        <div
                          className="flex items-center justify-center w-9 h-9 rounded-full shrink-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            boxShadow:
                              "0 2px 6px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.04) inset",
                          }}
                        >
                          {iconMap[row.icon]}
                        </div>
                        <span
                          className="font-[var(--font-inter)] font-normal"
                          style={{ fontSize: "14px", color: "#FFFFFF" }}
                        >
                          {row.label}
                        </span>
                      </div>

                      {/* Others — muted */}
                      <div className="col-span-3 text-center">
                        <span
                          className="font-[var(--font-inter)] font-light"
                          style={{ fontSize: "14px", color: "#A0A0A0" }}
                        >
                          {row.others}
                        </span>
                      </div>

                      {/* Arktiv — clean, high-contrast, bold Inter Regular white */}
                      <div className="col-span-4 text-center">
                        <span
                          className="font-[var(--font-inter)] font-normal"
                          style={{
                            fontSize: "14px",
                            color: "#FFFFFF",
                            letterSpacing: "-0.005em",
                          }}
                        >
                          {row.arktiv}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* ═══════════════ MOBILE / TABLET ═══════════════ */}
              <motion.div
                className="relative lg:hidden flex flex-col"
                variants={logicGateStagger}
              >
                {comparisonFeatures.map((row, i) => (
                  <motion.div
                    key={i}
                    className="py-5"
                    style={{
                      borderBottom:
                        i < comparisonFeatures.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.04)"
                          : "none",
                    }}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                        }}
                      >
                        {iconMap[row.icon]}
                      </div>
                      <span
                        className="font-[var(--font-inter)] font-normal"
                        style={{ fontSize: "14px", color: "#FFFFFF" }}
                      >
                        {row.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pl-11">
                      <div className="flex flex-col gap-1">
                        <span
                          className="font-[var(--font-inter)] font-light uppercase tracking-wider"
                          style={{ fontSize: "10px", color: "#52525b", letterSpacing: "0.08em" }}
                        >
                          Kiti
                        </span>
                        <span
                          className="font-[var(--font-inter)] font-light"
                          style={{ fontSize: "13px", color: "#A0A0A0" }}
                        >
                          {row.others}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <img
                          src="/wordmark.svg"
                          alt="Arktiv Media"
                          width={90}
                          height={32}
                          className="h-5 w-auto mb-0.5"
                        />
                        <span
                          className="font-[var(--font-inter)] font-normal"
                          style={{ fontSize: "13px", color: "#FFFFFF" }}
                        >
                          {row.arktiv}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
