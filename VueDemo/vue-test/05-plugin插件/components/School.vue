<template>
  <div>
    <label for="schoolName"></label>
    <div name="schoolName" @click="showName">{{ name }}</div>
    <label for="address"></label>
    <div name="address" >{{ address }}</div>
    <div>{{ newAge }}</div>
    <button @click="newAge++">点我age加加</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      newAge: this.age,
    };
  },
  props: {
    name: {
      type: String,
      require: true, // 是否为必填,不填 控制台警告
    },
    address: {
      type: String,
      default: "新密市", // 默认值
    },
    age: {
      type: Number,
    },
  },
};
</script>

<style>
</style>