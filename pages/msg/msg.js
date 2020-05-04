import App from "../../App.vue"


export default {
	data() {
		return {
			TabCur: 0,
			// 刷新
			update: true,
			// 数据绑定
			userIsLogin: false,
			userInfo: {},
			allUser: {},
			thisItem: {},
			// userHeader: '',
			// 查询所有用户start
			modalName: null,
			listTouchStart: 0,
			listTouchDirection: null,
			// 查询所有用户end
			
			//模拟数据
			businessApprovalData:[
				{
				id:"Z2001210001",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210002",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210003",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210004",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210005",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210006",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210007",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210008",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			{
				id:"Z2001210009",
				application_title:"白彩侠零担运费",
				application_time:"2020-1-21 11:37:27",
				department:"采购部",
				applicant:"白彩侠",
				Amount:"64500.00",
				supplier_name:"黄志坚",
				application_instructions:"陕西航天泵阀科技集团有限公司 航天泵阀：物流零担费用，2019 04 13-07：02，费用与清单相符，，经办人：黄志坚",
				departmental_check:"赖荣文",
				departmental_review_date:"2020-1-21 12:02:32",
				direct_management_check:"李卉虹",
				direct_management_review_date:"2020-1-21 15:40:42",
				direct_management_remarks:"该单是2019年3月7日到9月18日零担运费，属于个人没有发票，事务流程一次提申请分批支付本年度请支付20000元。",
				
			},
			
			]
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
		};
		// this.getAllUser();


	},

	methods: {
		// 打开处理界面
		openBusinessApprovalModal(e){
			var item = e.currentTarget.dataset.thisitem;
			
			uni.setStorageSync('BusinessApprovalData', item);
			uni.navigateTo({
				url:"/pages/businessApproval/businessApproval"
			});
			
		},
		// 所有用户查询start
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
					token: token,
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

		// 查询所有用户end
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
		},
		// 添加用户end
		
		// tab选择
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;			
		}
	}
};
