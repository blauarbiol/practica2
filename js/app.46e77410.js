(function(){"use strict";var t={2826:function(t,e,i){i(7461),i(2708);var n=i(5471),a=i(5521);i(9313);n["default"].use(a.Ay$);var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("Furniture")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ms-auto"},[e("b-nav-item",{attrs:{href:"/"}},[t._v("Home")]),e("b-nav-item",{attrs:{href:"/about"}},[t._v("About")]),e("b-nav-item",{attrs:{href:"/visual"}},[t._v("Visual")]),e("b-nav-item",{attrs:{href:"/baixavisio"}},[t._v("Baixa visió")]),e("b-nav-item",{attrs:{href:"/auditiu"}},[t._v("Auditiu")]),e("b-nav-item",{attrs:{href:"/motriu"}},[t._v("Motriu")]),e("b-nav-item",{attrs:{href:"/cognitiu"}},[t._v("Cognitiu")])],1)],1)],1),e("router-view"),t._m(0)],1)},o=[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"container"},[e("p",[t._v("© 2025 Disseny Digital i Tecnologies Creatives. Blau Arbiol i Andrea Ginés.")])])])}],s={name:"App"},u=s,l=i(1656),c=(0,l.A)(u,r,o,!1,null,null,null),d=c.exports,f=(i(8736),i(173)),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block img-fluid w-100 mida",attrs:{width:"1024",height:"480",src:i(9332),alt:"image slot"}})]},proxy:!0}])}),e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block img-fluid w-100 mida",attrs:{width:"1024",height:"480",src:i(3811),alt:"image slot"}})]},proxy:!0}])}),e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block img-fluid w-100 mida",attrs:{width:"1024",height:"480",src:i(5286),alt:"image slot"}})]},proxy:!0}])})],1),e("h1",[t._v("Apartats de la pàgina web")]),e("div",{staticClass:"image-container"},[e("div",[e("img",{staticClass:"img-fluid custom-image",attrs:{src:i(9349),alt:"una imatge d'una habitació que representa la secció d'about"}}),e("div",{staticClass:"mt-4 text-center"},[e("router-link",{staticClass:"btn btn-dark ml-3",attrs:{to:"/about"},nativeOn:{click:function(e){return t.onButtonClick.apply(null,arguments)}}},[t._v("About")])],1)]),e("div",[e("img",{staticClass:"img-fluid custom-image",attrs:{src:i(7587),alt:"imatge en negre que representa la secció de discapacitat visual total"}}),e("div",{staticClass:"mt-4 text-center"},[e("router-link",{staticClass:"btn btn-dark ml-3",attrs:{to:"/visual"},nativeOn:{click:function(e){return t.onButtonClick.apply(null,arguments)}}},[t._v("Visual")])],1)]),e("div",[e("img",{staticClass:"img-fluid custom-image",attrs:{src:i(7504),alt:"imatge d'un llit que representa la secció de baixa visió"}}),e("div",{staticClass:"mt-4 text-center"},[e("router-link",{staticClass:"btn btn-dark ml-3",attrs:{to:"/baixavisio"},nativeOn:{click:function(e){return t.onButtonClick.apply(null,arguments)}}},[t._v("Baixa Visió")])],1)])]),e("div",{staticClass:"image-container"},[e("div",[e("img",{staticClass:"img-fluid custom-image",attrs:{src:i(9753),alt:"imatge d'una dona parlant en llengua de signes que representa la secció de discapacitat auditiva"}}),e("div",{staticClass:"mt-4 text-center"},[e("router-link",{staticClass:"btn btn-dark ml-3",attrs:{to:"/auditiu"},nativeOn:{click:function(e){return t.onButtonClick.apply(null,arguments)}}},[t._v("Auditiu")])],1)]),e("div",[e("img",{staticClass:"img-fluid custom-image",attrs:{src:i(3059),alt:"imatge d'una butaca que representa la secció de discapacitat motriu"}}),e("div",{staticClass:"mt-4 text-center"},[e("router-link",{staticClass:"btn btn-dark ml-3",attrs:{to:"/motriu"},nativeOn:{click:function(e){return t.onButtonClick.apply(null,arguments)}}},[t._v("Motriu")])],1)]),e("div",[e("img",{staticClass:"img-fluid custom-image",attrs:{src:i(936),alt:"imatge d'una taula que representa la secció de discapacitat cognitiva"}}),e("div",{staticClass:"mt-4 text-center"},[e("router-link",{staticClass:"btn btn-dark ml-3",attrs:{to:"/cognitiu"},nativeOn:{click:function(e){return t.onButtonClick.apply(null,arguments)}}},[t._v("Cognitiu")])],1)])])],1)},p=[],b=i(1484),v=i(3040),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"})},h=[],C={name:"HelloWorld",props:{msg:String}},A=C,k=(0,l.A)(A,g,h,!1,null,"76c190b0",null),y=k.exports,x={name:"HomeView",components:{HelloWorld:y,BCarousel:b.L,BCarouselSlide:v.K},data(){return{slide:0,sliding:null}},methods:{onSlideStart(){this.sliding=!0},onSlideEnd(){this.sliding=!1}}},w=x,O=(0,l.A)(w,m,p,!1,null,"28f8c966",null),j=O.exports;n["default"].use(f.Ay);const E=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>i.e(594).then(i.bind(i,7274))},{path:"/visual",name:"visual",component:()=>i.e(51).then(i.bind(i,1430))},{path:"/baixavisio",name:"baixavisio",component:()=>i.e(334).then(i.bind(i,5683))},{path:"/auditiu",name:"auditiu",component:()=>i.e(406).then(i.bind(i,6409))},{path:"/motriu",name:"motriu",component:()=>i.e(355).then(i.bind(i,1613))},{path:"/cognitiu",name:"cognitiu",component:()=>i.e(383).then(i.bind(i,8906))}],S=new f.Ay({mode:"history",base:"/practica2/",routes:E});var q=S,P=i(466);n["default"].use(P.M),n["default"].config.productionTip=!1,new n["default"]({router:q,render:t=>t(d)}).$mount("#app")},9349:function(t,e,i){t.exports=i.p+"img/about.161beb88.jpg"},9753:function(t,e,i){t.exports=i.p+"img/auditiu.40f50eb0.png"},7504:function(t,e,i){t.exports=i.p+"img/bed.104190b0.webp"},7587:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEUAAAABAQF9fX2ZmZmsrKyLi4u2trYHBwd5eXm0tLSdnZ2Dg4OJiYmoqKiRkZGNjY36+vr09PTk5OTW1tbMzMzExMS9vb1qampjY2NpaWk2P5IbAAACsklEQVR4nO3djXKaQBSG4bMYWFTU1sakvf8b7fIjYjqthOqY7+z7jjNBg2EfEIwjMfbt+/HH6+upqtbrl91uM7TaH8oyXboOZbMtirpY1LYp/1W7mP1qs7rZ5mVO62rS27o67Y62Md+9W2UxWrAwKd0+TpwLi7q5/PN8w5zXX66ufmKhw9fYXqyxXRLGePmmTeaZDGPJ6ptzv2VrbrYwWp2EwUbhZCYL/z+K/r63jDZr9c1b3tW12N5S2Kr12QfifR6lZ8Htcd+J+GG22N5QpCNNq41/LvRTI/3bmGaMbM52nr28MPlhvatO23DJ4CUK50fp3dbhVwuhfgj1y0bYPR/6fL4YtyFC2QbhPguh00PNICzdCxv3wnLxS/gvH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1C8bYdNNPnswD2kQbs27sDhP+usi9LojDsLa/TukdX/a87NH84guQvN9Lob//bBweyhF6CCE+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1m75D6v2dGYSqIdQPoX7jOVFe3+TO57w2hMIh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUL9shIcshL7/Hr80p1tw+vk0XonjNvR+9uXe3G7EQdj9Z7kMhC6JF6FTIEIHIdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1C/bIQb98IXt0CEDkKoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfpkJXRonQt+f/OFfuDavu2E+wioLoVPjldAlcSp0fSxFKBxC/RDqN/7WFmOw+OzRPKB+w9VpG/bT7rLYqjph8CkM0UJC9q8tfD5KbRCeLO2ISfjsNf6AYnuk2abX+L57t+PPpq63hcM61a+339l2GAd91T5eAAAAAElFTkSuQmCC"},3059:function(t,e,i){t.exports=i.p+"img/chair1.a1aa444e.avif"},9332:function(t,e,i){t.exports=i.p+"img/slide1.d0fe7940.jpg"},3811:function(t,e,i){t.exports=i.p+"img/slide2.ace9a389.jpg"},5286:function(t,e,i){t.exports=i.p+"img/slide3.99bc926e.jpg"},936:function(t,e,i){t.exports=i.p+"img/table1.ad8487b0.avif"}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,a,r){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&r||o>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[u])}))?n.splice(u--,1):(s=!1,r<o&&(o=r));if(s){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,n){return i.f[n](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/"+{51:"visual",334:"baixavisio",355:"motriu",383:"cognitiu",406:"auditiu",594:"about"}[t]+"."+{51:"347480af",334:"00d52ea8",355:"57fc85c5",383:"3f34fa2b",406:"ebb9cb9d",594:"5770d73f"}[t]+".js"}}(),function(){i.miniCssF=function(t){return"css/"+{51:"visual",334:"baixavisio",355:"motriu",383:"cognitiu",406:"auditiu",594:"about"}[t]+"."+{51:"92192fc3",334:"9dc44422",355:"6b2420a3",383:"af02a3e0",406:"38fc2f8e",594:"fde84cbe"}[t]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="practica2:";i.l=function(n,a,r,o){if(t[n])t[n].push(a);else{var s,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",e+r),s.src=n),t[n]=[a];var f=function(e,i){s.onerror=s.onload=null,clearTimeout(m);var a=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(i)})),e)return e(i)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/practica2/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",i.nc&&(o.nonce=i.nc);var s=function(i){if(o.onerror=o.onload=null,"load"===i.type)a();else{var n=i&&i.type,s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=s,o.parentNode&&o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=s,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var a=i[n],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===t||r===e))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){a=o[n],r=a.getAttribute("data-href");if(r===t||r===e)return a}},n=function(n){return new Promise((function(a,r){var o=i.miniCssF(n),s=i.p+o;if(e(o,s))return a();t(n,s,null,a,r)}))},a={524:0};i.f.miniCss=function(t,e){var i={51:1,334:1,355:1,383:1,406:1,594:1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={524:0};i.f.j=function(e,n){var a=i.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(i,n){a=t[e]=[i,n]}));n.push(a[2]=r);var o=i.p+i.u(e),s=new Error,u=function(n){if(i.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,a[1](s)}};i.l(o,u,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,o=n[0],s=n[1],u=n[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(u)var c=u(i)}for(e&&e(n);l<o.length;l++)r=o[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},n=self["webpackChunkpractica2"]=self["webpackChunkpractica2"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(2826)}));n=i.O(n)})();
//# sourceMappingURL=app.46e77410.js.map