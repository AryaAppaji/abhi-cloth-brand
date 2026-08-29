import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// If your GitHub repository name is different, change this value to match your repository name
const repoName = 'abhi-cloth-brand'; 

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Prepends repository name to assets in production
  basePath: isProd ? `/${repoName}` : '',
};

export default nextConfig;
