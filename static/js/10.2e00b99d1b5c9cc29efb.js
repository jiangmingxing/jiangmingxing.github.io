webpackJsonp([10],{"Q/VV":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n.input-title{\n    font-size: 14px !important;\n    font-weight: 600;\n}\n.el-col{\n    margin-left: 20px;\n}\n::-webkit-scrollbar-thumb{\n    background-color: gainsboro;\n}\n.cell{\n    text-align: center;\n}\n#content-main{\n    overflow: scroll;\n}\n.el-table{\n    overflow: scroll;\n}\n.content-table{\n    width: 100%;\n    border-collapse:collapse;\n    background-color: white;\n    text-align: center;\n}\n.content-table th{\n    height: 40px;\n    border: 1px solid #F2F3F4;\n    text-align: center;\n    background-color: gainsboro;\n}\n.content-table td{\n    height: 40px;\n    border: 1px solid #F2F3F4;\n}\n.dothis{\n    color: #3C9CFC;\n    cursor:default;\n    margin-left: 10px;\n}\n.page-f{\n    margin-top: 20px;\n    float: right;\n}\n.content-table span:hover{\n    color: silver;\n}\n.el-col-23{\n    width: 99% !important;\n}\n","",{version:3,sources:["D:/MyConfiguration/jmx48939/Desktop/gz.railway.adminsystem/src/views/gz_order_list.vue"],names:[],mappings:";AACA;IACI,2BAA2B;IAC3B,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,4BAA4B;CAC/B;AACD;IACI,mBAAmB;CACtB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,4BAA4B;CAC/B;AACD;IACI,aAAa;IACb,0BAA0B;CAC7B;AACD;IACI,eAAe;IACf,eAAe;IACf,kBAAkB;CACrB;AACD;IACI,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,cAAc;CACjB;AACD;IACI,sBAAsB;CACzB",file:"gz_order_list.vue",sourcesContent:["\n.input-title{\n    font-size: 14px !important;\n    font-weight: 600;\n}\n.el-col{\n    margin-left: 20px;\n}\n::-webkit-scrollbar-thumb{\n    background-color: gainsboro;\n}\n.cell{\n    text-align: center;\n}\n#content-main{\n    overflow: scroll;\n}\n.el-table{\n    overflow: scroll;\n}\n.content-table{\n    width: 100%;\n    border-collapse:collapse;\n    background-color: white;\n    text-align: center;\n}\n.content-table th{\n    height: 40px;\n    border: 1px solid #F2F3F4;\n    text-align: center;\n    background-color: gainsboro;\n}\n.content-table td{\n    height: 40px;\n    border: 1px solid #F2F3F4;\n}\n.dothis{\n    color: #3C9CFC;\n    cursor:default;\n    margin-left: 10px;\n}\n.page-f{\n    margin-top: 20px;\n    float: right;\n}\n.content-table span:hover{\n    color: silver;\n}\n.el-col-23{\n    width: 99% !important;\n}\n"],sourceRoot:""}])},TrIC:function(t,e,n){var a=n("Q/VV");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("6de5ca8e",a,!0)},gF18:function(t,e,n){"use strict";function a(t){n("TrIC")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("3p7W"),l=[1,2,3,4,5,6,7],o={data:function(){return{checkAll:!1,checkedCities:[],cities:l,timeValue:"",currentPage:1,pageSize:10,listdata:"",searchForm:{contactPhone:"",endCrtTime:"",startCrtTime:"",status:[]},formLabelWidth:"120px",fullscreenLoading:!1,orderStatus:{1:"待支付",2:"出票中",3:"已出票",4:"出票失败",5:"已出行",6:"退票",7:"已取消"}}},methods:{handleCheckAllChange:function(t){this.checkedCities=t?l:[]},handleCheckedCitiesChange:function(t){var e=t.length;this.checkAll=e===this.cities.length},getOrderList:function(){var t=this,e=this.searchForm;e.pageIndex=this.currentPage,e.pageSize=this.pageSize;for(var n in e)""==String(e[n])&&delete e[n];i.a.getOrderList(e,function(e){e&&(t.listdata=e.data.result)})},clear:function(){this.checkedCities=[],this.checkAll=!1;var t=this.searchForm;for(var e in t)t[e]="";this.value1="",this.value2=""},search:function(){this.searchForm.status=this.checkedCities.concat(),console.log(this.searchForm),this.currentPage=1,this.getOrderList()},godetail:function(t,e){window.open("#/gz_order_detail?serial="+t+"&supplierId=")},orderExport:function(){var t=this.searchForm;for(var e in t)""==String(t[e])&&delete t[e];i.a.orderInfoExp(t)},addDevice:function(){this.dialogFormVisible=!0},getTimeValue1:function(t){console.log(t),this.searchForm.startCrtTime=null==t?"":t},getTimeValue2:function(t){console.log(t),this.searchForm.endCrtTime=null==t?"":t},refund:function(t){var e=this,n={serial:t};this.$confirm("是否继续退款操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.refund(n,function(t){t&&(e.getOrderList(),e.$message({showClose:!0,message:"退款成功",type:"success"}))})}).catch(function(){})},handleSizeChange:function(t){this.pageSize=t,this.getOrderList()},handleCurrentChange:function(t){this.currentPage=t,this.getOrderList()}},mounted:function(){this.getOrderList()}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-tag",{staticStyle:{"margin-left":"20px","margin-bottom":"10px",width:"200px",height:"40px","text-align":"center","line-height":"40px","font-size":"20px"},attrs:{type:"warning"}},[t._v("订单列表")]),t._v(" "),n("el-col",{staticStyle:{"padding-bottom":"30px"},attrs:{span:23}},[n("el-row",[n("el-col",{staticClass:"el-col",staticStyle:{"margin-left":"0"},attrs:{span:3}},[n("p",{staticClass:"input-title"},[t._v("手机号:")]),t._v(" "),n("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:t.searchForm.contactPhone,callback:function(e){t.$set(t.searchForm,"contactPhone",e)},expression:"searchForm.contactPhone"}})],1),t._v(" "),n("el-col",{staticClass:"el-col",attrs:{span:12}},[n("p",{staticClass:"input-title"},[t._v("创建时间：")]),t._v(" "),n("el-date-picker",{staticStyle:{float:"left"},attrs:{type:"datetime",placeholder:"开始时间","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.getTimeValue1},model:{value:t.searchForm.startCrtTime,callback:function(e){t.$set(t.searchForm,"startCrtTime",e)},expression:"searchForm.startCrtTime"}}),t._v(" "),n("span",{staticStyle:{float:"left","line-height":"40px"}},[t._v("  至  ")]),t._v(" "),n("el-date-picker",{staticStyle:{float:"left"},attrs:{type:"datetime",placeholder:"结束时间","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.getTimeValue2},model:{value:t.searchForm.endCrtTime,callback:function(e){t.$set(t.searchForm,"endCrtTime",e)},expression:"searchForm.endCrtTime"}})],1)],1)],1),t._v(" "),n("el-col",{staticStyle:{"padding-bottom":"30px","border-bottom":"1px solid gainsboro"},attrs:{span:23}},[n("p",{staticClass:"input-title"},[t._v("订单状态:")]),t._v(" "),[n("el-checkbox",{staticStyle:{display:"inline-block","margin-right":"20px"},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._v(" "),n("el-checkbox-group",{staticStyle:{display:"inline-block"},on:{change:t.handleCheckedCitiesChange},model:{value:t.checkedCities,callback:function(e){t.checkedCities=e},expression:"checkedCities"}},t._l(t.cities,function(e){return n("el-checkbox",{key:e,staticStyle:{display:"inline-block"},attrs:{label:e}},[t._v(t._s(t.orderStatus[e]))])}))],t._v(" "),n("el-col",{staticClass:"el-col",staticStyle:{float:"right","margin-top":"-50px"},attrs:{span:1.5}},[n("p",{staticClass:"input-title"},[t._v(" ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.orderExport}},[t._v("导出明细")])],1),t._v(" "),n("el-col",{staticClass:"el-col",staticStyle:{float:"right","margin-top":"-50px"},attrs:{span:1.5}},[n("p",{staticClass:"input-title"},[t._v(" ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.clear}},[t._v("重置")])],1),t._v(" "),n("el-col",{staticClass:"el-col",staticStyle:{float:"right","margin-top":"-50px"},attrs:{span:1.5}},[n("p",{staticClass:"input-title"},[t._v(" ")]),t._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")])],1)],2),t._v(" "),n("el-col",{staticStyle:{"padding-top":"30px"},attrs:{span:23}},[n("table",{staticClass:"content-table"},[n("tr",[n("th",[t._v("序号")]),t._v(" "),n("th",[t._v("订单号")]),t._v(" "),n("th",[t._v("出发/到达地")]),t._v(" "),n("th",[t._v("手机号")]),t._v(" "),n("th",[t._v("订单状态")]),t._v(" "),n("th",[t._v("创建日期")]),t._v(" "),n("th",[t._v("出发日期")])]),t._v(" "),t._l(t.listdata.data,function(e,a){return n("tr",[n("td",[t._v(t._s(a+1))]),t._v(" "),n("td",[n("span",{staticClass:"dothis",on:{click:function(n){t.godetail(e.serialId,e.status)}}},[t._v(" "+t._s(e.serialId))])]),t._v(" "),n("td",[t._v(t._s(e.depStation)+"/"+t._s(e.destStation))]),t._v(" "),n("td",[t._v(t._s(e.contactPhone))]),t._v(" "),n("td",[t._v(t._s(e.statusText))]),t._v(" "),n("td",[t._v(t._s(e.crtTime))]),t._v(" "),n("td",[t._v(t._s(e.depTime))])])}),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left",background:"ghostwhite"},attrs:{colspan:"9"}},[t._v("\n                             \n                    订单总金额 : "+t._s(t.listdata.totalAmount)+"元， \n                    退款金额 : "+t._s(t.listdata.refundAmount)+"元， \n                    有效订单 : "+t._s(t.listdata.effectAmount)+"元, \n\n                ")])])],2),t._v(" "),n("div",{staticClass:"block page-f",staticStyle:{position:"relative",width:"100%"}},[n("el-pagination",{staticStyle:{position:"absolute",right:"0"},attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,"page-sizes":[10,20,30,40],layout:"total,prev, pager, next, jumper",total:t.listdata.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),t._v(" "),n("div",{staticStyle:{height:"80px"}})])],1)},s=[],c={render:r,staticRenderFns:s},h=c,d=n("VU/8"),p=a,u=d(o,h,!1,p,null,null);e.default=u.exports}});
//# sourceMappingURL=10.2e00b99d1b5c9cc29efb.js.map