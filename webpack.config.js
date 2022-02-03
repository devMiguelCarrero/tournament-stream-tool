const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = (env, argv) => {
  function isDevelopment() {
    return argv.mode === "development";
  }
  var config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
      minimize: !isDevelopment(),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body"
      }),
      new CleanWebpackPlugin(),
      new MiniCSSExtractPlugin({
        filename: "bundle.css",
      }),
    ],
    devtool: isDevelopment() ? "cheap-module-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    pragma: "React.createElement",
                    pragmaFrag: "React.Fragment",
                    development: isDevelopment(),
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
  };
  return config;
};
