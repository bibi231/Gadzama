import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel/shared hosting — generates plain HTML/CSS/JS files.
  output: "export",
  images: {
    unoptimized: true, // Required for static export (no server-side image optimization)
  },
  trailingSlash: true, // Generates /about/index.html instead of /about.html
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during production build
  },
};

export default nextConfig;
