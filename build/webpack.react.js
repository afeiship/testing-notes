import HtmlWebpackPlugin from 'html-webpack-plugin';
export default (inEnv) => {
  return {
    entry: './src/004-react/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/004-react/index.html'
      })
    ],
    devServer: {
      host: '0.0.0.0',
      stats: 'errors-only',
      compress: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };
};
