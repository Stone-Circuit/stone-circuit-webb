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
    ];
  },
};

export default nextConfig;
