const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const webpackConfig = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{loader: 'babel-loader'}]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
                    // 用以限制須轉為 base64 的文件大小 (單位：byte)
                    limit: 8192,
                    name: 'asset/images/[name].[ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}

module.exports = webpackConfig;