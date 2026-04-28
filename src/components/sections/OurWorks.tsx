"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { worksContent } from "@/lib/constants";
import {
  fadeInUp,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

export default function OurWorks() {
  return (
    <section id="works" className="relative py-20 md:py-28 bg-[#000000]">
      <div className="workbench-lines" aria-hidden />
      <Container>
        <motion.div
          variants={sectionAssembly}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* ── Heading ── */}
          <motion.div
            className="text-center mb-12 md:mb-14 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6 flex justify-center" variants={fadeInUp}>
              <EyebrowTag>{worksContent.eyebrow}</EyebrowTag>
            </motion.div>
            <motion.h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#E8E4DA",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
              }}
              variants={fadeInUp}
            >
              {worksContent.title}
            </motion.h2>
            <motion.p
              className="font-[var(--font-inter)] font-light mt-5 mx-auto"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#A0A0A0",
                maxWidth: "540px",
              }}
              variants={fadeInUp}
            >
              {worksContent.subtitle}
            </motion.p>
          </motion.div>

          {/* ── Coming soon card ── */}
          <motion.div
            className="relative max-w-4xl mx-auto overflow-hidden"
            variants={fadeInUp}
          >
            {/* Ambient back-glow */}
            <div
              className="absolute inset-0 pointer-events-none -z-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(138, 150, 196, 0.18), rgba(138, 150, 196, 0.04) 50%, transparent 75%)",
                filter: "blur(50px)",
              }}
              aria-hidden
            />

            <div
              className="relative overflow-hidden flex flex-col items-center justify-center text-center px-8 py-16 md:px-14 md:py-20"
              style={{
                background:
                  "linear-gradient(180deg, #0A0A0C 0%, #050506 55%, #000000 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "28px",
                boxShadow:
                  "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
              }}
            >
              {/* Top ambient line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(138,150,196,0.55), transparent)",
                }}
              />

              {/* Pulsing node */}
              <div className="relative mb-8 flex items-center justify-center">
                <motion.span
                  className="absolute w-16 h-16 rounded-full"
                  style={{ background: "rgba(138, 150, 196, 0.18)" }}
                  animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    background: "rgba(138, 150, 196, 0.12)",
                    border: "1px solid rgba(138, 150, 196, 0.35)",
                    boxShadow: "0 0 24px rgba(138, 150, 196, 0.35)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#8a96c4" }}
                  />
                </span>
              </div>

              <span
                className="font-[var(--font-inter)] font-light uppercase tracking-wider mb-4"
                style={{
                  fontSize: "11px",
                  color: "#8a96c4",
                  letterSpacing: "0.22em",
                }}
              >
                {worksContent.comingSoonLabel}
              </span>

              <h3
                className="font-[var(--font-inter)] font-normal mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  maxWidth: "520px",
                }}
              >
                {worksContent.comingSoonHeadline}{" "}
                <span
                  className="italic"
                  style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
                >
                  {worksContent.comingSoonAccent}
                </span>
              </h3>

              <p
                className="font-[var(--font-inter)] font-light"
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#A0A0A0",
                  maxWidth: "440px",
                }}
              >
                {worksContent.comingSoonNote}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
