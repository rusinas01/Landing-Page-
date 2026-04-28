"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { ctaContent } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-[#000000]">
      <Container>
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* The glow card */}
          <div
            className="relative overflow-hidden text-center px-8 py-16 md:px-16 md:py-24"
            style={{
              background:
                "radial-gradient(circle at center, rgba(138, 150, 196, 0.15) 0%, transparent 70%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "32px",
            }}
          >
            {/* Subtle inner highlight along top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            />

            {/* Badge */}
            <div className="flex justify-center mb-8">
              <EyebrowTag>{ctaContent.eyebrow}</EyebrowTag>
            </div>

            {/* Heading */}
            <h2
              className="font-[var(--font-inter)] font-normal mx-auto"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
            >
              {ctaContent.headingLine1}
              <br />
              <span style={{ color: "#999999" }}>{ctaContent.headingLine2Lead}</span>
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                {ctaContent.headingLine2Accent}
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className="mt-5 mx-auto font-[var(--font-inter)] font-light"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#A0A0A0",
                maxWidth: "520px",
              }}
            >
              {ctaContent.subtitle}
            </p>

            {/* CTA — single, centered, compact, no clutter */}
            <div className="mt-10 flex justify-center">
              <a href="#contact" className="btn-primary-blue">
                {ctaContent.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
