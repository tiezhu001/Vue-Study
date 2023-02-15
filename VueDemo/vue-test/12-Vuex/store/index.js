import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const actions = {
    // 可以省略 
//   add(context, value) {
//     context.commit("ADD", value);
//   },
  jian(context, value) {
    // commit 第一个参数 是mutations方法名,第二个参数是传过来的值
    context.commit("JIAN", value);
  },
  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADDODD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADDWAIT", value);
    }, 1000);
  },
};

const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
  ADDODD(state, value) {
    state.sum += value;
  },
  ADDWAIT(state, value) {
    state.sum += value;
  },
  addCommit(state, value){
        state.sum+=value
  }
};

const state = {
  sum: 0,
};

const getters = {
    // 对 数据源既state中的数据进行加工,类似于计算属性
    bigNumber(state){
        return state.sum*10
    }
}

// 必须在导出Store之前使用Vuex插件
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
