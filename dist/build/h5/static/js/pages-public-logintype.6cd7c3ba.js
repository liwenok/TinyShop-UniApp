(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-logintype"],{"0aeb":function(t,e,n){"use strict";var o=n("34c4"),a=n.n(o);a.a},"1ca5":function(t,e,n){"use strict";var o=n("fc73"),a=n.n(o);a.a},"34c4":function(t,e,n){var o=n("7de8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("882c8c50",o,!0,{sourceMap:!1,shadowMode:!1})},"3f01":function(t,e,n){"use strict";n.r(e);var o=n("98b2"),a=n("c9c2");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("0aeb");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"19c9a578",null,!1,o["a"],r);e["default"]=s.exports},"4ed6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"popup",props:{title:{type:String,default:"服务协议和隐私政策"},protocolPath:{type:String},policyPath:{type:String}},data:function(){return{showPopup:!0}},methods:{clear:function(){},back:function(){this.$emit("popupState",!1)},consent:function(){this.$emit("popupState",!0)}}};e.default=o},"5d82":function(t,e,n){"use strict";n.r(e);var o=n("98ee"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"5e05":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-0bf0de83]{background:#fff;height:calc(100% - %?88?%)}.login-type[data-v-0bf0de83]{padding-top:%?80?%}.login-type .logo[data-v-0bf0de83]{text-align:center;margin-bottom:%?80?%}.login-type .logo uni-image[data-v-0bf0de83]{width:%?180?%;height:%?180?%;border-radius:%?28?%}.login-type .confirm-btn[data-v-0bf0de83]{width:84%;margin:0 7% %?50?%;height:%?84?%;line-height:%?84?%;border-radius:%?12?%;background-color:#fa436a;color:#fff;font-size:%?32?%}.login-type .plain[data-v-0bf0de83]{background:none;color:#fa436a;border:%?1?% solid #fa436a}.login-type .footer[data-v-0bf0de83]{width:100%;text-align:center;position:fixed;bottom:%?40?%;font-size:%?26?%}.login-type .footer .protocol[data-v-0bf0de83]{color:#fa436a;margin:0 %?10?%}body.?%PAGE?%[data-v-0bf0de83]{background:#fff}",""]),t.exports=e},"703d":function(t,e,n){"use strict";n.r(e);var o=n("af40"),a=n("5d82");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1ca5");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"0bf0de83",null,!1,o["a"],r);e["default"]=s.exports},"7de8":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".popup_mask[data-v-19c9a578]{position:fixed;bottom:0;top:0;left:0;right:0;background-color:rgba(0,0,0,.4);-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;opacity:0;z-index:98}.popup_mask[data-v-19c9a578]{opacity:1}.popup_content[data-v-19c9a578]{overflow:hidden;box-sizing:border-box;padding:%?40?% %?20?% 0 %?20?%;position:fixed;bottom:30%;border-radius:8px;left:50%;margin-left:-40%;right:0;min-height:%?400?%;background:#fff;width:80%;z-index:99}.popup_content .title[data-v-19c9a578]{text-align:center;font-size:%?34?%;padding:%?10?% 0 0 0}.popup_content .explain_text[data-v-19c9a578]{font-size:%?30?%;padding:%?30?% %?30?% %?40?% %?30?%;line-height:%?38?%}.popup_content .explain_text .line[data-v-19c9a578]{display:block}.popup_content .explain_text .line .path[data-v-19c9a578]{color:#007aff;display:inline-block;text-align:center}.popup_content .button[data-v-19c9a578]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?34?%;-webkit-justify-content:space-around;justify-content:space-around;border-top:%?1?% solid #f2f2f2}.popup_content .button uni-view[data-v-19c9a578]{text-align:center}",""]),t.exports=e},"98b2":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"popup_mask",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"popup_content"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"explain_text"},[t._v("请你务必认真阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了向你提供数据、分享等服务所要获取的权限信息。"),n("v-uni-view",{staticClass:"line"},[t._v("你可以阅读"),n("v-uni-navigator",{staticClass:"path",attrs:{url:t.protocolPath,"hover-class":"navigator-hover"}},[t._v("《注册协议》")]),t._v("和"),n("v-uni-navigator",{staticClass:"path",attrs:{url:t.policyPath,"hover-class":"navigator-hover"}},[t._v("《隐私协议》")]),t._v('了解详细信息。如您同意，请点击"同意"开始接受我们的服务。')],1)],1),n("v-uni-view",{staticClass:"button"},[n("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("暂不使用")]),n("v-uni-view",{staticClass:"consent",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.consent.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)},i=[]},"98ee":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=o(n("3b8d"));n("28a5");var i=n("7ded"),r=o(n("3f01")),c={components:{rfProtocolPopup:r.default},data:function(){return{isRfProtocolPopupShow:!1,appAgreementDefaultSelect:uni.getStorageSync("globalConfigChange")?"1"===uni.getStorageSync("globalConfig").app_agreement_default_select:"1"===this.$mSettingConfig.appAgreementDefaultSelect,isAuthLoginShow:!1,logo:this.$mSettingConfig.appLogo,appName:this.$mSettingConfig.appName}},onShow:function(){uni.getStorageSync("accessToken")&&this.$mRouter.reLaunch({route:"/pages/index/index"})},onLoad:function(t){var e=this;this.$mStore.commit("logout"),this.$mPayment.isWechat()&&(this.isAuthLoginShow=!0),this.code=t.code&&t.code.split(",")[t.code.split(",").length-1],uni.getStorageSync("notFirstTimeLogin")?this.appAgreementDefaultSelect=!0:this.appAgreementDefaultSelect||(this.appAgreementDefaultSelect=!1);var n=this;this.code&&this.$http.get(i.wechatH5Login,{code:this.code}).then(function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(o){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o.data.login){t.next=5;break}e.user_info=o.data.user_info.original,uni.showModal({content:"你尚未绑定账号，是否跳转登录页面？",success:function(t){t.confirm&&(uni.setStorageSync("wechatUserInfo",JSON.stringify(n.user_info)),n.$mRouter.push({route:"/pages/public/login"}))}}),t.next=9;break;case 5:return t.next=7,e.$mStore.commit("login",o.data.user_info);case 7:a=uni.getStorageSync("backToPage"),a?(-1!==a.indexOf("/pages/user/user")||-1!==a.indexOf("/pages/cart/cart")||-1!==a.indexOf("/pages/index/index")||-1!==a.indexOf("/pages/notify/notify")||-1!==a.indexOf("/pages/category/category")?e.$mRouter.reLaunch(JSON.parse(a)):e.$mRouter.redirectTo(JSON.parse(a)),uni.removeStorageSync("backToPage"),uni.removeStorageSync("wechatUserInfo")):e.$mRouter.reLaunch({route:"/pages/user/user"});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{navTo:function(t){this.appAgreementDefaultSelect?this.$mRouter.redirectTo({route:t}):this.$mHelper.toast("请勾选并阅读协议，才能进行下一步哦",1500)},handleRfProtocolPopupShow:function(){this.isRfProtocolPopupShow=!0},popupState:function(t){t?(this.appAgreementDefaultSelect=!0,uni.setStorageSync("notFirstTimeLogin",!0),this.isRfProtocolPopupShow=!1):(this.appAgreementDefaultSelect=!1,this.isRfProtocolPopupShow=!1)},toAuthLogin:function(){var t=this;if(this.appAgreementDefaultSelect){this.$mPayment.isWechat()?uni.showModal({content:"是否授权登录?",success:function(e){if(e.confirm){var n=window.location.href;window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tappid=".concat(t.$mConfig.weixinAppId,"&\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tredirect_uri=").concat(n,"&\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresponse_type=code&\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tscope=snsapi_userinfo&\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstate=STATE#wechat_redirect")}}}):this.$mHelper.toast("当前平台不支持授权登录")}else this.$mHelper.toast("请阅读并同意协议",1500)}}};e.default=c},af40:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={"rf-image":n("b19a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login-type"},[n("v-uni-view",{staticClass:"logo"},[n("rf-image",{attrs:{preview:!1,src:t.logo}})],1),n("v-uni-view",[t.isAuthLoginShow?n("v-uni-button",{staticClass:"confirm-btn",attrs:{"open-type":"getUserInfo",formType:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAuthLogin.apply(void 0,arguments)}}},[t._v("授权登录")]):t._e(),n("v-uni-button",{staticClass:"confirm-btn plain",attrs:{plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/login")}}},[t._v("已有账号登录")]),n("v-uni-button",{staticClass:"confirm-btn plain",attrs:{plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/public/register")}}},[t._v("立即注册")])],1),t.isRfProtocolPopupShow?n("rf-protocol-popup",{ref:"mapState",attrs:{protocolPath:"/pages/set/about/detail?field=protocol_register&title=注册协议",policyPath:"/pages/set/about/detail?field=protocol_privacy&title=隐私协议"},on:{popupState:function(e){arguments[0]=e=t.$handleEvent(e),t.popupState.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{staticClass:"footer-protocol footer"},[n("v-uni-text",{staticClass:"cuIcon",class:t.appAgreementDefaultSelect?"cuIcon-radiobox base-color":"cuIcon-round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRfProtocolPopupShow.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"content"},[t._v("登录表示同意")]),n("v-uni-text",{staticClass:"url",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRfProtocolPopupShow.apply(void 0,arguments)}}},[t._v("《"+t._s(t.appName)+" 协议》")])],1)],1)},i=[]},c9c2:function(t,e,n){"use strict";n.r(e);var o=n("4ed6"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},fc73:function(t,e,n){var o=n("5e05");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("532bf81c",o,!0,{sourceMap:!1,shadowMode:!1})}}]);