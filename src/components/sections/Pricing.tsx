"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { pricingContent } from "@/lib/constants";
import {
  fadeInUp,
  hardenIn,
  logicGateStagger,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M4 10.5l3.5 3.5L16 6"
        stroke="#8a96c4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 bg-[#000000]">
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
            className="text-center mb-16 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <EyebrowTag>{pricingContent.eyebrow}</EyebrowTag>
            </motion.div>
            <motion.h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
              variants={fadeInUp}
            >
              Aiškiai.{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                Jokio smulkiojo šrifto.
              </span>
            </motion.h2>
            <motion.p
              className="font-[var(--font-inter)] font-light mt-5 mx-auto"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#A0A0A0",
                maxWidth: "520px",
              }}
              variants={fadeInUp}
            >
              {pricingContent.subtitle}
            </motion.p>
          </motion.div>

          {/* Plan cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={logicGateStagger}
          >
            {pricingContent.plans.map((plan, i) => {
              const highlighted = plan.highlighted;
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col p-10 overflow-hidden"
                  style={{
                    background: highlighted
                      ? "linear-gradient(180deg, #161D34 0%, #0A0E1F 55%, #000000 100%)"
                      : "linear-gradient(180deg, #0A0A0C 0%, #050506 55%, #000000 100%)",
                    border: highlighted
                      ? "1px solid rgba(138, 150, 196, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    boxShadow: highlighted
                      ? "0 20px 50px -12px rgba(138, 150, 196, 0.25), 0 0 0 1px rgba(138, 150, 196, 0.1) inset"
                      : "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
                  }}
                  variants={hardenIn}
                >
                  {/* Top highlight line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
                    style={{
                      background: highlighted
                        ? "linear-gradient(90deg, transparent, rgba(138,150,196,0.7), transparent)"
                        : "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
                    }}
                  />

                  {/* Popular tag */}
                  {highlighted && (
                    <span
                      className="absolute top-5 right-5 px-2.5 py-1 rounded-md font-[var(--font-inter)] font-normal uppercase tracking-wider"
                      style={{
                        fontSize: "10px",
                        background: "rgba(138, 150, 196, 0.15)",
                        border: "1px solid rgba(138, 150, 196, 0.3)",
                        color: "#b3bdd9",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Populiarus
                    </span>
                  )}

                  {/* Plan title */}
                  <h3
                    className="relative font-[var(--font-inter)] font-normal mb-3"
                    style={{
                      fontSize: "15px",
                      color: "#FFFFFF",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                    }}
                  >
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="relative flex items-baseline gap-2 mb-2">
                    <span
                      className="font-[var(--font-inter)] font-light"
                      style={{
                        fontSize: "44px",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        color: "#FFFFFF",
                      }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className="relative font-[var(--font-inter)] font-light mb-6"
                    style={{ fontSize: "13px", color: "#71717a" }}
                  >
                    {plan.cadence}
                  </p>

                  {/* Divider */}
                  <div
                    className="relative mb-6"
                    style={{
                      height: "1px",
                      background: "rgba(255, 255, 255, 0.06)",
                    }}
                  />

                  {/* Description */}
                  <p
                    className="relative font-[var(--font-inter)] font-light mb-6"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#A0A0A0",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="relative space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 font-[var(--font-inter)] font-light"
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.5,
                          color: "#A0A0A0",
                        }}
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Single centered CTA */}
          <motion.div
            className="flex justify-center mt-12"
            variants={fadeInUp}
          >
            <a href="#contact" className="btn-primary-blue">
              Gaukite nemokamą auditą
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
