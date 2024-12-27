"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './client/src/index.tsx',
    output: {
        path: path.resolve(path.dirname(''), 'dist'),
        filename: 'bundle.js',
        globalObject: 'self',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devServer: {
        port: 3001,
        static: {
            directory: path.join(path.dirname(''), 'dist'),
        },
        compress: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/public/index.html',
        }),
    ],
};
