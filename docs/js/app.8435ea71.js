(function(t){function e(e){for(var r,o,l=e[0],i=e[1],c=e[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view",{staticClass:"container text-center mt-5"})],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Vue-Components")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),t._m(1)]),t._m(2)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Apis")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("pg-rest-api")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("clean-pg-rest-api")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("php-rest-api")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("clean-php-rest-api")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),a("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v(" Search ")])])}],i=a("d4ec"),c=a("2caf"),u=a("262e"),p=a("9ab4"),f=a("60a3"),v=function(t){Object(u["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(f["c"]);v=Object(p["a"])([f["a"]],v);var b=v,d=b,m=a("2877"),h=Object(m["a"])(d,o,l,!1,null,null,null),g=h.exports,_={components:{Navbar:g}},y=_,C=Object(m["a"])(y,n,s,!1,null,null,null),w=C.exports,O=a("8c4f"),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"This is where my app will begin..."}})],1)},x=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},$=[],E=function(t){Object(u["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(f["c"]);Object(p["a"])([Object(f["b"])()],E.prototype,"msg",void 0),E=Object(p["a"])([f["a"]],E);var k=E,P=k,T=Object(m["a"])(P,S,$,!1,null,null,null),H=T.exports,M={name:"Home",components:{HelloWorld:H}},A=M,D=Object(m["a"])(A,j,x,!1,null,null,null),J=D.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],W={},q=Object(m["a"])(W,N,V,!1,null,null,null),z=q.exports;r["a"].use(O["a"]);var B=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:z}],F=new O["a"]({base:"",routes:B}),G=F,I=a("2f62");r["a"].use(I["a"]);var K=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:G,store:K,render:function(t){return t(w)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8435ea71.js.map