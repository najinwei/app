<template>
  <div class="hello">
    <div class="index-right">
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2><router-link class="button" :to="{name:item.id}">{{ item.title }}</router-link></h2>
            <div class="index-board-button">
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 @click=" huancun()">缓存</h3>
    <child message="hello" ></child>
    <h3><router-link class="button" :to="{name:'yongli'}">原生用例</router-link></h3>
    <button>  <a
      href="https://www.baidu.com/"
    >跳转</a></button>
    <h3><router-link class="button" :to="{name:'mintui'}">mintui的各种用例</router-link></h3>
    <h3><router-link class="button" :to="{name:'ajaxaccs'}">ajax调用用例</router-link></h3>
  </div>
</template>

<script>
  import child from '../detail/child'
  export default {
    methods: {
      huancun() {
        sessionStorage.setItem("huancun", "缓存");
        this.$router.push({path: '/baodan'})
      }

    },



    components: {// 引入组件时，需要写的
      // commonPart
      child
    },
    data () {

      return {
        boardList: [
          {
            title: '保单服务',
            id: 'baodan',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '理赔',
            id: 'lipei',
            toKey: 'count',
            saleout: false
          },
          {
            title: '服务进度',
            id: 'jindu',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '基金管理',
            id: 'jijin',
            toKey: 'publish',
            saleout: false
          },
          {
            title: '保单查询',
            id: 'chaxun',
            toKey: 'chaxun',
            saleout: true
          },
          {
            title: '联系我们',
            id: 'lianxi',
            toKey: 'lianxi',
            saleout: true
          },
        ],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/css/common.css');

  h1, h2 ,h3{
    font-weight: normal;
    width: 100%;
  }
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-baodan .index-board-item-inner{
    background: url(../../assets/images/1.png) no-repeat;
  }
  .index-board-lipei .index-board-item-inner{
    background: url(../../assets/images/2.png) no-repeat;
  }
  .index-board-jindu .index-board-item-inner{
    background: url(../../assets/images/3.png) no-repeat;
  }
  .index-board-jijin .index-board-item-inner{
    background: url(../../assets/images/4.png) no-repeat;
  }
  .index-board-chaxun .index-board-item-inner{
    background: url(../../assets/images/3.png) no-repeat;
  }
  .index-board-lianxi .index-board-item-inner{
    background: url(../../assets/images/4.png) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .index-board-item{

    width: 50%;
    height: 50%;

    display: inline-block;
  }
</style>
