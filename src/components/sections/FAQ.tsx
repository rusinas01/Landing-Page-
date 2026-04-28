"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { faqItems } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left transition-colors duration-200"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid #1a1a1a",
        borderRadius: "16px",
        padding: "20px 24px",
      }}
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className="font-[var(--font-inter)] font-normal"
          style={{ fontSize: "15px", color: "#FFFFFF" }}
        >
          {question}
        </span>

        {/* + / - icon */}
        <span
          className="shrink-0 flex items-center justify-center w-6 h-6 transition-transform duration-300"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: "#666666",
            fontSize: "20px",
          }}
        >
          +
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pt-4 font-[var(--font-inter)] font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#999999",
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-[#000000]">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Left column — heading */}
          <div className="lg:col-span-4">
            {/* Badge */}
            <div className="mb-6">
              <EyebrowTag>Kaip dirbame?</EyebrowTag>
            </div>

            <h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#FFFFFF" }}>Dažniausi </span>
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                klausimai
              </span>
            </h2>

            <p
              className="mt-4 font-[var(--font-inter)] font-light max-w-sm"
              style={{ fontSize: "14px", lineHeight: 1.7, color: "#666666" }}
            >
              Trumpi atsakymai į tai, ką verslo savininkai klausia prieš pradėdami.
            </p>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
