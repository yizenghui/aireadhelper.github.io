(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-catalog"],{"05e6":function(t,e,n){var r=n("c782");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("1b7ef9ac",r,!0,{sourceMap:!1,shadowMode:!1})},"0fba":function(t,e,n){"use strict";n.r(e);var r=n("e908"),a=n("5c3e");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("2260");var o=n("2877"),s=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,"b2a04746",null);e["default"]=s.exports},2260:function(t,e,n){"use strict";var r=n("05e6"),a=n.n(r);a.a},4928:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("bd86")),i=r(n("75fc"));n("96cf");var o=r(n("3b8d")),s=r(n("f499"));n("28a5"),n("9ec8");var l=r(n("b5fc")),u=r(n("e143")),c={name:"explore",data:function(){return{backgroundcolor:this.backgroundcolor,fontsize:this.fontsize,textcolor:this.textcolor,url:"",source_url:"",drive:"",title:"目录加载中",save_title:"",links:[],logs:[],follow_list:[],next:[],hash:"",load_url:"",follow_status:!1,state:0,adshow:!0}},computed:{bgColor:function(){return this.backgroundcolor+" "+this.textcolor+" "+this.fontsize},sourceURL:function(){if(this.source_url){var t=this.source_url.split("/");if(t[2])return t[2]}return""}},methods:(0,a.default)({follow:function(){var t=this;if(t.follow_list.length>0)for(var e=0;e<t.follow_list.length;e++)if(t.follow_list[e].url==t.url)return;var n={title:t.title,type:"link",wxto:"/pages/catalog?drive="+t.drive+"&url="+t.url,hash:t.hash,url:t.url};t.follow_list.push(n),uni.setStorage({key:"__follow_list",data:(0,s.default)(t.follow_list)}),t.follow_status=!0,uni.showToast({title:"已加入看单",icon:"none"})},unfollow:function(){var t=this,e=[];if(t.follow_list.length>0){for(var n=0;n<t.follow_list.length;n++)t.follow_list[n].url!=t.url&&e.push(t.follow_list[n]);t.follow_list=e,uni.setStorage({key:"__follow_list",data:(0,s.default)(e)}),t.follow_status=!1,uni.showToast({title:"已移出看单",icon:"none"})}},setcp:function(t){var e=t.currentTarget.dataset.val;uni.showModal({title:"转码声明",content:"本内容通过实时转码技术为您呈现，版权及相关连带归源站所有！来源网站地址:"+e,showCancel:!1})},loadmore:function(){this.state=1;var t=this;t.next&&(t.fetch(t.next.url,t.drive),t.next=[])},reloaddata:function(){this.load_url?(this.state=1,this.fetch(this.load_url,this.drive)):this.state=2},fetch:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e,n){var r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this,r.load_url=e,t.prev=2,t.next=5,l.default.GetList(e,n);case 5:o=t.sent,uni.setNavigationBarTitle({title:o.title}),r.title=o.title,(a=r.list).push.apply(a,(0,i.default)(o.Cards)),r.next=o.next,r.state=0,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),r.state=3;case 16:case"end":return t.stop()}},t,this,[[2,13]])}));function e(e,n){return t.apply(this,arguments)}return e}(),goto:function(t){var e=t.currentTarget.dataset.url;e&&uni.navigateTo({url:e})},initload:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,uni.getStorageSync("__follow_list");case 3:if(n=t.sent,!n){t.next=15;break}if(e.follow_list=JSON.parse(n)||[],!(e.follow_list.length>0)){t.next=15;break}r=0;case 8:if(!(r<e.follow_list.length)){t.next=15;break}if(e.follow_list[r].url!=e.url){t.next=12;break}return e.follow_status=!0,t.abrupt("break",15);case 12:r++,t.next=8;break;case 15:return t.next=17,uni.getStorageSync("__read_list_logs_"+e.url);case 17:a=t.sent,a&&(e.logs=JSON.parse(a)||[]);case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},"fetch",function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e,n){var r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this,r.load_url=e,t.prev=2,t.next=5,l.default.GetCatalog(e,n);case 5:a=t.sent,a.Cards.length>0?(uni.setNavigationBarTitle({title:a.title}),r.title=a.title,(o=r.links).push.apply(o,(0,i.default)(a.Cards)),r.source_url=a.source_url,r.hash=a.hash,r.next=a.next,this.state=0):this.state=3,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),r.state=3;case 12:case"end":return t.stop()}},t,this,[[2,9]])}));function e(e,n){return t.apply(this,arguments)}return e}()),onShow:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.backgroundcolor=u.default.prototype.backgroundcolor,this.fontsize=u.default.prototype.fontsize,this.textcolor=u.default.prototype.textcolor;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.url,r=e.drive,t.next=3,l.default.ConnectApi();case 3:return this.url=n,this.drive=r,this.state=1,t.next=8,this.initload();case 8:this.fetch(n,this.drive);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onReachBottom:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,e.next&&e.next.url?(e.state=1,e.fetch(e.next.url,e.drive),e.next=[]):(e.state=2,uni.showToast({title:"没有更多了",icon:"none"}));case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onPullDownRefresh:function(){this.links=[],this.state=1,this.fetch(this.url,this.drive),wx.stopPullDownRefresh()}};e.default=c},"5c3e":function(t,e,n){"use strict";n.r(e);var r=n("4928"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"75fc":function(t,e,n){"use strict";n.r(e);var r=n("a745"),a=n.n(r);function i(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var o=n("774e"),s=n.n(o),l=n("c8bb"),u=n.n(l);function c(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return i(t)||c(t)||f()}n.d(e,"default",function(){return h})},c782:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".page[data-v-b2a04746]{min-height:100vh}.cu-card>.cu-item[data-v-b2a04746]{background-color:rgba(0,0,0,0)}.cu-card.article>.cu-item .title[data-v-b2a04746]{color:inherit;font-size:inherit}.cu-card.article>.cu-item .content .text-content[data-v-b2a04746]{color:inherit;font-size:inherit}",""])},e908:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:t.bgColor,isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("目录")]),n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-view",{staticClass:"action text-xxl"},[t.follow_status?n("v-uni-text",{staticClass:"cuIcon-favorfill",on:{click:function(e){e=t.$handleEvent(e),t.unfollow(e)}}}):t._e(),!t.follow_status&&t.links.length?n("v-uni-text",{staticClass:"cuIcon-favor",on:{click:function(e){e=t.$handleEvent(e),t.follow(e)}}}):t._e()],1)],1)],2),n("v-uni-view",{staticClass:"page",class:[t.backgroundcolor,t.textcolor,t.fontsize],attrs:{"scroll-y":""},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadmore()}}},[n("v-uni-view",{staticClass:" shadow margin-bottom-xs padding"},[n("v-uni-view",{staticClass:"text-bold"},[t._v(t._s(t.title))]),n("v-uni-view",{attrs:{"data-val":t.source_url},on:{click:function(e){e=t.$handleEvent(e),t.setcp(e)}}},[t._v(t._s(t.sourceURL))])],1),n("v-uni-view",t._l(t.links,function(e,r){return n("v-uni-view",{staticClass:"padding-xs padding-lr margin-xs solid-top",attrs:{index:r,"data-url":e.wxto},on:{click:function(e){e=t.$handleEvent(e),t.goto(e)}}},[t._v(t._s(e.title))])}),1),1==t.state?n("v-uni-view",{staticClass:"cu-load loading"}):t._e(),2==t.state?n("v-uni-view",{staticClass:"text-center"},[t._v("到底了")]):t._e(),3==t.state?n("v-uni-view",{staticClass:"text-center",on:{click:function(e){e=t.$handleEvent(e),t.reloaddata()}}},[t._v("重新加载")]):t._e(),0==t.state?n("v-uni-view",{staticClass:"text-center",on:{click:function(e){e=t.$handleEvent(e),t.loadmore()}}},[t._v("加载更多")]):t._e()],1)],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})}}]);