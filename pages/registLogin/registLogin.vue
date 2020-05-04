<template>
	<view class="body">
		<form @submit="formSubmit">
			<!-- 头像 -->
			<view class="face-wapper"><image src="../../static/icos/default-face.png" class="face"></image></view>

			<!-- 账户 -->
			<view class="info-wapper">
				<label class="words-lbl">账户</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords" />
			</view>

			<!-- 密码 -->
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords" />
			</view>

			<!-- 注册/登录按钮 -->
			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>

		<!-- 第三方登录H5不支持，所以隐藏掉 -->
		<!-- #ifndef H5 -->
		<view class="third-wapper">
			<view class="third-line">
				<view class="single-line"><view class="line"></view></view>

				<view class="third-words">第三方账号登录</view>

				<view class="single-line"><view class="line"></view></view>
			</view>

			<view class="third-icos-wapper">
				<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
				<!-- #ifdef APP-PLUS -->
				<image src="../../static/icos/weixin.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
				<image src="../../static/icos/QQ.png" data-logintype="qq" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
				<image src="../../static/icos/weibo.png" data-logintype="sinaweibo" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<button open-type="getUserInfo" @getuserinfo="wxLogin" class="third-btn-ico"></button>
				<!-- #endif -->
			</view>
		</view>
		<!-- #endif -->
		
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		formSubmit(e) {
			var me = this;
			var username = e.detail.value.username;
			var password = e.detail.value.password;
			// console.log(username);
			// console.log(password);
			//发起注册/登录请求
			var serverUrl = me.serverUrl;
			uni.request({
				url: serverUrl + '/api/Login/LoginTest',
				data: {
					loginName: username,
					password: password,
					code: 'string'
				},
				// dataType: 'text/plain',
				method: 'POST',
				success: res => {
					// 获取真实数据之前，务必判断状态是否为
					if (res.data.code == 0) {
						var userinn =res.data;
						console.log(userinn);
						var userInfo = res.data.data;
						var userHeader =res.header['Set-Cookie'];
						console.log(userInfo);

						// 保存用户请求头set-cookie
						uni.setStorageSync('globalUserHeader', userHeader);
						// 保存用户信息到全局的缓存中						
						uni.setStorageSync('globalUser', userInfo);
						// 切换页面跳转，使用tab切换的api
						uni.switchTab({
							url: '../login/login'
						});
						// uni.navigateTo({
						// 	url: '../login/login'
						// });
						// debugger;
					} else if (res.data.code == -1) {
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							image: '../../static/icos/error.png'
						});
					} else if (res.data.code == -2) {
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							image: '../../static/icos/error.png'
						});
					}
				}
			});
		},
		// 在微信小程序端实现微信登录
		wxLogin(e) {
			var me = this;
			// console.log(e);
			// 通过微信开发能力，获得微信用户的基本信息
			var userInfo = e.detail.userInfo;

			// 实现微信登录
			uni.login({
				provider: 'weixin',
				success(loginResult) {
					// 获得微信登录的code：授权码
					var code = loginResult.code;
					uni.request({
						url: me.serverUrl + '',
						method: 'POST',
						data: {},
						success(userResult) {
							// console.log(userResult);
							var userInfo = userResult.data.data;
							// 保存用户信息到全局的缓存中
							uni.setStorageSync('globalUser',userInfo);
							// 切换页面跳转，使用tab切换的api
							uni.switchTab({
								url: '../login/login'
							});
						}
					});
				}
			});
		},
		appOAuthLogin(e) {
			//获取用户登录类型：微信、QQ、微博。
			var loginType = e.currentTarget.dataset.logintype;

			//授权登录
			uni.login({
				provider: loginType,
				success(loginRes) {
					//授权登录成功以后获取用户的信息
					uni.getUserInfo({
						provider: loginType,
						success(info) {
							var userInfo = info.userInfo;
							//因为各个平台的key不同，这个统一自定义存储
							var face = '';
							var nickname = '';
							var openIdorUid = '';

							//用户信息获取
							//微信用户信息获取
							if (loginType == 'weixin') {
								face = userInfo.avatarUrl;
								nickname = userInfo.nickName;
								openIdorUid = userInfo.openId; //这个openId注意I是大写
							}
							// QQ用户信息获取
							else if (loginType == 'qq') {
								face = userInfo.figureurl_qq_2;
								nickname = userInfo.nickname;
								openIdorUid = userInfo.openId; //这个openId注意I是大写
							}
							// 微博用户信息获取
							else if (loginType == 'sinaweibo') {
								face = userInfo.avatar_large;
								nickname = userInfo.nickname;
								openIdorUid = userInfo.id; //这个openId注意I是大写
							}

							//调用开发者后台，执行一键注册或登录
							uni.request({
								url: me.serverUrl + '/appUnionLogin/' + loginType,
								data: {
									face: face,
									nickname: nickname,
									openIdorUid: openIdorUid
								},
								success(result) {
									if(result.data.status==200){
										var userInfo =result.data.data;
										uni.setStorageSync('globalUser',userInfo);
										// 切换页面跳转，使用tab切换的api
										uni.switchTab({
											url: '../login/login'
										});
										
									}
								}
							});
						}
					});
				}
			});
		}
	}
};
</script>

<style>
@import url('registLogin.css');
</style>
