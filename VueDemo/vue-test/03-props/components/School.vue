<template>
  <div>
    <label for="schoolName"></label>
    <div name="schoolName">{{name}}</div>
    <label for="address"></label>
    <div name="address">{{address}}</div>
    <div>{{newAge}}</div>
    <button @click="newAge++">点我age加加</button>
  </div>
</template>

<script>
export default {
    name:"School",
    data() {
        // 如果需要修改传过来的值 不要直接修改prop的属性值 ,最好定义一个新的值,去操作这个新的值 
        return {
            newAge:this.age
        }
    },
    // props 有多种写法 
    // 第一种
     //props: ["name", "address","age"],

     // 第二种 限制 类型
    //  props:{
    //      name:String,
    //      address:String,
    //      age:Number
    //  }
    props:{
        name:{
            type:String,
            require:true, // 是否为必填,不填 控制台警告
        },
        address:{
            type:String,
            default:"新密市"  // 默认值
        },
        age:{
            type:Number
        }
        
    }
};
</script>

<style>
</style>