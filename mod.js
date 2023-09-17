// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(e){var r,n,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(n=(-a).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(r),a||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===u.call(e.specifier)?u.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,_=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,y,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,v,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):c.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+w(n):w(n)+e}var E=String.fromCharCode,O=isNaN,R=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,o,u,s,c,f,p;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,f=0;f<e.length;f++)if(l(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,O(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(u)?String(n.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=U.exec(e);n;)(r=e.slice(i,U.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=U.lastIndex,n=U.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function j(e){var r,t,n;if(!F(e))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var B=Object.prototype,A=B.toString,D=B.__defineGetter__,x=B.__defineSetter__,k=B.__lookupGetter__,$=B.__lookupSetter__;var C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,u;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(k.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(e,r,t.get),u&&x&&x.call(e,r,t.set),e};function P(e,r,t){C(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function M(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e,r,t){C(e,r,{configurable:!1,enumerable:!1,get:t})}function q(e){return"number"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return z&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,W="function"==typeof Z?Z.toStringTag:"";var X=G()?function(e){var r,t,n,i,o;if(null==e)return Q.call(e);t=e[W],o=W,r=null!=(i=e)&&J.call(i,o);try{e[W]=void 0}catch(r){return Q.call(e)}return n=Q.call(e),r?e[W]=t:delete e[W],n}:function(e){return Q.call(e)},Y=Number,H=Y.prototype.toString;var K=G();function ee(e){return"object"==typeof e&&(e instanceof Y||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function re(e){return q(e)||ee(e)}M(re,"isPrimitive",q),M(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=Y.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return e<te&&e>ne&&ie(r=e)===r;var r}function ue(e){return q(e)&&oe(e)}function ae(e){return ee(e)&&oe(e.valueOf())}function le(e){return ue(e)||ae(e)}function se(e){return null===e}function ce(e){return void 0===e}function fe(e){return ue(e)||se(e)||ce(e)}function pe(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof pe))return new pe(r,t,n);if(!fe(r))throw new TypeError(j("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!fe(t))throw new TypeError(j("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!fe(n))throw new TypeError(j("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(j("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function ge(){return/^\s*function\s*([^(]*)/i}M(le,"isPrimitive",ue),M(le,"isObject",ae),M(pe,"name","Slice"),L(pe.prototype,"start",(function(){return this._start})),L(pe.prototype,"stop",(function(){return this._stop})),L(pe.prototype,"step",(function(){return this._step})),M(pe.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),M(pe.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var de=/^\s*function\s*([^(]*)/i;M(ge,"REGEXP",de);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===X(e)};function ve(e){return null!==e&&"object"==typeof e}function _e(e){var r,t,n,i;if(("Object"===(t=X(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return ve(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function ye(e){return ue(e)||se(e)||ce(e)||function(e){return e instanceof pe||"Slice"===_e(e)}(e)}function me(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof me)){if(1===e)return new me(arguments[0]);if(2===e)return new me(arguments[0],arguments[1]);if(3===e)return new me(arguments[0],arguments[1],arguments[2]);if(4===e)return new me(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new me(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(me.prototype),me.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!ye(n=arguments[i]))throw new TypeError(j("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,n));this._data.push(void 0===n?null:n)}return this}function be(e){return ue(e)||se(e)||ce(e)}function we(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof we))return new we(r,t,n);if(!be(r))throw new TypeError(j("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!be(t))throw new TypeError(j("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!be(n))throw new TypeError(j("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(j("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function Se(e,r,t){var n,i,o;if(n=e.start,i=e.stop,null===(o=e.step)&&(o=1),null===n)n=o>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_OUT_OF_BOUNDS"};n=o<0?r-1:r}if(null===i)i=o>0?r:null;else if(i<0){if((i=r+i)<0)if(o>0){if(t)return{code:"ERR_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_OUT_OF_BOUNDS"};i=r}return new we(n,i,o)}function Ee(e,r,t){return null===e?new we(0,r,1):"number"==typeof e?e>=r?t?{code:"ERR_OUT_OF_BOUNDS"}:new we(r,r,1):e<0&&(e=r+e)<0?t?{code:"ERR_OUT_OF_BOUNDS"}:new we(0,0,1):new we(e,e+1,1):Se(e,r,t)}M(ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(j("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ve)),M(me,"name","MultiSlice"),L(me.prototype,"ndims",(function(){return this._data.length})),L(me.prototype,"data",(function(){return this._data.slice()})),M(me.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),M(me.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r})),M(we,"name","Slice"),L(we.prototype,"start",(function(){return this._start})),L(we.prototype,"stop",(function(){return this._stop})),L(we.prototype,"step",(function(){return this._step})),M(we.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),M(we.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var Oe=void 0!==String.prototype.trim,Re=String.prototype.trim;var Te=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var Ne=Oe&&""===Re.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Re.call("᠎")?function(e){return Re.call(e)}:function(e){return function(e,r,t){return e.replace(r,t)}(e,Te,"$1")},Ue=/(?:\s*-\s*)(?=\d+)(\d+)$/,Ie=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function Ve(e,r,t,n){var i;if("end"===e)return r;if(i=e.match(Ue)){if((e=r-parseInt(i[1],10))<0){if(n)return-2;e=0}return e}return(i=e.match(Ie))?(e=parseFloat(i[1]))<1?n?-2:-1:ie(t&&r>0&&1!==e?(r-1)/e:r/e):-1}var Fe=/\s*:\s*/,je=/^[-+]?[0-9]+$/,Be=/^end/;function Ae(e,r,t){var n,i,o;if((i=(n=Ne(e).split(Fe)).length)<2||i>3)return{code:"ERR_INVALID_SUBSEQUENCE"};if(3===i)if(0===(o=n[2]).length)n[2]=1;else{if(!1===je.test(o))return{code:"ERR_INVALID_SUBSEQUENCE"};if(0===(o=parseInt(o,10)))return{code:"ERR_INVALID_INCREMENT"};n[2]=o}else n.push(1);if(0===(o=n[0]).length)n[2]<0&&r>0?n[0]=r-1:n[0]=0;else if(Be.test(o)){if((o=Ve(o,r,n[2]<0,t))<0)return-2===o?{code:"ERR_OUT_OF_BOUNDS"}:{code:"ERR_INVALID_SUBSEQUENCE"};n[2]<0&&o>=r&&(o-=1),n[0]=o}else{if(!je.test(o))return{code:"ERR_INVALID_SUBSEQUENCE"};if((o=parseInt(o,10))<0){if((o=r+o)<0){if(t)return{code:"ERR_OUT_OF_BOUNDS"};o=0}}else if(o>=r){if(t)return{code:"ERR_OUT_OF_BOUNDS"};o=n[2]<0?r-1:r}n[0]=o}if(0===(o=n[1]).length)n[2]<0?n[1]=null:n[1]=r;else if(Be.test(o)){if((o=Ve(o,r,n[2]<0,t))<0)return-2===o?{code:"ERR_OUT_OF_BOUNDS"}:{code:"ERR_INVALID_SUBSEQUENCE"};n[1]=o}else{if(!je.test(o))return{code:"ERR_INVALID_SUBSEQUENCE"};if((o=parseInt(o,10))<0){if((o=r+o)<0)if(n[2]>0){if(t)return{code:"ERR_OUT_OF_BOUNDS"};o=0}else{if(t&&o<-1)return{code:"ERR_OUT_OF_BOUNDS"};o=null}}else if(o>r){if(t)return{code:"ERR_OUT_OF_BOUNDS"};o=r}n[1]=o}return 0===r?new we(0,0,n[2]):new we(n[0],n[1],n[2])}var De=/\s*,\s*/,xe=/^-?[0-9]+$/;function ke(e){var r,t,n,i,o;if("Slice("!==e.substring(0,"Slice(".length))return null;if(")"!==e[n=e.length-1])return null;if(3!==(e=(e=Ne(e.substring("Slice(".length,n))).split(De)).length)return null;for(r=[],o=0;o<3;o++){if("null"===(i=e[o]))t=null;else{if(!xe.test(i))return null;t=parseInt(i,10)}r.push(t)}return new we(r[0],r[1],r[2])}var $e=/\s*,\s*/,Ce=/^-?[0-9]+$/;var Pe={};function Me(e){return ue(e)&&e>=0}function Le(e){return ae(e)&&e.valueOf()>=0}function qe(e){return Me(e)||Le(e)}function ze(e){return"string"==typeof e}P(Pe,"normalizeMultiSlice",(function(e,r,t){var n,i,o,u;for(n=e.data,i=[],u=0;u<n.length;u++){if(void 0!==(o=Ee(n[u],r[u],t)).code)return o;i.push(o)}return me.apply(null,i)})),P(Pe,"normalizeSlice",Se),P(Pe,"seq2slice",Ae),P(Pe,"slice2seq",(function(e){var r,t,n,i;return t=e.start,n=e.stop,i=e.step,r=null===t?"":String(t),null===n?null===i?r+":":""===r?"::"+i:r+"::"+i:(r+=":"+n,null===i?r:r+":"+i)})),P(Pe,"str2multislice",(function(e){var r,t,n,i,o;if("MultiSlice("!==e.substring(0,"MultiSlice(".length))return null;if(")"!==e[n=e.length-1])return null;if(1===(n=(e=(e=Ne(e.substring("MultiSlice(".length,n))).split($e)).length)&&""===e[0])return new me;for(r=[],o=0;o<n;o++){if("S"===(i=e[o])[0]){if(null===(t=ke(i=e.slice(o,o+3).join(","))))return null;o+=2}else if("null"===i)t=null;else{if(!Ce.test(i))return null;t=parseInt(i,10)}r.push(t)}return me.apply(null,r)})),P(Pe,"str2slice",ke),M(qe,"isPrimitive",Me),M(qe,"isObject",Le);var Ge=String.prototype.valueOf;var Qe=G();function Je(e){return"object"==typeof e&&(e instanceof String||(Qe?function(e){try{return Ge.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function Ze(e){return ze(e)||Je(e)}function We(e){return"boolean"==typeof e}M(Ze,"isPrimitive",ze),M(Ze,"isObject",Je);var Xe=Boolean,Ye=Boolean.prototype.toString;var He=G();function Ke(e){return"object"==typeof e&&(e instanceof Xe||(He?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===X(e)))}function er(e){return We(e)||Ke(e)}function rr(e,r,t){var n,i;if(!ze(e))throw new TypeError(j("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e));if(!Me(r))throw new TypeError(j("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!We(t))throw new TypeError(j("invalid argument. Third argument must be a boolean. Value: `%s`.",t));if(void 0===(n=(i=Ae(e,r,t)).code))return i;if("ERR_INVALID_INCREMENT"===n)throw new RangeError(j("invalid argument. A subsequence string must have a non-zero increment. Value: `%s`.",e));if("ERR_OUT_OF_BOUNDS"===n)throw new RangeError(j("invalid argument. The subsequence string resolves to a slice which exceeds index bounds. Value: `%s`.",e));throw new TypeError(j("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e))}M(er,"isPrimitive",We),M(er,"isObject",Ke);var tr={};P(tr,"base",Pe),P(tr,"Slice",we),P(tr,"MultiSlice",me),P(tr,"seq2slice",rr);export{me as MultiSlice,we as Slice,Pe as base,tr as default,rr as seq2slice};
//# sourceMappingURL=mod.js.map