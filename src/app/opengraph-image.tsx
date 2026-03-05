import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#2040D808 1px, transparent 1px), linear-gradient(90deg, #2040D808 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #2040D820 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "auto" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#2040D8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontWeight: 900, fontSize: "24px" }}>F</span>
          </div>
          {/* Split into two spans to avoid multi-child span without flex */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontWeight: 900, fontSize: "32px", color: "#0a0a0a", letterSpacing: "-1px" }}>
              Fin
            </span>
            <span style={{ fontWeight: 900, fontSize: "32px", color: "#2040D8", letterSpacing: "-1px" }}>
              Sight
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Two lines instead of <br /> */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <span
              style={{
                fontSize: "80px",
                fontWeight: 900,
                color: "#0a0a0a",
                lineHeight: 1.05,
                letterSpacing: "-3px",
              }}
            >
              A single prompt.
            </span>
            <span
              style={{
                fontSize: "80px",
                fontWeight: 900,
                color: "#2040D8",
                lineHeight: 1.05,
                letterSpacing: "-3px",
              }}
            >
              Finance controlling.
            </span>
          </div>
          <span
            style={{
              fontSize: "28px",
              color: "#666",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            AI agent system for financial controlling. Connect your ERP, ask in plain language, get instant insights.
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "60px",
            paddingTop: "32px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <span style={{ fontSize: "20px", color: "#999", fontWeight: 500 }}>
            Aras™ Digital Products · BSG Advisory™
          </span>
          <div
            style={{
              background: "#2040D8",
              color: "white",
              fontSize: "20px",
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            Request Early Access
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
