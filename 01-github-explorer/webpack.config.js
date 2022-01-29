
//Use path to get filepath because in some SOs to navigate we use "\" and others SOs
//we navigate using "//" for example.
const path = require('path');

module.exports = {

  //__dirname is the current file directory

  //Mode development to webpack not create a performed bundle for produtcion,
  //and create just a fast bundle for develop
  mode: 'development',

  //Define the main file application (src/index.jsx)
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  //Teach how to manage different files
  module: {
    rules: [
      {
        test: /\.jsx$/, //Verify any ".jsx" file
        exclude: /node_modules/,
        use: 'babel-loader' //Use babel-loader to convert .jsx that not is in node_modules
      }
    ],
  }

}
