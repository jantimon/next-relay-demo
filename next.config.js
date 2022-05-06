/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: require("./relay.config"),
  },
  experimental: {
    concurrentFeatures: true,
  }
};

module.exports = nextConfig;
