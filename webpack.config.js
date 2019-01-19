const path = require('path');

module.exports = {
  mode: process.env.BUILD_TYPE || 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
