let path = require('path');
let webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './frontend/app.js',
    login: './frontend/login.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },

  watch: true,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]

  },



  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2,
    }),

    new UglifyJSPlugin({
      sourceMap: true
    })
  ],

  devServer: {
    proxy: {
      '*': 'http://localhost:3000'
    }
  }

};
