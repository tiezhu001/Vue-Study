<template>
  <div>
    <label for="schoolName"></label>
    <div name="schoolName" >{{ name }}</div>
    <label for="address"></label>
    <div name="address" >{{ address }}</div>
    <div>学生的姓名{{stuName}}</div>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
     name:"高中",
     address:"新密",
     stuName:""
    };
  },
  mounted() {
    // school 绑定一个事件 getName 
    // 这个事件在student中触发,把name传递过来
    this.$bus.$on("getName",name=>this.stuName=name)
  },
  // 在组件销毁之前 删除组件自定义事件
  beforeDestroy(){
    this.$bus.$off("getName")
  }
};
</script>

<style>
</style>