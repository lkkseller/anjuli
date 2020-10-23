<template>
  <div>
    <router-link :to="{ path: 'billDetails' }"> 走，去详情页面 </router-link>
    <div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div class="safetyInfo">
      <div>
        <el-button type="primary" @click="toBillAdd">添加订单</el-button>
      </div>
      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button> -->
      <el-table ref="filterTable" :data="orderList" style="width: 100%" border>
        <el-table-column prop="oid" label="订单编号" width="180">
        </el-table-column>
        <el-table-column prop="oprice" label="订单价格" width="130">
        </el-table-column>
        <el-table-column prop="oname" label="收货人姓名" width="130">
        </el-table-column>
        <el-table-column prop="otel" label="联系方式" width="150">
        </el-table-column>
        <el-table-column prop="oaddress" label="送达地址"> </el-table-column>
        <el-table-column
          prop="otag"
          label="状态"
          width="100"
          :filters="[
            { text: '未支付', value: '未支付' },
            { text: '支付成功', value: '支付成功' },
            { text: '支付失败', value: '支付失败' },
            { text: '待退款', value: '待退款' },
            { text: '已退款', value: '已退款' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="scope.row.type" disable-transitions>{{
              scope.row.otag
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="odate"
          label="下单时间"
          sortable
          width="180"
          column-key="date"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
          ]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column label="操作" width="140">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="orderEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="orderDelete(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      :before-close="handleClose"
      size="60%"
    >
      <div class="app-head">
        <i class="el-icon-s-custom" style="width: 200px; height: 100px"
          >修改订单信息</i
        >
      </div>
      <div class="app-container">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="订单编号" :label-width="formLabelWidth">
          <el-input v-model="form.oid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="订单价格" :label-width="formLabelWidth">
          <el-input v-model="form.oprice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名" :label-width="formLabelWidth">
          <el-input v-model="form.oname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.otel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="送达地址" :label-width="formLabelWidth">
          <div class="block">
            <el-cascader
              v-model="form.oaddress"
              :options="options"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="订单状态" :label-width="formLabelWidth">
          <el-select v-model="form.otag" placeholder="请选择订单状态">
            <el-option label="未支付" value="未支付"></el-option>
            <el-option label="支付成功" value="支付成功"></el-option>
            <el-option label="支付失败" value="支付失败"></el-option>
            <el-option label="待退款" value="待退款"></el-option>
            <el-option label="已退款" value="已退款"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="未支付" value="warning"></el-option>
            <el-option label="支付成功" value="success"></el-option>
            <el-option label="支付失败" value="danger"></el-option>
            <el-option label="待退款" value="info"></el-option>
            <el-option label="已退款" value="primary"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传时间" :label-width="formLabelWidth">
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
          <el-button type="primary" @click="editSubmit">确认修改</el-button>
          <el-button @click="editCancel">取消</el-button>
        </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      orderList: [],
      drawer: false,
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.oaddress;
    },
    filterTag(value, row) {
      console.info(value);
      return row.otag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    toBillAdd() {
      this.$router.push({
        path: "billAdd",
      });
    },
    orderEdit(index, row) {
      var that = this;
      that.drawer = true;
      that.form = row;
    },
    orderDelete(index, row) {
      let that = this;
      console.info(index);
      this.$confirm("确认删除此数据？")
        .then((_) => {
          that.orderList.splice(index, 1);
          window.localStorage.setItem(
            "orderList",
            JSON.stringify(that.orderList)
          );
          let temp = window.localStorage.getItem("orderList");
          that.$message({
            message: "添加成功！",
            type: "success",
          });
        })
        .catch((_) => {});
    },
    editSubmit() {
      var that = this;
      that.drawer = false;
      if (that.form.oaddress) {
        that.form.oaddress = that.form.oaddress.join("/");
      }
      window.localStorage.setItem("orderList", JSON.stringify(that.orderList));
      that.$message({
        message: "修改成功！",
        type: "success",
      });
    },
    editCancel() {
      var that = this;
      that.drawer = false;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>

<style scoped>
</style>