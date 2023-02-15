<template>
  <div id="left">
    我是{{ name }}组件
    <span>{{count}}</span>
    <button @click="count++">+1</button>
    <span>{{name1}}</span>

    <div>
        <h1>子组件之间传值用EventBug</h1>
        <button @click="send">把Left组件值发送给Right组件</button>
    </div>

    <div>
      <h1>操作组件的dom元素</h1>
      <span>{{newCount}}</span>
      <button @click="add">添加1</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>


<script>
import bus from './eventBus.js'

export default {
  props:{
    'item':{
      type:Number, // 类型
      default:0,  // 默认值
      required:true  // 必填项
    },
    'name1':{
        type:String,
    }
  },
  components: { 

   },
  data() {
    return {
      name: "left1",
      count:this.item,
      poem:"白日依山尽",
      newCount:0
    };
  },
  methods:{
    send(){
        bus.$emit("share",this.poem);
    },
    add(){
      this.newCount+=1;
    },
    reset(){
      this.newCount=0;
    }

  }
};
</script>


<style lang="less">
#left {
  width: 500px;
  height: 200px;
  background-color: yellow;
}
</style>

