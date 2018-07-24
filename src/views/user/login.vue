<template lang="html">
  <div class="login">
		 <section>
		 	<div class="logTop">富通保险</div>
		 	<form @keydown.enter="subBtn()">
		 		<div class="form-group">
					<label></label>
					<input type="text" class="form-control" v-model="uname">
				</div>
				<div class="form-group">
					<label>密码</label>
					<input type="password" class="form-control" v-model="upass">
				</div>
				<div class="twobtn">
					<input type="button" class="btn btn-primary" @click="subBtn()" value="提交">
					<input type="button" class="btn btn-primary" @click="resetBtn" value="重置">
				</div>
		 	</form>
       <div class="test" @click="back">
        <h1>开发中</h1>
        <h1>点击返回</h1>
        <h1>点击返回</h1>
      </div>
		 </section>
	</div>

</template>

<script>
// import $ from 'jquery'
import API from '../../api/API'
import config from '../../api/config'
const api = new API();
import { Message } from 'element-ui';
export default {
  data () {
    return {
      uname:'the_dog',//用户名
      upass:'111111',//密码 pass1234
    }
  },
  created(){

  },
  mounted(){
    sessionStorage.clear()
	 $('.login').height($('html').height());
  },
  methods:{
  	 subBtn(){
  	 	if(this.uname!=''&&this.upass!=''){
  	 		var param={
  	 			"password": this.upass,
  				"username": this.uname
  	 		}
			let response = api.Loginpub(param);
    		response.then((res)=>{
    			console.log(res);
    			if(res.status==200&&res.data.code==1){
    				if(typeof res.data.data=='string'){
              console.log('存用户token！！');
    					sessionStorage.setItem('userToken',res.data.data);//存用户token
    					setTimeout(()=>{
                console.log('去表格！！');
                this.$router.push({ name: 'testEcharts', params: { userId: res.data.data }})
    					},500)

    				}else{
    					Message(res.data.data.descMessage);
    				}
    			}
    		}).catch((err)=>{ console.log(err); });
  	 	}else{ Message('用户名或密码不能为空') }
  	},
  	resetBtn(){
  		this.uname='';
  		this.upass='';
    },
    back() {
      this.$router.go( -1 )
    }
  }
}
</script>

<style lang="scss" >
//   @import url('../../assets/css/partUser.css')
  .test{
    display: flex;
    flex-flow: column;
    &-header{
      background: #fff;
      font-size: .18rem;
      span{
        display: inline-block;
        line-height: .4rem;
      }
      .icon{
        left: .2rem;
        position: fixed;
        left: .2rem;
      }
    }
  }
  .video{
    width: 100%;
    object-fit: contain;
    border: 1px solid;
  }
  .login{
	 background-color: #2b3b49;
}
section{
	height: 100%;
	width: 300px;
	margin: 0 auto;
}
.logTop{
	text-align: center;
	color: #fff;
	width: 100%;
	font-size: 1.16rem;
	padding-top: 30%;
	padding-bottom: 20%;
}
section form{
	height: 60%;
	width: 100%;
	background-color: #f8f8f8;
	padding: 0.83rem;
	padding-top: 1.38rem;
}
.twobtn{
	display: flex;
	justify-content: space-between;
	padding-top: 10%;
}
.twobtn button{width: 45%; background-color: #2b3b49; color: #fff;}
</style>
