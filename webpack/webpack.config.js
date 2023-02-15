/**
 * webpack 配置项
 */
const path =  require('path');

module.exports={

    // 设置源代码js文件和webpack打包生成的js文件 代码之间的对应行号关系。
    devtool:"eval-source-map",

    mode:"development",

    // webpack 约定打包的入口文件为src目录下的index.js ,并且默认把index.js 打包在项目根目录下dist文件夹下,默认名字是main.js

    // 通过使用entey和output可以指定打包的入口文件和输出的文件路径和文件名
    entry: path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bounle.js"
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    
    // 指定@符号 代表根目录下的src目录
    resolve:{
      alias:{
        "@":path.join(__dirname,"/src/")
      }
    }

}