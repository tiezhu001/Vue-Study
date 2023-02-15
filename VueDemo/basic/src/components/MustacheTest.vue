<template>
  <div id="container">
        <h2>我是测试Mustache语法的</h2>
        <div>Message:{{msg}}</div>
        <div>javascript表达式 {{count+1}}</div>
        <div>三元表达式: {{success?"成功":"失败"}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'你好',
            count:1,
            success:true

        }
    }
}
</script>

<style lang="less" scope>
    #container{
        width: 400px;
        height: 400px;
        background-color: pink;
    }
</style>