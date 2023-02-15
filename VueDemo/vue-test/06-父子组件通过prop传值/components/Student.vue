<template>
  <div>
    <label for="studentName"></label>
    <div name="studentName" >{{name}}</div>
   输入框:  <input type="text" v-model="user" >
   <button @click="addNameToFather">点击给父组件传输入框的值</button>
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
            user:""
        }
    },
    props:['field'],
    methods:{
      addNameToFather(){
         this.field(this.user)
      }
    }

    /**
        1.第一种子组件向父组件传递的方式
            1.1 父组件通过props传递给子组件一个方法,这个方法接受一个值。
            1.2 子组件通过props接收到父组件间传递的方法,把 子组件要传递给父组件的值放入到这个方法中(一般子组件需要一个按钮去触发)
            1.3 子组件只要触发了 父组件传递过去的方法,就会把需要传递的值给发送给父组件.
     */
};
</script>

<style>
</style>

