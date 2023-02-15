import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      num: 1,
    };
  },
  getters: {
    double() {
      return this.num * 2;
    },
  },
  actions: {
    // login
    login() {
      return new Promise((resolve, reject) => {
        this.token = "Bearer aaaaaa";
        resolve();
      });
    },
  },
});
