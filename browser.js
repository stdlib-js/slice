// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function i(e,t,r){var i=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=r?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(e){var t,n,a;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!r(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==t)&&(a=4294967295+a+1),a<0?(n=(-a).toString(t),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(t),a||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===u.call(e.specifier)?u.call(n):o.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,_=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var t,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((t=e.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,y,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,v,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):c.call(n)}function w(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function S(e,t,r){var n=t-e.length;return n<0?e:e=r?e+w(n):w(n)+e}var E=String.fromCharCode,O=isNaN,R=Array.isArray;function T(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function N(e){var t,r,n,o,u,s,c,f,p;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,f=0;f<e.length;f++)if(l(n=e[f]))s+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,O(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!O(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(u)?String(n.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function V(e){var t,r,n,i;for(r=[],i=0,n=I.exec(e);n;)(t=e.slice(i,I.lastIndex-n[0].length)).length&&r.push(t),r.push(U(n)),i=I.lastIndex,n=I.exec(e);return(t=e.slice(i)).length&&r.push(t),r}function j(e){return"string"==typeof e}function F(e){var t,r,n;if(!j(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=V(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return N.apply(null,r)}var B=Object.prototype,A=B.toString,x=B.__defineGetter__,D=B.__defineSetter__,k=B.__lookupGetter__,$=B.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,i,o,u;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(k.call(e,t)||$.call(e,t)?(n=e.__proto__,e.__proto__=B,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&x&&x.call(e,t,r.get),u&&D&&D.call(e,t,r.set),e};function P(e,t,r){C(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}function L(e,t,r){C(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function M(e,t,r){C(e,t,{configurable:!1,enumerable:!1,get:r})}function q(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return G&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,J=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,W="function"==typeof Z?Z.toStringTag:"",X=Q()?function(e){var t,r,n,i,o;if(null==e)return z.call(e);r=e[W],o=W,t=null!=(i=e)&&J.call(i,o);try{e[W]=void 0}catch(t){return z.call(e)}return n=z.call(e),t?e[W]=r:delete e[W],n}:function(e){return z.call(e)},Y=Number,H=Y.prototype.toString,K=Q();function ee(e){return"object"==typeof e&&(e instanceof Y||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function te(e){return q(e)||ee(e)}L(te,"isPrimitive",q),L(te,"isObject",ee);var re=Number.POSITIVE_INFINITY,ne=Y.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return e<re&&e>ne&&ie(t=e)===t;var t}function ue(e){return q(e)&&oe(e)}function ae(e){return ee(e)&&oe(e.valueOf())}function le(e){return ue(e)||ae(e)}function se(e){return null===e}function ce(e){return void 0===e}function fe(e){return ue(e)||se(e)||ce(e)}function pe(){var e,t,r,n;if(0===(e=arguments.length)?(t=null,r=null,n=null):1===e?(t=null,r=arguments[0],n=null):2===e?(t=arguments[0],r=arguments[1],n=null):(t=arguments[0],r=arguments[1],n=arguments[2]),!(this instanceof pe))return new pe(t,r,n);if(!fe(t))throw new TypeError(F("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",t));if(!fe(r))throw new TypeError(F("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",r));if(!fe(n))throw new TypeError(F("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(F("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===t?null:t,this._stop=void 0===r?null:r,this._step=void 0===n?null:n,this}L(le,"isPrimitive",ue),L(le,"isObject",ae),L(pe,"name","Slice"),M(pe.prototype,"start",(function(){return this._start})),M(pe.prototype,"stop",(function(){return this._stop})),M(pe.prototype,"step",(function(){return this._step})),L(pe.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),L(pe.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var de=void 0!==String.prototype.trim,ge=String.prototype.trim,he=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,ve=de&&""===ge.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===ge.call("᠎")?function(e){return ge.call(e)}:function(e){return function(e,t,r){return e.replace(t,r)}(e,he,"$1")},_e=/(?:\s*-\s*)(?=\d+)(\d+)$/,ye=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function me(e,t,r,n){var i;if("end"===e)return t;if(i=e.match(_e)){if((e=t-parseInt(i[1],10))<0){if(n)return-2;e=0}return e}return(i=e.match(ye))?(e=parseFloat(i[1]))<1?n?-2:-1:ie(r&&t>0&&1!==e?(t-1)/e:t/e):-1}var be=/\s*:\s*/,we=/^[-+]?[0-9]+$/,Se=/^end/;function Ee(e,t,r){var n,i,o;if((i=(n=ve(e).split(be)).length)<2||i>3)return{code:"ERR_INVALID_SUBSEQUENCE"};if(3===i)if(0===(o=n[2]).length)n[2]=1;else{if(!1===we.test(o))return{code:"ERR_INVALID_SUBSEQUENCE"};if(0===(o=parseInt(o,10)))return{code:"ERR_INVALID_INCREMENT"};n[2]=o}else n.push(1);if(0===(o=n[0]).length)n[2]<0&&t>0?n[0]=t-1:n[0]=0;else if(Se.test(o)){if((o=me(o,t,n[2]<0,r))<0)return-2===o?{code:"ERR_OUT_OF_BOUNDS"}:{code:"ERR_INVALID_SUBSEQUENCE"};n[2]<0&&o>=t&&(o-=1),n[0]=o}else{if(!we.test(o))return{code:"ERR_INVALID_SUBSEQUENCE"};if((o=parseInt(o,10))<0){if((o=t+o)<0){if(r)return{code:"ERR_OUT_OF_BOUNDS"};o=0}}else if(o>=t){if(r)return{code:"ERR_OUT_OF_BOUNDS"};o=n[2]<0?t-1:t}n[0]=o}if(0===(o=n[1]).length)n[2]<0?n[1]=null:n[1]=t;else if(Se.test(o)){if((o=me(o,t,n[2]<0,r))<0)return-2===o?{code:"ERR_OUT_OF_BOUNDS"}:{code:"ERR_INVALID_SUBSEQUENCE"};n[1]=o}else{if(!we.test(o))return{code:"ERR_INVALID_SUBSEQUENCE"};if((o=parseInt(o,10))<0){if((o=t+o)<0)if(n[2]>0){if(r)return{code:"ERR_OUT_OF_BOUNDS"};o=0}else{if(r&&o<-1)return{code:"ERR_OUT_OF_BOUNDS"};o=null}}else if(o>t){if(r)return{code:"ERR_OUT_OF_BOUNDS"};o=t}n[1]=o}return 0===t?new pe(0,0,n[2]):new pe(n[0],n[1],n[2])}var Oe="Slice(",Re=/\s*,\s*/,Te=/^-?[0-9]+$/;function Ne(e){var t,r,n,i,o;if(e.substring(0,Oe.length)!==Oe)return null;if(")"!==e[n=e.length-1])return null;if(3!==(e=(e=ve(e.substring(Oe.length,n))).split(Re)).length)return null;for(t=[],o=0;o<3;o++){if("null"===(i=e[o]))r=null;else{if(!Te.test(i))return null;r=parseInt(i,10)}t.push(r)}return new pe(t[0],t[1],t[2])}function Ie(e){return ue(e)||se(e)||ce(e)}function Ue(){var e,t,r,n;if(0===(e=arguments.length)?(t=null,r=null,n=null):1===e?(t=null,r=arguments[0],n=null):2===e?(t=arguments[0],r=arguments[1],n=null):(t=arguments[0],r=arguments[1],n=arguments[2]),!(this instanceof Ue))return new Ue(t,r,n);if(!Ie(t))throw new TypeError(F("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",t));if(!Ie(r))throw new TypeError(F("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",r));if(!Ie(n))throw new TypeError(F("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(F("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===t?null:t,this._stop=void 0===r?null:r,this._step=void 0===n?null:n,this}function Ve(){return/^\s*function\s*([^(]*)/i}L(Ue,"name","Slice"),M(Ue.prototype,"start",(function(){return this._start})),M(Ue.prototype,"stop",(function(){return this._stop})),M(Ue.prototype,"step",(function(){return this._step})),L(Ue.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),L(Ue.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var je=/^\s*function\s*([^(]*)/i;L(Ve,"REGEXP",je);var Fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===X(e)};function Be(e){return null!==e&&"object"==typeof e}function Ae(e){var t,r,n,i;if(("Object"===(r=X(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=je.exec(n.toString()))return t[1]}return Be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}function xe(e){return ue(e)||se(e)||ce(e)||function(e){return e instanceof Ue||"Slice"===Ae(e)}(e)}function De(){var e,t,r,n,i;if(e=arguments.length,!(this instanceof De)){if(1===e)return new De(arguments[0]);if(2===e)return new De(arguments[0],arguments[1]);if(3===e)return new De(arguments[0],arguments[1],arguments[2]);if(4===e)return new De(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new De(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(r=[],i=0;i<e;i++)r.push(arguments[i]);return t=Object.create(De.prototype),De.apply(t,r)}for(this._data=[],i=0;i<e;i++){if(!xe(n=arguments[i]))throw new TypeError(F("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,n));this._data.push(void 0===n?null:n)}return this}L(Be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!Fe(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(Be)),L(De,"name","MultiSlice"),M(De.prototype,"ndims",(function(){return this._data.length})),M(De.prototype,"data",(function(){return this._data.slice()})),L(De.prototype,"toString",(function(){var e,t,r;for(e=this._data,t=[],r=0;r<e.length;r++)t.push(String(e[r]));return"MultiSlice("+t.join(",")+")"})),L(De.prototype,"toJSON",(function(){var e,t,r,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)r=e[n],t.data.push(r&&"function"==typeof r.toJSON?r.toJSON():r);return t}));var ke="MultiSlice(",$e=/\s*,\s*/,Ce=/^-?[0-9]+$/,Pe={};function Le(e){return ue(e)&&e>=0}function Me(e){return ae(e)&&e.valueOf()>=0}function qe(e){return Le(e)||Me(e)}function Ge(e){return"string"==typeof e}P(Pe,"normalizeSlice",(function(e,t,r){var n,i,o;if(n=e.start,i=e.stop,null===(o=e.step)&&(o=1),null===n)n=o>0?0:t-1;else if(n<0){if((n=t+n)<0){if(r)return{code:"ERR_OUT_OF_BOUNDS"};n=0}}else if(n>=t){if(r)return{code:"ERR_OUT_OF_BOUNDS"};n=o<0?t-1:t}if(null===i)i=o>0?t:null;else if(i<0){if((i=t+i)<0)if(o>0){if(r)return{code:"ERR_OUT_OF_BOUNDS"};i=0}else{if(r&&i<-1)return{code:"ERR_OUT_OF_BOUNDS"};i=null}}else if(i>t){if(r)return{code:"ERR_OUT_OF_BOUNDS"};i=t}return new pe(n,i,o)})),P(Pe,"seq2slice",Ee),P(Pe,"slice2seq",(function(e){var t,r,n,i;return r=e.start,n=e.stop,i=e.step,t=null===r?"":String(r),null===n?null===i?t+":":""===t?"::"+i:t+"::"+i:(t+=":"+n,null===i?t:t+":"+i)})),P(Pe,"str2multislice",(function(e){var t,r,n,i,o;if(e.substring(0,ke.length)!==ke)return null;if(")"!==e[n=e.length-1])return null;if(1===(n=(e=(e=ve(e.substring(ke.length,n))).split($e)).length)&&""===e[0])return new De;for(t=[],o=0;o<n;o++){if("S"===(i=e[o])[0]){if(null===(r=Ne(i=e.slice(o,o+3).join(","))))return null;o+=2}else if("null"===i)r=null;else{if(!Ce.test(i))return null;r=parseInt(i,10)}t.push(r)}return De.apply(null,t)})),P(Pe,"str2slice",Ne),L(qe,"isPrimitive",Le),L(qe,"isObject",Me);var Qe=String.prototype.valueOf,ze=Q();function Je(e){return"object"==typeof e&&(e instanceof String||(ze?function(e){try{return Qe.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function Ze(e){return Ge(e)||Je(e)}function We(e){return"boolean"==typeof e}L(Ze,"isPrimitive",Ge),L(Ze,"isObject",Je);var Xe=Boolean,Ye=Boolean.prototype.toString,He=Q();function Ke(e){return"object"==typeof e&&(e instanceof Xe||(He?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===X(e)))}function et(e){return We(e)||Ke(e)}L(et,"isPrimitive",We),L(et,"isObject",Ke);var tt={};return P(tt,"base",Pe),P(tt,"Slice",pe),P(tt,"MultiSlice",De),P(tt,"seq2slice",(function(e,t,r){var n,i;if(!Ge(e))throw new TypeError(F("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e));if(!Le(t))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!We(r))throw new TypeError(F("invalid argument. Third argument must be a boolean. Value: `%s`.",r));if(void 0===(n=(i=Ee(e,t,r)).code))return i;if("ERR_INVALID_INCREMENT"===n)throw new RangeError(F("invalid argument. A subsequence string must have a non-zero increment. Value: `%s`.",e));if("ERR_OUT_OF_BOUNDS"===n)throw new RangeError(F("invalid argument. The subsequence string resolves to a slice which exceeds index bounds. Value: `%s`.",e));throw new TypeError(F("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e))})),tt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=t();
//# sourceMappingURL=browser.js.map
