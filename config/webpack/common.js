// shared config (dev and prod)
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      component: path.resolve(__dirname, '../../src/components/'),
      assets: path.resolve(__dirname, '../../src/assets/'),
      app: path.resolve(__dirname, '../../src/'),
    },
  },
  context: path.resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|otf)$/i,
        type: 'asset/resource',
      },
    ],
  }, 
  plugins: [new HtmlWebpackPlugin({ template: "../public/index.html" })],
};
