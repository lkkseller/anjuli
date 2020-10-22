<template>
  <div>
    <div>
      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 6px; margin-top: 18px; background-color: #00bfff"
        >十</el-button
      >
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        direction="ltr"
        :with-header="false"
        size="60%"
      >
        <div class="app-head">
          <i class="el-icon-s-custom" style="width: 200px; height: 100px"
            >添加用户信息</i
          >
        </div>
        <div class="app-container">
          <el-form ref="form" :model="form" label-width="120px" class="addForm">
            <el-form-item label="客户编号">
              <el-input v-model="form.user_id" />
            </el-form-item>
            <el-form-item label="真实姓名">
              <el-input v-model="form.user_name" />
            </el-form-item>
            <el-form-item label="手机号" prop="user_phone">
              <el-input v-model="form.user_phone" />
            </el-form-item>
            <el-form-item label="角色">
              <el-select v-model="form.user_play" placeholder="请选择角色">
                <el-option label="房东" value="房东" />
                <el-option label="租客" value="租客" />
              </el-select>
            </el-form-item>
            <el-form-item label="租房状态">
              <el-select
                v-model="form.user_status"
                placeholder="请选择租房状态"
              >
                <el-option label="租用中" value="租用中"></el-option>
                <el-option label="已退租" value="已退租"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="租房类型">
              <el-select v-model="form.user_type" placeholder="请选择租房类型">
                <el-option label="单身公寓" value="单身公寓"></el-option>
                <el-option label="学区房" value="学区房"></el-option>
                <el-option label="海景房" value="海景房"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="居住地址">
              <div class="block">
                <el-cascader
                  v-model="form.user_address"
                  :options="options"
                ></el-cascader>
              </div>
            </el-form-item>
            <el-form-item label="入住时间">
              <div class="block">
                <el-date-picker
                  v-model="form.user_Sdate"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="请选择时间"
                >
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="退房时间">
              <div class="block">
                <el-date-picker
                  v-model="form.user_Edate"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="请选择时间"
                >
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确认</el-button>
              <el-button @click="drawer = false">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-drawer>
    </div>
    <el-table
      :data="
        userList.filter(
          (data) =>
            !search ||
            data.user_name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="客户编号">
        <template slot-scope="scope">
          {{ scope.row.user_id }}
        </template>
      </el-table-column>
      <el-table-column label="客户姓名">
        <template slot-scope="scope">
          {{ scope.row.user_name }}
        </template>
      </el-table-column>
      <el-table-column label="手机号">
        <template slot-scope="scope">
          {{ scope.row.user_phone }}
        </template>
      </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          {{ scope.row.user_play }}
        </template>
      </el-table-column>
      <el-table-column label="房源类型">
        <template slot-scope="scope">
          {{ scope.row.user_type }}
        </template>
      </el-table-column>
      <el-table-column label="居住地址">
        <template slot-scope="scope">
          {{ scope.row.user_address }}
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.user_status | statusFilter">{{
            scope.row.user_status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="入住时间"
        width="180"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.user_Sdate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="退房时间"
        width="180"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.user_Edate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer2"
      :with-header="false"
      :before-close="handleClose"
      size="60%"
    >
      <div class="app-head">
        <i class="el-icon-s-custom" style="width: 200px; height: 100px"
          >编辑用户信息</i
        >
      </div>
      <div class="app-container">
        <el-form ref="form" :model="form" label-width="120px" class="editForm">
          <el-form-item label="客户编号">
            <el-input v-model="form.user_id"></el-input>
          </el-form-item>
          <el-form-item label="客户姓名">
            <el-input v-model="form.user_name" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.user_phone" />
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="form.user_play" placeholder="请选择角色">
              <el-option label="房东" value="房东" />
              <el-option label="租客" value="租客" />
            </el-select>
          </el-form-item>
          <el-form-item label="租房状态">
            <el-select v-model="form.user_status" placeholder="请选择租房状态">
              <el-option label="租用中" value="租用中"></el-option>
              <el-option label="已退租" value="已退租"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房源类型">
            <el-select v-model="form.user_type" placeholder="请选择租房类型">
              <el-option label="海景房" value="经济房" />
              <el-option label="学区房" value="学区房" />
              <el-option label="单身公寓" value="学区房" />
            </el-select>
          </el-form-item>
          <el-form-item label="房子地址">
            <div class="block">
              <el-cascader
                v-model="form.user_address"
                :options="options"
              ></el-cascader>
            </div>
          </el-form-item>
          <el-form-item label="入住时间">
            <div class="block">
              <el-date-picker
                v-model="form.user_Sdate"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="请选择时间"
              >
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="退房时间">
            <div class="block">
              <el-date-picker
                v-model="form.user_Edate"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="请选择时间"
              >
              </el-date-picker>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="editSubmit" style="width: 100px"
              >确 定</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(user_status) {
      const statusMap = {
        租用中: "success",
        闲置: "gray",
        已退租: "danger",
      };
      return statusMap[user_status];
    },
  },
  data() {
    return {
      userList: [],
      form: {
        user_id: "",
        user_name: "",
        user_phone: "",
        user_play: "",
        user_status: "",
        user_Sdate: "",
        user_Edate: "",
        user_address: "",
        user_type: "",
      },
      search: "",
      drawer: false,
      drawer2: false,
      options: [
        {
          value: "上海市",
          label: "上海市",
          children: [
            {
              value: "宝山区",
              label: "宝山区",
              children: [
                {
                  value: "宝山区",
                  label: "宝山区",
                },
              ],
            },
            {
              value: "徐汇区",
              label: "徐汇区",
              children: [
                {
                  value: "徐汇区",
                  label: "徐汇区",
                },
              ],
            },
            {
              value: "黄埔新区",
              label: "黄埔新区",
              children: [
                {
                  value: "黄埔新区",
                  label: "黄埔新区",
                },
              ],
            },
            {
              value: "长宁区",
              label: "长宁区",
              children: [
                {
                  value: "长宁区",
                  label: "长宁区",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    let tab = window.localStorage.getItem("userList");
    if (tab) {
      this.userList = JSON.parse(window.localStorage.getItem("userList"));
    }
  },
  methods: {
    handleEdit(index, row) {
      var that = this;
      that.drawer2 = true;
      that.form = row;
      console.info(row);
    },
    handleDelete(index, row) {
      let that = this;
      console.info(index);
      this.$confirm("确认删除此数据？")
        .then((_) => {
          that.userList.splice(index, 1);
          window.localStorage.setItem(
            "userList",
            JSON.stringify(that.userList)
          );
          let temp = window.localStorage.getItem("userList");
          that.$message({
            message: "添加成功！",
            type: "success",
          });
        })
        .catch((_) => {});
    },
    onSubmit() {
      var that = this;
      that.drawer = false;
      if (that.form.user_address) {
        that.form.user_address = that.form.user_address.join("/");
      }
      that.userList.push(that.form);
      window.localStorage.setItem("userList", JSON.stringify(that.userList));
      that.$message({
        message: "添加成功！",
        type: "success",
      });
      // console.info(temp);
      // console.info(that.list);
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
    //编辑功能提交按钮
    editSubmit() {
      var that = this;
      that.drawer2 = false;
      if (that.form.user_address) {
        that.form.user_address = that.form.user_address.join("/");
      }
      window.localStorage.setItem("userList", JSON.stringify(that.userList));
      that.$message({
        message: "修改成功！",
        type: "success",
      });
    },
    handleClose(done) {
      this.$confirm("是否放弃编辑?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style scoped>
.app-head {
  position: absolute;
  padding-left: 40%;
}
.editForm {
  margin-top: 40px;
}
</style>