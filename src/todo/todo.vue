<template>
  <section class="real-app">
    <input type="text" class="add-input" autocomplete="autocomplete" placeholder="接下来要做什么" @keyup.enter="addTodo">
    <item :todo="todo"></item>
    <Tabs :filter="filter"></Tabs>
  </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

export default {
  data () {
    return {
      todo: {
        id: 0,
        content: 'this is todo',
        completed: false
      },
      filter: 'all'
    }
  },
  methods: {
    addTodo () {

    }
  },
  components: {
    Item,
    Tabs
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