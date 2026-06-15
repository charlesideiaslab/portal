import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portal",
  assetPrefix: "/portal/",
  images: { unoptimized: true },
};

export default nextConfig;
