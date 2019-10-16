import HtmlWebpackPlugin from 'html-webpack-plugin';
export default (inEnv) => {
  return {
    entry: './src/002-integration-e2e/app.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/002-integration-e2e/index.html'
      })
    ],
    devServer: {
      host: '0.0.0.0',
      stats: 'errors-only',
      compress: true
    }
  };
};
