/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                 // static export
  trailingSlash: true,
  images: { unoptimized: true },
  // These two lines make assets load from /ian-site/ on GitHub Pages
  basePath: isProd ? '/ian-site' : '',
  assetPrefix: isProd ? '/ian-site/' : '',
};

module.exports = nextConfig;
