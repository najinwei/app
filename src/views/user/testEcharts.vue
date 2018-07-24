<template>
  <div class="">
    <barchart :data1="data"></barchart>
    <div class="globalTest">

    </div>
  </div>
</template>

<script>
  import Barchart from '@/components/barchart'
  // import Global from '@/components/global'
  export default {
        name : "echarts",
      components:{Barchart},
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          activeIndex:'3',
          data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        }
      },
      mounted(){

      },
      methods: {

      },
    created(){
    //       console.log(Global.name)
    //   console.log(Global.colorList)
    //   console.log(Global.colorListLength)
    //  getRandColor(data=>{
    //     console.log("===========================")
    //     console.log(data)
    //   })
    }
    }
</script>

<style scoped>
.globalTest{
  width: 200px;
  height: 200px;
  border: 1px solid #000000;
}
</style>
