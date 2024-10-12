/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // output: 'export', // para ativar o SSG, porém precisa usar o serve ao invés do start
};

export default nextConfig;
