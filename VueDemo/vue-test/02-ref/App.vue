<template>
  <div>
      <!-- id的替代品  在$refs 获取到所有的id ref相当于给元素起ID  -->
      <div  ref="div1">hahah</div>
      <button @click="showElement">点我显示元素</button>
      <!-- 如果给组件起ref属性,那么获取到的是整个组件的vm实例 -->
      <school ref="sch"></school>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
    name:"App",
    components:{
        School
    },
    methods:{
        showElement(){
            console.log(this.$refs);
        }
    }
}
</script>

<style>

</style>