/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

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

const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
}

module.exports = withPWA({ ...nextConfig, ...pwaConfig });
