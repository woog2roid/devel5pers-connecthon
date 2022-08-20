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
      'skinnonews.com',
      'www.newsro.kr',
      'lotteblog.s3.ap-northeast-2.amazonaws.com',
      'blog.fantasticservices.com',
      'blog.kakaocdn.net',
      'cdn.discordapp.com',
      'betaimg-cdn.baemin.com',
    ],
  },
};

module.exports = nextConfig;
