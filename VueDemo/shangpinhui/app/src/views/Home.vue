<template>
  <el-container class="homeContainer">
    <el-header>
      <div>
        <span>TestTest</span>
      </div>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
          <div class="toggle-button" @click="toggleMenu">|||</div>
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          unique-opened
          text-color="#fff"
          active-text-color="#409fff"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <el-submenu :index="item.id +' '" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单 -->
            <template slot="title">
              <i :class="iconList[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id">
              <i class="el-icon-menu"></i>
              <span slot="title">{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      menuList: [],
      iconList:{
          125:"iconfont icon-bussiness-man",
          103:"iconfont icon-renzheng-authentication",
          101:"iconfont icon-shop",
          102:"iconfont icon-dingdan",
          145:"iconfont icon-shujukanban"
      },
      isCollapse:false,
      activePath:""
    };
  },
  computed:{
    
  },
  methods: {
    logout() {
      // 清除token并重定向登录
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status != 200) this.$message.error(res.meta.msg);
      this.menuList = res.data;
    },

    // 折叠菜单
    toggleMenu(){
        this.isCollapse=!this.isCollapse;
    }
  },
  created() {
    this.getMenuList();
  },
  mounted(){
    this.activePath=this.$route.fullPath
  }
};
</script>
<style lang="less" scoped>
.homeContainer {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-aside {
  background-color: #333744;

  // el-menu右侧有个border
  .el-menu{
      border-right: 0;
  }
}
.el-main {
  background-color: #eaedf1;
}

/* 设置菜单的图标和文字的间距 */
.iconfont{
    margin-right: 10px;
}

.toggle-button{
    background-color: #4a5064;
    font-size:10px;
    line-height: 24px;
    color:#fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}

</style>
