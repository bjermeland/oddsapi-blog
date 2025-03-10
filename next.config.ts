/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
    path: 'https://oddsapi-blog.vercel.app/_next/image'
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production'
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production'
  },
  assetPrefix: 'https://oddsapi-blog.vercel.app'
}

module.exports = nextConfig
