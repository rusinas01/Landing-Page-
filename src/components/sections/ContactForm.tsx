"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import EyebrowTag from "../ui/EyebrowTag";
import { contactContent } from "@/lib/constants";
import {
  fadeInUp,
  sectionAssembly,
  viewportConfig,
} from "@/lib/animations";

/* ── Service icons ── */

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const services = [
  {
    id: "website",
    label: "Svetainė",
    description: "Konversinė svetainė, kuri parduoda",
    Icon: MonitorIcon,
  },
  {
    id: "seo",
    label: "Vietinis SEO",
    description: "Pirma vieta Google paieškoje",
    Icon: SearchIcon,
  },
  {
    id: "reviews",
    label: "Google atsiliepimai",
    description: "Autoriteto ir pardavimų didinimas",
    Icon: StarIcon,
  },
];

/* ── Service toggle card ── */

function ServiceToggle({
  id,
  label,
  description,
  Icon,
  selected,
  onToggle,
}: {
  id: string;
  label: string;
  description: string;
  Icon: () => React.ReactElement;
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      aria-pressed={selected}
      className="text-left transition-colors duration-200"
      style={{
        background: selected
          ? "rgba(138, 150, 196, 0.08)"
          : "rgba(255, 255, 255, 0.02)",
        border: selected
          ? "1px solid rgba(138, 150, 196, 0.55)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors duration-200"
          style={{
            background: selected
              ? "rgba(138, 150, 196, 0.18)"
              : "rgba(255, 255, 255, 0.04)",
            border: selected
              ? "1px solid rgba(138, 150, 196, 0.35)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            color: selected ? "#b3bdd9" : "#FFFFFF",
          }}
        >
          <Icon />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span
              className="font-[var(--font-inter)] font-normal"
              style={{ fontSize: "14px", color: "#FFFFFF" }}
            >
              {label}
            </span>
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full shrink-0 transition-all duration-200"
              style={{
                background: selected ? "#8a96c4" : "transparent",
                border: selected
                  ? "1px solid #8a96c4"
                  : "1px solid rgba(255, 255, 255, 0.2)",
              }}
              aria-hidden
            >
              {selected && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0a0a0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </span>
          </div>
          <p
            className="font-[var(--font-inter)] font-light"
            style={{ fontSize: "12px", color: "#A0A0A0", lineHeight: 1.5 }}
          >
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

/* ── Field primitives ── */

function FieldInput({
  name,
  type = "text",
  placeholder,
  required,
  label,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  label: string;
}) {
  return (
    <div>
      <label
        className="block mb-2 font-[var(--font-inter)] font-light uppercase tracking-wider"
        style={{ fontSize: "11px", color: "#71717a", letterSpacing: "0.12em" }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full font-[var(--font-inter)] font-light outline-none transition-colors duration-200"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          color: "#FFFFFF",
          padding: "13px 16px",
          fontSize: "15px",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(138, 150, 196, 0.55)";
          e.currentTarget.style.background = "rgba(138, 150, 196, 0.04)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
        }}
      />
    </div>
  );
}

/* ── Section ── */

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [submittedServices, setSubmittedServices] = useState<string[]>([]);
  const [showServiceError, setShowServiceError] = useState(false);

  const seoSelected = selected.includes("seo");

  function toggleService(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
    if (showServiceError) setShowServiceError(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (selected.length === 0) {
      setShowServiceError(true);
      return;
    }

    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      services: selected,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("network");
      setSubmittedServices(selected);
      setSubmitted(true);
    } catch {
      setError(
        "Nepavyko išsiųsti. Bandykite dar kartą arba parašykite tiesiai į lukas@arktivmedia.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-[#000000] overflow-hidden"
    >
      <div className="workbench-lines" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          variants={sectionAssembly}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div className="mb-6 flex justify-center" variants={fadeInUp}>
              <EyebrowTag>{contactContent.eyebrow}</EyebrowTag>
            </motion.div>
            <motion.h2
              className="font-[var(--font-inter)] font-normal"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
              variants={fadeInUp}
            >
              {contactContent.heading}{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-serif)", color: "#E8E4DA" }}
              >
                {contactContent.headingAccent}
              </span>
            </motion.h2>
            <motion.p
              className="mt-5 font-[var(--font-inter)] font-light mx-auto"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#A0A0A0",
                maxWidth: "560px",
              }}
              variants={fadeInUp}
            >
              {contactContent.subheadline}
            </motion.p>
          </motion.div>

          {/* Form card */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #0A0A0C 0%, #050506 55%, #000000 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                boxShadow:
                  "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
              }}
            >
              {/* Top ambient line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(138,150,196,0.45), transparent)",
                }}
              />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center text-center px-8 py-16 md:py-20"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(138, 150, 196, 0.15)" }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8a96c4"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    className="font-[var(--font-inter)] font-normal mb-3"
                    style={{ fontSize: "22px", color: "#FFFFFF" }}
                  >
                    Žinutė gauta
                  </h3>
                  <p
                    className="font-[var(--font-inter)] font-light max-w-md"
                    style={{ fontSize: "14px", color: "#A0A0A0", lineHeight: 1.6 }}
                  >
                    Per 24 val. atsiųsime Jūsų svetainės maketą, SEO ir
                    „Google“ atsiliepimų auditą
                    {submittedServices.includes("seo") && (
                      <>
                        {" "}— ir{" "}
                        <span style={{ color: "#FFFFFF" }}>
                          3 min. video
                        </span>
                        , kuriame parodysime Jūsų dabartinę poziciją „Google“
                        ir augimo planą
                      </>
                    )}
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-7 md:p-10 space-y-7">
                  {/* Service selector */}
                  <div>
                    <div className="flex items-baseline justify-between gap-3 mb-3">
                      <label
                        className="font-[var(--font-inter)] font-normal"
                        style={{ fontSize: "14px", color: "#FFFFFF" }}
                      >
                        Kokios paslaugos jus domina?
                      </label>
                      <span
                        className="font-[var(--font-inter)] font-light"
                        style={{ fontSize: "12px", color: "#71717a" }}
                      >
                        Galima pasirinkti kelias
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {services.map((s) => (
                        <ServiceToggle
                          key={s.id}
                          id={s.id}
                          label={s.label}
                          description={s.description}
                          Icon={s.Icon}
                          selected={selected.includes(s.id)}
                          onToggle={toggleService}
                        />
                      ))}
                    </div>
                    {showServiceError && (
                      <p
                        className="mt-3 font-[var(--font-inter)] font-light"
                        style={{ fontSize: "12px", color: "#ef4444" }}
                      >
                        Pasirinkite bent vieną paslaugą.
                      </p>
                    )}

                    <div
                      className="mt-4 flex items-start gap-3 transition-colors duration-300"
                      style={{
                        background: seoSelected
                          ? "rgba(138, 150, 196, 0.08)"
                          : "rgba(138, 150, 196, 0.04)",
                        border: seoSelected
                          ? "1px solid rgba(138, 150, 196, 0.45)"
                          : "1px solid rgba(138, 150, 196, 0.18)",
                        borderRadius: "12px",
                        padding: "12px 14px",
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 mt-0.5"
                        style={{
                          background: "rgba(138, 150, 196, 0.15)",
                          border: "1px solid rgba(138, 150, 196, 0.3)",
                        }}
                        aria-hidden
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#b3bdd9"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      </span>
                      <p
                        className="font-[var(--font-inter)] font-light"
                        style={{
                          fontSize: "13px",
                          color: "#C8CEE0",
                          lineHeight: 1.55,
                        }}
                      >
                        Bonus: pasirinkus{" "}
                        <span style={{ color: "#FFFFFF" }}>vietinį SEO</span>{" "}
                        atsiųsime asmeninį{" "}
                        <span style={{ color: "#FFFFFF" }}>3 min. video</span>
                        , kuriame parodysime kur Jūsų verslas yra „Google“
                        dabar ir kaip pakelsime jį į viršų.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px"
                    style={{ background: "rgba(255, 255, 255, 0.06)" }}
                  />

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FieldInput
                      name="name"
                      label="Vardas"
                      placeholder="Jūsų vardas"
                      required
                    />
                    <FieldInput
                      name="email"
                      type="email"
                      label="El. paštas"
                      placeholder="jus@imone.lt"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <FieldInput
                    name="phone"
                    type="tel"
                    label="Telefonas (neprivaloma)"
                    placeholder="+370 ..."
                  />

                  {/* Message */}
                  <div>
                    <label
                      className="block mb-2 font-[var(--font-inter)] font-light uppercase tracking-wider"
                      style={{
                        fontSize: "11px",
                        color: "#71717a",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Apie Jūsų verslą
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Papasakokite apie savo veiklą ir tikslus — visa kita paruošime mes."
                      className="w-full font-[var(--font-inter)] font-light outline-none transition-colors duration-200 resize-none"
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "12px",
                        color: "#FFFFFF",
                        padding: "13px 16px",
                        fontSize: "15px",
                        lineHeight: 1.55,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(138, 150, 196, 0.55)";
                        e.currentTarget.style.background =
                          "rgba(138, 150, 196, 0.04)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.02)";
                      }}
                    />
                  </div>

                  {/* Note + submit */}
                  <div className="flex flex-col items-center gap-4 pt-2">
                    <p
                      className="text-center font-[var(--font-inter)] font-light max-w-md"
                      style={{
                        fontSize: "13px",
                        color: "#A0A0A0",
                        lineHeight: 1.6,
                      }}
                    >
                      Atsiųsime nemokamą{" "}
                      <span style={{ color: "#FFFFFF" }}>
                        svetainės maketą
                      </span>
                      , vietinio SEO ir{" "}
                      <span style={{ color: "#FFFFFF" }}>
                        „Google“ atsiliepimų auditą
                      </span>{" "}
                      — be jokių įsipareigojimų.
                    </p>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary-blue"
                      style={{
                        opacity: submitting ? 0.7 : 1,
                        cursor: submitting ? "wait" : "pointer",
                      }}
                    >
                      {submitting ? "Siunčiama..." : "Siųsti žinutę"}
                    </button>

                    <p
                      className="font-[var(--font-inter)] font-light"
                      style={{ fontSize: "12px", color: "#71717a" }}
                    >
                      {contactContent.responseNote}
                    </p>

                    {error && (
                      <p
                        className="text-center font-[var(--font-inter)] font-light"
                        style={{ fontSize: "13px", color: "#ef4444" }}
                      >
                        {error}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
