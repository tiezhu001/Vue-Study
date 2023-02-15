<template>
  <div class="div1" >
    <h2>{{title}}</h2>
    <ul>
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
	<slot name="haha1">name info1</slot>
    <slot name="haha2">name info2</slot>
  </div>
</template>

<script>
export default {
  name: "NameSolt",
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