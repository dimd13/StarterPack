const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


const config = {
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './views/assets/main'
    ],
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
                loader: ['babel'],
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-runtime"]
                }
            },
            // For build
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            },
            {
                test: /\.html.twig$/,
                loader: "file?name=[path][name].[ext]&context=./views"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?&name=[path][name].[ext]&context=./views',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css",{
            allChunks: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
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
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            shared: '../shared/',
            home: 'components/home',
            utility: 'components/common/utility',
            textService: 'services/textService'
        },
        extensions: ['', '.js', '.css']
    },
}

module.exports = config