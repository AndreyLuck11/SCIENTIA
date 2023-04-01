const HOST = "http://localhost:8000/"
//
// const Config = {
//   reactStrictMode: true,
//   experimental: { scrollRestoration: true },
//   images : {
//     domains : [HOST, 'localhost', '127.0.0.1'],
//     minimumCacheTTL: 60,
//   },
//   env: {
//     serverAddress: HOST,
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: `${HOST}api/:path*`,
//         basePath: false,
//       },
//       {
//         source: '/media/:path*',
//         destination: `${HOST}media/:path*`,
//         basePath: false,
//       }
//     ]
//   }
// }
//
// module.exports = Config;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
//
// module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    images : {
        domains : [HOST, 'localhost', '127.0.0.1'],
        minimumCacheTTL: 60,
    },
}
