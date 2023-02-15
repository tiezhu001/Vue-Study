<template>
  <div class="content">
    <div>我是全局组件</div>
    <div>{{title}}</div>
    <button >2222222222222</button>
    <button >444444444444</button>
  </div>
</template>

<script setup>
// 数组形式接收
//const props = defineProps(["title"])

// 对象形式接收
const props = defineProps({
  title: String,
});

console.log("props",props.title);
</script>

<style scoped>
.content{
    width: 500px;
    height: 500px;
    background-color: green;
}
</style>
