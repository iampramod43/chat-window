const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your component
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'index.js',  // Output file name
    libraryTarget: 'commonjs2',  // Library target
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Files to be processed by Babel
        exclude: /node_modules/,  // Exclude node_modules folder
        use: {
          loader: 'babel-loader',  // Use Babel loader
        },
      },
    ],
  },
  externals: {
    react: 'react',  // Prevent bundling React into the output
  },
};
