"use strict";var s=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var U=s(function(je,M){
var R=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Cr=require('@stdlib/assert/is-integer/dist').isPrimitive,Gr=require('@stdlib/assert/is-null/dist'),Lr=require('@stdlib/assert/is-undefined/dist'),$r=require('@stdlib/assert/is-slice/dist'),jr=require('@stdlib/string/format/dist');function Xr(r){return Cr(r)||Gr(r)||Lr(r)||$r(r)}function a(){var r,t,u,e,n;if(r=arguments.length,!(this instanceof a)){if(r===1)return new a(arguments[0]);if(r===2)return new a(arguments[0],arguments[1]);if(r===3)return new a(arguments[0],arguments[1],arguments[2]);if(r===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(u=[],n=0;n<r;n++)u.push(arguments[n]);return t=Object.create(a.prototype),a.apply(t,u)}for(this._data=[],n=0;n<r;n++){if(e=arguments[n],!Xr(e))throw new TypeError(jr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,e));this._data.push(e===void 0?null:e)}return this}R(a,"name","MultiSlice");D(a.prototype,"ndims",function(){return this._data.length});D(a.prototype,"data",function(){return this._data.slice()});R(a.prototype,"toString",function(){var t,u,e;for(t=this._data,u=[],e=0;e<t.length;e++)u.push(String(t[e]));return"MultiSlice("+u.join(",")+")"});R(a.prototype,"toJSON",function(){var t,u,e,n;for(t=this._data,u={type:"MultiSlice",data:[]},n=0;n<t.length;n++)e=t[n],u.data.push(e&&typeof e.toJSON=="function"?e.toJSON():e);return u});M.exports=a
});var E=s(function(Xe,P){
var kr=U();P.exports=kr
});var B=s(function(ke,F){
var N=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Qr=require('@stdlib/assert/is-integer/dist').isPrimitive,Hr=require('@stdlib/assert/is-null/dist'),Kr=require('@stdlib/assert/is-undefined/dist'),S=require('@stdlib/string/format/dist');function w(r){return Qr(r)||Hr(r)||Kr(r)}function o(){var r,t,u,e;if(r=arguments.length,r===0?(t=null,u=null,e=null):r===1?(t=null,u=arguments[0],e=null):r===2?(t=arguments[0],u=arguments[1],e=null):(t=arguments[0],u=arguments[1],e=arguments[2]),!(this instanceof o))return new o(t,u,e);if(!w(t))throw new TypeError(S("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",t));if(!w(u))throw new TypeError(S("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",u));if(w(e)){if(e===0)throw new RangeError(S("invalid argument. Third argument cannot be zero. Value: `%s`.",e))}else throw new TypeError(S("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",e));return this._start=t===void 0?null:t,this._stop=u===void 0?null:u,this._step=e===void 0?null:e,this}N(o,"name","Slice");O(o.prototype,"start",function(){return this._start});O(o.prototype,"stop",function(){return this._stop});O(o.prototype,"step",function(){return this._step});N(o.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});N(o.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});F.exports=o
});var v=s(function(Qe,z){
var Wr=B();z.exports=Wr
});var J=s(function(He,A){
function Yr(){return{code:"ERR_OUT_OF_BOUNDS"}}A.exports=Yr
});var G=s(function(Ke,C){
var Zr=v(),d=J();function re(r,t,u){var e,n,i;if(e=r.start,n=r.stop,i=r.step,i===null&&(i=1),e===null)i>0?e=0:e=t-1;else if(e<0){if(e=t+e,e<0){if(u)return d();e=0}}else if(e>=t){if(u)return d();i<0?e=t-1:e=t}if(n===null)i>0?n=t:n=null;else if(n<0){if(n=t+n,n<0)if(i>0){if(u)return d();n=0}else{if(u&&n<-1)return d();n=null}}else if(n>t){if(u)return d();n=t}return new Zr(e,n,i)}C.exports=re
});var x=s(function(We,L){
var ee=G();L.exports=ee
});var j=s(function(Ye,$){
function te(){return{code:"ERR_OUT_OF_BOUNDS"}}$.exports=te
});var Q=s(function(Ze,k){
var ie=E(),q=v(),ne=x(),X=j();function ue(r,t,u){return r===null?new q(0,t,1):typeof r=="number"?r>=t?u?X():new q(t,t,1):r<0?(r=t+r,r<0?u?X():new q(0,0,1):new q(r,r+1,1)):new q(r,r+1,1):ne(r,t,u)}function se(r,t,u){var e,n,i,m;for(e=r.data,n=[],m=0;m<e.length;m++){if(i=ue(e[m],t[m],u),i.code!==void 0)return i;n.push(i)}return ie.apply(null,n)}k.exports=se
});var K=s(function(rt,H){
var ae=Q();H.exports=ae
});var Y=s(function(et,W){
var oe=/(?:\s*-\s*)(?=\d+)(\d+)$/;W.exports=oe
});var rr=s(function(tt,Z){
var le=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;Z.exports=le
});var ir=s(function(it,tr){
var er=require('@stdlib/math/base/special/floor/dist'),fe=Y(),ve=rr();function ce(r,t,u,e){var n;if(r==="end")return t;if(n=r.match(fe),n){if(r=t-parseInt(n[1],10),r<0){if(e)return-2;r=0}return r}return n=r.match(ve),n?(r=parseFloat(n[1]),r<1?e?-2:-1:u&&t>0&&r!==1?er((t-1)/r):er(t/r)):-1}tr.exports=ce
});var ur=s(function(nt,nr){
var pe=/\s*:\s*/;nr.exports=pe
});var ar=s(function(ut,sr){
var ge=/^[-+]?[0-9]+$/;sr.exports=ge
});var lr=s(function(st,or){
var me=/^end/;or.exports=me
});var vr=s(function(at,fr){
function de(){return{code:"ERR_INVALID_SUBSEQUENCE"}}fr.exports=de
});var pr=s(function(ot,cr){
function qe(){return{code:"ERR_OUT_OF_BOUNDS"}}cr.exports=qe
});var mr=s(function(lt,gr){
function he(){return{code:"ERR_INVALID_INCREMENT"}}gr.exports=he
});var Sr=s(function(ft,Er){
var dr=v(),Ee=require('@stdlib/string/base/trim/dist'),qr=ir(),Se=ur(),y=ar(),hr=lr(),c=vr(),l=pr(),_e=mr();function Re(r,t,u){var e,n,i;if(e=Ee(r).split(Se),n=e.length,n<2||n>3)return c();if(n===3)if(i=e[2],i.length===0)e[2]=1;else{if(y.test(i)===!1)return c();if(i=parseInt(i,10),i===0)return _e();e[2]=i}else e.push(1);if(i=e[0],i.length===0)e[2]<0&&t>0?e[0]=t-1:e[0]=0;else if(hr.test(i)){if(i=qr(i,t,e[2]<0,u),i<0)return i===-2?l():c();e[2]<0&&i>=t&&(i-=1),e[0]=i}else if(y.test(i)){if(i=parseInt(i,10),i<0){if(i=t+i,i<0){if(u)return l();i=0}}else if(i>=t){if(u)return l();e[2]<0?i=t-1:i=t}e[0]=i}else return c();if(i=e[1],i.length===0)e[2]<0?e[1]=null:e[1]=t;else if(hr.test(i)){if(i=qr(i,t,e[2]<0,u),i<0)return i===-2?l():c();e[1]=i}else if(y.test(i)){if(i=parseInt(i,10),i<0){if(i=t+i,i<0)if(e[2]>0){if(u)return l();i=0}else{if(u&&i<-1)return l();i=null}}else if(i>t){if(u)return l();i=t}e[1]=i}else return c();return t===0?new dr(0,0,e[2]):new dr(e[0],e[1],e[2])}Er.exports=Re
});var I=s(function(vt,_r){
var we=Sr();_r.exports=we
});var wr=s(function(ct,Rr){
function Ne(r){var t,u,e,n;return u=r.start,e=r.stop,n=r.step,u===null?t="":t=String(u),e===null?n===null?t+":":t===""?"::"+n:t+"::"+n:(t+=":"+e,n===null?t:t+":"+n)}Rr.exports=Ne
});var Or=s(function(pt,Nr){
var Oe=wr();Nr.exports=Oe
});var Ir=s(function(gt,yr){
var xe=require('@stdlib/string/base/trim/dist'),ye=v(),b="Slice(",xr=3,Ie=/\s*,\s*/,be=/^-?[0-9]+$/;function Te(r){var t,u,e,n,i;if(r.substring(0,b.length)!==b||(e=r.length-1,r[e]!==")")||(r=xe(r.substring(b.length,e)),r=r.split(Ie),r.length!==xr))return null;for(t=[],i=0;i<xr;i++){if(n=r[i],n==="null")u=null;else if(be.test(n))u=parseInt(n,10);else return null;t.push(u)}return new ye(t[0],t[1],t[2])}yr.exports=Te
});var T=s(function(mt,br){
var Ve=Ir();br.exports=Ve
});var Dr=s(function(dt,Vr){
var De=require('@stdlib/string/base/trim/dist'),Me=T(),Tr=E(),V="MultiSlice(",Ue=/\s*,\s*/,Pe=/^-?[0-9]+$/;function Fe(r){var t,u,e,n,i;if(r.substring(0,V.length)!==V||(e=r.length-1,r[e]!==")"))return null;if(r=De(r.substring(V.length,e)),r=r.split(Ue),e=r.length,e===1&&r[0]==="")return new Tr;for(t=[],i=0;i<e;i++){if(n=r[i],n[0]==="S"){if(n=r.slice(i,i+3).join(","),u=Me(n),u===null)return null;i+=2}else if(n==="null")u=null;else if(Pe.test(n))u=parseInt(n,10);else return null;t.push(u)}return Tr.apply(null,t)}Vr.exports=Fe
});var Ur=s(function(qt,Mr){
var Be=Dr();Mr.exports=Be
});var Fr=s(function(ht,Pr){
var p=require('@stdlib/utils/define-read-only-property/dist'),f={};p(f,"normalizeMultiSlice",K());p(f,"normalizeSlice",x());p(f,"seq2slice",I());p(f,"slice2seq",Or());p(f,"str2multislice",Ur());p(f,"str2slice",T());Pr.exports=f
});var zr=s(function(Et,Br){
var ze=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,Ae=require('@stdlib/assert/is-string/dist').isPrimitive,Je=require('@stdlib/assert/is-boolean/dist').isPrimitive,Ce=I(),g=require('@stdlib/string/format/dist');function Ge(r,t,u){var e,n;if(!Ae(r))throw new TypeError(g("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",r));if(!ze(t))throw new TypeError(g('null3X',t));if(!Je(u))throw new TypeError(g('nullAL',u));if(n=Ce(r,t,u),e=n.code,e===void 0)return n;throw e==="ERR_INVALID_INCREMENT"?new RangeError(g("invalid argument. A subsequence string must have a non-zero increment. Value: `%s`.",r)):e==="ERR_OUT_OF_BOUNDS"?new RangeError(g("invalid argument. The subsequence string resolves to a slice which exceeds index bounds. Value: `%s`.",r)):new TypeError(g("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",r))}Br.exports=Ge
});var Jr=s(function(St,Ar){
var Le=zr();Ar.exports=Le
});var _=require('@stdlib/utils/define-read-only-property/dist'),h={};_(h,"base",Fr());_(h,"Slice",v());_(h,"MultiSlice",E());_(h,"seq2slice",Jr());module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
