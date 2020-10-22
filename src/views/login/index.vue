<template>
  <div class="wrap">
    <div class="login">
      <div class="title">登录</div>
      <el-form ref="loginForm" :label-position="labelPosition" :model="info" :rules="rules">
        <el-form-item prop="account">
          <el-input v-model="info.account" prefix-icon="el-icon-user" placeholder="账号" />
        </el-form-item>
        <el-form-item prop="cypher">
          <el-input v-model="info.cypher" prefix-icon="el-icon-lock" placeholder="密码" show-password @keyup.enter.native="login" />
        </el-form-item>
        <el-form-item>
          <div class="log">
            <div style="width:70%">
              <el-button :loading="loading" type="primary" style="width:100%" @click="login">登录</el-button>
            </div>
            <div style="width:24%">
              <el-button type="info" style="width:100%" @click="reg">注册</el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { setUser } from '@/utils/session'
export default {
  data() {
    return {
      labelPosition: 'right',
      info: {
        account: 'admin',
        cypher: '2020go'
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        cypher: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  mounted() {
    document.title = '登录 - NG'
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.info.account === 'admin' && this.info.cypher === '2020go') {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              setUser(this.info)
              this.$router.push({ path: this.redirect || '/' })
            }, 500)
          } else {
            this.$message({
              message: '账号或者密码错误',
              type: 'error',
              duration: 3000
            })
          }
        } else {
          return false
        }
      })
    },
    reg() {
      this.$router.push({ path: '/register' })
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
  height: 360px;
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
