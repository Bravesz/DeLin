import Vue from 'vue'
import App from './App'
// 导入colorui的导航栏
// import cuCustom from './colorui/components/cu-custom.vue'
// Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false;

//挂载公用常量
Vue.prototype.serverUrl = "http://192.168.128.189:52952";
//存储用户登录信息
Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync(key);
	if (userInfo != null && userInfo != '' && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
};
Vue.prototype.getGlobalAllUser = function(key) {
	var allUser = uni.getStorageSync(key);
	if (allUser  != null && allUser  != '' && allUser  != undefined) {
		return allUser;
	} else {
		return null;
	}
};
App.mpType = 'app';

const app = new Vue({
	...App
});
app.$mount();
