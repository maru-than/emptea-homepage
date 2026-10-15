import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "emptea — The toolkit for a better you. Crank, the workout tracker for iPhone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0c",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#f2f2f3",
            letterSpacing: "-0.03em",
          }}
        >
          emptea
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "#52aeff",
            marginBottom: 32,
          }}
        >
          Crank · the workout tracker for iPhone, made in Switzerland
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 600,
            color: "#f2f2f3",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>The toolkit</span>
          <span>for a better you.</span>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 28,
            fontSize: 28,
            fontWeight: 600,
            alignItems: "center",
          }}
        >
          <span style={{ color: "#f2f2f3" }}>Crank</span>
          <span style={{ color: "#4d4d4d", fontWeight: 400 }}>·</span>
          <span style={{ color: "#8f8f8f", fontWeight: 500 }}>Free on the App Store</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
