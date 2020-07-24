const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "src/"),
            path.resolve(__dirname, "src/asset"),
            path.resolve(__dirname, "src/components"),
            path.resolve(__dirname, "src/containers"),
            path.resolve(__dirname, "src/modules"),
            path.resolve(__dirname, "src/store"),
            "node_modules"
        ]
    },
    optimization: {
        minimizer: [new TerserJSPlugin({})]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
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
    }
}

module.exports = webpackConfig;