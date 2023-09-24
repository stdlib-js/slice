"use strict";var s=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var A=s(function(Kt,B){
var Re=require('@stdlib/math/base/special/ceil/dist');function Ie(e){var t,n,r;return n=e.start,r=e.stop,t=e.step,r===null&&(r=-1),t>0&&n>=r||t<0&&n<=r?0:Re((r-n)/t)}B.exports=Ie
});var T=s(function(Wt,z){
var xe=A();z.exports=xe
});var J=s(function(Zt,G){
function Ne(e){var t,n,r;for(t=e.data,n=[],r=0;r<t.length;r++)typeof t[r]!="number"&&n.push(r);return n}G.exports=Ne
});var j=s(function(ri,$){
var Oe=J();$.exports=Oe
});var X=s(function(ei,k){
var b=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Q=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),we=require('@stdlib/assert/is-integer/dist').isPrimitive,ye=require('@stdlib/assert/is-null/dist'),Te=require('@stdlib/assert/is-undefined/dist'),be=require('@stdlib/assert/is-slice/dist'),De=require('@stdlib/string/format/dist');function Le(e){return we(e)||ye(e)||Te(e)||be(e)}function a(){var e,t,n,r,u;if(e=arguments.length,!(this instanceof a)){if(e===1)return new a(arguments[0]);if(e===2)return new a(arguments[0],arguments[1]);if(e===3)return new a(arguments[0],arguments[1],arguments[2]);if(e===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(e===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(n=[],u=0;u<e;u++)n.push(arguments[u]);return t=Object.create(a.prototype),a.apply(t,n)}for(this._data=[],u=0;u<e;u++){if(r=arguments[u],!Le(r))throw new TypeError(De('1j3Em',u,r));this._data.push(r===void 0?null:r)}return this}b(a,"name","MultiSlice");Q(a.prototype,"ndims",function(){return this._data.length});Q(a.prototype,"data",function(){return this._data.slice()});b(a.prototype,"toString",function(){var t,n,r;for(t=this._data,n=[],r=0;r<t.length;r++)n.push(String(t[r]));return"MultiSlice("+n.join(",")+")"});b(a.prototype,"toJSON",function(){var t,n,r,u;for(t=this._data,n={type:"MultiSlice",data:[]},u=0;u<t.length;u++)r=t[u],n.data.push(r&&typeof r.toJSON=="function"?r.toJSON():r);return n});k.exports=a
});var E=s(function(ti,Y){
var Me=X();Y.exports=Me
});var K=s(function(ii,H){
var L=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),M=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Ue=require('@stdlib/assert/is-integer/dist').isPrimitive,Ve=require('@stdlib/assert/is-null/dist'),Ce=require('@stdlib/assert/is-undefined/dist'),x=require('@stdlib/string/format/dist');function D(e){return Ue(e)||Ve(e)||Ce(e)}function c(){var e,t,n,r;if(e=arguments.length,e===0?(t=null,n=null,r=null):e===1?(t=null,n=arguments[0],r=null):e===2?(t=arguments[0],n=arguments[1],r=null):(t=arguments[0],n=arguments[1],r=arguments[2]),!(this instanceof c))return new c(t,n,r);if(!D(t))throw new TypeError(x('1j3Ef',t));if(!D(n))throw new TypeError(x('1j3Eg',n));if(D(r)){if(r===0)throw new RangeError(x('1j3Ei',r))}else throw new TypeError(x('1j3Eh',r));return this._start=t===void 0?null:t,this._stop=n===void 0?null:n,this._step=r===void 0?null:r,this}L(c,"name","Slice");M(c.prototype,"start",function(){return this._start});M(c.prototype,"stop",function(){return this._stop});M(c.prototype,"step",function(){return this._step});L(c.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});L(c.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});H.exports=c
});var p=s(function(ni,W){
var Pe=K();W.exports=Pe
});var rr=s(function(ui,Z){
function Fe(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Z.exports=Fe
});var tr=s(function(si,er){
var Be=p(),S=rr();function Ae(e,t,n){var r,u,i;if(r=e.start,u=e.stop,i=e.step,i===null&&(i=1),r===null)i>0?r=0:r=t-1;else if(r<0){if(r=t+r,r<0){if(n)return S();r=0}}else if(r>=t){if(n)return S();i<0?r=t-1:r=t}if(u===null)i>0?u=t:u=null;else if(u<0){if(u=t+u,u<0)if(i>0){if(n)return S();u=0}else{if(n&&u<-1)return S();u=null}}else if(u>t){if(n)return S();u=t}return new Be(r,u,i)}er.exports=Ae
});var U=s(function(ai,ir){
var ze=tr();ir.exports=ze
});var ur=s(function(oi,nr){
function Ge(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}nr.exports=Ge
});var or=s(function(li,ar){
var Je=E(),h=p(),$e=U(),sr=ur();function je(e,t,n){return e===null?new h(0,t,1):typeof e=="number"?e>=t?n?sr():new h(t,t,1):e<0?(e=t+e,e<0?n?sr():new h(0,0,1):new h(e,e+1,1)):new h(e,e+1,1):$e(e,t,n)}function Qe(e,t,n){var r,u,i,f;for(r=e.data,u=[],f=0;f<r.length;f++){if(i=je(r[f],t[f],n),i.code!==void 0)return i;u.push(i)}return Je.apply(null,u)}ar.exports=Qe
});var fr=s(function(fi,lr){
var ke=or();lr.exports=ke
});var cr=s(function(vi,vr){
var Xe=/(?:\s*-\s*)(?=\d+)(\d+)$/;vr.exports=Xe
});var gr=s(function(ci,pr){
var Ye=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;pr.exports=Ye
});var qr=s(function(pi,mr){
var dr=require('@stdlib/math/base/special/floor/dist'),He=cr(),Ke=gr();function We(e,t,n,r){var u;if(e==="end")return t;if(u=e.match(He),u){if(e=t-parseInt(u[1],10),e<0){if(r)return-2;e=0}return e}return u=e.match(Ke),u?(e=parseFloat(u[1]),e<1?r?-2:-1:n&&t>0&&e!==1?dr((t-1)/e):dr(t/e)):-1}mr.exports=We
});var Sr=s(function(gi,Er){
var Ze=/\s*:\s*/;Er.exports=Ze
});var _r=s(function(di,hr){
var rt=/^[-+]?[0-9]+$/;hr.exports=rt
});var Ir=s(function(mi,Rr){
var et=/^end/;Rr.exports=et
});var Nr=s(function(qi,xr){
function tt(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}xr.exports=tt
});var wr=s(function(Ei,Or){
function it(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Or.exports=it
});var Tr=s(function(Si,yr){
function nt(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}yr.exports=nt
});var Ur=s(function(hi,Mr){
var br=p(),ut=require('@stdlib/string/base/trim/dist'),Dr=qr(),st=Sr(),V=_r(),Lr=Ir(),m=Nr(),g=wr(),at=Tr();function ot(e,t,n){var r,u,i;if(r=ut(e).split(st),u=r.length,u<2||u>3)return m();if(u===3)if(i=r[2],i.length===0)r[2]=1;else{if(V.test(i)===!1)return m();if(i=parseInt(i,10),i===0)return at();r[2]=i}else r.push(1);if(i=r[0],i.length===0)r[2]<0&&t>0?r[0]=t-1:r[0]=0;else if(Lr.test(i)){if(i=Dr(i,t,r[2]<0,n),i<0)return i===-2?g():m();r[2]<0&&i>=t&&(i-=1),r[0]=i}else if(V.test(i)){if(i=parseInt(i,10),i<0){if(i=t+i,i<0){if(n)return g();i=0}}else if(i>=t){if(n)return g();r[2]<0?i=t-1:i=t}r[0]=i}else return m();if(i=r[1],i.length===0)r[2]<0?r[1]=null:r[1]=t;else if(Lr.test(i)){if(i=Dr(i,t,r[2]<0,n),i<0)return i===-2?g():m();r[1]=i}else if(V.test(i)){if(i=parseInt(i,10),i<0){if(i=t+i,i<0)if(r[2]>0){if(n)return g();i=0}else{if(n&&i<-1)return g();i=null}}else if(i>t){if(n)return g();i=t}r[1]=i}else return m();return t===0?new br(0,0,r[2]):new br(r[0],r[1],r[2])}Mr.exports=ot
});var N=s(function(_i,Vr){
var lt=Ur();Vr.exports=lt
});var Pr=s(function(Ri,Cr){
function ft(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}Cr.exports=ft
});var Br=s(function(Ii,Fr){
function vt(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}Fr.exports=vt
});var zr=s(function(xi,Ar){
function ct(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}Ar.exports=ct
});var Jr=s(function(Ni,Gr){
function pt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Gr.exports=pt
});var jr=s(function(Oi,$r){
var gt=/\s*,\s*/;$r.exports=gt
});var kr=s(function(wi,Qr){
var dt=/^[-+]?[0-9]+$/;Qr.exports=dt
});var Hr=s(function(yi,Yr){
var mt=require('@stdlib/string/base/trim/dist'),qt=p(),Et=E(),St=N(),ht=Pr(),_t=Br(),Rt=zr(),Xr=Jr(),It=jr(),xt=kr();function Nt(e,t,n){var r,u,i,f,R,w,o,I,d,y;for(R=t.length,r=mt(e).split(It),w=r.length,i=!1,u=[],d=0,I=0;I<w;I++){if(o=r[I],o==="..."){if(i)return ht();for(i=!0,y=0;y<R-w+1;y++)u.push(new qt(0,t[d],1)),d+=1;continue}if(f=t[d],xt.test(o)){if(o=parseInt(o,10),n){if(o<0){if(f+o<0)return Xr()}else if(o>=f)return Xr()}d+=1}else{if(o=St(o,f,n),o.code)return o;d+=1}u.push(o)}return u.length!==R?u.length<R?_t():Rt():Et.apply(null,u)}Yr.exports=Nt
});var Wr=s(function(Ti,Kr){
var Ot=Hr();Kr.exports=Ot
});var re=s(function(bi,Zr){
var wt=T();function yt(e){var t,n,r;for(t=e.data,n=[],r=0;r<t.length;r++)n.push(wt(t[r]));return n}Zr.exports=yt
});var te=s(function(Di,ee){
var Tt=re();ee.exports=Tt
});var ne=s(function(Li,ie){
function bt(e){var t,n,r,u;return n=e.start,r=e.stop,u=e.step,n===null?t="":t=String(n),r===null?u===null?t+":":t===""?"::"+u:t+"::"+u:(t+=":"+r,u===null?t:t+":"+u)}ie.exports=bt
});var se=s(function(Mi,ue){
var Dt=ne();ue.exports=Dt
});var le=s(function(Ui,oe){
var Lt=require('@stdlib/string/base/trim/dist'),Mt=p(),C="Slice(",ae=3,Ut=/\s*,\s*/,Vt=/^-?[0-9]+$/;function Ct(e){var t,n,r,u,i;if(e.substring(0,C.length)!==C||(r=e.length-1,e[r]!==")")||(e=Lt(e.substring(C.length,r)),e=e.split(Ut),e.length!==ae))return null;for(t=[],i=0;i<ae;i++){if(u=e[i],u==="null")n=null;else if(Vt.test(u))n=parseInt(u,10);else return null;t.push(n)}return new Mt(t[0],t[1],t[2])}oe.exports=Ct
});var P=s(function(Vi,fe){
var Pt=le();fe.exports=Pt
});var pe=s(function(Ci,ce){
var Ft=require('@stdlib/string/base/trim/dist'),Bt=P(),ve=E(),F="MultiSlice(",At=/\s*,\s*/,zt=/^-?[0-9]+$/;function Gt(e){var t,n,r,u,i;if(e.substring(0,F.length)!==F||(r=e.length-1,e[r]!==")"))return null;if(e=Ft(e.substring(F.length,r)),e=e.split(At),r=e.length,r===1&&e[0]==="")return new ve;for(t=[],i=0;i<r;i++){if(u=e[i],u[0]==="S"){if(u=e.slice(i,i+3).join(","),n=Bt(u),n===null)return null;i+=2}else if(u==="null")n=null;else if(zt.test(u))n=parseInt(u,10);else return null;t.push(n)}return ve.apply(null,t)}ce.exports=Gt
});var de=s(function(Pi,ge){
var Jt=pe();ge.exports=Jt
});var qe=s(function(Fi,me){
var v=require('@stdlib/utils/define-read-only-property/dist'),l={};v(l,"sliceLength",T());v(l,"nonreducedDimensions",j());v(l,"normalizeMultiSlice",fr());v(l,"normalizeSlice",U());v(l,"seq2multislice",Wr());v(l,"seq2slice",N());v(l,"sliceShape",te());v(l,"slice2seq",se());v(l,"str2multislice",de());v(l,"str2slice",P());me.exports=l
});var Se=s(function(Bi,Ee){
var $t=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,jt=require('@stdlib/assert/is-string/dist').isPrimitive,Qt=require('@stdlib/assert/is-boolean/dist').isPrimitive,kt=N(),q=require('@stdlib/string/format/dist');function Xt(e,t,n){var r,u;if(!jt(e))throw new TypeError(q('1j3Ej',e));if(!$t(t))throw new TypeError(q('1j33X',t));if(!Qt(n))throw new TypeError(q('1j3AL',n));if(u=kt(e,t,n),r=u.code,r===void 0)return u;throw r==="ERR_SLICE_INVALID_INCREMENT"?new RangeError(q('1j3Ek',e)):r==="ERR_SLICE_OUT_OF_BOUNDS"?new RangeError(q('1j3El',e)):new TypeError(q('1j3Ej',e))}Ee.exports=Xt
});var _e=s(function(Ai,he){
var Yt=Se();he.exports=Yt
});var O=require('@stdlib/utils/define-read-only-property/dist'),_={};O(_,"base",qe());O(_,"Slice",p());O(_,"MultiSlice",E());O(_,"seq2slice",_e());module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
