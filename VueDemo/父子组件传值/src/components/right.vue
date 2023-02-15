<template>
  <div id="right">我是{{ name }}组件,我是全局注册的

    <div>
       <span>自增Count   {{count}}</span>
       <button @click="countChange">自增</button>
    </div>

  <div>
    <h1>接受来自Left组件的值</h1>
    <h2>{{poemFromLeft}}</h2>
  </div>

  </div>
  
</template>


<script>
import bus from './eventBus.js'

export default {
  data: function () {
    return {
      name: "right1",
      count:0,
      poemFromLeft:""
    };
  },

  // 组件声明周期其中一个函数
  created(){
   bus.$on("share",val=>{
      this.poemFromLeft=val;
    })
  },
  methods:{
    countChange(){
       this.count+=1;
       this.$emit('countChange',this.count);
    }
  }
};
</script>

<style lang="less">
#right {
  width: 500px;
  height: 200px;
  background-color: green;
}
</style>


