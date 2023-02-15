<template>
  <div>
    <!-- 头部面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 中间卡片区域 -->
    <el-card class="box-card">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>

      <el-table :data="roleList" style="width: 100%" stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bottomBorder', index1 == 0 ? 'topBoder' : '']"
              :gutter="10"
              v-for="(item1, index1) in scope.row.children"
              :key="item1.id"
            >
              <!-- 一级权限 -->
              <el-col :span="6">
                <div class="oneAuth">
                  <el-tag
                    closable
                    @close="removeRoleById(scope.row, item1.id)"
                    >{{ item1.authName }}</el-tag
                  >
                  <i class="el-icon-arrow-right"></i>
                </div>
              </el-col>
              <!-- 二级权限和三级权限 -->
              <el-col :span="18">
                <el-row
                  :class="[index2 == 0 ? '' : 'topBorder']"
                  v-for="(item2, index2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <div class="twoAuth">
                      <el-tag
                        closable
                        @close="removeRoleById(scope.row, item2.id)"
                        type="success"
                        >{{ item2.authName }}</el-tag
                      >
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </el-col>

                  <el-col :span="18">
                    <el-tag
                      type="warning"
                      closable
                      @close="removeRoleById(scope.row, item3.id)"
                      v-for="item3 in item2.children"
                      :key="item3.key"
                      >{{ item3.authName }}</el-tag
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称" width="width">
        </el-table-column>
        <el-table-column prop="roleDesc" label="角色权限" width="width">
        </el-table-column>

        <el-table-column>
          <template slot-scope="scoped">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scoped.row.id)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteUser(scoped.row.id)"
              >删除</el-button
            >
            <el-button
              type="warning"
              @click="showSettingDiolog(scoped.row)"
              icon="el-icon-setting"
              size="mini"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分配权限的对话框 -->
    <el-dialog title="提示" :visible.sync="settingDialogVisible" width="30%">
      <!-- 权限列表树 -->
      <el-tree
        ref="treeRef"
        :data="rightsList"
        :props="rightsProps"
        default-expand-all
        :default-checked-keys="haveRightKeys"
        node-key="id"
        show-checkbox
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="settingDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Roles",
  data() {
    return {
      queryInfo: {},
      roleList: [],

      // 分配权限的对话框
      settingDialogVisible: false,

      // 所有权限列表
      rightsList: [],

      rightsProps: {
        children: "children",
        label: "authName",
      },

      haveRightKeys: [],

      currentSettingRoleId: "",
    };
  },
  methods: {
    async getRoleList() {
      const { data: res } = await this.$http.get("roles");
      if (res.meta.status != 200) return;
      console.log(res);
      this.roleList = res.data;
    },
    // 删除权限通过Id
    removeRoleById(role, rightId) {
      this.$confirm("是否要删除此权限", "删除权限", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(async () => {
          const { data: res } = await this.$http.delete(
            `roles/${role.id}/rights/${rightId}`
          );
          if (res.meta.status == 200) {
            role.children = res.data;
            this.$message.success("删除成功");
          }
        })
        .catch(() => {
          this.$message.info("取消删除");
        });
    },
    showEditDialog() {},
    deleteUser() {},

    // 分配权限对话框
    async showSettingDiolog(node) {
      this.currentSettingRoleId = node.id;
      // 获取所有权限的列表树
      const { data: res } = await this.$http.get("rights/tree");
      if (res.meta.status == 200) {
        this.rightsList = res.data;
        this.haveRightKeys = [];
        this.getRights(node);
        console.log(this.haveRightKeys);
        this.settingDialogVisible = true;
      }

      // 获取错误没有处理
    },

    // 获取每个角色的三级节点权限
    getRights(node) {
      if (!node.children) {
        return this.haveRightKeys.push(node.id);
      }
      node.children.forEach((item) => {
        this.getRights(item);
      });
    },

    // 分配权限
    setRights() {
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        this.$refs.treeRef.getHalfCheckedNodes(),
      ];

      // 只分配了权限 没有处理 分配失败
      this.$http.post(`roles/${this.currentSettingRoleId}/rights`, {
        rids: keys.join(","),
      });
      this.settingDialogVisible = false;
    },
  },
  created() {
    this.getRoleList();
  },
};
</script>

<style lang="less" scoped>
.el-col {
  margin-bottom: 15px;
}
.topBorder {
  border-top: 1px solid #eee;
}
.bottomBorder {
  border-bottom: 1px solid #eee;
}

.oneAuth {
  text-align: center;
}
</style>