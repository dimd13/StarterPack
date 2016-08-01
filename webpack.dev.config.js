const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


const config = {
    devtool: '#eval-source-map',
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
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-runtime"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.html.twig$/,
                loader: "twig-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
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
        // extensions: ['', '.twig', '.css', '.js']
    },
}

module.exports = config