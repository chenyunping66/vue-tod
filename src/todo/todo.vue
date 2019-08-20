<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 16:54:51
 * @LastEditTime: 2019-08-20 17:10:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <section class="real-app">
    <input type="text" class="add-input" autocomplete="autocomplete" placeholder="接下来要做什么" @keyup.enter="addTodo">
    <item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo" />
    <!-- //</item> -->
    <Tabs :filter=" filter" :todos="todos" @toggle="toggleFilter" @clearAllCompleted="clearAllCompleted">
    </Tabs>
  </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0

export default {
  data () {
    return {
      // todo: {
      //   id: 0,
      //   content: 'this is todo',
      //   completed: false
      // },
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos () {
      if (this.filter == 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed' //判断是否等于completed,过滤todos列表
      return this.todos.filter(todo => completed === todo.completed)  //判断
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''   //每次增加将文本框内容情况一次
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1)  //判断是否是接受的id,splice的时候删掉一个节点
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed) //将还没有完成的completed的过滤出来
    }
  }
}

</script>
<style  lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>