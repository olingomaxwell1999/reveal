/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const apiKey = {
  env: {
    customKey: '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',
  },
}

const small = {
  compress: true,
}

module.exports = nextConfig, apiKey, small
