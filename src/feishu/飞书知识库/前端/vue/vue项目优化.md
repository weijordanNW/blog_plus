---
title: vue项目优化
date: '2026-05-21'
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/vue
tag:
  - feishu
---
## [vue2项目打包优化_vue2 打包优化-CSDN博客](https://blog.csdn.net/njkl2166/article/details/135765710)vue2项目打包优化 -博客参考
## 总结
// 引入优化

// 按需引入

// 路由懒加载

// 打包优化

// 包分析器插件 -BundleAnalyzerPlugin

代码压缩

// gzip压缩 -compression-webpack-plugin

// 使用webpack合并js，并且可以对代码进行优化压缩

// 使用cdn加速插件，将第三方库打包到cdn上

// 去掉console.log -terser-webpack-plugin插件

打包加速

// HappyPack 多线程打包,加速打包

常规配置

// 摇树(tree-shaking)优化 usedExports: true, 

// 分包配置 splitChunks

// 拆包（Splitting） splitChunks插件  

其他优化

防抖节流

减少定时器的使用以及及时删除定时器
## vue2
### 思维导图
![image](https://raw.githubusercontent.com/weijordanNW/blog_plus/main/feishu/PK0ObijEfoIw4Rx6ZPvcluqAnBb.jpeg)
### 代码
#### vue.config.js
```javascript
// 其他优化
// 按需引入
// 路由懒加载

// 打包优化
// 包分析器插件 -BundleAnalyzerPlugin

// gzip压缩 -compression-webpack-plugin
// 使用webpack合并js，并且可以对代码进行优化压缩
// 使用cdn加速插件，将第三方库打包到cdn上
// 去掉console.log -terser-webpack-plugin插件

// HappyPack 多线程打包,加速打包

// 摇树(tree-shaking)优化 usedExports: true, 
// 分包配置 splitChunks
// 拆包（Splitting） splitChunks插件  
 
// var webpack = require("webpack");
const { defineConfig } = require("@vue/cli-service");
const webpack = require('webpack')
// -------------------------------------------------
//顶部引入
// 导入包分析器插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 导入gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 导入cdn
const cdnDependencies = require('./public/dependencies-cdn.js')
// 导入多线程
const HappyPack = require('happypack');
const os = require('os');
// 开辟一个线程池，拿到系统CPU的核数，happypack 将编译工作利用所有线程
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// 设置不参与构建的库
let externals = {}
cdnDependencies.forEach(package => { externals[package.name] = package.library })
// 引入文件的 cdn 链接
const cdn = {
  css: cdnDependencies.map(e => e.css).filter(e => e),
  js: cdnDependencies.map(e => e.js).filter(e => e)
}

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// 引入HardSourceWebpackPlugin插件
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

// // 解决每次发版都要强刷清除浏览器缓存
let timeStamp = new Date().getTime();//获取当前时间戳
// -------------------------------------------------

module.exports = defineConfig({
  // 配置路径别名
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  // 配置代理
  devServer: {
    //开启服务器
    open: true,
    // 服务器地址
    // host: "192.168.8.68",
    host: "192.168.8.217",
    // host: "localhost",
    //端口号
    proxy: {
      //当你请求的路径是以/api开头的时候，那么就会把/api替换成target的值，也就是说最终请求的路径是http://
      "/api": {
        //目标服务器地址
        // target: 'http://1.116.64.64:5004/api2/',
        // target: 'http://192.168.8.103/',
        // target: "http://192.168.8.220/",
        target: "http://192.168.8.138/",
        // target: "http://192.168.8.135/",
        // target: "http://192.168.8.213/",
        // target: "http://192.168.8.111/",
        // target: "http://192.168.8.147/",
        // target: "http://192.168.8.207/",
        // target: "http://192.168.8.208/",

        //是否跨域
        changeOrigin: true,
        // ws: true,
        //重写路径
        pathRewrite: {
          "^/api": "",
        },
        // withCredentials: true, // 启用携带Cookie
      },
    },
  },
});

const ENV = process.env.NODE_ENV
module.exports = {
  // 例如 https://www.ciqin.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ciqin.vip/admin/，则设置 baseUrl 为 /admin/。
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  filenameHashing: false,// 关闭文件哈希命名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,//关闭eslint检查

  // 不输出 map 文件,false将提高构建速度
  productionSourceMap: false,

  css: {
    extract: { // 打包后css文件名称添加时间戳
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/chunk.[id].${timeStamp}.css`,
    }
  },
  configureWebpack: config => {

    // 如果是在线上环境
    if (ENV === 'production') {

      // 输出重构 打包编译后的js文件名称,添加时间戳.
      // config.output = {
      //   filename: `js/js[name].${timeStamp}.js`,
      //   chunkFilename: `js/chunk.[id].${timeStamp}.js`,
      // },
      config.externals = externals
      config.plugins.push(

        // 解决端口被占用的问题
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerHost: '127.0.0.1',//ip地址
          analyzerPort: 8880,//设置个未使用的端口就行，默认端口为8888
          reportFilename: 'report.html',
          defaultSizes: 'parsed',
          openAnalyzer: true,//浏览器自动打开
          generateStatsFile: false,
          statsFilename: 'stats.json',
          statsOptions: null,
          logLevel: 'info'
        }),
        // gzip，压缩js
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',//压缩文件的输入路径和名称
          algorithm: "gzip",//表示使用gzip算法进行压缩
          test: /\.(js|css|html)?$/i,//正则匹配文件名
          threshold: 10240,//文件大小阀值，大于或者等于10240字节(10kb)
          minRatio: 0.8,//最小压缩比例，只有压缩后大小与原始大小的比例大于等于该值时，才会保留压缩后的文件。这里设置为 0.8，表示压缩后的文件大小至少为原始文件大小的 80%。
          deleteOriginalAssets: false,//保留原始文件
          cache: false// 不启用文件缓存
        }),
        new HappyPack({
          id: 'happybabel',
          loaders: ['babel-loader'],
          threadPool: happyThreadPool
        }),

        // 为模块提供中间缓存，缓存路径是：node_modules/.cache/hard-source
        // new HardSourceWebpackPlugin()
      );

      // 添加 optimization 配置
      config.optimization = {
        usedExports: true, // 启用摇树优化,默认开启

        // 分包配置
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity, // 最大并行请求数
          minSize: 20000, // 20K以下的依赖不做拆分
          maxSize: 100000, // 限制拆分包的最大大小为100KB
          cacheGroups: {
            vendor: {
              // 拆分依赖，避免单文件过大拖慢页面展示
              // 得益于HTTP2多路复用，不用太担心资源请求太多的问题
              name(module) {
                // const packageNameOne = module.context.match(/[\/]node_modules[\/](.*?)([\/]|$)/);//获取包名
                const packageNameOne = module.context.match(/[\/]node_modules[\/](.*?)([\/]|$)/)[1];
                // 进一步将Ant组件拆分出来,请根据情况来
                // const packageNameOne = module.context.match(/[\/]node_modules[\/](?:ant-design-vue[\/]es[\/])?(.*?)([\/]|$)/)[1]

                const packageName = packageNameOne ? packageNameOne[1] : 'default-package-name';
                return `npm.${packageName.replace("@", "")}`;
              },
              test: /[\/]node_modules[\/]/,
              priority: -10,//设置该缓存组的优先级。
              chunks: 'initial'//initial': 指定在哪种类型的chunks中寻找模块进行拆分，这里是初始chunks。
            },
          },
        },
        // runtimeChunk: "single",
        runtimeChunk: { name: entrypoint => `runtime-${entrypoint.name}` },

        //打包环境去掉console.log等
        minimize: true, // 启用压缩
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: true, // 移除console.log
                drop_debugger: false,
                pure_funcs: ['console.log'], // 确保console.log被识别为纯函数
              },
            },
            extractComments: false, // 根据需要配置
          }),
          // ... 其他minimizer配置 ...
        ],
      };


    }
  },

  //使用webpack合并js，并且可以对代码进行优化压缩
  chainWebpack: (config) => {
    // 删除需要预先加载(当前页面)的资源，当需要这些资源的时候，页面会自动加载
    config.plugins.delete('preload')
    // 删除需要预先获取(将来的页面)的资源
    config.plugins.delete('prefetch')
    config.when(ENV === 'production', config => {
      config.plugin('webpackOptimize')
        .use(
          webpack.optimize.LimitChunkCountPlugin,
          // 限制生成的代码块(chunks)的数量
          [{ maxChunks: 10 }]
        )
        .use(
          webpack.optimize.MinChunkSizePlugin,
          // 指定代码块的最小字节数
          [{ minChunkSize: 50000 }]
        )
    })
    /**
* 添加 CDN 参数到 htmlWebpackPlugin 配置中
*/
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn
      } else {
        args[0].cdn = []
      }
      return args
    })
  },

  // runtimeCompiler运行编译器
  runtimeCompiler: true, // 动态引入组件时需要此配置, Vue CLI 2 或更早版本，runtimeCompiler 默认可能是 true。,Vue CLI 3+runtimeCompiler 是 false，因为模板通常在构建时编译，这可以提高性能。
}
```
### cdn加速插件其他配置
#### dependencies-cdn.js
```javascript
module.exports = [



    // 添加需要cdn的加速插件
    {
        name: 'vue',
        library: 'Vue',
        js: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
        css: ''
    },
    {
        name: 'vue-router',
        library: 'VueRouter',
        js: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.3/dist/vue-router.min.js',
        css: ''
    },
    {
        name: 'vuex',
        library: 'Vuex',
        js: 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js',
        css: ''
    },
    {
        name: 'axios',
        library: 'axios',
        js: 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
        css: ''
    },
    {
        name: 'vue-i18n',
        library: 'VueI18n',
        js: 'https://cdn.jsdelivr.net/npm/vue-i18n@8.22.2/dist/vue-i18n.min.js',
        css: ''
    },
    {
        name: 'element-ui',
        library: 'ELEMENT',
        js: 'https://cdn.jsdelivr.net/npm/element-ui@2.15.6/lib/index.js',
    },
    // {
    //     name: 'element-ui-css',
    //     js: '',
    //     css: 'https://cdn.jsdelivr.net/npm/element-ui@2.15.6/lib/theme-chalk/index.css'
    // },
    {
        name: 'echarts',
        library: 'echarts',
        js: 'https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js',
        css: ''
    },
    // {
    //     name: 'echarts-gl',
    //     library: 'echarts-gl',
    //     js: 'https://cdn.jsdelivr.net/npm/echarts-gl@2.0.0/dist/echarts-gl.min.js',
    // },
    // {
    //     name: 'echarts-wordcloud',
    //     library: 'echarts-wordcloud',
    //     js: 'https://cdn.jsdelivr.net/npm/echarts-wordcloud@2.0.0/dist/echarts-wordcloud.min.js',
    // },
    // {
    //     name: 'echarts-liquidfill',
    //     library: 'echarts-liquidfill',
    // }
]
```

#### index.html
```javascript
<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  
  <!-- 使用 CDN 加速的 CSS 文件，配置在 vue.config.js 下 -->
  <% for (var i in htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style" />
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
    <% } %>
      <title>
        <%= htmlWebpackPlugin.options.title %>
      </title>


      <!-- algo -->
      <!-- <link rel="stylesheet" href="/src/static/html/algo/layui-v2.5.7/layui/css/layui.css" media="all">
  <link rel="stylesheet" href="/src/static/html/algo/css/monitor.css" media="all">

  <script src="/src/static/html/algo/layui-v2.5.7/layui/layui.js" charset="utf-8"></script> -->

      <title>
        <%= htmlWebpackPlugin.options.title %>
      </title>

</head>

<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->

  <!-- 使用 CDN 加速的 JS 文件，配置在 vue.config.js 下 -->
  <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
    <% } %>
</body>
</html>
```

