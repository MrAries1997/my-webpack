const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    index2: './src/badworld.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production'
}