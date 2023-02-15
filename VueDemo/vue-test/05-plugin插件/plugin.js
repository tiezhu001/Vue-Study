export default {
    // 第一个参数是Vue构造函数
    install(Vue){
        // 配置全局过滤器
        Vue.filter("toUpper",function(val){
                return val.toUpperCase()
        })

        // 配置全局 指令
        // 第一个参数是指令名去掉v,使用需要加上v- 如果是两个或者三个单词组合中间用连接符链接 使用同样如此
        // 第二个参数是一个func,第一个参数是绑定元素的dom,第二个参数是指令所接受到的内容
        Vue.directive("fbind",function(element,binding){
            element.value = binding.value;
        })

        // 配置全局混入
        Vue.mixin({
            methods: {
                showName() {
                  alert(this.name);
                },
              },
        })

        // 也可以在原型上绑定方法,然后再其他vm或者组件内都能使用,因为这个方法被绑定到vm实例上
        Vue.prototype.hello = function(){
            console.log("hello");
        }
    }
}