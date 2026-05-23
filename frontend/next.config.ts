import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // add this images.unsplash.com as valid image dmainain
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
