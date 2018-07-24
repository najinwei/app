import 'babel-polyfill' //解决 某些手机白屏问题
import Vue from 'vue' // 引用vue
import App from './App'// 入口文件为 src/App.vue 文件 所以要引用

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from '@/router/userRouter.js'// 引用路由配置文件
// 引用API文件
// import API from '@/api/API.js'
// Vue.prototype.$api = API  // 将API方法绑定到全局
// const api = new API();
// import $ from 'jquery'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
// 跑起来吧
var abc = new Vue({
  el: '#app',
  router,
  // store,
  api,
  template: '<App/>',
  components: { App }
})
// abc.router = router


