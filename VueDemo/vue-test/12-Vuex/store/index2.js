import Vue from 'vue'
import Vuex from 'vuex'
import Count from './Count.js'

Vue.use(Vuex);


// 可以把不同模块的拆分出来
export default new Vuex.store({
    modules:{
        Count:Count
    }
}) 

// 在使用mapState/actions/mutations/getters的方法 第一个参数 必须是模块的名称

// 在使用$store.getters/commit/dispatch 必须是路径写法('模块名/...')
// state的话 必须是 $store.state.模块名.参数