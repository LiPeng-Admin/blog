/**
 * 在文件操作中，使用相对路径不可靠的，
 * 在node 中文件操作被设计为相对于执行node 命令所处的路径
 * 此时将相对路径改为绝对路径
 * 
 * __dirname
 * 动态获取 可以用来获取当前文件模块属于目录的绝对路径
 * __filename
 * 动态获取 可以用来获取当前文件的绝对路径
 */

console.log(__dirname)
console.log(__filename)
