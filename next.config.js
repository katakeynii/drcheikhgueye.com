/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placehold.it'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
        fs: false,
        child_process: false,
        net: false,
        tls: false,
    };
    return config;
  },
}

module.exports = nextConfig
