
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/registLogin/registLogin","pages/meInfo/meInfo","pages/search/search","pages/meface/meface","pages/msg/msg","pages/businessApproval/businessApproval"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#bfbfbf","selectedColor":"#515151","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabBarIco/index.png","selectedIconPath":"static/tabBarIco/index_sel.png"},{"pagePath":"pages/msg/msg","text":"消息","iconPath":"static/icos/icon-item-004.png","selectedIconPath":"static/icos/icon-item-004.png"},{"pagePath":"pages/login/login","text":"我的","iconPath":"static/tabBarIco/me.png","selectedIconPath":"static/tabBarIco/me_sel.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"DeLin","compilerVersion":"2.6.16","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我的","navigationBarBackgroundColor":"#ffd655","titleNView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/registLogin/registLogin","meta":{},"window":{}},{"path":"/pages/meInfo/meInfo","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我的","navigationBarBackgroundColor":"#ffd655"}},{"path":"/pages/search/search","meta":{},"window":{}},{"path":"/pages/meface/meface","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"头像上传","navigationBarBackgroundColor":"#ffd655"}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"消息","navigationBarBackgroundColor":"#ffd655"}},{"path":"/pages/businessApproval/businessApproval","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"审批","navigationBarBackgroundColor":"#ffd655"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});