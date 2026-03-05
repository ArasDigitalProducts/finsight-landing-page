import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2040D8",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <span
          style={{
            color: "white",
            fontWeight: 900,
            fontSize: "18px",
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size }
  );
}
