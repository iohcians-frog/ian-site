/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ tells Next.js to generate static HTML for GitHub Pages
  images: { unoptimized: true },
};

module.exports = nextConfig;
