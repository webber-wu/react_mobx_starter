const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageminPlugin = require('imagemin-webpack-plugin').default
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: "http://demo.dosomething-studio.com/weirdo/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.DEMO": JSON.stringify("demo")
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/asset", to: "asset" }
            ]
        }),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css",
            ignoreOrder: false 
        })
    ],
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            reloadAll: true,
                            publicPath: './',
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
})