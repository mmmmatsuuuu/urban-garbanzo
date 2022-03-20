/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.GITHUB_ACTIONS ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  basePath: process.env.GITHUB_ACTIONS ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  staticPageGenerationTimeout: 2000,
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
