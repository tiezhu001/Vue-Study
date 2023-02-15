<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {
      axios
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then((response) => {
          console.log(response.data);
          this.$bus.$emit("getGithub",response.data.items)
        },error=>{
            console.log(error.message);
        });
    },
  },
};
</script>

<style>
</style>