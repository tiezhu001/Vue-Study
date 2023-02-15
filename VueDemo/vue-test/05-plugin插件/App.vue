<template>
  <div>
    <school name="第二高级中学" :age="60"></school>
    <br><br>
    <student></student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from './components/Student.vue';

export default {
  name: "App",
  components: {
    School,
    Student
  }
};
</script>

<style>
</style>