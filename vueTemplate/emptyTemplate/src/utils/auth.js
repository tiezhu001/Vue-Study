import Cookie from 'js-cookie'

const TokenKey = 'Token'

/**
 * 获取缓存中token
 * @returns 
 */
export function getToken(){
    return Cookie.get(TokenKey)
}
/**
 * 设置缓存中token
 * @param {token值} token 
 * @returns 
 */
export function setToken(token){
    return Cookie.set(TokenKey,token)
}

/**
 * 删除缓存中token
 * @returns 
 */
export function removeToken(){
    return Cookie.remove(TokenKey)
}