const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "http://xyd.husiwei.com",
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
};
