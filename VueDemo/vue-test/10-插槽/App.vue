<template>
  <div>
    <!-- 默认插槽 -->
    <div class="container1">
      <DefaultSolt :listData="food" title="美食"></DefaultSolt>
      <DefaultSolt :listData="filem" title="电影">
        <a href="www.baidu.com">百度一下</a>
      </DefaultSolt>
      <DefaultSolt :listData="yundong" title="运动"></DefaultSolt>
    </div>

    <!-- 具名插槽 -->
    <!-- 在vue 2.6.2以上版本 slot api被废弃,修改为v-solt:hahah1 -->
    <div class="container2">
      <NameSolt :listData="food" title="美食">
        <template solt="haha1">
          <h2 v-solt:haha1>啊哈哈哈</h2>
        </template>
      </NameSolt>
      <NameSolt :listData="food" title="美食">
        <h3 solt="haha1">1111</h3>
        <h3 solt="haha2">2222</h3>
      </NameSolt>
    </div>

    <!-- 作用域插槽 -->
    <!-- slot-scope在Vue的后续版本移除 需要使用v-slot:default="value" -->
    <!-- 作用域插槽适用于 数据不在当前使用的组件,通过ScopedSolt组件中定义的插槽 绑定一个自定义属性把值传递过来 -->
    <div class="container3">
      <ScopedSolt title="美食">
        <!-- 传递过来的内容是一个对象,键是 属性名,值是属性值,所以可以通过解构 获取每个值 -->
        <template slot-scope="{values,message}">
        <ul >
          <li v-for="(item,index) in values" :key="index">{{item}}+{{message}}</li>
        </ul>
        </template>
      </ScopedSolt>
    </div>
  </div>
</template>

<script>
import DefaultSolt from "./components/DefaultSolt.vue";
import NameSolt from "./components/NameSolt.vue";
import ScopedSolt from "./components/ScopedSolt.vue";

export default {
  name: "App",
  components: {
    DefaultSolt,
    NameSolt,
    ScopedSolt,
  },
  data() {
    return {
      food: ["鸡蛋", "水果", "刀削面", "糖醋里脊"],
      filem: ["教父1", "教父2", "教父3", "教父4"],
      yundong: ["足球", "篮球", "排球", "乒乓球"],
    };
  },
};
</script>
 
<style>
.container1 {
  display: flex;
  justify-content: space-around;
  background-color: blue;
}

.container2 {
  display: flex;
  justify-content: space-around;
  background-color: red;
}

.container3 {
  display: flex;
  justify-content: space-around;
  background-color: green;
}
</style>