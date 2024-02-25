const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

}