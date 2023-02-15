<template>
  <div id=div3>
     <h2> 电影</h2>
     <h3>Movie组件 参数--{{$route.params.id}}</h3>
     <button @click="showThis">打印this</button>
  </div>
</template>

<script>
export default {
  name:'Movie',
  methods:{
    showThis(){
      console.log(this);
    }
  }
}
</script>

<style lang="less" scope>
 #div3{
     width: 1000px;
     height: 200px;
     background-color: lightblue;
 }
</style>