var express = require('express');
var path = require('path');
var https = require('https');
var fs = require('fs');

// Webpack modules
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

// Webpack config
var webpackConfig = require('./webpack.config');
var config = require('./config');

// Application port
var port = config.port || 3000;

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

app.use('/stations', function(req, res) {
    // Remote fetch
    var path = "/stations?contract=Paris";
    var url = config.api.baseUrl + path + "&apiKey=" + config.api.key;
    
    https.get(url, function(response) {
        var body = '';
    
        response.on('data', function(chunk) {
            body += chunk;
        });
    
        response.on('end', function() {
            res.end({
                success: 1,
                data: JSON.parse(body).stations || []
            });
        });
    }).on('error', function(e) {
        console.log("Got error for URL "+url+" : ", e);
        res.end({
            success: 0,
            message: e.message
        });
    });

    // Local fetch
    // var file = fs.readFileSync('./response.json');
    // res.send({
    //     success: 1,
    //     data: JSON.parse(file)
    // });
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