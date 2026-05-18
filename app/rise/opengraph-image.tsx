import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Rise — a journal that understands you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontsDir = join(process.cwd(), "app/rise/fonts");
  const [ebGaramond, geist] = await Promise.all([
    readFile(join(fontsDir, "EBGaramond-Regular.woff")),
    readFile(join(fontsDir, "Geist-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#e7e5e4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: "EB Garamond",
            fontSize: 220,
            color: "#7c2d12",
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          Rise
        </div>
        <div
          style={{
            fontFamily: "Geist",
            fontSize: 40,
            color: "#a8a29e",
            letterSpacing: "-0.03em",
          }}
        >
          A journal that understands you.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "EB Garamond", data: ebGaramond, style: "normal", weight: 400 },
        { name: "Geist", data: geist, style: "normal", weight: 400 },
      ],
    },
  );
}
