<template>
	<view class="page page-fill">
		<view class="pending-wapper"><image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image></view>

		<view class="notice"><view class="notice-words">* 请从相册中选择等比宽高的图片噢~</view></view>

		<view class="footer-opertor">
			<view class="opertor-words" @click="changePendingFace">重新选择</view>
			<view class="opertor-words" @click="upload">确认上传</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tempface: ''
		};
	},
	onLoad(params) {
		var tempFilePaths = params.tempFilePaths;
		this.tempface = tempFilePaths;
	},
	methods: {
		changePendingFace() {
			var me = this;
			// 重新选择头像
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success(res) {
					var tempFilePaths = res.tempFilePaths[0];
					me.tempface = tempFilePaths;
				}
			});
		},
		upload() {
			var me =this;
			var globalUser = me.getGlobalUser('globalUser');
			uni.showLoading({
				mask:true,
				title:"上传者请稍后"
			});
			uni.uploadFile({
				url:me.serverUrl+"//?userId="+globalUser.id,
				filePath:me.tempface,
				name:'file',
				header:{
					// headerUserId:globalUser.id,
					headerUserToken:globalUser.token
					
				},
				success(res){
					var resData=res.data;
					console.log(resData);
					
				},
				complete() {
					uni.hideLoading();
				}
				
			});
		}
	}
};
</script>

<style>
@import url('meface.css');
</style>
