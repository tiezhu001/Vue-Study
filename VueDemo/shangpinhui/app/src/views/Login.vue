<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="1" />
      </div>

      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        label-width="80px"
        class="login_form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            prefix-icon="iconfont icon-usercenter"
            type="text"
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            prefix-icon="iconfont icon-password"
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "admin",
        password: "123456",
      },

      // 表单验证规则
      // 1.给el-form绑定 :rules
      // 2.给el-form-item 添加prop对象
      // 3.校验规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
      login(){
          this.$refs.form.validate(async success=>{
              if(!success) return;
              // 发送ajax请求
              // 解构出axios返回的对象中的data值 并重名为res
             const {data:res}= await this.$http.post('login',this.form);
             if(res.meta.status!=200) return this.$message.error("登录失败")
             console.log(res)
             window.sessionStorage.setItem("token",res.data.token)
             this.$router.push('/home')
             return this.$message.success("登录成功")
          })
      },
      reset(){
          // 重置表单的初始值,并清楚验证规则提示
          this.$refs.form.resetFields();
      }

  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: aqua;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10%;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btns {
  display: flex;
  justify-content: right;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>