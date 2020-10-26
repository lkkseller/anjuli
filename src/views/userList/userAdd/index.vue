<template>
  <div>
    <el-page-header @back="goBack" content="添加用户页面"> </el-page-header>
    <hr />
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
            <el-option label="业主" value="业主" />
            <el-option label="普通用户" value="普通用户" />
          </el-select>
        </el-form-item>
        <el-form-item label="租房状态">
          <el-select v-model="form.user_status" placeholder="请选择租房状态">
            <el-option label="租用中" value="租用中"></el-option>
            <el-option label="已退租" value="已退租"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="租房类型">
          <el-select v-model="form.user_type" placeholder="请选择租房类型">
            <el-option label="出租房" value="出租房"></el-option>
            <el-option label="商铺" value="商铺"></el-option>
            <el-option label="写字楼" value="写字楼"></el-option>
            <el-option label="二手房" value="二手房"></el-option>
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
      goBack() {
      this.$router.push({
        path: "userInfo",
      });
    },
    onSubmit() {
      var that = this;
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
  }
}
</script>

<style scoped>
.el-form-item {
  width: 35%;
}
</style>