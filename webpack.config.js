const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'//
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }//,
            //{
            //    test: /.jsx?$/,
            //    loader: 'babel-loader',
           //     exclude: /node_modules/
           // }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: "body"
    })]

};

module.exports = conf;