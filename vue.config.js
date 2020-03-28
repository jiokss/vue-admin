const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    　　 /*这个是我存放在github在线预览的项目*/

    // 将构建好的文件输出到哪里
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',

    lintOnSave: false,

    // 是否为生产环境构建生成 source map？
    productionSourceMap: true,

    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: (config) => {
        config.resolve = { //配置解析别名
            extensions: ['.js', '.json', '.vue'],
            alias: {
                '@': path.resolve(__dirname, './src'),
                // 'public': path.resolve(__dirname, './public'),
                // 'components': path.resolve(__dirname, './src/components'),
                // 'common': path.resolve(__dirname, './src/common'),
                // 'api': path.resolve(__dirname, './src/api'),
                // 'views': path.resolve(__dirname, './src/views'),
                // 'data': path.resolve(__dirname, './src/data'),
            }
        }
    },

    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,

        // 是否开启 CSS source map？
        sourceMap: false,

        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        },

        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        requireModuleExtension: true
    },

    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,

    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
    pwa: {},

    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        proxy: {
            '/devApi': {
                target: 'http://www.web-jshtml.cn/productapi/token',
                changeOrigin: true,
                pathRewrite: {
                    '^/devApi': ''
                }
            }
        },
        before: app => {}
    },

    // 三方插件的选项
    pluginOptions: {
        // ...
    }
}