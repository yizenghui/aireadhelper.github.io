(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index"],{"3a79":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:[t.backgroundcolor]},["home"==t.PageCur?i("home",{attrs:{follow_list:t.follow_list}}):t._e(),"activity"==t.PageCur?i("activity",{attrs:{activity_list:t.activity_list}}):t._e(),"explore"==t.PageCur?i("explore"):t._e(),"user"==t.PageCur?i("user"):t._e(),i("v-uni-view",{staticClass:"cu-bar tabbar shadow foot",class:[t.backgroundcolor,t.isIpx?"margin-bottom-xl":""]},[i("v-uni-view",{staticClass:"action",attrs:{"data-cur":"explore"},on:{click:function(e){e=t.$handleEvent(e),t.NavChange(e)}}},[i("v-uni-view",{staticClass:"cuIcon-cu-image"},[i("v-uni-text",{staticClass:"cuIcon-apps",class:"explore"==t.PageCur?"text-green":""})],1),i("v-uni-view",{class:"explore"==t.PageCur?"text-green":"text-gray"},[t._v("发现")])],1),i("v-uni-view",{staticClass:"action",attrs:{"data-cur":"home"},on:{click:function(e){e=t.$handleEvent(e),t.NavChange(e)}}},[i("v-uni-view",{staticClass:"cuIcon-cu-image"},[i("v-uni-text",{staticClass:" ",class:"home"==t.PageCur?"text-green cuIcon-favorfill":"cuIcon-favor"})],1),i("v-uni-view",{class:"home"==t.PageCur?"text-green":"text-gray"},[t._v("看单")])],1),i("v-uni-view",{staticClass:"action",attrs:{"data-cur":"activity"},on:{click:function(e){e=t.$handleEvent(e),t.NavChange(e)}}},[i("v-uni-view",{staticClass:"cuIcon-cu-image"},[i("v-uni-text",{staticClass:" ",class:"activity"==t.PageCur?"text-green cuIcon-activityfill":"cuIcon-activity"})],1),i("v-uni-view",{class:"activity"==t.PageCur?"text-green":"text-gray"},[t._v("推荐")])],1),i("v-uni-view",{staticClass:"action",attrs:{"data-cur":"user"},on:{click:function(e){e=t.$handleEvent(e),t.NavChange(e)}}},[i("v-uni-view",{staticClass:"cuIcon-cu-image"},[i("v-uni-text",{staticClass:"cuIcon-my ",class:"user"==t.PageCur?"text-green cuIcon-myfill":""})],1),i("v-uni-view",{class:"user"==t.PageCur?"text-green":"text-gray"},[t._v("我的")])],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"839c":function(t,e,i){"use strict";i.r(e);var n=i("d623"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},d623:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("9ec8"),i("96cf");var a=n(i("3b8d")),r=n(i("e143")),o=n(i("b5fc")),c={data:function(){return{backgroundcolor:"",fontsize:"",textcolor:"",follow_list:[],activity_list:[],PageCur:"explore",isIpx:this.isIpx}},onShow:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.backgroundcolor=r.default.prototype.backgroundcolor,this.fontsize=r.default.prototype.fontsize,this.textcolor=r.default.prototype.textcolor,"home"==this.PageCur?this.initFollowRows():"activity"==this.PageCur&&this.initActivityRows();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(e){var i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=this,uni.$on("updatePattern",function(t){i.backgroundcolor=t.backgroundcolor,i.fontsize=t.fontsize,i.textcolor=t.textcolor}),!e.scene){t.next=7;break}return t.next=5,o.default.GetQrcodrWxto(e.scene);case 5:n=t.sent,""!=n&&(uni.navigateTo({url:n}),uni.switchTab({url:n}));case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{NavChange:function(t){uni.pageScrollTo({scrollTop:0}),this.PageCur=t.currentTarget.dataset.cur,"home"==this.PageCur?this.initFollowRows():"activity"==this.PageCur&&this.initActivityRows()},initFollowRows:function(){if(this.follow_list=uni.getStorageSync("___follow_list"),!this.follow_list){var t=uni.getStorageSync("__follow_list");this.follow_list=t&&JSON.parse(t)||[]}},initActivityRows:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.GetAllActivities();case 2:this.activity_list=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},onShareAppMessage:function(t){return{title:"分享一个超赞的阅读器，免费资源超多~~~",path:"/pages/index"}}};e.default=c},e059:function(t,e,i){"use strict";i.r(e);var n=i("3a79"),a=i("839c");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var o=i("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"441dcece",null);e["default"]=c.exports}}]);