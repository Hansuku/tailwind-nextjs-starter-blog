const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const QiniuPlugin = require('qiniu-webpack5-plugin')
// const QiniuPlugin = require('../qiniu-webpack5-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  assetPrefix: isProd ? 'https://cdn.hansuku.com/' : '',
  experimental: { esmExternals: true },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    if (isProd) {
      config.plugins.push(
        new QiniuPlugin({
          exclude: /.*\.json$/,
          gzip: false,
          includeDir: ['static/'],
        })
      )
    }
    return config
  },
  images: {
    domains: ['cdn.hansuku.com'],
  },
})
