/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'mediahub.seoul.go.kr',
    ],
  },
};

module.exports = nextConfig;
