<template>
  <div>
    <label for="schoolName"></label>
    <div name="schoolName">{{name}}</div>
    <label for="address"></label>
    <div name="address">{{address}}</div>
  </div>
</template>

<script>
export default {
    name:"School",
    data() {
        return {
            name:"新密市第一高级中学",
            address:"新密市"
        }
    }
};
</script>

<style>
</style>