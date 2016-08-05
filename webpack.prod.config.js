const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


const config = {
    context: path.join(__dirname, 'src'),
    entry: 'index',
    output: {
        filename: 'assets/[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ["transform-runtime"]
                }
            },
            // For build
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss?')
            },
            {
                test: /\.html.twig$/,
                loader: "file?name=[path][name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?&name=assets/img/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("assets/[name].css",{
            allChunks: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function (webpack) {
        return [
            require('postcss-import')({
                path: ['node_modules', './src']
            }),
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ];
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            template: 'src/views',
            vendor: 'node_modules'
        },
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
}

module.exports = config
