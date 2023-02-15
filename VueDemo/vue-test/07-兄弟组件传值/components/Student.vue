<template>
  <div>
    <label for="studentName"></label>
    <div name="studentName" >{{name}}</div>
    <label for="age"></label>
    <div name="age">{{age}}</div>
    <button @click="SendNameToParent">点我</button>
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
      SendNameToParent(){
         this.$emit("zidingyishijian",this.name);
      }
    }
};
</script>

<style>
</style>

