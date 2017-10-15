let HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ENTRY_POINT =  './src/index.js';
const PATH_INTPUT_PROD = "/";
const PATH_OUTPUT_PROD = __dirname +"/dist/";
const FILE_NAME = 'bundle.js';


module.exports = function(env=false){
  console.log(`
****************************************
          CLIENT TRANSPILE
            ${"***PROD***"}
****************************************
    `);

  return {
    entry: [
      ENTRY_POINT
    ],
    output: {
      path: PATH_OUTPUT_PROD,
      publicPath: PATH_INTPUT_PROD,
      filename: FILE_NAME
    },
    resolve: {
      extensions: [
        ".js",
        ".json",
      ],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: "babel-loader",
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.json$/,
          loaders: [
            "json",
          ],
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.(ico|jpe?g|png|gif)$/,
          loaders:[{
            loader:"file-loader",
            options:{
              name: "assets/img/[path][name].[ext]",
              context:"./src/assets/img/",
            }
          }],
        },

      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template:"src/index.html"
      }),
      new ExtractTextPlugin("style.css")
    ],

    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  }
  console.log(`
****************************************
          SUCCES CLIENT TRANSPILE
          PATH : ${PATH_OUTPUT_PROD}
****************************************
    `);
}
