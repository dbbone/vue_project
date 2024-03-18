const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,    //关闭eslint
  devServer:{
    //proxy:'http://www.weather.com.cn/data/sk'
    //http://www.weather.com.cn/data/sk
    //http://api.github.com/search/users?q=xxx github免费接口,不要请求太多次 后端工程师把跨域解决了 
     proxy:{
      '/atguigu':{ //代理服务器看到api就会工作
        target:'http://www.weather.com.cn/data/sk', //数据来自于哪台服务器
        pathRewrite:{'^/atguigu':''}
      },
      '/test':{               
         target:'http://localhost/student/',
         pathRewrite:{'^/test':''}
      },
      '/getstudentdata':{
        target:'http://localhost/student/name/学生',
        pathRewrite:{'^/getstudentdata':''}
      }
    }
  }
})
