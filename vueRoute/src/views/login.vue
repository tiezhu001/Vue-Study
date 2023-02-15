<template>
  <button @click="logon">登錄</button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
const router = useRouter();

const userStore = useUserStore();
function logon() {
  // router.push("/user/2");
  //router.push({name:'users',params:{id:3}});
  userStore.login().then(() => {
    // 2.replace不会在浏览器增加历史记录
    router.replace({ name: "users", params: { id: 3 } });
  });
}
</script>

<style lang="scss" scoped></style>
