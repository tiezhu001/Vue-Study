<template>
  <div id="left">
    我是{{ name }}组件
    <span>{{count}}</span>
    <button @click="count++">+1</button>
    <!-- 插槽默认 有一个name属性 值是default  -->
    <slot name="default" msg="哈哈哈" :userinfo="user"></slot>
    <slot name="default1"></slot>
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
      count:this.item,
      user:{
        name:"张三"
      }
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

