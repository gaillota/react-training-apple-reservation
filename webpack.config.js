var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    context: __dirname,
    entry: [
        "webpack-hot-middleware/client",
        "./app/client.js"
    ]
    ,
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions: [
            "",
            ".js"
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            },
            {
                test: /\.s(a|c)ss/,
                loader: "style!css!sass"
            },
            {
                test: /\.(ico|jpe?g|png|gif)$/,
                loaders: [
                    "file?name=[path][name].[ext]"
                ]
            },
            {
                test: /\.(woff|ttf|otf|eot\?#.+|svg#.+)$/,
                loaders: [
                    "file?name=[path][name].[ext]"
                ]
            }
        ]
    }
};