(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["emaildefault"],{"1dde":function(t,e,a){var s=a("d039"),r=a("b622"),i=a("2d00"),n=r("species");t.exports=function(t){return i>=51||!s((function(){var e=[],a=e.constructor={};return a[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"228a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"email-container full-container pos-r t-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 p-0 scrollable"},[a("email-list-c",{attrs:{emails:t.emails,title:t.inbox}})],1),a("div",{staticClass:"col-md-8 p-0"},[a("email-content-c",{attrs:{email:t.emails[0]}})],1)])])},r=[],i=a("d4ec"),n=a("262e"),c=a("2caf"),o=a("9ab4"),l=a("60a3"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"email-list h-100 layers"},[a("div",{staticClass:"layer w-100"},[a("div",{staticClass:"peers ai-c jc-sb p-20 fxw-nw"},[t._m(0),t._v(" "+t._s(t._f("capitalize")(t.title))+" "),t._m(1)])]),a("div",{staticClass:"layer w-100"},[a("div",{staticClass:"bdT bdB"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.emailSearchString,expression:"emailSearchString"}],staticClass:"form-control m-0 bdw-0 pY-15 pX-20",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.emailSearchString},on:{input:function(e){e.target.composing||(t.emailSearchString=e.target.value)}}})])]),a("div",{staticClass:"layer w-100 fxg-1 scrollable pos-r"},[a("div",{},t._l(t.emailList,(function(e,s){return a("div",{key:s,staticClass:"email-list-item peers fxw-nw p-20 bdB cur-p"},[t._m(2,!0),a("div",{staticClass:"peer peer-greed ov-h"},[a("div",{staticClass:"peers ai-c"},[a("div",{staticClass:"peer peer-greed"},[a("h6",[t._v(t._s(e.sender.name))])]),a("div",{staticClass:"peer"},[a("small",[t._v(t._s(t.timeSinceString(e.date))+" ago")])])]),a("h5",{staticClass:"fsz-def tt-c"},[t._v(t._s(e.subject))]),a("span",{staticClass:"whs-nw w-100 ov-h tov-e d-b"},[t._v(" "+t._s(e.message))])])])})),0)])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peer"},[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"email-side-toggle d-n@md+ btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-menu"})]),a("button",{staticClass:"btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-folder"})]),a("button",{staticClass:"btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-tag"})]),a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn cur-p no-after dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"icon-more-alt"})]),a("ul",{staticClass:"dropdown-menu fsz-sm",attrs:{"aria-labelledby":"btnGroupDrop1"}},[a("li",[a("a",{staticClass:"d-b td-n pY-5 pX-10"},[a("i",{staticClass:"icon-trash mR-10"}),a("span",[t._v("Delete")])])]),a("li",[a("a",{staticClass:"d-b td-n pY-5 pX-10"},[a("i",{staticClass:"icon-alert mR-10"}),a("span",[t._v("Mark as Spam")])])]),a("li",[a("a",{staticClass:"d-b td-n pY-5 pX-10"},[a("i",{staticClass:"icon-star mR-10"}),a("span",[t._v("Star")])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peer"},[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"fsz-xs btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-angle-left"})]),a("button",{staticClass:"fsz-xs btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-angle-right"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peer mR-10"},[a("div",{staticClass:"checkbox checkbox-circle checkbox-info peers ai-c"},[a("input",{staticClass:"peer",attrs:{type:"checkbox",id:"inputCall1",name:"inputCheckboxesCall"}}),a("label",{staticClass:" peers peer-greed js-sb ai-c",attrs:{for:"inputCall1"}})])])}],p=(a("4de4"),a("caad"),a("fb6a"),a("45fc"),a("b0c0"),a("2532"),a("bee2")),m=a("7dda"),b=function(t){Object(n["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.emailSearchString="",t}return Object(p["a"])(a,[{key:"timeSinceString",value:function(t){var e=Object(m["d"])(t,new Date);return 0!==e.hrs?e.hrs+" hrs":0!==e.min?e.min+" min":e.sec+" sec"}},{key:"emailList",get:function(){var t,e=this;return null===(t=this.emails)||void 0===t?void 0:t.filter((function(t){return[t.subject.toLowerCase(),t.sender.name.toLowerCase(),t.sender.address.toLowerCase(),t.message.toLowerCase()].some((function(t){return t.includes(e.emailSearchString.toLowerCase())}))})).sort((function(t,e){return void 0!==t.date&&void 0!==e.date?t.date>e.date?-1:e.date>t.date?1:0:-1}))}}]),a}(l["d"]);Object(o["a"])([Object(l["c"])()],b.prototype,"emails",void 0),Object(o["a"])([Object(l["c"])()],b.prototype,"title",void 0),b=Object(o["a"])([Object(l["a"])({name:"EmailListC",components:{},filters:{capitalize:function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}}})],b);var f=b,v=f,h=(a("8448"),a("2877")),C=Object(h["a"])(v,u,d,!1,null,"25db1806",null),g=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"email-content h-100"},[t.email?a("div",{staticClass:"h-100 scrollable pos-r"},[t._m(0),a("div",{staticClass:"email-content-wrapper"},[a("div",{staticClass:"peers ai-c jc-sb pX-40 pY-30"},[a("div",{staticClass:"peers peer-greed"},[a("div",{staticClass:"peer mR-20"},[t.email.sender&&t.email.sender.avatar?a("img",{staticClass:"bdrs-50p w-3r h-3r",attrs:{alt:"",src:t.email.sender.avatar}}):t._e()]),a("div",{staticClass:"peer"},[a("small",[t._v(t._s(t.prettyDateFromTimestamp(t.email.date)))]),a("h5",{staticClass:"mB-5"},[t._v(t._s(t.email.sender.name))]),a("span",[t._v("From: "+t._s(t.email.sender.address))])])]),t._m(1)]),a("div",{staticClass:"bdT pX-40 pY-30"},[a("h4",[t._v(t._s(t.email.subject))]),a("p",[t._v(" "+t._s(t.email.message||"This email has no content")+" ")])])])]):a("div",[t._v(" No email to display ")])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peers ai-c jc-sb p-20 fxw-nw d-n@md+"},[a("div",{staticClass:"peer"},[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"fsz-xs btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-angle-left"})]),a("button",{staticClass:"fsz-xs btn bdrs-2 mR-3 cur-p",attrs:{type:"button"}},[a("i",{staticClass:"icon-angle-right"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peer"},[a("a",{staticClass:"btn btn-danger bdrs-50p p-15 lh-0",attrs:{href:""}},[a("i",{staticClass:"icon-angle-double-left"})])])}],y=function(t){Object(n["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(p["a"])(a,[{key:"prettyDateFromTimestamp",value:function(t){return new Date(t).toLocaleDateString("en-EN",{year:"numeric",month:"short",day:"numeric"})}}]),a}(l["d"]);Object(o["a"])([Object(l["c"])()],y.prototype,"email",void 0),y=Object(o["a"])([Object(l["a"])({name:"EmailContentC",components:{}})],y);var w=y,O=w,x=(a("d4a2"),Object(h["a"])(O,j,_,!1,null,"0f36669d",null)),S=x.exports,D=function(t){Object(n["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.emails=[{date:Object(m["b"])(new Date,-1),sender:{name:"John Doe",address:"john@gmail.com",avatar:"https://randomuser.me/api/portraits/women/11.jpg"},message:Object(m["c"])(),subject:"Title 1"},{date:Object(m["b"])(new Date,-2),sender:{name:"Moe Doe",address:"moe@gmail.com",avatar:"https://randomuser.me/api/portraits/women/12.jpg"},message:Object(m["c"])(),subject:"Title 2"},{date:Object(m["b"])(new Date,-3),sender:{name:"Peter Doe",address:"peter@gmail.com",avatar:"https://randomuser.me/api/portraits/women/13.jpg"},message:Object(m["c"])(),subject:"Title 3"},{date:Object(m["b"])(new Date,-4),sender:{name:"Anne Doe",address:"anne@gmail.com",avatar:"https://randomuser.me/api/portraits/women/14.jpg"},message:Object(m["c"])(),subject:"Title 4"}],t}return a}(l["d"]);Object(o["a"])([Object(l["c"])()],D.prototype,"inbox",void 0),D=Object(o["a"])([Object(l["a"])({name:"EmailDefault",components:{EmailListC:g,EmailContentC:S}})],D);var E=D,R=E,T=(a("f528"),Object(h["a"])(R,s,r,!1,null,"cc6e3fd0",null));e["default"]=T.exports},2532:function(t,e,a){"use strict";var s=a("23e7"),r=a("5a34"),i=a("1d80"),n=a("ab13");s({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(i(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,a){var s=a("861d"),r=a("c6b6"),i=a("b622"),n=i("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==r(t))}},"45fc":function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").some,i=a("a640"),n=a("ae40"),c=i("some"),o=n("some");s({target:"Array",proto:!0,forced:!c||!o},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").filter,i=a("1dde"),n=a("ae40"),c=i("filter"),o=n("filter");s({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5bda":function(t,e,a){},"5f48":function(t,e,a){},"7dda":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return c}));var s=function(t,e){return new Date(t.setHours((t.getHours()+e)%24))},r=function(t,e){return new Date(t.setMinutes((t.getMinutes()+e)%60))},i=function(t,e){return e<t&&e.setDate(e.getDate()+1),e.getUTCMilliseconds()-t.getUTCMilliseconds()},n=function(t,e){var a=i(t,e),s=Math.floor(a/1e3/60/60);a-=1e3*s*60*60;var r=Math.floor(a/1e3/60);a-=1e3*r*60;var n=Math.floor(a/1e3);return a-=1e3*n,{hrs:s,min:r,sec:n,msec:a}},c=function(){return"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.                   Ut enim ad minim veniam, quis nostrud exercitation ullamco                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute                   irure dolor in reprehenderit in voluptate velit esse cillum                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat                   cupidatat non proident, sunt in culpa qui officia deserunt                   mollit anim id est laborum."}},8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var n=s(e);n in t?r.f(t,n,i(0,a)):t[n]=a}},8448:function(t,e,a){"use strict";var s=a("5bda"),r=a.n(s);r.a},ab13:function(t,e,a){var s=a("b622"),r=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(s){}}return!1}},b0c0:function(t,e,a){var s=a("83ab"),r=a("9bf2").f,i=Function.prototype,n=i.toString,c=/^\s*function ([^ (]*)/,o="name";s&&!(o in i)&&r(i,o,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(t){return""}}})},caad:function(t,e,a){"use strict";var s=a("23e7"),r=a("4d64").includes,i=a("44d2"),n=a("ae40"),c=n("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!c},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d4a2:function(t,e,a){"use strict";var s=a("5f48"),r=a.n(s);r.a},d5fd:function(t,e,a){},f528:function(t,e,a){"use strict";var s=a("d5fd"),r=a.n(s);r.a},fb6a:function(t,e,a){"use strict";var s=a("23e7"),r=a("861d"),i=a("e8b5"),n=a("23cb"),c=a("50c4"),o=a("fc6a"),l=a("8418"),u=a("b622"),d=a("1dde"),p=a("ae40"),m=d("slice"),b=p("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),v=[].slice,h=Math.max;s({target:"Array",proto:!0,forced:!m||!b},{slice:function(t,e){var a,s,u,d=o(this),p=c(d.length),m=n(t,p),b=n(void 0===e?p:e,p);if(i(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?r(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(d,m,b);for(s=new(void 0===a?Array:a)(h(b-m,0)),u=0;m<b;m++,u++)m in d&&l(s,u,d[m]);return s.length=u,s}})}}]);
//# sourceMappingURL=emaildefault.1d49e9ee.js.map