import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const metadata = {
  title: "Puslapis nerastas — Arktiv Media",
  description: "Ieškomas puslapis nerastas. Grįžkite į pradžią.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <AuroraBackground className="overflow-hidden bg-black min-h-screen">
        {/* Radial wash — matches Hero / policies */}
        <div
          className="absolute inset-0 z-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0b_40%,#2d3866_100%)] opacity-60 pointer-events-none"
          aria-hidden
        />

        <main
          id="main-content"
          className="relative z-10 w-full pt-32 md:pt-40 pb-24 flex items-center justify-center min-h-[80vh]"
        >
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 number */}
              <p
                className="font-[var(--font-inter)] font-light mb-8"
                style={{
                  fontSize: "clamp(5rem, 14vw, 9rem)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  color: "#FFFFFF",
                  opacity: 0.95,
                }}
              >
                404
              </p>

              {/* Heading */}
              <h1
                className="font-[var(--font-inter)] font-normal mb-5"
                style={{
                  fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                }}
              >
                Puslapis{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#E8E4DA",
                  }}
                >
                  nerastas.
                </span>
              </h1>

              <p
                className="font-[var(--font-inter)] font-light mb-10 mx-auto"
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#A0A0A0",
                  maxWidth: "440px",
                }}
              >
                Šio puslapio nėra arba jis buvo perkeltas. Grįžkite į pradžią
                arba susisiekite — padėsime rasti tai, ko ieškote.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/" className="btn-primary-blue">
                  Grįžti į pradžią
                </a>
                <a
                  href="/kontaktai"
                  className="inline-flex items-center justify-center font-[var(--font-inter)] font-normal text-[15px] transition-all duration-200 hover:bg-white/[0.12] active:scale-[0.98]"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "12px 24px",
                  }}
                >
                  Susisiekti
                </a>
              </div>
            </div>
          </Container>
        </main>
      </AuroraBackground>
      <Footer />
    </>
  );
}
