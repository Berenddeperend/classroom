(function(t){function e(e){for(var a,r,c=e[0],i=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var i=s[c];0!==o[i]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/klaslokaal/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0978":function(t,e,s){},1267:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%"}},[s("Classes"),t.$store.state.activeClass?s("Classroom"):t._e()],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"numberpicker"},[s("div",[t._v(t._s(t.occupiedSeats))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.occupiedSeats,expression:"occupiedSeats"}],staticClass:"numberpicker",attrs:{type:"range",max:t.seatMap.length},domProps:{value:t.occupiedSeats},on:{__r:function(e){t.occupiedSeats=e.target.value}}})]),s("div",{ref:"classroom",staticClass:"classroom"},[s("div",{staticClass:"tv"}),s("div",{staticClass:"furniture tables-left"},t._l(6,(function(t){return s("div",{key:t,staticClass:"table"})})),0),s("div",{staticClass:"furniture tables-right"},[t._l(6,(function(t){return s("div",{key:t,staticClass:"table"})})),s("div",{staticClass:"table elvera"})],2),s("div",{staticClass:"furniture tables-horizontal-right"},t._l(2,(function(t){return s("div",{key:t,staticClass:"table"})})),0),s("div",{staticClass:"furniture tables-bottom"},t._l(2,(function(t){return s("div",{key:t,staticClass:"table"})})),0),t._l(Number(t.occupiedSeats),(function(e,a){return s("Seat",{key:e+t.$store.state.activeClass,ref:"seat",refInFor:!0,staticClass:"seat",style:t.setPositionForSeat(a),attrs:{index:a}})}))],2)])},c=[],i=(s("a9e3"),30),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("input",{directives:[{name:"model",rawName:"v-model",value:t.student,expression:"student"}],staticClass:"seat",attrs:{type:"text"},domProps:{value:t.student},on:{input:function(e){e.target.composing||(t.student=e.target.value)}}})},u=[],f={props:{index:{},editable:{default:!1},alignment:{default:"flex-start"},text:{default:"Naam"}},computed:{student:{get:function(){return this.$store.state.classes[this.$store.state.activeClass][this.index]},set:function(t){this.$store.commit({type:"setStudent",index:this.index,student:t})}}}},d=f,p=(s("ca3f"),s("2877")),v=Object(p["a"])(d,l,u,!1,null,"37b0be59",null),m=v.exports,x="white",y="#f7d9c7",h={components:{Seat:m},data:function(){return{occupiedSeats:i,seatMap:[{x:0,y:0,color:x},{x:5,y:0,color:x},{x:0,y:1,color:x},{x:5,y:1,color:x},{x:0,y:2,color:y},{x:5,y:2,color:y},{x:0,y:3,color:y},{x:5,y:3,color:y},{x:0,y:4,color:x},{x:5,y:4,color:x},{x:0,y:5,color:x},{x:5,y:5,color:x},{x:0,y:6,color:y},{x:5,y:6,color:y},{x:0,y:7,color:y},{x:5,y:7,color:y},{x:0,y:8,color:x},{x:5,y:8,color:x},{x:0,y:9,color:x},{x:5,y:9,color:x},{x:0,y:10,color:y},{x:0,y:11,color:y},{x:0,y:12,color:x},{x:0,y:13,color:x},{x:0,y:14,color:y},{x:1,y:14,color:y},{x:2,y:14,color:x},{x:3,y:14,color:x},{x:4,y:14,color:y},{x:5,y:14,color:y}]}},mounted:function(){var t=this;setTimeout((function(){t.updatePositions()}),200),window.addEventListener("resize",this.updatePositions)},computed:{maxSeatX:function(){return this.seatMap.reduce((function(t,e){return e.x>t&&(t=e.x),t}),0)},maxSeatY:function(){return this.seatMap.reduce((function(t,e){return e.y>t&&(t=e.y),t}),0)}},watch:{occupiedSeats:function(){this.updatePositions()}},methods:{updatePositions:function(){for(var t=0;t<Number(this.occupiedSeats);t++)this.setPositionForSeat(t)},setPositionForSeat:function(t){function e(t,e,s,a,o){return(t-e)*(o-a)/(s-e)+a}var s=e(this.seatMap[t].x,0,this.maxSeatX,20,60),a=e(this.seatMap[t].y,0,this.maxSeatY,5,85),o=this.seatMap[t].x===this.maxSeatX?"flex-end":"flex-start";return this.seatMap[t].x===this.maxSeatX&&this.seatMap[t].y===this.maxSeatY&&(o="flex-start"),{left:"".concat(s,"%"),top:"".concat(a,"%"),justifyContent:o,backgroundColor:this.seatMap[t].color}}}},b=h,C=(s("e751"),Object(p["a"])(b,r,c,!1,null,"2b262910",null)),g=C.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classes"},[s("h3",[t._v("Klassen")]),s("ul",t._l(t.$store.getters.classNames.sort(),(function(e){return s("li",{key:e,staticClass:"className",class:{active:e===t.$store.state.activeClass},on:{click:function(s){return t.$store.commit("setActiveClass",e)}}},[t._v(" "+t._s(e)+" "),e===t.$store.state.activeClass?s("button",{staticClass:"delete",on:{click:function(s){return s.stopPropagation(),t.removeClass(e)}}},[t._v(" X ")]):t._e()])})),0),s("button",{on:{click:t.addClass}},[t._v("Klas toevoegen")])])},S=[],w={data:function(){return{}},methods:{removeClass:function(t){window.confirm("Wil je '".concat(t,"' echt verwijderen?"))&&this.$store.commit("removeClass",t)},addClass:function(){var t=window.prompt("Nieuwe klasnaam:");t&&(this.$store.commit({type:"addClass",className:t,length:i}),this.$store.commit("setActiveClass",t))}}},j=w,k=(s("8320"),Object(p["a"])(j,_,S,!1,null,"0594c56d",null)),O=k.exports,P={name:"App",components:{Classroom:g,Classes:O}},$=P,M=(s("034f"),Object(p["a"])($,o,n,!1,null,null,null)),N=M.exports,A=(s("b64b"),s("2f62")),E=s("0e44"),X=s("2ef0");a["a"].use(A["a"]);var F=new A["a"].Store({plugins:[Object(E["a"])()],state:{activeClass:null,classes:{}},getters:{classNames:function(t){return Object.keys(t.classes)}},mutations:{setActiveClass:function(t,e){t.activeClass=e},addClass:function(t,e){a["a"].set(t.classes,e.className,new Array(e.length))},setStudent:function(t,e){var s=Object(X["cloneDeep"])(t.classes);s[t.activeClass][e.index]=e.student,t.classes=s},removeClass:function(t,e){var s=Object(X["cloneDeep"])(t.classes);delete s[e];var a=Object.keys(t.classes);a[0]===t.activeClass?a[1]?t.activeClass=a[1]:t.activeClass=null:t.activeClass=a[0],t.classes=s}}}),T=F;a["a"].config.productionTip=!1,new a["a"]({store:T,render:function(t){return t(N)}}).$mount("#app")},8320:function(t,e,s){"use strict";s("0978")},"85ec":function(t,e,s){},ca3f:function(t,e,s){"use strict";s("e051")},e051:function(t,e,s){},e751:function(t,e,s){"use strict";s("1267")}});
//# sourceMappingURL=app.f99ce3fc.js.map