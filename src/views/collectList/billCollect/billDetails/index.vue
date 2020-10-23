<template>
  <div>
    <el-page-header @back="goBack" content="订单详情页面"> </el-page-header>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "billCollect",
      });
    },
    
  },
};
</script>
