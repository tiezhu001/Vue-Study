<template>
  <div id="app">
    <Mustache></Mustache>
    <Zhiling></Zhiling>
  </div>
</template>

<script>
import Mustache from './components/MustacheTest.vue'
import Zhiling from './components/zhilingTest.vue'

export default {
  name: 'App',
  components: {
    Mustache,
    Zhiling
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
