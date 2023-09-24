"use strict";var s=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var G=s(function(vi,z){
var be=require('@stdlib/math/base/special/ceil/dist');function Le(e){var t,i,r;return i=e.start,r=e.stop,t=e.step,r===null&&(r=-1),t>0&&i>=r||t<0&&i<=r?0:be((r-i)/t)}z.exports=Le
});var D=s(function(ci,$){
var Me=G();$.exports=Me
});var j=s(function(pi,J){
function Ue(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]!="number"&&i.push(r);return i}J.exports=Ue
});var k=s(function(gi,Q){
var Ve=j();Q.exports=Ve
});var H=s(function(di,Y){
var b=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),X=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Ce=require('@stdlib/assert/is-integer/dist').isPrimitive,Pe=require('@stdlib/assert/is-null/dist'),Fe=require('@stdlib/assert/is-undefined/dist'),Be=require('@stdlib/assert/is-slice/dist'),Ae=require('@stdlib/string/format/dist');function ze(e){return Ce(e)||Pe(e)||Fe(e)||Be(e)}function a(){var e,t,i,r,u;if(e=arguments.length,!(this instanceof a)){if(e===1)return new a(arguments[0]);if(e===2)return new a(arguments[0],arguments[1]);if(e===3)return new a(arguments[0],arguments[1],arguments[2]);if(e===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(e===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(i=[],u=0;u<e;u++)i.push(arguments[u]);return t=Object.create(a.prototype),a.apply(t,i)}for(this._data=[],u=0;u<e;u++){if(r=arguments[u],!ze(r))throw new TypeError(Ae('1j3Em',u,r));this._data.push(r===void 0?null:r)}return this}b(a,"name","MultiSlice");X(a.prototype,"ndims",function(){return this._data.length});X(a.prototype,"data",function(){return this._data.slice()});b(a.prototype,"toString",function(){var t,i,r;for(t=this._data,i=[],r=0;r<t.length;r++)i.push(String(t[r]));return"MultiSlice("+i.join(",")+")"});b(a.prototype,"toJSON",function(){var t,i,r,u;for(t=this._data,i={type:"MultiSlice",data:[]},u=0;u<t.length;u++)r=t[u],i.data.push(r&&typeof r.toJSON=="function"?r.toJSON():r);return i});Y.exports=a
});var E=s(function(mi,K){
var Ge=H();K.exports=Ge
});var Z=s(function(qi,W){
var M=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),U=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),$e=require('@stdlib/assert/is-integer/dist').isPrimitive,Je=require('@stdlib/assert/is-null/dist'),je=require('@stdlib/assert/is-undefined/dist'),x=require('@stdlib/string/format/dist');function L(e){return $e(e)||Je(e)||je(e)}function c(){var e,t,i,r;if(e=arguments.length,e===0?(t=null,i=null,r=null):e===1?(t=null,i=arguments[0],r=null):e===2?(t=arguments[0],i=arguments[1],r=null):(t=arguments[0],i=arguments[1],r=arguments[2]),!(this instanceof c))return new c(t,i,r);if(!L(t))throw new TypeError(x('1j3Ef',t));if(!L(i))throw new TypeError(x('1j3Eg',i));if(L(r)){if(r===0)throw new RangeError(x('1j3Ei',r))}else throw new TypeError(x('1j3Eh',r));return this._start=t===void 0?null:t,this._stop=i===void 0?null:i,this._step=r===void 0?null:r,this}M(c,"name","Slice");U(c.prototype,"start",function(){return this._start});U(c.prototype,"stop",function(){return this._stop});U(c.prototype,"step",function(){return this._step});M(c.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});M(c.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});W.exports=c
});var p=s(function(Ei,rr){
var Qe=Z();rr.exports=Qe
});var tr=s(function(Si,er){
function ke(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}er.exports=ke
});var nr=s(function(hi,ir){
var Xe=p(),S=tr();function Ye(e,t,i){var r,u,n;if(r=e.start,u=e.stop,n=e.step,n===null&&(n=1),r===null)n>0?r=0:r=t-1;else if(r<0){if(r=t+r,r<0){if(i)return S();r=0}}else if(r>=t){if(i)return S();n<0?r=t-1:r=t}if(u===null)n>0?u=t:u=null;else if(u<0){if(u=t+u,u<0)if(n>0){if(i)return S();u=0}else{if(i&&u<-1)return S();u=null}}else if(u>t){if(i)return S();u=t}return new Xe(r,u,n)}ir.exports=Ye
});var V=s(function(_i,ur){
var He=nr();ur.exports=He
});var ar=s(function(Ri,sr){
function Ke(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}sr.exports=Ke
});var fr=s(function(Ii,lr){
var We=E(),h=p(),Ze=V(),or=ar();function rt(e,t,i){return e===null?new h(0,t,1):typeof e=="number"?e>=t?i?or():new h(t,t,1):e<0?(e=t+e,e<0?i?or():new h(0,0,1):new h(e,e+1,1)):new h(e,e+1,1):Ze(e,t,i)}function et(e,t,i){var r,u,n,v;for(r=e.data,u=[],v=0;v<r.length;v++){if(n=rt(r[v],t[v],i),n.code!==void 0)return n;u.push(n)}return We.apply(null,u)}lr.exports=et
});var cr=s(function(xi,vr){
var tt=fr();vr.exports=tt
});var gr=s(function(Ni,pr){
function it(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]=="number"&&i.push(r);return i}pr.exports=it
});var mr=s(function(Oi,dr){
var nt=gr();dr.exports=nt
});var Sr=s(function(wi,Er){
var ut=require('@stdlib/string/base/trim/dist'),st=p(),C="Slice(",qr=3,at=/\s*,\s*/,ot=/^-?[0-9]+$/;function lt(e){var t,i,r,u,n;if(e.substring(0,C.length)!==C||(r=e.length-1,e[r]!==")")||(e=ut(e.substring(C.length,r)),e=e.split(at),e.length!==qr))return null;for(t=[],n=0;n<qr;n++){if(u=e[n],u==="null")i=null;else if(ot.test(u))i=parseInt(u,10);else return null;t.push(i)}return new st(t[0],t[1],t[2])}Er.exports=lt
});var P=s(function(yi,hr){
var ft=Sr();hr.exports=ft
});var Ir=s(function(Ti,Rr){
var vt=require('@stdlib/string/base/trim/dist'),ct=P(),_r=E(),F="MultiSlice(",pt=/\s*,\s*/,gt=/^-?[0-9]+$/;function dt(e){var t,i,r,u,n;if(e.substring(0,F.length)!==F||(r=e.length-1,e[r]!==")"))return null;if(e=vt(e.substring(F.length,r)),e=e.split(pt),r=e.length,r===1&&e[0]==="")return new _r;for(t=[],n=0;n<r;n++){if(u=e[n],u[0]==="S"){if(u=e.slice(n,n+3).join(","),i=ct(u),i===null)return null;n+=2}else if(u==="null")i=null;else if(gt.test(u))i=parseInt(u,10);else return null;t.push(i)}return _r.apply(null,t)}Rr.exports=dt
});var B=s(function(Di,xr){
var mt=Ir();xr.exports=mt
});var Or=s(function(bi,Nr){
var N=require('@stdlib/string/base/replace/dist'),qt=B();function Et(e){return e=N(e,/^,/,"null,"),e=N(e,/,$/,",null"),e=N(e,/,(?=,)/g,",null"),e=N(e,/undefined/g,"null"),qt("MultiSlice("+e+")")}Nr.exports=Et
});var yr=s(function(Li,wr){
var St=Or();wr.exports=St
});var Dr=s(function(Mi,Tr){
var ht=/(?:\s*-\s*)(?=\d+)(\d+)$/;Tr.exports=ht
});var Lr=s(function(Ui,br){
var _t=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;br.exports=_t
});var Vr=s(function(Vi,Ur){
var Mr=require('@stdlib/math/base/special/floor/dist'),Rt=Dr(),It=Lr();function xt(e,t,i,r){var u;if(e==="end")return t;if(u=e.match(Rt),u){if(e=t-parseInt(u[1],10),e<0){if(r)return-2;e=0}return e}return u=e.match(It),u?(e=parseFloat(u[1]),e<1?r?-2:-1:i&&t>0&&e!==1?Mr((t-1)/e):Mr(t/e)):-1}Ur.exports=xt
});var Pr=s(function(Ci,Cr){
var Nt=/\s*:\s*/;Cr.exports=Nt
});var Br=s(function(Pi,Fr){
var Ot=/^[-+]?[0-9]+$/;Fr.exports=Ot
});var zr=s(function(Fi,Ar){
var wt=/^end/;Ar.exports=wt
});var $r=s(function(Bi,Gr){
function yt(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}Gr.exports=yt
});var jr=s(function(Ai,Jr){
function Tt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Jr.exports=Tt
});var kr=s(function(zi,Qr){
function Dt(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}Qr.exports=Dt
});var Wr=s(function(Gi,Kr){
var Xr=p(),bt=require('@stdlib/string/base/trim/dist'),Yr=Vr(),Lt=Pr(),A=Br(),Hr=zr(),m=$r(),g=jr(),Mt=kr();function Ut(e,t,i){var r,u,n;if(r=bt(e).split(Lt),u=r.length,u<2||u>3)return m();if(u===3)if(n=r[2],n.length===0)r[2]=1;else{if(A.test(n)===!1)return m();if(n=parseInt(n,10),n===0)return Mt();r[2]=n}else r.push(1);if(n=r[0],n.length===0)r[2]<0&&t>0?r[0]=t-1:r[0]=0;else if(Hr.test(n)){if(n=Yr(n,t,r[2]<0,i),n<0)return n===-2?g():m();r[2]<0&&n>=t&&(n-=1),r[0]=n}else if(A.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0){if(i)return g();n=0}}else if(n>=t){if(i)return g();r[2]<0?n=t-1:n=t}r[0]=n}else return m();if(n=r[1],n.length===0)r[2]<0?r[1]=null:r[1]=t;else if(Hr.test(n)){if(n=Yr(n,t,r[2]<0,i),n<0)return n===-2?g():m();r[1]=n}else if(A.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0)if(r[2]>0){if(i)return g();n=0}else{if(i&&n<-1)return g();n=null}}else if(n>t){if(i)return g();n=t}r[1]=n}else return m();return t===0?new Xr(0,0,r[2]):new Xr(r[0],r[1],r[2])}Kr.exports=Ut
});var O=s(function($i,Zr){
var Vt=Wr();Zr.exports=Vt
});var ee=s(function(Ji,re){
function Ct(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}re.exports=Ct
});var ie=s(function(ji,te){
function Pt(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}te.exports=Pt
});var ue=s(function(Qi,ne){
function Ft(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}ne.exports=Ft
});var ae=s(function(ki,se){
function Bt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}se.exports=Bt
});var le=s(function(Xi,oe){
var At=/\s*,\s*/;oe.exports=At
});var ve=s(function(Yi,fe){
var zt=/^[-+]?[0-9]+$/;fe.exports=zt
});var ge=s(function(Hi,pe){
var Gt=require('@stdlib/string/base/trim/dist'),$t=p(),Jt=E(),jt=O(),Qt=ee(),kt=ie(),Xt=ue(),ce=ae(),Yt=le(),Ht=ve();function Kt(e,t,i){var r,u,n,v,R,y,o,I,d,T;for(R=t.length,r=Gt(e).split(Yt),y=r.length,n=!1,u=[],d=0,I=0;I<y;I++){if(o=r[I],o==="..."){if(n)return Qt();for(n=!0,T=0;T<R-y+1;T++)u.push(new $t(0,t[d],1)),d+=1;continue}if(v=t[d],Ht.test(o)){if(o=parseInt(o,10),i){if(o<0){if(v+o<0)return ce()}else if(o>=v)return ce()}d+=1}else{if(o=jt(o,v,i),o.code)return o;d+=1}u.push(o)}return u.length!==R?u.length<R?kt():Xt():Jt.apply(null,u)}pe.exports=Kt
});var me=s(function(Ki,de){
var Wt=ge();de.exports=Wt
});var Ee=s(function(Wi,qe){
var Zt=D();function ri(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)i.push(Zt(t[r]));return i}qe.exports=ri
});var he=s(function(Zi,Se){
var ei=Ee();Se.exports=ei
});var Re=s(function(rn,_e){
function ti(e){var t,i,r,u;return i=e.start,r=e.stop,u=e.step,i===null?t="":t=String(i),r===null?u===null?t+":":t===""?"::"+u:t+"::"+u:(t+=":"+r,u===null?t:t+":"+u)}_e.exports=ti
});var xe=s(function(en,Ie){
var ii=Re();Ie.exports=ii
});var Oe=s(function(tn,Ne){
var f=require('@stdlib/utils/define-read-only-property/dist'),l={};f(l,"sliceLength",D());f(l,"nonreducedDimensions",k());f(l,"normalizeMultiSlice",cr());f(l,"normalizeSlice",V());f(l,"reducedDimensions",mr());f(l,"sargs2multislice",yr());f(l,"seq2multislice",me());f(l,"seq2slice",O());f(l,"sliceShape",he());f(l,"slice2seq",xe());f(l,"str2multislice",B());f(l,"str2slice",P());Ne.exports=l
});var ye=s(function(nn,we){
var ni=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,ui=require('@stdlib/assert/is-string/dist').isPrimitive,si=require('@stdlib/assert/is-boolean/dist').isPrimitive,ai=O(),q=require('@stdlib/string/format/dist');function oi(e,t,i){var r,u;if(!ui(e))throw new TypeError(q('1j3Ej',e));if(!ni(t))throw new TypeError(q('1j33X',t));if(!si(i))throw new TypeError(q('1j3AL',i));if(u=ai(e,t,i),r=u.code,r===void 0)return u;throw r==="ERR_SLICE_INVALID_INCREMENT"?new RangeError(q('1j3Ek',e)):r==="ERR_SLICE_OUT_OF_BOUNDS"?new RangeError(q('1j3El',e)):new TypeError(q('1j3Ej',e))}we.exports=oi
});var De=s(function(un,Te){
var li=ye();Te.exports=li
});var w=require('@stdlib/utils/define-read-only-property/dist'),_={};w(_,"base",Oe());w(_,"Slice",p());w(_,"MultiSlice",E());w(_,"seq2slice",De());module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
