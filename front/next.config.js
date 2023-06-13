/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    domains : ['localhost', '127.0.0.1'],
    minimumCacheTTL: 60,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}

module.exports = nextConfig
