const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader",
            ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)|jpg$/i, 
          loader: 'file-loader',
        }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css",
            chunkFilename: "index.css"
          }),
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    devServer: {
      static: path.resolve(__dirname, "./dist"),
      hot: true,
      historyApiFallback: true,
    },
  };