<template>
  <div id="container2">
    <h2>我是测试指令的</h2>
    <button v-if="false">v-if按钮</button>
    <button v-show="false">v-show按钮</button>
    <a v-bind:href="url">我是v-bind绑定的href属性</a>
    <button v-on:click="alertSomething">v-on</button>
    <!-- 动态参数 -->

    <input type="text" v-on:[eventName].once="doSomething" />
    v-on和v-bind动态参数

    <div>
      <div v-if="type === 'A'">显示A</div>
      <div v-else-if="type === 'B'">显示B</div>
      <div v-else>Not A B</div>
    </div>
    <hr />

    <div>用Key管理可复用的元素</div>
    <!-- 不加key 会复用已有的元素,既当时用用户名登录输入了内容切换到了Email在切换到用户名,会保存原来输入的内容-->
    <!-- 加了key 每次都会渲染新的 -->
    <button @click="changeLoginType">切换登录方式</button>
    <template v-if="loginType === 'username'">
      <label>UserName</label>
      <input type="text" placeholder="输入你的用户名" key="username-input" />
    </template>

    <template v-else>
      <label>Email</label>
      <input type="text" placeholder="输入你的Email" key="email-input" />
    </template>

    <!-- v-for 渲染列表 -->
    <ul>
      <!-- 一般不建议使用下标作为key的值 -->
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <!-- 渲染对象 -->
    <ul>
      <li v-for="(item, name, index) in user" :key="name">
        {{ item }}+{{ index }}
      </li>
    </ul>

    <!-- 表单双向绑定 -->
    <!--  -->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <!-- 绑定多个复选框 -->
    <!-- 1.v-model绑定到数组上 2.多选会把当前选择框的value追加到数组中 -->
    <input type="checkbox" id="one" value="one" v-model="checked2" />
    <label for="one">复选框1</label>
    <input type="checkbox" id="two" value="two" v-model="checked2" />
    <label for="two">复选框2</label>
    <input type="checkbox" id="three" value="three" v-model="checked2" />
    <label for="three">复选框3</label>

    <hr />
    <!-- 绑定下拉框 -->
    <!-- 1.绑定下拉框绑定到select元素上且绑定到空字符串上
    2.如果option有value值 那么选中的就是value值，如果没有value值那么选中的就是option节点的值 -->
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option name="AA">A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "http://www.badiu.com",
      eventName: "input",
      type: "C",
      loginType: "email",
      list: ["Foo1", "Foo2", "Foo3"],
      user: {
        name: "zhangsan",
        age: 10,
        gender: "女",
      },
      checked: false,
      checked2: [],
      selected: '',
    };
  },
  methods: {
    alertSomething() {
      alert("我是v-on绑定的事件!");
    },
    doSomething() {
      alert(this.eventName);
    },
    changeLoginType() {
      if (this.loginType === "email") {
        this.loginType = "username";
      } else {
        this.loginType = "email";
      }
    },
  },
};
</script>

<style lang="less" scope>
#container2 {
  width: 400px;
  height: 400px;
  background-color: green;
}
</style>