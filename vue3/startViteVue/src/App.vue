<script setup>
import { reactive, computed, ref } from 'vue'
import Global from './components/Global.vue';
import Watch from './components/Watch.vue';
import EventSend from './components/EventSend.vue'
import { useMouse } from './hooks/useMouse';

const author = reactive({
  name: "张三",
  books: [
    "Vue 2 - 1",
    "Vue 2 - 3",
  ]
})

const firstName = ref('sun')
const lastName = ref('zhenghao')

// emit测试变量
const count = ref(0)

let title = ref('哈哈')

// 样式变量
const isBackground = ref(true)
const IsRadio = ref(true)

// v-if变量
const type = ref('D')

const backgroundClsss = ref('background')
const radioClass = ref('radio')

// 计算属性
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No"
})

const fullName = computed({
  get() {
    return firstName.value + lastName.value
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(',')
  }
})

// 方法
function setFullName() {
  fullName.value = "li,si"
}

function increcaseBy(n){
  count.value +=n;
}


console.log("计算属性为Ref", publishedBooksMessage.value)

// hook变量
const {x,y} = useMouse()
</script>

<template>
  <p>count:{{ count}}</p>
  Mouse position is at: {{ x }}, {{ y }}
  <!-- 内联函数写法 -->
  <!-- <EventSend @increase-by="(n)=>count+=n"></EventSend> -->

  <!-- 组件方法写法 -->
  <EventSend @increase-by="increcaseBy"></EventSend>
  
  <!-- <p>发布的书籍是否大于0:</p>
  <span>{{ publishedBooksMessage }}</span>
  <p>可赋值的计算属性:</p>
  <button @click="setFullName">修改姓名</button>
  <span>姓: {{ firstName }}</span>
  <span>名: {{ lastName }}</span>
  <div :class="{background:isBackground,radio:IsRadio}" class="content">绑定对象</div>
  <div :class="[backgroundClsss,radioClass]" class="content">绑定数组</div>
  <br>
  <br>
  <div v-if="type==='A'">A</div>
  <div v-else-if="type==='B'">B</div>
  <div v-else>什么都不是</div> -->

  <!-- <watch></watch>
  <Global :title="title"></Global> -->
  
 
</template>

<style scoped>
.content {
  width: 60px;
  height: 70px;
  border: 1px solid red;
}

.background {
  background-color: green;
}

.radio {
  border-radius: 25px;
}
</style>
