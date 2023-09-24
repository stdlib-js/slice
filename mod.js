// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,u=r-e.length;return u<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(u):n(u)+e,i&&(e="-"+e)),e}var u=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function a(e){var r,n,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(n=(-a).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(r),a||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):u.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,_=/^(\d+)e/,v=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,E,"$1e"),n=p.call(n,S,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,_,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):c.call(n)}function y(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function b(e,r,t){var n=r-e.length;return n<0?e:e=t?e+y(n):y(n)+e}var w=String.fromCharCode,I=isNaN,O=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,u,o,s,c,f,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,f=0;f<e.length;f++)if(l(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(u=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,I(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):w(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=b(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(U(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){return"string"==typeof e}function V(e){var r,t,n;if(!L(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=C(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var F=Object.prototype,j=F.toString,B=F.__defineGetter__,D=F.__defineSetter__,A=F.__lookupGetter__,x=F.__lookupSetter__;var k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,u,o;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(A.call(e,r)||x.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),u="get"in t,o="set"in t,i&&(u||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&B&&B.call(e,r,t.get),o&&D&&D.call(e,r,t.set),e};function $(e,r,t){k(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var M=Math.ceil;function P(e){var r,t,n;return t=e.start,null===(n=e.stop)&&(n=-1),(r=e.step)>0&&t>=n||r<0&&t<=n?0:M((n-t)/r)}function q(e,r,t){k(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e,r,t){k(e,r,{configurable:!1,enumerable:!1,get:t})}function G(e){return"number"==typeof e}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return Q&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var H=J()?function(e){var r,t,n,i,u;if(null==e)return Z.call(e);t=e[Y],u=Y,r=null!=(i=e)&&W.call(i,u);try{e[Y]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return Z.call(e)},K=Number,ee=K.prototype.toString;var re=J();function te(e){return"object"==typeof e&&(e instanceof K||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function ne(e){return G(e)||te(e)}q(ne,"isPrimitive",G),q(ne,"isObject",te);var ie=Number.POSITIVE_INFINITY,ue=K.NEGATIVE_INFINITY,oe=Math.floor;function ae(e){return e<ie&&e>ue&&oe(r=e)===r;var r}function le(e){return G(e)&&ae(e)}function se(e){return te(e)&&ae(e.valueOf())}function ce(e){return le(e)||se(e)}function fe(e){return null===e}function pe(e){return void 0===e}function de(e){return le(e)||fe(e)||pe(e)}function ge(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ge))return new ge(r,t,n);if(!de(r))throw new TypeError(V("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!de(t))throw new TypeError(V("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!de(n))throw new TypeError(V("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(V("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function he(){return/^\s*function\s*([^(]*)/i}q(ce,"isPrimitive",le),q(ce,"isObject",se),q(ge,"name","Slice"),z(ge.prototype,"start",(function(){return this._start})),z(ge.prototype,"stop",(function(){return this._stop})),z(ge.prototype,"step",(function(){return this._step})),q(ge.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),q(ge.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var _e=/^\s*function\s*([^(]*)/i;q(he,"REGEXP",_e);var ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Se(e){return null!==e&&"object"==typeof e}function Ee(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=_e.exec(n.toString()))return r[1]}return Se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function me(e){return le(e)||fe(e)||pe(e)||function(e){return e instanceof ge||"Slice"===Ee(e)}(e)}function ye(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof ye)){if(1===e)return new ye(arguments[0]);if(2===e)return new ye(arguments[0],arguments[1]);if(3===e)return new ye(arguments[0],arguments[1],arguments[2]);if(4===e)return new ye(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new ye(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(ye.prototype),ye.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!me(n=arguments[i]))throw new TypeError(V("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,n));this._data.push(void 0===n?null:n)}return this}function be(e){return le(e)||fe(e)||pe(e)}function we(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof we))return new we(r,t,n);if(!be(r))throw new TypeError(V("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!be(t))throw new TypeError(V("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!be(n))throw new TypeError(V("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(V("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function Ie(e,r,t){var n,i,u;if(n=e.start,i=e.stop,null===(u=e.step)&&(u=1),null===n)n=u>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=u<0?r-1:r}if(null===i)i=u>0?r:null;else if(i<0){if((i=r+i)<0)if(u>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new we(n,i,u)}function Oe(e,r,t){return null===e?new we(0,r,1):"number"==typeof e?e>=r?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new we(r,r,1):e<0&&(e=r+e)<0?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new we(0,0,1):new we(e,e+1,1):Ie(e,r,t)}function Re(e,r,t){return e.replace(r,t)}q(Se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Se)),q(ye,"name","MultiSlice"),z(ye.prototype,"ndims",(function(){return this._data.length})),z(ye.prototype,"data",(function(){return this._data.slice()})),q(ye.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),q(ye.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r})),q(we,"name","Slice"),z(we.prototype,"start",(function(){return this._start})),z(we.prototype,"stop",(function(){return this._stop})),z(we.prototype,"step",(function(){return this._step})),q(we.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),q(we.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var Ne=void 0!==String.prototype.trim,Te=String.prototype.trim;var Ue=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var Ce=Ne&&""===Te.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Te.call("᠎")?function(e){return Te.call(e)}:function(e){return Re(e,Ue,"$1")},Le=/\s*,\s*/,Ve=/^-?[0-9]+$/;function Fe(e){var r,t,n,i,u;if("Slice("!==e.substring(0,"Slice(".length))return null;if(")"!==e[n=e.length-1])return null;if(3!==(e=(e=Ce(e.substring("Slice(".length,n))).split(Le)).length)return null;for(r=[],u=0;u<3;u++){if("null"===(i=e[u]))t=null;else{if(!Ve.test(i))return null;t=parseInt(i,10)}r.push(t)}return new we(r[0],r[1],r[2])}var je=/\s*,\s*/,Be=/^-?[0-9]+$/;function De(e){var r,t,n,i,u;if("MultiSlice("!==e.substring(0,"MultiSlice(".length))return null;if(")"!==e[n=e.length-1])return null;if(1===(n=(e=(e=Ce(e.substring("MultiSlice(".length,n))).split(je)).length)&&""===e[0])return new ye;for(r=[],u=0;u<n;u++){if("S"===(i=e[u])[0]){if(null===(t=Fe(i=e.slice(u,u+3).join(","))))return null;u+=2}else if("null"===i)t=null;else{if(!Be.test(i))return null;t=parseInt(i,10)}r.push(t)}return ye.apply(null,r)}var Ae=/(?:\s*-\s*)(?=\d+)(\d+)$/,xe=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function ke(e,r,t,n){var i;if("end"===e)return r;if(i=e.match(Ae)){if((e=r-parseInt(i[1],10))<0){if(n)return-2;e=0}return e}return(i=e.match(xe))?(e=parseFloat(i[1]))<1?n?-2:-1:oe(t&&r>0&&1!==e?(r-1)/e:r/e):-1}var $e=/\s*:\s*/,Me=/^[-+]?[0-9]+$/,Pe=/^end/;function qe(e,r,t){var n,i,u;if((i=(n=Ce(e).split($e)).length)<2||i>3)return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(3===i)if(0===(u=n[2]).length)n[2]=1;else{if(!1===Me.test(u))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(0===(u=parseInt(u,10)))return{code:"ERR_SLICE_INVALID_INCREMENT"};n[2]=u}else n.push(1);if(0===(u=n[0]).length)n[2]<0&&r>0?n[0]=r-1:n[0]=0;else if(Pe.test(u)){if((u=ke(u,r,n[2]<0,t))<0)return-2===u?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[2]<0&&u>=r&&(u-=1),n[0]=u}else{if(!Me.test(u))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((u=parseInt(u,10))<0){if((u=r+u)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=0}}else if(u>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=n[2]<0?r-1:r}n[0]=u}if(0===(u=n[1]).length)n[2]<0?n[1]=null:n[1]=r;else if(Pe.test(u)){if((u=ke(u,r,n[2]<0,t))<0)return-2===u?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[1]=u}else{if(!Me.test(u))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((u=parseInt(u,10))<0){if((u=r+u)<0)if(n[2]>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=0}else{if(t&&u<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=null}}else if(u>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=r}n[1]=u}return 0===r?new we(0,0,n[2]):new we(n[0],n[1],n[2])}var ze=/\s*,\s*/,Ge=/^[-+]?[0-9]+$/;var Qe={};function Je(e){return le(e)&&e>=0}function Ze(e){return se(e)&&e.valueOf()>=0}function We(e){return Je(e)||Ze(e)}function Xe(e){return"string"==typeof e}$(Qe,"sliceLength",P),$(Qe,"nonreducedDimensions",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)"number"!=typeof r[n]&&t.push(n);return t})),$(Qe,"normalizeMultiSlice",(function(e,r,t){var n,i,u,o;for(n=e.data,i=[],o=0;o<n.length;o++){if(void 0!==(u=Oe(n[o],r[o],t)).code)return u;i.push(u)}return ye.apply(null,i)})),$(Qe,"normalizeSlice",Ie),$(Qe,"reducedDimensions",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)"number"==typeof r[n]&&t.push(n);return t})),$(Qe,"sargs2multislice",(function(e){return e=Re(e,/^,/,"null,"),e=Re(e,/,$/,",null"),e=Re(e,/,(?=,)/g,",null"),De("MultiSlice("+(e=Re(e,/undefined/g,"null"))+")")})),$(Qe,"seq2multislice",(function(e,r,t){var n,i,u,o,a,l,s,c,f,p;for(a=r.length,l=(n=Ce(e).split(ze)).length,u=!1,i=[],f=0,c=0;c<l;c++)if("..."!==(s=n[c])){if(o=r[f],Ge.test(s)){if(s=parseInt(s,10),t)if(s<0){if(o+s<0)return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}else if(s>=o)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};f+=1}else{if((s=qe(s,o,t)).code)return s;f+=1}i.push(s)}else{if(u)return{code:"ERR_SLICE_INVALID_ELLIPSIS"};for(u=!0,p=0;p<a-l+1;p++)i.push(new we(0,r[f],1)),f+=1}return i.length!==a?i.length<a?{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}:{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}:ye.apply(null,i)})),$(Qe,"seq2slice",qe),$(Qe,"sliceShape",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)t.push(P(r[n]));return t})),$(Qe,"slice2seq",(function(e){var r,t,n,i;return t=e.start,n=e.stop,i=e.step,r=null===t?"":String(t),null===n?null===i?r+":":""===r?"::"+i:r+"::"+i:(r+=":"+n,null===i?r:r+":"+i)})),$(Qe,"str2multislice",De),$(Qe,"str2slice",Fe),q(We,"isPrimitive",Je),q(We,"isObject",Ze);var Ye=String.prototype.valueOf;var He=J();function Ke(e){return"object"==typeof e&&(e instanceof String||(He?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function er(e){return Xe(e)||Ke(e)}function rr(e){return"boolean"==typeof e}q(er,"isPrimitive",Xe),q(er,"isObject",Ke);var tr=Boolean,nr=Boolean.prototype.toString;var ir=J();function ur(e){return"object"==typeof e&&(e instanceof tr||(ir?function(e){try{return nr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function or(e){return rr(e)||ur(e)}function ar(e,r,t){var n,i;if(!Xe(e))throw new TypeError(V("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e));if(!Je(r))throw new TypeError(V("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!rr(t))throw new TypeError(V("invalid argument. Third argument must be a boolean. Value: `%s`.",t));if(void 0===(n=(i=qe(e,r,t)).code))return i;if("ERR_SLICE_INVALID_INCREMENT"===n)throw new RangeError(V("invalid argument. A subsequence string must have a non-zero increment. Value: `%s`.",e));if("ERR_SLICE_OUT_OF_BOUNDS"===n)throw new RangeError(V("invalid argument. The subsequence string resolves to a slice which exceeds index bounds. Value: `%s`.",e));throw new TypeError(V("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e))}q(or,"isPrimitive",rr),q(or,"isObject",ur);var lr={};$(lr,"base",Qe),$(lr,"Slice",we),$(lr,"MultiSlice",ye),$(lr,"seq2slice",ar);export{ye as MultiSlice,we as Slice,Qe as base,lr as default,ar as seq2slice};
//# sourceMappingURL=mod.js.map
