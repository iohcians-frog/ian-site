/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/cases",
        destination: "/seriously",
        permanent: true,
      },
      {
        source: "/cases/:slug",
        destination: "/seriously/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
