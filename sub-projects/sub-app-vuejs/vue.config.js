const webpackConfig = require('./webpack.config');

module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? "//localhost:3000/" : '//192.168.56.1:3100/',
    // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
    css: {
        extract: false
    },
    configureWebpack: webpackConfig,
    devServer: {
        contentBase: './',
        compress: true,
    }
}
