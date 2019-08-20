<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 09:15:25
 * @LastEditTime: 2019-08-18 09:16:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
  components: {  //申明header
    Header,
    Footer,
    Todo
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped  rel="stylesheet/stylus">
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  #cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999;
    opacity: 0.2;
    z-index: -1;
  }
}
</style>