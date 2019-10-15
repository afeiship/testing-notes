import HtmlWebpackPlugin from 'html-webpack-plugin';
export default (inEnv) => {
  return {
    entry: './src/002-e2e/app.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/002-e2e/index.html'
      })
    ]
  };
};
