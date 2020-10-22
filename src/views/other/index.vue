<template>
  <div class="container">{{ user.cypher }}</div>
</template>
<script>
import { getUser } from '@/utils/session'
export default {
  name: 'Other',
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
