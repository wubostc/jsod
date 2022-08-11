const { defineConfig } = require('@vue/cli-service')
require('dotenv').config()

process.env.VUE_APP_VERSION = require('./package.json').version


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          // ws: true,
          // secure: false,
          changeOrigin: true,
          target: process.env.VUE_APP_API_HOST,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
})
