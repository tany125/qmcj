(function(t){function e(e){for(var r,l,u=e[0],i=e[1],c=e[2],p=0,f=[];p<u.length;p++)l=u[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4eec":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("cca1"),o=n.n(a),l=(n("8842"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Cj")],1)}),u=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"center"}},[n("h2",[t._v("2024级10班新年礼物抽奖")]),n("div",{attrs:{id:"tanyu"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.jkl}},[t._v("随机生成列表")]),n("el-button",{attrs:{type:"primary"},on:{click:t.tanyu}},[t._v("停止")]),n("el-button",{attrs:{type:"primary"},on:{click:t.jkl2}},[t._v("随机生成一个数")]),n("el-button",{attrs:{type:"primary"},on:{click:t.tanyu2}},[t._v("停止")]),n("div",[n("h3",[t._v("抽取结果："+t._s(t.nub))])])],1),n("div",{attrs:{id:"data"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[n("el-table-column",{attrs:{prop:"date",label:"礼物编号",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"序号",width:"180"}})],1)],1)])},c=[],s=(n("4e82"),n("b0c0"),{data:function(){return{tableData:[],b:"",nub:"",k:""}},methods:{jkl:function(){var t=this;function e(t,e){return Math.random()>.5?-1:1}for(var n=new Array,r=1;r<=45;r++)n[r]=r;this.b=setInterval((function(){n.sort(e);for(var r=0;r<t.tableData.length;r++)t.tableData[r].name=n[r]}),100),console.log(this.b)},tanyu2:function(){clearInterval(this.k)},jkl2:function(){var t=this,e=1,n=45;this.k=setInterval((function(){t.nub=Math.round(Math.random()*(n-e)+e)}),100)},tanyu:function(){clearInterval(this.b),console.log(this.b)}},mounted:function(){for(var t=1;t<=45;t++){var e={date:t,name:"?"};this.tableData.push(e)}console.log(this.tableData)}}),p=s,f=(n("abb8"),n("2877")),b=Object(f["a"])(p,i,c,!1,null,null,null),d=b.exports,v={name:"App",components:{Cj:d}},h=v,y=Object(f["a"])(h,l,u,!1,null,null,null),m=y.exports;r["default"].use(o.a),new r["default"]({el:"#app",render:function(t){return t(m)}})},abb8:function(t,e,n){"use strict";n("4eec")}});
//# sourceMappingURL=app.84d9a83d.js.map