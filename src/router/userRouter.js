// 用户中心路由配置
import Vue from 'vue'
import Router from 'vue-router'
import {commonRoutes,pathFunc} from './commonRouter.js'//alter by  kyy 20180319

const path = require('path')
const _import = (page,file) => () =>
    import (`../views/${page}/${file}.vue`)
Vue.use(Router)
// 使用配置文件规则
let routes=[
     {
    name: "baodan",
    path: "/baodan",
    component: _import("detail","baodan"),
    meta: { keepAlive: false }
  },
  {
    name: "lipei",
    path: "/lipei",
    component: _import("detail","lipei"),
    meta: { keepAlive: false }
  },
  {
    name: "yongli",
    path: "/yongli",
    component: _import("detail","demo1"),
    meta: { keepAlive: false }
  },
  {
    name: "mintui",
    path: "/mintui",
    component: _import("detail","demo2"),
    meta: { keepAlive: false }
  },
  {
    name: "ajaxaccs",
    path: "/ajaxaccs",
    component: _import("user","ajaxdemo"),
    meta: { keepAlive: false }
  },
  {
    name: "more",
    path: "/more",
    component: _import("detail","more"),
    meta: { keepAlive: false }
  }, {
  name: "chanpin",
    path: "/chanpin",
    component: _import("fenlie","chanpin"),
    meta: { keepAlive: false }
}, {
    name: "tongxin",
    path: "/tongxin",
    component: _import("fenlie","tongxin"),
    meta: { keepAlive: false }
  }, {
    name: "wode",
    path: "/wode",
    component: _import("fenlie","wode"),
    meta: { keepAlive: false }
  },
  {
    name: "duihuan",
    path: "/duihuan",
    component: _import("erji","duihuan"),
    meta: { keepAlive: false }
  },
  {
    name: "jijin",
    path: "/jijin",
    component: _import("erji","jijin"),
    meta: { keepAlive: false }
  },
  {
    name: "yiyuan",
    path: "/yiyuan",
    component: _import("erji","yiyuan"),
    meta: { keepAlive: false }
  },
  {
    name: "jindu",
    path: "/jindu",
    component: _import("detail","detail"),
    meta: { keepAlive: false }
  }
  ]

routes=routes.concat(commonRoutes)
const router = new Router({
  history: false,
  routes: routes
})

router.beforeEach(pathFunc);
export default router;
