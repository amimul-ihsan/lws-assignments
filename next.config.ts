import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
};

export default nextConfig;
