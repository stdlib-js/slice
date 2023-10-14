"use strict";var s=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var J=s(function(Si,$){
var b=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),G=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Cr=require('@stdlib/assert/is-integer/dist').isPrimitive,Pr=require('@stdlib/assert/is-null/dist'),Fr=require('@stdlib/assert/is-undefined/dist'),Br=require('@stdlib/assert/is-slice/dist'),Ar=require('@stdlib/string/format/dist');function zr(e){return Cr(e)||Pr(e)||Fr(e)||Br(e)}function a(){var e,t,i,r,u;if(e=arguments.length,!(this instanceof a)){if(e===1)return new a(arguments[0]);if(e===2)return new a(arguments[0],arguments[1]);if(e===3)return new a(arguments[0],arguments[1],arguments[2]);if(e===4)return new a(arguments[0],arguments[1],arguments[2],arguments[3]);if(e===5)return new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(i=[],u=0;u<e;u++)i.push(arguments[u]);return t=Object.create(a.prototype),a.apply(t,i)}for(this._data=[],u=0;u<e;u++){if(r=arguments[u],!zr(r))throw new TypeError(Ar('1j3Em',u,String(r)));this._data.push(r===void 0?null:r)}return this}b(a,"name","MultiSlice");G(a.prototype,"ndims",function(){return this._data.length});G(a.prototype,"data",function(){return this._data.slice()});b(a.prototype,"toString",function(){var t,i,r;for(t=this._data,i=[],r=0;r<t.length;r++)i.push(String(t[r]));return"MultiSlice("+i.join(",")+")"});b(a.prototype,"toJSON",function(){var t,i,r,u;for(t=this._data,i={type:"MultiSlice",data:[]},u=0;u<t.length;u++)r=t[u],i.data.push(r&&typeof r.toJSON=="function"?r.toJSON():r);return i});$.exports=a
});var E=s(function(hi,j){
var Gr=J();j.exports=Gr
});var k=s(function(_i,Q){
var c=E();function $r(e){switch(e.length){case 0:return new c;case 1:return new c(e[0]);case 2:return new c(e[0],e[1]);case 3:return new c(e[0],e[1],e[2]);case 4:return new c(e[0],e[1],e[2],e[3]);case 5:return new c(e[0],e[1],e[2],e[3],e[4]);case 6:return new c(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new c(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return c.apply(null,e)}}Q.exports=$r
});var Y=s(function(gi,X){
var Jr=k();X.exports=Jr
});var K=s(function(Ri,H){
var jr=require('@stdlib/math/base/special/ceil/dist');function Qr(e){var t,i,r;return i=e.start,r=e.stop,t=e.step,r===null&&(r=-1),t>0&&i>=r||t<0&&i<=r?0:jr((r-i)/t)}H.exports=Qr
});var L=s(function(Ii,W){
var kr=K();W.exports=kr
});var ee=s(function(xi,Z){
function Xr(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]!="number"&&i.push(r);return i}Z.exports=Xr
});var te=s(function(wi,re){
var Yr=ee();re.exports=Yr
});var ne=s(function(Ni,ie){
var U=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils/define-nonenumerable-read-only-accessor/dist'),Hr=require('@stdlib/assert/is-integer/dist').isPrimitive,Kr=require('@stdlib/assert/is-null/dist'),Wr=require('@stdlib/assert/is-undefined/dist'),w=require('@stdlib/string/format/dist');function M(e){return Hr(e)||Kr(e)||Wr(e)}function p(){var e,t,i,r;if(e=arguments.length,e===0?(t=null,i=null,r=null):e===1?(t=null,i=arguments[0],r=null):e===2?(t=arguments[0],i=arguments[1],r=null):(t=arguments[0],i=arguments[1],r=arguments[2]),!(this instanceof p))return new p(t,i,r);if(!M(t))throw new TypeError(w('1j3Ef',t));if(!M(i))throw new TypeError(w('1j3Eg',i));if(M(r)){if(r===0)throw new RangeError(w('1j3Ei',r))}else throw new TypeError(w('1j3Eh',r));return this._start=t===void 0?null:t,this._stop=i===void 0?null:i,this._step=r===void 0?null:r,this}U(p,"name","Slice");V(p.prototype,"start",function(){return this._start});V(p.prototype,"stop",function(){return this._stop});V(p.prototype,"step",function(){return this._step});U(p.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});U(p.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});ie.exports=p
});var m=s(function(Oi,ue){
var Zr=ne();ue.exports=Zr
});var ae=s(function(yi,se){
function et(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}se.exports=et
});var le=s(function(Ti,oe){
var rt=m(),_=ae();function tt(e,t,i){var r,u,n;if(r=e.start,u=e.stop,n=e.step,n===null&&(n=1),r===null)n>0?r=0:r=t-1;else if(r<0){if(r=t+r,r<0){if(i)return _();r=0}}else if(r>=t){if(i)return _();n<0?r=t-1:r=t}if(u===null)n>0?u=t:u=null;else if(u<0){if(u=t+u,u<0)if(n>0){if(i)return _();u=0}else{if(i&&u<-1)return _();u=null}}else if(u>t){if(i)return _();u=t}return new rt(r,u,n)}oe.exports=tt
});var C=s(function(Di,fe){
var it=le();fe.exports=it
});var ve=s(function(bi,ce){
function nt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}ce.exports=nt
});var de=s(function(Li,me){
var ut=E(),g=m(),st=C(),pe=ve();function at(e,t,i){return e===null?new g(0,t,1):typeof e=="number"?e>=t?i?pe():new g(t,t,1):e<0?(e=t+e,e<0?i?pe():new g(0,0,1):new g(e,e+1,1)):new g(e,e+1,1):st(e,t,i)}function ot(e,t,i){var r,u,n,v;for(r=e.data,u=[],v=0;v<r.length;v++){if(n=at(r[v],t[v],i),n.code!==void 0)return n;u.push(n)}return ut.apply(null,u)}me.exports=ot
});var Ee=s(function(Mi,qe){
var lt=de();qe.exports=lt
});var he=s(function(Ui,Se){
function ft(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)typeof t[r]=="number"&&i.push(r);return i}Se.exports=ft
});var ge=s(function(Vi,_e){
var ct=he();_e.exports=ct
});var xe=s(function(Ci,Ie){
var vt=require('@stdlib/string/base/trim/dist'),pt=m(),P="Slice(",Re=3,mt=/\s*,\s*/,dt=/^-?[0-9]+$/;function qt(e){var t,i,r,u,n;if(e.substring(0,P.length)!==P||(r=e.length-1,e[r]!==")")||(e=vt(e.substring(P.length,r)),e=e.split(mt),e.length!==Re))return null;for(t=[],n=0;n<Re;n++){if(u=e[n],u==="null")i=null;else if(dt.test(u))i=parseInt(u,10);else return null;t.push(i)}return new pt(t[0],t[1],t[2])}Ie.exports=qt
});var F=s(function(Pi,we){
var Et=xe();we.exports=Et
});var ye=s(function(Fi,Oe){
var St=require('@stdlib/string/base/trim/dist'),ht=F(),Ne=E(),B="MultiSlice(",_t=/\s*,\s*/,gt=/^-?[0-9]+$/;function Rt(e){var t,i,r,u,n;if(e.substring(0,B.length)!==B||(r=e.length-1,e[r]!==")"))return null;if(e=St(e.substring(B.length,r)),e=e.split(_t),r=e.length,r===1&&e[0]==="")return new Ne;for(t=[],n=0;n<r;n++){if(u=e[n],u[0]==="S"){if(u=e.slice(n,n+3).join(","),i=ht(u),i===null)return null;n+=2}else if(u==="null")i=null;else if(gt.test(u))i=parseInt(u,10);else return null;t.push(i)}return Ne.apply(null,t)}Oe.exports=Rt
});var A=s(function(Bi,Te){
var It=ye();Te.exports=It
});var be=s(function(Ai,De){
var N=require('@stdlib/string/base/replace/dist'),xt=A();function wt(e){return e=N(e,/^,/,"null,"),e=N(e,/,$/,",null"),e=N(e,/,(?=,)/g,",null"),e=N(e,/undefined/g,"null"),xt("MultiSlice("+e+")")}De.exports=wt
});var Me=s(function(zi,Le){
var Nt=be();Le.exports=Nt
});var Ve=s(function(Gi,Ue){
var Ot=/(?:\s*-\s*)(?=\d+)(\d+)$/;Ue.exports=Ot
});var Pe=s(function($i,Ce){
var yt=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;Ce.exports=yt
});var Ae=s(function(Ji,Be){
var Fe=require('@stdlib/math/base/special/floor/dist'),Tt=Ve(),Dt=Pe();function bt(e,t,i,r){var u;if(e==="end")return t;if(u=e.match(Tt),u){if(e=t-parseInt(u[1],10),e<0){if(r)return-2;e=0}return e}return u=e.match(Dt),u?(e=parseFloat(u[1]),e<1?r?-2:-1:i&&t>0&&e!==1?Fe((t-1)/e):Fe(t/e)):-1}Be.exports=bt
});var Ge=s(function(ji,ze){
var Lt=/\s*:\s*/;ze.exports=Lt
});var Je=s(function(Qi,$e){
var Mt=/^[-+]?[0-9]+$/;$e.exports=Mt
});var Qe=s(function(ki,je){
var Ut=/^end/;je.exports=Ut
});var Xe=s(function(Xi,ke){
function Vt(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}ke.exports=Vt
});var He=s(function(Yi,Ye){
function Ct(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Ye.exports=Ct
});var We=s(function(Hi,Ke){
function Pt(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}Ke.exports=Pt
});var ir=s(function(Ki,tr){
var Ze=m(),Ft=require('@stdlib/string/base/trim/dist'),er=Ae(),Bt=Ge(),z=Je(),rr=Qe(),S=Xe(),d=He(),At=We();function zt(e,t,i){var r,u,n;if(r=Ft(e).split(Bt),u=r.length,u<2||u>3)return S();if(u===3)if(n=r[2],n.length===0)r[2]=1;else{if(z.test(n)===!1)return S();if(n=parseInt(n,10),n===0)return At();r[2]=n}else r.push(1);if(n=r[0],n.length===0)r[2]<0&&t>0?r[0]=t-1:r[0]=0;else if(rr.test(n)){if(n=er(n,t,r[2]<0,i),n<0)return n===-2?d():S();r[2]<0&&n>=t&&(n-=1),r[0]=n}else if(z.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0){if(i)return d();n=0}}else if(n>=t){if(i)return d();r[2]<0?n=t-1:n=t}r[0]=n}else return S();if(n=r[1],n.length===0)r[2]<0?r[1]=null:r[1]=t;else if(rr.test(n)){if(n=er(n,t,r[2]<0,i),n<0)return n===-2?d():S();r[1]=n}else if(z.test(n)){if(n=parseInt(n,10),n<0){if(n=t+n,n<0)if(r[2]>0){if(i)return d();n=0}else{if(i&&n<-1)return d();n=null}}else if(n>t){if(i)return d();n=t}r[1]=n}else return S();return t===0?new Ze(0,0,r[2]):new Ze(r[0],r[1],r[2])}tr.exports=zt
});var O=s(function(Wi,nr){
var Gt=ir();nr.exports=Gt
});var sr=s(function(Zi,ur){
function $t(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}ur.exports=$t
});var or=s(function(en,ar){
function Jt(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}ar.exports=Jt
});var fr=s(function(rn,lr){
function jt(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}lr.exports=jt
});var vr=s(function(tn,cr){
function Qt(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}cr.exports=Qt
});var mr=s(function(nn,pr){
var kt=/\s*,\s*/;pr.exports=kt
});var qr=s(function(un,dr){
var Xt=/^[-+]?[0-9]+$/;dr.exports=Xt
});var hr=s(function(sn,Sr){
var Yt=require('@stdlib/string/base/trim/dist'),Ht=m(),Kt=E(),Wt=O(),Zt=sr(),ei=or(),ri=fr(),Er=vr(),ti=mr(),ii=qr();function ni(e,t,i){var r,u,n,v,I,T,l,x,q,D;for(I=t.length,r=Yt(e).split(ti),T=r.length,n=!1,u=[],q=0,x=0;x<T;x++){if(l=r[x],l==="..."){if(n)return Zt();for(n=!0,D=0;D<I-T+1;D++)u.push(new Ht(0,t[q],1)),q+=1;continue}if(v=t[q],ii.test(l)){if(l=parseInt(l,10),i){if(l<0){if(v+l<0)return Er()}else if(l>=v)return Er()}q+=1}else{if(l=Wt(l,v,i),l.code)return l;q+=1}u.push(l)}return u.length!==I?u.length<I?ei():ri():Kt.apply(null,u)}Sr.exports=ni
});var gr=s(function(an,_r){
var ui=hr();_r.exports=ui
});var Ir=s(function(on,Rr){
var si=L();function ai(e){var t,i,r;for(t=e.data,i=[],r=0;r<t.length;r++)i.push(si(t[r]));return i}Rr.exports=ai
});var wr=s(function(ln,xr){
var oi=Ir();xr.exports=oi
});var Or=s(function(fn,Nr){
function li(e){var t,i,r,u;return i=e.start,r=e.stop,u=e.step,i===null?t="":t=String(i),r===null?u===null?t+":":t===""?"::"+u:t+"::"+u:(t+=":"+r,u===null?t:t+":"+u)}Nr.exports=li
});var Tr=s(function(cn,yr){
var fi=Or();yr.exports=fi
});var br=s(function(vn,Dr){
var f=require('@stdlib/utils/define-read-only-property/dist'),o={};f(o,"args2multislice",Y());f(o,"sliceLength",L());f(o,"nonreducedDimensions",te());f(o,"normalizeMultiSlice",Ee());f(o,"normalizeSlice",C());f(o,"reducedDimensions",ge());f(o,"sargs2multislice",Me());f(o,"seq2multislice",gr());f(o,"seq2slice",O());f(o,"sliceShape",wr());f(o,"slice2seq",Tr());f(o,"str2multislice",A());f(o,"str2slice",F());Dr.exports=o
});var Mr=s(function(pn,Lr){
var ci=require('@stdlib/assert/is-nonnegative-integer/dist').isPrimitive,vi=require('@stdlib/assert/is-string/dist').isPrimitive,pi=require('@stdlib/assert/is-boolean/dist').isPrimitive,mi=O(),h=require('@stdlib/string/format/dist');function di(e,t,i){var r,u;if(!vi(e))throw new TypeError(h('1j3Ej',e));if(!ci(t))throw new TypeError(h('1j33X',t));if(!pi(i))throw new TypeError(h('1j3AL',i));if(u=mi(e,t,i),r=u.code,r===void 0)return u;throw r==="ERR_SLICE_INVALID_INCREMENT"?new RangeError(h('1j3Ek',e)):r==="ERR_SLICE_OUT_OF_BOUNDS"?new RangeError(h('1j3El',e)):new TypeError(h('1j3Ej',e))}Lr.exports=di
});var Vr=s(function(mn,Ur){
var qi=Mr();Ur.exports=qi
});var y=require('@stdlib/utils/define-read-only-property/dist'),R={};y(R,"base",br());y(R,"Slice",m());y(R,"MultiSlice",E());y(R,"seq2slice",Vr());module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
