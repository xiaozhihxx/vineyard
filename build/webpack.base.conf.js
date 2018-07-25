'use strict';
// 引入nodejs路径模块
const path = require('path');
// 引入utils工具模块，utils主要用来处理css-loader和vue-style-loader的
const utils = require('./utils');
// 引入config目录下的index.js配置文件，主要用来定义一些开发和生产环境的属性
const config = require('../config');
// vue-loader.conf配置文件是用来解决各种css文件的，定义了诸如css、less、sass和样式有关的loader
const vueLoaderConfig = require('./vue-loader.conf');

// 此函数用来返回当前目录的平行目录的路径，因为有个'..'
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
});

module.exports = {
    context: path.resolve(__dirname, '../'),
    // 入口U文件是src目录下的main.js
    entry: {
        app: './src/main.js'
    },
    output: {
        // 路径是config目录下的index.js中的assetsRoot，也就是dist目录
        path: config.build.assetsRoot,
        // 文件名称这里使用默认的name也就是main
        filename: '[name].js',
        // 上线地址，也就是真正的文件引用路径，如果是production，其实这里都是'/'
        publicPath:
            process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
    },
    resolve: {
        // 省略扩展名，也就是说，.js、.vue、.json文件导入时可以省略后缀
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // 后面的$代表精确配置，即完全匹配，如：vue.esm.js引入时不能写成vue.js
            vue$: 'vue/dist/vue.esm.js',
            // resolve('src')其实在这里就是项目根目录中的src目录，如，可以这样：import xxx from '@/some.js';
            '@': resolve('src'),
            src: resolve('src'),
            assets: resolve('src/assets'),
            components: resolve('src/components'),
            views: resolve('src/views'),
            router: resolve('src/router'),
            common: resolve('src/common'),
            $vuex: resolve('src/vuex')
        }
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                // 对vue文件使用vue-loader，该loader是vue单文件组件的实现核心，专门用来解析.vue文件
                loader: 'vue-loader',
                // 将vueLoaderConfig当做参数传递给vue-loader，就可以解析文件中的css相关文件
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                // 对js文件使用babel-loader转码，该插件是用来解析es6等代码
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
