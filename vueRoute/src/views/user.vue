<template>
    <div>
        {{ $route.params.id }}
        <h2>token:{{ userStore.token }}</h2>
        <h2>num:{{ userStore.num }}</h2>
        <h2>double:{{ userStore.double }}</h2>
        <button @click="back">退出</button>
        <!-- <router-link :to="">profile</router-link> -->
        <div>
            <button @click="goProfile">个人信息</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import {useRouter,useRoute}  from 'vue-router'
    import { useUserStore } from '../store/user';
    const router = useRouter()

    const route = useRoute();

    const userStore = useUserStore()

    function goProfile(){
        //console.log("params",route.params)
        router.push(`${route.params.id}/profile`)
    }

    function back(){
        console.log("route",route)
        router.push('/')
    }
</script>

<style lang="scss" scoped>

</style>