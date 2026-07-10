import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enforce React strict mode for safer enterprise code */
  reactStrictMode: true,
  
  images: {
    /* Prioritize next-gen formats. AVIF is 20% smaller than WebP */
    formats: ["image/avif", "image/webp"],
    
    /* Pre-configure remote patterns for future enterprise CMS/CDN integration */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", /* Placeholder for testing */
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", /* Common enterprise image CDN */
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com", /* AWS S3 buckets */
      }
    ],
    
    /* Increase cache TTL for static assets to reduce server load */
    minimumCacheTTL: 31536000, 
  },
  
  /* Enable experimental features if needed for future-proofing */
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;