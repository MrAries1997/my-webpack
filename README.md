# my-webpack
webpack学习

# 通过npm script运行webpack
在项目开发中，npm在局部安装依赖后如果依赖会创建命令，那么这个依赖便会在./node_modules/.bin/ 中添加软链接，
而package.json默认会访问.bin目录。
所以在package.json中的script 中添加配置，可以更加便捷的启动webpack打包，以及其他命令。

# watch
module.export = {
  // 默认false，也就是不开启
  watch: true,
  // 只有开启监听模式时，watchOptions才有意义
  watchOptions: {
    // 默认为空，不监听的文件或文件夹，支持正则匹配
    ignored: /node_modules/,
    // 监听到变化后回等待300ms再去执行，默认300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化，通过轮询来不停询问系统指定文件有没有变化来实现，默认每秒询问一次
    poll: 1000
  }
}