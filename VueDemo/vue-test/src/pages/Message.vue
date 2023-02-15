<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 路由的Query参数字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 路由的param参数字符串写法 -->
        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp;
        <router-link
          :to="{
            name: 'xiangqing', // 路由起了名字可以这样写 没写 path:'/home/message/detail'，如果使用params参数 必须使用name
            params: {
              id: m.id,
              title: m.title,
            },
            /**
             query: {
              id: m.id,
              title: m.title,
            },
             */
          }"
        >
          {{ m.title }} </router-link
        >&nbsp;&nbsp;

        <button @click="pushShow(m)">push跳转</button>
        <button @click="replaceShow(m)">replace跳转</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangqing", 
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m){
        this.$router.replace({
        name: "xiangqing", 
        params: {
          id: m.id,
          title: m.title,
        },
      });
    }
  },
};
</script>