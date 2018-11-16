const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js',
  './scss/main.scss'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ]
    }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      Waves: 'node-waves',
  }),
  new HtmlWebpackPlugin({
      template: './public/index.html'
  }) 
  ],
  mode: 'development',
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json']
  }
};

