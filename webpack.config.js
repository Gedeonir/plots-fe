const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

dotenv.config();

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpg|jpeg|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  
},

plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html", // to import index.html file inside index.js
  }),
  new webpack.DefinePlugin({
    "process.env": {
      PORT: JSON.stringify(process.env.PORT),
      BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
      DRIVER_ROLE: JSON.stringify(process.env.DRIVER_ROLE),
      OPERATOR_ROLE: JSON.stringify(process.env.OPERATOR_ROLE),
      ADMIN_ROLE: JSON.stringify(process.env.ADMIN_ROLE),
      UPLOAD_PRESET: JSON.stringify(process.env.UPLOAD_PRESET),
      SOCKET_URL: JSON.stringify(process.env.SOCKET_URL),
    },
  }),
],
devServer: {
  static: path.resolve(__dirname, "./dist"),
  hot: true,
  historyApiFallback: true,
  port: 3030, // you can change the port
},
};