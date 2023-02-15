<template>
  <div id="app">
    <div class="header">
      <h1>我是父组件</h1>
    </div>

    <div class="box">
      <!-- // props自定义属性传值 用v-bind指令 使用了v-bind指令告诉Vue,后面属性值是js表达式 而不是字面值 -->

      <!-- 父组件向子组件传值 自定义属性+props
        1.父组件给子组件绑定自定义属性值
        2.子组件声明props并使用此props
       -->
      <left :item="1" :name1="name1" ref="leftRef">
      
      <!-- 子组件向父组件传值 自定义方法
      1.子组件 添加一个方法作为传递父组件的值，通过 this.$emit('方法名字'，传递的值)
      2.父组件通过方法接受这个子组件穿过来的值，父组件的参数就是子组件传递的值，父组件声明一个属性用来接受这个值即可
       -->
      </left>
      <right @countChange="getCountFromSon">
      </right>

        <div>
         <h3>接受子组件的传值</h3> 
         <span >{{countFromSon}}</span>
        </div>
    </div>

    <div>
       <h1 ref="myRef">操作dom元素</h1>
       <button @click="changeStyle">修改颜色</button>
    </div>

    <div>
      <h1>操作组件的方法或者属性</h1>
      <button @click="ope">操作</button>
    </div>

    <div>
      <h1>操作dom出现的问题</h1>
      <input type="text" v-if="isShow" ref="iptRef" @blur="notShow">
      <button @click="show" v-else>是否显示Input框</button>
    </div>

    <!-- 动态组件 -->
    <component :is="com"></component>

  </div>
</template>

<script>
//导入组件
import left from "./components/left.vue";
import Right from "./components/right.vue";

/** 导出组件 */
export default {
  name: "App",
  data(){
    return {
      name1:'hasaki',
      countFromSon:0,
      isShow:false,
      com:"left"

    }
  },

  methods:{
    getCountFromSon(val){
      this.countFromSon=val;
    },

    //$refs 默认是一个空对象数组 是在当前vue实例挂载的属性 给元素设置Ref属性相当于这个属性的引用指向当前的dom元素，那么可以用这个引用去操作当前的dom对象
    changeStyle(){
      this.$refs.myRef.style.color='red';
    },
    ope(){
        this.$refs.leftRef.reset();
    },
    show(){
      this.isShow=true;

      // 在此时只是数据发生了改变，dom元素 还未渲染出来,那么操作为渲染的dom元素就会找不到，我们想把这个操作放到dom元素创建完成中执行
      //this.$refs.iptRef.focus();
      //$this.$nextTick(func); 这个方法接受一个回调函数，简单理解就是回调函数中的操作稍后执行
      this.$nextTick(()=>{
        this.$refs.iptRef.focus();
      })
    },
    notShow(){
      this.isShow=false;
    }

  },

  // 注册组件
  components: {
    left: left,
    Right,
  },
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
