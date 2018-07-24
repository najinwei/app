import config from './config'
import axios from './http'
import qs from 'qs'
import Vue from 'vue'

Vue.prototype.$axios = axios;
class API {
	//==========================康燕燕=========
/*	Loginpub(param) {  // 登录
	    config.data = param;
    	return axios.post(config.url+'/user/login',{},config);
  	}
	Logoutpub(param) {  // 注销
	    config.data = param;
    	return axios.post(config.url+'/user/logout',{},config);
  	}
	changepsw(param) { // 修改密码
 		let url=config.url+param;
	    return axios.get(url,{},config);
	  }*/
  Loginpub(param) {  //
    config.data = param;
    console.log(config.url);
    return axios.post(config.url+'/indexInfo/hotProduct/queryAll',{},config);
  }
  pircture(param) {  //
    config.data = param;
    console.log(config.url);
    return axios.get(config.url+'/indexInfo/queryAllSlideShow',{},config);
  }
    hot(param) {  //
  config.data = param;
  console.log(config.url);
  return axios.get(config.url+'/indexInfo/queryAllHotProduct',{},config);
}
  chanpin(param) {  //
    config.data = param;
    console.log(config.url);
    return axios.get(config.url+'/product/queryAll',{},config);
  }
  //===nnn
}
export default API;
