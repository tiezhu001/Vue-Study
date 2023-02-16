<template>
    <div>
        <h2>我是profile组件</h2>
        <h2>count:{{ userStore.num }}</h2>
    </div>
</template>

<script setup>
import { useUserStore } from '../store/user';

const userStore = useUserStore();

</script>

<style lang="scss" scoped>

</style>