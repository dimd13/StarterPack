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
// /**
//  * Require ./webpack.config.js and make a bundle with it
//  */
const webpackConfig = require('./webpack.dev.config');
const bundler       = webpack(webpackConfig);


const fs = require('fs');
const express = require('express');

const Twig = require('twig');

const createEngine = require('node-twig').createEngine;

// Load Express for Twig
const app = express();

/**
 * Define empty object to store data
 */

app.engine('.twig', createEngine({
  root: __dirname + '/src/views'
}));

var articleData = null;

// // This section is used to configure twig.
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');

fs.readFile('data/data.json', 'utf8', function (err, data) {
    if (err) {
        console.log('Error: ' + err);
        return;
    }

    articleData = JSON.parse(data);

    console.dir(articleData);
});


// app.get('/', function(req, res) {
//     res.render('./shared/article/index.html.twig', {
//         data: objData
//     });
// });

app.get('/', function(req, res) {
    res.render('./components/home/index.html.twig', {
        context: {
            foo: 'bar',
            stuff: ['This', 'can', 'be', 'anything'],
            pageData: articleData
        }
    });
});

// Basic Static Route
// app.get('/article', function(req, res) {
//     res.render('./shared/article/index.html.twig', {
//         data: objData
//     });
// });

// Custom header sample
// app.get('/cars', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Here are my cars. Beautiful collection, isn't it?");
// });

// Dynamic route sample
// app.get('/cars/:brand/:color', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('You want to see my ' + req.params.color + ' ' + req.params.brand + '? Follow me.');
// });

// TODO : Testing this route, with right page/modules and so on
// app.get('/:page', function(req, res) {
//     res.render('./components/' + req.params.page + '/index.html.twig', {
//         data: objData
//     });
// });

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

// /**
//  * Run Browsersync and use middleware for Hot Module Replacement
//  */
browserSync({
    open: process.argv[2] === 'open' ? true : false,
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
        'src/**/*.twig'
    ]
});
