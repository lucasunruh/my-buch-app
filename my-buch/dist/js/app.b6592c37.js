(function(t){function e(e){for(var r,i,o=e[0],s=e[1],u=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0110":function(t,e,n){"use strict";n("ba31")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("080a"),c=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar",{attrs:{title:"MyBuch"}}),n("History")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui menu"},[n("div",{staticClass:"header item"},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"item"},[t._v(" Home ")])])},u=[],l={name:"Navbar",props:{title:String}},f=l,p=(n("0110"),n("2877")),d=Object(p["a"])(f,s,u,!1,null,"6d7836a4",null),h=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(this.batches,(function(t){return n("div",{key:t.batch_id},[n("Batch",{attrs:{info:t}})],1)})),0)},b=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui two column centered grid"},[n("div",{staticClass:"column"},[n("div",{staticClass:"ui fluid card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("Batch "+t._s(t.info.batch_number)+": "+t._s(t.info.batch_name))])]),n("div",{staticClass:"content"},[n("div",{staticClass:"description"},[t._v(" "+t._s(t.info.IF_details)+" ")])])])])])},_=[],y={name:"Batch",props:{info:Object}},g=y,O=Object(p["a"])(g,m,_,!1,null,"20e4d1ce",null),j=O.exports,w=(n("d3b7"),n("96cf"),n("1da1"));function x(){return C.apply(this,arguments)}function C(){return C=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tranquil-dawn-28713.herokuapp.com/batches").then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}var B={name:"History",components:{Batch:j},data:function(){return{batches:[]}},created:function(){this.getAllBatches()},methods:{getAllBatches:function(){var t=this;x().then((function(e){return t.batches=e}))}}},P=B,k=Object(p["a"])(P,v,b,!1,null,"7613b46c",null),S=k.exports,M={name:"App",components:{Navbar:h,History:S}},$=M,E=(n("034f"),Object(p["a"])($,i,o,!1,null,null,null)),H=E.exports;n("c4ca");r["a"].config.productionTip=!1,r["a"].use(c.a),new r["a"]({render:function(t){return t(H)}}).$mount("#app")},"85ec":function(t,e,n){},ba31:function(t,e,n){}});
//# sourceMappingURL=app.b6592c37.js.map