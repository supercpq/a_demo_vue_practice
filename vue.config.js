const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint检查
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8080',
        ws:true,
        changeOrigin: true,
      }
    }
  }
})
