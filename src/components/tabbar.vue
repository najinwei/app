
<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
      <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
      <router-link :to="{name:'welPage'}" tag="li" exact>
        <div>
          <i class="icon iconfont  icon-weibiaoti1"></i>
        </div>
        <div>首页</div>
      </router-link>
      <router-link :to="{name:'chanpin'}" tag="li">
        <div>
          <i class="icon iconfont icon-weibiaoti11"></i>
        </div>
        <div>产品</div>
      </router-link>
      <router-link :to="{name:'tongxin'}" tag="li">
        <div>
          <i class="icon iconfont icon-tongxunlu"></i>
        </div>
        <div>通讯录</div>
      </router-link>
      <router-link :to="{name:'wode'}" tag="li">
        <div>
          <i class="icon iconfont icon-wode"></i>
        </div>
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" type="text/less">
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: table;
      width: 100%;
      & > li {
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 8px 12px;
        cursor: pointer;
        &.router-link-active{
          color: #D0021B;
        }
        & > div {
          font-size: 14px;
          & > i {
            font-size: 30px;
          }
        }
      }
    }
  }
</style>
