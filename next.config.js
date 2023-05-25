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
    domains: ['avatars.githubusercontent.com', 'localhost', 'tailwindui.com', 'gsuplementos.com.br', 'www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png'],
  },
}

module.exports = nextConfig
