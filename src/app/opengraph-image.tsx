import { ImageResponse } from "next/og";

export const alt = "Arktiv Media — Dvigubai daugiau užklausų per 90 dienų.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(125% 125% at 50% 0%, #2d3866 0%, #0a0a0b 55%, #000000 100%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top: wordmark text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#E8E4DA",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#8a96c4",
              boxShadow: "0 0 24px rgba(138, 150, 196, 0.7)",
            }}
          />
          Arktiv Media
        </div>

        {/* Center: headline + subtext */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Dvigubai daugiau užklausų</span>
            <span style={{ color: "#8a96c4" }}>per 90 dienų.</span>
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#A0A0A0",
              maxWidth: 800,
            }}
          >
            Svetainė &middot; Vietinis SEO &middot; „Google“ atsiliepimai
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#FFFFFF" }}>arktivmedia.com</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#8a96c4",
            }}
          >
            Gaukite nemokamą auditą →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
