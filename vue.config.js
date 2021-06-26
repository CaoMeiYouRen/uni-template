const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    publicPath: '/',
    devServer: {
        open: true, //自动打开浏览器
        port: 8080, //设置端口
        hot: true, //启用热更新
        compress: true, //是否启用gzip压缩
    },
    productionSourceMap: false, //移除生产环境的 source map
    configureWebpack: config => {
        config.plugins.push(
            // @ts-ignore
            new StyleLintPlugin({
                files: ['src/**/*.{vue,html,css,scss,sass}'],
                failOnError: false,
                cache: true,
                fix: true,
            }),
        )
    },
    transpileDependencies: ['@dcloudio/uni-ui']
}
