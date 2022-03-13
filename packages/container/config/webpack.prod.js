const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './plubic/index.html'
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
