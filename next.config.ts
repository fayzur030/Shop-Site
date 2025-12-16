// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.sprwforge.com',
        port: '', // usually empty
        pathname: '/uploads/**', // optional, path filter
      },
    ],
  },
}

module.exports = nextConfig
