const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'nameparser.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'nameparser',
    globalObject: 'this'
  },
};
