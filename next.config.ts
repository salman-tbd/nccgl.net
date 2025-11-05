import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Static export configuration
  output: 'export',
  
  // Image optimization (unoptimized for static export)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression (not available with static export)
  // compress: true,

  // Note: Headers and redirects are not available with "output: export"
  // These need to be configured on your web server (Apache, Nginx, etc.)
  // Headers for SEO and security should be set in .htaccess or server config
};

export default nextConfig;
