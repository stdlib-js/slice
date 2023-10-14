"use strict";var s=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var j=s(function(Si,J){
var L=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Vr=require('@stdlib/assert/is-integer/dist').isPrimitive,Cr=require('@stdlib/assert/is-null/dist'),Pr=require('@stdlib/assert/is-undefined/dist'),Fr=require('@stdlib/assert/is-slice/dist'),Br=require('@stdlib/string/format/dist');function Ar(e){return Vr(e)||Cr(e)||Pr(e)||Fr(e)}function a(){var e,t,i,r,u;if(e=arguments.length,!(this instanceof a)){if(e===1)return new a(arguments[0]);if(e===2)return new a(arguments[0],arguments[1]);if(e===3)return new a(arguments[0],arguments[1],arguments[2]);if(e===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(e===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(i=[],u=0;u<e;u++)i.push(arguments[u]);return t=Object.create(a.prototype),a.apply(t,i)}for(this._data=[],u=0;u<e;u++){if(r=arguments[u],!Ar(r))throw new TypeError(Br('1j3Em',u,String(r)));this._data.push(r===void 0?null:r)}return this}L(a,"name","MultiSlice");$(a.prototype,"ndims",function(){return this._data.length});$(a.prototype,"data",function(){return this._data.slice()});L(a.prototype,"toString",function(){var t,i,r;for(t=this._data,i=[],r=0;r<t.length;r++)i.push(String(t[r]));return"MultiSlice("+i.join(",")+")"});L(a.prototype,"toJSON",function(){var t,i,r,u;for(t=this._data,i={type:"MultiSlice",data:[]},u=0;u<t.length;u++)r=t[u],i.data.push(r&&typeof r.toJSON=="function"?r.toJSON():r);return i});J.exports=a
});var w=s(function(_i,Q){
var zr=j();Q.exports=zr
});var X=s(function(gi,k){
var c=w();function Gr(e){switch(e.length){case 0:return new c;case 1:return new c(e[0]);case 2:return new c(e[0],e[1]);case 3:return new c(e[0],e[1],e[2]);case 4:return new c(e[0],e[1],e[2],e[3]);case 5:return new c(e[0],e[1],e[2],e[3],e[4]);case 6:return new c(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return c.apply(null,e)}}k.exports=Gr
});var S=s(function(Ri,Y){
var $r=X();Y.exports=$r
});var K=s(function(Ii,H){
var Jr=require('@stdlib/math/base/special/ceil/dist');function jr(e){var t,i,r;return i=e.start,r=e.stop,t=e.step,r===null&&(r=-1),t>0&&i>=r||t<0&&i<=r?0:Jr((r-i)/t)}H.exports=jr
});var M=s(function(xi,W){
var Qr=K();W.exports=Qr
});var ee=s(function(wi,Z){
function kr(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]!="number"&&i.push(r);return i}Z.exports=kr
});var te=s(function(Ni,re){
var Xr=ee();re.exports=Xr
});var ne=s(function(Oi,ie){
var V=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Yr=require('@stdlib/assert/is-integer/dist').isPrimitive,Hr=require('@stdlib/assert/is-null/dist'),Kr=require('@stdlib/assert/is-undefined/dist'),N=require('@stdlib/string/format/dist');function U(e){return Yr(e)||Hr(e)||Kr(e)}function p(){var e,t,i,r;if(e=arguments.length,e===0?(t=null,i=null,r=null):e===1?(t=null,i=arguments[0],r=null):e===2?(t=arguments[0],i=arguments[1],r=null):(t=arguments[0],i=arguments[1],r=arguments[2]),!(this instanceof p))return new p(t,i,r);if(!U(t))throw new TypeError(N('1j3Ef',t));if(!U(i))throw new TypeError(N('1j3Eg',i));if(U(r)){if(r===0)throw new RangeError(N('1j3Ei',r))}else throw new TypeError(N('1j3Eh',r));return this._start=t===void 0?null:t,this._stop=i===void 0?null:i,this._step=r===void 0?null:r,this}V(p,"name","Slice");C(p.prototype,"start",function(){return this._start});C(p.prototype,"stop",function(){return this._stop});C(p.prototype,"step",function(){return this._step});V(p.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});V(p.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});ie.exports=p
});var m=s(function(yi,ue){
var Wr=ne();ue.exports=Wr
});var ae=s(function(Ti,se){
function Zr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}se.exports=Zr
});var le=s(function(Di,oe){
var et=m(),_=ae();function rt(e,t,i){var r,u,n;if(r=e.start,u=e.stop,n=e.step,n===null&&(n=1),r===null)n>0?r=0:r=t-1;else if(r<0){if(r=t+r,r<0){if(i)return _();r=0}}else if(r>=t){if(i)return _();n<0?r=t-1:r=t}if(u===null)n>0?u=t:u=null;else if(u<0){if(u=t+u,u<0)if(n>0){if(i)return _();u=0}else{if(i&&u<-1)return _();u=null}}else if(u>t){if(i)return _();u=t}return new et(r,u,n)}oe.exports=rt
});var P=s(function(bi,fe){
var tt=le();fe.exports=tt
});var ve=s(function(Li,ce){
function it(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}ce.exports=it
});var de=s(function(Mi,me){
var nt=S(),g=m(),ut=P(),pe=ve();function st(e,t,i){return e===null?new g(0,t,1):typeof e=="number"?e>=t?i?pe():new g(t,t,1):e<0?(e=t+e,e<0?i?pe():new g(0,0,1):new g(e,e+1,1)):new g(e,e+1,1):ut(e,t,i)}function at(e,t,i){var r,u,n,v;for(r=e.data,u=[],v=0;v<r.length;v++){if(n=st(r[v],t[v],i),n.code!==void 0)return n;u.push(n)}return nt(u)}me.exports=at
});var Ee=s(function(Ui,qe){
var ot=de();qe.exports=ot
});var Se=s(function(Vi,he){
function lt(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]=="number"&&i.push(r);return i}he.exports=lt
});var ge=s(function(Ci,_e){
var ft=Se();_e.exports=ft
});var xe=s(function(Pi,Ie){
var ct=require('@stdlib/string/base/trim/dist'),vt=m(),F="Slice(",Re=3,pt=/\s*,\s*/,mt=/^-?[0-9]+$/;function dt(e){var t,i,r,u,n;if(e.substring(0,F.length)!==F||(r=e.length-1,e[r]!==")")||(e=ct(e.substring(F.length,r)),e=e.split(pt),e.length!==Re))return null;for(t=[],n=0;n<Re;n++){if(u=e[n],u==="null")i=null;else if(mt.test(u))i=parseInt(u,10);else return null;t.push(i)}return new vt(t[0],t[1],t[2])}Ie.exports=dt
});var B=s(function(Fi,we){
var qt=xe();we.exports=qt
});var Oe=s(function(Bi,Ne){
var Et=require('@stdlib/string/base/trim/dist'),ht=B(),St=w(),_t=S(),A="MultiSlice(",gt=/\s*,\s*/,Rt=/^-?[0-9]+$/;function It(e){var t,i,r,u,n;if(e.substring(0,A.length)!==A||(r=e.length-1,e[r]!==")"))return null;if(e=Et(e.substring(A.length,r)),e=e.split(gt),r=e.length,r===1&&e[0]==="")return new St;for(t=[],n=0;n<r;n++){if(u=e[n],u[0]==="S"){if(u=e.slice(n,n+3).join(","),i=ht(u),i===null)return null;n+=2}else if(u==="null")i=null;else if(Rt.test(u))i=parseInt(u,10);else return null;t.push(i)}return _t(t)}Ne.exports=It
});var z=s(function(Ai,ye){
var xt=Oe();ye.exports=xt
});var De=s(function(zi,Te){
var O=require('@stdlib/string/base/replace/dist'),wt=z();function Nt(e){return e=O(e,/^,/,"null,"),e=O(e,/,$/,",null"),e=O(e,/,(?=,)/g,",null"),e=O(e,/undefined/g,"null"),wt("MultiSlice("+e+")")}Te.exports=Nt
});var Le=s(function(Gi,be){
var Ot=De();be.exports=Ot
});var Ue=s(function($i,Me){
var yt=/(?:\s*-\s*)(?=\d+)(\d+)$/;Me.exports=yt
});var Ce=s(function(Ji,Ve){
var Tt=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;Ve.exports=Tt
});var Be=s(function(ji,Fe){
var Pe=require('@stdlib/math/base/special/floor/dist'),Dt=Ue(),bt=Ce();function Lt(e,t,i,r){var u;if(e==="end")return t;if(u=e.match(Dt),u){if(e=t-parseInt(u[1],10),e<0){if(r)return-2;e=0}return e}return u=e.match(bt),u?(e=parseFloat(u[1]),e<1?r?-2:-1:i&&t>0&&e!==1?Pe((t-1)/e):Pe(t/e)):-1}Fe.exports=Lt
});var ze=s(function(Qi,Ae){
var Mt=/\s*:\s*/;Ae.exports=Mt
});var $e=s(function(ki,Ge){
var Ut=/^[-+]?[0-9]+$/;Ge.exports=Ut
});var je=s(function(Xi,Je){
var Vt=/^end/;Je.exports=Vt
});var ke=s(function(Yi,Qe){
function Ct(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}Qe.exports=Ct
});var Ye=s(function(Hi,Xe){
function Pt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Xe.exports=Pt
});var Ke=s(function(Ki,He){
function Ft(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}He.exports=Ft
});var tr=s(function(Wi,rr){
var We=m(),Bt=require('@stdlib/string/base/trim/dist'),Ze=Be(),At=ze(),G=$e(),er=je(),E=ke(),d=Ye(),zt=Ke();function Gt(e,t,i){var r,u,n;if(r=Bt(e).split(At),u=r.length,u<2||u>3)return E();if(u===3)if(n=r[2],n.length===0)r[2]=1;else{if(G.test(n)===!1)return E();if(n=parseInt(n,10),n===0)return zt();r[2]=n}else r.push(1);if(n=r[0],n.length===0)r[2]<0&&t>0?r[0]=t-1:r[0]=0;else if(er.test(n)){if(n=Ze(n,t,r[2]<0,i),n<0)return n===-2?d():E();r[2]<0&&n>=t&&(n-=1),r[0]=n}else if(G.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0){if(i)return d();n=0}}else if(n>=t){if(i)return d();r[2]<0?n=t-1:n=t}r[0]=n}else return E();if(n=r[1],n.length===0)r[2]<0?r[1]=null:r[1]=t;else if(er.test(n)){if(n=Ze(n,t,r[2]<0,i),n<0)return n===-2?d():E();r[1]=n}else if(G.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0)if(r[2]>0){if(i)return d();n=0}else{if(i&&n<-1)return d();n=null}}else if(n>t){if(i)return d();n=t}r[1]=n}else return E();return t===0?new We(0,0,r[2]):new We(r[0],r[1],r[2])}rr.exports=Gt
});var y=s(function(Zi,ir){
var $t=tr();ir.exports=$t
});var ur=s(function(en,nr){
function Jt(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}nr.exports=Jt
});var ar=s(function(rn,sr){
function jt(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}sr.exports=jt
});var lr=s(function(tn,or){
function Qt(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}or.exports=Qt
});var cr=s(function(nn,fr){
function kt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}fr.exports=kt
});var pr=s(function(un,vr){
var Xt=/\s*,\s*/;vr.exports=Xt
});var dr=s(function(sn,mr){
var Yt=/^[-+]?[0-9]+$/;mr.exports=Yt
});var hr=s(function(an,Er){
var Ht=require('@stdlib/string/base/trim/dist'),Kt=m(),Wt=S(),Zt=y(),ei=ur(),ri=ar(),ti=lr(),qr=cr(),ii=pr(),ni=dr();function ui(e,t,i){var r,u,n,v,I,D,l,x,q,b;for(I=t.length,r=Ht(e).split(ii),D=r.length,n=!1,u=[],q=0,x=0;x<D;x++){if(l=r[x],l==="..."){if(n)return ei();for(n=!0,b=0;b<I-D+1;b++)u.push(new Kt(0,t[q],1)),q+=1;continue}if(v=t[q],ni.test(l)){if(l=parseInt(l,10),i){if(l<0){if(v+l<0)return qr()}else if(l>=v)return qr()}q+=1}else{if(l=Zt(l,v,i),l.code)return l;q+=1}u.push(l)}return u.length!==I?u.length<I?ri():ti():Wt(u)}Er.exports=ui
});var _r=s(function(on,Sr){
var si=hr();Sr.exports=si
});var Rr=s(function(ln,gr){
var ai=M();function oi(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)i.push(ai(t[r]));return i}gr.exports=oi
});var xr=s(function(fn,Ir){
var li=Rr();Ir.exports=li
});var Nr=s(function(cn,wr){
function fi(e){var t,i,r,u;return i=e.start,r=e.stop,u=e.step,i===null?t="":t=String(i),r===null?u===null?t+":":t===""?"::"+u:t+"::"+u:(t+=":"+r,u===null?t:t+":"+u)}wr.exports=fi
});var yr=s(function(vn,Or){
var ci=Nr();Or.exports=ci
});var Dr=s(function(pn,Tr){
var f=require('@stdlib/utils/define-read-only-property/dist'),o={};f(o,"args2multislice",S());f(o,"sliceLength",M());f(o,"nonreducedDimensions",te());f(o,"normalizeMultiSlice",Ee());f(o,"normalizeSlice",P());f(o,"reducedDimensions",ge());f(o,"sargs2multislice",Le());f(o,"seq2multislice",_r());f(o,"seq2slice",y());f(o,"sliceShape",xr());f(o,"slice2seq",yr());f(o,"str2multislice",z());f(o,"str2slice",B());Tr.exports=o
});var Lr=s(function(mn,br){
var vi=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,pi=require('@stdlib/assert/is-string/dist').isPrimitive,mi=require('@stdlib/assert/is-boolean/dist').isPrimitive,di=y(),h=require('@stdlib/string/format/dist');function qi(e,t,i){var r,u;if(!pi(e))throw new TypeError(h('1j3Ej',e));if(!vi(t))throw new TypeError(h('1j33X',t));if(!mi(i))throw new TypeError(h('1j3AL',i));if(u=di(e,t,i),r=u.code,r===void 0)return u;throw r==="ERR_SLICE_INVALID_INCREMENT"?new RangeError(h('1j3Ek',e)):r==="ERR_SLICE_OUT_OF_BOUNDS"?new RangeError(h('1j3El',e)):new TypeError(h('1j3Ej',e))}br.exports=qi
});var Ur=s(function(dn,Mr){
var Ei=Lr();Mr.exports=Ei
});var T=require('@stdlib/utils/define-read-only-property/dist'),R={};T(R,"base",Dr());T(R,"Slice",m());T(R,"MultiSlice",w());T(R,"seq2slice",Ur());module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
