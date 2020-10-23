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
      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button> -->
      <el-table ref="filterTable" :data="tableData" style="width: 100%" border>
        <el-table-column prop="oid" label="订单编号" width="180">
        </el-table-column>
        <el-table-column prop="oprice" label="订单价格" width="180">
        </el-table-column>
        <el-table-column prop="oname" label="收货人姓名" width="180">
        </el-table-column>
        <el-table-column prop="oaddress" label="送达地址">
        </el-table-column>
        <el-table-column
          prop="otag"
          label="状态"
          width="100"
          :filters="[
            { text: '未支付', value: '未支付', },
            { text: '支付成功', value: '支付成功', },
            { text: '支付失败', value: '支付失败' },
            { text: '待退款', value: '待退款' },
            { text: '已退款', value: '已退款' }
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.type" 
              disable-transitions
              >{{ scope.row.otag }}</el-tag
            >
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
        
        
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      tableData: [
        {
          oid: "1",
          oprice: "654",
          odate: "2016-05-02",
          oname: "王晓晓",
          oaddress: "上海市普陀区金沙江路 1518 弄",
          otag: "支付成功",
          type: "success"
        },
        {
          oid: "2",
          oprice: "5642",
          odate: "2016-05-01",
          oname: "王丽丽",
          oaddress: "上海市普陀区金沙江路 1518 弄",
          otag: "支付失败",
          type: "danger"
        },
        {
          oid: "3",
          oprice: "4532",
          odate: "2016-05-03",
          oname: "王仙仙",
          oaddress: "上海市普陀区金沙江路 1518 弄",
          otag: "未退款",
          type: "info"
        },
        {
          oid: "4",
          oprice: "98765",
          odate: "2016-05-04",
          oname: "王蓓蓓",
          oaddress: "上海市普陀区金沙江路 1518 弄",
          otag: "已退款",
          type: "primary"
        },
        {
          oid: "5",
          oprice: "2134",
          odate: "2016-05-05",
          oname: "王倩倩",
          oaddress: "上海市普陀区金沙江路 1518 弄",
          otag: "未支付",
          type: "warning"
        }
      ],
    };
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
      return row.address;
    },
    filterTag(value, row) {
      console.info(value)
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style scoped>
</style>