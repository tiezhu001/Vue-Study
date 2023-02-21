<script setup>
import Child from "./components/Child.vue";
import ChildSlot from "./components/ChildSlot.vue";


const tableData1 = [
            {
              id: 1,
              date: "2016-05-02",
              name: "wangxiaohu",
              address: "No. 189, Grove St, Los Angeles",
            },
            {
              id: 2,
              date: "2016-05-04",
              name: "wangxiaohu",
              address: "No. 189, Grove St, Los Angeles",
            },
            {
              id: 3,
              date: "2016-05-01",
              name: "wangxiaohu",
              hasChildren: false,
              address: "No. 189, Grove St, Los Angeles",
            },
            {
              id: 4,
              date: "2016-05-03",
              name: "wangxiaohu",
              address: "No. 189, Grove St, Los Angeles",
              children: [
                {
                  id: 31,
                  date: "2016-05-01",
                  name: "王小虎",
                  address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                  id: 32,
                  date: "2016-05-01",
                  name: "王小虎",
                  address: "上海市普陀区金沙江路 1519 弄",
                },
              ],
            },
          ];
</script>

<template>
  <div>
    <!-- <child>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:header>
          <div>
            我是头部具名插槽显示的
          </div>
      </template>

      <template v-slot:content>
          <div>
            我是内容
          </div>
      </template>


      <template #foot>
          <div>
            我是尾部
          </div>
      </template>
    </child> -->

    <!-- <ChildSlot>
      <template #default="{name1,age}">
        <div>{{name1}}-{{ age }}</div>
      </template>
       
        <template #g="props">
            {{props}}
        </template>
    </ChildSlot> -->
    <el-table :data="tableData1" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
  </div>
</template>

<style scoped></style>
