<template>
  <div>
  <section class="floor" dd_name="" v-for = '(item,index) in listData'>
    <h2>
      <a class="title">{{item.hotproductname}}</a>
    </h2>
    <div class="pic"><img class="" :src="item.hotproductpicturelocation" style="width: 25%;">
      <span>{{item.hotproductcontent}}</span>
    </div>
  </section>
  </div>
</template>

<script>
  import API from '../../api/API'
  const api = new API();
    export default {
      data(){
        return{
          listData : [],
        }
      },
      created: function () {
        this.subBtn()
      },
      methods: {
        subBtn() {
          var param = {
            param:""
          }
          let response = api.hot(param);
          response.then((res) => {
           // alert("1")
            console.log(res.data.Data);
            this.listData=this.listData.concat(res.data.Data);
          }).catch((err) => {
            //alert("2")
            console.log(err);

          });
        }
      },
    }
</script>

<style scoped>

</style>
