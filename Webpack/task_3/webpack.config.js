const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: ""
    // ✅ no "clean" on webpack 4
  },

  // ✅ wds v3 syntax
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8564,
    open: true
  },

  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // ✅ remove "type" (webpack 5 only)
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", outputPath: "assets/" }
          },
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
              mozjpeg: { progressive: true },
              optipng: { enabled: false },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Holberton Dashboard",
      filename: "index.html",
      chunks: ["vendors", "header", "body", "footer"],
      inject: "body"
    })
  ],

  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true
        }
      }
    }
  },

  performance: { hints: false }
};
