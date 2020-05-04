import App from "../../App.vue"


export default {
	data() {
		return {
			baData: {},
			serverDate: '',
		};
	},
	onLoad() {
		console.log("审批传送数据!")
		var item = this.getGlobalUser('BusinessApprovalData');
		console.log(item);
		this.baData = item;		
		this.serverDate = this.getTime();
		
	},
	onShow() {


	},

	methods: {
		formSubmit(e) {
			console.log("提交数据");
			var formData = e.detail.value;
			console.log(formData);
			console.log(this.serverDate);
			
			// 节点选择测试
			// var item_agree=uni.createSelectorQuery().in(this).select("#agree");
			// item_agree.fields({dataset:"agdata"},data=>{
			// 	console.log("获取同意节点信息："+data.agdata);
			// });
			// console.log(item_agree);
			
		},
		getTime: function() {
			var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
				minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
				second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
			return timer;
		}
	}
}

