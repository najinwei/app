<template>
  <div id="app">
    <Tabs></Tabs>
    <router-view/>

  </div>
</template>

<script>
  import Tabs from "../../components/tabbar.vue"
  export default {
    name: 'app',
    components: {Tabs}
  }
</script>

<style>
</style>
