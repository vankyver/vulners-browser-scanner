import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const env = process.env.NODE_ENV;

let plugins = [
    // new CopyWebpackPlugin([{from: './public'}]),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(env)
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    })
];

const loaderOptionsConfig = {
    options: {
        sassLoader: {
            includePaths: [
                './node_modules'
            ]
        }
    }
};

const devConfig = {};
if (env === 'production') {
    loaderOptionsConfig.minimize = true;
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        })
    );
} else {
    devConfig.devtool = 'source-map';
    devConfig.entry = {
        vendor: ["react", "react-dom"],
        main: './src/index.js',
    };
}

plugins.push(new webpack.LoaderOptionsPlugin(loaderOptionsConfig));

export default Object.assign({
    entry: './src/index.js',
    output: {
        path: path.resolve('./public'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.scss', '.css', '.json']
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // default is false
                            camelCase: true,
                            importLoaders: 1,
                            localIdentName: "css/[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'file-loader', options: {name: 'css/[name].css'}},
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed',
                            includePaths: [
                                './node_modules'
                            ]
                        }
                    }
                ]
            }
        ]
    }
}, devConfig);
