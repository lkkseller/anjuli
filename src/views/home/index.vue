<template>
  <div class="container">{{ user.account }}</div>
</template>
<script>
import { getUser } from '@/utils/session'
export default {
  name: 'Home',
  data() {
    return {
      user: null
    }
  },
  created() {
    this.user = getUser()
  }
}
</script>
<style scoped>
.container{
  font-size: 60px;
  font-weight: bold;
}
</style>
