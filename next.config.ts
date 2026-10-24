import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // a stray lockfile in the home directory otherwise becomes the workspace root
  turbopack: { root: __dirname },
};

export default nextConfig;
