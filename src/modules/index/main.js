import 'babel-polyfill' //解决 某些手机白屏问题
import Vue from 'vue' // 引用vue
import App from './App'// 入口文件为 src/App.vue 文件 所以要引用

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
// 按需引入部分组件事例
/*import { Cell, Checklist } from 'minu-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist)*/
import router from '@/router/userRouter.js'// 引用路由配置文件
// 引用API文件
// import api from '@/api/API.js'
// Vue.prototype.$api = api  // 将API方法绑定到全局
// 跑起来吧
var abc = new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
// abc.router = router


