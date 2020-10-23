<template>
  <div>
    <el-page-header @back="goBack" content="房源添加页面"> </el-page-header>
    <hr />
    <el-form :model="form">
      <div class="left-form">
        <el-form-item label="房子编号" :label-width="formLabelWidth">
          <el-input v-model="form.index" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="房子描述" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="租房价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="租房类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择租房类型">
            <el-option label="经济房" value="经济房"></el-option>
            <el-option label="学区房" value="学区房"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="租房地址" :label-width="formLabelWidth">
          <div class="block">
            <el-cascader
              v-model="form.address"
              :options="options"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="租房状态" :label-width="formLabelWidth">
          <el-select v-model="form.status" placeholder="请选择租房状态">
            <el-option label="出租中" value="出租中"></el-option>
            <el-option label="闲置" value="闲置"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传时间" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="form.display_time"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="请选择时间"
            >
            </el-date-picker>
          </div>
        </el-form-item>
      </div>
      <div class="right-form">
        <el-form-item label="房子描述" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="房子描述" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="房子描述" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="房子描述" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="房子描述" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div class="div-footer">
    <el-button @click="addCancel" style="width:140px">取 消</el-button>
    <el-button type="primary" @click="addSubmit" style="width:140px">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houseList: [],
      formLabelWidth: "120px",
      form: {
        index: "",
        title: "",
        price: "",
        address: "",
        type: [],
        status: [],
        display_time: "",
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
    //从缓存中取得新的list
    let t = JSON.parse(window.localStorage.getItem("houseList"));
    if (t) {
      this.houseList = JSON.parse(window.localStorage.getItem("houseList"));
    }
  },
  methods: {
    addSubmit() {
      var that = this;
      console.info(that.form);
      if (that.form.address) {
        that.form.address = that.form.address.join("/");
      }
      that.houseList.push(that.form);
      window.localStorage.setItem("houseList", JSON.stringify(that.houseList));
      let temp = window.localStorage.getItem("houseList");
      // console.info(temp);
      // console.info(that.list);
      that.$message({
        message: "添加成功！",
        type: "success",
      });
    },
    addCancel() {
      console.info("点击取消");
    },
    goBack() {
      this.$router.push({
        path: "houseInfo",
      });
    },
  },
};
</script>

<style scoped>
.el-form {
  margin-top: 20px;
}
.el-form-item {
  width: 40%;
}
.div-footer{
    width: 100%;
    height: 60px;
    padding-left: 40%;
}
</style>

