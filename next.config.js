/** @type {import('next').NextConfig} */
const repoName = 'ian-site';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',                 // build a static site (for GitHub Pages)
  trailingSlash: true,              // write /cases/foo/index.html so refresh works
  skipTrailingSlashRedirect: true,  // avoid runtime redirects GH Pages can't handle
  images: { unoptimized: true },    // GH Pages can't run Next image optimizer
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  reactStrictMode: true,
};
