<template>
  <div>
    <label for="schoolName"></label>
    <div name="schoolName" >{{ name }}</div>
    <label for="address"></label>
    <div name="address" >{{ address }}</div>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
     name:"高中",
     address:"新密"
    };
  }
};
</script>

<style>
</style>