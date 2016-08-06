/**
 * index.js
 */

// /**
//  * Require Browsersync along with webpack and middleware for it
//  */
const browserSync          = require('browser-sync');
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const fs = require('fs');
const express = require('express');

/**
 * Require ./webpack.config.js and make a bundle with it
 */
const webpackConfig = require('./webpack.dev.config');
const bundler       = webpack(webpackConfig);
// Load Express for Twig
const app = express();

/**
 * Define empty object to store data
 */

const objData = null;

// // This section is used to configure twig.
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig'); 
app.set("twig options", {
    strict_variables: false
});



fs.readFile('./data/article_photos-khloe-kardashian-la-soeur-de-kim-montre-aussi-ses-fesses-en-une-d-un-magazine-566014.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    objData = JSON.parse(data);
});

app.get('/', function(req, res) {
    res.render('./shared/article/index.html.twig', {
        data: objData
    });
});

app.get('/article', function(req, res) {
    res.render('./shared/article/index.html.twig', {
        data: objData
    });
});

app.get('/cars', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Here are my cars. Beautiful collection, isn't it?");
});

app.get('/cars/:brand/:color', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You want to see my ' + req.params.color + ' ' + req.params.brand + '? Follow me.');
});

/*
 * Express server to listen on port : 9000
 */
app.listen(9000);

/*
 * If needed Reload all devices when bundle is complete
 */
// bundler.plugin('done', function (stats) {
//     browserSync.reload();
// });

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
    open: process.env.npm_package_config_open,
    logFileChanges: true,
    proxy: {
        target : 'localhost:9000',
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {
                    colors: true,
                    hash: false,
                    timings: true,
                    chunks: false,
                    chunkModules: false,
                    modules: false
                }
            }),

            webpackHotMiddleware(bundler)
        ]
    },
    files: [
        'src/**/*.css',
        'src/**/*.js',
        'src/**/*.html.twig'
    ]
});
