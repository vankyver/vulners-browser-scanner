const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'static/js/main.js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',
                            '@babel/react',{
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }]
                    }
                },
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ]
    }
};