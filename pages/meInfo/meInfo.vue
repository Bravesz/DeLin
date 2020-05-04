<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view class="info-words">头像</view>

				<view class="right-wapper">
					<!-- <image :src="globalUser.faceImage" class="face"></image>  有数据时改 -->
					<image class="face"></image>
					<view class="arrow-block"><image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>

			<!-- 昵称 -->
			<view class="item-wapper" @click="modifyNickname">
				<view class="info-words">昵称</view>

				<view class="right-wapper">
					<view class="gray-fields">{{ globalUser.fullname }}</view>
					<view class="arrow-block"><image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>

			<!-- 生日 -->
			<view class="item-wapper" @click="modifyBirthday">
				<view class="info-words">生日</view>

				<view class="right-wapper">
					<view class="gray-fields"><!-- {{ globalUser.birthday }} 有数据时改--></view>
					<view class="arrow-block"><image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>

			<!-- 性别 -->
			<view class="item-wapper" @click="modifySex">
				<view class="info-words">性别</view>

				<view class="right-wapper">
					<view class="gray-fields">
						<!-- <view v-if="globalUser.sex == 1">男</view>
						<view v-else-if="globalUser.sex == 0">女</view>
						<view v-else>未选择</view> 有数据时改-->
					</view>
					<view class="arrow-block"><image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image></view>
				</view>
			</view>
		</view>

		<view class="footer-wapper">
			<view class="footer-words" @click="cleanStorage">清理缓存</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			globalUser: {}
		};
	},
	onShow() {
		var me = this;
		var globalUser = me.getGlobalUser('globalUser');
		me.globalUser = globalUser;
		// debugger;
	},
	methods: {
		operator() {
			var me = this;
			var globalUser = me.getGlobalUser('globalUser');
			uni.showActionSheet({
				itemList: ['查看我的头像', '拍照', '从相册选择上传'],
				success(res) {
					var index = res.tapIndex;
					if (index == 0) {
						// 预览头像
						var faceArr = [];
						faceArr.push(globalUser.faceImage);
						uni.previewImage({
							urls: faceArr,
							current: faceArr[0]
						});
					} else if (index == 1) {
						// 拍照
						uni.chooseImage({
							count: 1,
							sizeType: ['original', 'compressed'],
							sourceType: ['camera'],
							success: chooseImageRes => {
								var tempFilePaths = chooseImageRes.tempFilePaths[0];
								uni.uploadFile({
									url: me.serverUrl + '',
									filePath: tempFilePaths,
									name: 'file',
									formData: {
										user: globalUser.user
									},
									success: UploadFileResult => {
										if (UploadFileResult.data.code == 0) {
											uni.showToast({
												title: UploadFileResult.data.msg,
												duration: 1000,
												image: '../../static/icos/error.png'
											});
										} else if (UploadFileResult.data.code == 1) {
											uni.showToast({
												title: UploadFileResult.data.msg,
												duration: 1000,
												image: '../../static/icos/error.png'
											});
										}
									}
								});
							}
						});
						// 页面跳转
						uni.navigateTo({
							url: '../meface/meface'
						});
					} else if (index == 2) {
						// 上传头像
						uni.chooseImage({
							count: 1,
							sizeType: ['original', 'compressed'],
							sourceType: ['album'],
							success(res) {
								var tempFilePaths = res.tempFilePaths[0];
								uni.navigateTo({
									url: '../meface/meface?tempFilePaths=' + tempFilePaths
								});
							}
						});
						// 页面跳转
						uni.navigateTo({
							url: '../meface/meface'
						});
					}
				}
			});
		},
		cleanStorage() {
			uni.clearStorageSync();
			uni.showToast({
				title: '清理缓存成功',
				mask: false,
				duration: 1500
			});
		},
		logout() {
			var globalUser = this.getGlobalUser('globalUser');
			// var serverUrl = this.serverUrl;
			// 通知服务器退出账户
			// uni.request({
			// 	url: serverUrl + '/api/Login/Loginout',
			// 	data: {
			// 		loginName: username,
			// 		password: password,
			// 		code: 'string'
			// 	},
			// 	method: 'POST',
			// 	success: res => {
			// 		if (res.data.code == 0) {
			// 			//如果服务器返回200
			// 			// 客户端缓存清理
			// 			uni.removeStorageSync("globalUser")
			// 			//跳转至我的页面
			// 			uni.switchTab({
			// 				url:"../login/login"
			// 			})
			// 		};
			// 	}
			// });
			// 客户端缓存清理
			uni.removeStorageSync('globalUser');
			//跳转至我的页面
			uni.switchTab({
				url: '../login/login'
			});
		}
	}
};
</script>

<style>
@import url('meInfo.css');
</style>
