const withPWA = require('next-pwa')({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
}

module.exports = withPWA(nextConfig)
