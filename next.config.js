/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}

const apiKey = {
  env: {
    customKey: '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',
  },
}

const small = {
  compress: true,
}

const redirect = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig, apiKey, small, redirect
