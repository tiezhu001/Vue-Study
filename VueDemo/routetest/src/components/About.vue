<template>
  <div id="div2">
    <h2>关于</h2>
    <div>
      <router-link to="/about/tab1">tab1</router-link>
      <router-link to="/about/tab2">tab2</router-link>
      <button @click="goToMovie1">跳转到Movie1</button>
      <button @click="goToMovie2">跳转到Movie1 1</button>
      <button @click="goTo2">回退或者前进</button>
    </div>
       <router-view></router-view>
  </div>
  
</template>

<script>  
export default {
  methods:{
    goToMovie1(){
      // push 跳转到指定组件(参数是hash地址) 会在历史记录增加一条记录
      // 1.第一种字符串格式
      //this.$router.push('/movie/1')
       //this.$router.push('movie/1')

       // 2.第二种对象格式
       this.$router.push({path:"movie/1"})

       // 3.第三种命名的路由
        //this.$router.push({path:'movie',params:{userName:"szh"}})
       // 如果指定了path参数  pararms会不生效 用如下方式
        this.$router.push({name:'movie/1',pararms:{userName:'szh'}})
        // 或者
        this.$router.push({path:`/movie/1`})
      

       // 4.带查询参数
       //this.$router.push({path:'movie',query:{plan:'aaa'}})
    },

    goToMovie2(){
      // replace 跳转到指定组件(参数是hash地址) 不会在历史记录增加一条记录
      this.$router.replace('/movie/1')
    },
    goTo2(){
      // go 前进或者后退到历史记录(参数是正数) 如果后退或者前进的值不存在  就会什么也不会发生
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scope>
#div2 {
  width: 1000px;
  height: 200px;
  background-color: red;
}
</style>