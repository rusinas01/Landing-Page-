"use client";

import Container from "./Container";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 border-t"
      style={{
        background: "#000000",
        borderColor: "rgba(255, 255, 255, 0.06)",
      }}
      role="contentinfo"
    >
      {/* Top ambient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(138,150,196,0.3), transparent)",
        }}
        aria-hidden
      />

      <Container>
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="inline-flex items-center mb-5 transition-opacity hover:opacity-80"
              aria-label={siteConfig.name}
            >
              <img
                src="/wordmark.svg"
                alt={siteConfig.name}
                width={200}
                height={142}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </a>
            <p
              className="font-[var(--font-inter)] font-light"
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#A0A0A0",
                maxWidth: "280px",
              }}
            >
              Į užklausas orientuotas dizainas ir matomas SEO. Dirbkite tiesiogiai su kūrėju — be agentūrinio tarpininkavimo.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3
              className="mb-5 font-[var(--font-inter)] font-light uppercase tracking-wider"
              style={{
                fontSize: "11px",
                color: "#a1a1aa",
                letterSpacing: "0.14em",
              }}
            >
              Nuorodos
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[var(--font-inter)] font-light transition-colors duration-200"
                    style={{ fontSize: "13px", color: "#A0A0A0" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#A0A0A0")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3
              className="mb-5 font-[var(--font-inter)] font-light uppercase tracking-wider"
              style={{
                fontSize: "11px",
                color: "#a1a1aa",
                letterSpacing: "0.14em",
              }}
            >
              Kontaktai
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-[var(--font-inter)] font-light transition-colors duration-200"
                  style={{ fontSize: "13px", color: "#A0A0A0" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#A0A0A0")
                  }
                >
                  {siteConfig.email}
                </a>
              </li>
              <li
                className="font-[var(--font-inter)] font-light"
                style={{ fontSize: "13px", color: "#A0A0A0" }}
              >
                Dirbame visoje Lietuvoje
              </li>
              <li
                className="font-[var(--font-inter)] font-light"
                style={{ fontSize: "13px", color: "#71717a" }}
              >
                Nuotoliniai projektai
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
        >
          <p
            className="font-[var(--font-inter)] font-light order-2 sm:order-1"
            style={{ fontSize: "12px", color: "#52525b" }}
          >
            &copy; {new Date().getFullYear()} {siteConfig.name}. Visos teisės saugomos.
          </p>

          <div className="flex items-center gap-6 order-1 sm:order-2">
            <a
              href="/privatumas"
              className="font-[var(--font-inter)] font-light transition-colors duration-200"
              style={{ fontSize: "12px", color: "#71717a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
            >
              Privatumo politika
            </a>
            <a
              href="/taisykles"
              className="font-[var(--font-inter)] font-light transition-colors duration-200"
              style={{ fontSize: "12px", color: "#71717a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
            >
              Taisyklės ir sąlygos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
