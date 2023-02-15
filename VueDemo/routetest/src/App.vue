<template>
  <div id="app">
    <div id="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <!-- <router-link to="/movie">电影</router-link> -->
      <router-link to="/movie/1">电影1</router-link>
      <router-link to="/movie/2">电影2</router-link>
      <router-link to="/movie/3">电影3</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
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
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
  
}
#header{
  margin: 0 auto;
}
#header a {
  padding: 0 5px;
}
</style>
