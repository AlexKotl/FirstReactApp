const webpack = require('webpack');

module.exports = {

    entry: "./src/main.js",

    output: {
        //path: __dirname + '/dist',
        filename: "./dist/app.js"
    },

    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            {test: /\.(js|jsx)$/, loader: 'babel-loader'}
        ]
    },

    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};