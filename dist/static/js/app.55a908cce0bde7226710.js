webpackJsonp([1],{FVuk:function(t,s){},"Lg6/":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")({name:"App"},i,!1,function(t){e("vGjf")},null,null).exports,r=e("/ocq"),a=e("RRo+"),o=e.n(a),c={name:"CountDown",data:function(){return{status:{btn:"开始",btnTxt:["开始","暂停","继续"],status:0,statusArr:[0,1,2,3]},intervalId:null,msg:"00:00:00",time:{minute:""},secend:0,rule:{minute:[{validator:function(t,s,e){if(!s)return e(new Error("不能为空"));setTimeout(function(){o()(Number(s))?e():e(new Error("请输入整数值"))},1e3)},trigger:"blur"}]}}},methods:{confirm:function(t){var s=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;s.setSecend(),s.printTime()})},setSecend:function(){this.secend=60*this.time.minute},getTime:function(t){var s={hours:"",minute:"",secend:""},e=String(t/3600);s.hours=e.split(".")[0],t%=3600;var n=String(t/60);return s.minute=n.split(".")[0],s.secend=String(t%60),1===s.secend.length&&(s.secend="0"+s.secend),1===s.hours.length&&(s.hours="0"+s.hours),1===s.minute.length&&(s.minute="0"+s.minute),s},printTime:function(){var t=this.getTime(this.secend);this.msg=t.hours+":"+t.minute+":"+t.secend},countDown:function(){this.printTime(),this.secend<=0&&(window.clearInterval(this.intervalId),this.status.btn=this.status.btnTxt[1],this.status.status=this.status.statusArr[3],this.setSecend()),this.secend-=1},begin:function(){var t=this;if(0===this.status.status||2===this.status.status){if(0===this.secend)return void this.$message("设置个时间呗");this.status.btn=this.status.btnTxt[1],this.status.status=this.status.statusArr[1],this.intervalId=setInterval(function(){t.countDown()},1e3)}else 1===this.status.status&&(this.status.btn=this.status.btnTxt[2],this.status.status=this.status.statusArr[2],clearInterval(this.intervalId))},reset:function(){clearInterval(this.intervalId),this.setSecend(),this.printTime(),this.status.btn="开始",this.status.status=this.status.statusArr[0]}},mounted:function(){this.status.btn=this.status.btnTxt[0],this.status.status=this.status.statusArr[0]}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{attrs:{id:"countdown"}},[e("h1",[t._v(t._s(t.msg))])]),t._v(" "),e("section",{attrs:{id:"option"}},[e("el-button",{attrs:{id:"hold",type:"primary",disabled:3==t.status.status},on:{click:function(s){t.begin()}}},[t._v(t._s(t.status.btn))]),t._v(" "),e("el-button",{attrs:{id:"end",type:"primary",disabled:1==t.status.status},on:{click:function(s){t.reset()}}},[t._v("重置")])],1),t._v(" "),e("section",[e("el-form",{ref:"time",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.time,rules:t.rule}},[e("el-form-item",{attrs:{label:"倒数几分钟啊",prop:"minute"}},[e("el-input",{attrs:{placeholder:"几分钟呢",disabled:0!=t.status.status},nativeOn:{keyup:function(s){t.confirm("time")}},model:{value:t.time.minute,callback:function(s){t.$set(t.time,"minute",s)},expression:"time.minute"}})],1),t._v(" "),e("el-form-item")],1)],1)])},staticRenderFns:[]};var d=e("VU/8")(c,l,!1,function(t){e("Lg6/")},"data-v-642a68d5",null).exports;n.default.use(r.a);var h=new r.a({routes:[{path:"/",name:"CountDown",component:d}]}),m=(e("FVuk"),e("jPwE")),f=e.n(m);n.default.use(f.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:h,components:{App:u},template:"<App/>"})},vGjf:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.55a908cce0bde7226710.js.map