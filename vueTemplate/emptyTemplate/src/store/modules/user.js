import { login, logout,getUserInfo } from "@/api/user/index.js";
import { getToken, setToken,removeToken } from "@/utils/auth.js";
import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    name: "",
    welcome: "",
    avatar: "",
    roles: [],
    info: {},
  }),
  actions: {
    //登录
    login(userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            setToken(res.token);
            this.token = res.token;
            resolve();
          })
          .catch((err) => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            if (res.role && res.role.permissions.length > 0) {
              const role = { ...res.role };
              role.permissions = res.role.permissions.map((permission) => {
                const per = {
                  ...permission,
                  actionList: (permission.actionEntitySet || {}).map(
                    (item) => item.action
                  ),
                };
                return per;
              });
              role.permissionList = role.permissions.map((permission) => {
                return permission.permissionId;
              });
              res.role = role;
              // 更改state
              this.role = role;
              this.info = res;
              this.name = res.name;
              this.avatar = res.avatar;
              resolve(res);
            } else {
              reject(new Error("getUserInfo"));
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 退出登录
    Logout(){
        return new Promise((resolve,reject)=>{
            logout(this.token).then(()=>{
                this.token = ''
                this.roles=[]
                this.permissions = []
                removeToken()
                resolve()
            }).catch(err=>{
                reject(err)
            })
        })
    }


  },
});


export default useUserStore