"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import { midCtaContent } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export default function MidCta() {
  return (
    <section className="py-12 md:py-16 bg-[#000000]">
      <Container>
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div
            className="relative overflow-hidden flex flex-col md:flex-row md:items-center gap-6 md:gap-10 px-7 py-8 md:px-10 md:py-9"
            style={{
              background:
                "linear-gradient(180deg, #0A0A0C 0%, #050506 55%, #000000 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "20px",
              boxShadow:
                "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
            }}
          >
            {/* Top ambient line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(138,150,196,0.45), transparent)",
              }}
            />

            <div className="flex-1">
              <span
                className="block mb-3 font-[var(--font-inter)] font-light uppercase tracking-wider"
                style={{
                  fontSize: "11px",
                  color: "#8a96c4",
                  letterSpacing: "0.18em",
                }}
              >
                {midCtaContent.eyebrow}
              </span>
              <h3
                className="font-[var(--font-inter)] font-normal mb-3"
                style={{
                  fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {midCtaContent.heading}
              </h3>
              <p
                className="font-[var(--font-inter)] font-light"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#A0A0A0",
                  maxWidth: "520px",
                }}
              >
                {midCtaContent.body}
              </p>
            </div>

            <div className="shrink-0">
              <a href="/kontaktai" className="btn-primary-blue whitespace-nowrap">
                {midCtaContent.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
