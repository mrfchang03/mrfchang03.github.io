/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // ← replaces `next export`
  trailingSlash: true,              // good for static hosts like GitHub Pages
  images: { unoptimized: true },    // if you use next/image with static export
  eslint: { ignoreDuringBuilds: true } // optional: skip ESLint blocking build
};
export default nextConfig;
