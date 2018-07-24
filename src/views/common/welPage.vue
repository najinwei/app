<template>
<body>
  <div class="index-wrap">
    <section id="wrapper">
     <slide-show :slides="slides" :inv="invTime"></slide-show>

    <ul class="index-nav" dd_name="首页功能区">
      <li><a href="" dd_name="分类"><img class="" src="../../assets/images/image/fenlei.png"><span>保单服务</span></a></li>
      <li><a href="" dd_name="立减5元"><img class="" src="../../assets/images/image/xiazai-0605.png"><span>理赔</span></a></li>
      <li><a href="" dd_name="购物车"><img class="" src="../../assets/images/image/gouwuche.png"><span>服务进度</span></a></li>
      <li><a href="" dd_name=""><img class="" src="../../assets/images/image/wodedangdang-h5.png"><span>基金管理</span></a></li>
      <li><a href="" dd_name="9块9"><img class="" src="../../assets/images/image/9.9.png"><span>保单查询</span></a></li>
      <li><router-link :to="{name:'more'}"><img class="" src="../../assets/images/image/dianzihsu.png"><span>更多</span></router-link></li>
    </ul>
    <section class="seckilling" dd_name="首页秒杀区">
      <div class="seckilling-box">
        <div class="seckilling-title">
          <span class="seckilling-name">续期保单提醒</span>
          <span class="seckilling-icon"></span>
          <div class="seckilling-content" data-widget="countdown" data-end-time="1444381201" data-left-time="12191" data-is-begin="0">

          </div>
        </div>
        <div class="seckilling-con" id="seckill_index">
          <ul class="clearfix">
            <li>
              <div class="c_div" style="
    width: 100px;
    height:  160px;
 border:1px dashed #000;
">
                <h1>11</h1>
                <div>1111</div>
                <div>1111</div>
                <div>1111</div>
              </div></li>
            <li>
              <div class="c_div" style="
    width: 100px;
    height:  160px;
  border:1px dashed #000;
">
                <h1>11</h1>
                <div>1111</div>
                <div>1111</div>
                <div>1111</div>
              </div></li>
            <li>
              <div class="c_div" style="
    width: 100px;
    height:  160px;
   border:1px dashed #000;
">
                <h1>11</h1>
                <div>1111</div>
                <div>1111</div>
                <div>1111</div>
              </div></li>
          </ul>
        </div>
      </div>
    </section>
      <section class="banner" dd_name="楼间推荐区">
        <div class="seckilling-box">
          <div class="seckilling-title">
            <span class="seckilling-name">汇率展示</span>
            <span class="seckilling-icon"></span>
            <div class="seckilling-content" data-widget="countdown" data-end-time="1444381201" data-left-time="12191" data-is-begin="0">

            </div>
          </div>
          <div class="seckilling-con" id="seckill_index">
            <ul class="clearfix">
              <li>
                <div class="c_div" style="
    width: 100px;
    height:  160px;
   border:1px dashed #000;
">
                  <h1>11</h1>
                  <div>1111</div>
                </div></li>
              <li>
                <div class="c_div" style="
   width: 100px;
    height:  160px;
   border:1px dashed #000;
">
                  <h1>11</h1>
                  <div>1111</div>
                </div></li>
              <li>
                <div class="c_div" style="
  width: 100px;
    height:  160px;
   border:1px dashed #000;
">
                  <h1>11</h1>
                  <div>1111</div>
                </div></li>
            </ul>
          </div>
        </div>
      </section>

    </section>
  </div>
<remen></remen>
</body>
</template>

<script>
 /* import slideShow from '../../views/detail/slideShow'
  import remen from '../../views/detail/remen'
  import API from '../../api/API'
  const api = new API();
  export default {
    data () {
      return {
        invTime: 2500,
        slides: [
          {
            picturelocation:"",
            picturegoto:"",
            picturename:""
          }
        ],
      }
    },
    created: function () {
      var param = {
        param:""
      }
      let response = api.pircture(param);
      response.then((res) => {
       // alert("1")
        console.log(res.data.Data);
        if(res.data.Data.length>0){
          this.slides=[];
        }
        this.slides=this.slides.concat(res.data.Data);
       // alert(JSON.stringify(this.slides))

      }).catch((err) => {
       // alert("2")
        console.log(err);

      });
    },

    methods: {

    },
    components: {
      slideShow,
      remen
    },

  }*/
</script>

<style scoped>
  /*@import url('../../assets/css/first/common.css');
  @import url('../../assets/css/first/first.css');*/
  html, body {
    width: 100%;
    height: 100%;
  }
  html, body {
    font-size: 20px;
  }
  .index-nav {
    overflow: hidden;
    margin: -24px -4.75rem;
    background-color: #fff;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .index-nav li {
    display: inline-block;
    width: 30%;
    height: 3.35rem;
    padding: .1rem 0;
  }
  a {
    color: #4d525d;
    text-decoration: none;
  }
  .index-nav li img {
    display: block;
    margin: .25rem auto;
    width: 1.85rem;
    height: 1.85rem;
  }
  .index-nav li span {
    display: block;
    font-size: .55rem;
    text-align: center;
  }
  .seckilling-name{
    line-height: 6.9rem;
  }
  #seckill_index ul{
    padding: 0px;
  }
  #seckill_index li{
    list-style: none;
    /* margin-right: 20px; */
    width: 100px;
    display: inline-block;
    margin:0;list-style:none
  }

</style>
