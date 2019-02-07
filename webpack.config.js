const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
/*const extractSass = new ExtractTextPlugin({
  filename: 'public/app.css'
})
*/
function sassRules () {
  return [
    {
      test: /\.(sass|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }
  ]
}

function scriptRules () {
  return [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['env'] }
    }
  ]
}
module.exports = {
  entry: {
    main: ['./resources/assets/sass/app.scss', './resources/assets/scripts/app.js']
    //'./resources/assets/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, './public/bundles/'),
    filename: 'app.js'
  },
  module: {
    rules: sassRules().concat(scriptRules())
  },
  plugins: [
    new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
  ]
}
