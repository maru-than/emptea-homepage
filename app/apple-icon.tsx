import { ImageResponse } from "next/og";
import { MARK_PATH } from "@/components/home/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1f2025",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="116" height="116" viewBox="12 12 276 276">
          <path fill="#ffffff" d={MARK_PATH} />
        </svg>
      </div>
    ),
    size,
  );
}
