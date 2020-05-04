<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">时间轴</block></cu-custom> -->
		<!-- 发起人start -->
		<view class="cu-timeline">
			<view class="cu-time" style="width: 140upx;">{{ baData.application_time }}</view>
			<view class="cu-item cur cuIcon-noticefill text-green">
				<text>发起人</text>
				<view class="content shadow-blur">
					<text>申请编号：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.id }}</text>
					</view>

					<text>部门：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.department }}</text>
					</view>
					<text>申请人：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.applicant }}</text>
					</view>
					<text>申请金额：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.Amount }}</text>
					</view>
					<text>供应方名称：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.supplier_name }}</text>
					</view>
					<text>申请日期：</text>
					<view class="content bg-blue shadow-blur margin-bottom-sm">
						<text>{{ baData.application_time }}</text>
					</view>
					<text>申请说明：</text>
					<view class="content bg-orange shadow-blur ">
						<text>{{ baData.application_instructions }}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 发起人end -->
		<!-- 部门经理start -->
		<view class="cu-timeline " >
			<view class="cu-time" style="width: 140upx;">{{ baData.departmental_review_date }}</view>
			<view class="cu-item cur cuIcon-pulldown text-green">
				<text>部门经理</text>
				<view class="content">
					<text>部门核对：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.departmental_check }}</text>
					</view>
					<text>核对日期：</text>
					<view class="content bg-blue shadow-blur margin-bottom-sm">
						<text>{{ baData.departmental_review_date }}</text>
					</view>
					<text>备注：</text>
					<view class="content bg-orange shadow-blur "><text>无</text></view>
				</view>
			</view>
		</view>
		<!-- 部门经理end -->

		<!-- 上级部门start -->
		<view class="cu-timeline">
			<view class="cu-time" style="width: 140upx;">{{ baData.direct_management_review_date }}</view>
			<view class="cu-item cur cuIcon-pulldown text-green">
				<text>审核</text>
				<view class="content">
					<text>审核人：</text>
					<view class="content bg-green shadow-blur margin-bottom-sm">
						<text>{{ baData.direct_management_check }}</text>
					</view>
					<text>审核日期：</text>
					<view class="content bg-blue shadow-blur margin-bottom-sm">
						<text>{{ baData.direct_management_review_date }}</text>
					</view>
					<text>审核备注：</text>
					<view class="content bg-orange shadow-blur ">
						<text>{{ baData.direct_management_remarks }}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 上级部门end -->

		<!-- 当下处理start -->
		<form @submit="formSubmit">
			<view class="cu-timeline">
				<view class="cu-time " style="width: 140upx;">{{ serverDate }}</view>
				<view class="cu-item cur cuIcon-time text-yellow">
					<text>审核</text>
					<view class="content margin-bottom-xl">
						<view class="action margin-bottom-sm">
							<radio-group name="radioData">
								<label class="margin-left-sm">
									<radio id="agree" class="blue radio" value="agree" checked data-agdata="ture"></radio>
									<text class="margin-left-sm">同意</text>
								</label>
								<label class="margin-left-sm">
									<radio class="blue radio" value="reject"></radio>
									<text class="margin-left-sm">驳回</text>
								</label>
							</radio-group>
						</view>
						<text>审核备注：</text>
						<view class="content bg-white shadow-blur "><input type="text" value="" name="remark" /></view>
					</view>
					<button class="cu-btn block bg-green margin-tb-sm lg" form-type="submit">提交</button>
				</view>
			</view>
		</form>
		<!-- 当下处理end -->
	</view>
</template>

<script>
import businessApproval from './businessApproval.js';
export default businessApproval;
</script>

<style></style>
