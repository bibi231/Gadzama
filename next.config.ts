import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-first: all pages are statically generated at build time.
  // Using standard Next.js mode for Vercel deployment (not output: "export")
  // since we use redirect() and dynamic features.
  images: {
    unoptimized: false, // Use Vercel image optimization
  },
  trailingSlash: false,
};

export default nextConfig;
