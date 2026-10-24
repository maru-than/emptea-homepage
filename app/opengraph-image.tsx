import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { MARK_PATH } from "@/components/home/brand";

export const alt = "emptea — Healthmaxxing without distractions. Crank, the workout tracker for iPhone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  // Static TTF: Satori can't read the variable woff2 the site uses.
  const geist = await readFile(path.join(process.cwd(), "app/fonts/Geist-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#242424",
            letterSpacing: "-0.05em",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <svg width="30" height="30" viewBox="12 12 276 276">
            <path fill="#ff4b2b" d={MARK_PATH} />
          </svg>
          emptea
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            fontSize: 22,
            color: "#707070",
            marginBottom: 32,
          }}
        >
          Crank · the workout tracker for iPhone, made in Switzerland
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 400,
            color: "#242424",
            lineHeight: 1.08,
            letterSpacing: "-0.05em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>healthmaxxing</span>
          <span style={{ color: "#949494" }}>without distractions</span>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 28,
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#ff4b2b",
              color: "#ffffff",
              borderRadius: 999,
              padding: "14px 30px",
              fontSize: 24,
            }}
          >
            Get Crank
          </span>
          <span style={{ color: "#707070", fontSize: 24 }}>Now on the App Store</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: geist, weight: 400, style: "normal" }] },
  );
}
