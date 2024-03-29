const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TI-101",
      filename: "index.html",
      template: "src/index.html",
      favicon: "src/assets/favicon.png",
      meta: {
        viewport: "width=device-width, initial-scale=1.0",
      },
    }),
  ],
};