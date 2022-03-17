const path = require("path");

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "./src/assets/css/global.scss";
        `
      }
    }
  },
  devServer: {
    disableHostCheck: true,
  }
}
