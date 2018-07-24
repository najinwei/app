import Qs from 'qs';//在 axios中，利用QS包装data数据
const config={
    //  token:r?r:'',
	      url: "http://47.95.114.105/jdp10",// http://localhost:8080/publish/user/ajaxdemo?
      baseURL: '',
      method:'POST',
      transformResponse: [function (data) {
        return data
      }],
      headers: {'Content-Type':'application/json'},
      params: {

	  },
	  paramsSerializer: function(params) {
	    return Qs.stringify(params)
	  },
	data: {
	},
	timeout: 5000,
	withCredentials: false, // default
	responseType: 'json', // default
	onUploadProgress: function (progressEvent) {
//		console.log('onUploadProgress...');
	},
	onDownloadProgress: function (progressEvent) {
//	    console.log('onDownloadProgress...');
	},
	maxContentLength: 10000,
	validateStatus: function (status) {
	    return status >= 200 && status < 300; // default
	},
	maxRedirects: 5 // default
}
export default config
