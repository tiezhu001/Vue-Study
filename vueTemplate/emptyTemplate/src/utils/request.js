import axios from "axios";
import {
  ElNotification,
  ElMessageBox,
  ElMessage,
  ElLoading,
} from "element-plus";
import { transParams, blobValidate } from "@/utils/utils";
import { getToken } from "./auth";
import cache from "../plugins/cache";

// 是否显示重新登陆
export let isRelogin = { show: false };

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

// 创建axios实例
const instance = axios.create({
  baseURL: "",
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log("请求配置", config);
    // 需要在请求的地方的header添加isToken配置和repeatSubmit
    // 是否需要设置token
    const isToken = (config.headers || {}).isToken === false;
    // 是否需要放置数据重复提交
    const isRequestSubmit = (config.headers || {}).repeatSubmit === false;

    if (getToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }

    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?" + transParams(config.params);
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }

    if (
      !isRequestSubmit &&
      (config.method === "post" || config.method === "put")
    ) {
      const requestObj = {
        url: config.url,
        data:
          typeof config.data === "object" ? JSON.stringify(config.data) : data,
        time: new Date().getTime(),
      };
      const sessionObj = cache.session.getJSON(requestObj);
      if (
        sessionObj === undefined ||
        sessionObj === null ||
        sessionObj === ""
      ) {
        cache.session.setJSON("sessionObj", requestObj);
      } else {
        const s_url = sessionObj.url; // 请求地址
        const s_data = sessionObj.data; // 请求数据
        const s_time = sessionObj.time; // 请求时间
        const interval = 1000; // 请求间隔(ms) ,如果小于此时间视为重复提交
        if (
          s_data === requestObj.data &&
          requestObj.time - s_time < interval &&
          s_url === requestObj.url
        ) {
          const msg = "请勿重复提交!";
          console.warn(`[${s_url}]: ` + message);
          return Promise.reject(new Error(msg));
        } else {
          cache.session.setJSON("sessionObj", requestObj);
        }
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    console.log("响应数据", res);
    // 2xx 范围内的状态码都会触发该函数。
    // TODO:添加loading
    let { data } = res;
    if (data.code == 1) {
      return { ...data };
    } else {
      ElMessage.error(msg);
      return Promise.reject(`响应异常=> ${msg}`);
    }

    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (error.response) {
      let errorCode = error.response.status;
      if (errorCode === 401) {
        if (!isRelogin.show) {
          isRelogin.show = true;
          ElMessageBox.confirm(
            "登录状态已过期，您可以继续留在该页面，或者重新登录",
            "系统提示",
            {
              confirmButtonText: "重新登录",
              cancelButtonText: "取消",
              type: "warning",
            }
          )
            .then(() => {
              isRelogin.show = false;
              useUserStore()
                .logOut()
                .then(() => {
                  location.href = "/login";
                });
            })
            .catch(() => {
              isRelogin.show = false;
            });
        }
      }

      if (errorCode === 403) {
        ElMessage({ message: "未授权的操作", type: "error" });
        return Promise.reject(new Error(msg));
      }
      if (errorCode === 500) {
        ElMessage({ message: "服务器异常", type: "error" });
        return Promise.reject(new Error(msg));
      }
    }
    let { message } = error;
    ElMessage({ message: message, type: "error", duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

export default instance