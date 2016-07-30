const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    devtool: '#eval-source-map',
    entry: {
        main: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            './views/assets/main'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: '/'
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
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.html.twig$/,
                loader: "file-loader?name=[path][name].[ext]&context=./views"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        // new HtmlWebpackPlugin({
        //     filename: './views/layout.html'
        // }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function (webpack) {
        return [
            require('postcss-import')({
                path: ['node_modules', './views']
            }),
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ];
    }
}

module.exports = config