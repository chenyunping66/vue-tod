const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'
const webpack = require('webpack') //插件配置在webpack上
const HTMLPlugin = require('html-webpack-plugin')

const config = {
    target: 'web',
    entry: path.join(__dirname, './src/index.js'), //将路径拼接形成绝对路径，保证路径可以绝对访问到
    output: {
        filename: 'boundle.js',
        path: path.join(__dirname, 'dist')
    },
    //process.env.NODE_ENV = development
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"devlopment"' : '"production"' //开发环境使用，但是正式环境不使用
            }
        }),
        new HTMLPlugin()
    ],
    module: {
        rules: [{
                test: /.vue$/,
                loader: 'vue-loader' //读取vue代码
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader' //读取vue代码
            },
            { //处理scss
                //test: /\.scss$/,
                test: /\.css$/,

                use: [
                    'vue-style-loader',
                    'css-loader',
                    // 'sass-loader'
                ]
            },
            {

                //处理stylus预处理器 cnpm i stylus-loader stylus
                test: /\.styl/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', //
                        options: {
                            sourceMap: true, //效率更快  官方文档有
                        }
                    },
                    'stylus-loader' //webpack的loader是一层一层往上扔，每个loder只关心它只关心的那一层
                ]
            },
            {
                //处理图片
                test: /\.(gif|jpg|png|svg)$/,
                use: [{
                    loader: 'url-loader', //封装了file-loader,判断文件大小，将图片转为代码写到文件里去
                    options: {
                        limit: 1024, //将图片转化为base64代码，写到代码里面去，不用生成新的文件
                        name: '[name] -aaa.[ext]' //ext输出文件的扩展名
                    }
                }]
            }
        ]
    }
}

//判断是否用在线上环境，同时用在开发环境跟上线环境
if (isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0', //可以通过localhost访问，通过ip也可以访问
        overlay: {
            errors: true, //webpack编译错误，可以定位到错误
        }
    }
}

module.exports = config