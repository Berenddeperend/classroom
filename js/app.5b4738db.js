(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/klaslokaal/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0978":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%"}},[s("canvas",{attrs:{id:"snow-container"}}),s("Classes"),t.$store.state.activeClass?s("Classroom"):t._e()],1)},o=[],i=(s("cb29"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"numberpicker"},[s("div",[t._v(t._s(t.occupiedSeats))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.occupiedSeats,expression:"occupiedSeats"}],staticClass:"numberpicker",attrs:{type:"range",max:t.seatMap.length},domProps:{value:t.occupiedSeats},on:{__r:function(e){t.occupiedSeats=e.target.value}}})]),s("div",{ref:"classroom",staticClass:"classroom"},[s("div",{staticClass:"tv"}),s("div",{staticClass:"furniture tables-left"},t._l(6,(function(t){return s("div",{key:t,staticClass:"table"},[s("Seat",{staticClass:"seat",attrs:{index:30+t}}),s("Seat",{staticClass:"seat",attrs:{index:36+t}})],1)})),0),s("div",{staticClass:"furniture tables-right"},[t._l(6,(function(t){return s("div",{key:t,staticClass:"table"},[s("Seat",{staticClass:"seat",attrs:{index:42+t}}),s("Seat",{staticClass:"seat",attrs:{index:48+t}})],1)})),s("div",{staticClass:"table elvera"},[t._v("Mvr. Neijland")])],2),s("div",{staticClass:"furniture tables-right-second-column"},t._l(2,(function(t){return s("div",{key:t,staticClass:"table"},[s("Seat",{staticClass:"seat",attrs:{index:54+t}}),s("Seat",{staticClass:"seat",attrs:{index:56+t}})],1)})),0),s("div",{staticClass:"furniture tables-bottom"},t._l(2,(function(t){return s("div",{key:t,staticClass:"table"},[s("Seat",{staticClass:"seat",attrs:{index:58+t}}),s("Seat",{staticClass:"seat",attrs:{index:60+t}})],1)})),0),t._l(Number(t.occupiedSeats),(function(e,a){return s("Seat",{key:e+t.$store.state.activeClass,ref:"seat",refInFor:!0,staticClass:"seat",style:t.setPositionForSeat(a),attrs:{index:a}})}))],2)])}),r=[],c=(s("a9e3"),30),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("input",{directives:[{name:"model",rawName:"v-model",value:t.student,expression:"student"}],staticClass:"seat",attrs:{type:"text"},domProps:{value:t.student},on:{input:function(e){e.target.composing||(t.student=e.target.value)}}})},u=[],d={props:{index:{},editable:{default:!1},alignment:{default:"flex-start"},text:{default:"Naam"}},computed:{student:{get:function(){return this.$store.state.classes[this.$store.state.activeClass][this.index]},set:function(t){this.$store.commit({type:"setStudent",index:this.index,student:t})}}}},f=d,p=(s("9e6c"),s("2877")),h=Object(p["a"])(f,l,u,!1,null,"59823677",null),v=h.exports,m="white",x="#f7d9c7",y={components:{Seat:v},data:function(){return{occupiedSeats:c,seatMap:[{x:0,y:0,color:m},{x:5,y:0,color:m},{x:0,y:1,color:m},{x:5,y:1,color:m},{x:0,y:2,color:x},{x:5,y:2,color:x},{x:0,y:3,color:x},{x:5,y:3,color:x},{x:0,y:4,color:m},{x:5,y:4,color:m},{x:0,y:5,color:m},{x:5,y:5,color:m},{x:0,y:6,color:x},{x:5,y:6,color:x},{x:0,y:7,color:x},{x:5,y:7,color:x},{x:0,y:8,color:m},{x:5,y:8,color:m},{x:0,y:9,color:m},{x:5,y:9,color:m},{x:0,y:10,color:x},{x:0,y:11,color:x},{x:0,y:12,color:m},{x:0,y:13,color:m},{x:0,y:14,color:x},{x:1,y:14,color:x},{x:2,y:14,color:m},{x:3,y:14,color:m},{x:4,y:14,color:x},{x:5,y:14,color:x}]}},mounted:function(){var t=this;setTimeout((function(){t.updatePositions()}),200),window.addEventListener("resize",this.updatePositions)},computed:{maxSeatX:function(){return this.seatMap.reduce((function(t,e){return e.x>t&&(t=e.x),t}),0)},maxSeatY:function(){return this.seatMap.reduce((function(t,e){return e.y>t&&(t=e.y),t}),0)}},watch:{occupiedSeats:function(){this.updatePositions()}},methods:{updatePositions:function(){for(var t=0;t<Number(this.occupiedSeats);t++)this.setPositionForSeat(t)},setPositionForSeat:function(t){function e(t,e,s,a,n){return(t-e)*(n-a)/(s-e)+a}var s=e(this.seatMap[t].x,0,this.maxSeatX,20,60),a=e(this.seatMap[t].y,0,this.maxSeatY,5,85),n=this.seatMap[t].x===this.maxSeatX?"flex-end":"flex-start";return this.seatMap[t].x===this.maxSeatX&&this.seatMap[t].y===this.maxSeatY&&(n="flex-start"),{left:"".concat(s,"%"),top:"".concat(a,"%"),justifyContent:n}}}},C=y,b=(s("75a1"),Object(p["a"])(C,i,r,!1,null,"a1e6e118",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classes"},[s("h3",[t._v("Klassen")]),s("ul",t._l(t.$store.getters.classNames.sort(),(function(e){return s("li",{key:e,staticClass:"className",class:{active:e===t.$store.state.activeClass},on:{click:function(s){return t.$store.commit("setActiveClass",e)}}},[t._v(" "+t._s(e)+" "),e===t.$store.state.activeClass?s("button",{staticClass:"delete",on:{click:function(s){return s.stopPropagation(),t.removeClass(e)}}},[t._v(" X ")]):t._e()])})),0),s("button",{on:{click:t.addClass}},[t._v("Klas toevoegen")])])},S=[],_={data:function(){return{}},methods:{removeClass:function(t){window.confirm("Wil je '".concat(t,"' echt verwijderen?"))&&this.$store.commit("removeClass",t)},addClass:function(){var t=window.prompt("Nieuwe klasnaam:");t&&(this.$store.commit({type:"addClass",className:t,length:c}),this.$store.commit("setActiveClass",t))}}},M=_,P=(s("8320"),Object(p["a"])(M,w,S,!1,null,"0594c56d",null)),j=P.exports,O={name:"App",components:{Classroom:g,Classes:j},mounted:function(){var t;11==(new Date).getMonth()&&function(){document.querySelector("html").classList.add("christmas"),document.querySelector("body").classList.add("christmas");var e=document.getElementById("snow-container"),s=600,a=1,n=1,o=1.3,i=20,r=1,c=e.getContext("2d"),l=e.getBoundingClientRect(),u=e.width=l.width*(window.devicePixelRatio||1),d=e.height=l.height*(window.devicePixelRatio||1);function f(){var t=this;this.y=Math.random()*(d+50),this.x=Math.random()*u,this.t=Math.random()*(2*Math.PI),this.sz=100/(10+100*Math.random())*o,this.sp=.15*Math.pow(.8*this.sz,2)*n,this.sp=this.sp<r?r:this.sp,this.draw=function(){t.g=c.createRadialGradient(t.x,t.y,0,t.x,t.y,t.sz),t.g.addColorStop(0,"hsla(255,255%,255%,1)"),t.g.addColorStop(1,"hsla(255,255%,255%,0)"),c.moveTo(t.x,t.y),c.fillStyle=t.g,c.beginPath(),c.arc(t.x,t.y,t.sz,0,2*Math.PI,!0),c.fill()}}window.addEventListener("resize",(function(){l=e.getBoundingClientRect(),u=e.width=l.width*(window.devicePixelRatio||1),d=e.height=l.height*(window.devicePixelRatio||1)}),!1);for(var p=[],h=0;h<s;h++)p.push(new f);(function e(){c.clearRect(0,0,u,d);for(var s=0;s<p.length;s++)t=p[s],t.t+=.05,t.t=t.t>=2*Math.PI?0:t.t,t.y+=t.sp,t.x+=Math.sin(t.t*a)*(.3*t.sz),t.y>d+50&&(t.y=-10-Math.random()*i),t.x>u+i&&(t.x=-i),t.x<-i&&(t.x=u+i),t.draw();window.requestAnimationFrame(e)})()}()}},k=O,$=(s("034f"),Object(p["a"])(k,n,o,!1,null,null,null)),N=$.exports,R=(s("b64b"),s("2f62")),z=s("0e44"),E=s("2ef0");a["a"].use(R["a"]);var A=new R["a"].Store({plugins:[Object(z["a"])()],state:{activeClass:null,classes:{}},getters:{classNames:function(t){return Object.keys(t.classes)}},mutations:{setActiveClass:function(t,e){t.activeClass=e},addClass:function(t,e){a["a"].set(t.classes,e.className,new Array(e.length))},setStudent:function(t,e){var s=Object(E["cloneDeep"])(t.classes);s[t.activeClass][e.index]=e.student,t.classes=s},removeClass:function(t,e){var s=Object(E["cloneDeep"])(t.classes);delete s[e];var a=Object.keys(t.classes);a[0]===t.activeClass?a[1]?t.activeClass=a[1]:t.activeClass=null:t.activeClass=a[0],t.classes=s}}}),F=A;a["a"].config.productionTip=!1,new a["a"]({store:F,render:function(t){return t(N)}}).$mount("#app")},7513:function(t,e,s){},"75a1":function(t,e,s){"use strict";s("7513")},8320:function(t,e,s){"use strict";s("0978")},"85ec":function(t,e,s){},"9e6c":function(t,e,s){"use strict";s("ef01")},ef01:function(t,e,s){}});
//# sourceMappingURL=app.5b4738db.js.map