<template>
  <div>
    <!-- <button @click="$emit('increaseBy', 1)">子组件给父组件传值</button> -->
    <button @click="btnClick">子组件给父组件传值</button>
  </div>
</template>

<script setup>

// 第一种写法推荐
const emit = defineEmits(["increaseBy"]);
function btnClick() {
    // 这样可以写一些逻辑,来执行不同的触发哪个事件
  emit("increaseBy", 1);
}
</script>













<style lang="scss" scoped></style>
