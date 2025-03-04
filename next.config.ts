import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1q0jm5ujs3rwb.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d2j4biyfasje1u.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
