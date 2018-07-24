<template>
<div>
  <div @click=" duihuan()">兑换率</div>
  <div @click=" jijin()">基金相关信息</div>
  <div @click=" yiyuan()">医院信息</div>
</div>
</template>

<script>
    export default {
      methods: {
        duihuan() {
          this.$router.push({path: '/duihuan'})
        },
        jijin() {
          this.$router.push({path: '/jijin'})
        },
        yiyuan() {
          this.$router.push({path: '/yiyuan'})
        },

      }
    }
</script>

<style scoped>

</style>
