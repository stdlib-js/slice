"use strict";var s=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var T=s(function(Tr,b){
var _=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),De=require('@stdlib/assert/is-integer/dist').isPrimitive,Pe=require('@stdlib/assert/is-null/dist'),Ue=require('@stdlib/assert/is-undefined/dist'),q=require('@stdlib/string/format/dist');function E(r){return De(r)||Pe(r)||Ue(r)}function l(){var r,t,u,e;if(r=arguments.length,r===0?(t=null,u=null,e=null):r===1?(t=null,u=arguments[0],e=null):r===2?(t=arguments[0],u=arguments[1],e=null):(t=arguments[0],u=arguments[1],e=arguments[2]),!(this instanceof l))return new l(t,u,e);if(!E(t))throw new TypeError(q("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",t));if(!E(u))throw new TypeError(q("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",u));if(E(e)){if(e===0)throw new RangeError(q("invalid argument. Third argument cannot be zero. Value: `%s`.",e))}else throw new TypeError(q("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",e));return this._start=t===void 0?null:t,this._stop=u===void 0?null:u,this._step=e===void 0?null:e,this}_(l,"name","Slice");S(l.prototype,"start",function(){return this._start});S(l.prototype,"stop",function(){return this._stop});S(l.prototype,"step",function(){return this._step});_(l.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});_(l.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});b.exports=l
});var p=s(function(Vr,V){
var Me=T();V.exports=Me
});var P=s(function(Dr,D){
function Fe(){return{code:"ERR_OUT_OF_BOUNDS"}}D.exports=Fe
});var M=s(function(Pr,U){
var Ae=p(),c=P();function Be(r,t,u){var e,n,i;if(e=r.start,n=r.stop,i=r.step,i===null&&(i=1),e===null)i>0?e=0:e=t-1;else if(e<0){if(e=t+e,e<0){if(u)return c();e=0}}else if(e>=t){if(u)return c();i<0?e=t-1:e=t}if(n===null)i>0?n=t:n=null;else if(n<0){if(n=t+n,n<0)if(i>0){if(u)return c();n=0}else{if(u&&n<-1)return c();n=null}}else if(n>t){if(u)return c();n=t}return new Ae(e,n,i)}U.exports=Be
});var A=s(function(Ur,F){
var Je=M();F.exports=Je
});var J=s(function(Mr,B){
var Ce=/(?:\s*-\s*)(?=\d+)(\d+)$/;B.exports=Ce
});var G=s(function(Fr,C){
var Ge=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;C.exports=Ge
});var j=s(function(Ar,$){
var L=require('@stdlib/math/base/special/floor/dist'),Le=J(),$e=G();function je(r,t,u,e){var n;if(r==="end")return t;if(n=r.match(Le),n){if(r=t-parseInt(n[1],10),r<0){if(e)return-2;r=0}return r}return n=r.match($e),n?(r=parseFloat(n[1]),r<1?e?-2:-1:u&&t>0&&r!==1?L((t-1)/r):L(t/r)):-1}$.exports=je
});var X=s(function(Br,z){
var ze=/\s*:\s*/;z.exports=ze
});var Q=s(function(Jr,k){
var Xe=/^[-+]?[0-9]+$/;k.exports=Xe
});var K=s(function(Cr,H){
var ke=/^end/;H.exports=ke
});var Y=s(function(Gr,W){
function Qe(){return{code:"ERR_INVALID_SUBSEQUENCE"}}W.exports=Qe
});var ee=s(function(Lr,Z){
function He(){return{code:"ERR_OUT_OF_BOUNDS"}}Z.exports=He
});var te=s(function($r,re){
function Ke(){return{code:"ERR_INVALID_INCREMENT"}}re.exports=Ke
});var ae=s(function(jr,se){
var ie=p(),We=require('@stdlib/string/base/trim/dist'),ne=j(),Ye=X(),R=Q(),ue=K(),f=Y(),o=ee(),Ze=te();function er(r,t,u){var e,n,i;if(e=We(r).split(Ye),n=e.length,n<2||n>3)return f();if(n===3)if(i=e[2],i.length===0)e[2]=1;else{if(R.test(i)===!1)return f();if(i=parseInt(i,10),i===0)return Ze();e[2]=i}else e.push(1);if(i=e[0],i.length===0)e[2]<0&&t>0?e[0]=t-1:e[0]=0;else if(ue.test(i)){if(i=ne(i,t,e[2]<0,u),i<0)return i===-2?o():f();e[2]<0&&i>=t&&(i-=1),e[0]=i}else if(R.test(i)){if(i=parseInt(i,10),i<0){if(i=t+i,i<0){if(u)return o();i=0}}else if(i>=t){if(u)return o();e[2]<0?i=t-1:i=t}e[0]=i}else return f();if(i=e[1],i.length===0)e[2]<0?e[1]=null:e[1]=t;else if(ue.test(i)){if(i=ne(i,t,e[2]<0,u),i<0)return i===-2?o():f();e[1]=i}else if(R.test(i)){if(i=parseInt(i,10),i<0){if(i=t+i,i<0)if(e[2]>0){if(u)return o();i=0}else{if(u&&i<-1)return o();i=null}}else if(i>t){if(u)return o();i=t}e[1]=i}else return f();return t===0?new ie(0,0,e[2]):new ie(e[0],e[1],e[2])}se.exports=er
});var N=s(function(zr,le){
var rr=ae();le.exports=rr
});var fe=s(function(Xr,oe){
function tr(r){var t,u,e,n;return u=r.start,e=r.stop,n=r.step,u===null?t="":t=String(u),e===null?n===null?t+":":t===""?"::"+n:t+"::"+n:(t+=":"+e,n===null?t:t+":"+n)}oe.exports=tr
});var ge=s(function(kr,ve){
var ir=fe();ve.exports=ir
});var me=s(function(Qr,ce){
var nr=require('@stdlib/string/base/trim/dist'),ur=p(),w="Slice(",pe=3,sr=/\s*,\s*/,ar=/^-?[0-9]+$/;function lr(r){var t,u,e,n,i;if(r.substring(0,w.length)!==w||(e=r.length-1,r[e]!==")")||(r=nr(r.substring(w.length,e)),r=r.split(sr),r.length!==pe))return null;for(t=[],i=0;i<pe;i++){if(n=r[i],n==="null")u=null;else if(ar.test(n))u=parseInt(n,10);else return null;t.push(u)}return new ur(t[0],t[1],t[2])}ce.exports=lr
});var I=s(function(Hr,de){
var or=me();de.exports=or
});var Ee=s(function(Kr,he){
var x=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qe=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),fr=require('@stdlib/assert/is-integer/dist').isPrimitive,vr=require('@stdlib/assert/is-null/dist'),gr=require('@stdlib/assert/is-undefined/dist'),pr=require('@stdlib/assert/is-slice/dist'),cr=require('@stdlib/string/format/dist');function mr(r){return fr(r)||vr(r)||gr(r)||pr(r)}function a(){var r,t,u,e,n;if(r=arguments.length,!(this instanceof a)){if(r===1)return new a(arguments[0]);if(r===2)return new a(arguments[0],arguments[1]);if(r===3)return new a(arguments[0],arguments[1],arguments[2]);if(r===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(u=[],n=0;n<r;n++)u.push(arguments[n]);return t=Object.create(a.prototype),a.apply(t,u)}for(this._data=[],n=0;n<r;n++){if(e=arguments[n],!mr(e))throw new TypeError(cr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,e));this._data.push(e===void 0?null:e)}return this}x(a,"name","MultiSlice");qe(a.prototype,"ndims",function(){return this._data.length});qe(a.prototype,"data",function(){return this._data.slice()});x(a.prototype,"toString",function(){var t,u,e;for(t=this._data,u=[],e=0;e<t.length;e++)u.push(String(t[e]));return"MultiSlice("+u.join(",")+")"});x(a.prototype,"toJSON",function(){var t,u,e,n;for(t=this._data,u={type:"MultiSlice",data:[]},n=0;n<t.length;n++)e=t[n],u.data.push(e&&typeof e.toJSON=="function"?e.toJSON():e);return u});he.exports=a
});var y=s(function(Wr,_e){
var dr=Ee();_e.exports=dr
});var Ne=s(function(Yr,Re){
var qr=require('@stdlib/string/base/trim/dist'),hr=I(),Se=y(),O="MultiSlice(",Er=/\s*,\s*/,_r=/^-?[0-9]+$/;function Sr(r){var t,u,e,n,i;if(r.substring(0,O.length)!==O||(e=r.length-1,r[e]!==")"))return null;if(r=qr(r.substring(O.length,e)),r=r.split(Er),e=r.length,e===1&&r[0]==="")return new Se;for(t=[],i=0;i<e;i++){if(n=r[i],n[0]==="S"){if(n=r.slice(i,i+3).join(","),u=hr(n),u===null)return null;i+=2}else if(n==="null")u=null;else if(_r.test(n))u=parseInt(n,10);else return null;t.push(u)}return Se.apply(null,t)}Re.exports=Sr
});var Ie=s(function(Zr,we){
var Rr=Ne();we.exports=Rr
});var ye=s(function(et,xe){
var m=require('@stdlib/utils/define-read-only-property/dist'),v={};m(v,"normalizeSlice",A());m(v,"seq2slice",N());m(v,"slice2seq",ge());m(v,"str2multislice",Ie());m(v,"str2slice",I());xe.exports=v
});var be=s(function(rt,Oe){
var Nr=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,wr=require('@stdlib/assert/is-string/dist').isPrimitive,Ir=require('@stdlib/assert/is-boolean/dist').isPrimitive,xr=N(),g=require('@stdlib/string/format/dist');function yr(r,t,u){var e,n;if(!wr(r))throw new TypeError(g("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",r));if(!Nr(t))throw new TypeError(g('null3X',t));if(!Ir(u))throw new TypeError(g('nullAL',u));if(n=xr(r,t,u),e=n.code,e===void 0)return n;throw e==="ERR_INVALID_INCREMENT"?new RangeError(g("invalid argument. A subsequence string must have a non-zero increment. Value: `%s`.",r)):e==="ERR_OUT_OF_BOUNDS"?new RangeError(g("invalid argument. The subsequence string resolves to a slice which exceeds index bounds. Value: `%s`.",r)):new TypeError(g("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",r))}Oe.exports=yr
});var Ve=s(function(tt,Te){
var Or=be();Te.exports=Or
});var h=require('@stdlib/utils/define-read-only-property/dist'),d={};h(d,"base",ye());h(d,"Slice",p());h(d,"MultiSlice",y());h(d,"seq2slice",Ve());module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
