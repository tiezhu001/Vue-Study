<template>
    <div>
       <div>
         我是children组件
       </div>
       <slot>
         <div>我是默认内容</div>
       </slot>

       <slot name="header"></slot>
       <slot name="content"></slot>

       <slot name="foot"></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>