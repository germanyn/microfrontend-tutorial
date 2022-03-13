// @ts-check

/**
 * @type {import('webpack').Configuration}
 */
const configuration = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                },
            },
        ],
    },
}

module.exports = configuration
