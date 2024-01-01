// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-slice@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import{isPrimitive as _}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";function h(e){return r(e)||i(e)||s(e)||l(e)}function m(){var e,t,n,r,i;if(e=arguments.length,!(this instanceof m)){if(1===e)return new m(arguments[0]);if(2===e)return new m(arguments[0],arguments[1]);if(3===e)return new m(arguments[0],arguments[1],arguments[2]);if(4===e)return new m(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new m(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(n=[],i=0;i<e;i++)n.push(arguments[i]);return t=Object.create(m.prototype),m.apply(t,n)}for(this._data=[],i=0;i<e;i++){if(!h(r=arguments[i]))throw new TypeError(u("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(r)));this._data.push(void 0===r?null:r)}return this}function g(e){switch(e.length){case 0:return new m;case 1:return new m(e[0]);case 2:return new m(e[0],e[1]);case 3:return new m(e[0],e[1],e[2]);case 4:return new m(e[0],e[1],e[2],e[3]);case 5:return new m(e[0],e[1],e[2],e[3],e[4]);case 6:return new m(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new m(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new m(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new m(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new m(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return m.apply(null,e)}}function S(e){var t,n,r;return n=e.start,null===(r=e.stop)&&(r=-1),(t=e.step)>0&&n>=r||t<0&&n<=r?0:o((r-n)/t)}function E(e){return r(e)||i(e)||s(e)}function v(){var e,t,n,r;if(0===(e=arguments.length)?(t=null,n=null,r=null):1===e?(t=null,n=arguments[0],r=null):2===e?(t=arguments[0],n=arguments[1],r=null):(t=arguments[0],n=arguments[1],r=arguments[2]),!(this instanceof v))return new v(t,n,r);if(!E(t))throw new TypeError(u("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",t));if(!E(n))throw new TypeError(u("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",n));if(!E(r))throw new TypeError(u("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",r));if(0===r)throw new RangeError(u("invalid argument. Third argument cannot be zero. Value: `%s`.",r));return this._start=void 0===t?null:t,this._stop=void 0===n?null:n,this._step=void 0===r?null:r,this}function I(e,t,n){var r,i,s;if(r=e.start,i=e.stop,null===(s=e.step)&&(s=1),null===r)r=s>0?0:t-1;else if(r<0){if((r=t+r)<0){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};r=0}}else if(r>=t){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};r=s<0?t-1:t}if(null===i)i=s>0?t:null;else if(i<0){if((i=t+i)<0)if(s>0){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(n&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>t){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=t}return new v(r,i,s)}function R(e,t,n){return null===e?new v(0,t,1):"number"==typeof e?e>=t?n?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new v(t,t,1):e<0&&(e=t+e)<0?n?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new v(0,0,1):new v(e,e+1,1):I(e,t,n)}t(m,"name","MultiSlice"),n(m.prototype,"ndims",(function(){return this._data.length})),n(m.prototype,"data",(function(){return this._data.slice()})),t(m.prototype,"toString",(function(){var e,t,n;for(e=this._data,t=[],n=0;n<e.length;n++)t.push(String(e[n]));return"MultiSlice("+t.join(",")+")"})),t(m.prototype,"toJSON",(function(){var e,t,n,r;for(e=this._data,t={type:"MultiSlice",data:[]},r=0;r<e.length;r++)n=e[r],t.data.push(n&&"function"==typeof n.toJSON?n.toJSON():n);return t})),t(v,"name","Slice"),n(v.prototype,"start",(function(){return this._start})),n(v.prototype,"stop",(function(){return this._stop})),n(v.prototype,"step",(function(){return this._step})),t(v.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),t(v.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var O=/\s*,\s*/,w=/^-?[0-9]+$/;function j(e){var t,n,r,i,s;if("Slice("!==e.substring(0,"Slice(".length))return null;if(")"!==e[r=e.length-1])return null;if(3!==(e=(e=d(e.substring("Slice(".length,r))).split(O)).length)return null;for(t=[],s=0;s<3;s++){if("null"===(i=e[s]))n=null;else{if(!w.test(i))return null;n=parseInt(i,10)}t.push(n)}return new v(t[0],t[1],t[2])}var b=/\s*,\s*/,N=/^-?[0-9]+$/;function U(e){var t,n,r,i,s;if("MultiSlice("!==e.substring(0,"MultiSlice(".length))return null;if(")"!==e[r=e.length-1])return null;if(1===(r=(e=(e=d(e.substring("MultiSlice(".length,r))).split(b)).length)&&""===e[0])return new m;for(t=[],s=0;s<r;s++){if("S"===(i=e[s])[0]){if(null===(n=j(i=e.slice(s,s+3).join(","))))return null;s+=2}else if("null"===i)n=null;else{if(!N.test(i))return null;n=parseInt(i,10)}t.push(n)}return g(t)}var L=/(?:\s*-\s*)(?=\d+)(\d+)$/,C=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function T(e,t,n,r){var i;if("end"===e)return t;if(i=e.match(L)){if((e=t-parseInt(i[1],10))<0){if(r)return-2;e=0}return e}return(i=e.match(C))?(e=parseFloat(i[1]))<1?r?-2:-1:f(n&&t>0&&1!==e?(t-1)/e:t/e):-1}var y=/\s*:\s*/,D=/^[-+]?[0-9]+$/,B=/^end/;function F(e,t,n){var r,i,s;if((i=(r=d(e).split(y)).length)<2||i>3)return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(3===i)if(0===(s=r[2]).length)r[2]=1;else{if(!1===D.test(s))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(0===(s=parseInt(s,10)))return{code:"ERR_SLICE_INVALID_INCREMENT"};r[2]=s}else r.push(1);if(0===(s=r[0]).length)r[2]<0&&t>0?r[0]=t-1:r[0]=0;else if(B.test(s)){if((s=T(s,t,r[2]<0,n))<0)return-2===s?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};r[2]<0&&s>=t&&(s-=1),r[0]=s}else{if(!D.test(s))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((s=parseInt(s,10))<0){if((s=t+s)<0){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};s=0}}else if(s>=t){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};s=r[2]<0?t-1:t}r[0]=s}if(0===(s=r[1]).length)r[2]<0?r[1]=null:r[1]=t;else if(B.test(s)){if((s=T(s,t,r[2]<0,n))<0)return-2===s?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};r[1]=s}else{if(!D.test(s))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((s=parseInt(s,10))<0){if((s=t+s)<0)if(r[2]>0){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};s=0}else{if(n&&s<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};s=null}}else if(s>t){if(n)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};s=t}r[1]=s}return 0===t?new v(0,0,r[2]):new v(r[0],r[1],r[2])}var V=/\s*,\s*/,x=/^[-+]?[0-9]+$/;var M={};function A(e,t,n){var r,i;if(!_(e))throw new TypeError(u("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e));if(!c(t))throw new TypeError(u("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!p(n))throw new TypeError(u("invalid argument. Third argument must be a boolean. Value: `%s`.",n));if(void 0===(r=(i=F(e,t,n)).code))return i;if("ERR_SLICE_INVALID_INCREMENT"===r)throw new RangeError(u("invalid argument. A subsequence string must have a non-zero increment. Value: `%s`.",e));if("ERR_SLICE_OUT_OF_BOUNDS"===r)throw new RangeError(u("invalid argument. The subsequence string resolves to a slice which exceeds index bounds. Value: `%s`.",e));throw new TypeError(u("invalid argument. First argument must be a valid subsequence string. Value: `%s`.",e))}e(M,"args2multislice",g),e(M,"sliceLength",S),e(M,"nonreducedDimensions",(function(e){var t,n,r;for(t=e.data,n=[],r=0;r<t.length;r++)"number"!=typeof t[r]&&n.push(r);return n})),e(M,"normalizeMultiSlice",(function(e,t,n){var r,i,s,l;for(r=e.data,i=[],l=0;l<r.length;l++){if(void 0!==(s=R(r[l],t[l],n)).code)return s;i.push(s)}return g(i)})),e(M,"normalizeSlice",I),e(M,"reducedDimensions",(function(e){var t,n,r;for(t=e.data,n=[],r=0;r<t.length;r++)"number"==typeof t[r]&&n.push(r);return n})),e(M,"sargs2multislice",(function(e){return e=a(e,/^,/,"null,"),e=a(e,/,$/,",null"),e=a(e,/,(?=,)/g,",null"),U("MultiSlice("+(e=a(e,/undefined/g,"null"))+")")})),e(M,"seq2multislice",(function(e,t,n){var r,i,s,l,u,o,a,f,c,_;for(u=t.length,o=(r=d(e).split(V)).length,s=!1,i=[],c=0,f=0;f<o;f++)if("..."!==(a=r[f])){if(l=t[c],x.test(a)){if(a=parseInt(a,10),n)if(a<0){if(l+a<0)return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}else if(a>=l)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};c+=1}else{if((a=F(a,l,n)).code)return a;c+=1}i.push(a)}else{if(s)return{code:"ERR_SLICE_INVALID_ELLIPSIS"};for(s=!0,_=0;_<u-o+1;_++)i.push(new v(0,t[c],1)),c+=1}return i.length!==u?i.length<u?{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}:{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}:g(i)})),e(M,"seq2slice",F),e(M,"sliceShape",(function(e){var t,n,r;for(t=e.data,n=[],r=0;r<t.length;r++)n.push(S(t[r]));return n})),e(M,"slice2seq",(function(e){var t,n,r,i;return n=e.start,r=e.stop,i=e.step,t=null===n?"":String(n),null===r?null===i?t+":":""===t?"::"+i:t+"::"+i:(t+=":"+r,null===i?t:t+":"+i)})),e(M,"str2multislice",U),e(M,"str2slice",j);var q={};e(q,"base",M),e(q,"Slice",v),e(q,"MultiSlice",m),e(q,"seq2slice",A);export{m as MultiSlice,v as Slice,M as base,q as default,A as seq2slice};
//# sourceMappingURL=index.mjs.map
