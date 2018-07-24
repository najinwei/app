<template>
  <div>
<button @click=" subBtn()">ajax用例</button>
  <div  v-for = '(item,index) in listData'>
    <div>{{ item.picturename }}</div>
    <div>{{ item.picturelocation }}</div>
    <div>{{ item.picturegoto }}</div>
  </div>
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
      methods: {
        subBtn() {
            var param = {
              param:""
            }
            let response = api.pircture(param);
            response.then((res) => {
              alert("1")
              console.log(res.data.Data);
              this.listData=this.listData.concat(res.data.Data);
            }).catch((err) => {
              alert("2")
              console.log(err);

            });
        }
      },

    }

</script>

<style scoped>

</style>
