/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'mediahub.seoul.go.kr',
      'lh3.googleusercontent.com',
      'cdn.shopify.com',
      'www.psychologicalscience.org',
      'd2qgx4jylglh9c.cloudfront.net',
      'betaimg-cdn.baemin.com',
    ],
  },
};

module.exports = nextConfig;
