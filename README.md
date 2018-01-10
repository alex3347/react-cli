# React cli with react-router V4 & Redux

> React 脚手架工具，用于快速启动使用react-router V4 以及redux等工具的前端项目

> 分支mobile-adaptive中增加了淘宝移动端flexible 以及rem转换功能，如有需求请[切换分支](https://github.com/alex3347/react-cli/tree/mobile-adaptive)查看
## 功能特性
- react-router v4
- redux
- babel babel-polyfill
- sass
- webpack-dev-server
- 模块热替换（Hot Module Replacement），浏览器实时刷新查看效果
- 文件路径优化
- 单独分离 CSS 样式文件
- 支持图片、图标字体(iconfont)等资源的编译
- 支持浏览器源码调试
- 按需加载
- 文件名增加hash解决缓存问题
- HtmlWebpackPlugin将js插入index.html
- 区分开发环境和生产环境
- UglifyJSPlugin压缩生成的文件
- redux-thunk中间件
- 集成PostCSS，使用autoprefixer
- CSS Modules
- 合并提取webpack公共配置 webpack.common.config

## 需求配置
- node ^6.10.0
- npm ^3.10.2

## 开始

确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ git clone https://github.com/alex3347/react-cli/tree/master
$ cd react-cli
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```
相关命令
|`npm <script>`|解释|
|------------------|-----------|
|`start`|服务启动在3000端口，代码热替换开启。|
|`run dev-build`|编译程序到dist目录下（程序会自动创建）,开发环境的打包文件，包含source-map，未开启压缩。|
|`run build`|编译目录与`run dev-build`相同,正式的上线前打包文件。|

`npm start`后，浏览器打开` http://localhost:8080/`查看效果

## 程序目录



```
│  .babelrc                          #babel配置文件
│  package.json
│  README.MD
│  webpack.common.config.js          #webpack公共配置文件
│  webpack.config.js                 #webpack生产配置文件
│  webpack.dev.config.js             #webpack开发配置文件
│  
├─dist                               #打包后文件所在目录，打包时自动创建
└─src                                #项目源码
    │  index.html                    #index.html模板
    │  index.js                      #入口文件
    │  favicon.ico                   #浏览器标签栏图标
    │  
    ├─components                     #公共组建库
    │  └─Loading
    │          Loading.js            #加载时loading页
    │  └─App
    │          App.js                #根组件
    │          
    ├─pages                          #页面目录
    │  ├─Counter
    │  │      Counter.js
    │  │      
    │  ├─NotFound
    │  │      NotFound.js            #404页面
    │  │      
    │  ├─Home
    │  │  │  Home.scss                #页面样式
    │  │  │  Home.js
    │  │  │  
    │  │  └─images                    #页面图片
    │  │          noList.png
    │  ├─SearchResult
    │  │  │  SearchResult.scss
    │  │  │  SearchResult.js
    │  │  │  
    │  │  └─Header                    #页面内组件
    │  │          Header.js
    │  │          Header.scss
    │          
    ├─redux
    │  │  reducers.js
    │  │  store.js
    │  │  
    │  ├─actions
    │  │      home.js
    │  │      
    │  └─reducers
    │          home.js
    │          
    │─router                        #路由文件
    │       Bundle.js
    │       router.js         
    │          
    │─static                        #公共文件
    │  │  
    │  ├─css
    │  │      reset.css
    │  │      
    │  │─iconfont
    │  │       iconfont.ttf 
    │  │      
    │  └─js
    │          flexible.js
```

## 静态部署

如果你正在使用nginx处理程序，确保所有的路由都直接指向 `~/dist/index.html` 文件
否则请将index.js文件中import {BrowserRouter as Router} from 'react-router-dom';改为import {HashRouter as Router} from 'react-router-dom';


## TIPS
- webpack和webpack-dev-server需要全局安装
- babel-core 调用Babel的API进行转码
- babel-loader
- babel-preset-es2015 用于解析 ES6
- babel-preset-react 用于解析 JSX
- babel-preset-stage-0 用于解析 ES7 提案
- babel-plugin-transform-runtime 将babel转换时用到的辅助函数放到一个单独的模块babel-runtime中，减小项目文件的大小
- babel-polyfill 新语法的垫片


## 希望
本项目是根据react社区一些朋友分享的脚手架综合，并且实际项目运用后所得出得经验
朋友们如果有一些对本项目得建议，或者想法欢迎issues，将持续改进