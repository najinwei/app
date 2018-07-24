<template>
  <div>
    <button @click="PhotoAlbumBTClick()" >相册
    </button>
    <button @click="cameraBTClick()" >相机
    </button>
    <h1>{{msg}}</h1>
    <textarea id ="returnValue" type="value" rows="5" cols="40">
        </textarea>
  </div>
</template>

<script>
  //import appController from "../../utils/appController";
  // import Cordova from "../../modules/utils/cordova";
  //var Cordova    = require('../../modules/utils/cordova');
  export default {

    methods: {
      /* huancun() {
         window.getImage = function(image){
           imageKe ="1"
         }.bind(this);
       }*/

      cameraBTClick(){
        cordova.exec(successFunction, failFunction, "Plugin", "myMethod", ["调用相机"]);
      },
      PhotoAlbumBTClick(){
        cordova.exec(failFunction, failFunction, "Plugin", "myMethod", ["查看相册"]);
      },

      failFunction(error){
        alert("error");
        document.getElementById("returnValue").value = img;
      },
      successFunction(img){
        document.getElementById("returnValue").value = img;
        document.getElementById("2").innerHTML = "![]("+img+")"
      }
    },
    name: 'HelloWorld',
    data () {
      return {
        msg:this.imageKe
      }
    }
  }


</script>

<style scoped>

</style>
