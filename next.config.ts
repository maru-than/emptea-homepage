import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/rise/opengraph-image": ["./app/rise/fonts/**/*"],
  },
};

export default nextConfig;
