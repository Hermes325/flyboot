/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["graphql-request", "swiper"]
  },
}

module.exports = nextConfig
