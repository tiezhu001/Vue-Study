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
    add(){
      this.num+=1
    },
    // login
    login() {
      return new Promise((resolve, reject) => {
        this.token = "Bearer aaaaaa";
        resolve();
      });
    },
  },
  //persist:true  // 全部state都持久化

  persist:{
    key:"user",  // 修改state的id,默认就是Id的值
    storage:window.localStorage,
    paths:['num']  // 需要持久化那些state,[]列表相当于没有需要被持久化
  }
});
