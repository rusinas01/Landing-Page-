import type { NextConfig } from "next";

const sectionRoutes = ["darbai", "paslaugos", "procesas", "kainos", "kontaktai"];

const nextConfig: NextConfig = {
  async rewrites() {
    return sectionRoutes.map((path) => ({
      source: `/${path}`,
      destination: "/",
    }));
  },
};

export default nextConfig;
