const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const EncodingPlugin = require('webpack-encoding-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//保留最新包
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 引入css 单独打包插件
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let ENV = require('minimist')(process.argv.slice(2)).env;
let filename = '';

var drop_console = false;
if(ENV === "development") {
    console.log("你正在使用开发环境");
    filename = 'js/[name].js';
}else if(ENV === "production"){
    console.log("正式环境");
    filename = 'js/[name].[chunkHash:5].js';
    drop_console = true;
}

module.exports = {
    entry: './main.js', //项目入口文件
    output:{                    //输出编译后文件地址及文件名
        path: path.resolve(__dirname, 'dist'),
        filename,
        globalObject: 'this'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'vue 学习',
            inject:'body',
            filename:'index.html',
            template:path.resolve(__dirname, "index.html")
        }),
        new VueLoaderPlugin(),
        new EncodingPlugin({
            encoding: 'utf-8'
        }),
        new CleanWebpackPlugin(
            //['dist/js/main.*.js','dist/js/about.*.js','dist/js/FrontToEnd-faq.*.js','dist/js/home.*.js','dist/js/start.*.js'],　 //匹配删除的文件 没添加新文件都要配置 看是否有更好的方案
            ['./dist/js','./dist/css','./dist/images'],// 同时删除图片文件可能有一些慢
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        ),
        // new ExtractTextPlugin("./sdsdsd/[name].css"),
        new MiniCssExtractPlugin({// 抽取样式
            filename: "css/[name].[chunkhash:8].css", // 打包出来的主文件名
            chunkFilename: "css/[name].[chunkhash:8].css" // 异步模块，或懒加载模块 命名
        }),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                beautify: false,// 最紧凑的输出
                comments: false, // 删除所有的注释
                compress: {
                    warnings: false,// 在UglifyJs删除没有用到的代码时不输出警告
                    drop_console,// 删除所有的 `console` 语句// 还可以兼容ie浏览器
                    collapse_vars: true,// 内嵌定义了但是只用到一次的变量
                    reduce_vars: true,// 提取出出现多次但是没有定义成变量去引用的静态值
                }
            }
        })],
    },
    resolve: {
        alias: { 'vue$': 'vue/dist/vue.common.js' }, //解决 [Vue warn]: Failed to mount component: template or render function not defined.
        extensions: ['.js', '.vue']
    },
    devServer: {
        historyApiFallback: true,
    },
    module:{
        rules: [
            {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
            {test: /\.vue$/,loader: 'vue-loader'},
            {
                test:/\.(sa|c|sc)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            minimize:true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(jpg|png|gif|svg)$/,
                use: ['url-loader?limit=8192&name=images/[name].[hash].[ext]'],//还可以通过 name 字段来指 超过limit 的图片打包成base64
            },
            {
                test: /seviceworker\.js$/, //以seviceworker.js结尾的文件将被worker-loader加载
                use: {
                    loader: 'worker-loader',
                    options: { inline: true }
                }
            }
        ]
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');    
        }
    },
};