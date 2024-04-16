/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function _(){}function w(){}function b(){}var L={};f(L,u,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(N([])));x&&x!==o&&i.call(x,u)&&(L=x);var E=b.prototype=_.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,a,c,u){var s=h(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function C(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=b,a(E,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new q(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-11",headers:{authorization:"9c6f83a2-6230-468c-90a8-2370de3fc468","Content-Type":"application/json"}},i=function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))},a=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/users/me",{headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/users/me",{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r,about:n})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),u=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/users/me/avatar",{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards",{headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards",{method:"POST",headers:o.headers,body:JSON.stringify({name:r,link:n})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards/likes/".concat(r),{method:"PUT",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards/".concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards/likes/".concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([a(),s()]));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(t,e){var r=t.target.parentNode.querySelector(".card__like-count");t.target.classList.contains("card__like-button_is-active")?h(e).then((function(e){t.target.classList.remove("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)})):f(e).then((function(e){t.target.classList.add("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)}))},v=function(t,e,r,n,o){var i=document.querySelector("#card-template").content.cloneNode(!0),a=i.querySelector(".card");a.dataset.cardId=t._id,a.dataset.ownerId=t.owner._id,i.querySelector(".card__title").textContent=t.name,i.querySelector(".card__image").src=t.link,i.querySelector(".card__image").alt=t.name;var c=i.querySelector(".card__like-count"),u=i.querySelector(".card__like-button");c.textContent=t.likes.length;var s=t.likes.some((function(t){return t._id===e}));return s&&u.classList.add("element__like_active"),i.querySelector(".card__like-button").addEventListener("click",(function(e){o(e,t._id)})),e!==t.owner._id?i.querySelector(".card__delete-button").remove():i.querySelector(".card__delete-button").addEventListener("click",(function(){r(t._id)})),i.querySelector(".card__image").addEventListener("click",n),i},m=function(t,e,r,n,o,i){var a=v(t,e,r,o,n);i.prepend(a)},g=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",w)},_=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",w)},w=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");_(e)}},b=function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&_(t.currentTarget)},L=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},S=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r.inactiveButtonClass),e.disabled=!1):(e.classList.add(r.inactiveButtonClass),e.disabled=!0)},x=function(t,e){var r=t.querySelector(e.submitButtonSelector),n=Array.from(t.querySelectorAll(e.inputSelector));n.forEach((function(r){L(t,r,e)})),S(n,r,e)};function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function k(){k=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function _(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==r&&n.call(L,a)&&(w=L);var S=_.prototype=m.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==E(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(E(e)+" is not iterable")}return g.prototype=_,o(S,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:g,configurable:!0}),g.displayName=s(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},x(q.prototype),s(q.prototype,c,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function q(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var O=0,C={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},j=document.querySelector(".popup_delete"),P=j.querySelector(".popup__button"),T=function(t){g(j),P.dataset.cardId=t,console.log(document.querySelector('[data-card-id="'.concat(P.dataset.cardId,'"]')))};j.addEventListener("submit",(function(t){t.preventDefault(),p(P.dataset.cardId).then((function(t){document.querySelector('[data-card-id="'.concat(P.dataset.cardId,'"]')).remove(),_(j)})).catch((function(t){console.log(t)}))}));var N=document.querySelector(".places__list"),G=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),I=document.querySelector(".profile__edit-button"),F=document.querySelector(".popup_type_edit");I.addEventListener("click",(function(){var t=document.forms["edit-profile"];t.elements.name.value=document.querySelector(".profile__title").textContent,t.elements.description.value=document.querySelector(".profile__description").textContent,x(t,C),g(F)})),document.forms["edit-profile"].addEventListener("submit",(function(t){t.preventDefault(),c(document.forms["edit-profile"].elements.name.value,document.forms["edit-profile"].elements.description.value),G.textContent=document.forms["edit-profile"].elements.name.value,A.textContent=document.forms["edit-profile"].elements.description.value,t.target.reset(),_(F)}));var U=document.querySelector(".profile__add-button"),B=document.querySelector(".popup_type_new-card"),D=B.querySelector(".popup__input_type_card-name"),Y=B.querySelector(".popup__input_type_url");U.addEventListener("click",(function(){var t=document.forms["new-place"];t.reset(),x(t,C),g(B)}));var J=function(){var t,e=(t=k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),r={name:D.value,link:Y.value},l(r.name,r.link).then((function(t){m(t,O,T,y,z,N),_(B)})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){q(i,n,o,a,c,"next",t)}function c(t){q(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();document.forms["new-place"].addEventListener("submit",J);var H=document.querySelector(".popup_type_image"),M=H.querySelector(".popup__image"),V=H.querySelector(".popup__caption");function z(t){var e=t.currentTarget.closest(".card"),r=e.querySelector(".card__image").src,n=e.querySelector(".card__title").textContent;M.src=r,M.alt=n,V.textContent=n,g(H)}var K=document.querySelector(".profile__image"),Q=document.querySelector(".popup_type_changeAvatar"),R=document.forms["new-avatar"],W=R.querySelector(".popup__button"),X=document.querySelector(".profile__image");K.addEventListener("click",(function(){x(R,C),g(Q)})),R.addEventListener("submit",(function(t){t.preventDefault();var e=W.textContent;W.textContent="Сохранение...",u(R.link.value).then((function(e){X.style.backgroundImage="url(".concat(e.avatar,")"),t.target.reset(),_(Q)})).catch((function(t){console.log(t)})).finally((function(){return W.textContent=e}))})),document.querySelectorAll(".popup").forEach((function(t){t.addEventListener("mousedown",b)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);S(r,n,e),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorText):e.setCustomValidity(""),e.validity.valid?L(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,e.validationMessage,r)}(t,o,e),S(r,n,e)}))}))}(e,t)}))}(C),d().then((function(t){console.log(t),G.textContent=t[0].name,A.textContent=t[0].about,X.style.backgroundImage="url(".concat(t[0].avatar,")"),O=t[0]._id,t[1].forEach((function(t){var e=v(t,O,T,z,y);!function(t,e){t.append(e)}(N,e)}))})).catch((function(t){console.log(t)}))})();