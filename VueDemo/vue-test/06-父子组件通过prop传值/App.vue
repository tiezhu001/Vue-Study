<template>
  <div>
    <school name="第二高级中学" :age="60"></school>
    <br><br>
    <!-- 父组件给组件传递值 -->
    <student :field="addName"></student>
    <div>
      {{sonName}}
    </div>
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
  },
  data(){
    return{
      sonName:""
    }
  },
  methods:{
    addName(value){
          this.sonName=value;
    }
  }
};
</script>

<style>
</style>