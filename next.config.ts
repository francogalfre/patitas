import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nfvknpjkltkafcrhveff.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/avatars/**",
      },
      {
        protocol: "https",
        hostname: "nfvknpjkltkafcrhveff.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/pet-pics/**",
      },
    ],
  },
};

export default nextConfig;
