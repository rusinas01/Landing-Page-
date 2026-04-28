"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import ActiveNodeGlow from "../ui/ActiveNodeGlow";
import { solutions, solutionsContent } from "@/lib/constants";
import {
  fadeInUp,
  hardenIn,
  logicGateStagger,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

/* ── Custom SVGs (light stroke, 1.5 weight) ── */

function WebDesignIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7V4a2 2 0 012-2h12a2 2 0 012 2v3" />
      <path d="M20 7v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7" />
      <path d="M2 7h20" />
      <path d="M12 11v6" />
      <path d="M9 14l3-3 3 3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  layout: <WebDesignIcon />,
  star: <StarIcon />,
  map: <MapPinIcon />,
};

const tagLabels = ["Svetainė", "Atsiliepimai", "Vietinis SEO"];

function ServiceCard({
  children,
  isHero,
  className,
}: {
  children: React.ReactNode;
  isHero?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative flex flex-col overflow-hidden ${className ?? ""}`}
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
        height={isHero ? "50%" : "40%"}
        peakOpacity={isHero ? 0.42 : 0.3}
        restOpacity={isHero ? 0.15 : 0.1}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px pointer-events-none"
        style={{
          width: isHero ? "50%" : "66%",
          background:
            "linear-gradient(90deg, transparent, rgba(138,150,196,0.45), transparent)",
        }}
      />

      {children}
    </motion.div>
  );
}

export default function Solutions() {
  const hero = solutions[0];
  const secondary = solutions.slice(1);

  return (
    <section id="services" className="relative py-16 md:py-20 bg-[#000000]">
      <div className="workbench-lines" aria-hidden />
      <Container>
        <motion.div
          variants={sectionAssembly}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* ── Section heading ── */}
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <EyebrowTag>Paslaugos</EyebrowTag>
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
              Trys dalys.{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                Viena
              </span>{" "}
              sistema.
            </motion.h2>
            <motion.p
              className="font-[var(--font-inter)] font-light mt-5 mx-auto"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#A0A0A0",
                maxWidth: "520px",
              }}
              variants={fadeInUp}
            >
              {solutionsContent.subtitle}
            </motion.p>
          </motion.div>

          {/* ── Asymmetric bento grid ── */}
          <motion.div
            className="max-w-6xl mx-auto flex flex-col gap-6"
            variants={logicGateStagger}
          >
            {/* Row 1: Hero card (2/3) + first secondary (1/3) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* ── Hero card (spans 2 cols) ── */}
              <ServiceCard isHero className="lg:col-span-2 p-10">
                <div className="relative flex items-start justify-between mb-10">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.06) inset",
                    }}
                  >
                    {iconMap[hero.icon]}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-md font-[var(--font-inter)] font-light uppercase tracking-wider"
                    style={{
                      fontSize: "10px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#A0A0A0",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tagLabels[0]}
                  </span>
                </div>

                <h3
                  className="relative font-[var(--font-inter)] font-normal mb-4"
                  style={{
                    fontSize: "26px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {hero.title}
                </h3>

                <p
                  className="relative font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#A0A0A0",
                    maxWidth: "520px",
                  }}
                >
                  {hero.description}
                </p>
              </ServiceCard>

              {/* ── First secondary card ── */}
              <ServiceCard className="lg:col-span-1 p-10">
                <div className="relative flex items-start justify-between mb-10">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full"
                    style={{
                      background: "#000000",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      boxShadow:
                        "0 0 16px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08) inset",
                    }}
                  >
                    {iconMap[secondary[0].icon]}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-md font-[var(--font-inter)] font-light uppercase tracking-wider"
                    style={{
                      fontSize: "10px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#A0A0A0",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tagLabels[1]}
                  </span>
                </div>

                <h3
                  className="relative font-[var(--font-inter)] font-normal mb-3"
                  style={{
                    fontSize: "22px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {secondary[0].title}
                </h3>

                <p
                  className="relative font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#A0A0A0",
                  }}
                >
                  {secondary[0].description}
                </p>
              </ServiceCard>
            </div>

            {/* Row 2: Full-width horizontal card — service 3 */}
            <ServiceCard className="p-10">
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left: icon + title */}
                <div className="flex items-center gap-5">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.06) inset",
                    }}
                  >
                    {iconMap[secondary[1].icon]}
                  </div>
                  <div>
                    <h3
                      className="font-[var(--font-inter)] font-normal"
                      style={{
                        fontSize: "22px",
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                      }}
                    >
                      {secondary[1].title}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      <span
                        className="px-2.5 py-1 rounded-md font-[var(--font-inter)] font-light uppercase tracking-wider"
                        style={{
                          fontSize: "10px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          color: "#A0A0A0",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {tagLabels[2]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center + right: description spanning remaining 2 cols */}
                <div className="md:col-span-2">
                  <p
                    className="font-[var(--font-inter)] font-light"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#A0A0A0",
                    }}
                  >
                    {secondary[1].description}
                  </p>
                </div>
              </div>
            </ServiceCard>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
