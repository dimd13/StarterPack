const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    devtool: '#inline-source-map',
    context: path.join(__dirname, 'src'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        'index'
    ],
    output: {
        filename: 'assets/[name].js',
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
                exclude: /node_modules/,
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
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            template: 'src/views',
            vendor: 'node_modules'
        },
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    externals: {
        // import jquery is external and available
        //  on the global var jQuery
        "customImport": "Zepto"
    },
    postcss: function (webpack) {
        return [
            require('postcss-import')({
                addDependencyTo: webpack
            }),
            require("postcss-url")(),
            require("postcss-cssnext")({
                browsers: ['last 2 versions']
            }),
            require('postcss-neat')(/* { options } */),
            require('css-mqpacker'),
            require("postcss-browser-reporter")(),
            require("postcss-reporter")()
        ];
    }
}

module.exports = config
