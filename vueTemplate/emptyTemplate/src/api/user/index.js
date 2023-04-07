import request from "@/utils/request";

const api = {
  Login: "/auth/login",
  Logout:"/auth/logout",
  UserInfo: "/user/info",
  UserMenu:"/user/nav"
};

// 登录
export function login(parameter) {
  return request({
    url: api.login,
    method: "post",
    data: parameter,
  });
}

//  获取用户信息
export function getUserInfo() {
  return request({
    url: api.UserInfo,
    method: "get",
  });
}

// 退出登录
export function logout() {
    return request({
      url: api.Logout,
      method: "post",
    });
  }

// 获取当前用户菜单
export function getCurrentUserNav(){
    return request({
        url:api.UserMenu,
        method:"get"
    })
}
