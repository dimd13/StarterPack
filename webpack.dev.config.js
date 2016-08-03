const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
    devtool: '#inline-source-map',
    context: path.join(__dirname, 'views'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './assets/main'
    ],
    output: {
        filename: './assets/[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3000/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ["transform-runtime"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css?sourceMap!postcss'
            },
            {
                test: /\.html.twig$/,
                loader: "twig"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?&name=./assets/img/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function (webpack) {
        return [
            require('postcss-import')({
                addDependencyTo: webpack
            }),
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ];
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            shared: '../shared',
            vendor: 'node_modules'
        },
        modulesDirectories: ['node_modules', 'views'],
        extensions: ['', '.js']
    },
}

module.exports = config