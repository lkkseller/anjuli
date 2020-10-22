<template>
  <div class="app-container">
    <div>
      租房管理
      <hr />
      <el-button class="addbtn" @click="dialogFormVisible = true"
        >+房源上传</el-button
      >
    </div>
    <el-table
      v-loading="listLoading"
      :data="houseList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="房源编号" width="95">
        <template slot-scope="scope">
          {{ scope.row.index }}
        </template>
      </el-table-column>
      <el-table-column label="房源描述">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="房源价格" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="房源类型" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column label="房源地址" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="房源状态"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{
            scope.row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="上传时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template slot-scope="scope">
          <div class="ediv">
            <el-button
              class="editbtn"
              @click="editHouseInfo(scope.$index, scope.row)"
            >
              <i class="el-icon-edit-outline" /> </el-button
            >|
          </div>
          <div>
            <el-button
              class="delbtn"
              @click="delHouseInfo(scope.$index, scope.row)"
              ><i class="el-icon-delete"
            /></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加租房" :visible.sync="dialogFormVisible">
      <el-form :model="form">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      size="60%"
    >
      <div class="app-head">
        <i class="el-icon-s-custom" style="width: 200px; height: 100px"
          >修改租房信息</i
        >
      </div>
      <div class="app-container">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="房子编号">
            <el-input v-model="form.index"></el-input>
          </el-form-item>
          <el-form-item label="房子描述">
            <el-input v-model="form.title" />
          </el-form-item>
          <el-form-item label="房子价格">
            <el-input v-model="form.price" />
          </el-form-item>
          <el-form-item label="租房类型">
            <el-select v-model="form.type" placeholder="请选择租房类型">
              <el-option label="经济房" value="经济房" />
              <el-option label="学区房" value="学区房" />
            </el-select>
          </el-form-item>
          <el-form-item label="房子地址">
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
          <el-form-item label="入住时间">
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

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        闲置: "gray",
        出租中: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      houseList: [], //存放表格数据
      listLoading: false,
      dialogFormVisible: false,
      drawer: false,
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
    submit() {
      var that = this;
      that.dialogFormVisible = false;
      if(that.form.address){
        that.form.address = that.form.address.join("/")
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
    editHouseInfo(index, row) {
      var that = this;
      that.drawer = true;
      that.form = row;
    },
    delHouseInfo(index, row) {
      let that = this;
      console.info(index);
      this.$confirm("确认删除此数据？")
        .then((_) => {
          that.houseList.splice(index, 1);
          window.localStorage.setItem("houseList", JSON.stringify(that.houseList));
          let temp = window.localStorage.getItem("houseList");
          that.$message({
            message: "添加成功！",
            type: "success",
          });
        })
        .catch((_) => {});
    },
    //编辑功能提交按钮
    onSubmit() {
      var that = this;
      that.drawer = false;
      window.localStorage.setItem("houseList", JSON.stringify(that.houseList));
      that.$message({
        message: "修改成功！",
        type: "success",
      });
    },
    onCancel() {
      var that = this;
      that.drawer = false;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style scoped>
.addbtn {
  float: right;
  overflow: hidden;
  margin: 8px;
  background-color: dodgerblue;
  color: white;
}
.editbtn {
  border: none;
  width: 15px;
}
.ediv {
  float: left;
}
.delbtn {
  border: none;
  width: 15px;
}
</style>