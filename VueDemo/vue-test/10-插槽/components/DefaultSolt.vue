<template>
  <div class="div1" >
    <h2>{{title}}</h2>
    <ul>
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
	<!-- 默认插槽 -->
  <!-- 插槽内写入内容,如果使用时候 并没有写结构就默认显示结构中的内容 -->
	<slot>default info</slot>
  </div>
</template>

<script>
export default {
  name: "DefaultSolt",
  props:["listData","title"],
  data() {
    return {
		
	};
  },
};
</script>
<style>
	.div1{
		width: 200px;
		height: 300px;
		background-color: aqua;
	}
</style>