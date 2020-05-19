const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true
    }
})