/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins:['192.168.0.107'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;