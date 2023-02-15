<template>
    <div>
        <p>请输入你的姓名:</p>
        <input type="text" v-model="name">
        <input type="text" v-model="info.address">
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

// 变量
const name = ref('')

const info = reactive({
    address: ""
})

// 侦听器 
watch(name, (newValue, oldValue) => {
    if (newValue.length > 10) {
        console.log(newValue, oldValue)
    }

})

// 监听对象,第一个参数 必须写成箭头函数
watch(() => info.address, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})


</script>

<style  scoped>

</style>