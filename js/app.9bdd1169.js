(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/klaslokaal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"07d7":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"100%"}},[s("Classes"),t.$store.state.activeClass?s("Classroom"):t._e()],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"numberpicker"},[s("div",[t._v(t._s(t.occupiedSeats))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.occupiedSeats,expression:"occupiedSeats"}],staticClass:"numberpicker",attrs:{type:"range",max:t.seatMap.length},domProps:{value:t.occupiedSeats},on:{__r:function(e){t.occupiedSeats=e.target.value}}})]),s("div",{ref:"classroom",staticClass:"classroom"},[s("div",{staticClass:"tv"}),s("div",{staticClass:"furniture tables-left"},t._l(6,(function(t){return s("div",{key:t,staticClass:"table"})})),0),s("div",{staticClass:"furniture tables-right"},[t._l(6,(function(t){return s("div",{key:t,staticClass:"table"})})),s("div",{staticClass:"table elvera"})],2),s("div",{staticClass:"furniture tables-horizontal-right"},t._l(2,(function(t){return s("div",{key:t,staticClass:"table"})})),0),s("div",{staticClass:"furniture tables-bottom"},t._l(2,(function(t){return s("div",{key:t,staticClass:"table"})})),0),t._l(Number(t.occupiedSeats),(function(e,a){return s("Seat",{key:e+t.$store.state.activeClass,ref:"seat",refInFor:!0,staticClass:"seat",style:t.setPositionForSeat(a),attrs:{index:a}})}))],2)])},o=[],c=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("input",{directives:[{name:"model",rawName:"v-model",value:t.student,expression:"student"}],staticClass:"seat",attrs:{type:"text"},domProps:{value:t.student},on:{input:function(e){e.target.composing||(t.student=e.target.value)}}})}),l=[],u={props:{index:{},editable:{default:!1},alignment:{default:"flex-start"},text:{default:"Naam"}},computed:{student:{get:function(){return this.$store.state.classes[this.$store.state.activeClass][this.index]},set:function(t){this.$store.commit({type:"setStudent",index:this.index,student:t})}}}},d=u,f=(s("8325"),s("2877")),p=Object(f["a"])(d,c,l,!1,null,"ff191a00",null),v=p.exports,m={components:{Seat:v},data:function(){return{occupiedSeats:30,seatMap:[{x:0,y:0},{x:5,y:0},{x:0,y:1},{x:5,y:1},{x:0,y:2},{x:5,y:2},{x:0,y:3},{x:5,y:3},{x:0,y:4},{x:5,y:4},{x:0,y:5},{x:5,y:5},{x:0,y:6},{x:5,y:6},{x:0,y:7},{x:5,y:7},{x:0,y:8},{x:5,y:8},{x:0,y:9},{x:5,y:9},{x:0,y:10},{x:0,y:11},{x:0,y:12},{x:0,y:13},{x:0,y:14},{x:1,y:14},{x:2,y:14},{x:3,y:14},{x:4,y:14},{x:5,y:14}]}},mounted:function(){var t=this;setTimeout((function(){t.updatePositions()}),200),window.addEventListener("resize",this.updatePositions)},computed:{maxSeatX:function(){return this.seatMap.reduce((function(t,e){return e.x>t&&(t=e.x),t}),0)},maxSeatY:function(){return this.seatMap.reduce((function(t,e){return e.y>t&&(t=e.y),t}),0)}},watch:{occupiedSeats:function(){this.updatePositions()}},methods:{updatePositions:function(){for(var t=0;t<Number(this.occupiedSeats);t++)this.setPositionForSeat(t)},setPositionForSeat:function(t){function e(t,e,s,a,n){return(t-e)*(n-a)/(s-e)+a}var s=e(this.seatMap[t].x,0,this.maxSeatX,20,60),a=e(this.seatMap[t].y,0,this.maxSeatY,5,85),n=this.seatMap[t].x===this.maxSeatX?"flex-end":"flex-start";return this.seatMap[t].x===this.maxSeatX&&this.seatMap[t].y===this.maxSeatY&&(n="flex-start"),{left:"".concat(s,"%"),top:"".concat(a,"%"),justifyContent:n}}}},x=m,y=(s("cf67"),Object(f["a"])(x,r,o,!1,null,"d5246b0a",null)),h=y.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classes"},[s("h3",[t._v("Klassen")]),s("ul",t._l(t.$store.getters.classNames.sort(),(function(e){return s("li",{key:e,staticClass:"className",class:{active:e===t.$store.state.activeClass},on:{click:function(s){return t.$store.commit("setActiveClass",e)}}},[t._v(" "+t._s(e)+" "),e===t.$store.state.activeClass?s("button",{staticClass:"delete",on:{click:function(s){return s.stopPropagation(),t.removeClass(e)}}},[t._v(" X ")]):t._e()])})),0),s("button",{on:{click:t.addClass}},[t._v("Klas toevoegen")])])},C=[],g={data:function(){return{}},methods:{removeClass:function(t){window.confirm("Wil je '".concat(t,"' echt verwijderen?"))&&this.$store.commit("removeClass",t)},addClass:function(){var t=window.prompt("Nieuwe klasnaam:");t&&(this.$store.commit({type:"addClass",className:t,length:30}),this.$store.commit("setActiveClass",t))}}},_=g,S=(s("c70f"),Object(f["a"])(_,b,C,!1,null,"762a15a2",null)),w=S.exports,j={name:"App",components:{Classroom:h,Classes:w}},O=j,k=(s("034f"),Object(f["a"])(O,n,i,!1,null,null,null)),P=k.exports,$=(s("b64b"),s("2f62")),M=s("0e44"),N=s("2ef0");a["a"].use($["a"]);var A=new $["a"].Store({plugins:[Object(M["a"])()],state:{activeClass:null,classes:{}},getters:{classNames:function(t){return Object.keys(t.classes)}},mutations:{setActiveClass:function(t,e){t.activeClass=e},addClass:function(t,e){a["a"].set(t.classes,e.className,new Array(e.length))},setStudent:function(t,e){var s=Object(N["cloneDeep"])(t.classes);s[t.activeClass][e.index]=e.student,t.classes=s},removeClass:function(t,e){var s=Object(N["cloneDeep"])(t.classes);delete s[e];var a=Object.keys(t.classes);a[0]===t.activeClass?a[1]?t.activeClass=a[1]:t.activeClass=null:t.activeClass=a[0],t.classes=s}}}),E=A;a["a"].config.productionTip=!1,new a["a"]({store:E,render:function(t){return t(P)}}).$mount("#app")},8325:function(t,e,s){"use strict";s("a3dd")},"85ec":function(t,e,s){},a3dd:function(t,e,s){},c70f:function(t,e,s){"use strict";s("07d7")},cf67:function(t,e,s){"use strict";s("dd0e")},dd0e:function(t,e,s){}});
//# sourceMappingURL=app.9bdd1169.js.map