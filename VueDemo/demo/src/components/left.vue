<template>
  <div id="left">
    我是{{ name }}组件
    <span>{{count}}</span>
    <button @click="count++">+1</button>
  </div>
</template>


<script>

export default {

  // 第一种声明props
  //props:['item'],

  // 第二种声明props
  // props:{
  //   'item':Number
  // },

  // 第三种声明props
  props:{
    'item':{
      type:Number, // 类型
      default:0,  // 默认值
      required:true  // 必填项
    }
  },
  components: { 

   },
  data() {
    return {
      name: "left1",
      count:this.item
    };
  },
};
</script>


<style lang="less">
#left {
  width: 500px;
  height: 200px;
  background-color: yellow;
}
</style>

