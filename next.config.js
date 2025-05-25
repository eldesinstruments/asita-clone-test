/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    sizes: [1], // <- aggiunto obbligatoriamente in Next.js 15
  },
};

module.exports = nextConfig;
