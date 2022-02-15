/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.qoala.app", "assets.qoalaplus.com"],
  },
};

module.exports = nextConfig;
