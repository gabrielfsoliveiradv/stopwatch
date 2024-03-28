const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    }
  }
}