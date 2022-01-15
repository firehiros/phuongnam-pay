// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')
// const withFonts = require('next-fonts')
// const withVideos = require('next-videos')
const withPlugins = require('next-compose-plugins')
// const optimizedImages = require('next-optimized-images')
const webpack = require('webpack')
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    )

    return config
  }
}

module.exports = withPlugins(
  // [
  //   [
  //     optimizedImages,
  //     {
  //       inlineImageLimit: 8192,
  //       imagesFolder: 'images',
  //       imagesName: '[name]-[hash].[ext]',
  //       handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico'],
  //       optimizeImages: true,
  //       optimizeImagesInDev: false,
  //       mozjpeg: {
  //         quality: 80
  //       },
  //       optipng: {
  //         optimizationLevel: 3
  //       },
  //       pngquant: false,
  //       gifsicle: {
  //         interlaced: true,
  //         optimizationLevel: 3
  //       },
  //       webp: {
  //         preset: 'default',
  //         quality: 75
  //       }
  //     }
  //   ],
  //   [withCSS],
  //   [withFonts],
  //   [
  //     withSass,
  //     {
  //       cssModules: true,
  //       cssLoaderOptions: {
  //         importLoaders: 1,
  //         localIdentName: '[local]___[hash:base64:5]'
  //       }
  //     }
  //   ],
  //   [withVideos]
  // ],
  [],
  nextConfig
)
