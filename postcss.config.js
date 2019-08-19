const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer() //需要加浏览器前缀的属性 自动处理css属性添加前缀
  ]
} //postcss 后处理css,优化css代码。