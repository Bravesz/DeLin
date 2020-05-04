<template>
	<view class="page page-fill">
		<scroll-view :scroll-y="modalName == null" class="page" :class="modalName != null ? 'show' : ''">
			<!-- 导航条start -->
			<view>
				<scroll-view scroll-x class="bg-green nav text-olive fixed">
					<view class="cu-item" :class="0 == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="0">
						<text class="cuIcon-order"></text>
						待我处理
					</view>
					<view class="cu-item" :class="1 == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="1">
						<text class="cuIcon-safe"></text>
						已完成
					</view>
				</scroll-view>
			</view>
			<!-- 导航条end -->

			<!-- 用户列表刷新start -->
			<view class="cu-list menu-avatar " style="margin-top: 90upx;">
				<view
					class="cu-item "
					:class="modalName == 'move-box-' + index ? 'move-cur' : ''"
					v-for="(item, index) in businessApprovalData"
					:key="index"
					@touchstart="ListTouchStart"
					@touchmove="ListTouchMove"
					@touchend="ListTouchEnd"
					:data-target="'move-box-' + index"
				>
					<view
						class="cu-avatar round xs"
						:style="[{ backgroundImage: 'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100' + (index + 2) + '.jpg)' }]"
					></view>

					<view class="margin-right-xs xs">
						<view class="text-bold text-orange">发起人:</view>
						<view class="text-blue">{{ item.applicant }}</view>
					</view>
					<view class="solids-bottom padding-xs flex align-center text-cut lg">
						<view class="flex-sub text-center">
							<view class="solid-bottom text-df text-red text-cut">{{item.application_title}}</view>
							<view class="text-cut ">{{item.application_instructions}}</view>
						</view>
					</view>

					<view class="move"><view class="bg-blue sm" @click="openBusinessApprovalModal" :data-thisitem="item">点击处理</view></view>
				</view>
			</view>

			<!-- 用户列表刷新end -->
		</scroll-view>
	</view>
</template>

<script>
import msg from './msg.js';
export default msg;
</script>

<style></style>
