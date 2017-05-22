let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: './frontend/app.js',
  output: {
    filename: 'build.js',
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
    ]

  },

};


// module.exports = {
//   entry: './frontend/app.js',
//   output: {
//     filename: 'build.js',
//     path: path.resolve(__dirname, 'public')
//   },
//
//   devtool: 'source-map',
//   watch: true,
//
//   module: {
//
//     rules: [
//       {
//         test: /\.css$/,
//         loader: 'style-loader!css-loader'
//       },

//       {
//         test: /\.hbs$/,
//         loader: 'handlebars-loader'
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env'],
//           plugins: ['transform-runtime']
//         }
//       }
//     ],
//   },
//
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: false,
//       }
//     }),
//   ],
//
//   devServer: {
//     proxy: {
//       '*': 'http://localhost:3000'
//     }
//   }
// };


