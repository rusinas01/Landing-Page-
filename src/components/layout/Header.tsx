"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-[#8a96c4] focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
      >
        Pereiti prie turinio
      </a>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Brand mark + name */}
            <a
              href="#"
              className="flex items-center transition-opacity hover:opacity-80 shrink-0"
              aria-label={siteConfig.name}
            >
              <img
                src="/wordmark.svg"
                alt={siteConfig.name}
                width={180}
                height={128}
                className="h-12 md:h-14 w-auto shrink-0"
              />
            </a>

            {/* Desktop Nav — links at 14px, #999 default, white on hover */}
            <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] font-[var(--font-inter)] font-normal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a96c4] rounded-sm whitespace-nowrap"
                    style={{ color: "#999999" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#999999")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA — gradient glow button matching site CTA */}
            <div className="hidden lg:block shrink-0">
              <a href="#contact" className="btn-primary-blue whitespace-nowrap">
                Gaukite nemokamą auditą
              </a>
            </div>

            {/* Mobile + Tablet Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a96c4]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                animate={
                  mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                animate={
                  mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
              />
            </button>
          </nav>
        </div>

        {/* Mobile / Tablet Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 top-16 bg-[#0a0a0b]/95 backdrop-blur-xl z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 pt-8">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        className="text-2xl font-[var(--font-inter)] font-normal text-white hover:text-[#8a96c4] transition-colors duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center font-[var(--font-inter)] font-normal text-[15px] text-white w-full transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                      style={{
                        background: "#8a96c4",
                        borderRadius: "12px",
                        padding: "12px 24px",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Gaukite nemokamą auditą
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
