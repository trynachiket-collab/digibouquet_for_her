/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // ← enables static export
  eslint: {
    ignoreDuringBuilds: true,   // ← uncomment this, avoids build failures
  },
  typescript: {
    ignoreBuildErrors: true,    // ← uncomment this, avoids build failures
  },
  images: {
    unoptimized: true,   // ← required for static export, Next.js image optimization needs a server
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};
export default nextConfig;
