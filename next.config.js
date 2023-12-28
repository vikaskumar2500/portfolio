const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withPWA = require('next-pwa')({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
}

module.exports = PHASE_DEVELOPMENT_SERVER ? nextConfig : withPWA(nextConfig)
