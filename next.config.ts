// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React Strict Mode for static export
  reactStrictMode: false,
  
  // Enable static export
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable Turbopack
  experimental: {
    turbo: false
  },
  
  // Webpack configuration
  webpack: (config: any) => {
    // Simple alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
  
  // Disable Turbopack
  turbopack: undefined,
};

module.exports = nextConfig;
