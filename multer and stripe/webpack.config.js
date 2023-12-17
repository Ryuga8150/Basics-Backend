const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./public/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/js/"),
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  // module: {
  //   rules: [{ exclude: /node_modules/ }],
  // },
};
