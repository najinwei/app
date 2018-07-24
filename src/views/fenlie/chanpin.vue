<template>
  <div>
<tabs></tabs>
  <div  v-for = '(item,index) in listData'>
    <div>{{ item.gotourl }}</div>
    <div>{{ item.gotourl1 }}</div>
    <div>{{ item.gotourl2 }}</div>
    <div>{{ item.gotourl3 }}</div>
    <div>{{ item.producthighlight }}</div>
    <div>{{ item.productpictureurl }}</div>
    <div>{{ item.productprice }}</div>
    <div>{{ item.productstate }}</div>
    <div>{{ item.producttag1 }}</div>
    <div>{{ item.producttag2 }}</div>
    <div>{{ item.producttag3 }}</div>
    <div>{{ item.producttitle }}</div>
    <hr/>
  </div>
  </div>
</template>

<script>
  import Tabs from "../../components/dingbu.vue"
  import API from '../../api/API'
  const api = new API();
    export default {
      data(){
        return{
          listData : [],
        }
      },
      created: function () {
        var param = {
          param:""
        }
        let response = api.chanpin(param);
        response.then((res) => {
          alert("1")
          console.log(res.data.Data);
          this.listData=this.listData.concat(res.data.Data);
        }).catch((err) => {
          alert("2")
          console.log(err);

        });
      },
      methods: {

      },
        name: "chanpin",
      components: {Tabs}
    }
</script>

<style scoped>

</style>
