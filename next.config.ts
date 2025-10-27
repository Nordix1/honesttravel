// @ts-check
const path = require('path');

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
  
  // Webpack configuration
  webpack: (config: any) => {
    // Simple alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  
  // Explicitly use webpack and disable Turbopack
  experimental: {
    webpackBuildWorker: true,
  },
  // Disable Turbopack
  turbo: undefined,
};

module.exports = nextConfig;
