const { defineConfig } = require('@vue/cli-service')
module.exports = {
  outputDir: "../../src/main/resources/static",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8086/',
        changeOrigin: true
      }
    }
  }
};