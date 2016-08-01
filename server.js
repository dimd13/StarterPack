/**
 * index.js
 */

// /**
//  * Require Browsersync along with webpack and middleware for it
//  */
var browserSync          = require('browser-sync');
var webpack              = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var fs = require('fs');

// /**
//  * Require ./webpack.config.js and make a bundler from it
//  */
var webpackConfig = require('./webpack.dev.config');
var bundler       = webpack(webpackConfig);


// Load Express for Twig
var express = require('express');
var fs = require('fs');

var app = express();

var objData;

// // This section is optional and used to configure twig. 
app.set("twig options", {
    strict_variables: false
});

fs.readFile('./data/article_photos-khloe-kardashian-la-soeur-de-kim-montre-aussi-ses-fesses-en-une-d-un-magazine-566014.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    objData = JSON.parse(data);
});

// Just a visit counter
// var nbVisits = 0;

app.get('/', function(req, res) {
    /*nbVisits++;*/
    res.render('./shared/article/index.html.twig', {
       data: objData
    });
});

// app.get('/', function(req, res) {
//     /*nbVisits++;*/
//     res.render('home/home.twig', {
//        data: objData
//     });
// });

// app.get('/article', function(req, res) {
//     nbVisits++;
//     res.render('Article/view.html.twig', {
//        visits: nbVisits
//     });
// });

// app.get('/cars', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Here are my cars. Beautiful collection, isn't it?");
// });

// app.get('/cars/:brand/:color', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('You want to see my ' + req.params.color + ' ' + req.params.brand + '? Follow me.');
// });

app.listen(9000);

//  * Reload all devices when bundle is complete
//  * or send a fullscreen error message to the browser instead
//  */
// bundler.plugin('done', function (stats) {
//     browserSync.reload();
// });

// /**
//  * Run Browsersync and use middleware for Hot Module Replacement
//  */
browserSync({
    open: false,
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
        'views/**/*.css',
        'views/**/*.html.twig'
    ]
});