(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb6ee52"],{"6f92":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("el-button",{staticStyle:{"margin-left":"6px","margin-top":"18px","background-color":"#00bfff"},attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[e._v("十")]),r("el-drawer",{attrs:{title:"我是标题",visible:e.drawer,direction:"ltr","with-header":!1,size:"60%"},on:{"update:visible":function(t){e.drawer=t}}},[r("div",{staticClass:"app-head"},[r("i",{staticClass:"el-icon-s-custom",staticStyle:{width:"200px",height:"100px"}},[e._v("添加用户信息")])]),r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",staticClass:"addForm",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"客户编号"}},[r("el-input",{model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}})],1),r("el-form-item",{attrs:{label:"真实姓名"}},[r("el-input",{model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"user_phone"}},[r("el-input",{model:{value:e.form.user_phone,callback:function(t){e.$set(e.form,"user_phone",t)},expression:"form.user_phone"}})],1),r("el-form-item",{attrs:{label:"角色"}},[r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.form.user_play,callback:function(t){e.$set(e.form,"user_play",t)},expression:"form.user_play"}},[r("el-option",{attrs:{label:"房东",value:"房东"}}),r("el-option",{attrs:{label:"租客",value:"租客"}})],1)],1),r("el-form-item",{attrs:{label:"租房状态"}},[r("el-select",{attrs:{placeholder:"请选择租房状态"},model:{value:e.form.user_status,callback:function(t){e.$set(e.form,"user_status",t)},expression:"form.user_status"}},[r("el-option",{attrs:{label:"租用中",value:"租用中"}}),r("el-option",{attrs:{label:"已退租",value:"已退租"}})],1)],1),r("el-form-item",{attrs:{label:"租房类型"}},[r("el-select",{attrs:{placeholder:"请选择租房类型"},model:{value:e.form.user_type,callback:function(t){e.$set(e.form,"user_type",t)},expression:"form.user_type"}},[r("el-option",{attrs:{label:"单身公寓",value:"单身公寓"}}),r("el-option",{attrs:{label:"学区房",value:"学区房"}}),r("el-option",{attrs:{label:"海景房",value:"海景房"}})],1)],1),r("el-form-item",{attrs:{label:"居住地址"}},[r("div",{staticClass:"block"},[r("el-cascader",{attrs:{options:e.options},model:{value:e.form.user_address,callback:function(t){e.$set(e.form,"user_address",t)},expression:"form.user_address"}})],1)]),r("el-form-item",{attrs:{label:"入住时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:e.form.user_Sdate,callback:function(t){e.$set(e.form,"user_Sdate",t)},expression:"form.user_Sdate"}})],1)]),r("el-form-item",{attrs:{label:"退房时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:e.form.user_Edate,callback:function(t){e.$set(e.form,"user_Edate",t)},expression:"form.user_Edate"}})],1)]),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确认")]),r("el-button",{on:{click:function(t){e.drawer=!1}}},[e._v("取消")])],1)],1)],1)])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList.filter((function(t){return!e.search||t.user_name.toLowerCase().includes(e.search.toLowerCase())}))}},[r("el-table-column",{attrs:{label:"客户编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user_id)+" ")]}}])}),r("el-table-column",{attrs:{label:"客户姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user_name)+" ")]}}])}),r("el-table-column",{attrs:{label:"手机号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user_phone)+" ")]}}])}),r("el-table-column",{attrs:{label:"角色"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user_play)+" ")]}}])}),r("el-table-column",{attrs:{label:"房源类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user_type)+" ")]}}])}),r("el-table-column",{attrs:{label:"居住地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.user_address)+" ")]}}])}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:e._f("statusFilter")(t.row.user_status)}},[e._v(e._s(t.row.user_status))])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"created_at",label:"入住时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("i",{staticClass:"el-icon-time"}),r("span",[e._v(e._s(t.row.user_Sdate))])]}}])}),r("el-table-column",{attrs:{align:"center",prop:"created_at",label:"退房时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("i",{staticClass:"el-icon-time"}),r("span",[e._v(e._s(t.row.user_Edate))])]}}])}),r("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("Edit")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1),r("el-drawer",{attrs:{title:"我是标题",visible:e.drawer2,"with-header":!1,"before-close":e.handleClose,size:"60%"},on:{"update:visible":function(t){e.drawer2=t}}},[r("div",{staticClass:"app-head"},[r("i",{staticClass:"el-icon-s-custom",staticStyle:{width:"200px",height:"100px"}},[e._v("编辑用户信息")])]),r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",staticClass:"editForm",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"客户编号"}},[r("el-input",{model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}})],1),r("el-form-item",{attrs:{label:"客户姓名"}},[r("el-input",{model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}})],1),r("el-form-item",{attrs:{label:"手机号"}},[r("el-input",{model:{value:e.form.user_phone,callback:function(t){e.$set(e.form,"user_phone",t)},expression:"form.user_phone"}})],1),r("el-form-item",{attrs:{label:"角色"}},[r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.form.user_play,callback:function(t){e.$set(e.form,"user_play",t)},expression:"form.user_play"}},[r("el-option",{attrs:{label:"房东",value:"房东"}}),r("el-option",{attrs:{label:"租客",value:"租客"}})],1)],1),r("el-form-item",{attrs:{label:"租房状态"}},[r("el-select",{attrs:{placeholder:"请选择租房状态"},model:{value:e.form.user_status,callback:function(t){e.$set(e.form,"user_status",t)},expression:"form.user_status"}},[r("el-option",{attrs:{label:"租用中",value:"租用中"}}),r("el-option",{attrs:{label:"已退租",value:"已退租"}})],1)],1),r("el-form-item",{attrs:{label:"房源类型"}},[r("el-select",{attrs:{placeholder:"请选择租房类型"},model:{value:e.form.user_type,callback:function(t){e.$set(e.form,"user_type",t)},expression:"form.user_type"}},[r("el-option",{attrs:{label:"海景房",value:"经济房"}}),r("el-option",{attrs:{label:"学区房",value:"学区房"}}),r("el-option",{attrs:{label:"单身公寓",value:"学区房"}})],1)],1),r("el-form-item",{attrs:{label:"房子地址"}},[r("div",{staticClass:"block"},[r("el-cascader",{attrs:{options:e.options},model:{value:e.form.user_address,callback:function(t){e.$set(e.form,"user_address",t)},expression:"form.user_address"}})],1)]),r("el-form-item",{attrs:{label:"入住时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:e.form.user_Sdate,callback:function(t){e.$set(e.form,"user_Sdate",t)},expression:"form.user_Sdate"}})],1)]),r("el-form-item",{attrs:{label:"退房时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:e.form.user_Edate,callback:function(t){e.$set(e.form,"user_Edate",t)},expression:"form.user_Edate"}})],1)]),r("el-form-item",[r("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:e.editSubmit}},[e._v("确 定")])],1)],1)],1)])],1)},a=[],l=(r("9302"),r("ea69"),{filters:{statusFilter:function(e){var t={"租用中":"success","闲置":"gray","已退租":"danger"};return t[e]}},data:function(){return{userList:[],form:{user_id:"",user_name:"",user_phone:"",user_play:"",user_status:"",user_Sdate:"",user_Edate:"",user_address:"",user_type:""},search:"",drawer:!1,drawer2:!1,options:[{value:"上海市",label:"上海市",children:[{value:"宝山区",label:"宝山区",children:[{value:"宝山区",label:"宝山区"}]},{value:"徐汇区",label:"徐汇区",children:[{value:"徐汇区",label:"徐汇区"}]},{value:"黄埔新区",label:"黄埔新区",children:[{value:"黄埔新区",label:"黄埔新区"}]},{value:"长宁区",label:"长宁区",children:[{value:"长宁区",label:"长宁区"}]}]}]}},mounted:function(){var e=window.localStorage.getItem("userList");e&&(this.userList=JSON.parse(window.localStorage.getItem("userList")))},methods:{handleEdit:function(e,t){var r=this;r.drawer2=!0,r.form=t,console.info(t)},handleDelete:function(e,t){var r=this;console.info(e),this.$confirm("确认删除此数据？").then((function(t){r.userList.splice(e,1),window.localStorage.setItem("userList",JSON.stringify(r.userList));window.localStorage.getItem("userList");r.$message({message:"添加成功！",type:"success"})})).catch((function(e){}))},onSubmit:function(){var e=this;e.drawer=!1,e.form.user_address&&(e.form.user_address=e.form.user_address.join("/")),e.userList.push(e.form),window.localStorage.setItem("userList",JSON.stringify(e.userList)),e.$message({message:"添加成功！",type:"success"})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},editSubmit:function(){var e=this;e.drawer2=!1,e.form.user_address&&(e.form.user_address=e.form.user_address.join("/")),window.localStorage.setItem("userList",JSON.stringify(e.userList)),e.$message({message:"修改成功！",type:"success"})},handleClose:function(e){this.$confirm("是否放弃编辑?").then((function(t){e()})).catch((function(e){}))}}}),o=l,i=(r("a79f"),r("9ca4")),n=Object(i["a"])(o,s,a,!1,null,"14593532",null);t["default"]=n.exports},8137:function(e,t,r){},9302:function(e,t,r){"use strict";var s=r("1c8b"),a=r("692f"),l=r("da10"),o=r("d7e1"),i=[].join,n=a!=Object,u=o("join",",");s({target:"Array",proto:!0,forced:n||!u},{join:function(e){return i.call(l(this),void 0===e?",":e)}})},a79f:function(e,t,r){"use strict";var s=r("8137"),a=r.n(s);a.a},ea69:function(e,t,r){"use strict";var s=r("1c8b"),a=r("e1d6"),l=r("3da3"),o=r("d88d"),i=r("3553"),n=r("1ca1"),u=r("1bbd"),c=r("1ea7"),d=r("ff9c"),f=c("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,_=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!f||!m},{splice:function(e,t){var r,s,c,d,f,m,h=i(this),y=o(h.length),w=a(e,y),k=arguments.length;if(0===k?r=s=0:1===k?(r=0,s=y-w):(r=k-2,s=_(p(l(t),0),y-w)),y+r-s>b)throw TypeError(v);for(c=n(h,s),d=0;d<s;d++)f=w+d,f in h&&u(c,d,h[f]);if(c.length=s,r<s){for(d=w;d<y-s;d++)f=d+s,m=d+r,f in h?h[m]=h[f]:delete h[m];for(d=y;d>y-s+r;d--)delete h[d-1]}else if(r>s)for(d=y-s;d>w;d--)f=d+s-1,m=d+r-1,f in h?h[m]=h[f]:delete h[m];for(d=0;d<r;d++)h[d+w]=arguments[d+2];return h.length=y-s+r,c}})}}]);