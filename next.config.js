/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  env:{
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = withPWA({ ...nextConfig });
