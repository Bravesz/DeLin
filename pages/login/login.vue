<template>
	<view class="page page-fill">
		<scroll-view :scroll-y="modalName == null" class="page" :class="modalName != null ? 'show' : ''">
			<!-- 表头 -->
			<view class="header">
				<!-- 用户头像 -->
				<view v-if="userIsLogin"><image src="../../static/icos/108x108.png" class="face"></image></view>
				<view v-else><image src="../../static/233.png" class="face"></image></view>
				<!-- 用户名称 ID -->
				<view v-if="userIsLogin" class="info-wapper">
					<!-- 已登录 -->
					<view class="nickname">{{ userInfo.fullname }}</view>
					<view class="nav-info">{{ userInfo.rolename }}</view>
				</view>
				<view v-else>
					<!-- 未登录 -->
					<view class="nickname regist-login"><navigator url="../registLogin/registLogin">注册/登录</navigator></view>
				</view>

				<!-- 系统设置 -->
				<view v-if="userIsLogin" class="set-wapper">
					<navigator url="../meInfo/meInfo"><image src="../../static/icos/settings.png" class="settings"></image></navigator>
				</view>
			</view>
			<!-- 未登录隐藏 strat-->
			<view v-if="userIsLogin">
				<!-- 查询 添加 按钮 start -->
				<view class="cu-bar bg-white solid-bottom margin-top">
					<!-- 查询所有按钮 -->
					<view class="action" @click="getAllUser">
						<text class="cuIcon-title text-orange "></text>
						点击查看成员列表
					</view>
					<!-- 添加成员按钮 -->
					<view class="action"><button class="cu-btn bg-green shadow" @tap="showModal" data-target="DialogModal1">添加用户</button></view>
				</view>
				<!-- 查询 添加end -->

				<!-- 添加用户详表start -->
				<view class="cu-modal" :class="modalName == 'DialogModal1' ? 'show' : ''">
					<view class="cu-dialog">
						<form @submit="add_formSubmit">
							<view class="cu-bar bg-white justify-end">
								<view class="content">添加新用户</view>
								<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
							</view>
							<view class="padding-xl">
								<view class="add-new-user">
									<label class="words-lbl">用户Id:</label>
									<input name="userId" type="text" value="" placeholder="请输入用户Id" placeholder-class="graywords" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">登录Id:</label>
									<input name="loginId" type="text" value="" placeholder="请输入登录Id" placeholder-class="graywords" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">全名:</label>
									<input name="fullName" type="text" value="" placeholder="请输入全名" placeholder-class="graywords" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">密码:</label>
									<input name="pwd" type="text" value="" placeholder="请输入密码" placeholder-class="graywords" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">状态:</label>
									<input name="state" type="number" value="" placeholder="请输入状态" placeholder-class="graywords" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">描述:</label>
									<input name="describe" type="text" value="" placeholder="请输入描述" placeholder-class="graywords" />
								</view>
							</view>
							<view class="cu-bar bg-white justify-end">
								<view class="action">
									<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
									<button class="cu-btn bg-green margin-left" form-type="submit">确定</button>
								</view>
							</view>
						</form>
					</view>
				</view>
				<!--添加用户详表end  -->

				<!-- 用户列表刷新start -->
				<!-- <view v-if="update"> -->
				<view class="cu-list menu-avatar">
					<view
						class="cu-item"
						:class="modalName == 'move-box-' + index ? 'move-cur' : ''"
						v-for="(item, index) in allUser"
						:key="index"
						@touchstart="ListTouchStart"
						@touchmove="ListTouchMove"
						@touchend="ListTouchEnd"
						:data-target="'move-box-' + index"
					>
						<view
							class="cu-avatar round lg"
							:style="[{ backgroundImage: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100' + (index + 2) + '.jpg)' }]"
						></view>
						<view class="content">
							<view class="text-grey">用户名：{{ item.fullname }}</view>
							<view class="text-gray text-sm">
								<text class="cuIcon-infofill text-red  margin-right-xs"></text>
								密码：{{ item.pwd }}
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">state</view>
							<view class="cu-tag round bg-grey sm">{{ item.state }}</view>
						</view>
						<view class="move">
							<view class="bg-grey" @click="data2modal" @tap="showModal" data-target="DialogModal2" :data-thisitem="item">修改</view>
							<view class="bg-red" @click="userDelete" :data-userid="item.userid">删除</view>
						</view>
					</view>
				</view>

				<!-- 用户列表刷新end -->

				<!-- 修改用户详表start -->
				<view class="cu-modal" :class="modalName == 'DialogModal2' ? 'show' : ''">
					<view class="cu-dialog">
						<form @submit="update_formSubmit">
							<view class="cu-bar bg-white justify-end">
								<view class="content">修改</view>
								<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
							</view>
							<view class="padding-xl">
								<view class="add-new-user">
									<label class="words-lbl">用户Id:</label>
									<input name="userId" type="text" :value="thisItem.userid" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">登录Id:</label>
									<input name="loginId" type="text" :value="thisItem.loginid" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">全名:</label>
									<input name="fullName" type="text" :value="thisItem.fullname" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">密码:</label>
									<input name="pwd" type="text" :value="thisItem.pwd" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">状态:</label>
									<input name="state" type="number" :value="thisItem.state" />
								</view>
								<view class="add-new-user">
									<label class="words-lbl">描述:</label>
									<input name="describe" type="text" :value="thisItem.describe" />
								</view>
							</view>
							<view class="cu-bar bg-white justify-end">
								<view class="action">
									<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
									<button class="cu-btn bg-green margin-left" form-type="submit">确定</button>
								</view>
							</view>
						</form>
					</view>
				</view>
				<!--修改用户详表end  -->
			</view>
			<!-- 未登录隐藏 end-->
		</scroll-view>
	</view>
</template>

<script>
import login from './login.js';
export default login;
</script>

<style>
@import url('login.css');

/* 查询所有用户start  */
/* 页面隐藏 */
.page.show {
	overflow: hidden;
}
/* 查询所有用户end */
/* 添加用户start */
/* 默认输入文字 */
.graywords {
	color: #eaeaea;
}
.add-new-user {
	display: flex;
	flex-direction: row;
	border-bottom: solid 1px #dbdbda;
	margin-bottom: 20upx;
}
.words-lbl {
	width: 100upx;
	border: solid 1px #dbdbda;
	color: #808080;
}
/* 添加用户end */
</style>
