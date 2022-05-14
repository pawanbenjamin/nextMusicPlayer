/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  esLint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
