<template>
  <div id="app">
    <div class="header">
      <h1>我是父组件</h1>
      <!-- 不加带引号 会当做变量去找这个变量代表的值，加了单引号把字面值当做值 -->
      <p v-color="color">我使用了自定义指令把颜色变为红色</p>
      <p v-color="'blue'">我使用了自定义指令把颜色变为蓝色</p>
    </div>

    <div class="box">
      <!-- // props自定义属性传值 用v-bind指令 使用了v-bind指令告诉Vue,后面属性值是js表达式 而不是字面值 -->
      <left :item="1">
        <p>我是插槽自动填充的内容</p>
        <!-- <template v-slot:default1>
          <p>我是default1插槽的内容</p>
        </template> -->

        <!-- v-slot: 缩写 # -->
        <!-- slot可以接受一个属性值 用来接收插槽绑定的属性 -->
         <template #default="scope">
          <div>我是default1插槽的内容
          <p>{{scope.msg}}</p>
          </div>
         
        </template>

      </left>
      <right></right>
    </div>
  </div>
</template>

<script>
//导入组件
import left from "./components/left.vue";
import Right from "./components/right.vue";

/** 导出组件 */
export default {
  name: "App",

  // 注册组件
  components: {
    left: left,
    Right,
  },

  data(){
    return{
      color:'red'
    }
  },

  // 局部自定义指令
  // el表示当前绑定的dom元素，bind方法会在指令绑定到元素的时候自动触发
  directives:{
    // color:{
        // 首次绑定给元素时候触发
    //   bind(el,binging){
    //     el.style.color=binging.value;
    //     console.log(binging);
    //   },
          // dom元素有更新就会触发,所有使用到这个指令的元素都会触发update函数
    //   update(el,binding){
    //        el.style.color=binging.value;
    //   }
    // }
    // 当使用的指令的bind和update函数的业务逻辑相同可以使用方法格式
    // color(el,binding){
    //   el.style.color=binding.value;
    // }
  }
};
</script>

<style lang="less">
#app {
  margin: 0;
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .header {
    width: 200px;
    margin: 0 auto;
    font-size: 16px;
  }
}
</style>

