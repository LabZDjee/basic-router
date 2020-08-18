/* jshint esversion: 6 */

module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // made to automatically 'require' external files such as images in HTML template
      // see: https://stackoverflow.com/questions/47996190/how-does-html-webpack-plugin-work-with-html-loader
      { test: /\.html?$/, use: ["html-loader"] },
      // copies required images in HTML into a folder and properly link them
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: {
          loader: "file-loader", // resolve import (and require) into a file copied to bundle
          options: {
            name: "[name].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },
};
