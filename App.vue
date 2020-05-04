<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.getSystemInfo({
			//         success: function(e) {
			//             // #ifndef MP
			//             Vue.prototype.StatusBar = e.statusBarHeight;
			//             if (e.platform == 'android') {
			//                 Vue.prototype.CustomBar = e.statusBarHeight + 50;
			//             } else {
			//                 Vue.prototype.CustomBar = e.statusBarHeight + 45;
			//             };
			//             // #endif
			
			//             // #ifdef MP
			//             Vue.prototype.StatusBar = e.statusBarHeight;
			//             let custom = wx.getMenuButtonBoundingClientRect();
			//             Vue.prototype.Custom = custom;
			//             Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			//             // #endif
			//         }
			//     })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 引入ColorUI 插件css  start*/
	@import url("colorui/main.css");
	@import url("colorui/icon.css");
	@import url("colorui/animation.css");
	/* 引入ColorUI 插件css  end*/
	
	/*每个页面公共css */
	.page {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		/* position: absolute; */
	}
	
	/* 公用样式 模块 背景色*/
	.page-block {
		background-color: #ffffff;
	}
	
	/* 公共样式，分隔线 */
	.line-wapper {
		padding: 0upx 20upx;
	}
	.line {
		height: 1px;
		background-color: #DBDBDA;
	}
</style>
