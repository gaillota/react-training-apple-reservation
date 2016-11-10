var express = require('express');
var path = require('path');
var https = require('https');

// Webpack modules
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

// Webpack config
var webpackConfig = require('./webpack.config');

// Application port
var port = 3000;

// Here we go
var app = express();
var compiler = webpack(webpackConfig);

// Webpack dev middleware
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

// Webpack hot middleware
app.use(webpackHotMiddleware(compiler));

// Mount middleware at /public for static content only for request prefixed with /assets
app.use('/assets', express.static(__dirname + '/public'));

app.use('/stores', function(req, res) {
    var storesUrl = 'https://reserve.cdn-apple.com/GB/en_GB/reserve/iPhone/stores.json';

    https.get(storesUrl, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            res.end({
                success: 1,
                data: JSON.parse(body).stores || []
            });
        });
    }).on('error', function(e) {
        console.log("Got error for URL "+storesUrl+" : ", e);
        res.end({
            success: 0,
            message: e.message
        });
    });
});

app.use('/stocks', function(req, res) {
    var stockUrl = 'https://reserve.cdn-apple.com/GB/en_GB/reserve/iPhone/availability.json';

    res.send("done !");
});

app.use('/devices', function(req, res) {
    var devicesUrl = 'https://reserve.cdn-apple.com/GB/en_GB/reserve/iPhone/product-offering.json';

    res.send("done !");
});

app.use('/', function (req, res) {
    res.sendFile(path.resolve("app/index.html"));
});

app.listen(port, function(error) {
    if (error) {
        throw error;
    }

    console.log("Server listening on port", port);
});