 /**http配置 */
 // 引入axios以及element ui中的loading和message组件
 import axios from 'axios'
 import { Message,Loading,MessageBox } from 'element-ui'
// 超时时间
axios.defaults.timeout = 25000
// http请求拦截器
var loadinginstace,loading
axios.interceptors.request.use(config => {
  loading = Loading.service({
    lock: true,
    text: '加载中',
    spinner: 'el-icon-loading',
    customClass: 'loading-icon',
    background: 'rgba(0, 0, 0, 0.8)'
  });
  return config
}, error => {
loading.close();
  Message({
    message: '请检查您的网络连接并重试',
    type: 'warning',
    duration: 2000,
    customClass: 'sucMsg',
    center: true
  });
  return Promise.reject(error)
 })
 // http响应拦截器 
 axios.interceptors.response.use(data => {// 响应成功关闭loading
   loading.close();
// console.log(data)
   if(data.data.code=='E000008'){
    MessageBox.alert('您的登录已过期，请重新登录！', {
      confirmButtonHtml: '去登录',//'<router-link to="/login">去登录</router-link>',
      showClose: false,
      callback: action => {
    	// window.location.href = 'user.html#/login'
      }
    })
   }
   
   return data
 }, error => {
    Message({
      message: '请检查您的网络连接并重试',
      type: 'warning',
      duration: 2000,
      customClass: '',
      center: true
    });
   	return Promise.reject(error)
 }) 
export default axios