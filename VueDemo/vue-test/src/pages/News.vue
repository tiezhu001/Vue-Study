<template>
	<ul>
		<li>news001  <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'News',

        // 只有引入了路由才有这两个钩子函数
        activated(){
            console.log("当前组件被激活了");
        },

        deactivated() {
           console.log("当前组件失活了");
        },
	}
</script>