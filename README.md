# my-webpack
webpack学习

# 通过npm script运行webpack
在项目开发中，npm在局部安装依赖后如果依赖会创建命令，那么这个依赖便会在./node_modules/.bin/ 中添加软链接，
而package.json默认会访问.bin目录。
所以在package.json中的script 中添加配置，可以更加便捷的启动webpack打包，以及其他命令。