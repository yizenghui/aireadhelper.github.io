(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newCatalog"],{"30fa":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".page[data-v-7f526bf1]{min-height:100vh}.cu-list.menu>.cu-item[data-v-7f526bf1]{background-color:inherit}",""])},"3ead":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:[t.backgroundcolor,t.textcolor,t.fontsize]},[n("cu-custom",{attrs:{bgColor:t.bgColor,isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[n("v-uni-text",{class:[t.fontsize]},[t._v("创建源")])],1)],2),n("v-uni-view",{staticClass:"page",attrs:{"scroll-y":""}},[n("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[n("v-uni-view",{staticClass:"cu-form-group shadow "},[n("v-uni-textarea",{attrs:{maxlength:"512",name:"inputUrl",placeholder:"请输入源内容目录链接地址"}})],1),n("v-uni-view",{staticClass:"padding flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-green lg",attrs:{formType:"submit"}},[t._v("创建")])],1)],1),n("v-uni-view",{staticClass:"cu-list menu card-menu margin-top"},t._l(t.list,function(e,a){return n("v-uni-view",{staticClass:"cu-item ",class:e.style},[n("v-uni-view",{staticClass:"content",attrs:{"data-wxto":e.wxto,"data-type":e.type,"data-image":e.image},on:{click:function(e){e=t.$handleEvent(e),t.click(e)}}},[n("v-uni-text",{class:e.icon}),n("v-uni-text",[t._v(t._s(e.title))])],1)],1)}),1)],1)],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"5dbc9":function(t,e,n){var a=n("30fa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("65e4aa23",a,!0,{sourceMap:!1,shadowMode:!1})},"73bd":function(t,e,n){"use strict";n.r(e);var a=n("b394"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"80c3":function(t,e,n){"use strict";var a=n("5dbc9"),r=n.n(a);r.a},b394:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7f7f"),n("ac6a"),n("96cf");var r=a(n("3b8d"));n("9ec8");var i=a(n("b5fc")),u=(a(n("e143")),{name:"newCatelog",data:function(){return{backgroundcolor:this.backgroundcolor,fontsize:this.fontsize,textcolor:this.textcolor,adshow:!0,searchInput:"",url:"",drive:"",title:"",list:[],page:"",array:[],array_drives:[],array_pages:[]}},computed:{bgColor:function(){return this.backgroundcolor+" "+this.textcolor+" "+this.fontsize}},methods:{goto:function(t){var e=t.currentTarget.dataset.url;e&&uni.navigateTo({url:e})},click:function(t){var e=t.currentTarget.dataset.wxto,n=t.currentTarget.dataset.type,a=t.currentTarget.dataset.image;""!=e&&"link"==n?uni.navigateTo({url:e}):""!=a&&"image"==n&&uni.previewImage({current:a,urls:[a]})},checkIsURL:function(t){return/^http(s){0,1}:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/.test(t)},formSubmit:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(e){var n,a,r,u,c,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this,a=e.detail.value.inputUrl,""!=a){t.next=6;break}uni.showModal({title:"提示",content:"链接地址不能为空",showCancel:!1}),t.next=17;break;case 6:if(n.checkIsURL(a)){t.next=10;break}uni.showModal({title:"提示",content:"请输入有效的链接地址",showCancel:!1}),t.next=17;break;case 10:return t.next=12,i.default.GetDrive(a);case 12:r=t.sent,u=r.key,c=r.drive,o=r.page,""==c?uni.showActionSheet({itemList:n.array,success:function(t){c=n.array_drives[t.tapIndex],o=n.array_pages[t.tapIndex],uni.navigateTo({url:"".concat(o,"?drive=").concat(c,"&url=").concat(u)})}}):uni.navigateTo({url:"".concat(o,"?drive=").concat(c,"&url=").concat(u)});case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.default.ConnectApi();case 2:return t.next=4,i.default.GetDrives();case 4:return e=t.sent,t.next=7,i.default.GetNewCatelogHelps();case 7:this.list=t.sent,e.forEach(function(t){n.array.push(t.name),n.array_drives.push(t.drive),n.array_pages.push(t.page)});case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShareAppMessage:function(t){return{title:"自定义资源包",path:"/pages/newCatelog"}}});e.default=u},e504:function(t,e,n){"use strict";n.r(e);var a=n("3ead"),r=n("73bd");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("80c3");var u=n("2877"),c=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"7f526bf1",null);e["default"]=c.exports}}]);