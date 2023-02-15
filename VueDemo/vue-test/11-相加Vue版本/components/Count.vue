<template>
  <div>
    <h2>当前相加的和是{{ sum }}</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">相加1</button>
    <button @click="decrement">相减1</button>
    <button @click="incrementOdd">奇数加1</button>
    <button @click="incrementWait">稍等加1</button>
  </div>
</template>

<script>
export default {
    name:"Count",
    data() {
        return {
            sum:0,
            number:1
        }
    },
    methods: {
        increment(){
            this.sum+=this.number;
        },
        decrement(){
            this.sum-=this.number;
        },
        incrementOdd(){
            //取余 有值 表示是奇数
            if(this.number%2){
                this.sum+=this.number;
            }
        },
        incrementWait(){
            setTimeout(() => {
                this.sum+=this.number;
            }, 1000);
        }

    },
};
</script>

<style>
</style>