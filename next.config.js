/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://faruqmaulana.work/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
