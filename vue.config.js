module.exports = {
    publicPath: '/',
    devServer: {
        open: true, //自动打开浏览器
        port: 8080, //设置端口
        hot: true, //启用热更新
        compress: true, //是否启用gzip压缩
    },
    productionSourceMap: false, //移除生产环境的 source map
}
