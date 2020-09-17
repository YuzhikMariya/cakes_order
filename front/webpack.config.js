const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
      path: path.join(__dirname, "../server/server/wwwroot/dist/"),
      filename: "./main.js"
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      watchContentBase: true,
      progress: true
  },

  module: {
      rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }
            ],
            include: /\.module\.css$/
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
            exclude: /\.module\.css$/
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
          }
      ]
  }
};