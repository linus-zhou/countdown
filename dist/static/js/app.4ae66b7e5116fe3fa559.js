webpackJsonp([1],{"/LlY":function(t,s){},FVuk:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")({name:"App"},i,!1,function(t){e("vGjf")},null,null).exports,r=e("/ocq"),a=e("RRo+"),o=e.n(a),c={name:"clock",props:{},data:function(){return{clock:"00:00:00"}},methods:{show:function(t){var s={hours:"",minute:"",secend:""};console.log(t);var e=String(t/3600);s.hours=e.split(".")[0],t%=3600;var n=String(t/60);s.minute=n.split(".")[0],s.secend=String(t%60),1===s.secend.length&&(s.secend="0"+s.secend),1===s.hours.length&&(s.hours="0"+s.hours),1===s.minute.length&&(s.minute="0"+s.minute),this.clock=s.hours+":"+s.minute+":"+s.secend}}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("h1",[this._v(this._s(this.clock))])])},staticRenderFns:[]};var h={components:{Clock:e("VU/8")(c,l,!1,function(t){e("XYdM")},"data-v-072312f3",null).exports},name:"CountDown",data:function(){return{status:{btn:"开始",btnTxt:["开始","暂停","继续"],status:0,statusArr:[0,1,2,3]},intervalId:null,time:{minute:""},secend:0,rule:{minute:[{validator:function(t,s,e){if(!s)return e(new Error("不能为空"));setTimeout(function(){o()(Number(s))?e():e(new Error("请输入整数值"))},1e3)},trigger:"blur"}]}}},methods:{confirm:function(t){var s=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;s.setSecend(),s.printTime()})},setSecend:function(){this.secend=60*this.time.minute},printTime:function(){this.$refs.clock.show(this.secend)},countDown:function(){this.printTime(),this.secend<=0&&(window.clearInterval(this.intervalId),this.status.btn=this.status.btnTxt[1],this.status.status=this.status.statusArr[3],this.setSecend()),this.secend-=1},begin:function(){0===this.status.status||2===this.status.status?this.goAhead():1===this.status.status&&this.hold()},goAhead:function(){var t=this;0!==this.secend?(this.status.btn=this.status.btnTxt[1],this.status.status=this.status.statusArr[1],this.intervalId=setInterval(function(){t.countDown()},1e3)):this.$message("设置个时间呗")},hold:function(){this.status.btn=this.status.btnTxt[2],this.status.status=this.status.statusArr[2],clearInterval(this.intervalId)},reset:function(){clearInterval(this.intervalId),this.setSecend(),this.printTime(),this.status.btn="开始",this.status.status=this.status.statusArr[0]}},mounted:function(){this.status.btn=this.status.btnTxt[0],this.status.status=this.status.statusArr[0]}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{attrs:{id:"countdown"}},[e("clock",{ref:"clock"})],1),t._v(" "),e("section",{attrs:{id:"option"}},[e("el-button",{attrs:{id:"hold",type:"primary",disabled:3==t.status.status},on:{click:function(s){t.begin()}}},[t._v(t._s(t.status.btn))]),t._v(" "),e("el-button",{attrs:{id:"end",type:"primary",disabled:1==t.status.status},on:{click:function(s){t.reset()}}},[t._v("重置")])],1),t._v(" "),e("section",[e("el-form",{ref:"time",attrs:{inline:!0,model:t.time,rules:t.rule}},[e("el-form-item",{attrs:{label:"倒数几分钟啊",prop:"minute"}},[e("el-input",{attrs:{placeholder:"几分钟呢",disabled:0!=t.status.status},nativeOn:{keyup:function(s){t.confirm("time")}},model:{value:t.time.minute,callback:function(s){t.$set(t.time,"minute",s)},expression:"time.minute"}})],1),t._v(" "),e("el-form-item")],1)],1)])},staticRenderFns:[]};var f=e("VU/8")(h,d,!1,function(t){e("/LlY")},"data-v-0a8bf950",null).exports;n.default.use(r.a);var m=new r.a({routes:[{path:"/",name:"CountDown",component:f}]}),p=(e("FVuk"),e("jPwE")),v=e.n(p);n.default.use(v.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,components:{App:u},template:"<App/>"})},XYdM:function(t,s){},vGjf:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.4ae66b7e5116fe3fa559.js.map