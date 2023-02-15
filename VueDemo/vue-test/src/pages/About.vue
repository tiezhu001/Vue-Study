<template>
  <h2>我是About组件</h2>
</template>

<script>
export default {
  name: "About",

  // 组件内路由守卫 必须是通过路由规则进入组件才调用两个函数
  // 组件进入之前
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    // 逻辑
    next();
  },

  // 组件离开之前
  beforeRouteLeave(to, from, next) {
      console.log("beforeRouteLeave");
    next();
  },
};
</script>

<style>
</style>