## 1.设置项目默认打开
    在package.json启动script后边添加 --open选项

## 2.eslint关闭校验功能
    一、项目根目录创建vue.config.js 配置文件
    二、module.exports = {
        lintOnSave :false
    }

## 3.src目录配置别名
    一、项目根目录创建jsconfig.json
    二、
    {
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
          "@/*": ["src/*"]
      }
    },
    // @ 不能在以下目录使用
    "exclude": ["node_modules", "dist"]
  }
  

