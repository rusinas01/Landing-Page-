"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { aboutContent } from "@/lib/constants";
import {
  fadeInUp,
  logicGateStagger,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#000000]">
      <div className="workbench-lines" aria-hidden />
      <Container>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={sectionAssembly}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={logicGateStagger}>
            <motion.div className="mb-6 flex justify-center" variants={fadeInUp}>
              <EyebrowTag>{aboutContent.tag}</EyebrowTag>
            </motion.div>

            <motion.h2
              className="font-[var(--font-inter)] font-normal mb-8"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
              }}
              variants={fadeInUp}
            >
              <span style={{ color: "#FFFFFF" }}>{aboutContent.heading} </span>
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                {aboutContent.headingAccent}
              </span>
            </motion.h2>

            <motion.div
              className="mx-auto mb-8"
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(255, 255, 255, 0.15)",
              }}
              variants={fadeInUp}
            />

            <motion.p
              className="font-[var(--font-inter)] font-light mx-auto mb-10"
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#A0A0A0",
                maxWidth: "640px",
              }}
              variants={fadeInUp}
            >
              {aboutContent.body}
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={fadeInUp}
            >
              <a href="/kontaktai" className="btn-primary-blue">
                Gaukite NEMOKAMĄ auditą
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
