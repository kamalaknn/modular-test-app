const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'app', 'index.jsx'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              'babel-plugin-transform-typescript-metadata',
              ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tiger Test App',
      template: path.resolve(__dirname, 'app', 'index.hbs'),
      inject: 'body'
    }),
  ],

  resolve: {
    modules: ['node_modules'],
    alias: {
      '@tiger': path.resolve(__dirname, 'packages')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};