import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'abhi-cloth-brand'; 

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  // Expose the base path to client components at build time
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  }
};

export default nextConfig;
