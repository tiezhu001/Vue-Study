<template>
  <div>
    <label for="studentName"></label>
    <div name="studentName" >{{name}}</div>
    <label for="age"></label>
    <div name="age">{{age}}</div>
  </div>
</template>

<script>
export default {
    name:"Student",
    data() {
        return {
            name:"张三",
            age:18,
        }
    },
    methods: {
     
    },
    mounted() {
      this.$bus.$emit("getName",this.name)
    },
};
</script>

<style>
</style>

