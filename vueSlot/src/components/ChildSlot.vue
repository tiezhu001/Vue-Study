<template>
  <div>
    <slot :name1="info.name" :age="info.age"></slot>
    <slot name="g" message="哈喽"></slot>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const info = reactive({
  name: "张三",
  age: 13,
});
</script>

<style lang="scss" scoped></style>
