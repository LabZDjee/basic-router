/* jshint esversion: 6 */

const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.config");
// replaces CSS custom properties (variables) with their values
const postcssCustomProperties = require("postcss-custom-properties");
// processes HTML template
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "[name].js.map",
  },
  devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.template.html" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // final stage: injects CSS into DOM
          {
            loader: "postcss-loader",
            options: {
              // custom properties (e.g. --background are replaced with their values, as preserve is false)
              ident: "postcss",
              plugins: () => [postcssCustomProperties({ preserve: false })],
            },
          },
        ],
      },
    ],
  },
});
