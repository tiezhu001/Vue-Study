<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            class="input-with-select"
            v-model="queryInfo.query"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button>
          </el-input>
        </el-col>

        <el-col :span="6">
          <el-button type="primary" @click="dialogVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table :data="userList" style="width: 100%" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="a">
            <el-switch
              v-model="a.row.mg_state"
              @change="userStatusChange(a.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scoped">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scoped.row.id)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteUser(scoped.row.id)"
            ></el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="设置"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>

      <!-- 添加用户的对话框 -->
      <el-dialog
        title="添加用户"
        :visible.sync="dialogVisible"
        width="30%"
        @close="addDialogClosed"
      >
        <!-- 对话框主体区域 -->
        <el-form
          :model="addForm"
          :rules="addRules"
          ref="addFormRef"
          label-width="70px"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input v-model="addForm.email"></el-input>
          </el-form-item>

          <el-form-item label="手机" prop="mobile">
            <el-input v-model="addForm.mobile"></el-input>
          </el-form-item>
        </el-form>

        <!-- 对话框页脚 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 编辑用户对话框 -->
      <el-dialog
        title="添加用户"
        :visible.sync="editDialogVisible"
        width="30%"
        @close="editDialogCloese"
      >
        <!-- 对话框主体区域 -->
        <el-form :model="editForm" ref="editFormRef" label-width="70px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="editForm.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="mobile">
            <el-input v-model="editForm.mobile"></el-input>
          </el-form-item>
        </el-form>

        <!-- 对话框页脚 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editUser">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        // 如果校验通过直接返回回调函数不带参数
        return callback();
      }
      callback(new Error("请输入合法的邮箱"));
    };

    return {
      userList: [],
      total: 0,
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },

      // 控制添加用户对话框的显示于隐藏
      dialogVisible: false,
      editDialogVisible: false,

      // 添加用户表单数据
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      editForm: {},
      // 添加用户表单验证
      addRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 获取用户列表数据
    async getUserList() {
      const { data: res } = await this.$http.get("users", {
        params: this.queryInfo,
      });
      if (res.meta.status != 200)
        return this.$message.error("获取用户列表失败");
      this.userList = res.data.users;
      this.total = res.data.total;
    },
    // 每页显示的数量改变
    handleSizeChange(newPageSize) {
      this.queryInfo.pagesize = newPageSize;
      this.getUserList();
    },

    // 页码改变
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getUserList();
    },

    // 用户状态修改事件
    async userStatusChange(userInfo) {
      const { data: res } = await this.$http.put(
        `users/${userInfo.id}/state/${userInfo.mg_state}`
      );
      if (res.meta.status != 200) {
        // 让页面的用户状态回到过去
        userInfo.mg_state = !userInfo.mg_state;
        return this.$message.error(res.meta.msg);
      }
      return this.$message.success("修改用户状态成功");
    },

    // 对话框关闭监听事件
    addDialogClosed() {
      // 重置表单
      this.$refs.addFormRef.resetFields();
    },

    editDialogCloese() {
      this.$refs.editFormRef.resetFields();
    },

    // 添加用户
    addUser() {
      this.$refs.addFormRef.validate(async (success) => {
        if (!success) return;
        const { data: res } = await this.$http.post("users", this.addForm);
        if (res.meta.status != 201) {
          this.$message.error("添加用户失败");
        }
        this.$message.success("添加用户成功");
        this.dialogVisible = false;
      });
    },
    // 编辑用户
    editUser() {
      this.$refs.editFormRef.validate(async (success) => {
        if (!success) return;
        const { data: res } = await this.$http.put(
          "users/" + this.editForm.id,
          this.editForm
        );
        console.log(res);
        if (res.meta.status != 200) return this.$message.error("修改用户失败");

        // 修改成功
        this.editDialogVisible = false;
        this.getUserList();
      });
    },

    // 删除用户
    deleteUser(id) {
      // 先弹出提示框是否删除
      this.$confirm("是否删除用户?", "删除用户标题", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const {data:res} =await this.$http.delete("users/"+id)
          if(res.meta.status!=200) return this.$message.error("删除用户失败")
          this.getUserList()
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    async showEditDialog(id) {
      this.editDialogVisible = true;
      const { data: res } = await this.$http.get("users/" + id);
      if (res.meta.status != 200) return;
      this.editForm = res.data;
    },
  },
  created() {
    this.getUserList();
  },
};
</script>
 
<style lang="less" scoped>
</style>