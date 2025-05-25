/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    sizes: [], // <- aggiunto obbligatoriamente in Next.js 15
  },
};

module.exports = nextConfig;
