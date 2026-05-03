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

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b3bdd9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b3bdd9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b3bdd9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const perkIconMap: Record<string, React.ReactNode> = {
  message: <MessageIcon />,
  bolt: <BoltIcon />,
  phone: <PhoneIcon />,
};

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
              className="font-[var(--font-inter)] font-light mx-auto mb-12"
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
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left"
              variants={logicGateStagger}
            >
              {aboutContent.perks.map((perk) => (
                <motion.div
                  key={perk.title}
                  className="p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "16px",
                  }}
                  variants={fadeInUp}
                >
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-lg mb-4"
                    style={{
                      background: "rgba(138, 150, 196, 0.1)",
                      border: "1px solid rgba(138, 150, 196, 0.25)",
                    }}
                  >
                    {perkIconMap[perk.icon]}
                  </div>
                  <h3
                    className="font-[var(--font-inter)] font-normal mb-2"
                    style={{ fontSize: "15px", color: "#FFFFFF" }}
                  >
                    {perk.title}
                  </h3>
                  <p
                    className="font-[var(--font-inter)] font-light"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#A0A0A0",
                    }}
                  >
                    {perk.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

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
