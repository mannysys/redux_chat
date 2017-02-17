var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // for hot loader: webpackDevServer host and port
    "webpack-dev-server/client?http://localhost:8080",
    // for hot loader: "only" prevents reload on syntax errors
    "webpack/hot/only-dev-server",
    // our app's entry point 主入口文件
    "./src/client/index.js"
  ],
  module:{  //匹配的文件做预处理
    loaders:[{
      test:/\.jsx?$/,
      include: path.join(__dirname,"src"),
      loaders: ["react-hot-loader","babel-loader"],
    }]
  },
  resolve:{
    extensions:[".js",".jsx"]
  },
  output:{   //转换后的文件输出到该文件下指定文件里
    path: __dirname + "/public/build",
    filename:"boundle.js",
    publicPath:"http://localhost:8080/build",
  },
  devServer: {  //打包后的文件返回给浏览器
    contentBase: "./public",
    hot: true,
    host:"localhost",
    proxy:{  //将前端所有请求通过代理发送到后端 3000端口地址
      "*": "http://localhost:"+3000
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]


}