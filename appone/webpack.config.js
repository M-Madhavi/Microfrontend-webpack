const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8083,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
         test: /\.ts(x)?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'appone',
        filename:
          'remoteEntry.js',
        exposes: {
          './Button':
            './src/Button.tsx',
        },
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),   
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};




// const webpack = require('webpack');
// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const config = {
//   entry: './src/index.tsx',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   mode: 'development',
//   devServer: {
//     port: 8083,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.ts(x)?$/,
//         loader: 'ts-loader',
//         exclude: /node_modules/
//       }
//     ]
//   },
//   plugins: [
//     new CopyPlugin({
//       patterns: [{ from: 'src/index.html' }],
//     }),
//     new ModuleFederationPlugin(
//       {
//         name: 'appone',
//         filename:
//           'bundle.js',
//         exposes: {
//           './Button':
//             './src/Button.tsx',
//         },
//       }
//     ),

//     new HtmlWebpackPlugin({
//       templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
//       filename: 'index.html',
//     }),,
//     new CleanWebpackPlugin()
//   ],
//   resolve: {
//     extensions: [
//       '.tsx',
//       '.ts',
//       '.js'
//     ]
//   }
// };

// module.exports = config;