/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: "_next",
  images: { unoptimized: true }
}

module.exports = nextConfig
