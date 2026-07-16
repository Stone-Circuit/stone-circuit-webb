import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1515",
          color: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand glyph */}
        <div
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#00baa3",
            marginBottom: "40px",
            letterSpacing: "1.5px",
          }}
        >
          STONE CIRCUIT
        </div>
        
        {/* Main Heading */}
        <div
          style={{
            fontSize: 60,
            fontWeight: "extrabold",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "1000px",
          }}
        >
          Intelligent business software designed to simplify complex operations.
        </div>
        
        {/* Subhead */}
        <div
          style={{
            fontSize: 24,
            color: "#80adad",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Creators of Operant OS: a reliable workflow orchestration platform for modern enterprises.
        </div>
      </div>
    ),
    { ...size }
  );
}
