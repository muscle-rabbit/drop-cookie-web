const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.tsx",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@models/*": path.join(__dirname, "src/domain/models"),
      "@molecules": path.join(__dirname, "src/components/molecules"),
      "@pages": path.join(__dirname, "src/pages")
    }
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin(
      { template: path.join(__dirname, 'index.html') }
    )],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  node: {
    fs: "empty"
  }
};