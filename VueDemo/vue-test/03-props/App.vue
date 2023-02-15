<template>
  <div>
      <!-- props 父组件给子组件传值 -->
    <school name="第二高级中学" :age="60"></school>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
};
</script>

<style>
</style>