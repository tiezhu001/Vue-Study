<template>
  <div>
    <school></school>
    <br /><br />
    <student ></student>
  
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      
    };
  },
  methods: {
   
  },
};
</script>

<style>
</style>