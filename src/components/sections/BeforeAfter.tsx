"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import ActiveNodeGlow from "../ui/ActiveNodeGlow";
import { beforeAfter } from "@/lib/constants";
import {
  fadeInUp,
  hardenIn,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

export default function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section id="results" className="relative py-16 md:py-20 bg-[#000000]">
      <div className="workbench-lines" aria-hidden />
      <Container>
        <motion.div
          variants={sectionAssembly}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* ── Section eyebrow ── */}
          <motion.div
            className="flex justify-center mb-8"
            variants={fadeInUp}
          >
            <EyebrowTag>Prieš / Po</EyebrowTag>
          </motion.div>

          {/* ── Title ── */}
          <motion.h2
            className="text-center font-[var(--font-inter)] font-normal mb-14"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
            variants={fadeInUp}
          >
            Rezultatai{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
            >
              skaičiuose
            </span>
          </motion.h2>

          {/* ── Main Obsidian Container ── */}
          <motion.div
            className="max-w-6xl mx-auto"
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
              {/* Scroll-linked active-node green glow */}
              <ActiveNodeGlow
                color="34, 197, 94"
                peakOpacity={0.32}
                restOpacity={0.08}
              />

              {/* Top ambient line highlight */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(34,197,94,0.45), transparent)",
                }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* ── Left: Metric Panel ── */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  {/* Toggle */}
                  <div
                    className="inline-flex self-start p-1 rounded-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <button
                      onClick={() => setShowAfter(false)}
                      className="relative px-5 py-1.5 font-[var(--font-inter)] font-normal text-[13px] transition-colors duration-200"
                      style={{ color: !showAfter ? "#0a0a0a" : "#999999" }}
                    >
                      {!showAfter && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ background: "#FFFFFF" }}
                          layoutId="toggle-pill"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">Prieš</span>
                    </button>
                    <button
                      onClick={() => setShowAfter(true)}
                      className="relative px-5 py-1.5 font-[var(--font-inter)] font-normal text-[13px] transition-colors duration-200"
                      style={{ color: showAfter ? "#0a0a0a" : "#999999" }}
                    >
                      {showAfter && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ background: "#FFFFFF" }}
                          layoutId="toggle-pill"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">Po</span>
                    </button>
                  </div>

                  {/* Company card */}
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: "#0A0A0A",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
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
                        <path d="M3 21h18" />
                        <path d="M5 21V7l8-4v18" />
                        <path d="M19 21V11l-6-4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p
                        className="font-[var(--font-inter)] font-normal truncate"
                        style={{ fontSize: "14px", color: "#FFFFFF" }}
                      >
                        {beforeAfter.company.name}
                      </p>
                      <p
                        className="font-[var(--font-inter)] font-light truncate"
                        style={{ fontSize: "12px", color: "#71717a" }}
                      >
                        {beforeAfter.company.address}
                      </p>
                    </div>
                  </div>

                  {/* Metric rows — danger (red) → resolution (green) */}
                  <div className="flex flex-col gap-3">
                    {beforeAfter.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center justify-between py-3 px-4 rounded-xl"
                        animate={{
                          background: showAfter
                            ? "linear-gradient(180deg, rgba(34, 197, 94, 0.06) 0%, rgba(34, 197, 94, 0.02) 100%)"
                            : "linear-gradient(180deg, rgba(220, 38, 38, 0.06) 0%, rgba(220, 38, 38, 0.02) 100%)",
                          borderColor: showAfter
                            ? "rgba(34, 197, 94, 0.18)"
                            : "rgba(220, 38, 38, 0.12)",
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          borderWidth: "1px",
                          borderStyle: "solid",
                        }}
                      >
                        <span
                          className="font-[var(--font-inter)] font-light"
                          style={{ fontSize: "13px", color: "#A0A0A0" }}
                        >
                          {metric.label}
                        </span>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={showAfter ? `after-${i}` : `before-${i}`}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.25 }}
                            className="px-3 py-1 rounded-md font-[var(--font-inter)] font-normal"
                            style={{
                              fontSize: "12px",
                              color: "#FFFFFF",
                              background: showAfter ? "#22c55e" : "#dc2626",
                              boxShadow: showAfter
                                ? "0 0 12px rgba(34, 197, 94, 0.35) inset, 0 0 10px rgba(34, 197, 94, 0.25)"
                                : "0 0 12px rgba(220, 38, 38, 0.35) inset, 0 0 10px rgba(220, 38, 38, 0.25)",
                            }}
                          >
                            {showAfter ? metric.after : metric.before}
                          </motion.span>
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ── Right: Image swap (bef.webp ↔ aft.webp) ── */}
                <div className="lg:col-span-7">
                  <div
                    className="relative w-full aspect-square max-w-[460px] mx-auto rounded-2xl overflow-hidden"
                    style={{
                      background: "#0A0A0A",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={showAfter ? "after" : "before"}
                        src={showAfter ? "/aft.webp" : "/bef.webp"}
                        alt={showAfter ? "Po" : "Prieš"}
                        width={460}
                        height={460}
                        className="absolute inset-[8%] w-[84%] h-[84%] object-contain"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Status indicator pill */}
                    <div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                      }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        animate={{
                          backgroundColor: showAfter ? "#22c55e" : "#dc2626",
                        }}
                      />
                      <span
                        className="font-[var(--font-inter)] font-normal"
                        style={{ fontSize: "11px", color: "#0a0a0a" }}
                      >
                        {showAfter ? "Pilnas matomumas" : "Nematoma zona"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
