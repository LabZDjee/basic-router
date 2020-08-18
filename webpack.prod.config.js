/* jshint esversion: 6 */

const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.config");
// will insert js code into the plugin (and also minify the HTML)
const HtmlWebpackPlugin = require("html-webpack-plugin");
// removes unnecessary files from bundle
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// extracts CSS into separate files
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// copies individual files
const CopyWebpackPlugin = require("copy-webpack-plugin");
// processes special CSS features (custom properties) for old browsers
const postcssCustomProperties = require("postcss-custom-properties");
// optimizes/minimizes CSS
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// uses terser to minify JS code (https://github.com/terser/terser)
const TerserPlugin = require("terser-webpack-plugin"); // already installed by webpack (no need to npm install it)

const distributionPath = path.resolve(__dirname, "dist");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    // contentHash allows to have a different file name when contents differs
    filename: "[name].[contentHash].bundle.js",
    path: distributionPath,
    sourceMapFilename: "[name].[contentHash].js.map",
  },
  devtool: "source-map",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin({ sourceMap: true })],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets/favicon.ico", to: path.resolve(distributionPath, "[name].[ext]") }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.template.html",
      minify: { removeAttributeQuotes: true, collapseWhiteSpace: true, removeCommets: true },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // finally extracts CSS as separate files
          "css-loader", // required by next loader (MiniCssExtractPlugin.loader)
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              // custom properties (e.g. --background) are replaced with their values, as preserve is false)
              plugins: () => [postcssCustomProperties({ preserve: false })],
            },
          },
        ],
      },
    ],
  },
});
