import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jyxzminynlepzxkmcucc.supabase.co",
        pathname: "/storage/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
