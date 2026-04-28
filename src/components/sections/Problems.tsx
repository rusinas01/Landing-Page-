"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import ActiveNodeGlow from "../ui/ActiveNodeGlow";
import { problems, problemsContent } from "@/lib/constants";
import {
  fadeInUp,
  hardenIn,
  logicGateStagger,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

/* ── Icons ── */

function MonitorXIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="9" y1="9" x2="15" y2="13" />
      <line x1="15" y1="9" x2="9" y2="13" />
    </svg>
  );
}

function SearchOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <line x1="8.5" y1="11" x2="13.5" y2="11" />
    </svg>
  );
}

function StarBrokenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
      <line x1="12" y1="7.5" x2="12" y2="13" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  monitor: <MonitorXIcon />,
  search: <SearchOffIcon />,
  star: <StarBrokenIcon />,
};

export default function Problems() {
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
          {/* ── Heading ── */}
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <EyebrowTag>Problema</EyebrowTag>
            </motion.div>
            <motion.h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
              variants={fadeInUp}
            >
              Skamba{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                pažįstamai?
              </span>
            </motion.h2>
            <motion.p
              className="font-[var(--font-inter)] font-light mt-5 mx-auto"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#A0A0A0",
                maxWidth: "560px",
              }}
              variants={fadeInUp}
            >
              {problemsContent.subtitle}
            </motion.p>
          </motion.div>

          {/* ── Cards ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={logicGateStagger}
          >
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                className="relative p-10 overflow-hidden flex flex-col h-full"
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
                <ActiveNodeGlow />

                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(138,150,196,0.45), transparent)",
                  }}
                />

                {/* Icon disc */}
                <div
                  className="relative flex items-center justify-center w-12 h-12 rounded-full mb-10 shrink-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.06) inset",
                  }}
                >
                  {iconMap[problem.icon]}
                </div>

                {/* Heading — reserves 2 lines so cards stay aligned */}
                <h3
                  className="relative font-[var(--font-inter)] font-normal mb-3 flex items-start"
                  style={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    minHeight: "52px",
                  }}
                >
                  <span>{problem.title}</span>
                </h3>

                <p
                  className="relative font-[var(--font-inter)] font-normal mb-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "#E8E4DA",
                  }}
                >
                  {problem.problem}
                </p>

                <div
                  className="relative mb-4 shrink-0"
                  style={{
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.06)",
                  }}
                />

                <p
                  className="relative font-[var(--font-inter)] font-light flex-grow"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#A0A0A0",
                  }}
                >
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
