<template>
  <div id="right">我是{{ name }}组件,我是全局注册的</div>
</template>


<script>
export default {
  data: function () {
    return {
      name: "right1",
    };
  },
};
</script>

<style lang="less">
#right {
  width: 500px;
  height: 200px;
  background-color: green;
}
</style>


