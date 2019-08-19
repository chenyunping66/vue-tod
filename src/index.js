import Vue from 'vue'
import App from './app.vue'

//import './assets/style/test.scss'
import './assets/style/test.styl' //引入stylus 
import './assets/images/1.jpg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({ //渲染app一个vue节点
  render: (h) => h(App)
}).$mount(root) //挂载app