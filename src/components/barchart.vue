<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
import echarts from 'echarts'
    export default {
      name : "barchart",
      props:{
        data1:{
          type:Array
        }
      },
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          activeIndex:'3',
          title:{ text: '在Vue中使用echarts' },
          yData:[5, 20, 36, 10, 10, 20]
        }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          // let myChart = this.$echarts.init(document.getElementById('myChart'))
          let myChart = echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title: this.title,
            tooltip: {},
            xAxis: {
              data:this.data1
              // data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]

            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: this.yData
            }]
          });
        }
      }
    }
</script>

<style scoped>

</style>
