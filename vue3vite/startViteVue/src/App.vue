<script setup>
import { reactive, computed,ref } from 'vue'

const author = reactive({
  name: "张三",
  books: [
    "Vue 2 - 1",
    "Vue 2 - 3",
  ]
})

const firstName = ref('sun')
const lastName = ref('zhenghao')

// 计算属性
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No"
})

const fullName = computed({
  get(){
    return firstName.value + lastName.value
  },
  set(newValue){
      [firstName.value,lastName.value] = newValue.split(',')
  }
})

// 方法
function setFullName(){
  fullName.value = "li,si"
}

计划


console.log("计算属性为Ref", publishedBooksMessage.value)
</script>

<template>
  <p>发布的书籍是否大于0:</p>
  <span>{{ publishedBooksMessage }}</span>
  <p>可赋值的计算属性:</p>
  <button @click="setFullName"></button>
  <span>姓: {{ firstName }}</span>
  <span>名: {{ lastName }}</span>

</template>

<style scoped>

</style>
