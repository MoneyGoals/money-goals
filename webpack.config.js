const path = require('path');
const webpack = require('webpack');
     
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};