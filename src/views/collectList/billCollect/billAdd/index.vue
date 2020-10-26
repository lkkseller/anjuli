<template>
  <div>
    <el-page-header @back="goBack" content="订单添加页面"> </el-page-header>
    <hr />
    <div>
      <el-form
        ref="form"
        status-icon
        :model="form"
        label-width="80px"
        size="mini"
        :rules="rules"
      >
        <el-form-item label="订单编号" :label-width="formLabelWidth" prop="oid">
          <el-input v-model="form.oid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="订单价格"
          :label-width="formLabelWidth"
          prop="oprice"
        >
          <el-input v-model="form.oprice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="收货人姓名"
          :label-width="formLabelWidth"
          prop="oname"
        >
          <el-input v-model="form.oname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="otel"
        >
          <el-input v-model="form.otel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="送达地址"
          :label-width="formLabelWidth"
          prop="oaddress"
        >
          <div class="block">
            <el-cascader
              v-model="form.oaddress"
              :options="options"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item
          label="订单状态"
          :label-width="formLabelWidth"
          prop="otag"
        >
          <el-select v-model="form.otag" placeholder="请选择订单状态">
            <el-option label="未支付" value="未支付"></el-option>
            <el-option label="支付成功" value="支付成功"></el-option>
            <el-option label="支付失败" value="支付失败"></el-option>
            <el-option label="待退款" value="待退款"></el-option>
            <el-option label="已退款" value="已退款"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="订单类型"
          :label-width="formLabelWidth"
          prop="type"
        >
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="未支付" value="warning"></el-option>
            <el-option label="支付成功" value="success"></el-option>
            <el-option label="支付失败" value="danger"></el-option>
            <el-option label="待退款" value="info"></el-option>
            <el-option label="已退款" value="primary"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="上传时间"
          :label-width="formLabelWidth"
          prop="odate"
        >
          <div class="block">
            <el-date-picker
              v-model="form.odate"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="请选择时间"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item size="large">
          <el-form-item>
            <el-button type="primary" @click="orderSubmit('form')"
              >提交</el-button
            >
            <el-button @click="orderReset('form')">重置</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateTel = (rule, value, callback) => {
      setTimeout(() => {
        if(!(/^1[3456789]\d{9}$/.test(value))){
            callback(new Error("手机号码格式输入不正确!"))
        }else{
            callback();
        }
      }, 100);
    };
    return {
      orderList: [],
      formLabelWidth: "120px",
      form: {
        oid: "",
        oprice: "",
        odate: "",
        oname: "",
        otel: "",
        oaddress: "",
        otag: "",
        type: "",
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
      rules: {
        oid: [{ required: true, message: "请输入编号!", trigger: "blur" }],
        oname: [{ required: true, message: "请输入姓名!", trigger: "blur" }],
        oprice: [{ required: true, message: "请输入价格!", trigger: "blur" }],
        otel: [
          { required: true, message: "请输入电话号码!", trigger: "blur" },
          { validator: validateTel, trigger: "blur" },
        ],
        oaddress: [{ required: true, message: "请输入地址!", trigger: "blur" }],
        otag: [{ required: true, message: "请输入订单状态!", trigger: "blur" }],
        type: [{ required: true, message: "请输入订单类型!", trigger: "blur" }],
        odate: [
          { required: true, message: "请输入下单时间!", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    //从缓存中取得新的orderlist
    let order = JSON.parse(window.localStorage.getItem("orderList"));
    if (order) {
      this.orderList = JSON.parse(window.localStorage.getItem("orderList"));
    }
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "billCollect",
      });
    },
    orderSubmit(formName) {
      var that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.info(that.form);
          if (that.form.oaddress) {
            that.form.oaddress = that.form.oaddress.join("/");
          }
          that.orderList.push(that.form);
          window.localStorage.setItem(
            "orderList",
            JSON.stringify(that.orderList)
          );
          let temp = window.localStorage.getItem("orderList");
          // console.info(temp);
          // console.info(that.list);
          that.$message({
            message: "添加成功！",
            type: "success",
          });
          this.$router.push({
            path: "billCollect",
          });
        } else {
          that.$message({
            message: "添加失败！",
            type: "danger",
          });
          return false;
        }
      });
    },
    orderReset(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-form-item {
  width: 35%;
}
</style>
