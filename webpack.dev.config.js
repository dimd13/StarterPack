const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
var styleLintPlugin = require('stylelint-webpack-plugin');

const config = {
    devtool: '#inline-source-map',
    context: path.join(__dirname, 'src'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        'index'
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3000/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
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
        new webpack.NoErrorsPlugin(),
        new styleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.css',
            failOnError: false,
            quiet: false
        })
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
    postcss: function (webpack) {
        return [
            require('stylelint'),
            require('postcss-import')({
                addDependencyTo: webpack
            }),
            
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ];
    },
    eslint: {
        configFile: '.eslintrc'
    }
}

module.exports = config
