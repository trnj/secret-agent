(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{707:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(708),r=n.n(i),u=n(709);function o(){return u.forEach((function(t){t.link="/docs/"+r()(t.title),t.items=t.items.map((function(e){if(e.items)e.link=t.link+"/"+r()(e.title),e.items=e.items.map((function(t){return"string"==typeof t?{title:t,link:e.link+"/"+r()(t)}:t}));else if("string"==typeof e)return{title:e,link:t.link+"/"+r()(e)};return e}))})),u}},708:function(t,e,n){(function(e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+r+"]",o="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",s="\\d+",a="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+r+s+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",p="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="(?:"+c+"|"+l+")",g="(?:"+p+"|"+l+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,d].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),h="(?:"+[a,f,d].join("|")+")"+x,v=RegExp("['’]","g"),y=RegExp(o,"g"),_=RegExp([p+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[u,p,"$"].join("|")+")",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[u,p+b,"$"].join("|")+")",p+"?"+b+"+(?:['’](?:d|ll|m|re|s|t|ve))?",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",s,h].join("|"),"g"),k=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O="object"==typeof e&&e&&e.Object===Object&&e,j="object"==typeof self&&self&&self.Object===Object&&self,C=O||j||Function("return this")();var P,E=(P={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n",ſ:"ss"},function(t){return null==P?void 0:P[t]});var A=Object.prototype.toString,R=C.Symbol,w=R?R.prototype:void 0,I=w?w.toString:void 0;function L(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==A.call(t)}(t))return I?I.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function S(t){return null==t?"":L(t)}var U,z=(U=function(t,e,n){return t+(n?"-":"")+e.toLowerCase()},function(t){return function(t,e,n,i){var r=-1,u=t?t.length:0;for(i&&u&&(n=t[++r]);++r<u;)n=e(n,t[r],r,t);return n}(function(t,e,i){return t=S(t),void 0===(e=i?void 0:e)?function(t){return k.test(t)}(t)?function(t){return t.match(_)||[]}(t):function(t){return t.match(n)||[]}(t):t.match(e)||[]}(function(t){return(t=S(t))&&t.replace(i,E).replace(y,"")}(t).replace(v,"")),U,"")});t.exports=z}).call(this,n(2))},709:function(t,e){t.exports=[{title:"Overview",items:["Introduction","Basic concepts","Configuration"]},{title:"Basic Interfaces",items:["SecretAgent","Browser","User","Interactions","AwaitedDOM"]},{title:"Advanced",items:["Emulators","Humanoids","UserProfile","UpstreamProxy","Resource","ResourceRequest","ResourceResponse","WebsocketResource","Remote","Session","SessionReplay"]},{title:"Contribute",items:["How to contribute","Code of conduct"]},{title:"Help",items:["Prerequisites","How to upgrade","Troubleshooting"]}]},710:function(t,e,n){},711:function(t,e){},774:function(t,e,n){"use strict";var i=n(710);n.n(i).a},775:function(t,e,n){"use strict";var i=n(711),r=n.n(i);e.default=r.a},909:function(t,e,n){"use strict";n.r(e);var i,r=n(56),u=n(82),o=n(707),s=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,i){var r,u=arguments.length,o=u<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(u<3?r(o):u>3?r(e,n,o):r(e,n))||o);return u>3&&o&&Object.defineProperty(e,n,o),o},c=Object(o.a)(),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.links=c,e}return s(e,t),Object.defineProperty(e.prototype,"subtitles",{get:function(){return this.$page.record.subtitles.filter((function(t,e,n){return[2,3].includes(t.depth)}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentPath",{get:function(){return this.$route.matched[0].path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"editLink",{get:function(){var t=this.currentPath;return 1==(t.match(new RegExp("/","g"))||[]).length&&(t+="/README"),"https://github.com/ulixee/secret-agent/blob/master/website"+t+".md"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){for(var t=[],e=0,n=this.links;e<n.length;e++){var i=n[e];t.push({title:i.title,link:i.link});for(var r=0,u=i.items;r<u.length;r++){var o=u[r];t.push({title:o.title,link:o.link}),o.items&&t.push.apply(t,o.items)}}return t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentIndex",{get:function(){var t=this;return this.items.findIndex((function(e){return e.link.replace(/\/$/,"")===t.$route.path.replace(/\/$/,"")}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nextPage",{get:function(){return this.items[this.currentIndex+1]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"previousPage",{get:function(){return this.items[this.currentIndex-1]},enumerable:!0,configurable:!0}),e=a([Object(r.a)({metaInfo:function(){var t=this.$page.record,e=t.title,n=t.headings;return{title:e||(n.length?n[0].value:void 0)}},components:{GithubLogo:u.a}})],e)}(r.b),f=(n(774),n(1)),d=n(775),p=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CoreLayout",{staticClass:"has-sidebar DocsPage",attrs:{footer:!1}},[n("div",{staticClass:"container flex flex-align-top"},[n("div",{staticClass:"sidebar"},[t._l(t.links,(function(e,i){return t.links?[n("h3",{key:"title-"+i,staticClass:"menu-item"},[t._v(t._s(e.title))]),t._l(e.items,(function(e,r){return[e.items?[n("h4",{key:"title-"+i+"-"+r,staticClass:"menu-item"},[t._v(t._s(e.title))]),t._l(e.items,(function(e,u){return[n("g-link",{key:"link-"+i+"-"+r+"-"+u,staticClass:"menu-item menu-link",attrs:{exact:"/docs/"==e.link,to:e.link}},[t._v(t._s(e.title))])]}))]:[n("g-link",{key:"link-"+i+"-"+r,staticClass:"menu-item menu-link",attrs:{exact:"/docs/"==e.link,to:e.link}},[t._v(t._s(e.title))])]]}))]:t._e()}))],2),n("Section",{staticClass:"doc-content flex-fit",attrs:{container:"base"}},[n("VueRemarkContent",{staticClass:"post mb"}),n("p",[n("a",{staticClass:"github-edit-link",attrs:{href:t.editLink,target:"_blank"}},[n("GithubLogo"),n("span",[t._v("Edit this page on GitHub")])],1)]),n("nav",{staticClass:"docs-nav"},[n("div",{staticClass:"docs-nav__previous"},[t.previousPage?n("g-link",{staticClass:"button button--small docs-nav__link",attrs:{exact:"",to:t.previousPage.link}},[t._v("← "+t._s(t.previousPage.title))]):t._e()],1),n("div",{staticClass:"docs-nav__next"},[t.nextPage?n("g-link",{staticClass:"button button--small docs-nav__link",attrs:{exact:"",to:t.nextPage.link}},[t._v(t._s(t.nextPage.title)+" →")]):t._e()],1)])],1),n("div",{staticClass:"sidebar sidebar--right hide-for-small"},[t.subtitles.length>0&&3!==t.subtitles[0].depth?[n("h3",[t._v("On this page")]),t.subtitles.length?n("ul",{staticClass:"menu-item submenu"},t._l(t.subtitles,(function(e){return n("li",{key:e.value,staticClass:"submenu__item",class:"submenu__item-depth-"+e.depth},[n("a",{staticClass:"submenu__link",attrs:{href:e.anchor}},[t._v(t._s(e.value.replace(" W3C","")))])])})),0):t._e()]:t._e()],2)],1)])}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(p);e.default=p.exports}}]);