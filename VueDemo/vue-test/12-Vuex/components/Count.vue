<template>
  <div>
      <!-- 必须从$store中的state中读取数据 -->
    <h2>当前相加的和是{{ sum }}</h2>
    <h2>当前相加的和*10是{{ bigSum }}</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(number)">相加1</button>
    <button @click="decrement(number)">相减1</button>
    <button @click="incrementOdd(number)">奇数加1</button>
    <button @click="incrementWait(number)">稍等加1</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name:"Count",
    data() {
        return {
            number:1
        }
    },
    methods: {

        // 以下可以通过vuex中的方法给缩写
        // increment(){
        //     // 如果没有业务逻辑或者ajax请求,dispatch可以省略,直接Commit操作数据
        //     //this.$store.dispatch("add",this.number)
        //     this.$store.commit("addCommit",this.number)
        // },
        // decrement(){
        //     this.$store.dispatch("jian",this.number)
        // },
        // incrementOdd(){
        //     this.$store.dispatch("addOdd",this.number)
        // },
        // incrementWait(){
        //    this.$store.dispatch("addWait",this.number)
        // },

        // 以下的方法也可以使用方法形式简写
        // 如果使用这种方式生成actions或者mutations 那么传递的参数值,既this.number
        // 必须通过函数调用的地方 显示传递过来
        ...mapActions({decrement:'jian',incrementOdd:"addOdd",incrementWait:"addWait"}),
        ...mapMutations({increment:"addCommit"})
    },
    computed:{
        // 对于store中的state数据 过多 每次为了取数据很麻烦,都要$.store.state这些是重复
        // sum(){
        //     return this.$store.state.sum ;
        // }

        
        //对象写法 为了解决 一个个写计算属性
        //...mapState({sum:"sum"}),
        ...mapGetters({bigSum:'bigNumber'}),
        
        // 方法写法(同理mapGetters也可以)
        // 如果要使用的计算属性的名称和state中的数据名称相同可以这样写
        ...mapState(['sum'])
    }
};
</script>

<style>
</style>