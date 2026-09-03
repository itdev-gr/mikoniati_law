import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Media library του ITDEV Dashboard (Supabase Storage)
        protocol: "https",
        hostname: "xnfvktpvainjchwynhph.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
