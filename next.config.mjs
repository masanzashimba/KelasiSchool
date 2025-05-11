/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
  reactStrictMode: true,
  // Autres configurations valides...
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
