<template>
  <div>
    <label for="studentName"></label>
    <div name="studentName" @click="showName">{{name}}</div>
    <label for="age"></label>
    <div name="age">{{age}}</div>
  </div>
</template>

<script>
import {mixin1} from '../mixin.js'
export default {
    name:"Student",
    mixins:[mixin1],
    data() {
        return {
            name:"张三",
            age:18
        }
    }
};
</script>

<style>
</style>