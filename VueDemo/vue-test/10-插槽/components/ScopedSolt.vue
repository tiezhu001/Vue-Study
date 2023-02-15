<template>
  <div class="div1">
    <h2>{{ title }}</h2>
    <slot :values="foods" message="哈哈哈"></slot>
  </div>
</template>

<script>
export default {
  name: "ScopedSolt",
  props: ["listData", "title"],
  data() {
    return {
      foods: ["鸡蛋", "水果", "刀削面", "糖醋里脊"],
    };
  },
};
</script>
<style>
.div1 {
  width: 200px;
  height: 300px;
  background-color: aqua;
}
</style>