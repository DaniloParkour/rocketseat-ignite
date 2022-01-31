
//Use path to get filepath because in some SOs to navigate we use "\" and others SOs
//we navigate using "//" for example.
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

//NODE_END must be configured on host
//For UNIX use command => NODE_ENV=production yarn webpack for Windows, can be installed the cross-env (yarn add crss-env)
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {

  //__dirname is the current file directory

  //Mode development to webpack not create a performed bundle for produtcion,
  //and create just a fast bundle for develop
  mode: isDevelopment ? 'development' : 'production',

  //Configure SourceMap (are different kind os sourcemaps, for development we use eval-source-map)
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //source-map is most detailed

  //Define the main file application (src/index.jsx)
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  //Configure webpack-dev-server to run automaticaly when project is modified
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
    static : {
      directory : path.join(__dirname, "public/")
    },
  },

  plugins: [
    //Configure automatic react jsx injects content on html
    //Now, open the index.html from "dist" folder and not more on "public"
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],

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
