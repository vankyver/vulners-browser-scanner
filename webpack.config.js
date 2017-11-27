var path = require('path');
var webpack = require('webpack');

module.exports = {

    resolve: {
        extensions: [' ', '.js']
    },

    entry: [
        'babel-polyfill',
        './src/js/App.js'
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'popup.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },
    stats: {
        colors: true
    }
};