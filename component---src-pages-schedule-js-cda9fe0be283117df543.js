(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(e,t,r){"use strict";r.r(t);r(42),r(173),r(25),r(3),r(31),r(20),r(7),r(174),r(175),r(256),r(254);var n=r(244),a=r(15),o=r(0),i=r(314),c=r.n(i),u=(r(77),r(259));function l(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(u.a)(e);return t.setHours(0,0,0,0),t}function d(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=l(e),n=l(t);return r.getTime()===n.getTime()}(e,Date.now())}r(8),r(27);var s=Object(n.a)("div",{target:"eno15wf0"})("display:grid;grid-template-columns:",function(e){return"repeat("+e.numberOfButtons+", auto [col-start])"},";grid-column-gap:10px;",function(e){return e.overflow?"overflow: "+e.overflow:""},";"),p=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children"]);return Object(a.d)(s,r,t)},b=r(269),f=r(280),g=r(74),m=r(312),h=r(255),y=r(246),w=r(247),j=[{label:"Felles",type:"other"},{label:"Keynote",type:"keynote"},{label:"Talk",type:"talk"}],v=Object(n.a)("div",{target:"ejkgj6o0"})("display:grid;width:40%;grid-template-rows:",y.a.large,";grid-template-columns:30% 30% 30%;margin:0 auto;grid-column-gap:",y.a.normal,";@media (",w.a.medium,"){width:100%;margin-top:",y.a.large,";}"),O=function(e){return Object(g.a)("dipfont-weight:700;border-radius:5px;color:white;background-color:",m.q[e],";")},k=function(e){return Object(g.a)("font-weight:700;border-radius:5px;color:black;background-color:inherit;border:2px solid ",m.q[e],";")},x=function(e,t,r,n){return e?r?k(n):O(n):r?O(n):k(n)},T=function(e){var t=e.activeFilters,r=e.onChangeActiveFilters;return Object(a.d)(v,null,j.map(function(e){return Object(a.d)(h.a,{key:e.type,onClick:function(){return r(e.type)},appearance:"stripped",css:(n=e.type,o=t.includes(e.type),void 0===n&&(n="other"),void 0===o&&(o=!1),Object(g.a)("&,&:hover,&:focus{display:flex;justify-content:center;line-height:1.8rem;}&{",x(!1,0,o,n),";}&:focus{",x(!1,0,o,n),";}&:hover{",x(!0,0,o,n),";}"))},e.label);var n,o}))},S=r(289),D=r(278),A=r(253),E=r(279),C=r(245),V=r(276),q=r(451),F=r.n(q),H=Object(n.a)("div",{target:"epm5n2h0"})("display:flex;width:100%;justify-content:center;margin-top:",y.a.large,";@media (",w.a.medium,"){display:none;}"),z={name:"1cu0vj4",styles:"dipfont-weight:700;color:white;"},N=function(e){return z},B=function(e){return Object(g.a)("font-weight:700;color:",C.a.blue,";background-color:transparent;border:1px solid ",C.a.blue,";")},I=function(e){return void 0===e&&(e=!1),Object(g.a)("padding:0 3rem;padding-top:0.2rem;border-radius:0;",function(e,t){return e?t?B():N():t?N():B()}(!1,e))},J=[{type:"column",icon:Object(a.d)(F.a,null)},{type:"row",icon:Object(a.d)(F.a,{css:Object(g.a)({name:"1qx34im",styles:"transform:rotate(90deg);"})})}],M=function(e){var t=e.currentViewType,r=e.onChangeViewType;return Object(a.d)(H,null,J.map(function(e){return Object(a.d)(h.a,{key:e.type,onClick:function(){return r(e.type)},css:I(t===e.type)},e.icon)}))};function P(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"getActiveDay",function(){return L});var _=Object(a.c)("color:white;background-color:",C.a.blueDarkest,";border-color:",C.a.blueDarkest,";"),K=Object(n.a)("div",{target:"ediprem0"})("display:flex;flex-direction:column;@media (",w.a.medium,"){display:grid;grid-template-columns:90% 10%;grid-template-rows:auto;grid-template-areas:'button arrow';}"),W=Object(n.a)("a",{target:"ediprem1"})("padding:",y.a.small," ",y.a.normal,";background-color:",C.a.blue,";text-decoration:none;color:white;border:1px solid ",C.a.blue,";border-radius:50px;text-align:center;display:",function(e){return e.isActive&&_},";&:hover,&:focus{",_,";}@media (",w.a.medium,"){grid-area:button;}"),G=Object(a.c)("margin-top:",y.a.xsmall,";color:",C.a.blue,";visibility:visible;align-self:center;@media (",w.a.medium,"){grid-area:arrow;visibility:hidden;}"),L=function(){return A.a.days.find(function(e){return d(new Date(A.b.year,A.b.monthNumber-1,e.date))})||A.a.days[0]};t.default=function(e){var t=e.location,r=W.withComponent(S.a,{target:"ediprem2"}),n=Object(o.useState)(j.map(function(e){return e.type})),i=n[0],u=n[1],l=Object(o.useState)([]),d=l[0],s=l[1],g=Object(o.useState)("row"),m=g[0],h=g[1],v=A.a.days.find(function(e){return e.date===t.hash.substring(1)})||L(),O=Object(V.a)();Object(o.useEffect)(function(){u(j.map(function(e){return e.type})),s(O)},[]),Object(o.useEffect)(function(){u(j.map(function(e){return e.type}))},[t]);var k=d.filter(function(e){return e.date===v.date}).filter(function(e){return!(i.length>0)||i.includes(e.type||"other")});if(!v||!v.date)return Object(a.d)("span",null,"Her skjedde noe feil gitt...");return Object(a.d)(E.a,null,Object(a.d)(b.a,null,Object(a.d)(f.a,{minHeight:"5vh",backgroundColor:C.a.blueDark,color:"white"},Object(a.d)(p,{css:(A.a.days.length,Object(a.c)("margin:",y.a.large," auto;margin-bottom:0;grid-template-columns:100%;grid-template-rows:",y.a.xlarge,";grid-template-columns:25% 25% 25% 25%;width:80%;grid-template-rows:auto;@media (",w.a.medium,"){grid-row-gap:10px;width:100%;grid-template-rows:auto auto;grid-template-columns:50% 50%;margin-bottom:",y.a.normal,";}")),numberOfButtons:A.a.days.length},A.a.days.map(function(e){return Object(a.d)(K,{key:e.label},Object(a.d)(r,{isActive:v.date===e.date,to:"/schedule#"+e.date},e.label),v.date===e.date&&Object(a.d)(c.a,{css:G,fontSize:"large"}))}))),Object(a.d)(f.a,{minHeight:"95vh",withTopSeperator:!0,withBottomSeperator:!0},Object(a.d)(T,{activeFilters:i,onChangeActiveFilters:function(e){var t=i.includes(e)?i.filter(function(t){return t!==e}):[].concat(P(i),[e]);u(t)}}),Object(a.d)(M,{currentViewType:m,onChangeViewType:h}),Object(a.d)(D.a,{activeFilter:i,slots:k,viewType:m}))))}},259:function(e,t,r){"use strict";r.d(t,"a",function(){return n});r(25),r(28),r(3);function n(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},451:function(e,t,r){"use strict";r(26);var n=r(62);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(250)).default)(a.default.createElement("path",{d:"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"}),"ViewWeek");t.default=o}}]);
//# sourceMappingURL=component---src-pages-schedule-js-cda9fe0be283117df543.js.map