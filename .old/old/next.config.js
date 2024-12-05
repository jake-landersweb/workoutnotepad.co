/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
