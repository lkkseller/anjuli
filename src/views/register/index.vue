<template>
  <div class="wrap">
    <div class="login">
      <div class="title">注册</div>
      <el-form ref="loginForm" :label-position="labelPosition" :model="info" :rules="rules">
        <el-form-item prop="account">
          <el-input v-model="info.account" prefix-icon="el-icon-user" placeholder="账号" />
        </el-form-item>
        <el-form-item prop="first_cypher">
          <el-input v-model="info.first_cypher" prefix-icon="el-icon-lock" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item prop="again_cyphercypher">
          <el-input v-model="info.again_cypher" prefix-icon="el-icon-lock" placeholder="确认密码" show-password @keyup.enter.native="reg" />
        </el-form-item>
        <el-form-item>
          <div class="log">
            <el-button :loading="loading" type="primary" style="width:100%" @click="reg">注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      info: {
        account: 'admin',
        first_cypher: '2020go',
        again_cypher: '2020go'
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        first_cypher: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        again_cypher: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  mounted() {
    document.title = '注册 - NG'
  },
  methods: {
    reg() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push({ path: '/login' })
      }, 1000)
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/xg.jpeg");
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.login {
  width: 400px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.title {
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 20px 20px 0px 0px;
  border-bottom: 2px solid rgb(231, 231, 231);
}
.el-form-item {
  width: 300px;
  margin-top: 34px;
}
.log{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
}
</style>
