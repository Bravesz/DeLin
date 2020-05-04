import App from "../../App.vue"


export default {
	data() {
		return {
			// 刷新
			update: true,
			// 数据绑定
			userIsLogin: false,
			userInfo: {},
			allUser: {},
			thisItem:{},
			// userHeader: '',
			// 查询所有用户start
			modalName: null,
			listTouchStart: 0,
			listTouchDirection: null
			// 查询所有用户end
		};
	},
	onShow() {
		var me = this;
		var userInfo = me.getGlobalUser('globalUser');
		if (userInfo != null) {
			me.userIsLogin = true;
			me.userInfo = userInfo;
		} else {
			me.userIsLogin = false;
			me.userInfo = {};
		}
		// var userHeader = me.getGlobalUser('globalUserHeader');
		// me.userHeader = userHeader;
		// var serverUrl = me.serverUrl;
		// me.serverUrl = serverUrl;
	},

	methods: {
		// 修改用户
		update_formSubmit(e){
			var me = this;
			var userHeader = me.getGlobalUser('globalUserHeader');
			var userInfo = me.getGlobalUser('globalUser');
			var serverUrl = me.serverUrl;
			var token = userInfo.token;
			
			var itemID = me.thisItem.userid;
			
			var userId = e.detail.value.userId;
			var loginId = e.detail.value.loginId;
			var fullName = e.detail.value.fullName;
			var pwd = e.detail.value.pwd;
			var state = e.detail.value.state;
			var describe = e.detail.value.describe;
			
			uni.request({
				url: serverUrl + '/api/UserInfo/UpdateUser?userid='+itemID+'&token='+ token,
				method: 'PUT',
				// dataType: 'text/plain',
				header: {
					userid:itemID,
					token:token,
					Cookie: userHeader,
					// 'content-type': "application/x-www-form-urlencoded",
				},
				data: {
					userId: userId,
					loginId: loginId,
					fullName: fullName,
					pwd: pwd,
					state: state,
					describe: describe
				},
				success: res => {
					if (res.data.code == -2) {
						
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							image: '../../static/icos/error.png'
						});
						
					} else {
						
						uni.showToast({
							title: res.data,
			
							duration: 1000,
							image: '../../static/icos/img_recharge_success.png'
						});
						
					}
				},
				complete: () => {
					
					this.getAllUser();
					this.hideModal(this);
			
					console.log('修改后刷新后后刷新了');
				}
			});
		},
		// 点击修改时数据传入弹出模板中
		data2modal(e){
			var me = this;
			
			var item = e.currentTarget.dataset.thisitem;
			
			me.thisItem=item;
						
		},
		// 添加用户
		add_formSubmit(e) {
			var me = this;
			var userHeader = me.getGlobalUser('globalUserHeader');
			var userInfo = me.getGlobalUser('globalUser');
			var serverUrl = me.serverUrl;
			var token = userInfo.token;
			
			var userId = e.detail.value.userId;
			var loginId = e.detail.value.loginId;
			var fullName = e.detail.value.fullName;
			var pwd = e.detail.value.pwd;
			var state = e.detail.value.state;
			var describe = e.detail.value.describe;
			
			uni.request({
				url: serverUrl + '/api/UserInfo/InsertUser?token=' + token,
				method: 'POST',
				// dataType: 'text/plain',
				header: {
					token:token,
					Cookie: userHeader,
				},
				data: {
					userId: userId,
					loginId: loginId,
					fullName: fullName,
					pwd: pwd,
					state: state,
					describe: describe
				},
				success: res => {
					if (res.data.code == -2) {
						
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							image: '../../static/icos/error.png'
						});
						
					} else {
						
						uni.showToast({
							title: res.data,

							duration: 1000,
							image: '../../static/icos/img_recharge_success.png'
						});
						
					}
				},
				complete: () => {
					
					this.getAllUser();
					this.hideModal(this);

					console.log('添加后后刷新了');
				}
			});
		},
		// 删除用户
		userDelete(e) {
			var me = this;
			var userHeader = me.getGlobalUser('globalUserHeader');
			var userInfo = me.getGlobalUser('globalUser');
			var serverUrl = me.serverUrl;

			var userid = e.currentTarget.dataset.userid;
			var token = userInfo.token;
			
			uni.request({
				url: serverUrl + '/api/UserInfo/DeleteUser?userid=' + userid + '&token=' + token,
				method: 'DELETE',
				header: {
					
					token:token,
					Cookie: userHeader,
				},

				// dataType: 'text/plain',
				data: {
					userid: userid,
					token: token
				},
				success: res => {
					
					if (res.data.code == -2) {
						
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							image: '../../static/icos/error.png'
						});
						
					} else {
						
						uni.showToast({
							title: res.data,
							duration: 1000,
							image: '../../static/icos/img_recharge_success.png'
						});
						
					}
				},
				complete: () => {
					
					this.getAllUser();
					
					console.log('删除后刷新了');
				}
			});
		},
		// 所有用户查询
		getAllUser() {
			var me = this;
			// me.update=false;
			// me.allUser = {};
			var userHeader = me.getGlobalUser('globalUserHeader');
			
			var userInfo = me.getGlobalUser('globalUser');
			
			var serverUrl = me.serverUrl;
			
			var token = userInfo.token;
			
			uni.request({
				url: serverUrl + '/api/UserInfo/GetUser?token=' + token,
				// method:"POST",
				// dataType: 'text/plain',
				header: {
					token:token,
					Cookie: userHeader,
					// accept: "text/plain"
				},
				success: allres => {
					
					if (allres.data.code == -2) {
						
						uni.showToast({
							title: allres.data.msg,
							duration: 1000,
							image: '../../static/icos/error.png'
						});
					} else {
						
						var allUser = allres.data;
						me.allUser = allUser;
						// me.update=true;
						console.log(allUser);
						
					}
				}
			});
		},

		// 查询所有用户start
		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStart = e.touches[0].pageX;
		},
		// ListTouch计算方向
		ListTouchMove(e) {
			this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
		},
		// ListTouch计算滚动
		ListTouchEnd(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = e.currentTarget.dataset.target;
			} else {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		},
		// 查询所有用户end

		// 添加用户start
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		}
		// 添加用户end
	}
};