/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental optimizations for performance
  experimental: {
    // Optimize package imports for better tree shaking
    optimizePackageImports: [
      "framer-motion",
      "recharts",
      "@use-gesture/react",
      "three",
      "@react-three/fiber",
      "@react-three/drei"
    ],
    // Modern output formats
    optimizeCss: true,
    optimizeServerReact: true,
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
    // Enable React compiler optimizations
    reactRemoveProperties: process.env.NODE_ENV === "production" ? { properties: ["^data-testid$"] } : false,
  },

  // Enable modern JavaScript features
  swcMinify: true,

  // Bundle analyzer (can be enabled as needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },

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
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Asset optimization
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",

  // Modern build optimizations
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
