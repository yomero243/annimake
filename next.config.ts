import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/annimake',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
