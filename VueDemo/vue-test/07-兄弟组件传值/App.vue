<template>
  <div>
    <school></school>
    <br /><br />
    <!-- 第一种方式绑定自定义事件 -->
    <!-- <student @zidingyishijian="getParams" ></student>
    <div>
      我是通过自定义事件 子组件传递给父组件的内容++++{{childVal}}
    </div> -->

    <!-- 第二种绑定自定义事件 -->
    <!-- 如果在组件上绑定dom原生的事件需要添加native修饰符,要不然会当做自定义事件去解析 -->
    <!-- 如果在普通元素上指定ref属性那么就是拿到就是dom对象,如果给组件指定ref 那么拿到的就是组件实例 -->
    <student ref="stu" @click.native="alertName"></student>
    <div>我是通过自定义事件 子组件传递给父组件的内容++++{{ childVal }}</div>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      childVal: "",
    };
  },
  methods: {
    getParams(val) {
      console.log("自定义事件被触发了")
      this.childVal = val;
    },
    alertName(){
      alert("1111")
    }
  },
  mounted() {
    this.$refs.stu.$on("zidingyishijian", this.getParams);
    console.log("object",this.$refs);
  },
};

/**
 * 绑定自定义事件第一种方式
 *    1.父组件通过@zidingyishijianName="func" 给子组件绑定一个叫zidingyishijianName,回调函数是 func
 *    2.子组件中通过 this.$emit("zidingyishijianName",参数n个) 触发自定义事件,可以通过按钮触发或者在mounted中触发
 *    3.触发时候传递的参数,可以在回调函数中接受到
 * 绑定自定义事件的第二种方式
 *    1.父组件给子组件绑定ref属性,拿到子组件的实例对象,通过this.$refs.son.$on("zidingyishijianName",回调函数)
 *    2.回调函数如果是提前定义好的比如叫 getName,上边使用就是this.getName，如果想直接在on的第二个参数绑定回调函数
 *    必须写成箭头函数,如果不是回调函数,this指向的就是子组件的vue实例
 * 
 * 删除组件自定义事件
 *  this.$off("自定义事件名称")
 *  如果删除多个 this.$off([])
 *  如果删除全部 this.$off()
 */
</script>

<style>
</style>