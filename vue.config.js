module.exports = {
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    port: 8800, // 修改端口号
    // proxy: {
    //   '/': {
    //     target: 'http://47.102.100.226:8800/',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  }

}
