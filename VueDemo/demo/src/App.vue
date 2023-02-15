<template>
  <div id="app">
    <div class="header">
      <h1>我是父组件</h1>
    </div>

    <div class="box">
      <!-- // props自定义属性传值 用v-bind指令 使用了v-bind指令告诉Vue,后面属性值是js表达式 而不是字面值 -->
      <left :item="1"></left>
      <right></right>
    </div>
  </div>
</template>

<script>
//导入组件
import left from "./components/left.vue";
import Right from "./components/right.vue";

/** 导出组件 */
export default {
  name: "App",

  // 注册组件
  components: {
    left: left,
    Right,
  },
};
</script>

<style lang="less">
#app {
  margin: 0;
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .header {
    width: 200px;
    margin: 0 auto;
    font-size: 16px;
  }
}
</style>
