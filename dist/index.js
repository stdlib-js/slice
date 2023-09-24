"use strict";var s=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var A=s(function(ii,B){
var Oe=require('@stdlib/math/base/special/ceil/dist');function we(e){var t,i,r;return i=e.start,r=e.stop,t=e.step,r===null&&(r=-1),t>0&&i>=r||t<0&&i<=r?0:Oe((r-i)/t)}B.exports=we
});var T=s(function(ni,z){
var ye=A();z.exports=ye
});var J=s(function(ui,G){
function Te(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]!="number"&&i.push(r);return i}G.exports=Te
});var j=s(function(si,$){
var De=J();$.exports=De
});var X=s(function(ai,k){
var D=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Q=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),be=require('@stdlib/assert/is-integer/dist').isPrimitive,Le=require('@stdlib/assert/is-null/dist'),Me=require('@stdlib/assert/is-undefined/dist'),Ue=require('@stdlib/assert/is-slice/dist'),Ve=require('@stdlib/string/format/dist');function Ce(e){return be(e)||Le(e)||Me(e)||Ue(e)}function a(){var e,t,i,r,u;if(e=arguments.length,!(this instanceof a)){if(e===1)return new a(arguments[0]);if(e===2)return new a(arguments[0],arguments[1]);if(e===3)return new a(arguments[0],arguments[1],arguments[2]);if(e===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(e===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(i=[],u=0;u<e;u++)i.push(arguments[u]);return t=Object.create(a.prototype),a.apply(t,i)}for(this._data=[],u=0;u<e;u++){if(r=arguments[u],!Ce(r))throw new TypeError(Ve('1j3Em',u,r));this._data.push(r===void 0?null:r)}return this}D(a,"name","MultiSlice");Q(a.prototype,"ndims",function(){return this._data.length});Q(a.prototype,"data",function(){return this._data.slice()});D(a.prototype,"toString",function(){var t,i,r;for(t=this._data,i=[],r=0;r<t.length;r++)i.push(String(t[r]));return"MultiSlice("+i.join(",")+")"});D(a.prototype,"toJSON",function(){var t,i,r,u;for(t=this._data,i={type:"MultiSlice",data:[]},u=0;u<t.length;u++)r=t[u],i.data.push(r&&typeof r.toJSON=="function"?r.toJSON():r);return i});k.exports=a
});var E=s(function(oi,Y){
var Pe=X();Y.exports=Pe
});var K=s(function(li,H){
var L=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),M=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Fe=require('@stdlib/assert/is-integer/dist').isPrimitive,Be=require('@stdlib/assert/is-null/dist'),Ae=require('@stdlib/assert/is-undefined/dist'),x=require('@stdlib/string/format/dist');function b(e){return Fe(e)||Be(e)||Ae(e)}function c(){var e,t,i,r;if(e=arguments.length,e===0?(t=null,i=null,r=null):e===1?(t=null,i=arguments[0],r=null):e===2?(t=arguments[0],i=arguments[1],r=null):(t=arguments[0],i=arguments[1],r=arguments[2]),!(this instanceof c))return new c(t,i,r);if(!b(t))throw new TypeError(x('1j3Ef',t));if(!b(i))throw new TypeError(x('1j3Eg',i));if(b(r)){if(r===0)throw new RangeError(x('1j3Ei',r))}else throw new TypeError(x('1j3Eh',r));return this._start=t===void 0?null:t,this._stop=i===void 0?null:i,this._step=r===void 0?null:r,this}L(c,"name","Slice");M(c.prototype,"start",function(){return this._start});M(c.prototype,"stop",function(){return this._stop});M(c.prototype,"step",function(){return this._step});L(c.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});L(c.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});H.exports=c
});var p=s(function(fi,W){
var ze=K();W.exports=ze
});var rr=s(function(vi,Z){
function Ge(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Z.exports=Ge
});var tr=s(function(ci,er){
var Je=p(),h=rr();function $e(e,t,i){var r,u,n;if(r=e.start,u=e.stop,n=e.step,n===null&&(n=1),r===null)n>0?r=0:r=t-1;else if(r<0){if(r=t+r,r<0){if(i)return h();r=0}}else if(r>=t){if(i)return h();n<0?r=t-1:r=t}if(u===null)n>0?u=t:u=null;else if(u<0){if(u=t+u,u<0)if(n>0){if(i)return h();u=0}else{if(i&&u<-1)return h();u=null}}else if(u>t){if(i)return h();u=t}return new Je(r,u,n)}er.exports=$e
});var U=s(function(pi,ir){
var je=tr();ir.exports=je
});var ur=s(function(gi,nr){
function Qe(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}nr.exports=Qe
});var or=s(function(di,ar){
var ke=E(),S=p(),Xe=U(),sr=ur();function Ye(e,t,i){return e===null?new S(0,t,1):typeof e=="number"?e>=t?i?sr():new S(t,t,1):e<0?(e=t+e,e<0?i?sr():new S(0,0,1):new S(e,e+1,1)):new S(e,e+1,1):Xe(e,t,i)}function He(e,t,i){var r,u,n,v;for(r=e.data,u=[],v=0;v<r.length;v++){if(n=Ye(r[v],t[v],i),n.code!==void 0)return n;u.push(n)}return ke.apply(null,u)}ar.exports=He
});var fr=s(function(mi,lr){
var Ke=or();lr.exports=Ke
});var cr=s(function(qi,vr){
function We(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]=="number"&&i.push(r);return i}vr.exports=We
});var gr=s(function(Ei,pr){
var Ze=cr();pr.exports=Ze
});var mr=s(function(hi,dr){
var rt=/(?:\s*-\s*)(?=\d+)(\d+)$/;dr.exports=rt
});var Er=s(function(Si,qr){
var et=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;qr.exports=et
});var _r=s(function(_i,Sr){
var hr=require('@stdlib/math/base/special/floor/dist'),tt=mr(),it=Er();function nt(e,t,i,r){var u;if(e==="end")return t;if(u=e.match(tt),u){if(e=t-parseInt(u[1],10),e<0){if(r)return-2;e=0}return e}return u=e.match(it),u?(e=parseFloat(u[1]),e<1?r?-2:-1:i&&t>0&&e!==1?hr((t-1)/e):hr(t/e)):-1}Sr.exports=nt
});var Ir=s(function(Ri,Rr){
var ut=/\s*:\s*/;Rr.exports=ut
});var Nr=s(function(Ii,xr){
var st=/^[-+]?[0-9]+$/;xr.exports=st
});var wr=s(function(xi,Or){
var at=/^end/;Or.exports=at
});var Tr=s(function(Ni,yr){
function ot(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}yr.exports=ot
});var br=s(function(Oi,Dr){
function lt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Dr.exports=lt
});var Mr=s(function(wi,Lr){
function ft(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}Lr.exports=ft
});var Fr=s(function(yi,Pr){
var Ur=p(),vt=require('@stdlib/string/base/trim/dist'),Vr=_r(),ct=Ir(),V=Nr(),Cr=wr(),m=Tr(),g=br(),pt=Mr();function gt(e,t,i){var r,u,n;if(r=vt(e).split(ct),u=r.length,u<2||u>3)return m();if(u===3)if(n=r[2],n.length===0)r[2]=1;else{if(V.test(n)===!1)return m();if(n=parseInt(n,10),n===0)return pt();r[2]=n}else r.push(1);if(n=r[0],n.length===0)r[2]<0&&t>0?r[0]=t-1:r[0]=0;else if(Cr.test(n)){if(n=Vr(n,t,r[2]<0,i),n<0)return n===-2?g():m();r[2]<0&&n>=t&&(n-=1),r[0]=n}else if(V.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0){if(i)return g();n=0}}else if(n>=t){if(i)return g();r[2]<0?n=t-1:n=t}r[0]=n}else return m();if(n=r[1],n.length===0)r[2]<0?r[1]=null:r[1]=t;else if(Cr.test(n)){if(n=Vr(n,t,r[2]<0,i),n<0)return n===-2?g():m();r[1]=n}else if(V.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0)if(r[2]>0){if(i)return g();n=0}else{if(i&&n<-1)return g();n=null}}else if(n>t){if(i)return g();n=t}r[1]=n}else return m();return t===0?new Ur(0,0,r[2]):new Ur(r[0],r[1],r[2])}Pr.exports=gt
});var N=s(function(Ti,Br){
var dt=Fr();Br.exports=dt
});var zr=s(function(Di,Ar){
function mt(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}Ar.exports=mt
});var Jr=s(function(bi,Gr){
function qt(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}Gr.exports=qt
});var jr=s(function(Li,$r){
function Et(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}$r.exports=Et
});var kr=s(function(Mi,Qr){
function ht(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Qr.exports=ht
});var Yr=s(function(Ui,Xr){
var St=/\s*,\s*/;Xr.exports=St
});var Kr=s(function(Vi,Hr){
var _t=/^[-+]?[0-9]+$/;Hr.exports=_t
});var re=s(function(Ci,Zr){
var Rt=require('@stdlib/string/base/trim/dist'),It=p(),xt=E(),Nt=N(),Ot=zr(),wt=Jr(),yt=jr(),Wr=kr(),Tt=Yr(),Dt=Kr();function bt(e,t,i){var r,u,n,v,R,w,o,I,d,y;for(R=t.length,r=Rt(e).split(Tt),w=r.length,n=!1,u=[],d=0,I=0;I<w;I++){if(o=r[I],o==="..."){if(n)return Ot();for(n=!0,y=0;y<R-w+1;y++)u.push(new It(0,t[d],1)),d+=1;continue}if(v=t[d],Dt.test(o)){if(o=parseInt(o,10),i){if(o<0){if(v+o<0)return Wr()}else if(o>=v)return Wr()}d+=1}else{if(o=Nt(o,v,i),o.code)return o;d+=1}u.push(o)}return u.length!==R?u.length<R?wt():yt():xt.apply(null,u)}Zr.exports=bt
});var te=s(function(Pi,ee){
var Lt=re();ee.exports=Lt
});var ne=s(function(Fi,ie){
var Mt=T();function Ut(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)i.push(Mt(t[r]));return i}ie.exports=Ut
});var se=s(function(Bi,ue){
var Vt=ne();ue.exports=Vt
});var oe=s(function(Ai,ae){
function Ct(e){var t,i,r,u;return i=e.start,r=e.stop,u=e.step,i===null?t="":t=String(i),r===null?u===null?t+":":t===""?"::"+u:t+"::"+u:(t+=":"+r,u===null?t:t+":"+u)}ae.exports=Ct
});var fe=s(function(zi,le){
var Pt=oe();le.exports=Pt
});var pe=s(function(Gi,ce){
var Ft=require('@stdlib/string/base/trim/dist'),Bt=p(),C="Slice(",ve=3,At=/\s*,\s*/,zt=/^-?[0-9]+$/;function Gt(e){var t,i,r,u,n;if(e.substring(0,C.length)!==C||(r=e.length-1,e[r]!==")")||(e=Ft(e.substring(C.length,r)),e=e.split(At),e.length!==ve))return null;for(t=[],n=0;n<ve;n++){if(u=e[n],u==="null")i=null;else if(zt.test(u))i=parseInt(u,10);else return null;t.push(i)}return new Bt(t[0],t[1],t[2])}ce.exports=Gt
});var P=s(function(Ji,ge){
var Jt=pe();ge.exports=Jt
});var qe=s(function($i,me){
var $t=require('@stdlib/string/base/trim/dist'),jt=P(),de=E(),F="MultiSlice(",Qt=/\s*,\s*/,kt=/^-?[0-9]+$/;function Xt(e){var t,i,r,u,n;if(e.substring(0,F.length)!==F||(r=e.length-1,e[r]!==")"))return null;if(e=$t(e.substring(F.length,r)),e=e.split(Qt),r=e.length,r===1&&e[0]==="")return new de;for(t=[],n=0;n<r;n++){if(u=e[n],u[0]==="S"){if(u=e.slice(n,n+3).join(","),i=jt(u),i===null)return null;n+=2}else if(u==="null")i=null;else if(kt.test(u))i=parseInt(u,10);else return null;t.push(i)}return de.apply(null,t)}me.exports=Xt
});var he=s(function(ji,Ee){
var Yt=qe();Ee.exports=Yt
});var _e=s(function(Qi,Se){
var f=require('@stdlib/utils/define-read-only-property/dist'),l={};f(l,"sliceLength",T());f(l,"nonreducedDimensions",j());f(l,"normalizeMultiSlice",fr());f(l,"normalizeSlice",U());f(l,"reducedDimensions",gr());f(l,"seq2multislice",te());f(l,"seq2slice",N());f(l,"sliceShape",se());f(l,"slice2seq",fe());f(l,"str2multislice",he());f(l,"str2slice",P());Se.exports=l
});var Ie=s(function(ki,Re){
var Ht=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,Kt=require('@stdlib/assert/is-string/dist').isPrimitive,Wt=require('@stdlib/assert/is-boolean/dist').isPrimitive,Zt=N(),q=require('@stdlib/string/format/dist');function ri(e,t,i){var r,u;if(!Kt(e))throw new TypeError(q('1j3Ej',e));if(!Ht(t))throw new TypeError(q('1j33X',t));if(!Wt(i))throw new TypeError(q('1j3AL',i));if(u=Zt(e,t,i),r=u.code,r===void 0)return u;throw r==="ERR_SLICE_INVALID_INCREMENT"?new RangeError(q('1j3Ek',e)):r==="ERR_SLICE_OUT_OF_BOUNDS"?new RangeError(q('1j3El',e)):new TypeError(q('1j3Ej',e))}Re.exports=ri
});var Ne=s(function(Xi,xe){
var ei=Ie();xe.exports=ei
});var O=require('@stdlib/utils/define-read-only-property/dist'),_={};O(_,"base",_e());O(_,"Slice",p());O(_,"MultiSlice",E());O(_,"seq2slice",Ne());module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
