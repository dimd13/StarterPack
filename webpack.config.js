const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
    devtool: 'source-map',
    entry: {
        app: ['./src/assets/main']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './build'),
        publicPath: '/build'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    postcss: function (webpack) {
        return [
            require('postcss-import')({
                path: ['node_modules', './app']
            }),
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ];
    }
}

module.exports = config