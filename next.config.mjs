/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conservative config for stable deployment
  experimental: {
    // Only stable experimental features
    optimizePackageImports: [
      "framer-motion",
      "recharts",
    ],
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable SWC minification
  swcMinify: true,

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Output for static export (Netlify compatibility)
  output: "export",
  trailingSlash: true,
  distDir: "out",

  // Image optimization config for static export
  images: {
    unoptimized: true,
  },

  // Asset optimization
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
};

export default nextConfig;
