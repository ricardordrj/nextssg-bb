/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['strapi-bbp.s3.sa-east-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
