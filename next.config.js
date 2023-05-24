/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
    }
    return config
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'localhost', 'tailwindui.com', 'gsuplementos.com.br'],
  },
}

module.exports = nextConfig
