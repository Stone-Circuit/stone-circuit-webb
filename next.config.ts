import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/api-reference",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/status",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/careers",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/legal/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/legal/terms",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
