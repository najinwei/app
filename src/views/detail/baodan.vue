<template>

  <div>
    <title>保单中心</title>
  <ul>
    <li  v-for="item in boardList">
       <span>保单号</span>&ensp; &ensp; &ensp; &ensp; <span >{{item.ContNo}}</span>
      <div>
          <span>保费</span>&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;<span>{{item.money}}</span>
      </div>
      <div>
        <span>保险状态</span>&ensp; &ensp; &ensp; <span>{{item.ClaimStatus}}</span>
      </div>
      <div>
        <span>主线名称</span>&ensp; &ensp; &ensp;  <span>{{item.RiskName}}</span>
      </div>
      <div>
        <span>生效日期</span>&ensp; &ensp; &ensp;  <span>{{item.time}}</span>
      </div>
    </li>
  </ul>
    <h3>{{huancun}}</h3>
    <h3 @click="back">返回上级</h3>
  </div>

</template>

<script>

    export default {

      data () {
      var  huancun= sessionStorage.getItem("huancun");
        return {
          huancun,
          boardList: [
            {
              ContNo: '111111',
              money: '22',
              ClaimStatus:'1',
              RiskName: '人寿',
              time: "2010222"
            },
            {
              ContNo: '2222',
              money: '33',
              ClaimStatus:'2',
              RiskName: '车险',
              time: "2009"
            },
            {
              ContNo: '555',
              money: '4444',
              ClaimStatus:'6',
              RiskName: '医疗保险',
              time: "20081111"
            },
          ],
        }
      },
      methods:{
        back() {
          this.$router.go( -1 )
        }
      }
    }
</script>

<style scoped>

</style>
