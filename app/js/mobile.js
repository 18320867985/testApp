<<<<<<< HEAD
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.libs={})}(this,function(t){var i,a,v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};i=window,a=function(o){o.mobile=o.m,o.$;var g=o.$=o.m=o.mobile=function(t,e){if("function"!=typeof t||1!==arguments.length)return new g.fn.init(t,e);g.ready(t)};g.version="1.0.0",g.numberList=["left","top","right","bottom","width","height"];var t=["body","div","p","table","tr","thead","tbody","tfoot","h1","h2","h3","h4","h5","h6","article","aside","details","figcaption","figure","footer","header","hgroup","main","menu","nav","section","summary","ul","li","ol","dl","dt","dd","fieldset"],e=["img","audio","canvas","progress","video","text-area","select","input","button"];function r(n){var i="inline";return g.each(t,function(t,e){if(e===n)return!(i="block")}),g.each(e,function(t,e){if(e===n)return!(i="inline-block")}),i}function s(t,e){return t.parentElement&&e(t.parentElement)?t.parentElement:"html"!==(t.nodeName||"").toLowerCase()?s(t.parentElement,e):void 0}function n(t,e,n,i){var a,s,o;"object"===(void 0===n?"undefined":v(n))&&2<i.length?(a=i[2],3<=i.length&&(s=i[3],o=i[4]||null)):"function"==typeof n&&(a=n,2<i.length&&(s=i[2],o=i[3]||null)),g.ajax({type:e,url:t,data:"object"===(void 0===n?"undefined":v(n))?n:null,success:a,error:s,progress:o})}function l(t){var e=[];for(var n in t)if("object"===v(t[n])){var i=t[n];if(t[n].constructor!==Array)for(var a in i){var s=n+"["+a+"]",o=i[a];e.push(encodeURIComponent(s)+"="+encodeURIComponent(o))}else for(var a in i){var r=i[a];if("object"===(void 0===r?"undefined":v(r))&&r.constructor!==Array)for(var l in r){s=n+"["+a+"]["+l+"]",o=r[l];e.push(encodeURIComponent(s)+"="+encodeURIComponent(o))}}}else e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")||""}return g.fn=g.prototype={init:function(n,t){var i=[];if(this.length=0,t){if("string"==typeof t&&"string"==typeof n){if(0===t.trim().length)return this;if(0===n.trim().length)return this;var e=document.querySelectorAll(t);g.each(e,function(){for(var t=this.querySelectorAll(n),e=0;e<t.length;e++)i.push(t[e])}),Array.prototype.push.apply(this,i)}else if("object"===(void 0===t?"undefined":v(t))&&"string"==typeof n){if(0===n.trim().length)return this;if(t.hasOwnProperty("length")&&0<t.length)g.each(t,function(){for(var t=this.querySelectorAll(n),e=0;e<t.length;e++)i.push(t[e])}),Array.prototype.push.apply(this,i);else if(t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.DOCUMENT_NODE){var a=t.querySelectorAll(n);Array.prototype.push.apply(this,a)}}}else if("string"==typeof n){if(0===n.trim().length)return this;var s=document.querySelectorAll(n);Array.prototype.push.apply(this,s)}else"object"===(void 0===n?"undefined":v(n))&&(n.hasOwnProperty("length")&&0<n.length?g.each(n,function(t,e){i.push(e)}):n.nodeType!==Node.ELEMENT_NODE&&n.nodeType!==Node.DOCUMENT_NODE&&n!==o||i.push(n),Array.prototype.push.apply(this,i));return this}},g.fn.init.prototype=g.fn,g.extend=g.fn.extend=function(t){if("object"===(void 0===t?"undefined":v(t)))for(var e in t)this[e]=t[e];return this},g.fn.extend({each:function(t){g.each(this,t)},css:function(i,t){if(1===arguments.length&&"string"==typeof i){var n="";return g.each(this,function(t,e){return o.getComputedStyle?(n=o.getComputedStyle(e,null)[i.trim()],g.isEqual(g.numberList,i.trim())&&(n=parseFloat(n)||0)):n=e.currentStyle?e.currentStyle[i]:e.style[i],!1}),n}return 2===arguments.length&&g.each(this,function(){g.isEqual(g.numberList,i.trim())?this.style[i.trim()]=Number(t)?Number(t).toString()+"px":t:this.style[i.trim()]=t}),1===arguments.length&&"object"===(void 0===i?"undefined":v(i))&&g.each(this,function(t,e){for(var n in i)g.isEqual(g.numberList,n.trim())?this.style[n]=Number(i[n])?Number(i[n]).toString()+"px":i[n]:this.style[n]=i[n]}),this},find:function(t){for(var n=[],e=m(this),i=0;i<e.length;i++){var a=e[i].querySelectorAll(t);g.each(a,function(t,e){n.push(e)}),delete e[i]}return delete e.length,Array.prototype.push.apply(e,n),e},text:function(t){var e="";return 0===arguments.length?(g.each(this,function(){e+=this.innerText}),e):(1===arguments.length&&g.each(this,function(){this.innerText=t}),this)},val:function(t){var e="";return 0===arguments.length?(g.each(this,function(){e+=this.value}),e):(1===arguments.length&&g.each(this,function(){this.value=t}),this)},html:function(t){var e="";return 0===arguments.length?(g.each(this,function(){e+=this.innerHTML}),e):(1===arguments.length&&g.each(this,function(){this.innerHTML=t}),this)},attr:function(t,e){if(1===arguments.length&&"string"==typeof t){var n=void 0;return g.each(this,function(){return null===(n=this.getAttribute(t))&&(n=void 0),!1}),n}return 2===arguments.length&&g.each(this,function(){this.setAttribute(t,e.toString())}),this},hasAttr:function(t){var e=!1;if(1===arguments.length&&"string"==typeof t)return g.each(this,function(){return e=this.hasAttribute(t),!1}),e},removeAttr:function(t){return 1===arguments.length&&"string"==typeof t&&g.each(this,function(){this.removeAttribute(t)}),this},addClass:function(e){return"string"!=typeof e||(e=e.split(/\s+/),1===arguments.length&&g.each(this,function(){for(var t=0;t<e.length;t++)e[t]&&this.classList.add(e[t])})),this},toggleClass:function(e){return"string"!=typeof e||(e=e.split(/\s+/),1===arguments.length&&g.each(this,function(){for(var t=0;t<e.length;t++)e[t]&&(this.classList.contains(e[t])?this.classList.remove(e[t]):this.classList.add(e[t]))})),this},hasClass:function(t){var e=!1;return 1===arguments.length&&g.each(this,function(){return e=this.classList.contains(t),!1}),e},removeClass:function(e){return"string"!=typeof e||(e=e.split(/\s+/),1===arguments.length&&g.each(this,function(){for(var t=0;t<e.length;t++)e[t]&&this.classList.remove(e[t])})),this},parent:function(){for(var t=[],e=m(this),n=0;n<e.length;n++){var i=e[n].parentElement;i&&t.push(i),delete e[n]}return delete e.length,Array.prototype.push.apply(e,t),e},parents:function(e){e="string"==typeof e?e:"";for(var t=[],n=m(this),i=0;i<n.length;i++){var a=s(n[i],function(t){return g.checkSelector(t,e)});delete n[i],a&&t.push(a)}return delete n.length,Array.prototype.push.apply(n,t),n},closest:function(e){e="string"==typeof e?e:"";for(var t=[],n=m(this),i=0;i<n.length;i++){var a;g.checkSelector(n[i],e)?t.push(n[i]):a=s(n[i],function(t){return g.checkSelector(t,e)}),delete n[i],a&&t.push(a)}return delete n.length,Array.prototype.push.apply(n,t),n},eq:function(t){if("number"!=typeof t)throw Error("index property must is number type");for(var e=[],n=m(this),i=0;i<n.length;i++)i===t&&e.push(n[i]),delete n[i];return delete n.length,Array.prototype.push.apply(n,e),n},first:function(){for(var t=[],e=m(this),n=0;n<e.length;n++)0===n&&t.push(e[n]),delete e[n];return delete e.length,Array.prototype.push.apply(e,t),e},prev:function(){var i=[],t=m(this);return g.each(t,function(t,e){var n=e.previousElementSibling;n&&i.push(n),delete e[t]}),delete t.length,Array.prototype.push.apply(t,i),t},next:function(){var i=[],t=m(this);return g.each(t,function(t,e){var n=e.nextElementSibling;n&&i.push(n),delete e[t]}),delete t.length,Array.prototype.push.apply(t,i),t},siblings:function(){var s=[],t=m(this);return g.each(t,function(t,e){for(var n=e.parentElement.children,i=m(e).index(),a=0;a<n.length;a++)a!==i&&s.push(n[a]);delete e[t]}),delete t.length,Array.prototype.push.apply(t,s),t},last:function(){for(var t=[],e=m(this),n=0;n<e.length;n++){n===(0<e.length?e.length-1:0)&&t.push(e[n]),delete e[n]}return delete e.length,Array.prototype.push.apply(e,t),e},height:function(){if(0===arguments.length){var n=0;return g.each(this,function(t,e){return n=this===o?o.innerHeight||o.document.documentElement.clientHeight||o.document.body.clientHeight:this===document?m(document.documentElement).css("height"):m(this).css("height"),n=parseFloat(n),!1}),n}if(1===arguments.length){var t=arguments[0];g.each(this,function(){m(this).css("height",t)})}return this},outerHeight:function(){if(0===arguments.length){var n=0;return g.each(this,function(t,e){return n=this===o?o.innerHeight||o.document.documentElement.clientHeight||o.document.body.clientHeight:this===document?m(document.documentElement).eq(0)&&m(document.documentElement).eq(0)[0].offsetHeight:m(this).eq(0)&&m(this).eq(0)[0].offsetHeight,n=parseFloat(n),!1}),n}if(1===arguments.length){var t=arguments[0];g.each(this,function(){m(this).css("height",t)})}return this},outerWidth:function(){if(0===arguments.length){var t=0;return g.each(this,function(){return t=this===o?o.innerWidth||o.document.documentElement.clientWidth||o.document.body.clientWidth:this===document?m(document.documentElement).eq(0)&&m(document.documentElement).eq(0)[0].offsetWidth:m(this).eq(0)&&m(this).eq(0)[0].offsetWidth,t=parseFloat(t),!1}),t}if(1===arguments.length){var e=arguments[0];g.each(this,function(){m(this).css("width",e)})}return this},width:function(){if(0===arguments.length){var t=0;return g.each(this,function(){return t=this===o?o.innerWidth||o.document.documentElement.clientWidth||o.document.body.clientWidth:this===document?m(document.documentElement).css("width"):m(this).css("width"),t=parseFloat(t),!1}),t}if(1===arguments.length){var e=arguments[0];g.each(this,function(){m(this).css("width",e)})}return this},clientTop:function(){var t=0;return g.each(this,function(){return t=this.getBoundingClientRect().top,!1}),t},clientLeft:function(){var t=0;return g.each(this,function(){return t=this.getBoundingClientRect().left,!1}),t},offsetTop:function(){var t=0;return g.each(this,function(){return t=this.offsetTop,!1}),t},offsetLeft:function(){var t=0;return g.each(this,function(){t=this.offsetLeft}),t},offset:function(){var t={};return g.each(this,function(){t.left=this.offsetLeft,t.top=this.offsetTop}),t},index:function(t){var i=-1;return 0===arguments.length&&g.each(this,function(t,e){if(e.parentElement){var n=e.parentElement.children;for(t=0;t<n.length;t++)n[t].isEqualNode(e)&&(i=t)}return!1}),i},remove:function(t){var i=[],a=this;return g.each(this,function(t,e){if(e.parentElement){var n=this.parentElement.removeChild(this);i.push(n)}delete a[t]}),Array.prototype.push.apply(this,i),this},append:function(e){return"object"===(void 0===e?"undefined":v(e))&&e.length&&0<e.length?g.each(this,function(){for(var t=0;t<e.length;t++)this.appendChild(e[t])}):"string"==typeof e?g.each(this,function(){this.innerHTML+=e}):g.each(this,function(){this.appendChild(e)}),this},prepend:function(e){if("object"===(void 0===e?"undefined":v(e))&&e.length&&0<e.length)g.each(this,function(){for(var t=e.length;0<t;t--)this.insertBefore(e[t-1],this.childNodes[0])});else if("string"==typeof e){var t=g.htmlStringToDOM(e);g.each(this,function(){this.insertBefore(t,this.childNodes[0])})}else g.each(this,function(){this.insertBefore(e,this.childNodes[0])});return this},clone:function(t){var e;return g.each(this,function(){return e=this.cloneNode(!0),!1}),e}}),g.fn.extend({show:function(){return g.each(this,function(t,e){clearInterval(this.clearTimeId),this.isshow=!0;var n=this.showValue||"none",i=this.nodeName.toLowerCase();"none"===n&&(n=r(i)),this.style.display=n,this.style.opacity=1}),this},hide:function(){return g.each(this,function(t,e){clearInterval(this.clearTimeId),this.isshow=!1;var n=m(this).css("display")||"none";this.showValue=n,this.style.display="none",this.style.opacity=0}),this},toggle:function(){return g.each(this,function(){"none"!=(m(this).css("display")||"none").trim()?m(this).hide():m(this).show()}),this},fadeIn:function(s){return g.each(this,function(t,e){clearInterval(this.clearTimeId);var n="";this.isshow=!0,this.firstclick?(n=this.showValue||"none",this.style.opacity=parseFloat(m(this).css("opacity"))||0):(this.firstclick=!0,n=m(this).css("display")||"none",this.style.opacity="none"===n?0:1);var i=this.nodeName.toLowerCase();parseFloat(m(this).css("opacity"));"none"==n&&(n=r(i)),this.style.display=n,this.showValue=n;var a=1e3/((s="number"==typeof s?s:400)/30);this.clearTimeId=setInterval(function(){var t=parseFloat(e.style.opacity)||0;t*=1e3,e.style.opacity=(a+t)/1e3,1e3<(t=1e3*(parseFloat(e.style.opacity)||0))+a&&(e.style.opacity=1,e.style.opacity=1,e.style.display=n,clearInterval(this.clearTimeId))}.bind(this),30)}),this},fadeOut:function(a){return g.each(this,function(t,e){clearInterval(this.clearTimeId),this.firstclick=!0,this.isshow=!1;var n=m(this).css("display")||"none";"none"!=n&&(this.style.opacity=parseFloat(e.style.opacity)||1),this.showValue=n;var i=1e3/((a="number"==typeof a?a:400)/30);this.clearTimeId=setInterval(function(){var t=parseFloat(e.style.opacity)||0;t*=1e3,e.style.opacity=(t-i)/1e3,(t=1e3*(parseFloat(e.style.opacity)||0))-i<0&&(e.style.opacity=0,e.style.display="none",clearInterval(this.clearTimeId))}.bind(this),30)}),this},fadeToggle:function(e){return g.each(this,function(){var t=m(this).css("display")||"none";void 0!==this.isshow?this.isshow?(m(this).fadeOut(e),this.isshow=!1):(m(this).fadeIn(e),this.isshow=!0):"none"!=t?this.firstclick?(m(this).fadeIn(e),this.isshow=!0):(m(this).fadeOut(e),this.isshow=!1):this.firstclick?(m(this).fadeOut(e),this.isshow=!1):(m(this).fadeIn(e),this.isshow=!0)}),this},windowTop:function(i,a){if(0===arguments.length)return parseFloat(o.pageYOffset)||0;a="number"==typeof a?a:400,i="number"==typeof i?i:parseFloat(i),i=isNaN(i)?0:i;var s=20;return g.each(this,function(){if(this.clearTimeId=this.clearTimeId||0,clearInterval(this.clearTimeId),this!==o)throw new Error("element must is window");var t=a/20,e=parseFloat(o.pageYOffset)||0,n=Math.abs(e-i);if(s=n/t,i<e)this.clearTimeId=setInterval(function(){e-=s,o.scrollTo(0,e),e-s<i&&(o.scrollTo(0,i),clearInterval(this.clearTimeId))},20);else{if(e===i)return;this.clearTimeId=setInterval(function(){e+=s,o.scrollTo(0,e),i<e+s&&(o.scrollTo(0,i),clearInterval(this.clearTimeId))},20)}return!1}),this},scrollTop:function(t){if(0===arguments.length){var e=0;return g.each(this,function(){return e=this===o||this===document?o.pageYOffset||0:this.scrollTop,!1}),e}return g.each(this,function(){this===o||this===document?o.scrollTo(0,parseFloat(t)):this.scrollTop=parseFloat(t)}),this},transition:function(s,o,t,r,l){var h="all "+o/1e3+"s  "+(t="string"==typeof t?t:"ease")+" "+(r="number"==typeof r?r:0)/1e3+"s";return"string"==typeof s?(1===arguments.length?h=s:1<arguments.length&&(h=s+" "+o/1e3+"s  "+t+" "+r/1e3+"s"),g.each(this,function(){this.style.MozTransition=h,this.style.msTransition=h,this.style.webkitTransition=h,this.style.OTransition=h,this.style.transition=h}),this):"object"==(void 0===s?"undefined":v(s))?(g.each(this,function(t,n){if(o="number"==typeof o?o:400,n.setTimeout=n.setTimeout||0,n.isEnd=n.isEnd||!1,!1===n.isEnd)if(n.isStart){var i=setTimeout(function(){for(var t in n.style.MozTransition=h,n.style.msTransition=h,n.style.webkitTransition=h,n.style.OTransition=h,n.style.transition=h,s)n.style[t]=s[t];if("function"==typeof l)var e=setTimeout(function(){l(n),clearTimeout(e)},o+r);clearTimeout(i)},n.setTimeout);n.setTimeout=o+n.setTimeout+r}else{for(var e in n.isStart=!0,n.one=s,n.setTimeout=o+n.setTimeout+r,n.style.MozTransition=h,n.style.msTransition=h,n.style.webkitTransition=h,n.style.OTransition=h,n.style.transition=h,s)n.style[e]=s[e];if("function"==typeof l)var a=setTimeout(function(){l(n),clearTimeout(a)},o+r)}}),this):void 0},transitionEnd:function(i,a){g.each(this,function(t,n){n.setTimeout=n.setTimeout||0,n.isEnd=!0;setTimeout(function(){if(n.isEnd=!1,n.setTimeout=0,n.isStart=!1,"function"==typeof i)i(n);else if("boolean"==typeof i&&!0===i){for(var t in n.one)n.style[t]=n.one[t];var e="none";n.style.MozTransition=e,n.style.msTransition=e,n.style.webkitTransition=e,n.style.OTransition=e,n.style.transition=e}"function"==typeof a&&a(n)},n.setTimeout+20)})},addAnimate:function(t,e,n,i,a,s){var o=t+" "+(e="number"==typeof e&&0!==e?e/1e3:.4)+"s "+(n="string"==typeof n?n:"ease")+" "+(i="number"==typeof i&&0!==i?i/1e3:0)+"s "+(a=a||1)+" "+(s="string"==typeof s?s:"normal");return g.each(this,function(t,e){this.style.webkitAnimation=o,this.style.msAnimation=o,this.style.MozAnimation=o,this.style.OAnimation=o,this.style.animate=o}),this},removeAnimate:function(t){var n="none";return g.each(this,function(t,e){this.style.webkitAnimation=n,this.style.msAnimation=n,this.style.MozAnimation=n,this.style.OAnimation=n,this.style.animate=n}),this},animateRuning:function(){var n="running";return g.each(this,function(t,e){this.style.webkitAnimationPlayState=n,this.style.msAnimationPlayState=n,this.style.MozAnimationPlayState=n,this.style.OAnimationPlayState=n,this.style.animationPlayState=n}),this},animatePaused:function(){var n="paused";return g.each(this,function(t,e){this.style.webkitAnimationPlayState=n,this.style.msAnimationPlayState=n,this.style.MozAnimationPlayState=n,this.style.OAnimationPlayState=n,this.style.animationPlayState=n}),this},animationFillMode:function(n){n="string"==typeof n?n:"forwards";return g.each(this,function(t,e){this.style.webkitAnimationFillMode=n,this.style.msAnimationFillMode=n,this.style.MozAnimationFillMode=n,this.style.OAnimationFillMode=n,this.style.AnimationFillMode=n}),this},animatePalyToggle:function(){return g.each(this,function(t,e){"paused"===(m(this).css("animation-play-state")||"").trim()?m(this).animateRuning():m(this).animatePaused()}),this}}),g.fn.extend({on:function(n){var i=this,a=!!(0<i.length&&i.bindOneElementEvent);if(2<=arguments.length&&"function"==typeof arguments[1]){var t=function t(e){s.call(this,e),a&&(m(this).off(n,t,o),m.events.on(n,t),i.bindOneElementEvent=!1)},s=arguments[1],o="boolean"==typeof arguments[2]&&arguments[2];g.each(this,function(){this.addEventListener&&this.addEventListener(n,t,o)}),m.events.on(n,t)}if(3<=arguments.length&&"object"===v(arguments[1])&&"function"==typeof arguments[2]){var e=function t(e){e.data=r,s.call(this,e),a&&(m(this).off(n,t,o),m.events.on(n,t),i.bindOneElementEvent=!1)},r=arguments[1];s=arguments[2],o="boolean"==typeof arguments[3]&&arguments[3];g.each(this,function(){this.addEventListener&&this.addEventListener(n,e,o)}),m.events.on(n,e)}if(3<=arguments.length&&"string"==typeof arguments[1]&&"function"==typeof arguments[2]){var l=function t(e){g.checkSelector(e.target,h)&&(s.call(e.target,e),a&&(m(this).off(n,t,o),m.events.on(n,t),i.bindOneElementEvent=!1))},h=arguments[1].trim();s=arguments[2],o="boolean"==typeof arguments[3]&&arguments[3];g.each(this,function(){this.addEventListener&&this.addEventListener(n,l,o)}),m.events.on(n,l)}if(4<=arguments.length&&"string"==typeof arguments[1]&&"object"===v(arguments[2])&&"function"==typeof arguments[3]){var c=function t(e){g.checkSelector(e.target,h)&&(e.data=r,s.call(e.target,e),a&&(m(this).off(n,t,o),m.events.on(n,t),i.bindOneElementEvent=!1))};h=arguments[1].trim(),r=arguments[2],s=arguments[3],o="boolean"==typeof arguments[4]&&arguments[4];g.each(this,function(){this.addEventListener&&this.addEventListener(n,c,o)}),m.events.on(n,c)}return this},off:function(e,t){if(1!==arguments.length)return g.each(this,function(){this.removeEventListener?this.removeEventListener(e,t,!1):this.deattachEvent?this.deattachEvent("on"+e,t):this["on"+e]=null,g.events.off(e,t)}),this;g.each(this,function(){for(var t=m.events.props[e].length-1;0<=t;t--)this.removeEventListener?this.removeEventListener(e,m.events.props[e][t],!1):this.deattachEvent("on"+e,m.events.props[e][t]),g.events.off(e,m.events.props[e][t])})},trigger:function(e,n){g.each(this,function(){n=n||{};var t=document.createEvent("CustomEvent");t.initCustomEvent(e,!0,!1,n),this.dispatchEvent(t)})},emit:function(t,e){g.each(this,function(){m(this).trigger(t,e)})},one:function(){var n=arguments,i=this;this.bindOneElementEvent=!0,g.each(i,function(t,e){m(this).on.apply(i,n)})},click:function(t,e){e=e||!1,g.each(this,function(){m(this).on("click",t,e)})},touchstart:function(t,e){e=e||!1,g.each(this,function(){m(this).on("touchstart",t,e)})},touchmove:function(t,e){e=e||!1,g.each(this,function(){m(this).on("touchmove",t,e)})},touchend:function(t,e){e=e||!1,g.each(this,function(){m(this).on("touchend",t,e)})},touchcancel:function(t,e){e=e||!1,g.each(this,function(){m(this).on("touchcancel",t,e)})},touchendcancel:function(t,e){e=e||!1,g.each(this,function(){m(this).on("touchend",t,e),m(this).on("touchcancel",t,e)})},windowcancel:function(e){var n=this[0]||{};m(o).on("touchstart",function(t){m(t.target).one("touchend",function(t){e.call(n,t)})})},tap:function(){var f=arguments,u=function(){},d="",p=!1;g.each(this,function(t,e){var o=!0,r=!0,l=0,h=0,n=!0;function i(t){t.preventDefault(),r=o=!0;var e=t.changedTouches[0];l=e.clientX,h=e.clientY}function a(t){t.preventDefault();var e=t.changedTouches[0],n=e.clientX,i=e.clientY,a=Math.abs(n-l),s=Math.abs(i-h);(1<a||1<s)&&r&&(r=o=!1)}function s(t){var e;t.preventDefault(),e=n?this:t.target,o&&"function"==typeof u&&u.call(e,t)}if(1<=f.length&&"function"==typeof f[0])u=f[0],p=f[1]||!1,n=!0,m(this).on("touchstart",i,p),m(this).on("touchmove",a,p),m(this).on("touchend",s,p);else if(2<=f.length&&"string"==typeof f[0]&&"function"==typeof f[1])d=f[0],u=f[1],p=f[2]||!1,n=!1,m(this).on("touchstart",d,i,p),m(this).on("touchmove",d,a,p),m(this).on("touchend",d,s,p);else if(2<=f.length&&"object"===v(f[0])&&"function"==typeof f[1]){u=f[1],p=f[2]||!1;var c=f[0];n=!0,m(this).on("touchstart",c,i,p),m(this).on("touchmove",c,a,p),m(this).on("touchend",c,s,p)}else if(3<=f.length&&"string"==typeof f[0]&&"object"===v(f[1])&&"function"==typeof f[2]){d=f[0];c=f[1];u=f[2],p=f[3]||!1,n=!1,m(this).on("touchstart",d,c,i,p),m(this).on("touchmove",d,c,a,p),m(this).on("touchend",d,c,s,p)}})},scroll:function(t,e){e=e||!1,g.each(this,function(){m(this).on("scroll",t,e)})},resize:function(t,e){e=e||!1,g.each(this,function(){m(this).on("resize",t,e)})},change:function(t,e){e=e||!1,g.each(this,function(){m(this).on("change",t,e)})},blur:function(t,e){0!==arguments.length?(e=e||!1,g.each(this,function(){m(this).on("blur",t,e)})):$(this).each(function(){this.blur()})},focus:function(t,e){0!==arguments.length?(e=e||!1,g.each(this,function(){m(this).on("focus",t,e)})):$(this).each(function(){this.focus()})},keyup:function(t,e){e=e||!1,g.each(this,function(){m(this).on("keyup",t,e)})},keydown:function(t,e){e=e||!1,g.each(this,function(){m(this).on("keydown",t,e)})},keypress:function(t,e){e=e||!1,g.each(this,function(){m(this).on("keypress",t,e)})}}),g.extend({createXHR:function(){if(o.XMLHttpRequest)return new XMLHttpRequest;if(!o.ActiveXObject)throw new Error("浏览器不支持XHR对象！");for(var t=0,e=["MSXML2.XMLHttp","Microsoft.XMLHTTP"].length;t<e;t++)try{return new ActiveXObject(version[t])}catch(t){}},ajax:function(e){(e=e||{}).type="string"==typeof e.type?e.type.toUpperCase():"GET",e.url="string"==typeof e.url?e.url:"",e.async="boolean"!=typeof e.async||e.async,e.data="object"===v(e.data)?e.data:{},e.success=e.success||function(){},e.error=e.error||function(){},e.contentType=e.contentType||"application/x-www-form-urlencoded;charset=utf-8",e.timeout="number"==typeof e.timeout?e.timeout:1e4,e.progress=e.progress||{};var n=g.createXHR();n.timeout=e.timeout,n.xhrFields=e.xhrFields||{};var t=l(e.data);"POST"===e.type.toUpperCase()||"PUT"===e.type.toUpperCase()||"DELETE"===e.type.toUpperCase()?(e.url=-1===e.url.indexOf("?")?e.url+"?_="+Math.random():e.url+"&_="+Math.random(),n.open(e.type,e.url,e.async),n.setRequestHeader("Content-Type",e.contentType),n.send(t)):"GET"===e.type.toUpperCase()&&(0<t.length&&(t="&"+t),e.url=-1===e.url.indexOf("?")?e.url+"?_="+Math.random()+t:e.url+"&_="+Math.random()+t,n.open(e.type,e.url,e.async),n.send(null)),n.onreadystatechange=function(){if(4===n.readyState)if(200<=n.status&&n.status<300||304===n.status){if("function"==typeof e.success)try{e.success(JSON.parse(n.responseText),n.status,n.statusText)}catch(t){e.success(n.responseText,n.status,n.statusText)}}else"function"==typeof e.error&&e.error(n.status,n.statusText)}},get:function(t,e){n(t,"get",e,arguments)},post:function(t,e){n(t,"post",e,arguments)},put:function(t,e){n(t,"put",e,arguments)},delete:function(t,e){n(t,"delete",e,arguments)},jsonp:function(t,e){var n;"function"==typeof e?n=e:3<=arguments.length&&(n=arguments[2]);var i="mobile"+(new Date).getTime().toString().trim();o[i]=function(t){"function"==typeof n&&n(t)};var a="";"object"===(void 0===e?"undefined":v(e))&&(a=l(e)),0<a.length&&(a="&"+a),t=-1===t.indexOf("?")?t+"?callback="+i+a:t+"&callback="+i+a;var s=document.createElement("script");s.setAttribute("id",i),s.setAttribute("src",t),s.setAttribute("type","text/javascript"),document.body.appendChild(s)}}),g.extend({each:function(t,e){if(!t)throw new Error("els property type must is Array or Object");for(var n=0;n<t.length;n++){if("function"==typeof e)if(!1===e.call(t[n],n,t[n]))break}},ready:function(t){"function"==typeof t&&o.addEventListener("load",t)},isEqual:function(t,e){t=t||[];for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1},htmlStringToDOM:function(t){var e=document.createDocumentFragment(),n=document.createDocumentFragment(),i=document.createElement("div");i.innerHTML=t,n.appendChild(i);for(var a=n.querySelector("div").childNodes,s=a.length;0<s;s--)e.insertBefore(a[s-1],e.childNodes[0]);return n=null,e},checkSelector:function(t,e){if(""===(e="string"==typeof e?e:"").trim())return!1;var n=e.match(/\#[a-zA-Z_][\w|-]*[^\.|^#|\[]{0,}/g)||[],i=function(t,e,n){{if(-1===n.search(/#/))return!0;if(-1!==n.search(/#/)&&0===e.length)return!1}for(var i=t.id||"",a=0;a<e.length;a++)if(e[a]==i)return!0;return!1}(t,n=c(n,"#",""),e),a=e.match(/\.[a-zA-Z_][\w|-]*[^\.|^#|\[]{0,}/g)||[],s=function(t,e,n){{if(-1===n.search(/\./))return!0;if(-1!==n.search(/\./)&&0===e.length)return!1}for(var i=t.classList||"",a=0;a<e.length;a++)if(!i.contains(e[a]))return!1;return!0}(t,a=c(a,".",""),e),o=e.match(/^[a-zA-Z][\w|-]*[^\.|^#|\[]{0,}|[\]][a-zA-Z][\w|-]*[^\.|^#|\[]{0,}/g)||[],r=function(t,e,n){{if(-1===n.search(/^[a-zA-Z]|[\]][a-zA-Z]/))return!0;if(-1!==n.search(/^[a-zA-Z]|[\]][a-zA-Z]/)&&0===e.length)return!1}for(var i=(t.nodeName||"").toLowerCase(),a=0;a<e.length;a++)if(e[a].trim()!==i)return!1;return!0}(t,o=c(o,"]",""),e),l=e.match(/\[[a-zA-Z][\w-=]*\]/g)||[],h=function(t,e,n){{if(-1===n.search(/\[.*\]/))return!0;if(-1!==n.search(/\[.*\]/)&&0===e.length)return!1}for(var i=/=/g,a=0;a<e.length;a++)if(i.test(e[a])){var s=e[a].split("=");if((t.getAttribute(s[0])||"").trim()!==(s[1]||"").trim())return!1}else if(!t.hasAttribute(e[a]))return!1;return!0}(t,l=c(l=c(l,"[",""),"]",""),e);function c(t,e,n){for(var i=[],a=0;a<t.length;a++)i.push(t[a].replace(e,n));return i}return i&&s&&r&&h},trim:function(t){return(t="string"==typeof t?t:"").replace(/^\s*|\s*$/gim,"")},round:function(t,e){if(1===arguments.length){if("number"==typeof t)return Math.round(t)}else if(2===arguments.length&&"number"==typeof t&&"number"==typeof e){var n=Math.floor(t);return(n+=e)<t?Math.ceil(t):Math.floor(t)}return null},isMobile:function(){for(var t=navigator.userAgent.toString().toLowerCase(),e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!1,i=0;i<e.length;i++)if(0<t.indexOf(e[i].toLowerCase())){n=!0;break}return n},jsonToDate:function(t,e){e="string"!=typeof e?"yyyy-MM-dd":e;var n=t.toString().replace("/Date(","").replace(")/",""),i=parseInt(n);i=isNaN(i)?new Date(1970,0,1,0,0,1):i;var a=new Date(Number(i.toString())),s={"M+":a.getMonth()+1,"d+":a.getDate(),"H+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(var o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),s)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?s[o]:("00"+s[o]).substr((""+s[o]).length)));return e}}),g.extend({events:{props:{},on:function(t,e){this.props[t]=this.props[t]||[],this.props[t].push(e)},off:function(t,e){if(1===arguments.length)this.props[t]=[];else if(2===arguments.length)for(var n=this.props[t]||[],i=0;i<n.length;i++)if(n[i]===e){n.splice(i,1);break}},emit:function(t,e){if(this.events[t])for(var n=0;n<this.events[t].length;n++)this.events[t][n](e)}}}),g.fn.extend({setTransform:function(i,a){return g.each(this,function(){this.transform||(this.transform={}),this.transform[i]=a;var t="";for(var e in this.transform)switch(e){case"rotate":case"rotateX":case"rotateY":case"rotateZ":case"skewX":case"skewY":case"skewZ":t+=e+"("+parseFloat(this.transform[e])+"deg)  ";break;case"skew":2===(n=this.transform[e].split(",")).length?t+=e+"("+parseFloat(n[0])+"deg,"+parseFloat(n[1])+"deg)  ":t+=e+"("+parseFloat(n)+"deg,0deg)  ";break;case"scaleX":case"scaleY":case"scaleZ":t+=e+"("+parseFloat(this.transform[e])+")  ";break;case"scale":2===(n=this.transform[e].split(",")).length?t+=e+"("+parseFloat(n[0])+","+parseFloat(n[1])+")  ":t+=e+"("+parseFloat(n)+","+parseFloat(n)+")  ";break;case"translateX":case"translateY":case"translateZ":t+=e+"("+parseFloat(this.transform[e])+"px)  ";break;case"translate":var n;2===(n=this.transform[e].split(",")).length?t+=e+"("+parseFloat(n[0])+"px,"+parseFloat(n[1])+"px)  ":t+=e+"("+parseFloat(n)+"px,0px)  "}this.style.WebkitTransform=t,this.style.MozTransform=t,this.style.msTransform=t,this.style.OTransform=t,this.style.transform=t}),this},getTransform:function(a){var s=0;return g.each(this,function(){if(this.transform||(this.transform={}),void 0===this.transform[a])"scale"==a||"scaleX"==a||"scaleY"==a?(s=1,"scale"===a&&(s=[1,1])):(s=0,"skew"!==a&&"translate"!==a||(s=[0,0]));else if("skew"===a||"translate"===a||"scale"===a){for(var t=this.transform[a].split(","),e=[],n=0;n<t.length;n++){var i=parseFloat(t[n]);i="scale"===a?isNaN(i)?1:i:isNaN(i)?0:i,e.push(i)}1===e.length&&("scale"===a?e.push(e[0]):e.push(0)),s=e}else s=parseFloat(this.transform[a])}),s}}),mobile},"object"===("undefined"==typeof module?"undefined":v(module))&&"object"===v(module.exports)?module.exports=a(i):"function"==typeof define&&define.amd?define(function(){return a(i)}):"function"==typeof define&&define.cmd?define(function(t,e,n){n.exports=a(i)}):a(i);var P,M,A,s,o,p,l,g,e=(mobile,void(m.reset=function(){m.slide.reset(),m.tab.reset(),m.commonStyle.reset()})),n=function(c){function t(){!function(){var t=c(".mobile-tab"),e=c(".mobile-head"),n=c(".mobile-content"),i=c(".mobile-footer"),a=c(window).height(),s=e.height()||0,o=i.height()||0,r=0;c(t).each(function(){var t=c(this).height()||0;r+=t});var l=a-(s+o+r);n.height(l);var h=c(".mobile-tab-top").height()||0;n.css("top",s+h)}(),function(){var t=c(".mobile-tab-top"),e=c(".mobile-head").height()||0;t.css("top",e);var n=c(".mobile-tab-bottom"),i=c(".mobile-footer").height()||0;n.css("bottom",i)}()}c(".mobile-head,.mobile-footer,.mobile-tab").touchstart(function(t){t.preventDefault()}),c(".mobile-head,.mobile-footer,.mobile-tab").touchmove(function(t){t.preventDefault()}),c(".mobile-head,.mobile-footer,.mobile-tab").touchend(function(t){t.preventDefault()}),c(".mobile-head,.mobile-footer,.mobile-tab").touchcancel(function(t){t.preventDefault()}),c(function(){t(),c(window).resize(function(){t()}),c(".mobile-back").on("touchend",function(t){t.preventDefault(),history.back&&history.back()})}),c.commonStyle={reset:t}}(mobile),r=void(P=mobile)(function(){P(".mobile-scroll-topbottom").each(function(t,e){!function(p){var g=P(p).find(".mobile-scroll-content"),t=P(p).find(".mobile-scroll-content-many.active"),n=!1;0===g.length&&(g=t,n=!0),P(g).setTransform("translateZ",.05);var v=P(p).hasAttr("data-scroll-top"),b=P(p).hasAttr("data-scroll-bottom"),y=P(p).hasAttr("data-scroll-bar");if(y){var e=document.createElement("div");e.classList.add("mobile-scroll-bar"),p.appendChild(e)}var T=0,w=0,M=0,A=0,E=!0,X=!0,C=!1,Y=!0,x="auto",S=P(p).height(),L=S-g.height(),a=P(g).height(),k=P(p).height(),s=k/a,o=S*s,I=P(p).find(".mobile-scroll-bar");y&&S<a&&I.height(o);var O=0,F=!0,q=0,D=0,N=P(g).find(".mobile-loading"),j=P(p).hasAttr("data-loading"),z=0;function H(t){if(clearInterval(O),y){var e=P(g).getTransform("translateY"),n=P(g).height(),i=e/n;I.setTransform("translateY",-k*i),I.transition("none"),a=P(g).height(),k=P(p).height(),o=S*(s=k/a),(I=P(p).find(".mobile-scroll-bar")).height(o)}}j&&(z=N.offsetTop()),P(p).touchstart(function(t){t.preventDefault();var e=t.changedTouches[0];w=e.clientY,M=e.clientX,X=E=!0,x="auto",n&&(g=P(p).find(".mobile-scroll-content-many.active"),N=P(g).find(".mobile-loading")),T=P(g).getTransform("translateY"),Y=!(C=!1),clearInterval(O),F=!0,D=T,q=0,S=P(p).height(),y&&(a=P(g).height(),k=P(p).height(),o=S*(s=k/a),I=P(p).find(".mobile-scroll-bar"),S<a&&I.height(o),I.css("opacity",1))}),P(p).touchmove(function(t){t.preventDefault(),S=P(p).height(),g.transition("none"),I.transition("none");var e=t.changedTouches[0],n=e.clientY;A=n-w;var i=e.clientX-M,a=n-w,s=Math.abs(i),o=Math.abs(a);if((1<s||1<o)&&X&&(X=E=!1),y){var r=P(g).getTransform("translateY"),l=P(g).height(),h=r/l;I.setTransform("translateY",-k*h)}if(Y&&s!=o&&(Y=!1,o<s&&(C=!0)),!C){if(F){F=!1;var c=0,f=0;O=setInterval(function(){c=P(g).getTransform("translateY")||0,f=c-D,D=c,q=f},20)}L=S-g.height();var u=T+A;if(j&&(z=N.offsetTop(),P(this).trigger("scrollloading",{el:g.eq(0),resetBar:H,translateY:u,loading:N,loadingY:z,isLoading:Math.abs(u)>=z-S})),0===Math.abs(q)&&P(this).trigger("scrolltopbottom",{el:g.eq(0),translateY:u,resetBar:H}),x="auto",0<u){var d=1-u/S;u*=d,x="down",v||(u=0),P(this).trigger("scrolltop",{el:g.eq(0),resetBar:H,translateY:u})}else if(u<L){var m=Math.abs(u-L),d=1-m/S;u=L-m*d,x="up",b||(u=L),P(this).trigger("scrollbottom",{el:g.eq(0),resetBar:H,translateY:u}),P(g).height()<S&&(u=0)}P(g).setTransform("translateY",u)}}),P(p).touchendcancel(function(t){t.preventDefault(),t.changedTouches[0],F=!0,clearInterval(O);var e=setTimeout(function(){clearInterval(O),clearTimeout(e)},100);if(E){var n=P(t.target).closest("a"),i=P(t.target).closest(".mobile-link");if(0<i.length){var a=n.attr("href")||"javascript:;";window.location.assign(a)}}if(!C){80<q?q=80:q<-80&&(q=-80);var s=P(p).height();L=S-g.height();var o=P(g).getTransform("translateY")+q*(s/28),r="ease-out";if("auto"==x?0<o?(o=0,P(g).transition("all",500,r)):o<L?(o=L,P(g).height()<S&&(o=0),P(g).transition("all",500,r)):P(g).transition("all",800,r):"up"==x?(o=L,P(g).transition("all",500,r)):"down"==x&&(o=0,P(g).transition("all",500,r)),y){var l=o,h=P(g).height(),c=l/h;I.setTransform("translateY",-P(p).height()*c),I.transition("all",800)}j&&(z=N.offsetTop(),P(this).trigger("scrollloading",{el:g.eq(0),resetBar:H,translateY:o,loading:N,loadingY:z,isLoading:Math.abs(o)>=z-S})),0!=Math.abs(q)&&P(this).trigger("scrolltopbottom",{el:g.eq(0),translateY:o,resetBar:H}),P(g).setTransform("translateY",o)}}),P(p).windowcancel(function(t){})}(e)})}),h=function(x){function n(v){var b=x(v).find(".mobile-scroll-content");if(0!==b.length){b.setTransform("translateZ",.01);var y=0,f=0,T=0,w=0,u=0,d=0,m=0,M=!0,A=x(v).hasAttr("data-position-left"),E=x(v).hasAttr("data-position-center"),X=x(v).width(),C=!1,Y=!0;x(v).touchstart(function(t){t.preventDefault();var e=t.changedTouches[0];d=e.clientX,m=e.clientY,M=!0,u=x(b).getTransform("translateX"),y=(new Date).getTime(),f=u,w=0,x(b).transition("none")}),x(v).touchmove(function(t){t.preventDefault();var e=t.changedTouches[0],n=e.clientX,i=e.clientY,a=n-d;(1<Math.abs(n-d)||1<Math.abs(i-m))&&(M=!1);var s=Math.abs(n-d),o=Math.abs(i-m);Y&&s!=o&&(Y=!1,s<o&&(C=!0));if(C)return;var r=(X=x(v).width())-b.width(),l=u+a;if(0<l){var h=1-l/X;l*=h}else if(l<r){var c=Math.abs(l-r),h=1-c/X;l=r-c*h,x(b).width()<X&&(l=0)}x(b).setTransform("translateX",l),T=(new Date).getTime(),w=l-f}),x(v).touchendcancel(function(t){t.preventDefault();t.changedTouches[0];var e=w/(T-y);if(X=x(v).width(),M){var n=x(t.target).closest("li");if(0<n.length){x(this).find("li").removeClass("active"),n.addClass("active"),x(this).trigger("scrollselect",n[0]),A?(f=n,u=x(b).width(),d=x(f).offset().left,m=u-X,X<u&&(Math.abs(d)<Math.abs(m)?x(b).setTransform("translateX",-d):x(b).setTransform("translateX",-m),x(b).transition("all",800,"ease"))):E&&(a=n,s=x(b).outerWidth(),o=x(a).offset().left,r=x(a).outerWidth(),l=Math.abs(X/2),h=o-l+r/2,c=s-X,X<s&&(Math.abs(o)>Math.abs(l)?Math.abs(c)<h?x(b).setTransform("translateX",-Math.abs(c)):x(b).setTransform("translateX",-h):x(b).setTransform("translateX",0),x(b).transition("all",800,"ease")));var i=x(t.target).closest("a").attr("href")||"javascript:;";return void window.location.assign(i)}}var a,s,o,r,l,h,c;var f,u,d,m;C=!1,Y=!0;var p=X-b.width(),g=x(b).getTransform("translateX")+150*e;"cubic-bezier(.17,.67,.81,.9)",0<g?g=0:g<p&&(g=p,x(b).width()<X&&(g=0));b[0].style.transition="0.8s cubic-bezier(.17,.67,.81,.9)",x(b).setTransform("translateX",g)})}}x(function(){!function(){for(var t=x(".mobile-scroll-leftright"),e=0;e<t.length;e++)n(t[e])}()})}(mobile),c=function(C){function t(){var t=C(".mobile-slide");if(0<t.length){var e=C(t).parent().width();t.width(e),t.each(function(){var t=C(this),e=t.find(".mobile-slide-list"),n=t.find(".mobile-slide-item"),i=t.width();e.width(i*n.length),n.width(i)})}}C(function(){C(".mobile-slide").each(function(){!function(f){var u=C(f).width(),t=C(f),d=t.find(".mobile-slide-list"),l=t.find(".mobile-slide-item"),h=t.find(".mobile-slide-radius span"),c=t.attr("data-time")||"3000",m=t.hasAttr("data-auto"),p=t.hasAttr("data-no-loop");p||(d[0].innerHTML+=d[0].innerHTML);t.width(u);var e=t.width();l=t.find(".mobile-slide-item"),d.width(e*l.length),l.width(e),c=parseInt(c);var g=0,v=0,b=0,y=0,T=0,w=!0,M=!0,A=!1,E=!0;C(d).setTransform("translateZ",.01),t.touchstart(function(t){u=C(f).width();var e=t.changedTouches[0];M=w=!0,clearInterval(g),d.transition("none");var n=C(d).getTransform("translateX"),i=Math.round(-n/u);E=!(A=!1),p||(0==i?i=h.length:i==l.length-1&&(i=h.length-1)),C(d).setTransform("translateX",-i*u),b=e.clientX,y=e.clientY,v=C(d).getTransform("translateX")}),t.touchmove(function(t){var e=t.changedTouches[0],n=e.clientX,i=e.clientY,a=n-b,s=Math.abs(n-b),o=Math.abs(i-y);if((1<s||1<o)&&M&&(M=w=!1),E&&s!=o&&(E=!1,s<o&&(A=!0)),!A){if(p){u=C(f).width();var r=Math.abs(d.width()-u),l=v+a;if(0<l){var h=1-l/u;l*=h}else if(Math.abs(l)>r){var c=Math.abs(l)-Math.abs(r),h=1-c/u;l=-r-c*h}C(d).setTransform("translateX",l)}p||(clearInterval(g),C(d).setTransform("translateX",v+a))}}),t.touchendcancel(function(t){var e=t.changedTouches[0],n=e.clientX;if(e.clientY,u=C(this).width(),m&&!p&&(g=X(c)),w){var i=C(t.target).closest(".mobile-link");if(0===i.length){var a=C(t.target).closest("a"),s=C(t.target).closest(".mobile-slide-item");if(0<s.length){var o=a.attr("href")||"javascript:;";window.location.assign(o)}}}var r=-C(d).getTransform("translateX")/u;(T=b<n?C.round(r,.8):C.round(r,.2))<0?T=0:T>l.length-1&&(T=l.length-1),d.transition("all",500),C(d).setTransform("translateX",-T*u),h.each(function(){this.classList.remove("active")}),h.eq(T%h.length).addClass("active")}),m&&!p&&(g=X(c));function X(t){return setInterval(function(){d.transition("none"),u=C(f).width(),p||T==l.length-1&&(T=h.length-1),C(d).setTransform("translateX",-T*u),setTimeout(function(){T++,d.transition("all",500,"ease-in-out"),C(d).setTransform("translateX",-T*u);for(var t=0;t<h.length;t++)h[t].className="";h[T%h.length].className="active"},20)},t)}}(this)})}),C(window).resize(function(){t()}),C.slide={reset:t}}(mobile),f=function(E){function t(){var t=E(".mobile-tab-slide");if(0<t.length){var e=E(t).parent().width();t.width(e),t.each(function(){var t=E(this),e=t.find(".mobile-tab-slide-list"),n=t.find(".mobile-tab-slide-item"),i=t.width();e.width(i*n.length),n.width(i)})}}function X(t){var e=t.outerWidth(),n=t.index(),i=t.parents(".mobile-tab-nav").find(".mobile-tab-slide-line");i.setTransform("translateX",e*n),i.transition("transform",500)}E(function(){E(".mobile-tab-slide").each(function(t,e){!function(u){var d=E(u).width(),a=E(u),m=a.find(".mobile-tab-slide-list"),p=a.find(".mobile-tab-slide-item");a.width(d);var t=a.width();m.width(t*p.length),p.width(t);var g=a.hasAttr("data-drag"),v=0,b=0,y=0,T=0,w=0,M=!1,A=!0;E(m).setTransform("translateZ",.01),a.touchstart(function(t){var e=t.changedTouches[0];m=a.find(".mobile-tab-slide-list"),p=a.find(".mobile-tab-slide-item"),m.transition("none");var n=E(m).getTransform("translateX");w=Math.round(-n/E(u).width()),M=!1,A=!0,E(m).setTransform("translateX",-w*E(u).width()),y=e.clientX,T=e.clientY,b=E(m).getTransform("translateX");var i=E(".mobile-tab-nav");i.hasAttr("data-line")&&(v=i.find(".mobile-tab-slide-line").getTransform("translateX"))}),a.touchmove(function(t){var e=t.changedTouches[0],n=e.clientX,i=e.clientY,a=n-y,s=a,o=Math.abs(n-y),r=Math.abs(i-T);A&&o!=r&&(A=!1,o<r&&(M=!0));if(M)return;d=E(u).width();var l=Math.abs(m.width()-d),h=b+a;if(g){if(0<h){var c=1-h/d;s=(h*=c)-c*b}else if(Math.abs(h)>l){var f=Math.abs(h)-Math.abs(l),c=1-f/d;s=(h=-l-f*c)-b}E(m).setTransform("translateX",h)}else 0<h?s=h=0:Math.abs(h)>Math.abs(l)&&(s=(h=-l)-b),E(m).setTransform("translateX",h);E(this).trigger("tabmove",{el:p.eq(w),translateX:s,lineX:v})}),a.touchendcancel(function(t){var e=t.changedTouches[0],n=e.clientX,i=(e.clientY,-E(m).getTransform("translateX")/E(u).width());w=y<n?E.round(i,.7):E.round(i,.3);w<0?w=0:w>p.length-1&&(w=p.length-1);E(this).trigger("tabend",{el:p.eq(w)}),m.transition("all",500),E(m).setTransform("translateX",-w*E(u).width())})}(e)}),E(".mobile-tab-nav").each(function(t,e){var n=E(e),i=n.hasAttr("data-line");if(i){var a=document.createElement("div");a.classList.add("mobile-tab-slide-line"),n.append(a);var s=n.find("li"),a=n.find(".mobile-tab-slide-line");a.width(s.width()),a.css("left",n.css("padding-left")),X(n.find("li.active"))}})}),E(window).resize(function(){t()}),E(".mobile-tab-slide").on("tabmove",function(t){var e=E(t.detail.el),n=t.detail.translateX,i="[data-target=\\#"+(e.attr("id")||e.attr("data-id"))+"]",a=E(".mobile-tab").find(i);if(E(".mobile-tab .mobile-tab-nav").hasAttr("data-line")){var s=a.width(),o=n/E(this).width(),r=E(".mobile-tab-slide-line"),l=-(s*o)+t.detail.lineX;r.setTransform("translateX",l),r.transition("none")}}),E(".mobile-tab-slide").on("tabend",function(t){var e=E(t.detail.el);e.parents(".mobile-tab-slide-list").find(".mobile-tab-slide-item ").removeClass("active"),e.addClass("active");var n="[data-target=\\#"+(e.attr("id")||e.attr("data-id"))+"]",i=E(".mobile-tab").find(n);E(i).siblings().removeClass("active"),E(i).addClass("active");var a,s,o,r,l,h,c,f,u,d,m,p,g,v,b,y=E(i).parents(".mobile-tab-nav"),T=y.hasAttr("data-position-left"),w=y.hasAttr("data-position-center");T?(d=i,m=E(window).width(),p=E(d).parents(".mobile-scroll-content"),g=p.width(),v=E(d).offset().left,b=g-m,m<g&&(Math.abs(v)<Math.abs(b)?E(p).setTransform("translateX",-v):E(p).setTransform("translateX",-b),E(p).transition("all",800,"ease"))):w&&(a=i,s=E(window).width(),o=E(a).parents(".mobile-scroll-content"),r=o.outerWidth(),l=E(a).offset().left,h=E(a).outerWidth(),c=Math.abs(s/2),f=l-c+h/2,u=r-s,s<r&&(Math.abs(l)>Math.abs(c)?Math.abs(u)<f?E(o).setTransform("translateX",-Math.abs(u)):E(o).setTransform("translateX",-f):E(o).setTransform("translateX",0),E(o).transition("all",800,"ease")));var M=e.parents(".mobile-tab-slide").hasAttr("data-trigger"),A=e.find(".mobile-scroll-content");A.length<=0&&(A=e),M&&(A.hasAttr("data-trigger")||e.emit("scrollloading",{el:A.eq(0),isLoading:!0,loading:A.find(".mobile-loading")})),X(i)}),E(".mobile-tab-nav").tap("li",function(t){var e=E(this);e.siblings().removeClass("active"),e.addClass("active");var n=e.attr("data-target"),i=E(n);e.emit("tabnavend",{el:this});var a=i.parents(".mobile-tab-slide-list");a.find(".mobile-tab-slide-item").removeClass("active"),i.addClass("active");var s=E(i).offset().left;E(a).setTransform("translateX",-s),E(i).parents(".mobile-tab-slide").hasAttr("data-transition")?E(a).transition("all",500):E(a).transition("none");var o=e.parents(".mobile-tab-nav").hasAttr("data-trigger"),r=i.find(".mobile-scroll-content");r.length<=0&&(r=i),o&&(r.hasAttr("data-trigger")||r.emit("scrollloading",{el:r.eq(0),isLoading:!0,loading:r.find(".mobile-loading")})),X(e)}),E.tab={reset:t}}(mobile),u=(M=mobile,A=!0,o=s=0,M(".mobile-aside-menu").on("touchstart",".mobile-aside-ttl",function(t){var e=t.changedTouches[0];s=e.clientX,o=e.clientY,A=!0}),M(".mobile-aside-menu").on("touchmove",".mobile-aside-ttl",function(t){var e=t.changedTouches[0],n=e.clientX,i=e.clientY;(1<Math.abs(n-s)||1<Math.abs(i-o))&&(A=!1)}),void M(".mobile-aside-menu").on("touchend",".mobile-aside-ttl",function(t){if(A){$(this).siblings().removeClass("active"),$(this).addClass("active");var e=M(this).attr("data-target"),n=M(e);n.parents(".mobile-aside-content").find(".mobile-scroll-content-many").removeClass("active").hide(),n.parents(".mobile-aside-content").find(".mobile-scroll-bar").css("opacity",0).transition("null"),M(n).addClass("active").show();var i=M(this).parents(".mobile-scroll-content"),a=M(this).parents(".mobile-aside-menu"),s=a.hasAttr("data-position-center"),o=a.hasAttr("data-position-top");s&&(m=i,p=M(d=this).parents(".mobile-scroll-topbottom").height(),g=M(m).outerHeight(),v=M(d).offset().top,b=M(d).outerHeight(),y=Math.abs(p/2),T=v-y+b/2,w=g-p,p<g&&(Math.abs(v)>Math.abs(y)?Math.abs(w)<T?M(m).setTransform("translateY",-Math.abs(w)):M(m).setTransform("translateY",-T):M(m).setTransform("translateY",0),M(m).transition("all",800,"ease"))),o&&(l=i,h=M(r=this).parents(".mobile-scroll-topbottom").height(),c=M(l).height(),f=M(r).offset().top,u=c-h,h<c&&(Math.abs(f)<Math.abs(u)?M(l).setTransform("translateY",-f):M(l).setTransform("translateY",-u),M(l).transition("all",800,"ease"))),a.hasAttr("data-trigger")&&($(n).hasAttr("data-trigger")||$(n).trigger("scrollloading",{el:n,isLoading:!0,loading:n.find(".mobile-loading")}))}var r,l,h,c,f,u,d,m,p,g,v,b,y,T,w})),d=function(T){function n(){var t=T(".mobile-fullpage-nav"),e=t.height()/2;t.css("margin-top",-e+"px")}T(function(){T(".mobile-fullpage").each(function(t,e){!function(f){var u=T(f).height(),i=T(f),d=i.find(".mobile-fullpage-list"),a=i.find(".mobile-fullpage-list-item");i.height(u);var t=i.height();d.height(t*a.length),a.height(t);var m=i.hasAttr("data-drag"),p=0,g=0,v=0,s=0,b=!1,y=!0;n(),i.hasAttr("data-nav")&&(!function(){for(var t=T(".mobile-fullpage-list-item"),e="<ul class='mobile-fullpage-nav'>",n=0;n<t.length;n++)e+='\n\t\t\t<li class="mobile-fullpage-nav-item '+(0===n?"active":"")+'"></li>\n\t\t\t';e+="</ul>",console.log(t),T(".mobile-fullpage").append(e)}(),n());T(d).setTransform("translateZ",.01),i.on("touchstart",function(t){t.preventDefault();var e=t.changedTouches[0];d=i.find(".mobile-fullpage-list"),a=i.find(".mobile-fullpage-list-item"),d.transition("none");var n=T(d).getTransform("translateY");s=Math.round(-n/T(f).height()),b=!1,y=!0,T(d).setTransform("translateY",-s*T(f).height()),g=e.clientX,v=e.clientY,p=T(d).getTransform("translateY")}),i.on("touchmove",function(t){t.preventDefault(),clearTimeout(0);var e=t.changedTouches[0],n=e.clientX,i=e.clientY,a=i-v,s=Math.abs(i-v),o=Math.abs(n-g);y&&s!=o&&(y=!1,s<o&&(b=!0));if(b)return;u=T(f).height();var r=Math.abs(d.height()-u),l=p+a;if(m){if(0<l){var h=1-l/u;l*=h}else if(Math.abs(l)>r){var c=Math.abs(l)-Math.abs(r),h=1-c/u;l=-r-c*h}T(d).setTransform("translateY",l)}else 0<l?(l=0,line_SlideY=0):Math.abs(l)>Math.abs(r)&&(l=-r,line_SlideY=l-p),T(d).setTransform("translateY",l);T(d).setTransform("translateY",l)}),i.on("touchend",function(t){t.preventDefault();var e=t.changedTouches[0],n=(e.clientX,e.clientY),i=-T(d).getTransform("translateY")/T(f).height();s=v<n?T.round(i,.95):T.round(i,.05);s<0?s=0:s>a.length-1&&(s=a.length-1);T(this).trigger("fullpageend",{el:a.eq(s)}),clearTimeout(0),fullpageetTimeId=setTimeout(function(){var t,e;a.removeClass("active"),a.eq(s).addClass("active"),t=s,(e=T(".mobile-fullpage-nav").find(".mobile-fullpage-nav-item")).removeClass("active"),e.eq(t).addClass("active")},500),d.transition("all",500),T(d).setTransform("translateY",-s*T(f).height())})}(e)})}),T(window).resize(function(){!function(){var t=T(".mobile-fullpage");if(0<t.length){var e=T(t).parent().height();t.height(e),t.each(function(t,e){var n=T(e),i=n.find(".mobile-fullpage-list"),a=n.find(".mobile-fullpage-list-item"),s=n.height();i.height(s*a.length),a.height(s)}),n()}}()})}(mobile),b=void(p=mobile)(function(){p(".mobile-indexlist").each(function(t,e){!function(t){var e=p(t),s=e.find(".mobile-indexlist-list"),n=p(".mobile-indexlist-nav"),o=p(".mobile-indexlist-nav a"),r=p(".mobile-indexlist-tip"),a=[],i=p(window).height(),l=e.height(),h=p(".mobile-footer").height()||0,c=p(".mobile-tab-bottom").height()||0,f=i-(l+h+c),u=s.height()-e.height();function d(t){var e="[data-group="+a[t].name+"]",n=s.find(e),i=n.offset().top;u<i&&(i=u),s.setTransform("translateY",-i),s.transition("none"),o.removeClass("active"),o.eq(t).addClass("active"),r.text(a[t].name)}o.touchstart(function(t){var e=p(this).text(),n="[data-group="+e+"]",i=s.find(n),a=i.offsetTop();u<a&&(a=u),s.setTransform("translateY",-a),s.transition("none"),o.removeClass("active"),p(this).addClass("active"),r.text(e)}),n.touchstart(function(t){t.preventDefault(),a=[],o.each(function(t,e){var n={};n.name=p(e).text(),n.top=p(e).offsetTop(),a.push(n)}),i=p(window).height(),l=p(".mobile-indexlist").height(),h=p(".mobile-footer").height()||0,c=p(".mobile-tab-bottom").height()||0,f=i-(l+h+c),u=s.height()-e.height(),r.fadeIn()}),n.touchmove(function(t){t.preventDefault();var e=t.changedTouches[0],n=e.clientY-f;n=n<0?0:n;for(var i=0;i<a.length;i++)if(i<a.length-1){if(n>=a[i].top&&n<a[i+1].top){d(i);break}}else if(i===a.length-1){d(i);break}}),n.touchend(function(t){r.fadeOut()})}(e)})}),y=void(l=mobile)(function(){l(".mobile-spy").each(function(t,e){!function(t){var s=l(t),n=s.find(".mobile-scroll-topbottom"),i=n.find(".mobile-scroll-content"),a=i.height()-n.height(),e=n.hasAttr("data-spy"),o=[];function r(t,e){var n="[data-spy="+e[t].name+"]",i=s.find(".mobile-spy-ttl"+n),a=s.find(".mobile-spy-ttl");a.removeClass("active"),i.addClass("active")}e&&(s.find(".mobile-scroll-topbottom").on("touchstart",function(t){a=i.height()-n.height();var e=s.find(".mobile-spy-item");e.each(function(t,e){var n=l(e).offsetTop(),i=l(e).attr("data-group"),a={};a.top=n,a.name=i,o.push(a)})}),s.find(".mobile-scroll-topbottom").on("scrolltopbottom",function(t){l(t.detail.el);var e=t.detail.translateY;if(e=0<e?0:e,(e=Math.abs(e))>=Math.abs(a))r(o.length-1,o);else for(var n=0;n<o.length;n++)if(n<o.length-1){if(e>=o[n].top&&e<o[n+1].top){r(n,o);break}}else if(n===o.length-1){r(n,o);break}}))}(e)})}),T=function(i){function e(t){var e=i(this).closest(".mobile-table-view-cell");e.siblings().find(".mobile-table-view-collapse").hide(),e.siblings().find(".mobile-table-view-ttl").removeClass("active"),e.find(".mobile-table-view-ttl").toggleClass("active"),e.siblings().find(".iconfont").removeClass("active"),e.find(".iconfont").toggleClass("active"),e.siblings().find(".mobile-table-view-collapse").removeClass("active");var n=i(this).parents(".mobile-table-view-cell").find(".mobile-table-view-collapse");n.fadeToggle(),n.addClass("active")}i(".mobile-table-view ").tap(".mobile-table-view-ttl",function(t){e.call(this,t)}),i(".mobile-table-view ").tap(".iconfont",function(t){e.call(this,t)})}(mobile),w=void(g=mobile)(function(){g(".mobile-overflow").each(function(t,e){!function(l){var h=g(l).find(".mobile-overflow-content");g(h).setTransform("translateZ",.01);var c=0,f=0,u=0,d=!1,m=!0,p=0;g(l).height(),h.height(),g(l).touchstart(function(t){var e=t.changedTouches[0];f=e.clientY,u=e.clientX,c=g(h).getTransform("translateY"),g(h).css("overflow-y","scroll"),m=!(d=!1),g(l).height(),h.transition("none")}),g(l).touchmove(function(t){g(l).height();var e=t.changedTouches[0],n=e.clientY;p=n-f;var i=e.clientX-u,a=n-f,s=Math.abs(i),o=Math.abs(a);if(m&&s!=o&&(m=!1,o<s&&(d=!0)),d)t.preventDefault();else if(h.height(),0<=c+p){var r=h[0].scrollTop;0===r&&(t.preventDefault(),h.css("overflow","hidden"))}}),g(l).touchendcancel(function(t){h.css("overflow","scroll")}),g(l).windowcancel(function(t){})}(e)})});t.reset=e,t.commonStyle=n,t.scrollTopBottom=r,t.scrollLeftRight=h,t.slide=c,t.tab=f,t.aside=u,t.fullpage=d,t.indexlist=b,t.spy=y,t.tableview=T,t.overflow=w,Object.defineProperty(t,"__esModule",{value:!0})});
=======
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

/*
 *	移动端 公共类库
 * 作者：724485868@qq.com
 */

(function (global, factory) {

	//  cmd commonjs
	if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		module.exports = factory(global);
	}

	// amd requirejs
	else if (typeof define === "function" && define.amd) {
			define(function () {
				return factory(global);
			});
		}

		// cmd seajs
		else if (typeof define === "function" && define.cmd) {
				define(function (require, exports, module) {
					module.exports = factory(global);
				});
			} else {
				factory(global);
			}
})(typeof window !== "undefined" ? window : window, function (window) {

	var _mobile = window.mobile = window.m;
	var _$ = window.$;

	// 创建mobile对象
	var Mobile = window.$ = window.m = window.mobile = function (selector, content) {

		if (typeof selector === "function" && arguments.length === 1) {
			Mobile.ready(selector);
			return;
		}
		return new Mobile.fn.init(selector, content);
	};

	// 版本号
	Mobile.version = "1.0.0";

	// 可计算值 的列表
	Mobile.numberList = ["left", "top", "right", "bottom", "width", "height"];

	// 私有函数
	var _block = ["body", "div", "p", "table", "tr", "thead", "tbody", "tfoot", "h1", "h2", "h3", "h4", "h5", "h6", "article", "aside", "details", "figcaption", "figure", "footer", "header", "hgroup", "main", "menu", "nav", "section", "summary", "ul", "li", "ol", "dl", "dt", "dd", "fieldset"];
	var _inlineBlock = ["img", "audio", "canvas", "progress", "video", "text-area", "select", "input", "button"];

	// 查找元素显示类型
	function _getElementType(nodeName) {
		var _type = "inline";

		// block
		Mobile.each(_block, function (i, v) {
			if (v === nodeName) {
				_type = "block";
				return false;
			}
		});

		// inlineblock
		Mobile.each(_inlineBlock, function (i, v) {
			if (v === nodeName) {
				_type = "inline-block";
				return false;
			}
		});

		return _type;
	}

	// 递归查找父元素
	function _searchParents(el, fn) {

		if (el.parentElement) {
			if (fn(el.parentElement)) {
				return el.parentElement;
			}
		}

		if ((el.nodeName || "").toLowerCase() === "html") {
			return;
		}

		return _searchParents(el.parentElement, fn);
	}

	// prototype
	Mobile.fn = Mobile.prototype = {

		init: function init(selector, content) {

			var arrs = [];
			this.length = 0; // init length=0;
			if (!content) {

				// 字符串
				if (typeof selector === "string") {
					if (selector.trim().length === 0) {
						return this;
					}
					var els = document.querySelectorAll(selector);
					Array.prototype.push.apply(this, els);
				} else if ((typeof selector === "undefined" ? "undefined" : _typeof(selector)) === "object") {

					// 遍历数组型对象
					if (selector.hasOwnProperty("length") && selector.length > 0) {
						Mobile.each(selector, function (i, v) {
							arrs.push(v);
						});
					} else if (selector.nodeType === Node.ELEMENT_NODE || selector.nodeType === Node.DOCUMENT_NODE || selector === window) {
						// 单例对象 
						arrs.push(selector);
					}

					Array.prototype.push.apply(this, arrs);
				}
			} else {

				if (typeof content === "string" && typeof selector === "string") {

					if (content.trim().length === 0) {
						return this;
					}
					if (selector.trim().length === 0) {
						return this;
					}

					var p = document.querySelectorAll(content);
					Mobile.each(p, function () {
						var childElements = this.querySelectorAll(selector);
						for (var i = 0; i < childElements.length; i++) {
							arrs.push(childElements[i]);
						}
					});
					Array.prototype.push.apply(this, arrs);
				} else if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object" && typeof selector === "string") {
					if (selector.trim().length === 0) {
						return this;
					}
					// 遍历数组型对象
					if (content.hasOwnProperty("length") && content.length > 0) {

						Mobile.each(content, function () {
							var childElements = this.querySelectorAll(selector);
							for (var i = 0; i < childElements.length; i++) {
								arrs.push(childElements[i]);
							}
						});
						Array.prototype.push.apply(this, arrs);
					} else if (content.nodeType === Node.ELEMENT_NODE || content.nodeType === Node.DOCUMENT_NODE) {
						var childElements = content.querySelectorAll(selector);
						Array.prototype.push.apply(this, childElements);
					}
				}
			}
			return this;
		}

		// 将init函数作为实例化的mobile原型。 
	};Mobile.fn.init.prototype = Mobile.fn;

	Mobile.extend = Mobile.fn.extend = function (obj) {
		if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
			for (var i in obj) {
				this[i] = obj[i];
			}
		}

		return this;
	};

	/*extend instantiation function 实例方法*/
	Mobile.fn.extend({

		//each
		each: function each(fn) {
			Mobile.each(this, fn);
		},

		// css
		css: function css(attr, value) {

			// get  返回第一个一个值
			if (arguments.length === 1 && typeof attr === "string") {

				var _css = "";
				Mobile.each(this, function (i, v) {

					if (window.getComputedStyle) {
						_css = window.getComputedStyle(v, null)[attr.trim()];
						if (Mobile.isEqual(Mobile.numberList, attr.trim())) {
							_css = parseFloat(_css) || 0;
						}
					}
					// ie8
					else if (v.currentStyle) {
							_css = v.currentStyle[attr];
						} else {
							_css = v.style[attr];
						}

					return false;
				});
				return _css;
			}

			// set
			if (arguments.length === 2) {

				Mobile.each(this, function () {
					if (Mobile.isEqual(Mobile.numberList, attr.trim())) {
						this.style[attr.trim()] = Number(value) ? Number(value).toString() + "px" : value;
					} else {
						this.style[attr.trim()] = value;
					}
				});
			}

			//set 对象的值
			if (arguments.length === 1 && (typeof attr === "undefined" ? "undefined" : _typeof(attr)) === "object") {
				Mobile.each(this, function (i, v) {
					for (var _attr in attr) {
						if (Mobile.isEqual(Mobile.numberList, _attr.trim())) {
							this.style[_attr] = Number(attr[_attr]) ? Number(attr[_attr]).toString() + "px" : attr[_attr];
						} else {
							this.style[_attr] = attr[_attr];
						}
					}
				});
			}

			return this;
		},

		// find
		find: function find(selector) {
			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {
				var _arr = obj[i].querySelectorAll(selector);
				Mobile.each(_arr, function (i, v) {
					arr.push(v);
				});
				delete obj[i];
			}
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		// text
		text: function text(value) {

			//set 对象的值
			var _text = "";
			if (arguments.length === 0) {
				Mobile.each(this, function () {
					_text += this.innerText;
				});
				return _text;
			}
			if (arguments.length === 1) {
				Mobile.each(this, function () {
					this.innerText = value;
				});
			}
			return this;
		},

		// val
		val: function val(value) {

			//set 对象的值
			var _val = "";
			if (arguments.length === 0) {
				Mobile.each(this, function () {
					_val += this.value;
				});
				return _val;
			}
			if (arguments.length === 1) {
				Mobile.each(this, function () {
					this.value = value;
				});
			}
			return this;
		},

		// html
		html: function html(value) {

			//set 对象的值
			var _html = "";
			if (arguments.length === 0) {
				Mobile.each(this, function () {
					_html += this.innerHTML;
				});
				return _html;
			}
			if (arguments.length === 1) {
				Mobile.each(this, function () {
					this.innerHTML = value;
				});
			}
			return this;
		},

		// attr
		attr: function attr(_attr2, value) {

			// 返回第一个属性值
			if (arguments.length === 1 && typeof _attr2 === "string") {
				var _attr = undefined;
				Mobile.each(this, function () {
					_attr = this.getAttribute(_attr2);
					if (_attr === null) {
						_attr = undefined;
					}
					return false;
				});
				return _attr;
			}

			if (arguments.length === 2) {

				Mobile.each(this, function () {
					this.setAttribute(_attr2, value.toString());
				});
			}
			return this;
		},

		// hasAttr
		hasAttr: function hasAttr(attr) {

			// 是否含有元素的属性
			var _attr = false;
			if (arguments.length === 1 && typeof attr === "string") {

				Mobile.each(this, function () {
					_attr = this.hasAttribute(attr);
					return false;
				});
				return _attr;
			}
		},

		// removeAttr
		removeAttr: function removeAttr(attr) {

			// 返回第一个属性值
			if (arguments.length === 1 && typeof attr === "string") {

				Mobile.each(this, function () {
					this.removeAttribute(attr);
				});
			}

			return this;
		},

		// addClass
		addClass: function addClass(className) {

			if (typeof className === "string") {
				className = className.split(/\s+/);
			} else {

				return this;
			}

			if (arguments.length === 1) {

				Mobile.each(this, function () {
					for (var y = 0; y < className.length; y++) {
						if (className[y]) {
							this.classList.add(className[y]);
						}
					}
				});
			}

			return this;
		},

		// toggleClass
		toggleClass: function toggleClass(className) {

			if (typeof className === "string") {
				className = className.split(/\s+/);
			} else {

				return this;
			}

			if (arguments.length === 1) {

				Mobile.each(this, function () {
					for (var y = 0; y < className.length; y++) {
						if (className[y]) {
							if (this.classList.contains(className[y])) {
								this.classList.remove(className[y]);
							} else {
								this.classList.add(className[y]);
							}
						}
					}
				});
			}

			return this;
		},

		//  hasclass
		hasClass: function hasClass(className) {
			var ishasClass = false;
			if (arguments.length === 1) {

				Mobile.each(this, function () {
					ishasClass = this.classList.contains(className);
					return false;
				});
			}

			return ishasClass;
		},

		// removeClass
		removeClass: function removeClass(className) {

			if (typeof className === "string") {
				className = className.split(/\s+/);
			} else {

				return this;
			}

			if (arguments.length === 1) {

				Mobile.each(this, function () {
					for (var y = 0; y < className.length; y++) {
						if (className[y]) {
							this.classList.remove(className[y]);
						}
					}
				});
			}
			return this;
		},

		// parent 
		parent: function parent() {
			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {
				var _arr = obj[i].parentElement;
				if (_arr) {
					arr.push(_arr);
				}
				delete obj[i];
			}
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		// parents 
		parents: function parents(selector) {
			selector = typeof selector === "string" ? selector : "";
			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {

				var p = _searchParents(obj[i], function (elm) {
					return Mobile.checkSelector(elm, selector);
				});

				delete obj[i];
				if (p) {
					arr.push(p);
				}
			}
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		// closest 
		closest: function closest(selector) {
			selector = typeof selector === "string" ? selector : "";
			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {
				var p;
				if (Mobile.checkSelector(obj[i], selector)) {
					arr.push(obj[i]);
				} else {
					p = _searchParents(obj[i], function (elm) {
						return Mobile.checkSelector(elm, selector);
					});
				}
				delete obj[i];
				if (p) {
					arr.push(p);
				}
			}
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		// eq 
		eq: function eq(index) {
			if (typeof index !== "number") {
				throw Error("index property must is number type");
			}
			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {
				if (i === index) {
					arr.push(obj[i]);
				}
				delete obj[i];
			}
			delete obj.length;

			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		//  first
		first: function first() {

			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {
				if (i === 0) {
					arr.push(obj[i]);
				}
				delete obj[i];
			}
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		//  prev
		prev: function prev() {
			var arr = [];
			var obj = m(this);
			Mobile.each(obj, function (i, v) {
				var _prev = v.previousElementSibling;
				if (_prev) {
					arr.push(_prev);
				}
				delete v[i];
			});
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		//  next
		next: function next() {
			var arr = [];
			var obj = m(this);
			Mobile.each(obj, function (i, v) {
				var _next = v.nextElementSibling;
				if (_next) {
					arr.push(_next);
				}
				delete v[i];
			});
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		//  siblings
		siblings: function siblings() {
			var arr = [];
			var obj = m(this);
			Mobile.each(obj, function (i, v) {
				var _children = v.parentElement.children;
				var _index = m(v).index();

				for (var y = 0; y < _children.length; y++) {
					if (y !== _index) {
						arr.push(_children[y]);
					}
				}
				delete v[i];
			});
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		//  last
		last: function last() {

			var arr = [];
			var obj = m(this);
			for (var i = 0; i < obj.length; i++) {
				var _length = obj.length > 0 ? obj.length - 1 : 0;
				if (i === _length) {
					arr.push(obj[i]);
				}
				delete obj[i];
			}
			delete obj.length;
			Array.prototype.push.apply(obj, arr);
			return obj;
		},

		//  heigth
		height: function height() {

			if (arguments.length === 0) {
				var _h = 0;
				Mobile.each(this, function (i, v) {

					// window

					if (this === window) {
						_h = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
					} else if (this === document) {
						_h = m(document.documentElement).css("height"); //document.documentElement.offsetHeight;
					} else {
						_h = m(this).css("height");
					}
					_h = parseFloat(_h);

					return false;
				});
				return _h;
			}

			// set
			else if (arguments.length === 1) {
					var _value = arguments[0];
					Mobile.each(this, function () {
						m(this).css("height", _value);
					});
				}
			return this;
		},

		//  outerHeight
		outerHeight: function outerHeight() {

			if (arguments.length === 0) {
				var _h = 0;
				Mobile.each(this, function (i, v) {

					// window

					if (this === window) {
						_h = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
					} else if (this === document) {
						_h = m(document.documentElement).eq(0) && m(document.documentElement).eq(0)[0].offsetHeight; //document.documentElement.offsetHeight;
					} else {
						_h = m(this).eq(0) && m(this).eq(0)[0].offsetHeight;
					}
					_h = parseFloat(_h);

					return false;
				});
				return _h;
			}

			// set
			else if (arguments.length === 1) {
					var _value = arguments[0];
					Mobile.each(this, function () {
						m(this).css("height", _value);
					});
				}
			return this;
		},

		//  outWidth
		outerWidth: function outerWidth() {

			if (arguments.length === 0) {
				var _w = 0;
				Mobile.each(this, function () {

					// window
					if (this === window) {
						_w = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
					} else if (this === document) {
						_w = m(document.documentElement).eq(0) && m(document.documentElement).eq(0)[0].offsetWidth; //document.documentElement.offsetWidth;
					} else {
						_w = m(this).eq(0) && m(this).eq(0)[0].offsetWidth;
					}
					_w = parseFloat(_w);
					return false;
				});

				return _w;
			}

			// set
			else if (arguments.length === 1) {
					var _value = arguments[0];
					Mobile.each(this, function () {
						m(this).css("width", _value);
					});
				}

			return this;
		},
		//  width
		width: function width() {

			// get
			if (arguments.length === 0) {
				var _w = 0;
				Mobile.each(this, function () {

					// window
					if (this === window) {

						_w = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
					} else if (this === document) {
						_w = m(document.documentElement).css("width"); //document.documentElement.offsetWidth;
					} else {
						_w = m(this).css("width");
					}
					_w = parseFloat(_w);
					return false;
				});

				return _w;
			}

			// set
			else if (arguments.length === 1) {
					var _value = arguments[0];
					Mobile.each(this, function () {
						m(this).css("width", _value);
					});
				}

			return this;
		},

		// clientTop   目前高级浏览器支持都不一样   以后版本全部支持
		clientTop: function clientTop() {
			var _top = 0;
			Mobile.each(this, function () {
				_top = this.getBoundingClientRect().top;
				return false;
			});
			return _top;
		},

		// clientLeft 目前高级浏览器支持都不一样   以后版本全部支持
		clientLeft: function clientLeft() {
			var _left = 0;
			Mobile.each(this, function () {
				_left = this.getBoundingClientRect().left;
				return false;
			});
			return _left;
		},

		// offsetTop
		offsetTop: function offsetTop() {
			var _top = 0;
			Mobile.each(this, function () {
				_top = this.offsetTop;
				return false;
			});
			return _top;
		},

		// offsetLeft
		offsetLeft: function offsetLeft() {
			var _left = 0;
			Mobile.each(this, function () {
				_left = this.offsetLeft;
			});
			return _left;
		},

		// offset
		offset: function offset() {
			var obj = {};
			Mobile.each(this, function () {
				obj.left = this.offsetLeft;
				obj.top = this.offsetTop;
			});
			return obj;
		},

		// index
		index: function index(obj) {
			var _index = -1;
			if (arguments.length === 0) {
				Mobile.each(this, function (i, v) {
					if (v.parentElement) {
						var els = v.parentElement.children;
						for (var i = 0; i < els.length; i++) {
							if (els[i].isEqualNode(v)) {
								_index = i;
							}
						}
					}

					return false;
				});
			}

			return _index;
		},

		//  remove
		remove: function remove(obj) {
			var arr = [];
			var $this = this;
			Mobile.each(this, function (i, v) {
				if (v.parentElement) {
					var els = this.parentElement;
					var _indexObj = els.removeChild(this);
					arr.push(_indexObj);
				}
				delete $this[i];
			});

			Array.prototype.push.apply(this, arr);
			return this;
		},

		//  append
		append: function append(obj) {
			if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj.length && obj.length > 0) {
				Mobile.each(this, function () {
					for (var i = 0; i < obj.length; i++) {
						this.appendChild(obj[i]);
					}
				});
			} else if (typeof obj === "string") {
				Mobile.each(this, function () {
					this.innerHTML += obj;
				});
			} else {
				Mobile.each(this, function () {
					this.appendChild(obj);
				});
			}

			return this;
		},

		//  prepend
		prepend: function prepend(obj) {
			if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj.length && obj.length > 0) {
				Mobile.each(this, function () {
					for (var i = obj.length; i > 0; i--) {
						this.insertBefore(obj[i - 1], this.childNodes[0]);
					}
				});
			} else if (typeof obj === "string") {
				var els = Mobile.htmlStringToDOM(obj);
				Mobile.each(this, function () {
					this.insertBefore(els, this.childNodes[0]);
				});
			} else {
				Mobile.each(this, function () {
					this.insertBefore(obj, this.childNodes[0]);
				});
			}

			return this;
		},

		//  clone
		clone: function clone(obj) {
			var _obj;
			Mobile.each(this, function () {
				_obj = this.cloneNode(true);
				return false;
			});
			return _obj;
		}

	});

	/*animate*/
	Mobile.fn.extend({

		// show
		show: function show() {

			Mobile.each(this, function (i, el) {
				clearInterval(this.clearTimeId);
				this.isshow = true;
				var _showType = this.showValue || "none";
				var _nodeName = this.nodeName.toLowerCase();
				if (_showType === "none") {
					_showType = _getElementType(_nodeName);
				}

				this.style.display = _showType;
				this.style.opacity = 1;
			});
			return this;
		},

		// hide
		hide: function hide() {

			Mobile.each(this, function (i, el) {
				clearInterval(this.clearTimeId);
				this.isshow = false;
				var _v = m(this).css("display") || "none";
				this.showValue = _v;
				this.style.display = "none";
				this.style.opacity = 0;
			});
			return this;
		},

		// toggle
		toggle: function toggle() {

			Mobile.each(this, function () {

				var _v = m(this).css("display") || "none";
				if (_v.trim() != "none") {
					m(this).hide();
				} else {
					m(this).show();
				}
			});
			return this;
		},

		// fadeIn
		fadeIn: function fadeIn(time) {

			Mobile.each(this, function (i, el) {

				clearInterval(this.clearTimeId);
				var _showType = "";
				this.isshow = true;
				if (!this.firstclick) {
					this.firstclick = true;
					_showType = m(this).css("display") || "none";
					if (_showType === "none") {
						this.style.opacity = 0;
					} else {
						this.style.opacity = 1;
					}
				} else {
					_showType = this.showValue || "none";
					this.style.opacity = parseFloat(m(this).css("opacity")) || 0;
				}

				var _nodeName = this.nodeName.toLowerCase();
				var _opacity = parseFloat(m(this).css("opacity")) || 0;
				if (_showType == "none") {
					_showType = _getElementType(_nodeName);
				}

				this.style.display = _showType;
				this.showValue = _showType;
				time = typeof time === "number" ? time : 400;
				var opt = 1000;
				var fx = 30;
				var t = time / fx;
				var speed = opt / t;
				this.clearTimeId = setInterval(function () {
					var v = parseFloat(el.style.opacity) || 0;
					v = v * 1000;
					el.style.opacity = (speed + v) / 1000;
					v = (parseFloat(el.style.opacity) || 0) * 1000;

					if (v + speed > opt) {
						el.style.opacity = opt / 1000;
						el.style.opacity = 1;
						el.style.display = _showType;
						clearInterval(this.clearTimeId);
					}
				}.bind(this), fx);
			});
			return this;
		},

		// fadeOut
		fadeOut: function fadeOut(time) {

			Mobile.each(this, function (i, el) {
				clearInterval(this.clearTimeId);
				this.firstclick = true;
				this.isshow = false;
				var _v = m(this).css("display") || "none";
				if (_v != "none") {
					this.style.opacity = parseFloat(el.style.opacity) || 1;
				}
				this.showValue = _v;
				time = typeof time === "number" ? time : 400;
				var opt = 1000;
				var fx = 30;
				var t = time / fx;
				var speed = opt / t;
				this.clearTimeId = setInterval(function () {
					var v = parseFloat(el.style.opacity) || 0;
					v = v * 1000;
					el.style.opacity = (v - speed) / 1000;
					v = (parseFloat(el.style.opacity) || 0) * 1000;
					if (v - speed < 0) {
						el.style.opacity = 0;
						el.style.display = "none";
						clearInterval(this.clearTimeId);
					}
				}.bind(this), fx);
			});
			return this;
		},

		// fadeToggle
		fadeToggle: function fadeToggle(time) {

			Mobile.each(this, function () {
				var _v = m(this).css("display") || "none";
				if (typeof this.isshow != "undefined") {
					if (this.isshow) {
						m(this).fadeOut(time);
						this.isshow = false;
					} else {
						m(this).fadeIn(time);
						this.isshow = true;
					}
				} else {
					if (_v != "none") {
						if (!this.firstclick) {
							m(this).fadeOut(time);
							this.isshow = false;
						} else {
							m(this).fadeIn(time);
							this.isshow = true;
						}
					} else {
						if (this.firstclick) {
							m(this).fadeOut(time);
							this.isshow = false;
						} else {
							m(this).fadeIn(time);
							this.isshow = true;
						}
					}
				}
			});
			return this;
		},

		//  windowTop
		windowTop: function windowTop(y, time) {

			// get
			if (arguments.length === 0) {
				return parseFloat(window.pageYOffset) || 0;
			}

			// set
			time = typeof time === "number" ? time : 400;
			y = typeof y === "number" ? y : parseFloat(y);
			y = isNaN(y) ? 0 : y;
			var fx = 20;
			var speed = 20;
			Mobile.each(this, function () {
				this.clearTimeId = this.clearTimeId || 0;
				clearInterval(this.clearTimeId);

				if (this !== window) {
					throw new Error("element must is window");
				}
				var speed1 = time / fx;
				var windowStartTop = parseFloat(window.pageYOffset) || 0;
				var speed2 = Math.abs(windowStartTop - y);
				speed = speed2 / speed1;

				if (windowStartTop > y) {
					this.clearTimeId = setInterval(function () {
						windowStartTop = windowStartTop - speed;
						window.scrollTo(0, windowStartTop);
						if (windowStartTop - speed < y) {
							window.scrollTo(0, y);
							clearInterval(this.clearTimeId);
						}
					}, fx);
				} else {
					if (windowStartTop === y) {
						return;
					}
					this.clearTimeId = setInterval(function () {
						windowStartTop = windowStartTop + speed;
						window.scrollTo(0, windowStartTop);
						if (windowStartTop + speed > y) {
							window.scrollTo(0, y);
							clearInterval(this.clearTimeId);
						}
					}, fx);
				}

				return false;
			});
			return this;
		},

		//  scrollTop
		scrollTop: function scrollTop(size) {

			// get
			if (arguments.length === 0) {
				var _size = 0;
				Mobile.each(this, function () {
					if (this === window || this === document) {
						_size = window.pageYOffset || 0;
					} else {
						_size = this.scrollTop;
					}
					return false;
				});
				return _size;
			} else {
				Mobile.each(this, function () {
					if (this === window || this === document) {
						window.scrollTo(0, parseFloat(size));
					} else {
						this.scrollTop = parseFloat(size);
					}
				});

				// set
				return this;
			}
		},

		// transition
		transition: function transition(option, time, ease, delay, fn) {

			ease = typeof ease === "string" ? ease : "ease";
			delay = typeof delay === "number" ? delay : 0;
			var _transition = "all " + time / 1000 + "s  " + ease + " " + delay / 1000 + "s";

			if (typeof option === "string") {

				if (arguments.length === 1) {
					_transition = option;
				} else if (arguments.length > 1) {
					_transition = option + " " + time / 1000 + "s  " + ease + " " + delay / 1000 + "s";
				}

				Mobile.each(this, function () {
					this.style.MozTransition = _transition;
					this.style.msTransition = _transition;
					this.style.webkitTransition = _transition;
					this.style.OTransition = _transition;
					this.style.transition = _transition;
				});

				return this;
			}

			// option is object	
			if ((typeof option === "undefined" ? "undefined" : _typeof(option)) != "object") {
				return;
			}
			Mobile.each(this, function (i, el) {
				time = typeof time === "number" ? time : 400;
				el.setTimeout = el.setTimeout || 0; // 第一次执行
				el.isEnd = el.isEnd || false; // 动画是否完毕

				if (el.isEnd === false) {

					// 第一次执行
					if (!el.isStart) {
						el.isStart = true;
						el.one = option; // 记录的第一次对象属性
						el.setTimeout = time + el.setTimeout + delay;
						el.style.MozTransition = _transition;
						el.style.msTransition = _transition;
						el.style.webkitTransition = _transition;
						el.style.OTransition = _transition;
						el.style.transition = _transition;
						for (var name in option) {
							el.style[name] = option[name];
						}

						//  第一次执行回调函数
						if (typeof fn === "function") {
							var clearTimeId2 = setTimeout(function () {
								fn(el);
								clearTimeout(clearTimeId2);
							}, time + delay);
						}
					} else {
						var clearTimeId = setTimeout(function () {

							el.style.MozTransition = _transition;
							el.style.msTransition = _transition;
							el.style.webkitTransition = _transition;
							el.style.OTransition = _transition;
							el.style.transition = _transition;

							for (var name in option) {
								el.style[name] = option[name];
							}
							//  执行回调函数
							if (typeof fn === "function") {
								var clearTimeId2 = setTimeout(function () {
									fn(el);
									clearTimeout(clearTimeId2);
								}, time + delay);
							}
							clearTimeout(clearTimeId);
						}, el.setTimeout);

						el.setTimeout = time + el.setTimeout + delay;
					}
				}
			});

			return this;
		},

		// transitionEnd
		transitionEnd: function transitionEnd(isReset, fn) {

			// 是否回复到第一次的状态
			//isReset = typeof isReset === "boolean" ? isReset : false;
			Mobile.each(this, function (i, el) {

				// 第一次执行
				el.setTimeout = el.setTimeout || 0;

				// 动画是否完毕
				el.isEnd = true;
				//console.log("========end=======")
				//	console.log(this.isEnd)

				// 动画是否完毕 回调函数
				var clearTimeId = setTimeout(function () {
					el.isEnd = false;
					el.setTimeout = 0;
					el.isStart = false;

					if (typeof isReset === "function") {
						isReset(el);
					} else if (typeof isReset === "boolean" && isReset === true) {

						for (var name in el.one) {
							el.style[name] = el.one[name];
						}
						var _v = "none";
						el.style.MozTransition = _v;
						el.style.msTransition = _v;
						el.style.webkitTransition = _v;
						el.style.OTransition = _v;
						el.style.transition = _v;
					}

					if (typeof fn === "function") {
						fn(el);
					}
				}, el.setTimeout + 20);
			});
		},

		// addAnimate
		addAnimate: function addAnimate(name, duration, easing, delay, count, direction) {
			duration = typeof duration === "number" && duration !== 0 ? duration / 1000 : 0.4;
			easing = typeof easing === "string" ? easing : "ease";
			delay = typeof delay === "number" && delay !== 0 ? delay / 1000 : 0;
			count = count || 1;
			direction = typeof direction === "string" ? direction : "normal";

			var _animate = name + " " + duration + "s" + " " + easing + " " + delay + "s" + " " + count + " " + direction;
			Mobile.each(this, function (i, el) {
				this.style.webkitAnimation = _animate;
				this.style.msAnimation = _animate;
				this.style.MozAnimation = _animate;
				this.style.OAnimation = _animate;
				this.style.animate = _animate;
			});

			return this;
		},

		// removeAnimate
		removeAnimate: function removeAnimate(name) {
			var _v = "none";
			Mobile.each(this, function (i, el) {
				this.style.webkitAnimation = _v;
				this.style.msAnimation = _v;
				this.style.MozAnimation = _v;
				this.style.OAnimation = _v;
				this.style.animate = _v;
			});
			return this;
		},

		// animateRuning
		animateRuning: function animateRuning() {
			var run = "running";
			Mobile.each(this, function (i, el) {
				this.style.webkitAnimationPlayState = run;
				this.style.msAnimationPlayState = run;
				this.style.MozAnimationPlayState = run;
				this.style.OAnimationPlayState = run;
				this.style.animationPlayState = run;
			});
			return this;
		},

		// animateRuning
		animatePaused: function animatePaused() {
			var paused = "paused";
			Mobile.each(this, function (i, el) {
				this.style.webkitAnimationPlayState = paused;
				this.style.msAnimationPlayState = paused;
				this.style.MozAnimationPlayState = paused;
				this.style.OAnimationPlayState = paused;
				this.style.animationPlayState = paused;
			});
			return this;
		},

		// animationFillMode
		animationFillMode: function animationFillMode(mode) {
			var mode = typeof mode === "string" ? mode : "forwards";
			Mobile.each(this, function (i, el) {
				this.style.webkitAnimationFillMode = mode;
				this.style.msAnimationFillMode = mode;
				this.style.MozAnimationFillMode = mode;
				this.style.OAnimationFillMode = mode;
				this.style.AnimationFillMode = mode;
			});
			return this;
		},

		// animateToggle
		animatePalyToggle: function animatePalyToggle() {

			Mobile.each(this, function (i, el) {
				var _state = m(this).css("animation-play-state") || "";

				if (_state.trim() === "paused") {
					m(this).animateRuning();
				} else {
					m(this).animatePaused();
				}
			});
			return this;
		}

	});

	// bind enevt 绑定事件
	Mobile.fn.extend({
		on: function on(type) {

			var $this = this;
			var isonebind = $this.length > 0 && $this.bindOneElementEvent ? true : false; // m(el).one()只绑定一次事件

			// 正常绑定事件
			if (arguments.length >= 2 && typeof arguments[1] === "function") {
				var f = function f(event) {
					handler.call(this, event);

					// m(el).one()只绑定一次事件
					if (isonebind) {
						m(this).off(type, f, bl);
						m.events.on(type, f);
						$this.bindOneElementEvent = false;
					}
				};

				var handler = arguments[1];
				var bl = typeof arguments[2] === "boolean" ? arguments[2] : false;

				Mobile.each(this, function () {
					if (this.addEventListener) {
						this.addEventListener(type, f, bl);
					}
					//ie8
					//					else if(this.attachEvent) {
					//						this.attachEvent("on" + type, f, bl)
					//					} else {
					//						this["on" + type] =f /*直接赋给事件*/
					//					}
				});

				m.events.on(type, f);
			}

			// 正常绑定事件传object值
			if (arguments.length >= 3 && _typeof(arguments[1]) === "object" && typeof arguments[2] === "function") {
				var _f = function _f(event) {
					event.data = obj;
					handler.call(this, event);

					// m(el).one()只绑定一次事件
					if (isonebind) {
						m(this).off(type, _f, bl);
						m.events.on(type, _f);
						$this.bindOneElementEvent = false;
					}
				};

				var obj = arguments[1];
				var handler = arguments[2];
				var bl = typeof arguments[3] === "boolean" ? arguments[3] : false;

				Mobile.each(this, function () {
					if (this.addEventListener) {
						this.addEventListener(type, _f, bl);
					}
				});

				m.events.on(type, _f);
			}

			// 委托绑定事件
			if (arguments.length >= 3 && typeof arguments[1] === "string" && typeof arguments[2] === "function") {
				var _f2 = function _f2(event) {
					if (Mobile.checkSelector(event.target, el)) {
						handler.call(event.target, event);

						// m(el).one()只绑定一次事件
						if (isonebind) {
							m(this).off(type, _f2, bl);
							m.events.on(type, _f2);
							$this.bindOneElementEvent = false;
						}
					}
				};

				var el = arguments[1].trim();
				var handler = arguments[2];
				var bl = typeof arguments[3] === "boolean" ? arguments[3] : false;

				Mobile.each(this, function () {
					if (this.addEventListener) {
						this.addEventListener(type, _f2, bl);
					}
				});

				m.events.on(type, _f2);
			}

			// 委托绑定事件传object值
			if (arguments.length >= 4 && typeof arguments[1] === "string" && _typeof(arguments[2]) === "object" && typeof arguments[3] === "function") {
				var _f3 = function _f3(event) {
					if (Mobile.checkSelector(event.target, el)) {
						event.data = obj;
						handler.call(event.target, event);

						// m(el).one()只绑定一次事件
						if (isonebind) {
							m(this).off(type, _f3, bl);
							m.events.on(type, _f3);
							$this.bindOneElementEvent = false;
						}
					}
				};

				var el = arguments[1].trim();
				var obj = arguments[2];
				var handler = arguments[3];
				var bl = typeof arguments[4] === "boolean" ? arguments[4] : false;

				Mobile.each(this, function () {
					if (this.addEventListener) {
						this.addEventListener(type, _f3, bl);
					}
				});

				m.events.on(type, _f3);
			}

			return this;
		},

		off: function off(type, handler) {

			if (arguments.length === 1) {
				Mobile.each(this, function () {
					for (var i = m.events.props[type].length - 1; i >= 0; i--) {

						if (this.removeEventListener) {
							this.removeEventListener(type, m.events.props[type][i], false);
						} else {
							this.deattachEvent("on" + type, m.events.props[type][i]);
						}

						Mobile.events.off(type, m.events.props[type][i]);
					}
				});

				return;
			}
			Mobile.each(this, function () {
				if (this.removeEventListener) this.removeEventListener(type, handler, false);else if (this.deattachEvent) {
					/*IE*/
					this.deattachEvent('on' + type, handler);
				} else {

					// 直接赋给事件
					this["on" + type] = null;
				}
				Mobile.events.off(type, handler);
			});

			return this;
		},

		// 自定义事件
		trigger: function trigger(type, obj) {

			Mobile.each(this, function () {
				obj = obj || {};
				var btnEvent = document.createEvent("CustomEvent");
				btnEvent.initCustomEvent(type, true, false, obj);
				this.dispatchEvent(btnEvent);
			});
		},
		emit: function emit(type, obj) {
			Mobile.each(this, function () {
				m(this).trigger(type, obj);
			});
		},

		one: function one() {
			var args = arguments;
			var $this = this;

			//  只绑定一次事件
			this.bindOneElementEvent = true;
			Mobile.each($this, function (i, v) {
				m(this).on.apply($this, args);
			});
		},

		// click
		click: function click(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("click", fn, bl);
			});
		},

		// touchstart
		touchstart: function touchstart(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("touchstart", fn, bl);
			});
		},

		// touchmove
		touchmove: function touchmove(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("touchmove", fn, bl);
			});
		},

		// touchend
		touchend: function touchend(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("touchend", fn, bl);
			});
		},

		// touchcancel
		touchcancel: function touchcancel(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("touchcancel", fn, bl);
			});
		},

		// touchend 和 touchcancel 同时绑定事件
		touchendcancel: function touchendcancel(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("touchend", fn, bl);
				m(this).on("touchcancel", fn, bl);
			});
		},

		// window canel 绑定事件
		windowcancel: function windowcancel(fn) {
			var $this = this[0] || {};
			m(window).on("touchstart", function (event) {

				m(event.target).one("touchend", function (event) {
					fn.call($this, event);
				});
			});
		},

		// tap
		tap: function tap() {
			var args = arguments;
			var fn = function fn() {};
			var deletage = "";
			var bl = false;

			Mobile.each(this, function (i, v) {

				var isMOve = true; // 判断是否往上拖动
				var isMOveFirst = true;

				var startX = 0;
				var startY = 0;
				var isDeleDageTarget = true; // 是否是委托事件

				function start(event) {
					event.preventDefault();
					isMOve = true;
					isMOveFirst = true;
					var touch = event.changedTouches[0];
					startX = touch.clientX;
					startY = touch.clientY;
				}

				function move(event) {
					event.preventDefault();
					var touch = event.changedTouches[0];
					var nowX = touch.clientX;
					var nowY = touch.clientY;
					var _x = Math.abs(nowX - startX);
					var _y = Math.abs(nowY - startY);
					if ((_x > 1 || _y > 1) && isMOveFirst) {
						isMOve = false;
						isMOveFirst = false;
					}
				}

				function end(event) {
					event.preventDefault();
					var _target;
					if (isDeleDageTarget) {
						_target = this;
					} else {
						_target = event.target;
					}
					if (isMOve) {
						if (typeof fn === "function") {
							fn.call(_target, event);
						}
					}
				}

				// 使用事件	
				if (args.length >= 1 && typeof args[0] === "function") {
					fn = args[0];
					bl = args[1] || false;
					isDeleDageTarget = true;

					m(this).on("touchstart", start, bl);
					m(this).on("touchmove", move, bl);
					m(this).on("touchend", end, bl);
				}

				// 使用委托事件	
				else if (args.length >= 2 && typeof args[0] === "string" && typeof args[1] === "function") {
						deletage = args[0];
						fn = args[1];
						bl = args[2] || false;
						isDeleDageTarget = false;

						m(this).on("touchstart", deletage, start, bl);
						m(this).on("touchmove", deletage, move, bl);
						m(this).on("touchend", deletage, end, bl);
					}

					// 使用事件data		
					else if (args.length >= 2 && _typeof(args[0]) === "object" && typeof args[1] === "function") {
							fn = args[1];
							bl = args[2] || false;
							var obj = args[0];
							isDeleDageTarget = true;
							m(this).on("touchstart", obj, start, bl);
							m(this).on("touchmove", obj, move, bl);
							m(this).on("touchend", obj, end, bl);
						}

						// 使用委托事件传值data	
						else if (args.length >= 3 && typeof args[0] === "string" && _typeof(args[1]) === "object" && typeof args[2] === "function") {
								deletage = args[0];
								var obj = args[1];
								fn = args[2];
								bl = args[3] || false;
								isDeleDageTarget = false;

								m(this).on("touchstart", deletage, obj, start, bl);
								m(this).on("touchmove", deletage, obj, move, bl);
								m(this).on("touchend", deletage, obj, end, bl);
							}
			});
		},

		// scroll
		scroll: function scroll(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("scroll", fn, bl);
			});
		},

		// resize
		resize: function resize(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("resize", fn, bl);
			});
		},

		// change
		change: function change(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("change", fn, bl);
			});
		},

		//  blur
		blur: function blur(fn, bl) {
			if (arguments.length === 0) {
				$(this).each(function () {
					this.blur();
				});

				return;
			}
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("blur", fn, bl);
			});
		},

		// focus
		focus: function focus(fn, bl) {
			if (arguments.length === 0) {
				$(this).each(function () {
					this.focus();
				});

				return;
			}
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("focus", fn, bl);
			});
		},

		// keyup
		keyup: function keyup(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("keyup", fn, bl);
			});
		},

		// keyup
		keydown: function keydown(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("keydown", fn, bl);
			});
		},

		// keypress
		keypress: function keypress(fn, bl) {
			bl = bl || false;
			Mobile.each(this, function () {
				m(this).on("keypress", fn, bl);
			});
		}
	});

	/*ajax static*/

	// init xhr
	function _ajaxFun(url, type, data, _arguments) {
		var success;
		var error;
		var progress;
		if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && _arguments.length > 2) {
			success = _arguments[2];
			if (_arguments.length >= 3) {
				error = _arguments[3];
				progress = _arguments[4] || null;
			}
		} else if (typeof data === "function") {
			success = data;
			if (_arguments.length > 2) {
				error = _arguments[2];
				progress = _arguments[3] || null;
			}
		}

		Mobile.ajax({
			type: type,
			url: url,
			data: (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" ? data : null,
			success: success,
			error: error,
			progress: progress
		});
	}

	// 链接ajax发送的参数数据
	function _JoinParams(data) {

		// 参数data对象字符
		var params = [];

		for (var key in data) {

			if (_typeof(data[key]) === "object") {
				var data2 = data[key];
				// object
				if (data[key].constructor !== Array) {
					for (var key2 in data2) {
						var _key = key + "[" + key2 + "]";
						var _value = data2[key2];
						params.push(encodeURIComponent(_key) + '=' + encodeURIComponent(_value));
					}
				} else {
					for (var key2 in data2) {

						var data3 = data2[key2];
						if ((typeof data3 === "undefined" ? "undefined" : _typeof(data3)) === "object" && data3.constructor !== Array) {
							for (var key3 in data3) {
								var _key = key + "[" + key2 + "]" + "[" + key3 + "]";
								var _value = data3[key3];
								params.push(encodeURIComponent(_key) + '=' + encodeURIComponent(_value));
							}
						}
					}
				}
			} else {
				params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
		}

		return params.join("&") || "";
	}

	Mobile.extend({

		// create XHR Object
		createXHR: function createXHR() {

			if (window.XMLHttpRequest) {

				//IE7+、Firefox、Opera、Chrome 和Safari
				return new XMLHttpRequest();
			} else if (window.ActiveXObject) {

				//IE6 及以下
				var versions = ['MSXML2.XMLHttp', 'Microsoft.XMLHTTP'];
				for (var i = 0, len = versions.length; i < len; i++) {
					try {
						return new ActiveXObject(version[i]);
						break;
					} catch (e) {
						//跳过
					}
				}
			} else {
				throw new Error('浏览器不支持XHR对象！');
			}
		},

		/* 封装ajax函数
  	 @param {string}opt.type http连接的方式，包括POST和GET两种方式
  	 @param {string}opt.url 发送请求的url
  	 @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
  	 @param {object}opt.data 发送的参数，格式为对象类型
  	 @param {function}opt.contentType   内容类型
  	@param {function}opt.success ajax发送并接收成功调用的回调函数
  	 @param {function}opt.error ajax发送并接收error调用的回调函数
  	 @param {function}opt.getXHR 获取xhr对象
  	 @param {number}opt.timeout // 超时
  	*/
		ajax: function ajax(opt) {

			// 参数object对象
			opt = opt || {};
			opt.type = typeof opt.type === "string" ? opt.type.toUpperCase() : "GET";
			opt.url = typeof opt.url === "string" ? opt.url : '';
			opt.async = typeof opt.async === "boolean" ? opt.async : true;
			opt.data = _typeof(opt.data) === "object" ? opt.data : {};
			opt.success = opt.success || function () {};
			opt.error = opt.error || function () {};
			opt.contentType = opt.contentType || "application/x-www-form-urlencoded;charset=utf-8";
			opt.timeout = typeof opt.timeout === "number" ? opt.timeout : 10000;
			opt.progress = opt.progress || {};

			var xhr = Mobile.createXHR();
			xhr.timeout = opt.timeout;
			xhr.xhrFields = opt.xhrFields || {};

			// 连接参数
			var postData = _JoinParams(opt.data); // params.join('&');

			if (opt.type.toUpperCase() === 'POST' || opt.type.toUpperCase() === 'PUT' || opt.type.toUpperCase() === 'DELETE') {
				opt.url = opt.url.indexOf("?") === -1 ? opt.url + "?" + "_=" + Math.random() : opt.url + "&_=" + Math.random();

				xhr.open(opt.type, opt.url, opt.async);
				xhr.setRequestHeader('Content-Type', opt.contentType);
				xhr.send(postData);
			} else if (opt.type.toUpperCase() === 'GET') {
				if (postData.length > 0) {
					postData = "&" + postData;
				}
				opt.url = opt.url.indexOf("?") === -1 ? opt.url + "?" + "_=" + Math.random() + postData : opt.url + "&_=" + Math.random() + postData;

				xhr.open(opt.type, opt.url, opt.async);
				xhr.send(null);
			}
			xhr.onreadystatechange = function () {

				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
						if (typeof opt.success === "function") {
							try {
								opt.success(JSON.parse(xhr.responseText), xhr.status, xhr.statusText);
							} catch (e) {
								// handle the exception
								opt.success(xhr.responseText, xhr.status, xhr.statusText);
							}
						}
					} else {
						if (typeof opt.error === "function") {
							opt.error(xhr.status, xhr.statusText);
						}
					}
				}
			};
		},

		// get
		get: function get$$1(url, data) {
			_ajaxFun(url, "get", data, arguments);
		},

		// post
		post: function post(url, data) {
			_ajaxFun(url, "post", data, arguments);
		},

		// put
		put: function put(url, data) {
			_ajaxFun(url, "put", data, arguments);
		},

		// delete
		delete: function _delete(url, data) {
			_ajaxFun(url, "delete", data, arguments);
		},

		// jsonp
		jsonp: function jsonp(url, data) {

			var callback;
			if (typeof data === "function") {
				callback = data;
			} else if (arguments.length >= 3) {
				callback = arguments[2];
			}

			// 创建一个几乎唯一的id
			var callbackName = "mobile" + new Date().getTime().toString().trim();
			window[callbackName] = function (result) {

				// 创建一个全局回调处理函数
				if (typeof callback === "function") {
					callback(result);
				}
			};

			// 参数data对象字符
			var postData = "";
			if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
				//				for(var key in data) {
				//					params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
				//				}
				//				postData = params && params.join('&');
				postData = _JoinParams(data);
			}

			if (postData.length > 0) {
				postData = "&" + postData;
			}
			url = url.indexOf("?") === -1 ? url + "?" + "callback=" + callbackName + postData : url + "&callback=" + callbackName + postData;

			// 创建Script标签并执行window[id]函数
			var script = document.createElement("script");
			script.setAttribute("id", callbackName);
			script.setAttribute("src", url);
			script.setAttribute("type", "text/javascript");
			document.body.appendChild(script);
		}

	});

	/*extend 静态方法*/
	Mobile.extend({

		each: function each(els, fn) {
			if (!els) {
				throw new Error("els property type must is Array or Object");
			}
			for (var i = 0; i < els.length; i++) {
				//try {
				if (typeof fn === "function") {
					var bl = fn.call(els[i], i, els[i]);
					if (bl === false) {
						break;
					}
				}
			}
		},

		//ready
		ready: function ready(fn) {

			if (typeof fn === "function") {
				window.addEventListener("load", fn);
			}
			return;
		},

		// 列表项和子项的匹配	
		isEqual: function isEqual(list, item) {
			list = list || [];
			for (var i = 0; i < list.length; i++) {

				if (list[i] === item) {
					return true;
				}
			}

			return false;
		},

		// html字符串转dom对象
		htmlStringToDOM: function htmlStringToDOM(txt) {

			var df2 = document.createDocumentFragment();
			var df = document.createDocumentFragment();
			var div = document.createElement("div");
			div.innerHTML = txt;
			df.appendChild(div);
			var _nodes = df.querySelector("div").childNodes;
			for (var i = _nodes.length; i > 0; i--) {
				df2.insertBefore(_nodes[i - 1], df2.childNodes[0]);
			}
			df = null;
			return df2;
		},

		checkSelector: function checkSelector(el, txt) {
			txt = typeof txt === "string" ? txt : "";
			if (txt.trim() === "") {
				return false;
			}
			var regId = /\#[a-zA-Z_][\w|-]*[^\.|^#|\[]{0,}/g;
			var regClass = /\.[a-zA-Z_][\w|-]*[^\.|^#|\[]{0,}/g;
			var regTag = /^[a-zA-Z][\w|-]*[^\.|^#|\[]{0,}|[\]][a-zA-Z][\w|-]*[^\.|^#|\[]{0,}/g;
			var regAttr = /\[[a-zA-Z][\w-=]*\]/g;

			var idList = txt.match(regId) || [];
			idList = rep(idList, "#", "");
			var isIdBl = isId(el, idList, txt);
			//alert(isIdBl)

			var classList = txt.match(regClass) || [];
			classList = rep(classList, ".", "");
			var isClassBl = isclass(el, classList, txt);
			//alert(isClassBl)

			var tagList = txt.match(regTag) || [];
			tagList = rep(tagList, "]", "");
			var isTagBl = istag(el, tagList, txt);
			//alert(isTagBl)

			var attrList = txt.match(regAttr) || [];
			attrList = rep(attrList, "[", "");
			attrList = rep(attrList, "]", "");
			var isAttrBl = isAttr(el, attrList, txt);
			//alert(attrList)

			function rep(list, old, now) {
				var arr = [];
				for (var i = 0; i < list.length; i++) {
					arr.push(list[i].replace(old, now));
				}

				return arr;
			}

			function isId(el, idList, searchTxt) {

				if (searchTxt.search(/#/) === -1) {
					return true;
				} else if (searchTxt.search(/#/) !== -1 && idList.length === 0) {
					return false;
				}

				// 上条件不符合  向下执行
				var id = el.id || "";
				for (var i = 0; i < idList.length; i++) {
					if (idList[i] == id) {
						return true;
					}
				}
				return false;
			}

			function isclass(el, idList, searchTxt) {
				if (searchTxt.search(/\./) === -1) {
					return true;
				} else if (searchTxt.search(/\./) !== -1 && idList.length === 0) {
					return false;
				}

				// 上条件不符合  向下执行
				var _class = el.classList || "";

				for (var i = 0; i < idList.length; i++) {
					if (!_class.contains(idList[i])) {
						return false;
					}
				}
				return true;
			}

			function istag(el, idList, searchTxt) {
				if (searchTxt.search(/^[a-zA-Z]|[\]][a-zA-Z]/) === -1) {
					return true;
				} else if (searchTxt.search(/^[a-zA-Z]|[\]][a-zA-Z]/) !== -1 && idList.length === 0) {
					return false;
				}

				// 上条件不符合  向下执行
				var _tag = (el.nodeName || "").toLowerCase();

				for (var i = 0; i < idList.length; i++) {
					if (idList[i].trim() !== _tag) {
						return false;
					}
				}
				return true;
			}

			function isAttr(el, idList, searchTxt) {

				if (searchTxt.search(/\[.*\]/) === -1) {
					return true;
				} else if (searchTxt.search(/\[.*\]/) !== -1 && idList.length === 0) {
					return false;
				}

				// 上条件不符合  向下执行
				//var _tag = el.getat
				var _reg2 = /=/g;
				for (var i = 0; i < idList.length; i++) {

					if (_reg2.test(idList[i])) {
						//alert(idList[i]);
						var arr2 = idList[i].split("=");
						if ((el.getAttribute(arr2[0]) || "").trim() !== (arr2[1] || "").trim()) {
							return false;
						}
					} else {

						if (!el.hasAttribute(idList[i])) {
							return false;
						}
					}
				}
				return true;
			}

			return isIdBl && isClassBl && isTagBl && isAttrBl;
		},

		trim: function trim(txt) {
			var str = "";
			txt = typeof txt === "string" ? txt : "";
			str = txt.replace(/^\s*|\s*$/img, "");
			return str;
		},

		round: function round(value, ratio) {

			if (arguments.length === 1) {

				if (typeof value === "number") {
					return Math.round(value);
				}
			} else if (arguments.length === 2) {
				if (typeof value === "number" && typeof ratio === "number") {

					var _v = Math.floor(value);
					_v = _v + ratio;

					if (value > _v) {
						return Math.ceil(value);
					} else {
						return Math.floor(value);
					}
				}
			}

			return null;
		},

		// 检查是否为移动端
		isMobile: function isMobile() {

			var userAgentInfo = navigator.userAgent.toString().toLowerCase();
			var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
			//console.log(userAgentInfo)
			var flag = false;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v].toLowerCase()) > 0) {
					flag = true;
					break;
				}
			}
			return flag;
		},

		/* jsonToDate 
   * /Date(1492048799952)/ 或 1492048799952
   * 	转化为指定格式的String 的时间日期
   	月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
  	 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
  	 例子： 
  	 (new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423 
  	 (new Date()).Format("yyyy-M-d H:m:s.S")      ==> 2006-7-2 8:9:4.18
   * */
		jsonToDate: function jsonToDate(value, fmt) {
			fmt = typeof fmt !== "string" ? "yyyy-MM-dd" : fmt;
			var txts = value.toString().replace("/Date(", "").replace(")/", "");
			var times = parseInt(txts);
			times = isNaN(times) ? new Date(1970, 0, 1, 0, 0, 1) : times;

			var dt = new Date(Number(times.toString()));
			var o = {
				"M+": dt.getMonth() + 1, //月份 
				"d+": dt.getDate(), //日 
				"H+": dt.getHours(), //小时 
				"m+": dt.getMinutes(), //分 
				"s+": dt.getSeconds(), //秒 
				"q+": Math.floor((dt.getMonth() + 3) / 3), //季度 
				"S": dt.getMilliseconds() //毫秒 
			};
			if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}return fmt;
		}

	});

	/*绑定自定义事件函数*/
	Mobile.extend({
		events: {
			props: {},

			// bind events
			on: function on(eventName, fn) {
				this.props[eventName] = this.props[eventName] || [];
				this.props[eventName].push(fn);
			},
			off: function off(eventName, fn) {
				if (arguments.length === 1) {

					this.props[eventName] = [];
				} else if (arguments.length === 2) {
					var $events = this.props[eventName] || [];
					for (var i = 0; i < $events.length; i++) {
						if ($events[i] === fn) {
							$events.splice(i, 1);
							break;
						}
					}
				}
			},
			emit: function emit(eventName, data) {

				if (this.events[eventName]) {
					for (var i = 0; i < this.events[eventName].length; i++) {
						this.events[eventName][i](data);
					}
				}
			}
		}
	});

	// transform 
	Mobile.fn.extend({

		// setTransform
		setTransform: function setTransform(transforName, value) {

			Mobile.each(this, function () {
				if (!this.transform) {
					this.transform = {};
				}
				this.transform[transforName] = value;
				var result = '';

				for (var item in this.transform) {
					switch (item) {
						case 'rotate':
						case 'rotateX':
						case 'rotateY':
						case 'rotateZ':
						case 'skewX':
						case 'skewY':
						case 'skewZ':
							result += item + '(' + parseFloat(this.transform[item]) + 'deg)  ';
							break;
						case 'skew':
							var arrs = this.transform[item].split(",");
							if (arrs.length === 2) {
								result += item + '(' + parseFloat(arrs[0]) + 'deg,' + parseFloat(arrs[1]) + 'deg)  ';
							} else {
								result += item + '(' + parseFloat(arrs) + 'deg,' + 0 + 'deg)  ';
							}
							break;

						case 'scaleX':
						case 'scaleY':
						case 'scaleZ':
							result += item + '(' + parseFloat(this.transform[item]) + ')  ';
							break;

						case 'scale':
							var arrs = this.transform[item].split(",");

							if (arrs.length === 2) {
								result += item + '(' + parseFloat(arrs[0]) + ',' + parseFloat(arrs[1]) + ')  ';
							} else {
								result += item + '(' + parseFloat(arrs) + ',' + parseFloat(arrs) + ')  ';
							}
							break;

						case 'translateX':
						case 'translateY':
						case 'translateZ':
							result += item + '(' + parseFloat(this.transform[item]) + 'px)  ';
							break;
						case 'translate':
							var arrs = this.transform[item].split(",");

							if (arrs.length === 2) {
								result += item + '(' + parseFloat(arrs[0]) + 'px,' + parseFloat(arrs[1]) + 'px)  ';
							} else {
								result += item + '(' + parseFloat(arrs) + 'px,' + 0 + 'px)  ';
							}
							break;

					}
				}

				this.style.WebkitTransform = result;
				this.style.MozTransform = result;
				this.style.msTransform = result;
				this.style.OTransform = result;
				this.style.transform = result;
			});

			return this;
		},

		// getTransform
		getTransform: function getTransform(transforName) {

			var result = 0;
			Mobile.each(this, function () {
				if (!this.transform) {
					this.transform = {};
				}

				//读
				if (typeof this.transform[transforName] == 'undefined') {
					if (transforName == 'scale' || transforName == 'scaleX' || transforName == 'scaleY') {
						result = 1;
						if (transforName === "scale") {
							result = [1, 1];
						}
					} else {
						result = 0;
						if (transforName === "skew" || transforName === "translate") {
							result = [0, 0];
						}
					}
				} else {
					if (transforName === "skew" || transforName === "translate" || transforName === "scale") {
						var strs = this.transform[transforName].split(",");
						var arrs = [];
						for (var y = 0; y < strs.length; y++) {
							var v = parseFloat(strs[y]);
							if (transforName === "scale") {
								v = isNaN(v) ? 1 : v;
							} else {
								v = isNaN(v) ? 0 : v;
							}

							arrs.push(v);
						}

						if (arrs.length === 1) {
							if (transforName === "scale") {
								arrs.push(arrs[0]);
							} else {
								arrs.push(0);
							}
						}
						result = arrs;
					} else {
						result = parseFloat(this.transform[transforName]);
					}
				}
			});

			return result;
		}

	});

	return mobile;
});

/*!
 * =====================================================
 * Mui v3.7.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
/**
 * MUI核心JS
 * @type _L4.$|Function
 */

window.mui = function (document, undefined) {
	var readyRE = /complete|loaded|interactive/;
	var idSelectorRE = /^#([\w-]+)$/;
	var classSelectorRE = /^\.([\w-]+)$/;
	var tagSelectorRE = /^[\w-]+$/;
	var translateRE = /translate(?:3d)?\((.+?)\)/;
	var translateMatrixRE = /matrix(3d)?\((.+?)\)/;

	var $ = function $(selector, context) {
		context = context || document;
		if (!selector) return wrap();
		if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') if ($.isArrayLike(selector)) {
			return wrap($.slice.call(selector), null);
		} else {
			return wrap([selector], null);
		}
		if (typeof selector === 'function') return $.ready(selector);
		if (typeof selector === 'string') {
			try {
				selector = selector.trim();
				if (idSelectorRE.test(selector)) {
					var found = document.getElementById(RegExp.$1);
					return wrap(found ? [found] : []);
				}
				return wrap($.qsa(selector, context), selector);
			} catch (e) {}
		}
		return wrap();
	};

	var wrap = function wrap(dom, selector) {
		dom = dom || [];
		Object.setPrototypeOf(dom, $.fn);
		dom.selector = selector || '';
		return dom;
	};

	$.uuid = 0;

	$.data = {};
	/**
  * extend(simple)
  * @param {type} target
  * @param {type} source
  * @param {type} deep
  * @returns {unresolved}
  */
	$.extend = function () {
		//from jquery2
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		if (typeof target === "boolean") {
			deep = target;

			target = arguments[i] || {};
			i++;
		}

		if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !$.isFunction(target)) {
			target = {};
		}

		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (name in options) {
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];
						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}

						target[name] = $.extend(deep, clone, copy);
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		return target;
	};
	/**
  * mui noop(function)
  */
	$.noop = function () {};
	/**
  * mui slice(array)
  */
	$.slice = [].slice;
	/**
  * mui filter(array)
  */
	$.filter = [].filter;

	$.type = function (obj) {
		return obj == null ? String(obj) : class2type[{}.toString.call(obj)] || "object";
	};
	/**
  * mui isArray
  */
	$.isArray = Array.isArray || function (object) {
		return object instanceof Array;
	};
	/**
  * mui isArrayLike 
  * @param {Object} obj
  */
	$.isArrayLike = function (obj) {
		var length = !!obj && "length" in obj && obj.length;
		var type = $.type(obj);
		if (type === "function" || $.isWindow(obj)) {
			return false;
		}
		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	};
	/**
  * mui isWindow(需考虑obj为undefined的情况)
  */
	$.isWindow = function (obj) {
		return obj != null && obj === obj.window;
	};
	/**
  * mui isObject
  */
	$.isObject = function (obj) {
		return $.type(obj) === "object";
	};
	/**
  * mui isPlainObject
  */
	$.isPlainObject = function (obj) {
		return $.isObject(obj) && !$.isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype;
	};
	/**
  * mui isEmptyObject
  * @param {Object} o
  */
	$.isEmptyObject = function (o) {
		for (var p in o) {
			if (p !== undefined) {
				return false;
			}
		}
		return true;
	};
	/**
  * mui isFunction
  */
	$.isFunction = function (value) {
		return $.type(value) === "function";
	};
	/**
  * mui querySelectorAll
  * @param {type} selector
  * @param {type} context
  * @returns {Array}
  */
	$.qsa = function (selector, context) {
		context = context || document;
		return $.slice.call(classSelectorRE.test(selector) ? context.getElementsByClassName(RegExp.$1) : tagSelectorRE.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
	};
	/**
  * ready(DOMContentLoaded)
  * @param {type} callback
  * @returns {_L6.$}
  */
	$.ready = function (callback) {
		if (readyRE.test(document.readyState)) {
			callback($);
		} else {
			document.addEventListener('DOMContentLoaded', function () {
				callback($);
			}, false);
		}
		return this;
	};
	/**
  * 将 fn 缓存一段时间后, 再被调用执行
  * 此方法为了避免在 ms 段时间内, 执行 fn 多次. 常用于 resize , scroll , mousemove 等连续性事件中;
  * 当 ms 设置为 -1, 表示立即执行 fn, 即和直接调用 fn 一样;
  * 调用返回函数的 stop 停止最后一次的 buffer 效果
  * @param {Object} fn
  * @param {Object} ms
  * @param {Object} context
  */
	$.buffer = function (fn, ms, context) {
		var timer;
		var lastStart = 0;
		var lastEnd = 0;
		var ms = ms || 150;

		function run() {
			if (timer) {
				timer.cancel();
				timer = 0;
			}
			lastStart = $.now();
			fn.apply(context || this, arguments);
			lastEnd = $.now();
		}

		return $.extend(function () {
			if (!lastStart || // 从未运行过
			lastEnd >= lastStart && $.now() - lastEnd > ms || // 上次运行成功后已经超过ms毫秒
			lastEnd < lastStart && $.now() - lastStart > ms * 8 // 上次运行或未完成，后8*ms毫秒
			) {
					run.apply(this, arguments);
				} else {
				if (timer) {
					timer.cancel();
				}
				timer = $.later(run, ms, null, $.slice.call(arguments));
			}
		}, {
			stop: function stop() {
				if (timer) {
					timer.cancel();
					timer = 0;
				}
			}
		});
	};
	/**
  * each
  * @param {type} elements
  * @param {type} callback
  * @returns {_L8.$}
  */
	$.each = function (elements, callback, hasOwnProperty) {
		if (!elements) {
			return this;
		}
		if (typeof elements.length === 'number') {
			[].every.call(elements, function (el, idx) {
				return callback.call(el, idx, el) !== false;
			});
		} else {
			for (var key in elements) {
				if (hasOwnProperty) {
					if (elements.hasOwnProperty(key)) {
						if (callback.call(elements[key], key, elements[key]) === false) return elements;
					}
				} else {
					if (callback.call(elements[key], key, elements[key]) === false) return elements;
				}
			}
		}
		return this;
	};
	$.focus = function (element) {
		if ($.os.ios) {
			setTimeout(function () {
				element.focus();
			}, 10);
		} else {
			element.focus();
		}
	};
	/**
  * trigger event
  * @param {type} element
  * @param {type} eventType
  * @param {type} eventData
  * @returns {_L8.$}
  */
	$.trigger = function (element, eventType, eventData) {
		element.dispatchEvent(new CustomEvent(eventType, {
			detail: eventData,
			bubbles: true,
			cancelable: true
		}));
		return this;
	};
	/**
  * getStyles
  * @param {type} element
  * @param {type} property
  * @returns {styles}
  */
	$.getStyles = function (element, property) {
		var styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
		if (property) {
			return styles.getPropertyValue(property) || styles[property];
		}
		return styles;
	};
	/**
  * parseTranslate
  * @param {type} translateString
  * @param {type} position
  * @returns {Object}
  */
	$.parseTranslate = function (translateString, position) {
		var result = translateString.match(translateRE || '');
		if (!result || !result[1]) {
			result = ['', '0,0,0'];
		}
		result = result[1].split(",");
		result = {
			x: parseFloat(result[0]),
			y: parseFloat(result[1]),
			z: parseFloat(result[2])
		};
		if (position && result.hasOwnProperty(position)) {
			return result[position];
		}
		return result;
	};
	/**
  * parseTranslateMatrix
  * @param {type} translateString
  * @param {type} position
  * @returns {Object}
  */
	$.parseTranslateMatrix = function (translateString, position) {
		var matrix = translateString.match(translateMatrixRE);
		var is3D = matrix && matrix[1];
		if (matrix) {
			matrix = matrix[2].split(",");
			if (is3D === "3d") matrix = matrix.slice(12, 15);else {
				matrix.push(0);
				matrix = matrix.slice(4, 7);
			}
		} else {
			matrix = [0, 0, 0];
		}
		var result = {
			x: parseFloat(matrix[0]),
			y: parseFloat(matrix[1]),
			z: parseFloat(matrix[2])
		};
		if (position && result.hasOwnProperty(position)) {
			return result[position];
		}
		return result;
	};
	$.hooks = {};
	$.addAction = function (type, hook) {
		var hooks = $.hooks[type];
		if (!hooks) {
			hooks = [];
		}
		hook.index = hook.index || 1000;
		hooks.push(hook);
		hooks.sort(function (a, b) {
			return a.index - b.index;
		});
		$.hooks[type] = hooks;
		return $.hooks[type];
	};
	$.doAction = function (type, callback) {
		if ($.isFunction(callback)) {
			//指定了callback
			$.each($.hooks[type], callback);
		} else {
			//未指定callback，直接执行
			$.each($.hooks[type], function (index, hook) {
				return !hook.handle();
			});
		}
	};
	/**
  * setTimeout封装
  * @param {Object} fn
  * @param {Object} when
  * @param {Object} context
  * @param {Object} data
  */
	$.later = function (fn, when, context, data) {
		when = when || 0;
		var m = fn;
		var d = data;
		var f;
		var r;

		if (typeof fn === 'string') {
			m = context[fn];
		}

		f = function f() {
			m.apply(context, $.isArray(d) ? d : [d]);
		};

		r = setTimeout(f, when);

		return {
			id: r,
			cancel: function cancel() {
				clearTimeout(r);
			}
		};
	};
	$.now = Date.now || function () {
		return +new Date();
	};
	var class2type = {};
	$.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'], function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});
	if (window.JSON) {
		$.parseJSON = JSON.parse;
	}
	/**
  * $.fn
  */
	$.fn = {
		each: function each(callback) {
			[].every.call(this, function (el, idx) {
				return callback.call(el, idx, el) !== false;
			});
			return this;
		}
	};

	/**
  * 兼容 AMD 模块
  **/
	if (typeof define === 'function' && define.amd) {
		define('mui', [], function () {
			return $;
		});
	}

	return $;
}(document);

//window.mui = mui;
//'$' in window || (window.$ = mui);
/**
 * $.os
 * @param {type} $
 * @returns {undefined}
 */
(function ($, window) {
	function detect(ua) {
		this.os = {};
		var funcs = [function () {
			//wechat
			var wechat = ua.match(/(MicroMessenger)\/([\d\.]+)/i);
			if (wechat) {
				//wechat
				this.os.wechat = {
					version: wechat[2].replace(/_/g, '.')
				};
			}
			return false;
		}, function () {
			//android
			var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
			if (android) {
				this.os.android = true;
				this.os.version = android[2];

				this.os.isBadAndroid = !/Chrome\/\d/.test(window.navigator.appVersion);
			}
			return this.os.android === true;
		}, function () {
			//ios
			var iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/);
			if (iphone) {
				//iphone
				this.os.ios = this.os.iphone = true;
				this.os.version = iphone[2].replace(/_/g, '.');
			} else {
				var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
				if (ipad) {
					//ipad
					this.os.ios = this.os.ipad = true;
					this.os.version = ipad[2].replace(/_/g, '.');
				}
			}
			return this.os.ios === true;
		}];
		[].every.call(funcs, function (func) {
			return !func.call($);
		});
	}
	detect.call($, navigator.userAgent);
})(mui, window);
/**
 * $.os.plus
 * @param {type} $
 * @returns {undefined}
 */
(function ($, document) {
	function detect(ua) {
		this.os = this.os || {};
		var plus = ua.match(/Html5Plus/i); //TODO 5\+Browser?
		if (plus) {
			this.os.plus = true;
			$(function () {
				document.body.classList.add('mui-plus');
			});
			if (ua.match(/StreamApp/i)) {
				//TODO 最好有流应用自己的标识
				this.os.stream = true;
				$(function () {
					document.body.classList.add('mui-plus-stream');
				});
			}
		}
	}
	detect.call($, navigator.userAgent);
})(mui, document);
/**
 * 仅提供简单的on，off(仅支持事件委托，不支持当前元素绑定，当前元素绑定请直接使用addEventListener,removeEventListener)
 * @param {Object} $
 */
(function ($) {
	if ('ontouchstart' in window) {
		$.isTouchable = true;
		$.EVENT_START = 'touchstart';
		$.EVENT_MOVE = 'touchmove';
		$.EVENT_END = 'touchend';
	} else {
		$.isTouchable = false;
		$.EVENT_START = 'mousedown';
		$.EVENT_MOVE = 'mousemove';
		$.EVENT_END = 'mouseup';
	}
	$.EVENT_CANCEL = 'touchcancel';
	$.EVENT_CLICK = 'click';

	var _mid = 1;
	var delegates = {};
	//需要wrap的函数
	var eventMethods = {
		preventDefault: 'isDefaultPrevented',
		stopImmediatePropagation: 'isImmediatePropagationStopped',
		stopPropagation: 'isPropagationStopped'
	};
	//默认true返回函数
	var returnTrue = function returnTrue() {
		return true;
	};
	//默认false返回函数
	var returnFalse = function returnFalse() {
		return false;
	};
	//wrap浏览器事件
	var compatible = function compatible(event, target) {
		if (!event.detail) {
			event.detail = {
				currentTarget: target
			};
		} else {
			event.detail.currentTarget = target;
		}
		$.each(eventMethods, function (name, predicate) {
			var sourceMethod = event[name];
			event[name] = function () {
				this[predicate] = returnTrue;
				return sourceMethod && sourceMethod.apply(event, arguments);
			};
			event[predicate] = returnFalse;
		}, true);
		return event;
	};
	//简单的wrap对象_mid
	var mid = function mid(obj) {
		return obj && (obj._mid || (obj._mid = _mid++));
	};
	//事件委托对象绑定的事件回调列表
	var delegateFns = {};
	//返回事件委托的wrap事件回调
	var delegateFn = function delegateFn(element, event, selector, callback) {
		return function (e) {
			//same event
			var callbackObjs = delegates[element._mid][event];
			var handlerQueue = [];
			var target = e.target;
			var selectorAlls = {};
			for (; target && target !== document; target = target.parentNode) {
				if (target === element) {
					break;
				}
				if (~['click', 'tap', 'doubletap', 'longtap', 'hold'].indexOf(event) && (target.disabled || target.classList.contains('mui-disabled'))) {
					break;
				}
				var matches = {};
				$.each(callbackObjs, function (selector, callbacks) {
					//same selector
					selectorAlls[selector] || (selectorAlls[selector] = $.qsa(selector, element));
					if (selectorAlls[selector] && ~selectorAlls[selector].indexOf(target)) {
						if (!matches[selector]) {
							matches[selector] = callbacks;
						}
					}
				}, true);
				if (!$.isEmptyObject(matches)) {
					handlerQueue.push({
						element: target,
						handlers: matches
					});
				}
			}
			selectorAlls = null;
			e = compatible(e); //compatible event
			$.each(handlerQueue, function (index, handler) {
				target = handler.element;
				var tagName = target.tagName;
				if (event === 'tap' && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && tagName !== 'SELECT') {
					e.preventDefault();
					e.detail && e.detail.gesture && e.detail.gesture.preventDefault();
				}
				$.each(handler.handlers, function (index, handler) {
					$.each(handler, function (index, callback) {
						if (callback.call(target, e) === false) {
							e.preventDefault();
							e.stopPropagation();
						}
					}, true);
				}, true);
				if (e.isPropagationStopped()) {
					return false;
				}
			}, true);
		};
	};
	var findDelegateFn = function findDelegateFn(element, event) {
		var delegateCallbacks = delegateFns[mid(element)];
		var result = [];
		if (delegateCallbacks) {
			result = [];
			if (event) {
				var filterFn = function filterFn(fn) {
					return fn.type === event;
				};
				return delegateCallbacks.filter(filterFn);
			} else {
				result = delegateCallbacks;
			}
		}
		return result;
	};
	var preventDefaultException = /^(INPUT|TEXTAREA|BUTTON|SELECT)$/;
	/**
  * mui delegate events
  * @param {type} event
  * @param {type} selector
  * @param {type} callback
  * @returns {undefined}
  */
	$.fn.on = function (event, selector, callback) {
		//仅支持简单的事件委托,主要是tap事件使用，类似mouse,focus之类暂不封装支持
		return this.each(function () {
			var element = this;
			mid(element);
			mid(callback);
			var isAddEventListener = false;
			var delegateEvents = delegates[element._mid] || (delegates[element._mid] = {});
			var delegateCallbackObjs = delegateEvents[event] || (delegateEvents[event] = {});
			if ($.isEmptyObject(delegateCallbackObjs)) {
				isAddEventListener = true;
			}
			var delegateCallbacks = delegateCallbackObjs[selector] || (delegateCallbackObjs[selector] = []);
			delegateCallbacks.push(callback);
			if (isAddEventListener) {
				var delegateFnArray = delegateFns[mid(element)];
				if (!delegateFnArray) {
					delegateFnArray = [];
				}
				var delegateCallback = delegateFn(element, event, selector, callback);
				delegateFnArray.push(delegateCallback);
				delegateCallback.i = delegateFnArray.length - 1;
				delegateCallback.type = event;
				delegateFns[mid(element)] = delegateFnArray;
				element.addEventListener(event, delegateCallback);
				if (event === 'tap') {
					//TODO 需要找个更好的解决方案
					element.addEventListener('click', function (e) {
						if (e.target) {
							var tagName = e.target.tagName;
							if (!preventDefaultException.test(tagName)) {
								if (tagName === 'A') {
									var href = e.target.href;
									if (!(href && ~href.indexOf('tel:'))) {
										e.preventDefault();
									}
								} else {
									e.preventDefault();
								}
							}
						}
					});
				}
			}
		});
	};
	$.fn.off = function (event, selector, callback) {
		return this.each(function () {
			var _mid = mid(this);
			if (!event) {
				//mui(selector).off();
				delegates[_mid] && delete delegates[_mid];
			} else if (!selector) {
				//mui(selector).off(event);
				delegates[_mid] && delete delegates[_mid][event];
			} else if (!callback) {
				//mui(selector).off(event,selector);
				delegates[_mid] && delegates[_mid][event] && delete delegates[_mid][event][selector];
			} else {
				//mui(selector).off(event,selector,callback);
				var delegateCallbacks = delegates[_mid] && delegates[_mid][event] && delegates[_mid][event][selector];
				$.each(delegateCallbacks, function (index, delegateCallback) {
					if (mid(delegateCallback) === mid(callback)) {
						delegateCallbacks.splice(index, 1);
						return false;
					}
				}, true);
			}
			if (delegates[_mid]) {
				//如果off掉了所有当前element的指定的event事件，则remove掉当前element的delegate回调
				if (!delegates[_mid][event] || $.isEmptyObject(delegates[_mid][event])) {
					findDelegateFn(this, event).forEach(function (fn) {
						this.removeEventListener(fn.type, fn);
						delete delegateFns[_mid][fn.i];
					}.bind(this));
				}
			} else {
				//如果delegates[_mid]已不存在，删除所有
				findDelegateFn(this).forEach(function (fn) {
					this.removeEventListener(fn.type, fn);
					delete delegateFns[_mid][fn.i];
				}.bind(this));
			}
		});
	};
})(mui);
/**
 * mui target(action>popover>modal>tab>toggle)
 */
(function ($, window, document) {
	/**
  * targets
  */
	$.targets = {};
	/**
  * target handles
  */
	$.targetHandles = [];
	/**
  * register target
  * @param {type} target
  * @returns {$.targets}
  */
	$.registerTarget = function (target) {

		target.index = target.index || 1000;

		$.targetHandles.push(target);

		$.targetHandles.sort(function (a, b) {
			return a.index - b.index;
		});

		return $.targetHandles;
	};
	window.addEventListener($.EVENT_START, function (event) {
		var target = event.target;
		var founds = {};
		for (; target && target !== document; target = target.parentNode) {
			var isFound = false;
			$.each($.targetHandles, function (index, targetHandle) {
				var name = targetHandle.name;
				if (!isFound && !founds[name] && targetHandle.hasOwnProperty('handle')) {
					$.targets[name] = targetHandle.handle(event, target);
					if ($.targets[name]) {
						founds[name] = true;
						if (targetHandle.isContinue !== true) {
							isFound = true;
						}
					}
				} else {
					if (!founds[name]) {
						if (targetHandle.isReset !== false) $.targets[name] = false;
					}
				}
			});
			if (isFound) {
				break;
			}
		}
	});
	window.addEventListener('click', function (event) {
		//解决touch与click的target不一致的问题(比如链接边缘点击时，touch的target为html，而click的target为A)
		var target = event.target;
		var isFound = false;
		for (; target && target !== document; target = target.parentNode) {
			if (target.tagName === 'A') {
				$.each($.targetHandles, function (index, targetHandle) {
					var name = targetHandle.name;
					if (targetHandle.hasOwnProperty('handle')) {
						if (targetHandle.handle(event, target)) {
							isFound = true;
							event.preventDefault();
							return false;
						}
					}
				});
				if (isFound) {
					break;
				}
			}
		}
	});
})(mui, window, document);
/**
 * fixed trim
 * @param {type} undefined
 * @returns {undefined}
 */
(function (undefined) {
	if (String.prototype.trim === undefined) {
		// fix for iOS 3.2
		String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}
	Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
		obj['__proto__'] = proto;
		return obj;
	};
})();
/**
 * fixed CustomEvent
 */
(function () {
	if (typeof window.CustomEvent === 'undefined') {
		var _CustomEvent = function _CustomEvent(event, params) {
			params = params || {
				bubbles: false,
				cancelable: false,
				detail: undefined
			};
			var evt = document.createEvent('Events');
			var bubbles = true;
			for (var name in params) {
				name === 'bubbles' ? bubbles = !!params[name] : evt[name] = params[name];
			}
			evt.initEvent(event, bubbles, true);
			return evt;
		};

		
		_CustomEvent.prototype = window.Event.prototype;
		window.CustomEvent = _CustomEvent;
	}
})();
/*
	A shim for non ES5 supporting browsers.
	Adds function bind to Function prototype, so that you can do partial application.
	Works even with the nasty thing, where the first word is the opposite of extranet, the second one is the profession of Columbus, and the version number is 9, flipped 180 degrees.
*/

Function.prototype.bind = Function.prototype.bind || function (to) {
	// Make an array of our arguments, starting from second argument
	var partial = Array.prototype.splice.call(arguments, 1),

	// We'll need the original function.
	fn = this;
	var bound = function bound() {
		// Join the already applied arguments to the now called ones (after converting to an array again).
		var args = partial.concat(Array.prototype.splice.call(arguments, 0));
		// If not being called as a constructor
		if (!(this instanceof bound)) {
			// return the result of the function called bound to target and partially applied.
			return fn.apply(to, args);
		}
		// If being called as a constructor, apply the function bound to self.
		fn.apply(this, args);
	};
	// Attach the prototype of the function to our newly created function.
	bound.prototype = fn.prototype;
	return bound;
};
/**
 * mui fixed classList
 * @param {type} document
 * @returns {undefined}
 */
(function (document) {
	if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {

		Object.defineProperty(HTMLElement.prototype, 'classList', {
			get: function get$$1() {
				var self = this;
				function update(fn) {
					return function (value) {
						var classes = self.className.split(/\s+/),
						    index = classes.indexOf(value);

						fn(classes, index, value);
						self.className = classes.join(" ");
					};
				}

				var ret = {
					add: update(function (classes, index, value) {
						~index || classes.push(value);
					}),
					remove: update(function (classes, index) {
						~index && classes.splice(index, 1);
					}),
					toggle: update(function (classes, index, value) {
						~index ? classes.splice(index, 1) : classes.push(value);
					}),
					contains: function contains(value) {
						return !!~self.className.split(/\s+/).indexOf(value);
					},
					item: function item(i) {
						return self.className.split(/\s+/)[i] || null;
					}
				};

				Object.defineProperty(ret, 'length', {
					get: function get$$1() {
						return self.className.split(/\s+/).length;
					}
				});

				return ret;
			}
		});
	}
})(document);

/**
 * mui fixed requestAnimationFrame
 * @param {type} window
 * @returns {undefined}
 */
(function (window) {
	if (!window.requestAnimationFrame) {
		var lastTime = 0;
		window.requestAnimationFrame = window.webkitRequestAnimationFrame || function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
			var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
		window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || function (id) {
			clearTimeout(id);
		};
	}
})(window);
/**
 * fastclick(only for radio,checkbox)
 */
(function ($, window, name) {
	if (!$.os.android && !$.os.ios) {
		//目前仅识别android和ios
		return;
	}
	if (window.FastClick) {
		return;
	}

	var handle = function handle(event, target) {
		if (target.tagName === 'LABEL') {
			if (target.parentNode) {
				target = target.parentNode.querySelector('input');
			}
		}
		if (target && (target.type === 'radio' || target.type === 'checkbox')) {
			if (!target.disabled) {
				//disabled
				return target;
			}
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 40,
		handle: handle,
		target: false
	});
	var dispatchEvent = function dispatchEvent(event) {
		var targetElement = $.targets.click;
		if (targetElement) {
			var clickEvent, touch;
			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}
			touch = event.detail.gesture.changedTouches[0];
			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
			event.detail && event.detail.gesture.preventDefault();
		}
	};
	window.addEventListener('tap', dispatchEvent);
	window.addEventListener('doubletap', dispatchEvent);
	//捕获
	window.addEventListener('click', function (event) {
		if ($.targets.click) {
			if (!event.forwardedTouchEvent) {
				//stop click
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {
					// Part of the hack for browsers that don't support Event#stopImmediatePropagation
					event.propagationStopped = true;
				}
				event.stopPropagation();
				event.preventDefault();
				return false;
			}
		}
	}, true);
})(mui, window, 'click');
(function ($, document) {
	$(function () {
		if (!$.os.ios) {
			return;
		}
		var CLASS_FOCUSIN = 'mui-focusin';
		var CLASS_BAR_TAB = 'mui-bar-tab';
		var CLASS_BAR_FOOTER = 'mui-bar-footer';
		var CLASS_BAR_FOOTER_SECONDARY = 'mui-bar-footer-secondary';
		var CLASS_BAR_FOOTER_SECONDARY_TAB = 'mui-bar-footer-secondary-tab';
		// var content = document.querySelector('.' + CLASS_CONTENT);
		// if (content) {
		// 	document.body.insertBefore(content, document.body.firstElementChild);
		// }
		document.addEventListener('focusin', function (e) {
			if ($.os.plus) {
				//在父webview里边不fix
				if (window.plus) {
					if (plus.webview.currentWebview().children().length > 0) {
						return;
					}
				}
			}
			var target = e.target;
			//TODO 需考虑所有键盘弹起的情况
			if (target.tagName && (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT' && (target.type === 'text' || target.type === 'search' || target.type === 'number'))) {
				if (target.disabled || target.readOnly) {
					return;
				}
				document.body.classList.add(CLASS_FOCUSIN);
				var isFooter = false;
				for (; target && target !== document; target = target.parentNode) {
					var classList = target.classList;
					if (classList && classList.contains(CLASS_BAR_TAB) || classList.contains(CLASS_BAR_FOOTER) || classList.contains(CLASS_BAR_FOOTER_SECONDARY) || classList.contains(CLASS_BAR_FOOTER_SECONDARY_TAB)) {
						isFooter = true;
						break;
					}
				}
				if (isFooter) {
					var scrollTop = document.body.scrollHeight;
					var scrollLeft = document.body.scrollLeft;
					setTimeout(function () {
						window.scrollTo(scrollLeft, scrollTop);
					}, 20);
				}
			}
		});
		document.addEventListener('focusout', function (e) {
			var classList = document.body.classList;
			if (classList.contains(CLASS_FOCUSIN)) {
				classList.remove(CLASS_FOCUSIN);
				setTimeout(function () {
					window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
				}, 20);
			}
		});
	});
})(mui, document);
/**
 * mui namespace(optimization)
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
	$.namespace = 'mui';
	$.classNamePrefix = $.namespace + '-';
	$.classSelectorPrefix = '.' + $.classNamePrefix;
	/**
  * 返回正确的className
  * @param {type} className
  * @returns {String}
  */
	$.className = function (className) {
		return $.classNamePrefix + className;
	};
	/**
  * 返回正确的classSelector
  * @param {type} classSelector
  * @returns {String}
  */
	$.classSelector = function (classSelector) {
		return classSelector.replace(/\./g, $.classSelectorPrefix);
	};
	/**
         * 返回正确的eventName
         * @param {type} event
         * @param {type} module
         * @returns {String}
         */
	$.eventName = function (event, module) {
		return event + ($.namespace ? '.' + $.namespace : '') + (module ? '.' + module : '');
	};
})(mui);

/**
 * mui gestures
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
	$.gestures = {
		session: {}
	};
	/**
  * Gesture preventDefault
  * @param {type} e
  * @returns {undefined}
  */
	$.preventDefault = function (e) {
		e.preventDefault();
	};
	/**
  * Gesture stopPropagation
  * @param {type} e
  * @returns {undefined}
  */
	$.stopPropagation = function (e) {
		e.stopPropagation();
	};

	/**
  * register gesture
  * @param {type} gesture
  * @returns {$.gestures}
  */
	$.addGesture = function (gesture) {
		return $.addAction('gestures', gesture);
	};

	var round = Math.round;
	var abs = Math.abs;
	var sqrt = Math.sqrt;
	var atan2 = Math.atan2;
	/**
  * distance
  * @param {type} p1
  * @param {type} p2
  * @returns {Number}
  */
	var getDistance = function getDistance(p1, p2, props) {
		if (!props) {
			props = ['x', 'y'];
		}
		var x = p2[props[0]] - p1[props[0]];
		var y = p2[props[1]] - p1[props[1]];
		return sqrt(x * x + y * y);
	};
	/**
  * scale
  * @param {Object} starts
  * @param {Object} moves
  */
	var getScale = function getScale(starts, moves) {
		if (starts.length >= 2 && moves.length >= 2) {
			var props = ['pageX', 'pageY'];
			return getDistance(moves[1], moves[0], props) / getDistance(starts[1], starts[0], props);
		}
		return 1;
	};
	/**
  * angle
  * @param {type} p1
  * @param {type} p2
  * @returns {Number}
  */
	var getAngle = function getAngle(p1, p2, props) {
		if (!props) {
			props = ['x', 'y'];
		}
		var x = p2[props[0]] - p1[props[0]];
		var y = p2[props[1]] - p1[props[1]];
		return atan2(y, x) * 180 / Math.PI;
	};
	/**
  * direction
  * @param {Object} x
  * @param {Object} y
  */
	var getDirection = function getDirection(x, y) {
		if (x === y) {
			return '';
		}
		if (abs(x) >= abs(y)) {
			return x > 0 ? 'left' : 'right';
		}
		return y > 0 ? 'up' : 'down';
	};
	/**
  * rotation
  * @param {Object} start
  * @param {Object} end
  */
	var getRotation = function getRotation(start, end) {
		var props = ['pageX', 'pageY'];
		return getAngle(end[1], end[0], props) - getAngle(start[1], start[0], props);
	};
	/**
  * px per ms
  * @param {Object} deltaTime
  * @param {Object} x
  * @param {Object} y
  */
	var getVelocity = function getVelocity(deltaTime, x, y) {
		return {
			x: x / deltaTime || 0,
			y: y / deltaTime || 0
		};
	};
	/**
  * detect gestures
  * @param {type} event
  * @param {type} touch
  * @returns {undefined}
  */
	var detect = function detect(event, touch) {
		if ($.gestures.stoped) {
			return;
		}
		$.doAction('gestures', function (index, gesture) {
			if (!$.gestures.stoped) {
				if ($.options.gestureConfig[gesture.name] !== false) {
					gesture.handle(event, touch);
				}
			}
		});
	};
	/**
  * 暂时无用
  * @param {Object} node
  * @param {Object} parent
  */
	var hasParent = function hasParent(node, parent) {
		while (node) {
			if (node == parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	};

	var uniqueArray = function uniqueArray(src, key, sort) {
		var results = [];
		var values = [];
		var i = 0;

		while (i < src.length) {
			var val = key ? src[i][key] : src[i];
			if (values.indexOf(val) < 0) {
				results.push(src[i]);
			}
			values[i] = val;
			i++;
		}

		if (sort) {
			if (!key) {
				results = results.sort();
			} else {
				results = results.sort(function sortUniqueArray(a, b) {
					return a[key] > b[key];
				});
			}
		}

		return results;
	};
	var getMultiCenter = function getMultiCenter(touches) {
		var touchesLength = touches.length;
		if (touchesLength === 1) {
			return {
				x: round(touches[0].pageX),
				y: round(touches[0].pageY)
			};
		}

		var x = 0;
		var y = 0;
		var i = 0;
		while (i < touchesLength) {
			x += touches[i].pageX;
			y += touches[i].pageY;
			i++;
		}

		return {
			x: round(x / touchesLength),
			y: round(y / touchesLength)
		};
	};
	var multiTouch = function multiTouch() {
		return $.options.gestureConfig.pinch;
	};
	var copySimpleTouchData = function copySimpleTouchData(touch) {
		var touches = [];
		var i = 0;
		while (i < touch.touches.length) {
			touches[i] = {
				pageX: round(touch.touches[i].pageX),
				pageY: round(touch.touches[i].pageY)
			};
			i++;
		}
		return {
			timestamp: $.now(),
			gesture: touch.gesture,
			touches: touches,
			center: getMultiCenter(touch.touches),
			deltaX: touch.deltaX,
			deltaY: touch.deltaY
		};
	};

	var calDelta = function calDelta(touch) {
		var session = $.gestures.session;
		var center = touch.center;
		var offset = session.offsetDelta || {};
		var prevDelta = session.prevDelta || {};
		var prevTouch = session.prevTouch || {};

		if (touch.gesture.type === $.EVENT_START || touch.gesture.type === $.EVENT_END) {
			prevDelta = session.prevDelta = {
				x: prevTouch.deltaX || 0,
				y: prevTouch.deltaY || 0
			};

			offset = session.offsetDelta = {
				x: center.x,
				y: center.y
			};
		}
		touch.deltaX = prevDelta.x + (center.x - offset.x);
		touch.deltaY = prevDelta.y + (center.y - offset.y);
	};
	var calTouchData = function calTouchData(touch) {
		var session = $.gestures.session;
		var touches = touch.touches;
		var touchesLength = touches.length;

		if (!session.firstTouch) {
			session.firstTouch = copySimpleTouchData(touch);
		}

		if (multiTouch() && touchesLength > 1 && !session.firstMultiTouch) {
			session.firstMultiTouch = copySimpleTouchData(touch);
		} else if (touchesLength === 1) {
			session.firstMultiTouch = false;
		}

		var firstTouch = session.firstTouch;
		var firstMultiTouch = session.firstMultiTouch;
		var offsetCenter = firstMultiTouch ? firstMultiTouch.center : firstTouch.center;

		var center = touch.center = getMultiCenter(touches);
		touch.timestamp = $.now();
		touch.deltaTime = touch.timestamp - firstTouch.timestamp;

		touch.angle = getAngle(offsetCenter, center);
		touch.distance = getDistance(offsetCenter, center);

		calDelta(touch);

		touch.offsetDirection = getDirection(touch.deltaX, touch.deltaY);

		touch.scale = firstMultiTouch ? getScale(firstMultiTouch.touches, touches) : 1;
		touch.rotation = firstMultiTouch ? getRotation(firstMultiTouch.touches, touches) : 0;

		calIntervalTouchData(touch);
	};
	var CAL_INTERVAL = 25;
	var calIntervalTouchData = function calIntervalTouchData(touch) {
		var session = $.gestures.session;
		var last = session.lastInterval || touch;
		var deltaTime = touch.timestamp - last.timestamp;
		var velocity;
		var velocityX;
		var velocityY;
		var direction;

		if (touch.gesture.type != $.EVENT_CANCEL && (deltaTime > CAL_INTERVAL || last.velocity === undefined)) {
			var deltaX = last.deltaX - touch.deltaX;
			var deltaY = last.deltaY - touch.deltaY;

			var v = getVelocity(deltaTime, deltaX, deltaY);
			velocityX = v.x;
			velocityY = v.y;
			velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
			direction = getDirection(deltaX, deltaY) || last.direction;

			session.lastInterval = touch;
		} else {
			velocity = last.velocity;
			velocityX = last.velocityX;
			velocityY = last.velocityY;
			direction = last.direction;
		}

		touch.velocity = velocity;
		touch.velocityX = velocityX;
		touch.velocityY = velocityY;
		touch.direction = direction;
	};
	var targetIds = {};
	var convertTouches = function convertTouches(touches) {
		for (var i = 0; i < touches.length; i++) {
			!touches['identifier'] && (touches['identifier'] = 0);
		}
		return touches;
	};
	var getTouches = function getTouches(event, touch) {
		var allTouches = convertTouches($.slice.call(event.touches || [event]));

		var type = event.type;

		var targetTouches = [];
		var changedTargetTouches = [];

		//当touchstart或touchmove且touches长度为1，直接获得all和changed
		if ((type === $.EVENT_START || type === $.EVENT_MOVE) && allTouches.length === 1) {
			targetIds[allTouches[0].identifier] = true;
			targetTouches = allTouches;
			changedTargetTouches = allTouches;
			touch.target = event.target;
		} else {
			var i = 0;
			var targetTouches = [];
			var changedTargetTouches = [];
			var changedTouches = convertTouches($.slice.call(event.changedTouches || [event]));

			touch.target = event.target;
			var sessionTarget = $.gestures.session.target || event.target;
			targetTouches = allTouches.filter(function (touch) {
				return hasParent(touch.target, sessionTarget);
			});

			if (type === $.EVENT_START) {
				i = 0;
				while (i < targetTouches.length) {
					targetIds[targetTouches[i].identifier] = true;
					i++;
				}
			}

			i = 0;
			while (i < changedTouches.length) {
				if (targetIds[changedTouches[i].identifier]) {
					changedTargetTouches.push(changedTouches[i]);
				}
				if (type === $.EVENT_END || type === $.EVENT_CANCEL) {
					delete targetIds[changedTouches[i].identifier];
				}
				i++;
			}

			if (!changedTargetTouches.length) {
				return false;
			}
		}
		targetTouches = uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true);
		var touchesLength = targetTouches.length;
		var changedTouchesLength = changedTargetTouches.length;
		if (type === $.EVENT_START && touchesLength - changedTouchesLength === 0) {
			//first
			touch.isFirst = true;
			$.gestures.touch = $.gestures.session = {
				target: event.target
			};
		}
		touch.isFinal = (type === $.EVENT_END || type === $.EVENT_CANCEL) && touchesLength - changedTouchesLength === 0;

		touch.touches = targetTouches;
		touch.changedTouches = changedTargetTouches;
		return true;
	};
	var handleTouchEvent = function handleTouchEvent(event) {
		var touch = {
			gesture: event
		};
		var touches = getTouches(event, touch);
		if (!touches) {
			return;
		}
		calTouchData(touch);
		detect(event, touch);
		$.gestures.session.prevTouch = touch;
		if (event.type === $.EVENT_END && !$.isTouchable) {
			$.gestures.touch = $.gestures.session = {};
		}
	};
	window.addEventListener($.EVENT_START, handleTouchEvent);
	window.addEventListener($.EVENT_MOVE, handleTouchEvent);
	window.addEventListener($.EVENT_END, handleTouchEvent);
	window.addEventListener($.EVENT_CANCEL, handleTouchEvent);
	//fixed hashchange(android)
	window.addEventListener($.EVENT_CLICK, function (e) {
		//TODO 应该判断当前target是不是在targets.popover内部，而不是非要相等
		if (($.os.android || $.os.ios) && ($.targets.popover && e.target === $.targets.popover || $.targets.tab || $.targets.offcanvas || $.targets.modal)) {
			e.preventDefault();
		}
	}, true);

	//增加原生滚动识别
	$.isScrolling = false;
	var scrollingTimeout = null;
	window.addEventListener('scroll', function () {
		$.isScrolling = true;
		scrollingTimeout && clearTimeout(scrollingTimeout);
		scrollingTimeout = setTimeout(function () {
			$.isScrolling = false;
		}, 250);
	});
})(mui, window);
/**
 * mui gesture flick[left|right|up|down]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var flickStartTime = 0;
	var handle = function handle(event, touch) {
		var session = $.gestures.session;
		var options = this.options;
		var now = $.now();
		switch (event.type) {
			case $.EVENT_MOVE:
				if (now - flickStartTime > 300) {
					flickStartTime = now;
					session.flickStart = touch.center;
				}
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				touch.flick = false;
				if (session.flickStart && options.flickMaxTime > now - flickStartTime && touch.distance > options.flickMinDistince) {
					touch.flick = true;
					touch.flickTime = now - flickStartTime;
					touch.flickDistanceX = touch.center.x - session.flickStart.x;
					touch.flickDistanceY = touch.center.y - session.flickStart.y;
					$.trigger(session.target, name, touch);
					$.trigger(session.target, name + touch.direction, touch);
				}
				break;
		}
	};
	/**
  * mui gesture flick
  */
	$.addGesture({
		name: name,
		index: 5,
		handle: handle,
		options: {
			flickMaxTime: 200,
			flickMinDistince: 10
		}
	});
})(mui, 'flick');
/**
 * mui gesture swipe[left|right|up|down]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var handle = function handle(event, touch) {
		var session = $.gestures.session;
		if (event.type === $.EVENT_END || event.type === $.EVENT_CANCEL) {
			var options = this.options;
			touch.swipe = false;
			//TODO 后续根据velocity计算
			if (touch.direction && options.swipeMaxTime > touch.deltaTime && touch.distance > options.swipeMinDistince) {
				touch.swipe = true;
				$.trigger(session.target, name, touch);
				$.trigger(session.target, name + touch.direction, touch);
			}
		}
	};
	/**
  * mui gesture swipe
  */
	$.addGesture({
		name: name,
		index: 10,
		handle: handle,
		options: {
			swipeMaxTime: 300,
			swipeMinDistince: 18
		}
	});
})(mui, 'swipe');
/**
 * mui gesture drag[start|left|right|up|down|end]
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var handle = function handle(event, touch) {
		var session = $.gestures.session;
		switch (event.type) {
			case $.EVENT_START:
				break;
			case $.EVENT_MOVE:
				if (!touch.direction || !session.target) {
					return;
				}
				//修正direction,可在session期间自行锁定拖拽方向，方便开发scroll类不同方向拖拽插件嵌套
				if (session.lockDirection && session.startDirection) {
					if (session.startDirection && session.startDirection !== touch.direction) {
						if (session.startDirection === 'up' || session.startDirection === 'down') {
							touch.direction = touch.deltaY < 0 ? 'up' : 'down';
						} else {
							touch.direction = touch.deltaX < 0 ? 'left' : 'right';
						}
					}
				}

				if (!session.drag) {
					session.drag = true;
					$.trigger(session.target, name + 'start', touch);
				}
				$.trigger(session.target, name, touch);
				$.trigger(session.target, name + touch.direction, touch);
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				if (session.drag && touch.isFinal) {
					$.trigger(session.target, name + 'end', touch);
				}
				break;
		}
	};
	/**
  * mui gesture drag
  */
	$.addGesture({
		name: name,
		index: 20,
		handle: handle,
		options: {
			fingers: 1
		}
	});
})(mui, 'drag');
/**
 * mui gesture tap and doubleTap
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var lastTarget;
	var lastTapTime;
	var handle = function handle(event, touch) {
		var session = $.gestures.session;
		var options = this.options;
		switch (event.type) {
			case $.EVENT_END:
				if (!touch.isFinal) {
					return;
				}
				var target = session.target;
				if (!target || target.disabled || target.classList && target.classList.contains('mui-disabled')) {
					return;
				}
				if (touch.distance < options.tapMaxDistance && touch.deltaTime < options.tapMaxTime) {
					if ($.options.gestureConfig.doubletap && lastTarget && lastTarget === target) {
						//same target
						if (lastTapTime && touch.timestamp - lastTapTime < options.tapMaxInterval) {
							$.trigger(target, 'doubletap', touch);
							lastTapTime = $.now();
							lastTarget = target;
							return;
						}
					}
					$.trigger(target, name, touch);
					lastTapTime = $.now();
					lastTarget = target;
				}
				break;
		}
	};
	/**
  * mui gesture tap
  */
	$.addGesture({
		name: name,
		index: 30,
		handle: handle,
		options: {
			fingers: 1,
			tapMaxInterval: 300,
			tapMaxDistance: 5,
			tapMaxTime: 250
		}
	});
})(mui, 'tap');
/**
 * mui gesture longtap
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var timer;
	var handle = function handle(event, touch) {
		var session = $.gestures.session;
		var options = this.options;
		switch (event.type) {
			case $.EVENT_START:
				clearTimeout(timer);
				timer = setTimeout(function () {
					$.trigger(session.target, name, touch);
				}, options.holdTimeout);
				break;
			case $.EVENT_MOVE:
				if (touch.distance > options.holdThreshold) {
					clearTimeout(timer);
				}
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				clearTimeout(timer);
				break;
		}
	};
	/**
  * mui gesture longtap
  */
	$.addGesture({
		name: name,
		index: 10,
		handle: handle,
		options: {
			fingers: 1,
			holdTimeout: 500,
			holdThreshold: 2
		}
	});
})(mui, 'longtap');
/**
 * mui gesture hold
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var timer;
	var handle = function handle(event, touch) {
		var session = $.gestures.session;
		var options = this.options;
		switch (event.type) {
			case $.EVENT_START:
				if ($.options.gestureConfig.hold) {
					timer && clearTimeout(timer);
					timer = setTimeout(function () {
						touch.hold = true;
						$.trigger(session.target, name, touch);
					}, options.holdTimeout);
				}
				break;
			case $.EVENT_MOVE:
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				if (timer) {
					clearTimeout(timer) && (timer = null);
					$.trigger(session.target, 'release', touch);
				}
				break;
		}
	};
	/**
  * mui gesture hold
  */
	$.addGesture({
		name: name,
		index: 10,
		handle: handle,
		options: {
			fingers: 1,
			holdTimeout: 0
		}
	});
})(mui, 'hold');
/**
 * mui gesture pinch
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var handle = function handle(event, touch) {
		var options = this.options;
		var session = $.gestures.session;
		switch (event.type) {
			case $.EVENT_START:
				break;
			case $.EVENT_MOVE:
				if ($.options.gestureConfig.pinch) {
					if (touch.touches.length < 2) {
						return;
					}
					if (!session.pinch) {
						//start
						session.pinch = true;
						$.trigger(session.target, name + 'start', touch);
					}
					$.trigger(session.target, name, touch);
					var scale = touch.scale;
					var rotation = touch.rotation;
					var lastScale = typeof touch.lastScale === 'undefined' ? 1 : touch.lastScale;
					var scaleDiff = 0.000000000001; //防止scale与lastScale相等，不触发事件的情况。
					if (scale > lastScale) {
						//out
						lastScale = scale - scaleDiff;
						$.trigger(session.target, name + 'out', touch);
					} //in
					else if (scale < lastScale) {
							lastScale = scale + scaleDiff;
							$.trigger(session.target, name + 'in', touch);
						}
					if (Math.abs(rotation) > options.minRotationAngle) {
						$.trigger(session.target, 'rotate', touch);
					}
				}
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				if ($.options.gestureConfig.pinch && session.pinch && touch.touches.length === 2) {
					session.pinch = false;
					$.trigger(session.target, name + 'end', touch);
				}
				break;
		}
	};
	/**
  * mui gesture pinch
  */
	$.addGesture({
		name: name,
		index: 10,
		handle: handle,
		options: {
			minRotationAngle: 0
		}
	});
})(mui, 'pinch');
/**
 * mui.init
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
	$.global = $.options = {
		gestureConfig: {
			tap: true,
			doubletap: false,
			longtap: false,
			hold: false,
			flick: true,
			swipe: true,
			drag: true,
			pinch: false
		}
	};
	/**
  *
  * @param {type} options
  * @returns {undefined}
  */
	$.initGlobal = function (options) {
		$.options = $.extend(true, $.global, options);
		return this;
	};
	var inits = {};

	/**
  * 单页配置 初始化
  * @param {object} options
  */
	$.init = function (options) {
		$.options = $.extend(true, $.global, options || {});
		$.ready(function () {
			$.doAction('inits', function (index, init) {
				var isInit = !!(!inits[init.name] || init.repeat);
				if (isInit) {
					init.handle.call($);
					inits[init.name] = true;
				}
			});
		});
		return this;
	};

	/**
  * 增加初始化执行流程
  * @param {function} init
  */
	$.addInit = function (init) {
		return $.addAction('inits', init);
	};
	/**
  * 处理html5版本subpages 
  */
	$.addInit({
		name: 'iframe',
		index: 100,
		handle: function handle() {
			var options = $.options;
			var subpages = options.subpages || [];
			if (!$.os.plus && subpages.length) {
				//暂时只处理单个subpage。后续可以考虑支持多个subpage
				createIframe(subpages[0]);
			}
		}
	});
	var createIframe = function createIframe(options) {
		var wrapper = document.createElement('div');
		wrapper.className = 'mui-iframe-wrapper';
		var styles = options.styles || {};
		if (typeof styles.top !== 'string') {
			styles.top = '0px';
		}
		if (typeof styles.bottom !== 'string') {
			styles.bottom = '0px';
		}
		wrapper.style.top = styles.top;
		wrapper.style.bottom = styles.bottom;
		var iframe = document.createElement('iframe');
		iframe.src = options.url;
		iframe.id = options.id || options.url;
		iframe.name = iframe.id;
		wrapper.appendChild(iframe);
		document.body.appendChild(wrapper);
		//目前仅处理微信
		$.os.wechat && handleScroll(wrapper, iframe);
	};

	function handleScroll(wrapper, iframe) {
		var key = 'MUI_SCROLL_POSITION_' + document.location.href + '_' + iframe.src;
		var scrollTop = parseFloat(localStorage.getItem(key)) || 0;
		if (scrollTop) {
			(function (y) {
				iframe.onload = function () {
					window.scrollTo(0, y);
				};
			})(scrollTop);
		}
		setInterval(function () {
			var _scrollTop = window.scrollY;
			if (scrollTop !== _scrollTop) {
				localStorage.setItem(key, _scrollTop + '');
				scrollTop = _scrollTop;
			}
		}, 100);
	}
	$(function () {
		var classList = document.body.classList;
		var os = [];
		if ($.os.ios) {
			os.push({
				os: 'ios',
				version: $.os.version
			});
			classList.add('mui-ios');
		} else if ($.os.android) {
			os.push({
				os: 'android',
				version: $.os.version
			});
			classList.add('mui-android');
		}
		if ($.os.wechat) {
			os.push({
				os: 'wechat',
				version: $.os.wechat.version
			});
			classList.add('mui-wechat');
		}
		if (os.length) {
			$.each(os, function (index, osObj) {
				var version = '';
				if (osObj.version) {
					$.each(osObj.version.split('.'), function (i, v) {
						version = version + (version ? '-' : '') + v;
						classList.add($.className(osObj.os + '-' + version));
					});
				}
			});
		}
	});
})(mui);
/**
 * mui.init 5+
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
	var defaultOptions = {
		swipeBack: false,
		preloadPages: [], //5+ lazyLoad webview
		preloadLimit: 10, //预加载窗口的数量限制(一旦超出，先进先出)
		keyEventBind: {
			backbutton: true,
			menubutton: true
		},
		titleConfig: {
			height: "44px",
			backgroundColor: "#f7f7f7", //导航栏背景色
			bottomBorderColor: "#cccccc", //底部边线颜色
			title: { //标题配置
				text: "", //标题文字
				position: {
					top: 0,
					left: 0,
					width: "100%",
					height: "100%"
				},
				styles: {
					color: "#000000",
					align: "center",
					family: "'Helvetica Neue',Helvetica,sans-serif",
					size: "17px",
					style: "normal",
					weight: "normal",
					fontSrc: ""
				}
			},
			back: {
				image: {
					base64Data: '',
					imgSrc: '',
					sprite: {
						top: '0px',
						left: '0px',
						width: '100%',
						height: '100%'
					},
					position: {
						top: "10px",
						left: "10px",
						width: "24px",
						height: "24px"
					}
				}
			}
		}
	};

	//默认页面动画
	var defaultShow = {
		event: "titleUpdate",
		autoShow: true,
		duration: 300,
		aniShow: 'slide-in-right',
		extras: {}
	};
	//若执行了显示动画初始化操作，则要覆盖默认配置
	if ($.options.show) {
		defaultShow = $.extend(true, defaultShow, $.options.show);
	}

	$.currentWebview = null;

	$.extend(true, $.global, defaultOptions);
	$.extend(true, $.options, defaultOptions);
	/**
  * 等待动画配置
  * @param {type} options
  * @returns {Object}
  */
	$.waitingOptions = function (options) {
		return $.extend(true, {}, {
			autoShow: true,
			title: '',
			modal: false
		}, options);
	};
	/**
  * 窗口显示配置
  * @param {type} options
  * @returns {Object}
  */
	$.showOptions = function (options) {
		return $.extend(true, {}, defaultShow, options);
	};
	/**
  * 窗口默认配置
  * @param {type} options
  * @returns {Object}
  */
	$.windowOptions = function (options) {
		return $.extend({
			scalable: false,
			bounce: "" //vertical
		}, options);
	};
	/**
  * plusReady
  * @param {type} callback
  * @returns {_L6.$}
  */
	$.plusReady = function (callback) {
		if (window.plus) {
			setTimeout(function () {
				//解决callback与plusready事件的执行时机问题(典型案例:showWaiting,closeWaiting)
				callback();
			}, 0);
		} else {
			document.addEventListener("plusready", function () {
				callback();
			}, false);
		}
		return this;
	};
	/**
  * 5+ event(5+没提供之前我自己实现)
  * @param {type} webview
  * @param {type} eventType
  * @param {type} data
  * @returns {undefined}
  */
	$.fire = function (webview, eventType, data) {
		if (webview) {
			if (typeof data === 'undefined') {
				data = '';
			} else if (typeof data === 'boolean' || typeof data === 'number') {
				webview.evalJS("typeof mui!=='undefined'&&mui.receive('" + eventType + "'," + data + ")");
				return;
			} else if ($.isPlainObject(data) || $.isArray(data)) {
				data = JSON.stringify(data || {}).replace(/\'/g, '\\u0027').replace(/\\/g, '\\u005c');
			}
			webview.evalJS("typeof mui!=='undefined'&&mui.receive('" + eventType + "','" + data + "')");
		}
	};
	/**
  * 5+ event(5+没提供之前我自己实现)
  * @param {type} eventType
  * @param {type} data
  * @returns {undefined}
  */
	$.receive = function (eventType, data) {
		if (eventType) {
			try {
				if (data && typeof data === 'string') {
					data = JSON.parse(data);
				}
			} catch (e) {}
			$.trigger(document, eventType, data);
		}
	};
	var triggerPreload = function triggerPreload(webview) {
		if (!webview.preloaded) {
			//保证仅触发一次
			$.fire(webview, 'preload');
			var list = webview.children();
			for (var i = 0; i < list.length; i++) {
				$.fire(list[i], 'preload');
			}
			webview.preloaded = true;
		}
	};
	var trigger = function trigger(webview, eventType, timeChecked) {
		if (timeChecked) {
			if (!webview[eventType + 'ed']) {
				$.fire(webview, eventType);
				var list = webview.children();
				for (var i = 0; i < list.length; i++) {
					$.fire(list[i], eventType);
				}
				webview[eventType + 'ed'] = true;
			}
		} else {
			$.fire(webview, eventType);
			var list = webview.children();
			for (var i = 0; i < list.length; i++) {
				$.fire(list[i], eventType);
			}
		}
	};
	/**
  * 打开新窗口
  * @param {string} url 要打开的页面地址
  * @param {string} id 指定页面ID
  * @param {object} options 可选:参数,等待,窗口,显示配置{params:{},waiting:{},styles:{},show:{}}
  */
	$.openWindow = function (url, id, options) {
		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			options = url;
			url = options.url;
			id = options.id || url;
		} else {
			if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
				options = id;
				id = options.id || url;
			} else {
				id = id || url;
			}
		}
		if (!$.os.plus) {
			//TODO 先临时这么处理：手机上顶层跳，PC上parent跳
			if ($.os.ios || $.os.android) {
				window.top.location.href = url;
			} else {
				window.parent.location.href = url;
			}
			return;
		}
		if (!window.plus) {
			return;
		}

		options = options || {};
		var params = options.params || {};
		var webview = null,
		    webviewCache = null,
		    nShow,
		    nWaiting;

		if ($.webviews[id]) {
			webviewCache = $.webviews[id];
			//webview真实存在，才能获取
			if (plus.webview.getWebviewById(id)) {
				webview = webviewCache.webview;
			}
		} else if (options.createNew !== true) {
			webview = plus.webview.getWebviewById(id);
		}

		if (webview) {
			//已缓存
			//每次show都需要传递动画参数；
			//预加载的动画参数优先级：openWindow配置>preloadPages配置>mui默认配置；
			nShow = webviewCache ? webviewCache.show : defaultShow;
			nShow = options.show ? $.extend(nShow, options.show) : nShow;
			nShow.autoShow && webview.show(nShow.aniShow, nShow.duration, function () {
				triggerPreload(webview);
				trigger(webview, 'pagebeforeshow', false);
			});
			if (webviewCache) {
				webviewCache.afterShowMethodName && webview.evalJS(webviewCache.afterShowMethodName + '(\'' + JSON.stringify(params) + '\')');
			}
			return webview;
		} else {
			//新窗口
			if (!url) {
				throw new Error('webview[' + id + '] does not exist');
			}

			//显示waiting
			var waitingConfig = $.waitingOptions(options.waiting);
			if (waitingConfig.autoShow) {
				nWaiting = plus.nativeUI.showWaiting(waitingConfig.title, waitingConfig.options);
			}

			//创建页面
			options = $.extend(options, {
				id: id,
				url: url
			});

			webview = $.createWindow(options);

			//显示
			nShow = $.showOptions(options.show);
			if (nShow.autoShow) {
				var showWebview = function showWebview() {
					//关闭等待框
					if (nWaiting) {
						nWaiting.close();
					}
					//显示页面
					webview.show(nShow.aniShow, nShow.duration, function () {}, nShow.extras);
					options.afterShowMethodName && webview.evalJS(options.afterShowMethodName + '(\'' + JSON.stringify(params) + '\')');
				};
				//titleUpdate触发时机早于loaded，更换为titleUpdate后，可以更早的显示webview
				webview.addEventListener(nShow.event, showWebview, false);
				//loaded事件发生后，触发预加载和pagebeforeshow事件
				webview.addEventListener("loaded", function () {
					triggerPreload(webview);
					trigger(webview, 'pagebeforeshow', false);
				}, false);
			}
		}
		return webview;
	};

	$.openWindowWithTitle = function (options, titleConfig) {
		options = options || {};
		var url = options.url;
		var id = options.id || url;

		if (!$.os.plus) {
			//TODO 先临时这么处理：手机上顶层跳，PC上parent跳
			if ($.os.ios || $.os.android) {
				window.top.location.href = url;
			} else {
				window.parent.location.href = url;
			}
			return;
		}
		if (!window.plus) {
			return;
		}

		var params = options.params || {};
		var webview = null,
		    webviewCache = null,
		    nShow,
		    nWaiting;

		if ($.webviews[id]) {
			webviewCache = $.webviews[id];
			//webview真实存在，才能获取
			if (plus.webview.getWebviewById(id)) {
				webview = webviewCache.webview;
			}
		} else if (options.createNew !== true) {
			webview = plus.webview.getWebviewById(id);
		}

		if (webview) {
			//已缓存
			//每次show都需要传递动画参数；
			//预加载的动画参数优先级：openWindow配置>preloadPages配置>mui默认配置；
			nShow = webviewCache ? webviewCache.show : defaultShow;
			nShow = options.show ? $.extend(nShow, options.show) : nShow;
			nShow.autoShow && webview.show(nShow.aniShow, nShow.duration, function () {
				triggerPreload(webview);
				trigger(webview, 'pagebeforeshow', false);
			});
			if (webviewCache) {
				webviewCache.afterShowMethodName && webview.evalJS(webviewCache.afterShowMethodName + '(\'' + JSON.stringify(params) + '\')');
			}
			return webview;
		} else {
			//新窗口
			if (!url) {
				throw new Error('webview[' + id + '] does not exist');
			}

			//显示waiting
			var waitingConfig = $.waitingOptions(options.waiting);
			if (waitingConfig.autoShow) {
				nWaiting = plus.nativeUI.showWaiting(waitingConfig.title, waitingConfig.options);
			}

			//创建页面
			options = $.extend(options, {
				id: id,
				url: url
			});

			webview = $.createWindow(options);

			if (titleConfig) {
				//处理原生头
				$.extend(true, $.options.titleConfig, titleConfig);
				var tid = $.options.titleConfig.id ? $.options.titleConfig.id : id + "_title";
				var view = new plus.nativeObj.View(tid, {
					top: 0,
					height: $.options.titleConfig.height,
					width: "100%",
					dock: "top",
					position: "dock"
				});
				view.drawRect($.options.titleConfig.backgroundColor); //绘制背景色
				var _b = parseInt($.options.titleConfig.height) - 1;
				view.drawRect($.options.titleConfig.bottomBorderColor, {
					top: _b + "px",
					left: "0px"
				}); //绘制底部边线

				//绘制文字
				if ($.options.titleConfig.title.text) {
					var _title = $.options.titleConfig.title;
					view.drawText(_title.text, _title.position, _title.styles);
				}

				//返回图标绘制
				var _back = $.options.titleConfig.back;
				var backClick = null;
				//优先字体

				//其次是图片
				var _backImage = _back.image;
				if (_backImage.base64Data || _backImage.imgSrc) {
					//TODO 此处需要处理百分比的情况
					backClick = {
						left: parseInt(_backImage.position.left),
						right: parseInt(_backImage.position.left) + parseInt(_backImage.position.width)
					};
					var bitmap = new plus.nativeObj.Bitmap(id + "_back");
					if (_backImage.base64Data) {
						//优先base64编码字符串
						bitmap.loadBase64Data(_backImage.base64Data);
					} else {
						//其次加载图片文件
						bitmap.load(_backImage.imgSrc);
					}
					view.drawBitmap(bitmap, _backImage.sprite, _backImage.position);
				}

				//处理点击事件
				view.setTouchEventRect({
					top: "0px",
					left: "0px",
					width: "100%",
					height: "100%"
				});
				view.interceptTouchEvent(true);
				view.addEventListener("click", function (e) {
					var x = e.clientX;

					//返回按钮点击
					if (backClick && x > backClick.left && x < backClick.right) {
						if (_back.click && $.isFunction(_back.click)) {
							_back.click();
						} else {
							webview.evalJS("window.mui&&mui.back();");
						}
					}
				}, false);
				webview.append(view);
			}

			//显示
			nShow = $.showOptions(options.show);
			if (nShow.autoShow) {
				//titleUpdate触发时机早于loaded，更换为titleUpdate后，可以更早的显示webview
				webview.addEventListener(nShow.event, function () {
					//关闭等待框
					if (nWaiting) {
						nWaiting.close();
					}
					//显示页面
					webview.show(nShow.aniShow, nShow.duration, function () {}, nShow.extras);
				}, false);
			}
		}
		return webview;
	};

	/**
  * 根据配置信息创建一个webview
  * @param {type} options
  * @param {type} isCreate
  * @returns {webview}
  */
	$.createWindow = function (options, isCreate) {
		if (!window.plus) {
			return;
		}
		var id = options.id || options.url;
		var webview;
		if (options.preload) {
			if ($.webviews[id] && $.webviews[id].webview.getURL()) {
				//已经cache
				webview = $.webviews[id].webview;
			} else {
				//新增预加载窗口
				//判断是否携带createNew参数，默认为false
				if (options.createNew !== true) {
					webview = plus.webview.getWebviewById(id);
				}

				//之前没有，那就新创建	
				if (!webview) {
					webview = plus.webview.create(options.url, id, $.windowOptions(options.styles), $.extend({
						preload: true
					}, options.extras));
					if (options.subpages) {
						$.each(options.subpages, function (index, subpage) {
							var subpageId = subpage.id || subpage.url;
							if (subpageId) {
								//过滤空对象
								var subWebview = plus.webview.getWebviewById(subpageId);
								if (!subWebview) {
									//如果该webview不存在，则创建
									subWebview = plus.webview.create(subpage.url, subpageId, $.windowOptions(subpage.styles), $.extend({
										preload: true
									}, subpage.extras));
								}
								webview.append(subWebview);
							}
						});
					}
				}
			}

			//TODO 理论上，子webview也应该计算到预加载队列中，但这样就麻烦了，要退必须退整体，否则可能出现问题；
			$.webviews[id] = {
				webview: webview, //目前仅preload的缓存webview
				preload: true,
				show: $.showOptions(options.show),
				afterShowMethodName: options.afterShowMethodName //就不应该用evalJS。应该是通过事件消息通讯
			};
			//索引该预加载窗口
			var preloads = $.data.preloads;
			var index = preloads.indexOf(id);
			if (~index) {
				//删除已存在的(变相调整插入位置)
				preloads.splice(index, 1);
			}
			preloads.push(id);
			if (preloads.length > $.options.preloadLimit) {
				//先进先出
				var first = $.data.preloads.shift();
				var webviewCache = $.webviews[first];
				if (webviewCache && webviewCache.webview) {
					//需要将自己打开的所有页面，全部close；
					//关闭该预加载webview	
					$.closeAll(webviewCache.webview);
				}
				//删除缓存
				delete $.webviews[first];
			}
		} else {
			if (isCreate !== false) {
				//直接创建非预加载窗口
				webview = plus.webview.create(options.url, id, $.windowOptions(options.styles), options.extras);
				if (options.subpages) {
					$.each(options.subpages, function (index, subpage) {
						var subpageId = subpage.id || subpage.url;
						var subWebview = plus.webview.getWebviewById(subpageId);
						if (!subWebview) {
							subWebview = plus.webview.create(subpage.url, subpageId, $.windowOptions(subpage.styles), subpage.extras);
						}
						webview.append(subWebview);
					});
				}
			}
		}
		return webview;
	};

	/**
  * 预加载
  */
	$.preload = function (options) {
		//调用预加载函数，不管是否传递preload参数，强制变为true
		if (!options.preload) {
			options.preload = true;
		}
		return $.createWindow(options);
	};

	/**
  *关闭当前webview打开的所有webview；
  */
	$.closeOpened = function (webview) {
		var opened = webview.opened();
		if (opened) {
			for (var i = 0, len = opened.length; i < len; i++) {
				var openedWebview = opened[i];
				var open_open = openedWebview.opened();
				if (open_open && open_open.length > 0) {
					//关闭打开的webview
					$.closeOpened(openedWebview);
					//关闭自己
					openedWebview.close("none");
				} else {
					//如果直接孩子节点，就不用关闭了，因为父关闭的时候，会自动关闭子；
					if (openedWebview.parent() !== webview) {
						openedWebview.close('none');
					}
				}
			}
		}
	};
	$.closeAll = function (webview, aniShow) {
		$.closeOpened(webview);
		if (aniShow) {
			webview.close(aniShow);
		} else {
			webview.close();
		}
	};

	/**
  * 批量创建webview
  * @param {type} options
  * @returns {undefined}
  */
	$.createWindows = function (options) {
		$.each(options, function (index, option) {
			//初始化预加载窗口(创建)和非预加载窗口(仅配置，不创建)
			$.createWindow(option, false);
		});
	};
	/**
  * 创建当前页面的子webview
  * @param {type} options
  * @returns {webview}
  */
	$.appendWebview = function (options) {
		if (!window.plus) {
			return;
		}
		var id = options.id || options.url;
		var webview;
		if (!$.webviews[id]) {
			//保证执行一遍
			//TODO 这里也有隐患，比如某个webview不是作为subpage创建的，而是作为target webview的话；
			if (!plus.webview.getWebviewById(id)) {
				webview = plus.webview.create(options.url, id, options.styles, options.extras);
			}
			//之前的实现方案：子窗口loaded之后再append到父窗口中；
			//问题：部分子窗口loaded事件发生较晚，此时执行父窗口的children方法会返回空，导致父子通讯失败；
			//     比如父页面执行完preload事件后，需触发子页面的preload事件，此时未append的话，就无法触发；
			//修改方式：不再监控loaded事件，直接append
			//by chb@20150521
			// webview.addEventListener('loaded', function() {
			plus.webview.currentWebview().append(webview);
			// });
			$.webviews[id] = options;
		}
		return webview;
	};

	//全局webviews
	$.webviews = {};
	//预加载窗口索引
	$.data.preloads = [];
	//$.currentWebview
	$.plusReady(function () {
		$.currentWebview = plus.webview.currentWebview();
	});
	$.addInit({
		name: '5+',
		index: 100,
		handle: function handle() {
			var options = $.options;
			var subpages = options.subpages || [];
			if ($.os.plus) {
				$.plusReady(function () {
					//TODO  这里需要判断一下，最好等子窗口加载完毕后，再调用主窗口的show方法；
					//或者：在openwindow方法中，监听实现；
					$.each(subpages, function (index, subpage) {
						$.appendWebview(subpage);
					});
					//判断是否首页
					if (plus.webview.currentWebview() === plus.webview.getWebviewById(plus.runtime.appid)) {
						//首页需要自己激活预加载；
						//timeout因为子页面loaded之后才append的，防止子页面尚未append、从而导致其preload未触发的问题；
						setTimeout(function () {
							triggerPreload(plus.webview.currentWebview());
						}, 300);
					}
					//设置ios顶部状态栏颜色；
					if ($.os.ios && $.options.statusBarBackground) {
						plus.navigator.setStatusBarBackground($.options.statusBarBackground);
					}
					if ($.os.android && parseFloat($.os.version) < 4.4) {
						//解决Android平台4.4版本以下，resume后，父窗体标题延迟渲染的问题；
						if (plus.webview.currentWebview().parent() == null) {
							document.addEventListener("resume", function () {
								var body = document.body;
								body.style.display = 'none';
								setTimeout(function () {
									body.style.display = '';
								}, 10);
							});
						}
					}
				});
			} else {
				//已支持iframe嵌入
				//				if (subpages.length > 0) {
				//					var err = document.createElement('div');
				//					err.className = 'mui-error';
				//					//文字描述
				//					var span = document.createElement('span');
				//					span.innerHTML = '在该浏览器下，不支持创建子页面，具体参考';
				//					err.appendChild(span);
				//					var a = document.createElement('a');
				//					a.innerHTML = '"mui框架适用场景"';
				//					a.href = 'http://ask.dcloud.net.cn/article/113';
				//					err.appendChild(a);
				//					document.body.appendChild(err);
				//					console.log('在该浏览器下，不支持创建子页面');
				//				}

			}
		}
	});
	window.addEventListener('preload', function () {
		//处理预加载部分
		var webviews = $.options.preloadPages || [];
		$.plusReady(function () {
			$.each(webviews, function (index, webview) {
				$.createWindow($.extend(webview, {
					preload: true
				}));
			});
		});
	});
	$.supportStatusbarOffset = function () {
		return $.os.plus && $.os.ios && parseFloat($.os.version) >= 7;
	};
	$.ready(function () {
		//标识当前环境支持statusbar
		if ($.supportStatusbarOffset()) {
			document.body.classList.add('mui-statusbar');
		}
	});
})(mui);

/**
 * mui back
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
	/**
  * register back
  * @param {type} back
  * @returns {$.gestures}
  */
	$.addBack = function (back) {
		return $.addAction('backs', back);
	};
	/**
  * default
  */
	$.addBack({
		name: 'browser',
		index: 100,
		handle: function handle() {
			if (window.history.length > 1) {
				window.history.back();
				return true;
			}
			return false;
		}
	});
	/**
  * 后退
  */
	$.back = function () {
		if (typeof $.options.beforeback === 'function') {
			if ($.options.beforeback() === false) {
				return;
			}
		}
		$.doAction('backs');
	};
	window.addEventListener('tap', function (e) {
		var action = $.targets.action;
		if (action && action.classList.contains('mui-action-back')) {
			$.back();
			$.targets.action = false;
		}
	});
	window.addEventListener('swiperight', function (e) {
		var detail = e.detail;
		if ($.options.swipeBack === true && Math.abs(detail.angle) < 3) {
			$.back();
		}
	});
})(mui, window);
/**
 * mui back 5+
 * @param {type} $
 * @param {type} window
 * @returns {undefined}
 */
(function ($, window) {
	if ($.os.plus && $.os.android) {
		$.addBack({
			name: 'mui',
			index: 5,
			handle: function handle() {
				//后续重新设计此处，将back放到各个空间内部实现
				//popover
				if ($.targets._popover && $.targets._popover.classList.contains('mui-active')) {
					$($.targets._popover).popover('hide');
					return true;
				}
				//offcanvas
				var offCanvas = document.querySelector('.mui-off-canvas-wrap.mui-active');
				if (offCanvas) {
					$(offCanvas).offCanvas('close');
					return true;
				}
				var previewImage = $.isFunction($.getPreviewImage) && $.getPreviewImage();
				if (previewImage && previewImage.isShown()) {
					previewImage.close();
					return true;
				}
				//popup
				return $.closePopup();
			}
		});
	}
	//首次按下back按键的时间
	$.__back__first = null;
	/**
  * 5+ back
  */
	$.addBack({
		name: '5+',
		index: 10,
		handle: function handle() {
			if (!window.plus) {
				return false;
			}
			var wobj = plus.webview.currentWebview();
			var parent = wobj.parent();
			if (parent) {
				parent.evalJS('mui&&mui.back();');
			} else {
				wobj.canBack(function (e) {
					//by chb 暂时注释，在碰到类似popover之类的锚点的时候，需多次点击才能返回；
					if (e.canBack) {
						//webview history back
						window.history.back();
					} else {
						//webview close or hide
						//fixed by fxy 此处不应该用opener判断，因为用户有可能自己close掉当前窗口的opener。这样的话。opener就为空了，导致不能执行close
						if (wobj.id === plus.runtime.appid) {
							//首页
							//首页不存在opener的情况下，后退实际上应该是退出应用；
							//首次按键，提示‘再按一次退出应用’
							if (!$.__back__first) {
								$.__back__first = new Date().getTime();
								mui.toast('再按一次退出应用');
								setTimeout(function () {
									$.__back__first = null;
								}, 2000);
							} else {
								if (new Date().getTime() - $.__back__first < 2000) {
									plus.runtime.quit();
								}
							}
						} else {
							//其他页面，
							if (wobj.preload) {
								wobj.hide("auto");
							} else {
								//关闭页面时，需要将其打开的所有子页面全部关闭；
								$.closeAll(wobj);
							}
						}
					}
				});
			}
			return true;
		}
	});

	$.menu = function () {
		var menu = document.querySelector('.mui-action-menu');
		if (menu) {
			$.trigger(menu, $.EVENT_START); //临时处理menu无touchstart的话，找不到当前targets的问题
			$.trigger(menu, 'tap');
		} else {
			//执行父窗口的menu
			if (window.plus) {
				var wobj = $.currentWebview;
				var parent = wobj.parent();
				if (parent) {
					//又得evalJS
					parent.evalJS('mui&&mui.menu();');
				}
			}
		}
	};
	var __back = function __back() {
		$.back();
	};
	var __menu = function __menu() {
		$.menu();
	};
	//默认监听
	$.plusReady(function () {
		if ($.options.keyEventBind.backbutton) {
			plus.key.addEventListener('backbutton', __back, false);
		}
		if ($.options.keyEventBind.menubutton) {
			plus.key.addEventListener('menubutton', __menu, false);
		}
	});
	//处理按键监听事件
	$.addInit({
		name: 'keyEventBind',
		index: 1000,
		handle: function handle() {
			$.plusReady(function () {
				//如果不为true，则移除默认监听
				if (!$.options.keyEventBind.backbutton) {
					plus.key.removeEventListener('backbutton', __back);
				}
				if (!$.options.keyEventBind.menubutton) {
					plus.key.removeEventListener('menubutton', __menu);
				}
			});
		}
	});
})(mui, window);
/**
 * mui.init pulldownRefresh
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
	$.addInit({
		name: 'pullrefresh',
		index: 1000,
		handle: function handle() {
			var options = $.options;
			var pullRefreshOptions = options.pullRefresh || {};
			var hasPulldown = pullRefreshOptions.down && pullRefreshOptions.down.hasOwnProperty('callback');
			var hasPullup = pullRefreshOptions.up && pullRefreshOptions.up.hasOwnProperty('callback');
			if (hasPulldown || hasPullup) {
				var container = pullRefreshOptions.container;
				if (container) {
					var $container = $(container);
					if ($container.length === 1) {
						if ($.os.plus) {
							//5+环境
							if (hasPulldown && pullRefreshOptions.down.style == "circle") {
								//原生转圈
								$.plusReady(function () {
									//这里改写$.fn.pullRefresh
									$.fn.pullRefresh = $.fn.pullRefresh_native;
									$container.pullRefresh(pullRefreshOptions);
								});
							} else if ($.os.android) {
								//非原生转圈，但是Android环境
								$.plusReady(function () {
									//这里改写$.fn.pullRefresh
									$.fn.pullRefresh = $.fn.pullRefresh_native;
									var webview = plus.webview.currentWebview();
									if (window.__NWin_Enable__ === false) {
										//不支持多webview
										$container.pullRefresh(pullRefreshOptions);
									} else {
										if (hasPullup) {
											//当前页面初始化pullup
											var upOptions = {};
											upOptions.up = pullRefreshOptions.up;
											upOptions.webviewId = webview.id || webview.getURL();
											$container.pullRefresh(upOptions);
										}
										if (hasPulldown) {
											var parent = webview.parent();
											var id = webview.id || webview.getURL();
											if (parent) {
												if (!hasPullup) {
													//如果没有上拉加载，需要手动初始化一个默认的pullRefresh，以便当前页面容器可以调用endPulldownToRefresh等方法
													$container.pullRefresh({
														webviewId: id
													});
												}
												var downOptions = {
													webviewId: id //子页面id
												};
												downOptions.down = $.extend({}, pullRefreshOptions.down);
												downOptions.down.callback = '_CALLBACK';
												//改写父页面的$.fn.pullRefresh
												parent.evalJS("mui.fn.pullRefresh=mui.fn.pullRefresh_native");
												//父页面初始化pulldown
												parent.evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('" + JSON.stringify(downOptions) + "')");
											}
										}
									}
								});
							} else {
								//非原生转圈，iOS环境
								$container.pullRefresh(pullRefreshOptions);
							}
						} else {
							$container.pullRefresh(pullRefreshOptions);
						}
					}
				}
			}
		}
	});
})(mui);
/**
 * mui ajax
 * @param {type} $
 * @returns {undefined}
 */
(function ($, window, undefined) {

	var jsonType = 'application/json';
	var htmlType = 'text/html';
	var rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	var scriptTypeRE = /^(?:text|application)\/javascript/i;
	var xmlTypeRE = /^(?:text|application)\/xml/i;
	var blankRE = /^\s*$/;

	$.ajaxSettings = {
		type: 'GET',
		beforeSend: $.noop,
		success: $.noop,
		error: $.noop,
		complete: $.noop,
		context: null,
		xhr: function xhr(protocol) {
			return new window.XMLHttpRequest();
		},
		accepts: {
			script: 'text/javascript, application/javascript, application/x-javascript',
			json: jsonType,
			xml: 'application/xml, text/xml',
			html: htmlType,
			text: 'text/plain'
		},
		timeout: 0,
		processData: true,
		cache: true
	};
	var ajaxBeforeSend = function ajaxBeforeSend(xhr, settings) {
		var context = settings.context;
		if (settings.beforeSend.call(context, xhr, settings) === false) {
			return false;
		}
	};
	var ajaxSuccess = function ajaxSuccess(data, xhr, settings) {
		settings.success.call(settings.context, data, 'success', xhr);
		ajaxComplete('success', xhr, settings);
	};
	// type: "timeout", "error", "abort", "parsererror"
	var ajaxError = function ajaxError(error, type, xhr, settings) {
		settings.error.call(settings.context, xhr, type, error);
		ajaxComplete(type, xhr, settings);
	};
	// status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	var ajaxComplete = function ajaxComplete(status, xhr, settings) {
		settings.complete.call(settings.context, xhr, status);
	};

	var serialize = function serialize(params, obj, traditional, scope) {
		var type,
		    array = $.isArray(obj),
		    hash = $.isPlainObject(obj);
		$.each(obj, function (key, value) {
			type = $.type(value);
			if (scope) {
				key = traditional ? scope : scope + '[' + (hash || type === 'object' || type === 'array' ? key : '') + ']';
			}
			// handle data in serializeArray() format
			if (!scope && array) {
				params.add(value.name, value.value);
			}
			// recurse into nested objects
			else if (type === "array" || !traditional && type === "object") {
					serialize(params, value, traditional, key);
				} else {
					params.add(key, value);
				}
		});
	};
	var serializeData = function serializeData(options) {
		if (options.processData && options.data && typeof options.data !== "string") {
			var contentType = options.contentType;
			if (!contentType && options.headers) {
				contentType = options.headers['Content-Type'];
			}
			if (contentType && ~contentType.indexOf(jsonType)) {
				//application/json
				options.data = JSON.stringify(options.data);
			} else {
				options.data = $.param(options.data, options.traditional);
			}
		}
		if (options.data && (!options.type || options.type.toUpperCase() === 'GET')) {
			options.url = appendQuery(options.url, options.data);
			options.data = undefined;
		}
	};
	var appendQuery = function appendQuery(url, query) {
		if (query === '') {
			return url;
		}
		return (url + '&' + query).replace(/[&?]{1,2}/, '?');
	};
	var mimeToDataType = function mimeToDataType(mime) {
		if (mime) {
			mime = mime.split(';', 2)[0];
		}
		return mime && (mime === htmlType ? 'html' : mime === jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
	};
	var parseArguments = function parseArguments(url, data, success, dataType) {
		if ($.isFunction(data)) {
			dataType = success, success = data, data = undefined;
		}
		if (!$.isFunction(success)) {
			dataType = success, success = undefined;
		}
		return {
			url: url,
			data: data,
			success: success,
			dataType: dataType
		};
	};
	$.ajax = function (url, options) {
		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === "object") {
			options = url;
			url = undefined;
		}
		var settings = options || {};
		settings.url = url || settings.url;
		for (var key in $.ajaxSettings) {
			if (settings[key] === undefined) {
				settings[key] = $.ajaxSettings[key];
			}
		}
		serializeData(settings);
		var dataType = settings.dataType;

		if (settings.cache === false || (!options || options.cache !== true) && 'script' === dataType) {
			settings.url = appendQuery(settings.url, '_=' + $.now());
		}
		var mime = settings.accepts[dataType && dataType.toLowerCase()];
		var headers = {};
		var setHeader = function setHeader(name, value) {
			headers[name.toLowerCase()] = [name, value];
		};
		var protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol;
		var xhr = settings.xhr(settings);
		var nativeSetHeader = xhr.setRequestHeader;
		var abortTimeout;

		setHeader('X-Requested-With', 'XMLHttpRequest');
		setHeader('Accept', mime || '*/*');
		if (!!(mime = settings.mimeType || mime)) {
			if (mime.indexOf(',') > -1) {
				mime = mime.split(',', 2)[0];
			}
			xhr.overrideMimeType && xhr.overrideMimeType(mime);
		}
		if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() !== 'GET') {
			setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
		}
		if (settings.headers) {
			for (var name in settings.headers) {
				setHeader(name, settings.headers[name]);
			}
		}
		xhr.setRequestHeader = setHeader;

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				xhr.onreadystatechange = $.noop;
				clearTimeout(abortTimeout);
				var result,
				    error = false;
				var isLocal = protocol === 'file:';
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || xhr.status === 0 && isLocal && xhr.responseText) {
					dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
					result = xhr.responseText;
					try {
						// http://perfectionkills.com/global-eval-what-are-the-options/
						if (dataType === 'script') {
							(eval)(result);
						} else if (dataType === 'xml') {
							result = xhr.responseXML;
						} else if (dataType === 'json') {
							result = blankRE.test(result) ? null : $.parseJSON(result);
						}
					} catch (e) {
						error = e;
					}

					if (error) {
						ajaxError(error, 'parsererror', xhr, settings);
					} else {
						ajaxSuccess(result, xhr, settings);
					}
				} else {
					var status = xhr.status ? 'error' : 'abort';
					var statusText = xhr.statusText || null;
					if (isLocal) {
						status = 'error';
						statusText = '404';
					}
					ajaxError(statusText, status, xhr, settings);
				}
			}
		};
		if (ajaxBeforeSend(xhr, settings) === false) {
			xhr.abort();
			ajaxError(null, 'abort', xhr, settings);
			return xhr;
		}

		if (settings.xhrFields) {
			for (var name in settings.xhrFields) {
				xhr[name] = settings.xhrFields[name];
			}
		}

		var async = 'async' in settings ? settings.async : true;

		xhr.open(settings.type.toUpperCase(), settings.url, async, settings.username, settings.password);

		for (var name in headers) {
			if (headers.hasOwnProperty(name)) {
				nativeSetHeader.apply(xhr, headers[name]);
			}
		}
		if (settings.timeout > 0) {
			abortTimeout = setTimeout(function () {
				xhr.onreadystatechange = $.noop;
				xhr.abort();
				ajaxError(null, 'timeout', xhr, settings);
			}, settings.timeout);
		}
		xhr.send(settings.data ? settings.data : null);
		return xhr;
	};

	$.param = function (obj, traditional) {
		var params = [];
		params.add = function (k, v) {
			this.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
		};
		serialize(params, obj, traditional);
		return params.join('&').replace(/%20/g, '+');
	};
	$.get = function () /* url, data, success, dataType */{
		return $.ajax(parseArguments.apply(null, arguments));
	};

	$.post = function () /* url, data, success, dataType */{
		var options = parseArguments.apply(null, arguments);
		options.type = 'POST';
		return $.ajax(options);
	};

	$.getJSON = function () /* url, data, success */{
		var options = parseArguments.apply(null, arguments);
		options.dataType = 'json';
		return $.ajax(options);
	};

	$.fn.load = function (url, data, success) {
		if (!this.length) return this;
		var self = this,
		    parts = url.split(/\s/),
		    selector,
		    options = parseArguments(url, data, success),
		    callback = options.success;
		if (parts.length > 1) options.url = parts[0], selector = parts[1];
		options.success = function (response) {
			if (selector) {
				var div = document.createElement('div');
				div.innerHTML = response.replace(rscript, "");
				var selectorDiv = document.createElement('div');
				var childs = div.querySelectorAll(selector);
				if (childs && childs.length > 0) {
					for (var i = 0, len = childs.length; i < len; i++) {
						selectorDiv.appendChild(childs[i]);
					}
				}
				self[0].innerHTML = selectorDiv.innerHTML;
			} else {
				self[0].innerHTML = response;
			}
			callback && callback.apply(self, arguments);
		};
		$.ajax(options);
		return this;
	};
})(mui, window);
/**
 * 5+ ajax
 */
(function ($) {
	var originAnchor = document.createElement('a');
	originAnchor.href = window.location.href;
	$.plusReady(function () {
		$.ajaxSettings = $.extend($.ajaxSettings, {
			xhr: function xhr(settings) {
				if (settings.crossDomain) {
					//强制使用plus跨域
					return new plus.net.XMLHttpRequest();
				}
				//仅在webview的url为远程文件，且ajax请求的资源不同源下使用plus.net.XMLHttpRequest
				if (originAnchor.protocol !== 'file:') {
					var urlAnchor = document.createElement('a');
					urlAnchor.href = settings.url;
					urlAnchor.href = urlAnchor.href;
					settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
					if (settings.crossDomain) {
						return new plus.net.XMLHttpRequest();
					}
				}
				if ($.os.ios && window.webkit && window.webkit.messageHandlers) {
					//wkwebview下同样使用5+ xhr
					return new plus.net.XMLHttpRequest();
				}
				return new window.XMLHttpRequest();
			}
		});
	});
})(mui);
/**
 * mui layout(offset[,position,width,height...])
 * @param {type} $
 * @param {type} window
 * @param {type} undefined
 * @returns {undefined}
 */
(function ($, window, undefined) {
	$.offset = function (element) {
		var box = {
			top: 0,
			left: 0
		};
		if (_typeof(element.getBoundingClientRect) !== undefined) {
			box = element.getBoundingClientRect();
		}
		return {
			top: box.top + window.pageYOffset - element.clientTop,
			left: box.left + window.pageXOffset - element.clientLeft
		};
	};
})(mui, window);
/**
 * mui animation
 */
(function ($, window) {
	/**
  * scrollTo
  */
	$.scrollTo = function (scrollTop, duration, callback) {
		duration = duration || 1000;
		var scroll = function scroll(duration) {
			if (duration <= 0) {
				window.scrollTo(0, scrollTop);
				callback && callback();
				return;
			}
			var distaince = scrollTop - window.scrollY;
			setTimeout(function () {
				window.scrollTo(0, window.scrollY + distaince / duration * 10);
				scroll(duration - 10);
			}, 16.7);
		};
		scroll(duration);
	};
	$.animationFrame = function (cb) {
		var args, isQueued, context;
		return function () {
			args = arguments;
			context = this;
			if (!isQueued) {
				isQueued = true;
				requestAnimationFrame(function () {
					cb.apply(context, args);
					isQueued = false;
				});
			}
		};
	};
})(mui, window);
(function ($) {
	var initializing = false,
	    fnTest = /xyz/.test(function () {
		
	}) ? /\b_super\b/ : /.*/;

	var Class = function Class() {};
	Class.extend = function (prop) {
		var _super = this.prototype;
		initializing = true;
		var prototype = new this();
		initializing = false;
		for (var name in prop) {
			prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? function (name, fn) {
				return function () {
					var tmp = this._super;

					this._super = _super[name];

					var ret = fn.apply(this, arguments);
					this._super = tmp;

					return ret;
				};
			}(name, prop[name]) : prop[name];
		}
		function Class() {
			if (!initializing && this.init) this.init.apply(this, arguments);
		}
		Class.prototype = prototype;
		Class.prototype.constructor = Class;
		Class.extend = arguments.callee;
		return Class;
	};
	$.Class = Class;
})(mui);
(function ($, document, undefined) {
	var CLASS_PULL_TOP_POCKET = 'mui-pull-top-pocket';
	var CLASS_PULL_BOTTOM_POCKET = 'mui-pull-bottom-pocket';
	var CLASS_PULL = 'mui-pull';
	var CLASS_PULL_LOADING = 'mui-pull-loading';
	var CLASS_PULL_CAPTION = 'mui-pull-caption';
	var CLASS_PULL_CAPTION_DOWN = 'mui-pull-caption-down';
	var CLASS_PULL_CAPTION_REFRESH = 'mui-pull-caption-refresh';
	var CLASS_PULL_CAPTION_NOMORE = 'mui-pull-caption-nomore';

	var CLASS_ICON = 'mui-icon';
	var CLASS_SPINNER = 'mui-spinner';
	var CLASS_ICON_PULLDOWN = 'mui-icon-pulldown';

	var CLASS_BLOCK = 'mui-block';
	var CLASS_HIDDEN = 'mui-hidden';
	var CLASS_VISIBILITY = 'mui-visibility';

	var CLASS_LOADING_UP = CLASS_PULL_LOADING + ' ' + CLASS_ICON + ' ' + CLASS_ICON_PULLDOWN;
	var CLASS_LOADING_DOWN = CLASS_PULL_LOADING + ' ' + CLASS_ICON + ' ' + CLASS_ICON_PULLDOWN;
	var CLASS_LOADING = CLASS_PULL_LOADING + ' ' + CLASS_ICON + ' ' + CLASS_SPINNER;

	var pocketHtml = ['<div class="' + CLASS_PULL + '">', '<div class="{icon}"></div>', '<div class="' + CLASS_PULL_CAPTION + '">{contentrefresh}</div>', '</div>'].join('');

	var PullRefresh = {
		init: function init(element, options) {
			this._super(element, $.extend(true, {
				scrollY: true,
				scrollX: false,
				indicators: true,
				deceleration: 0.003,
				down: {
					height: 50,
					contentinit: '下拉可以刷新',
					contentdown: '下拉可以刷新',
					contentover: '释放立即刷新',
					contentrefresh: '正在刷新...'
				},
				up: {
					height: 50,
					auto: false,
					contentinit: '上拉显示更多',
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了',
					duration: 300
				}
			}, options));
		},
		_init: function _init() {
			this._super();
			this._initPocket();
		},
		_initPulldownRefresh: function _initPulldownRefresh() {
			this.pulldown = true;
			if (this.topPocket) {
				this.pullPocket = this.topPocket;
				this.pullPocket.classList.add(CLASS_BLOCK);
				this.pullPocket.classList.add(CLASS_VISIBILITY);
				this.pullCaption = this.topCaption;
				this.pullLoading = this.topLoading;
			}
		},
		_initPullupRefresh: function _initPullupRefresh() {
			this.pulldown = false;
			if (this.bottomPocket) {
				this.pullPocket = this.bottomPocket;
				this.pullPocket.classList.add(CLASS_BLOCK);
				this.pullPocket.classList.add(CLASS_VISIBILITY);
				this.pullCaption = this.bottomCaption;
				this.pullLoading = this.bottomLoading;
			}
		},
		_initPocket: function _initPocket() {
			var options = this.options;
			if (options.down && options.down.hasOwnProperty('callback')) {
				this.topPocket = this.scroller.querySelector('.' + CLASS_PULL_TOP_POCKET);
				if (!this.topPocket) {
					this.topPocket = this._createPocket(CLASS_PULL_TOP_POCKET, options.down, CLASS_LOADING_DOWN);
					this.wrapper.insertBefore(this.topPocket, this.wrapper.firstChild);
				}
				this.topLoading = this.topPocket.querySelector('.' + CLASS_PULL_LOADING);
				this.topCaption = this.topPocket.querySelector('.' + CLASS_PULL_CAPTION);
			}
			if (options.up && options.up.hasOwnProperty('callback')) {
				this.bottomPocket = this.scroller.querySelector('.' + CLASS_PULL_BOTTOM_POCKET);
				if (!this.bottomPocket) {
					this.bottomPocket = this._createPocket(CLASS_PULL_BOTTOM_POCKET, options.up, CLASS_LOADING);
					this.scroller.appendChild(this.bottomPocket);
				}
				this.bottomLoading = this.bottomPocket.querySelector('.' + CLASS_PULL_LOADING);
				this.bottomCaption = this.bottomPocket.querySelector('.' + CLASS_PULL_CAPTION);
				//TODO only for h5
				this.wrapper.addEventListener('scrollbottom', this);
			}
		},
		_createPocket: function _createPocket(clazz, options, iconClass) {
			var pocket = document.createElement('div');
			pocket.className = clazz;
			pocket.innerHTML = pocketHtml.replace('{contentrefresh}', options.contentinit).replace('{icon}', iconClass);
			return pocket;
		},
		_resetPullDownLoading: function _resetPullDownLoading() {
			var loading = this.pullLoading;
			if (loading) {
				this.pullCaption.innerHTML = this.options.down.contentdown;
				loading.style.webkitTransition = "";
				loading.style.webkitTransform = "";
				loading.style.webkitAnimation = "";
				loading.className = CLASS_LOADING_DOWN;
			}
		},
		_setCaptionClass: function _setCaptionClass(isPulldown, caption, title) {
			if (!isPulldown) {
				switch (title) {
					case this.options.up.contentdown:
						caption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_DOWN;
						break;
					case this.options.up.contentrefresh:
						caption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_REFRESH;
						break;
					case this.options.up.contentnomore:
						caption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_NOMORE;
						break;
				}
			}
		},
		_setCaption: function _setCaption(title, reset) {
			if (this.loading) {
				return;
			}
			var options = this.options;
			var pocket = this.pullPocket;
			var caption = this.pullCaption;
			var loading = this.pullLoading;
			var isPulldown = this.pulldown;
			var self = this;
			if (pocket) {
				if (reset) {
					setTimeout(function () {
						caption.innerHTML = self.lastTitle = title;
						if (isPulldown) {
							loading.className = CLASS_LOADING_DOWN;
						} else {
							self._setCaptionClass(false, caption, title);
							loading.className = CLASS_LOADING;
						}
						loading.style.webkitAnimation = "";
						loading.style.webkitTransition = "";
						loading.style.webkitTransform = "";
					}, 100);
				} else {
					if (title !== this.lastTitle) {
						caption.innerHTML = title;
						if (isPulldown) {
							if (title === options.down.contentrefresh) {
								loading.className = CLASS_LOADING;
								loading.style.webkitAnimation = "spinner-spin 1s step-end infinite";
							} else if (title === options.down.contentover) {
								loading.className = CLASS_LOADING_UP;
								loading.style.webkitTransition = "-webkit-transform 0.3s ease-in";
								loading.style.webkitTransform = "rotate(180deg)";
							} else if (title === options.down.contentdown) {
								loading.className = CLASS_LOADING_DOWN;
								loading.style.webkitTransition = "-webkit-transform 0.3s ease-in";
								loading.style.webkitTransform = "rotate(0deg)";
							}
						} else {
							if (title === options.up.contentrefresh) {
								loading.className = CLASS_LOADING + ' ' + CLASS_VISIBILITY;
							} else {
								loading.className = CLASS_LOADING + ' ' + CLASS_HIDDEN;
							}
							self._setCaptionClass(false, caption, title);
						}
						this.lastTitle = title;
					}
				}
			}
		}
	};
	$.PullRefresh = PullRefresh;
})(mui, document);
(function ($, window, document, undefined) {
	var CLASS_SCROLL = 'mui-scroll';
	var CLASS_SCROLLBAR = 'mui-scrollbar';
	var CLASS_INDICATOR = 'mui-scrollbar-indicator';
	var CLASS_SCROLLBAR_VERTICAL = CLASS_SCROLLBAR + '-vertical';
	var CLASS_SCROLLBAR_HORIZONTAL = CLASS_SCROLLBAR + '-horizontal';

	var CLASS_ACTIVE = 'mui-active';

	var ease = {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function fn(k) {
				return k * (2 - k);
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
			fn: function fn(k) {
				return Math.sqrt(1 - --k * k);
			}
		},
		outCirc: {
			style: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
		},
		outCubic: {
			style: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
		}
	};
	var Scroll = $.Class.extend({
		init: function init(element, options) {
			this.wrapper = this.element = element;
			this.scroller = this.wrapper.children[0];
			this.scrollerStyle = this.scroller && this.scroller.style;
			this.stopped = false;

			this.options = $.extend(true, {
				scrollY: true, //是否竖向滚动
				scrollX: false, //是否横向滚动
				startX: 0, //初始化时滚动至x
				startY: 0, //初始化时滚动至y

				indicators: true, //是否显示滚动条
				stopPropagation: false,
				hardwareAccelerated: true,
				fixedBadAndorid: false,
				preventDefaultException: {
					tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/
				},
				momentum: true,

				snapX: 0.5, //横向切换距离(以当前容器宽度为基准)
				snap: false, //图片轮播，拖拽式选项卡

				bounce: true, //是否启用回弹
				bounceTime: 500, //回弹动画时间
				bounceEasing: ease.outCirc, //回弹动画曲线

				scrollTime: 500,
				scrollEasing: ease.outCubic, //轮播动画曲线

				directionLockThreshold: 5,

				parallaxElement: false, //视差元素
				parallaxRatio: 0.5
			}, options);

			this.x = 0;
			this.y = 0;
			this.translateZ = this.options.hardwareAccelerated ? ' translateZ(0)' : '';

			this._init();
			if (this.scroller) {
				this.refresh();
				//				if (this.options.startX !== 0 || this.options.startY !== 0) { //需要判断吗？后续根据实际情况再看看
				this.scrollTo(this.options.startX, this.options.startY);
				//				}
			}
		},
		_init: function _init() {
			this._initParallax();
			this._initIndicators();
			this._initEvent();
		},
		_initParallax: function _initParallax() {
			if (this.options.parallaxElement) {
				this.parallaxElement = document.querySelector(this.options.parallaxElement);
				this.parallaxStyle = this.parallaxElement.style;
				this.parallaxHeight = this.parallaxElement.offsetHeight;
				this.parallaxImgStyle = this.parallaxElement.querySelector('img').style;
			}
		},
		_initIndicators: function _initIndicators() {
			var self = this;
			self.indicators = [];
			if (!this.options.indicators) {
				return;
			}
			var indicators = [],
			    indicator;

			// Vertical scrollbar
			if (self.options.scrollY) {
				indicator = {
					el: this._createScrollBar(CLASS_SCROLLBAR_VERTICAL),
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if (this.options.scrollX) {
				indicator = {
					el: this._createScrollBar(CLASS_SCROLLBAR_HORIZONTAL),
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			for (var i = indicators.length; i--;) {
				this.indicators.push(new Indicator(this, indicators[i]));
			}
		},
		_initSnap: function _initSnap() {
			this.currentPage = {};
			this.pages = [];
			var snaps = this.snaps;
			var length = snaps.length;
			var m = 0;
			var n = -1;
			var x = 0;
			var leftX = 0;
			var rightX = 0;
			var snapX = 0;
			for (var i = 0; i < length; i++) {
				var snap = snaps[i];
				var offsetLeft = snap.offsetLeft;
				var offsetWidth = snap.offsetWidth;
				if (i === 0 || offsetLeft <= snaps[i - 1].offsetLeft) {
					m = 0;
					n++;
				}
				if (!this.pages[m]) {
					this.pages[m] = [];
				}
				x = this._getSnapX(offsetLeft);
				snapX = Math.round(offsetWidth * this.options.snapX);
				leftX = x - snapX;
				rightX = x - offsetWidth + snapX;
				this.pages[m][n] = {
					x: x,
					leftX: leftX,
					rightX: rightX,
					pageX: m,
					element: snap
				};
				if (snap.classList.contains(CLASS_ACTIVE)) {
					this.currentPage = this.pages[m][0];
				}
				if (x >= this.maxScrollX) {
					m++;
				}
			}
			this.options.startX = this.currentPage.x || 0;
		},
		_getSnapX: function _getSnapX(offsetLeft) {
			return Math.max(Math.min(0, -offsetLeft + this.wrapperWidth / 2), this.maxScrollX);
		},
		_gotoPage: function _gotoPage(index) {
			this.currentPage = this.pages[Math.min(index, this.pages.length - 1)][0];
			for (var i = 0, len = this.snaps.length; i < len; i++) {
				if (i === index) {
					this.snaps[i].classList.add(CLASS_ACTIVE);
				} else {
					this.snaps[i].classList.remove(CLASS_ACTIVE);
				}
			}
			this.scrollTo(this.currentPage.x, 0, this.options.scrollTime);
		},
		_nearestSnap: function _nearestSnap(x) {
			if (!this.pages.length) {
				return {
					x: 0,
					pageX: 0
				};
			}
			var i = 0;
			var length = this.pages.length;
			if (x > 0) {
				x = 0;
			} else if (x < this.maxScrollX) {
				x = this.maxScrollX;
			}
			for (; i < length; i++) {
				var nearestX = this.direction === 'left' ? this.pages[i][0].leftX : this.pages[i][0].rightX;
				if (x >= nearestX) {
					return this.pages[i][0];
				}
			}
			return {
				x: 0,
				pageX: 0
			};
		},
		_initEvent: function _initEvent(detach) {
			var action = detach ? 'removeEventListener' : 'addEventListener';
			window[action]('orientationchange', this);
			window[action]('resize', this);

			this.scroller[action]('webkitTransitionEnd', this);

			this.wrapper[action]($.EVENT_START, this);
			this.wrapper[action]($.EVENT_CANCEL, this);
			this.wrapper[action]($.EVENT_END, this);
			this.wrapper[action]('drag', this);
			this.wrapper[action]('dragend', this);
			this.wrapper[action]('flick', this);
			this.wrapper[action]('scrollend', this);
			if (this.options.scrollX) {
				this.wrapper[action]('swiperight', this);
			}
			var segmentedControl = this.wrapper.querySelector('.mui-segmented-control');
			if (segmentedControl) {
				//靠，这个bug排查了一下午，阻止hash跳转，一旦hash跳转会导致可拖拽选项卡的tab不见
				mui(segmentedControl)[detach ? 'off' : 'on']('click', 'a', $.preventDefault);
			}

			this.wrapper[action]('scrollstart', this);
			this.wrapper[action]('refresh', this);
		},
		_handleIndicatorScrollend: function _handleIndicatorScrollend() {
			this.indicators.map(function (indicator) {
				indicator.fade();
			});
		},
		_handleIndicatorScrollstart: function _handleIndicatorScrollstart() {
			this.indicators.map(function (indicator) {
				indicator.fade(1);
			});
		},
		_handleIndicatorRefresh: function _handleIndicatorRefresh() {
			this.indicators.map(function (indicator) {
				indicator.refresh();
			});
		},
		handleEvent: function handleEvent(e) {
			if (this.stopped) {
				this.resetPosition();
				return;
			}

			switch (e.type) {
				case $.EVENT_START:
					this._start(e);
					break;
				case 'drag':
					this.options.stopPropagation && e.stopPropagation();
					this._drag(e);
					break;
				case 'dragend':
				case 'flick':
					this.options.stopPropagation && e.stopPropagation();
					this._flick(e);
					break;
				case $.EVENT_CANCEL:
				case $.EVENT_END:
					this._end(e);
					break;
				case 'webkitTransitionEnd':
					this.transitionTimer && this.transitionTimer.cancel();
					this._transitionEnd(e);
					break;
				case 'scrollstart':
					this._handleIndicatorScrollstart(e);
					break;
				case 'scrollend':
					this._handleIndicatorScrollend(e);
					this._scrollend(e);
					e.stopPropagation();
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'swiperight':
					e.stopPropagation();
					break;
				case 'refresh':
					this._handleIndicatorRefresh(e);
					break;

			}
		},
		_start: function _start(e) {
			this.moved = this.needReset = false;
			this._transitionTime();
			if (this.isInTransition) {
				this.needReset = true;
				this.isInTransition = false;
				var pos = $.parseTranslateMatrix($.getStyles(this.scroller, 'webkitTransform'));
				this.setTranslate(Math.round(pos.x), Math.round(pos.y));
				//				this.resetPosition(); //reset
				$.trigger(this.scroller, 'scrollend', this);
				//				e.stopPropagation();
				e.preventDefault();
			}
			this.reLayout();
			$.trigger(this.scroller, 'beforescrollstart', this);
		},
		_getDirectionByAngle: function _getDirectionByAngle(angle) {
			if (angle < -80 && angle > -100) {
				return 'up';
			} else if (angle >= 80 && angle < 100) {
				return 'down';
			} else if (angle >= 170 || angle <= -170) {
				return 'left';
			} else if (angle >= -35 && angle <= 10) {
				return 'right';
			}
			return null;
		},
		_drag: function _drag(e) {
			//			if (this.needReset) {
			//				e.stopPropagation(); //disable parent drag(nested scroller)
			//				return;
			//			}
			var detail = e.detail;
			if (this.options.scrollY || detail.direction === 'up' || detail.direction === 'down') {
				//如果是竖向滚动或手势方向是上或下
				//ios8 hack
				if ($.os.ios && parseFloat($.os.version) >= 8) {
					//多webview时，离开当前webview会导致后续touch事件不触发
					var clientY = detail.gesture.touches[0].clientY;
					//下拉刷新 or 上拉加载
					if (clientY + 10 > window.innerHeight || clientY < 10) {
						this.resetPosition(this.options.bounceTime);
						return;
					}
				}
			}
			var isPreventDefault = isReturn = false;
			var direction = this._getDirectionByAngle(detail.angle);
			if (detail.direction === 'left' || detail.direction === 'right') {
				if (this.options.scrollX) {
					isPreventDefault = true;
					if (!this.moved) {
						//识别角度(该角度导致轮播不灵敏)
						//						if (direction !== 'left' && direction !== 'right') {
						//							isReturn = true;
						//						} else {
						$.gestures.session.lockDirection = true; //锁定方向
						$.gestures.session.startDirection = detail.direction;
						//						}
					}
				} else if (this.options.scrollY && !this.moved) {
					isReturn = true;
				}
			} else if (detail.direction === 'up' || detail.direction === 'down') {
				if (this.options.scrollY) {
					isPreventDefault = true;
					//					if (!this.moved) { //识别角度,竖向滚动似乎没必要进行小角度验证
					//						if (direction !== 'up' && direction !== 'down') {
					//							isReturn = true;
					//						}
					//					}
					if (!this.moved) {
						$.gestures.session.lockDirection = true; //锁定方向
						$.gestures.session.startDirection = detail.direction;
					}
				} else if (this.options.scrollX && !this.moved) {
					isReturn = true;
				}
			} else {
				isReturn = true;
			}
			if (this.moved || isPreventDefault) {
				e.stopPropagation(); //阻止冒泡(scroll类嵌套)
				detail.gesture && detail.gesture.preventDefault();
			}
			if (isReturn) {
				//禁止非法方向滚动
				return;
			}
			if (!this.moved) {
				$.trigger(this.scroller, 'scrollstart', this);
			} else {
				e.stopPropagation(); //move期间阻止冒泡(scroll嵌套)
			}
			var deltaX = 0;
			var deltaY = 0;
			if (!this.moved) {
				//start
				deltaX = detail.deltaX;
				deltaY = detail.deltaY;
			} else {
				//move
				deltaX = detail.deltaX - $.gestures.session.prevTouch.deltaX;
				deltaY = detail.deltaY - $.gestures.session.prevTouch.deltaY;
			}
			var absDeltaX = Math.abs(detail.deltaX);
			var absDeltaY = Math.abs(detail.deltaY);
			if (absDeltaX > absDeltaY + this.options.directionLockThreshold) {
				deltaY = 0;
			} else if (absDeltaY >= absDeltaX + this.options.directionLockThreshold) {
				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
			var newX = this.x + deltaX;
			var newY = this.y + deltaY;
			// Slow down if outside of the boundaries
			if (newX > 0 || newX < this.maxScrollX) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if (newY > 0 || newY < this.maxScrollY) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			if (!this.requestAnimationFrame) {
				this._updateTranslate();
			}
			this.direction = detail.deltaX > 0 ? 'right' : 'left';
			this.moved = true;
			this.x = newX;
			this.y = newY;
			$.trigger(this.scroller, 'scroll', this);
		},
		_flick: function _flick(e) {
			//			if (!this.moved || this.needReset) {
			//				return;
			//			}
			if (!this.moved) {
				return;
			}
			e.stopPropagation();
			var detail = e.detail;
			this._clearRequestAnimationFrame();
			if (e.type === 'dragend' && detail.flick) {
				//dragend
				return;
			}

			var newX = Math.round(this.x);
			var newY = Math.round(this.y);

			this.isInTransition = false;
			// reset if we are outside of the boundaries
			if (this.resetPosition(this.options.bounceTime)) {
				return;
			}

			this.scrollTo(newX, newY); // ensures that the last position is rounded

			if (e.type === 'dragend') {
				//dragend
				$.trigger(this.scroller, 'scrollend', this);
				return;
			}
			var time = 0;
			var easing = '';
			// start momentum animation if needed
			if (this.options.momentum && detail.flickTime < 300) {
				momentumX = this.hasHorizontalScroll ? this._momentum(this.x, detail.flickDistanceX, detail.flickTime, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
					destination: newX,
					duration: 0
				};
				momentumY = this.hasVerticalScroll ? this._momentum(this.y, detail.flickDistanceY, detail.flickTime, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
					destination: newY,
					duration: 0
				};
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = true;
			}

			if (newX != this.x || newY != this.y) {
				if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
					easing = ease.quadratic;
				}
				this.scrollTo(newX, newY, time, easing);
				return;
			}

			$.trigger(this.scroller, 'scrollend', this);
			//			e.stopPropagation();
		},
		_end: function _end(e) {
			this.needReset = false;
			if (!this.moved && this.needReset || e.type === $.EVENT_CANCEL) {
				this.resetPosition();
			}
		},
		_transitionEnd: function _transitionEnd(e) {
			if (e.target != this.scroller || !this.isInTransition) {
				return;
			}
			this._transitionTime();
			if (!this.resetPosition(this.options.bounceTime)) {
				this.isInTransition = false;
				$.trigger(this.scroller, 'scrollend', this);
			}
		},
		_scrollend: function _scrollend(e) {
			if (this.y === 0 && this.maxScrollY === 0 || Math.abs(this.y) > 0 && this.y <= this.maxScrollY) {
				$.trigger(this.scroller, 'scrollbottom', this);
			}
		},
		_resize: function _resize() {
			var that = this;
			clearTimeout(that.resizeTimeout);
			that.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, that.options.resizePolling);
		},
		_transitionTime: function _transitionTime(time) {
			time = time || 0;
			this.scrollerStyle['webkitTransitionDuration'] = time + 'ms';
			if (this.parallaxElement && this.options.scrollY) {
				//目前仅支持竖向视差效果
				this.parallaxStyle['webkitTransitionDuration'] = time + 'ms';
			}
			if (this.options.fixedBadAndorid && !time && $.os.isBadAndroid) {
				this.scrollerStyle['webkitTransitionDuration'] = '0.001s';
				if (this.parallaxElement && this.options.scrollY) {
					//目前仅支持竖向视差效果
					this.parallaxStyle['webkitTransitionDuration'] = '0.001s';
				}
			}
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTime(time);
				}
			}
			if (time) {
				//自定义timer，保证webkitTransitionEnd始终触发
				this.transitionTimer && this.transitionTimer.cancel();
				this.transitionTimer = $.later(function () {
					$.trigger(this.scroller, 'webkitTransitionEnd');
				}, time + 100, this);
			}
		},
		_transitionTimingFunction: function _transitionTimingFunction(easing) {
			this.scrollerStyle['webkitTransitionTimingFunction'] = easing;
			if (this.parallaxElement && this.options.scrollY) {
				//目前仅支持竖向视差效果
				this.parallaxStyle['webkitTransitionDuration'] = easing;
			}
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}
		},
		_translate: function _translate(x, y) {
			this.x = x;
			this.y = y;
		},
		_clearRequestAnimationFrame: function _clearRequestAnimationFrame() {
			if (this.requestAnimationFrame) {
				cancelAnimationFrame(this.requestAnimationFrame);
				this.requestAnimationFrame = null;
			}
		},
		_updateTranslate: function _updateTranslate() {
			var self = this;
			if (self.x !== self.lastX || self.y !== self.lastY) {
				self.setTranslate(self.x, self.y);
			}
			self.requestAnimationFrame = requestAnimationFrame(function () {
				self._updateTranslate();
			});
		},
		_createScrollBar: function _createScrollBar(clazz) {
			var scrollbar = document.createElement('div');
			var indicator = document.createElement('div');
			scrollbar.className = CLASS_SCROLLBAR + ' ' + clazz;
			indicator.className = CLASS_INDICATOR;
			scrollbar.appendChild(indicator);
			if (clazz === CLASS_SCROLLBAR_VERTICAL) {
				this.scrollbarY = scrollbar;
				this.scrollbarIndicatorY = indicator;
			} else if (clazz === CLASS_SCROLLBAR_HORIZONTAL) {
				this.scrollbarX = scrollbar;
				this.scrollbarIndicatorX = indicator;
			}
			this.wrapper.appendChild(scrollbar);
			return scrollbar;
		},
		_preventDefaultException: function _preventDefaultException(el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true;
				}
			}
			return false;
		},
		_reLayout: function _reLayout() {
			if (!this.hasHorizontalScroll) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if (!this.hasVerticalScroll) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.indicators.map(function (indicator) {
				indicator.refresh();
			});

			//以防slider类嵌套使用
			if (this.options.snap && typeof this.options.snap === 'string') {
				var items = this.scroller.querySelectorAll(this.options.snap);
				this.itemLength = 0;
				this.snaps = [];
				for (var i = 0, len = items.length; i < len; i++) {
					var item = items[i];
					if (item.parentNode === this.scroller) {
						this.itemLength++;
						this.snaps.push(item);
					}
				}
				this._initSnap(); //需要每次都_initSnap么。其实init的时候执行一次，后续resize的时候执行一次就行了吧.先这么做吧，如果影响性能，再调整
			}
		},
		_momentum: function _momentum(current, distance, time, lowerMargin, wrapperSize, deceleration) {
			var speed = parseFloat(Math.abs(distance) / time),
			    destination,
			    duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;
			destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
			duration = speed / deceleration;
			if (destination < lowerMargin) {
				destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if (destination > 0) {
				destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		},
		_getTranslateStr: function _getTranslateStr(x, y) {
			if (this.options.hardwareAccelerated) {
				return 'translate3d(' + x + 'px,' + y + 'px,0px) ' + this.translateZ;
			}
			return 'translate(' + x + 'px,' + y + 'px) ';
		},
		//API
		setStopped: function setStopped(stopped) {
			this.stopped = !!stopped;
		},
		setTranslate: function setTranslate(x, y) {
			this.x = x;
			this.y = y;
			this.scrollerStyle['webkitTransform'] = this._getTranslateStr(x, y);
			if (this.parallaxElement && this.options.scrollY) {
				//目前仅支持竖向视差效果
				var parallaxY = y * this.options.parallaxRatio;
				var scale = 1 + parallaxY / ((this.parallaxHeight - parallaxY) / 2);
				if (scale > 1) {
					this.parallaxImgStyle['opacity'] = 1 - parallaxY / 100 * this.options.parallaxRatio;
					this.parallaxStyle['webkitTransform'] = this._getTranslateStr(0, -parallaxY) + ' scale(' + scale + ',' + scale + ')';
				} else {
					this.parallaxImgStyle['opacity'] = 1;
					this.parallaxStyle['webkitTransform'] = this._getTranslateStr(0, -1) + ' scale(1,1)';
				}
			}
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].updatePosition();
				}
			}
			this.lastX = this.x;
			this.lastY = this.y;
			$.trigger(this.scroller, 'scroll', this);
		},
		reLayout: function reLayout() {
			this.wrapper.offsetHeight;

			var paddingLeft = parseFloat($.getStyles(this.wrapper, 'padding-left')) || 0;
			var paddingRight = parseFloat($.getStyles(this.wrapper, 'padding-right')) || 0;
			var paddingTop = parseFloat($.getStyles(this.wrapper, 'padding-top')) || 0;
			var paddingBottom = parseFloat($.getStyles(this.wrapper, 'padding-bottom')) || 0;

			var clientWidth = this.wrapper.clientWidth;
			var clientHeight = this.wrapper.clientHeight;

			this.scrollerWidth = this.scroller.offsetWidth;
			this.scrollerHeight = this.scroller.offsetHeight;

			this.wrapperWidth = clientWidth - paddingLeft - paddingRight;
			this.wrapperHeight = clientHeight - paddingTop - paddingBottom;

			this.maxScrollX = Math.min(this.wrapperWidth - this.scrollerWidth, 0);
			this.maxScrollY = Math.min(this.wrapperHeight - this.scrollerHeight, 0);
			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
			this._reLayout();
		},
		resetPosition: function resetPosition(time) {
			var x = this.x,
			    y = this.y;

			time = time || 0;
			if (!this.hasHorizontalScroll || this.x > 0) {
				x = 0;
			} else if (this.x < this.maxScrollX) {
				x = this.maxScrollX;
			}

			if (!this.hasVerticalScroll || this.y > 0) {
				y = 0;
			} else if (this.y < this.maxScrollY) {
				y = this.maxScrollY;
			}

			if (x == this.x && y == this.y) {
				return false;
			}
			this.scrollTo(x, y, time, this.options.scrollEasing);

			return true;
		},
		_reInit: function _reInit() {
			var groups = this.wrapper.querySelectorAll('.' + CLASS_SCROLL);
			for (var i = 0, len = groups.length; i < len; i++) {
				if (groups[i].parentNode === this.wrapper) {
					this.scroller = groups[i];
					break;
				}
			}
			this.scrollerStyle = this.scroller && this.scroller.style;
		},
		refresh: function refresh() {
			this._reInit();
			this.reLayout();
			$.trigger(this.scroller, 'refresh', this);
			this.resetPosition();
		},
		scrollTo: function scrollTo(x, y, time, easing) {
			var easing = easing || ease.circular;
			//			this.isInTransition = time > 0 && (this.lastX != x || this.lastY != y);
			//暂不严格判断x,y，否则会导致部分版本上不正常触发轮播
			this.isInTransition = time > 0;
			if (this.isInTransition) {
				this._clearRequestAnimationFrame();
				this._transitionTimingFunction(easing.style);
				this._transitionTime(time);
				this.setTranslate(x, y);
			} else {
				this.setTranslate(x, y);
			}
		},
		scrollToBottom: function scrollToBottom(time, easing) {
			time = time || this.options.scrollTime;
			this.scrollTo(0, this.maxScrollY, time, easing);
		},
		gotoPage: function gotoPage(index) {
			this._gotoPage(index);
		},
		destroy: function destroy() {
			this._initEvent(true); //detach
			delete $.data[this.wrapper.getAttribute('data-scroll')];
			this.wrapper.setAttribute('data-scroll', '');
		}
	});
	//Indicator
	var Indicator = function Indicator(scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;

		this.options = $.extend({
			listenX: true,
			listenY: true,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		}, options);

		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;

		if (this.options.fade) {
			this.wrapperStyle['webkitTransform'] = this.scroller.translateZ;
			this.wrapperStyle['webkitTransitionDuration'] = this.options.fixedBadAndorid && $.os.isBadAndroid ? '0.001s' : '0ms';
			this.wrapperStyle.opacity = '0';
		}
	};
	Indicator.prototype = {
		handleEvent: function handleEvent(e) {},
		transitionTime: function transitionTime(time) {
			time = time || 0;
			this.indicatorStyle['webkitTransitionDuration'] = time + 'ms';
			if (this.scroller.options.fixedBadAndorid && !time && $.os.isBadAndroid) {
				this.indicatorStyle['webkitTransitionDuration'] = '0.001s';
			}
		},
		transitionTimingFunction: function transitionTimingFunction(easing) {
			this.indicatorStyle['webkitTransitionTimingFunction'] = easing;
		},
		refresh: function refresh() {
			this.transitionTime();

			if (this.options.listenX && !this.options.listenY) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if (this.options.listenY && !this.options.listenX) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}

			this.wrapper.offsetHeight; // force refresh

			if (this.options.listenX) {
				this.wrapperWidth = this.wrapper.clientWidth;
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';

				this.maxPosX = this.wrapperWidth - this.indicatorWidth;

				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;

				this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
			}

			if (this.options.listenY) {
				this.wrapperHeight = this.wrapper.clientHeight;
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;

				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;

				this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
			}

			this.updatePosition();
		},

		updatePosition: function updatePosition() {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

			if (x < this.minBoundaryX) {
				this.width = Math.max(this.indicatorWidth + x, 8);
				this.indicatorStyle.width = this.width + 'px';
				x = this.minBoundaryX;
			} else if (x > this.maxBoundaryX) {
				this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
				this.indicatorStyle.width = this.width + 'px';
				x = this.maxPosX + this.indicatorWidth - this.width;
			} else if (this.width != this.indicatorWidth) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if (y < this.minBoundaryY) {
				this.height = Math.max(this.indicatorHeight + y * 3, 8);
				this.indicatorStyle.height = this.height + 'px';
				y = this.minBoundaryY;
			} else if (y > this.maxBoundaryY) {
				this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
				this.indicatorStyle.height = this.height + 'px';
				y = this.maxPosY + this.indicatorHeight - this.height;
			} else if (this.height != this.indicatorHeight) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}

			this.x = x;
			this.y = y;

			this.indicatorStyle['webkitTransform'] = this.scroller._getTranslateStr(x, y);
		},
		fade: function fade(val, hold) {
			if (hold && !this.visible) {
				return;
			}

			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;

			var time = val ? 250 : 500,
			    delay = val ? 0 : 300;

			val = val ? '1' : '0';

			this.wrapperStyle['webkitTransitionDuration'] = time + 'ms';

			this.fadeTimeout = setTimeout(function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}.bind(this, val), delay);
		}
	};

	$.Scroll = Scroll;

	$.fn.scroll = function (options) {
		var scrollApis = [];
		this.each(function () {
			var scrollApi = null;
			var self = this;
			var id = self.getAttribute('data-scroll');
			if (!id) {
				id = ++$.uuid;
				var _options = $.extend({}, options);
				if (self.classList.contains('mui-segmented-control')) {
					_options = $.extend(_options, {
						scrollY: false,
						scrollX: true,
						indicators: false,
						snap: '.mui-control-item'
					});
				}
				$.data[id] = scrollApi = new Scroll(self, _options);
				self.setAttribute('data-scroll', id);
			} else {
				scrollApi = $.data[id];
			}
			scrollApis.push(scrollApi);
		});
		return scrollApis.length === 1 ? scrollApis[0] : scrollApis;
	};
})(mui, window, document);
(function ($, window, document, undefined) {

	var CLASS_VISIBILITY = 'mui-visibility';
	var CLASS_HIDDEN = 'mui-hidden';

	var PullRefresh = $.Scroll.extend($.extend({
		handleEvent: function handleEvent(e) {
			this._super(e);
			if (e.type === 'scrollbottom') {
				if (e.target === this.scroller) {
					this._scrollbottom();
				}
			}
		},
		_scrollbottom: function _scrollbottom() {
			if (!this.pulldown && !this.loading) {
				this.pulldown = false;
				this._initPullupRefresh();
				this.pullupLoading();
			}
		},
		_start: function _start(e) {
			//仅下拉刷新在start阻止默认事件
			if (e.touches && e.touches.length && e.touches[0].clientX > 30) {
				e.target && !this._preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
			}
			if (!this.loading) {
				this.pulldown = this.pullPocket = this.pullCaption = this.pullLoading = false;
			}
			this._super(e);
		},
		_drag: function _drag(e) {
			this._super(e);
			if (!this.pulldown && !this.loading && this.topPocket && e.detail.direction === 'down' && this.y >= 0) {
				this._initPulldownRefresh();
			}
			if (this.pulldown) {
				this._setCaption(this.y > this.options.down.height ? this.options.down.contentover : this.options.down.contentdown);
			}
		},

		_reLayout: function _reLayout() {
			this.hasVerticalScroll = true;
			this._super();
		},
		//API
		resetPosition: function resetPosition(time) {
			if (this.pulldown) {
				if (this.y >= this.options.down.height) {
					this.pulldownLoading(undefined, time || 0);
					return true;
				} else {
					!this.loading && this.topPocket.classList.remove(CLASS_VISIBILITY);
				}
			}
			return this._super(time);
		},
		pulldownLoading: function pulldownLoading(y, time) {
			typeof y === 'undefined' && (y = this.options.down.height); //默认高度
			this.scrollTo(0, y, time, this.options.bounceEasing);
			if (this.loading) {
				return;
			}
			//			if (!this.pulldown) {
			this._initPulldownRefresh();
			//			}
			this._setCaption(this.options.down.contentrefresh);
			this.loading = true;
			this.indicators.map(function (indicator) {
				indicator.fade(0);
			});
			var callback = this.options.down.callback;
			callback && callback.call(this);
		},
		endPulldownToRefresh: function endPulldownToRefresh() {
			var self = this;
			if (self.topPocket && self.loading && this.pulldown) {
				self.scrollTo(0, 0, self.options.bounceTime, self.options.bounceEasing);
				self.loading = false;
				self._setCaption(self.options.down.contentdown, true);
				setTimeout(function () {
					self.loading || self.topPocket.classList.remove(CLASS_VISIBILITY);
				}, 350);
			}
		},
		pullupLoading: function pullupLoading(callback, x, time) {
			x = x || 0;
			this.scrollTo(x, this.maxScrollY, time, this.options.bounceEasing);
			if (this.loading) {
				return;
			}
			this._initPullupRefresh();
			this._setCaption(this.options.up.contentrefresh);
			this.indicators.map(function (indicator) {
				indicator.fade(0);
			});
			this.loading = true;
			callback = callback || this.options.up.callback;
			callback && callback.call(this);
		},
		endPullupToRefresh: function endPullupToRefresh(finished) {
			var self = this;
			if (self.bottomPocket) {
				// && self.loading && !this.pulldown
				self.loading = false;
				if (finished) {
					this.finished = true;
					self._setCaption(self.options.up.contentnomore);
					//					self.bottomPocket.classList.remove(CLASS_VISIBILITY);
					//					self.bottomPocket.classList.add(CLASS_HIDDEN);
					self.wrapper.removeEventListener('scrollbottom', self);
				} else {
					self._setCaption(self.options.up.contentdown);
					//					setTimeout(function() {
					self.loading || self.bottomPocket.classList.remove(CLASS_VISIBILITY);
					//					}, 300);
				}
			}
		},
		disablePullupToRefresh: function disablePullupToRefresh() {
			this._initPullupRefresh();
			this.bottomPocket.className = 'mui-pull-bottom-pocket' + ' ' + CLASS_HIDDEN;
			this.wrapper.removeEventListener('scrollbottom', this);
		},
		enablePullupToRefresh: function enablePullupToRefresh() {
			this._initPullupRefresh();
			this.bottomPocket.classList.remove(CLASS_HIDDEN);
			this._setCaption(this.options.up.contentdown);
			this.wrapper.addEventListener('scrollbottom', this);
		},
		refresh: function refresh(isReset) {
			if (isReset && this.finished) {
				this.enablePullupToRefresh();
				this.finished = false;
			}
			this._super();
		}
	}, $.PullRefresh));
	$.fn.pullRefresh = function (options) {
		if (this.length === 1) {
			var self = this[0];
			var pullRefreshApi = null;
			var id = self.getAttribute('data-pullrefresh');
			if (!id && typeof options === 'undefined') {
				return false;
			}
			options = options || {};
			if (!id) {
				id = ++$.uuid;
				$.data[id] = pullRefreshApi = new PullRefresh(self, options);
				self.setAttribute('data-pullrefresh', id);
			} else {
				pullRefreshApi = $.data[id];
			}
			if (options.down && options.down.auto) {
				//如果设置了auto，则自动下拉一次
				pullRefreshApi.pulldownLoading(options.down.autoY);
			} else if (options.up && options.up.auto) {
				//如果设置了auto，则自动上拉一次
				pullRefreshApi.pullupLoading();
			}
			//暂不提供这种调用方式吧			
			//			if (typeof options === 'string') {
			//				var methodValue = pullRefreshApi[options].apply(pullRefreshApi, $.slice.call(arguments, 1));
			//				if (methodValue !== undefined) {
			//					return methodValue;
			//				}
			//			}
			return pullRefreshApi;
		}
	};
})(mui, window, document);
/**
 * snap 重构
 * @param {Object} $
 * @param {Object} window
 */
(function ($, window) {
	var CLASS_SLIDER = 'mui-slider';
	var CLASS_SLIDER_GROUP = 'mui-slider-group';
	var CLASS_SLIDER_LOOP = 'mui-slider-loop';
	var CLASS_ACTION_PREVIOUS = 'mui-action-previous';
	var CLASS_ACTION_NEXT = 'mui-action-next';
	var CLASS_SLIDER_ITEM = 'mui-slider-item';

	var CLASS_ACTIVE = 'mui-active';

	var SELECTOR_SLIDER_ITEM = '.' + CLASS_SLIDER_ITEM;
	var SELECTOR_SLIDER_PROGRESS_BAR = '.mui-slider-progress-bar';

	var Slider = $.Slider = $.Scroll.extend({
		init: function init(element, options) {
			this._super(element, $.extend(true, {
				fingers: 1,
				interval: 0, //设置为0，则不定时轮播
				scrollY: false,
				scrollX: true,
				indicators: false,
				scrollTime: 1000,
				startX: false,
				slideTime: 0, //滑动动画时间
				snap: SELECTOR_SLIDER_ITEM
			}, options));
			if (this.options.startX) {
				//				$.trigger(this.wrapper, 'scrollend', this);
			}
		},
		_init: function _init() {
			this._reInit();
			if (this.scroller) {
				this.scrollerStyle = this.scroller.style;
				this.progressBar = this.wrapper.querySelector(SELECTOR_SLIDER_PROGRESS_BAR);
				if (this.progressBar) {
					this.progressBarWidth = this.progressBar.offsetWidth;
					this.progressBarStyle = this.progressBar.style;
				}
				//忘记这个代码是干什么的了？
				//				this.x = this._getScroll();
				//				if (this.options.startX === false) {
				//					this.options.startX = this.x;
				//				}
				//根据active修正startX

				this._super();
				this._initTimer();
			}
		},
		_triggerSlide: function _triggerSlide() {
			var self = this;
			self.isInTransition = false;
			var page = self.currentPage;
			self.slideNumber = self._fixedSlideNumber();
			if (self.loop) {
				if (self.slideNumber === 0) {
					self.setTranslate(self.pages[1][0].x, 0);
				} else if (self.slideNumber === self.itemLength - 3) {
					self.setTranslate(self.pages[self.itemLength - 2][0].x, 0);
				}
			}
			if (self.lastSlideNumber != self.slideNumber) {
				self.lastSlideNumber = self.slideNumber;
				self.lastPage = self.currentPage;
				$.trigger(self.wrapper, 'slide', {
					slideNumber: self.slideNumber
				});
			}
			self._initTimer();
		},
		_handleSlide: function _handleSlide(e) {
			var self = this;
			if (e.target !== self.wrapper) {
				return;
			}
			var detail = e.detail;
			detail.slideNumber = detail.slideNumber || 0;
			var temps = self.scroller.querySelectorAll(SELECTOR_SLIDER_ITEM);
			var items = [];
			for (var i = 0, len = temps.length; i < len; i++) {
				var item = temps[i];
				if (item.parentNode === self.scroller) {
					items.push(item);
				}
			}
			var _slideNumber = detail.slideNumber;
			if (self.loop) {
				_slideNumber += 1;
			}
			if (!self.wrapper.classList.contains('mui-segmented-control')) {
				for (var i = 0, len = items.length; i < len; i++) {
					var item = items[i];
					if (item.parentNode === self.scroller) {
						if (i === _slideNumber) {
							item.classList.add(CLASS_ACTIVE);
						} else {
							item.classList.remove(CLASS_ACTIVE);
						}
					}
				}
			}
			var indicatorWrap = self.wrapper.querySelector('.mui-slider-indicator');
			if (indicatorWrap) {
				if (indicatorWrap.getAttribute('data-scroll')) {
					//scroll
					$(indicatorWrap).scroll().gotoPage(detail.slideNumber);
				}
				var indicators = indicatorWrap.querySelectorAll('.mui-indicator');
				if (indicators.length > 0) {
					//图片轮播
					for (var i = 0, len = indicators.length; i < len; i++) {
						indicators[i].classList[i === detail.slideNumber ? 'add' : 'remove'](CLASS_ACTIVE);
					}
				} else {
					var number = indicatorWrap.querySelector('.mui-number span');
					if (number) {
						//图文表格
						number.innerText = detail.slideNumber + 1;
					} else {
						//segmented controls
						var controlItems = indicatorWrap.querySelectorAll('.mui-control-item');
						for (var i = 0, len = controlItems.length; i < len; i++) {
							controlItems[i].classList[i === detail.slideNumber ? 'add' : 'remove'](CLASS_ACTIVE);
						}
					}
				}
			}
			e.stopPropagation();
		},
		_handleTabShow: function _handleTabShow(e) {
			var self = this;
			self.gotoItem(e.detail.tabNumber || 0, self.options.slideTime);
		},
		_handleIndicatorTap: function _handleIndicatorTap(event) {
			var self = this;
			var target = event.target;
			if (target.classList.contains(CLASS_ACTION_PREVIOUS) || target.classList.contains(CLASS_ACTION_NEXT)) {
				self[target.classList.contains(CLASS_ACTION_PREVIOUS) ? 'prevItem' : 'nextItem']();
				event.stopPropagation();
			}
		},
		_initEvent: function _initEvent(detach) {
			var self = this;
			self._super(detach);
			var action = detach ? 'removeEventListener' : 'addEventListener';
			self.wrapper[action]('slide', this);
			self.wrapper[action]($.eventName('shown', 'tab'), this);
		},
		handleEvent: function handleEvent(e) {
			this._super(e);
			switch (e.type) {
				case 'slide':
					this._handleSlide(e);
					break;
				case $.eventName('shown', 'tab'):
					if (~this.snaps.indexOf(e.target)) {
						//避免嵌套监听错误的tab show
						this._handleTabShow(e);
					}
					break;
			}
		},
		_scrollend: function _scrollend(e) {
			this._super(e);
			this._triggerSlide(e);
		},
		_drag: function _drag(e) {
			this._super(e);
			var direction = e.detail.direction;
			if (direction === 'left' || direction === 'right') {
				//拖拽期间取消定时
				var slidershowTimer = this.wrapper.getAttribute('data-slidershowTimer');
				slidershowTimer && window.clearTimeout(slidershowTimer);

				e.stopPropagation();
			}
		},
		_initTimer: function _initTimer() {
			var self = this;
			var slider = self.wrapper;
			var interval = self.options.interval;
			var slidershowTimer = slider.getAttribute('data-slidershowTimer');
			slidershowTimer && window.clearTimeout(slidershowTimer);
			if (interval) {
				slidershowTimer = window.setTimeout(function () {
					if (!slider) {
						return;
					}
					//仅slider显示状态进行自动轮播
					if (!!(slider.offsetWidth || slider.offsetHeight)) {
						self.nextItem(true);
						//下一个
					}
					self._initTimer();
				}, interval);
				slider.setAttribute('data-slidershowTimer', slidershowTimer);
			}
		},

		_fixedSlideNumber: function _fixedSlideNumber(page) {
			page = page || this.currentPage;
			var slideNumber = page.pageX;
			if (this.loop) {
				if (page.pageX === 0) {
					slideNumber = this.itemLength - 3;
				} else if (page.pageX === this.itemLength - 1) {
					slideNumber = 0;
				} else {
					slideNumber = page.pageX - 1;
				}
			}
			return slideNumber;
		},
		_reLayout: function _reLayout() {
			this.hasHorizontalScroll = true;
			this.loop = this.scroller.classList.contains(CLASS_SLIDER_LOOP);
			this._super();
		},
		_getScroll: function _getScroll() {
			var result = $.parseTranslateMatrix($.getStyles(this.scroller, 'webkitTransform'));
			return result ? result.x : 0;
		},
		_transitionEnd: function _transitionEnd(e) {
			if (e.target !== this.scroller || !this.isInTransition) {
				return;
			}
			this._transitionTime();
			this.isInTransition = false;
			$.trigger(this.wrapper, 'scrollend', this);
		},
		_flick: function _flick(e) {
			if (!this.moved) {
				//无moved
				return;
			}
			var detail = e.detail;
			var direction = detail.direction;
			this._clearRequestAnimationFrame();
			this.isInTransition = true;
			//			if (direction === 'up' || direction === 'down') {
			//				this.resetPosition(this.options.bounceTime);
			//				return;
			//			}
			if (e.type === 'flick') {
				if (detail.deltaTime < 200) {
					//flick，太容易触发，额外校验一下deltaTime
					this.x = this._getPage(this.slideNumber + (direction === 'right' ? -1 : 1), true).x;
				}
				this.resetPosition(this.options.bounceTime);
			} else if (e.type === 'dragend' && !detail.flick) {
				this.resetPosition(this.options.bounceTime);
			}
			e.stopPropagation();
		},
		_initSnap: function _initSnap() {
			this.scrollerWidth = this.itemLength * this.scrollerWidth;
			this.maxScrollX = Math.min(this.wrapperWidth - this.scrollerWidth, 0);
			this._super();
			if (!this.currentPage.x) {
				//当slider处于隐藏状态时，导致snap计算是错误的，临时先这么判断一下，后续要考虑解决所有scroll在隐藏状态下初始化属性不正确的问题
				var currentPage = this.pages[this.loop ? 1 : 0];
				currentPage = currentPage || this.pages[0];
				if (!currentPage) {
					return;
				}
				this.currentPage = currentPage[0];
				this.slideNumber = 0;
				this.lastSlideNumber = typeof this.lastSlideNumber === 'undefined' ? 0 : this.lastSlideNumber;
			} else {
				this.slideNumber = this._fixedSlideNumber();
				this.lastSlideNumber = typeof this.lastSlideNumber === 'undefined' ? this.slideNumber : this.lastSlideNumber;
			}
			this.options.startX = this.currentPage.x || 0;
		},
		_getSnapX: function _getSnapX(offsetLeft) {
			return Math.max(-offsetLeft, this.maxScrollX);
		},
		_getPage: function _getPage(slideNumber, isFlick) {
			if (this.loop) {
				if (slideNumber > this.itemLength - (isFlick ? 2 : 3)) {
					slideNumber = 1;
					time = 0;
				} else if (slideNumber < (isFlick ? -1 : 0)) {
					slideNumber = this.itemLength - 2;
					time = 0;
				} else {
					slideNumber += 1;
				}
			} else {
				if (!isFlick) {
					if (slideNumber > this.itemLength - 1) {
						slideNumber = 0;
						time = 0;
					} else if (slideNumber < 0) {
						slideNumber = this.itemLength - 1;
						time = 0;
					}
				}
				slideNumber = Math.min(Math.max(0, slideNumber), this.itemLength - 1);
			}
			return this.pages[slideNumber][0];
		},
		_gotoItem: function _gotoItem(slideNumber, time) {
			this.currentPage = this._getPage(slideNumber, true); //此处传true。可保证程序切换时，动画与人手操作一致(第一张，最后一张的切换动画)
			this.scrollTo(this.currentPage.x, 0, time, this.options.scrollEasing);
			if (time === 0) {
				$.trigger(this.wrapper, 'scrollend', this);
			}
		},
		//API
		setTranslate: function setTranslate(x, y) {
			this._super(x, y);
			var progressBar = this.progressBar;
			if (progressBar) {
				this.progressBarStyle.webkitTransform = this._getTranslateStr(-x * (this.progressBarWidth / this.wrapperWidth), 0);
			}
		},
		resetPosition: function resetPosition(time) {
			time = time || 0;
			if (this.x > 0) {
				this.x = 0;
			} else if (this.x < this.maxScrollX) {
				this.x = this.maxScrollX;
			}
			this.currentPage = this._nearestSnap(this.x);
			this.scrollTo(this.currentPage.x, 0, time, this.options.scrollEasing);
			return true;
		},
		gotoItem: function gotoItem(slideNumber, time) {
			this._gotoItem(slideNumber, typeof time === 'undefined' ? this.options.scrollTime : time);
		},
		nextItem: function nextItem() {
			this._gotoItem(this.slideNumber + 1, this.options.scrollTime);
		},
		prevItem: function prevItem() {
			this._gotoItem(this.slideNumber - 1, this.options.scrollTime);
		},
		getSlideNumber: function getSlideNumber() {
			return this.slideNumber || 0;
		},
		_reInit: function _reInit() {
			var groups = this.wrapper.querySelectorAll('.' + CLASS_SLIDER_GROUP);
			for (var i = 0, len = groups.length; i < len; i++) {
				if (groups[i].parentNode === this.wrapper) {
					this.scroller = groups[i];
					break;
				}
			}
			this.scrollerStyle = this.scroller && this.scroller.style;
			if (this.progressBar) {
				this.progressBarWidth = this.progressBar.offsetWidth;
				this.progressBarStyle = this.progressBar.style;
			}
		},
		refresh: function refresh(options) {
			if (options) {
				$.extend(this.options, options);
				this._super();
				this._initTimer();
			} else {
				this._super();
			}
		},
		destroy: function destroy() {
			this._initEvent(true); //detach
			delete $.data[this.wrapper.getAttribute('data-slider')];
			this.wrapper.setAttribute('data-slider', '');
		}
	});
	$.fn.slider = function (options) {
		var slider = null;
		this.each(function () {
			var sliderElement = this;
			if (!this.classList.contains(CLASS_SLIDER)) {
				sliderElement = this.querySelector('.' + CLASS_SLIDER);
			}
			if (sliderElement && sliderElement.querySelector(SELECTOR_SLIDER_ITEM)) {
				var id = sliderElement.getAttribute('data-slider');
				if (!id) {
					id = ++$.uuid;
					$.data[id] = slider = new Slider(sliderElement, options);
					sliderElement.setAttribute('data-slider', id);
				} else {
					slider = $.data[id];
					if (slider && options) {
						slider.refresh(options);
					}
				}
			}
		});
		return slider;
	};
	$.ready(function () {
		//		setTimeout(function() {
		$('.mui-slider').slider();
		$('.mui-scroll-wrapper.mui-slider-indicator.mui-segmented-control').scroll({
			scrollY: false,
			scrollX: true,
			indicators: false,
			snap: '.mui-control-item'
		});
		//		}, 500); //临时处理slider宽度计算不正确的问题(初步确认是scrollbar导致的)
	});
})(mui, window);
/**
 * pullRefresh 5+
 * @param {type} $
 * @returns {undefined}
 */
(function ($, document) {
	if (!$.os.plus) {
		//仅在5+android支持多webview的使用
		return;
	}
	$.plusReady(function () {
		if (window.__NWin_Enable__ === false) {
			//不支持多webview，则不用5+下拉刷新
			return;
		}
		var CLASS_PLUS_PULLREFRESH = 'mui-plus-pullrefresh';
		var CLASS_VISIBILITY = 'mui-visibility';
		var CLASS_HIDDEN = 'mui-hidden';
		var CLASS_BLOCK = 'mui-block';

		var CLASS_PULL_CAPTION = 'mui-pull-caption';
		var CLASS_PULL_CAPTION_DOWN = 'mui-pull-caption-down';
		var CLASS_PULL_CAPTION_REFRESH = 'mui-pull-caption-refresh';
		var CLASS_PULL_CAPTION_NOMORE = 'mui-pull-caption-nomore';

		var PlusPullRefresh = $.Class.extend({
			init: function init(element, options) {
				this.element = element;
				this.options = options;
				this.wrapper = this.scroller = element;
				this._init();
				this._initPulldownRefreshEvent();
			},
			_init: function _init() {
				var self = this;
				//document.addEventListener('plusscrollbottom', this);
				window.addEventListener('dragup', self);
				document.addEventListener("plusscrollbottom", self);
				self.scrollInterval = window.setInterval(function () {
					if (self.isScroll && !self.loading) {
						if (window.pageYOffset + window.innerHeight + 10 >= document.documentElement.scrollHeight) {
							self.isScroll = false; //放在这里是因为快速滚动的话，有可能检测时，还没到底，所以只要有滚动，没到底之前一直检测高度变化
							if (self.bottomPocket) {
								self.pullupLoading();
							}
						}
					}
				}, 100);
			},
			_initPulldownRefreshEvent: function _initPulldownRefreshEvent() {
				var self = this;
				$.plusReady(function () {
					if (self.options.down.style == "circle") {
						//单webview、原生转圈
						self.options.webview = plus.webview.currentWebview();
						self.options.webview.setPullToRefresh({
							support: true,
							color: self.options.down.color || '#2BD009',
							height: self.options.down.height || '50px',
							range: self.options.down.range || '100px',
							style: 'circle',
							offset: self.options.down.offset || '0px'
						}, function () {
							self.options.down.callback();
						});
					} else if (self.topPocket && self.options.webviewId) {
						var webview = plus.webview.getWebviewById(self.options.webviewId); //子窗口
						if (!webview) {
							return;
						}
						self.options.webview = webview;
						var downOptions = self.options.down;
						var height = downOptions.height;
						webview.addEventListener('close', function () {
							var attrWebviewId = self.options.webviewId && self.options.webviewId.replace(/\//g, "_"); //替换所有"/" 
							self.element.removeAttribute('data-pullrefresh-plus-' + attrWebviewId);
						});
						webview.addEventListener("dragBounce", function (e) {
							if (!self.pulldown) {
								self._initPulldownRefresh();
							} else {
								self.pullPocket.classList.add(CLASS_BLOCK);
							}
							switch (e.status) {
								case "beforeChangeOffset":
									//下拉可刷新状态
									self._setCaption(downOptions.contentdown);
									break;
								case "afterChangeOffset":
									//松开可刷新状态
									self._setCaption(downOptions.contentover);
									break;
								case "dragEndAfterChangeOffset":
									//正在刷新状态
									//执行下拉刷新所在webview的回调函数
									webview.evalJS("window.mui&&mui.options.pullRefresh.down.callback()");
									self._setCaption(downOptions.contentrefresh);
									break;
								default:
									break;
							}
						}, false);

						webview.setBounce({
							position: {
								top: height * 2 + 'px'
							},
							changeoffset: {
								top: height + 'px'
							}
						});
					}
				});
			},
			handleEvent: function handleEvent(e) {
				var self = this;
				if (self.stopped) {
					return;
				}
				self.isScroll = false;
				if (e.type === 'dragup' || e.type === 'plusscrollbottom') {
					self.isScroll = true;
					setTimeout(function () {
						self.isScroll = false;
					}, 1000);
				}
			}
		}).extend($.extend({
			setStopped: function setStopped(stopped) {
				//该方法是子页面调用的
				this.stopped = !!stopped;
				//TODO 此处需要设置当前webview的bounce为none,目前5+有BUG
				var webview = plus.webview.currentWebview();
				if (this.stopped) {
					webview.setStyle({
						bounce: 'none'
					});
					webview.setBounce({
						position: {
							top: 'none'
						}
					});
				} else {
					var height = this.options.down.height;
					webview.setStyle({
						bounce: 'vertical'
					});
					webview.setBounce({
						position: {
							top: height * 2 + 'px'
						},
						changeoffset: {
							top: height + 'px'
						}
					});
				}
			},
			beginPulldown: function beginPulldown() {
				$.plusReady(function () {
					var _wv = plus.webview.currentWebview();
					var self = this;
					//这里延时的目的是为了保证下拉刷新组件初始化完成，后续应该做成有状态的
					setTimeout(function () {
						if (self.options.down.style == "circle") {
							_wv.beginPullToRefresh();
						} else {
							_wv.setBounce({
								offset: {
									top: this.options.down.height + "px"
								}
							});
						}
					}, 15);
				}.bind(this));
			},
			pulldownLoading: function pulldownLoading() {
				//该方法是子页面调用的，兼容老的历史API
				this.beginPulldown();
			},
			_pulldownLoading: function _pulldownLoading() {
				//该方法是父页面调用的
				var self = this;
				$.plusReady(function () {
					var childWebview = plus.webview.getWebviewById(self.options.webviewId);
					childWebview && childWebview.setBounce({
						offset: {
							top: self.options.down.height + "px"
						}
					});
				});
			},
			endPulldown: function endPulldown() {
				var _wv = plus.webview.currentWebview();
				//双webview的下拉刷新，需要修改父窗口提示信息
				if (_wv.parent() && this.options.down.style !== "circle") {
					_wv.parent().evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('" + JSON.stringify({
						webviewId: _wv.id
					}) + "')._endPulldownToRefresh()");
				} else {
					_wv.endPullToRefresh();
				}
			},
			endPulldownToRefresh: function endPulldownToRefresh() {
				//该方法是子页面调用的，兼容老的历史API
				this.endPulldown();
			},
			_endPulldownToRefresh: function _endPulldownToRefresh() {
				//该方法是父页面调用的
				var self = this;
				if (self.topPocket && self.options.webview) {
					self.options.webview.endPullToRefresh(); //下拉刷新所在webview回弹
					self.loading = false;
					self._setCaption(self.options.down.contentdown, true);
					setTimeout(function () {
						self.loading || self.topPocket.classList.remove(CLASS_BLOCK);
					}, 350);
				}
			},
			beginPullup: function beginPullup(callback) {
				//开始上拉加载
				var self = this;
				if (self.isLoading) return;
				self.isLoading = true;
				if (self.pulldown !== false) {
					self._initPullupRefresh();
				} else {
					this.pullPocket.classList.add(CLASS_BLOCK);
				}
				setTimeout(function () {
					self.pullLoading.classList.add(CLASS_VISIBILITY);
					self.pullLoading.classList.remove(CLASS_HIDDEN);
					self.pullCaption.innerHTML = ''; //修正5+里边第一次加载时，文字显示的bug(还会显示出来个“多”,猜测应该是渲染问题导致的)
					self.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_REFRESH;
					self.pullCaption.innerHTML = self.options.up.contentrefresh;
					callback = callback || self.options.up.callback;
					callback && callback.call(self);
				}, 300);
			},
			pullupLoading: function pullupLoading(callback) {
				//兼容老的API
				this.beginPullup(callback);
			},
			endPullup: function endPullup(finished) {
				//上拉加载结束
				var self = this;
				if (self.pullLoading) {
					self.pullLoading.classList.remove(CLASS_VISIBILITY);
					self.pullLoading.classList.add(CLASS_HIDDEN);
					self.isLoading = false;
					if (finished) {
						self.finished = true;
						self.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_NOMORE;
						self.pullCaption.innerHTML = self.options.up.contentnomore;
						//取消5+的plusscrollbottom事件
						document.removeEventListener('plusscrollbottom', self);
						window.removeEventListener('dragup', self);
					} else {
						//初始化时隐藏，后续不再隐藏
						self.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_DOWN;
						self.pullCaption.innerHTML = self.options.up.contentdown;
					}
				}
			},
			endPullupToRefresh: function endPullupToRefresh(finished) {
				//上拉加载结束，兼容老的API
				this.endPullup(finished);
			},
			disablePullupToRefresh: function disablePullupToRefresh() {
				this._initPullupRefresh();
				this.bottomPocket.className = 'mui-pull-bottom-pocket' + ' ' + CLASS_HIDDEN;
				window.removeEventListener('dragup', this);
			},
			enablePullupToRefresh: function enablePullupToRefresh() {
				this._initPullupRefresh();
				this.bottomPocket.classList.remove(CLASS_HIDDEN);
				this.pullCaption.className = CLASS_PULL_CAPTION + ' ' + CLASS_PULL_CAPTION_DOWN;
				this.pullCaption.innerHTML = this.options.up.contentdown;
				document.addEventListener("plusscrollbottom", this);
				window.addEventListener('dragup', this);
			},
			scrollTo: function scrollTo(x, y, time) {
				$.scrollTo(y, time);
			},
			scrollToBottom: function scrollToBottom(time) {
				$.scrollTo(document.documentElement.scrollHeight, time);
			},
			refresh: function refresh(isReset) {
				if (isReset && this.finished) {
					this.enablePullupToRefresh();
					this.finished = false;
				}
			}
		}, $.PullRefresh));

		//override h5 pullRefresh
		$.fn.pullRefresh_native = function (options) {
			var self;
			if (this.length === 0) {
				self = document.createElement('div');
				self.className = 'mui-content';
				document.body.appendChild(self);
			} else {
				self = this[0];
			}
			var args = options;
			//一个父需要支持多个子下拉刷新
			options = options || {};
			if (typeof options === 'string') {
				options = $.parseJSON(options);
			}
			!options.webviewId && (options.webviewId = plus.webview.currentWebview().id || plus.webview.currentWebview().getURL());
			var pullRefreshApi = null;
			var attrWebviewId = options.webviewId && options.webviewId.replace(/\//g, "_"); //替换所有"/"
			var id = self.getAttribute('data-pullrefresh-plus-' + attrWebviewId);
			if (!id && typeof args === 'undefined') {
				return false;
			}
			if (!id) {
				//避免重复初始化5+ pullrefresh
				id = ++$.uuid;
				self.setAttribute('data-pullrefresh-plus-' + attrWebviewId, id);
				document.body.classList.add(CLASS_PLUS_PULLREFRESH);
				$.data[id] = pullRefreshApi = new PlusPullRefresh(self, options);
			} else {
				pullRefreshApi = $.data[id];
			}
			if (options.down && options.down.auto) {
				//如果设置了auto，则自动下拉一次
				//pullRefreshApi._pulldownLoading(); //parent webview
				pullRefreshApi.beginPulldown();
			} else if (options.up && options.up.auto) {
				//如果设置了auto，则自动上拉一次
				pullRefreshApi.beginPullup();
			}
			return pullRefreshApi;
		};
	});
})(mui, document);
/**
 * off-canvas
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} action
 * @returns {undefined}
 */
(function ($, window, document, name) {
	var CLASS_OFF_CANVAS_LEFT = 'mui-off-canvas-left';
	var CLASS_OFF_CANVAS_RIGHT = 'mui-off-canvas-right';
	var CLASS_ACTION_BACKDROP = 'mui-off-canvas-backdrop';
	var CLASS_OFF_CANVAS_WRAP = 'mui-off-canvas-wrap';

	var CLASS_SLIDE_IN = 'mui-slide-in';
	var CLASS_ACTIVE = 'mui-active';

	var CLASS_TRANSITIONING = 'mui-transitioning';

	var SELECTOR_INNER_WRAP = '.mui-inner-wrap';

	var OffCanvas = $.Class.extend({
		init: function init(element, options) {
			this.wrapper = this.element = element;
			this.scroller = this.wrapper.querySelector(SELECTOR_INNER_WRAP);
			this.classList = this.wrapper.classList;
			if (this.scroller) {
				this.options = $.extend(true, {
					dragThresholdX: 10,
					scale: 0.8,
					opacity: 0.1,
					preventDefaultException: {
						tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/
					}
				}, options);
				document.body.classList.add('mui-fullscreen'); //fullscreen
				this.refresh();
				this.initEvent();
			}
		},
		_preventDefaultException: function _preventDefaultException(el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true;
				}
			}
			return false;
		},
		refresh: function refresh(offCanvas) {
			//			offCanvas && !offCanvas.classList.contains(CLASS_ACTIVE) && this.classList.remove(CLASS_ACTIVE);
			this.slideIn = this.classList.contains(CLASS_SLIDE_IN);
			this.scalable = this.classList.contains('mui-scalable') && !this.slideIn;
			this.scroller = this.wrapper.querySelector(SELECTOR_INNER_WRAP);
			//			!offCanvas && this.scroller.classList.remove(CLASS_TRANSITIONING);
			//			!offCanvas && this.scroller.setAttribute('style', '');
			this.offCanvasLefts = this.wrapper.querySelectorAll('.' + CLASS_OFF_CANVAS_LEFT);
			this.offCanvasRights = this.wrapper.querySelectorAll('.' + CLASS_OFF_CANVAS_RIGHT);
			if (offCanvas) {
				if (offCanvas.classList.contains(CLASS_OFF_CANVAS_LEFT)) {
					this.offCanvasLeft = offCanvas;
				} else if (offCanvas.classList.contains(CLASS_OFF_CANVAS_RIGHT)) {
					this.offCanvasRight = offCanvas;
				}
			} else {
				this.offCanvasRight = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT);
				this.offCanvasLeft = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT);
			}
			this.offCanvasRightWidth = this.offCanvasLeftWidth = 0;
			this.offCanvasLeftSlideIn = this.offCanvasRightSlideIn = false;
			if (this.offCanvasRight) {
				this.offCanvasRightWidth = this.offCanvasRight.offsetWidth;
				this.offCanvasRightSlideIn = this.slideIn && this.offCanvasRight.parentNode === this.wrapper;
				//				this.offCanvasRight.classList.remove(CLASS_TRANSITIONING);
				//				this.offCanvasRight.classList.remove(CLASS_ACTIVE);
				//				this.offCanvasRight.setAttribute('style', '');
			}
			if (this.offCanvasLeft) {
				this.offCanvasLeftWidth = this.offCanvasLeft.offsetWidth;
				this.offCanvasLeftSlideIn = this.slideIn && this.offCanvasLeft.parentNode === this.wrapper;
				//				this.offCanvasLeft.classList.remove(CLASS_TRANSITIONING);
				//				this.offCanvasLeft.classList.remove(CLASS_ACTIVE);
				//				this.offCanvasLeft.setAttribute('style', '');
			}
			this.backdrop = this.scroller.querySelector('.' + CLASS_ACTION_BACKDROP);

			this.options.dragThresholdX = this.options.dragThresholdX || 10;

			this.visible = false;
			this.startX = null;
			this.lastX = null;
			this.offsetX = null;
			this.lastTranslateX = null;
		},
		handleEvent: function handleEvent(e) {
			switch (e.type) {
				case $.EVENT_START:
					e.target && !this._preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
					break;
				case 'webkitTransitionEnd':
					//有个bug需要处理，需要考虑假设没有触发webkitTransitionEnd的情况
					if (e.target === this.scroller) {
						this._dispatchEvent();
					}
					break;
				case 'drag':
					var detail = e.detail;
					if (!this.startX) {
						this.startX = detail.center.x;
						this.lastX = this.startX;
					} else {
						this.lastX = detail.center.x;
					}
					if (!this.isDragging && Math.abs(this.lastX - this.startX) > this.options.dragThresholdX && (detail.direction === 'left' || detail.direction === 'right')) {
						if (this.slideIn) {
							this.scroller = this.wrapper.querySelector(SELECTOR_INNER_WRAP);
							if (this.classList.contains(CLASS_ACTIVE)) {
								if (this.offCanvasRight && this.offCanvasRight.classList.contains(CLASS_ACTIVE)) {
									this.offCanvas = this.offCanvasRight;
									this.offCanvasWidth = this.offCanvasRightWidth;
								} else {
									this.offCanvas = this.offCanvasLeft;
									this.offCanvasWidth = this.offCanvasLeftWidth;
								}
							} else {
								if (detail.direction === 'left' && this.offCanvasRight) {
									this.offCanvas = this.offCanvasRight;
									this.offCanvasWidth = this.offCanvasRightWidth;
								} else if (detail.direction === 'right' && this.offCanvasLeft) {
									this.offCanvas = this.offCanvasLeft;
									this.offCanvasWidth = this.offCanvasLeftWidth;
								} else {
									this.scroller = null;
								}
							}
						} else {
							if (this.classList.contains(CLASS_ACTIVE)) {
								if (detail.direction === 'left') {
									this.offCanvas = this.offCanvasLeft;
									this.offCanvasWidth = this.offCanvasLeftWidth;
								} else {
									this.offCanvas = this.offCanvasRight;
									this.offCanvasWidth = this.offCanvasRightWidth;
								}
							} else {
								if (detail.direction === 'right') {
									this.offCanvas = this.offCanvasLeft;
									this.offCanvasWidth = this.offCanvasLeftWidth;
								} else {
									this.offCanvas = this.offCanvasRight;
									this.offCanvasWidth = this.offCanvasRightWidth;
								}
							}
						}
						if (this.offCanvas && this.scroller) {
							this.startX = this.lastX;
							this.isDragging = true;

							$.gestures.session.lockDirection = true; //锁定方向
							$.gestures.session.startDirection = detail.direction;

							this.offCanvas.classList.remove(CLASS_TRANSITIONING);
							this.scroller.classList.remove(CLASS_TRANSITIONING);
							this.offsetX = this.getTranslateX();
							this._initOffCanvasVisible();
						}
					}
					if (this.isDragging) {
						this.updateTranslate(this.offsetX + (this.lastX - this.startX));
						detail.gesture.preventDefault();
						e.stopPropagation();
					}
					break;
				case 'dragend':
					if (this.isDragging) {
						var detail = e.detail;
						var direction = detail.direction;
						this.isDragging = false;
						this.offCanvas.classList.add(CLASS_TRANSITIONING);
						this.scroller.classList.add(CLASS_TRANSITIONING);
						var ratio = 0;
						var x = this.getTranslateX();
						if (!this.slideIn) {
							if (x >= 0) {
								ratio = this.offCanvasLeftWidth && x / this.offCanvasLeftWidth || 0;
							} else {
								ratio = this.offCanvasRightWidth && x / this.offCanvasRightWidth || 0;
							}
							if (ratio === 0) {
								this.openPercentage(0);
								this._dispatchEvent(); //此处不触发webkitTransitionEnd,所以手动dispatch
								return;
							}
							if (direction === 'right' && ratio >= 0 && (ratio >= 0.5 || detail.swipe)) {
								//右滑打开
								this.openPercentage(100);
							} else if (direction === 'right' && ratio < 0 && (ratio > -0.5 || detail.swipe)) {
								//右滑关闭
								this.openPercentage(0);
							} else if (direction === 'right' && ratio > 0 && ratio < 0.5) {
								//右滑还原关闭
								this.openPercentage(0);
							} else if (direction === 'right' && ratio < 0.5) {
								//右滑还原打开
								this.openPercentage(-100);
							} else if (direction === 'left' && ratio <= 0 && (ratio <= -0.5 || detail.swipe)) {
								//左滑打开
								this.openPercentage(-100);
							} else if (direction === 'left' && ratio > 0 && (ratio <= 0.5 || detail.swipe)) {
								//左滑关闭
								this.openPercentage(0);
							} else if (direction === 'left' && ratio < 0 && ratio >= -0.5) {
								//左滑还原关闭
								this.openPercentage(0);
							} else if (direction === 'left' && ratio > 0.5) {
								//左滑还原打开
								this.openPercentage(100);
							} else {
								//默认关闭
								this.openPercentage(0);
							}
							if (ratio === 1 || ratio === -1) {
								//此处不触发webkitTransitionEnd,所以手动dispatch
								this._dispatchEvent();
							}
						} else {
							if (x >= 0) {
								ratio = this.offCanvasRightWidth && x / this.offCanvasRightWidth || 0;
							} else {
								ratio = this.offCanvasLeftWidth && x / this.offCanvasLeftWidth || 0;
							}
							if (direction === 'right' && ratio <= 0 && (ratio >= -0.5 || detail.swipe)) {
								//右滑打开
								this.openPercentage(100);
							} else if (direction === 'right' && ratio > 0 && (ratio >= 0.5 || detail.swipe)) {
								//右滑关闭
								this.openPercentage(0);
							} else if (direction === 'right' && ratio <= -0.5) {
								//右滑还原关闭
								this.openPercentage(0);
							} else if (direction === 'right' && ratio > 0 && ratio <= 0.5) {
								//右滑还原打开
								this.openPercentage(-100);
							} else if (direction === 'left' && ratio >= 0 && (ratio <= 0.5 || detail.swipe)) {
								//左滑打开
								this.openPercentage(-100);
							} else if (direction === 'left' && ratio < 0 && (ratio <= -0.5 || detail.swipe)) {
								//左滑关闭
								this.openPercentage(0);
							} else if (direction === 'left' && ratio >= 0.5) {
								//左滑还原关闭
								this.openPercentage(0);
							} else if (direction === 'left' && ratio >= -0.5 && ratio < 0) {
								//左滑还原打开
								this.openPercentage(100);
							} else {
								this.openPercentage(0);
							}
							if (ratio === 1 || ratio === -1 || ratio === 0) {
								this._dispatchEvent();
								return;
							}
						}
					}
					break;
			}
		},
		_dispatchEvent: function _dispatchEvent() {
			if (this.classList.contains(CLASS_ACTIVE)) {
				$.trigger(this.wrapper, 'shown', this);
			} else {
				$.trigger(this.wrapper, 'hidden', this);
			}
		},
		_initOffCanvasVisible: function _initOffCanvasVisible() {
			if (!this.visible) {
				this.visible = true;
				if (this.offCanvasLeft) {
					this.offCanvasLeft.style.visibility = 'visible';
				}
				if (this.offCanvasRight) {
					this.offCanvasRight.style.visibility = 'visible';
				}
			}
		},
		initEvent: function initEvent() {
			var self = this;
			if (self.backdrop) {
				self.backdrop.addEventListener('tap', function (e) {
					self.close();
					e.detail.gesture.preventDefault();
				});
			}
			if (this.classList.contains('mui-draggable')) {
				this.wrapper.addEventListener($.EVENT_START, this); //临时处理
				this.wrapper.addEventListener('drag', this);
				this.wrapper.addEventListener('dragend', this);
			}
			this.wrapper.addEventListener('webkitTransitionEnd', this);
		},
		openPercentage: function openPercentage(percentage) {
			var p = percentage / 100;
			if (!this.slideIn) {
				if (this.offCanvasLeft && percentage >= 0) {
					this.updateTranslate(this.offCanvasLeftWidth * p);
					this.offCanvasLeft.classList[p !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
				} else if (this.offCanvasRight && percentage <= 0) {
					this.updateTranslate(this.offCanvasRightWidth * p);
					this.offCanvasRight.classList[p !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
				}
				this.classList[p !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
			} else {
				if (this.offCanvasLeft && percentage >= 0) {
					p = p === 0 ? -1 : 0;
					this.updateTranslate(this.offCanvasLeftWidth * p);
					this.offCanvasLeft.classList[percentage !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
				} else if (this.offCanvasRight && percentage <= 0) {
					p = p === 0 ? 1 : 0;
					this.updateTranslate(this.offCanvasRightWidth * p);
					this.offCanvasRight.classList[percentage !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
				}
				this.classList[percentage !== 0 ? 'add' : 'remove'](CLASS_ACTIVE);
			}
		},
		updateTranslate: function updateTranslate(x) {
			if (x !== this.lastTranslateX) {
				if (!this.slideIn) {
					if (!this.offCanvasLeft && x > 0 || !this.offCanvasRight && x < 0) {
						this.setTranslateX(0);
						return;
					}
					if (this.leftShowing && x > this.offCanvasLeftWidth) {
						this.setTranslateX(this.offCanvasLeftWidth);
						return;
					}
					if (this.rightShowing && x < -this.offCanvasRightWidth) {
						this.setTranslateX(-this.offCanvasRightWidth);
						return;
					}
					this.setTranslateX(x);
					if (x >= 0) {
						this.leftShowing = true;
						this.rightShowing = false;
						if (x > 0) {
							if (this.offCanvasLeft) {
								$.each(this.offCanvasLefts, function (index, offCanvas) {
									if (offCanvas === this.offCanvasLeft) {
										this.offCanvasLeft.style.zIndex = 0;
									} else {
										offCanvas.style.zIndex = -1;
									}
								}.bind(this));
							}
							if (this.offCanvasRight) {
								this.offCanvasRight.style.zIndex = -1;
							}
						}
					} else {
						this.rightShowing = true;
						this.leftShowing = false;
						if (this.offCanvasRight) {
							$.each(this.offCanvasRights, function (index, offCanvas) {
								if (offCanvas === this.offCanvasRight) {
									offCanvas.style.zIndex = 0;
								} else {
									offCanvas.style.zIndex = -1;
								}
							}.bind(this));
						}
						if (this.offCanvasLeft) {
							this.offCanvasLeft.style.zIndex = -1;
						}
					}
				} else {
					if (this.offCanvas.classList.contains(CLASS_OFF_CANVAS_RIGHT)) {
						if (x < 0) {
							this.setTranslateX(0);
							return;
						}
						if (x > this.offCanvasRightWidth) {
							this.setTranslateX(this.offCanvasRightWidth);
							return;
						}
					} else {
						if (x > 0) {
							this.setTranslateX(0);
							return;
						}
						if (x < -this.offCanvasLeftWidth) {
							this.setTranslateX(-this.offCanvasLeftWidth);
							return;
						}
					}
					this.setTranslateX(x);
				}
				this.lastTranslateX = x;
			}
		},
		setTranslateX: $.animationFrame(function (x) {
			if (this.scroller) {
				if (this.scalable && this.offCanvas.parentNode === this.wrapper) {
					var percent = Math.abs(x) / this.offCanvasWidth;
					var zoomOutScale = 1 - (1 - this.options.scale) * percent;
					var zoomInScale = this.options.scale + (1 - this.options.scale) * percent;
					var zoomOutOpacity = 1 - (1 - this.options.opacity) * percent;
					var zoomInOpacity = this.options.opacity + (1 - this.options.opacity) * percent;
					if (this.offCanvas.classList.contains(CLASS_OFF_CANVAS_LEFT)) {
						this.offCanvas.style.webkitTransformOrigin = '-100%';
						this.scroller.style.webkitTransformOrigin = 'left';
					} else {
						this.offCanvas.style.webkitTransformOrigin = '200%';
						this.scroller.style.webkitTransformOrigin = 'right';
					}
					this.offCanvas.style.opacity = zoomInOpacity;
					this.offCanvas.style.webkitTransform = 'translate3d(0,0,0) scale(' + zoomInScale + ')';
					this.scroller.style.webkitTransform = 'translate3d(' + x + 'px,0,0) scale(' + zoomOutScale + ')';
				} else {
					if (this.slideIn) {
						this.offCanvas.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
					} else {
						this.scroller.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
					}
				}
			}
		}),
		getTranslateX: function getTranslateX() {
			if (this.offCanvas) {
				var scroller = this.slideIn ? this.offCanvas : this.scroller;
				var result = $.parseTranslateMatrix($.getStyles(scroller, 'webkitTransform'));
				return result && result.x || 0;
			}
			return 0;
		},
		isShown: function isShown(direction) {
			var shown = false;
			if (!this.slideIn) {
				var x = this.getTranslateX();
				if (direction === 'right') {
					shown = this.classList.contains(CLASS_ACTIVE) && x < 0;
				} else if (direction === 'left') {
					shown = this.classList.contains(CLASS_ACTIVE) && x > 0;
				} else {
					shown = this.classList.contains(CLASS_ACTIVE) && x !== 0;
				}
			} else {
				if (direction === 'left') {
					shown = this.classList.contains(CLASS_ACTIVE) && this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT + '.' + CLASS_ACTIVE);
				} else if (direction === 'right') {
					shown = this.classList.contains(CLASS_ACTIVE) && this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT + '.' + CLASS_ACTIVE);
				} else {
					shown = this.classList.contains(CLASS_ACTIVE) && (this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT + '.' + CLASS_ACTIVE) || this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT + '.' + CLASS_ACTIVE));
				}
			}
			return shown;
		},
		close: function close() {
			this._initOffCanvasVisible();
			this.offCanvas = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT + '.' + CLASS_ACTIVE) || this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_LEFT + '.' + CLASS_ACTIVE);
			this.offCanvasWidth = this.offCanvas.offsetWidth;
			if (this.scroller) {
				this.offCanvas.offsetHeight;
				this.offCanvas.classList.add(CLASS_TRANSITIONING);
				this.scroller.classList.add(CLASS_TRANSITIONING);
				this.openPercentage(0);
			}
		},
		show: function show(direction) {
			this._initOffCanvasVisible();
			if (this.isShown(direction)) {
				return false;
			}
			if (!direction) {
				direction = this.wrapper.querySelector('.' + CLASS_OFF_CANVAS_RIGHT) ? 'right' : 'left';
			}
			if (direction === 'right') {
				this.offCanvas = this.offCanvasRight;
				this.offCanvasWidth = this.offCanvasRightWidth;
			} else {
				this.offCanvas = this.offCanvasLeft;
				this.offCanvasWidth = this.offCanvasLeftWidth;
			}
			if (this.scroller) {
				this.offCanvas.offsetHeight;
				this.offCanvas.classList.add(CLASS_TRANSITIONING);
				this.scroller.classList.add(CLASS_TRANSITIONING);
				this.openPercentage(direction === 'left' ? 100 : -100);
			}
			return true;
		},
		toggle: function toggle(directionOrOffCanvas) {
			var direction = directionOrOffCanvas;
			if (directionOrOffCanvas && directionOrOffCanvas.classList) {
				direction = directionOrOffCanvas.classList.contains(CLASS_OFF_CANVAS_LEFT) ? 'left' : 'right';
				this.refresh(directionOrOffCanvas);
			}
			if (!this.show(direction)) {
				this.close();
			}
		}
	});

	//hash to offcanvas
	var findOffCanvasContainer = function findOffCanvasContainer(target) {
		parentNode = target.parentNode;
		if (parentNode) {
			if (parentNode.classList.contains(CLASS_OFF_CANVAS_WRAP)) {
				return parentNode;
			} else {
				parentNode = parentNode.parentNode;
				if (parentNode.classList.contains(CLASS_OFF_CANVAS_WRAP)) {
					return parentNode;
				}
			}
		}
	};
	var handle = function handle(event, target) {
		if (target.tagName === 'A' && target.hash) {
			var offcanvas = document.getElementById(target.hash.replace('#', ''));
			if (offcanvas) {
				var container = findOffCanvasContainer(offcanvas);
				if (container) {
					$.targets._container = container;
					return offcanvas;
				}
			}
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 60,
		handle: handle,
		target: false,
		isReset: false,
		isContinue: true
	});

	window.addEventListener('tap', function (e) {
		if (!$.targets.offcanvas) {
			return;
		}
		//TODO 此处类型的代码后续考虑统一优化(target机制)，现在的实现费力不讨好
		var target = e.target;
		for (; target && target !== document; target = target.parentNode) {
			if (target.tagName === 'A' && target.hash && target.hash === '#' + $.targets.offcanvas.id) {
				e.detail && e.detail.gesture && e.detail.gesture.preventDefault(); //fixed hashchange
				$($.targets._container).offCanvas().toggle($.targets.offcanvas);
				$.targets.offcanvas = $.targets._container = null;
				break;
			}
		}
	});

	$.fn.offCanvas = function (options) {
		var offCanvasApis = [];
		this.each(function () {
			var offCanvasApi = null;
			var self = this;
			//hack old version
			if (!self.classList.contains(CLASS_OFF_CANVAS_WRAP)) {
				self = findOffCanvasContainer(self);
			}
			var id = self.getAttribute('data-offCanvas');
			if (!id) {
				id = ++$.uuid;
				$.data[id] = offCanvasApi = new OffCanvas(self, options);
				self.setAttribute('data-offCanvas', id);
			} else {
				offCanvasApi = $.data[id];
			}
			if (options === 'show' || options === 'close' || options === 'toggle') {
				offCanvasApi.toggle();
			}
			offCanvasApis.push(offCanvasApi);
		});
		return offCanvasApis.length === 1 ? offCanvasApis[0] : offCanvasApis;
	};
	$.ready(function () {
		$('.mui-off-canvas-wrap').offCanvas();
	});
})(mui, window, document, 'offcanvas');
/**
 * actions
 * @param {type} $
 * @param {type} name
 * @returns {undefined}
 */
(function ($, name) {
	var CLASS_ACTION = 'mui-action';

	var handle = function handle(event, target) {
		var className = target.className || '';
		if (typeof className !== 'string') {
			//svg className(SVGAnimatedString)
			className = '';
		}
		if (className && ~className.indexOf(CLASS_ACTION)) {
			if (target.classList.contains('mui-action-back')) {
				event.preventDefault();
			}
			return target;
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 50,
		handle: handle,
		target: false,
		isContinue: true
	});
})(mui, 'action');
/**
 * Modals
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} name
 * @returns {undefined}
 */
(function ($, window, document, name) {
	var CLASS_MODAL = 'mui-modal';

	var handle = function handle(event, target) {
		if (target.tagName === 'A' && target.hash) {
			var modal = document.getElementById(target.hash.replace('#', ''));
			if (modal && modal.classList.contains(CLASS_MODAL)) {
				return modal;
			}
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 50,
		handle: handle,
		target: false,
		isReset: false,
		isContinue: true
	});

	window.addEventListener('tap', function (event) {
		if ($.targets.modal) {
			event.detail.gesture.preventDefault(); //fixed hashchange
			$.targets.modal.classList.toggle('mui-active');
		}
	});
})(mui, window, document, 'modal');
/**
 * Popovers
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} name
 * @param {type} undefined
 * @returns {undefined}
 */
(function ($, window, document, name) {

	var CLASS_POPOVER = 'mui-popover';
	var CLASS_POPOVER_ARROW = 'mui-popover-arrow';
	var CLASS_ACTION_POPOVER = 'mui-popover-action';
	var CLASS_BACKDROP = 'mui-backdrop';
	var CLASS_BAR_POPOVER = 'mui-bar-popover';
	var CLASS_BAR_BACKDROP = 'mui-bar-backdrop';
	var CLASS_ACTION_BACKDROP = 'mui-backdrop-action';
	var CLASS_ACTIVE = 'mui-active';
	var CLASS_BOTTOM = 'mui-bottom';

	var handle = function handle(event, target) {
		if (target.tagName === 'A' && target.hash) {
			$.targets._popover = document.getElementById(target.hash.replace('#', ''));
			if ($.targets._popover && $.targets._popover.classList.contains(CLASS_POPOVER)) {
				return target;
			} else {
				$.targets._popover = null;
			}
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 60,
		handle: handle,
		target: false,
		isReset: false,
		isContinue: true
	});

	var onPopoverShown = function onPopoverShown(e) {
		this.removeEventListener('webkitTransitionEnd', onPopoverShown);
		this.addEventListener($.EVENT_MOVE, $.preventDefault);
		$.trigger(this, 'shown', this);
	};
	var onPopoverHidden = function onPopoverHidden(e) {
		setStyle(this, 'none');
		this.removeEventListener('webkitTransitionEnd', onPopoverHidden);
		this.removeEventListener($.EVENT_MOVE, $.preventDefault);
		$.trigger(this, 'hidden', this);
	};

	var backdrop = function () {
		var element = document.createElement('div');
		element.classList.add(CLASS_BACKDROP);
		element.addEventListener($.EVENT_MOVE, $.preventDefault);
		element.addEventListener('tap', function (e) {
			var popover = $.targets._popover;
			if (popover) {
				popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
				popover.classList.remove(CLASS_ACTIVE);
				removeBackdrop(popover);
			}
		});

		return element;
	}();
	var removeBackdropTimer;
	var removeBackdrop = function removeBackdrop(popover) {
		backdrop.setAttribute('style', 'opacity:0');
		$.targets.popover = $.targets._popover = null; //reset
		removeBackdropTimer = $.later(function () {
			if (!popover.classList.contains(CLASS_ACTIVE) && backdrop.parentNode && backdrop.parentNode === document.body) {
				document.body.removeChild(backdrop);
			}
		}, 350);
	};
	window.addEventListener('tap', function (e) {
		if (!$.targets.popover) {
			return;
		}
		var toggle = false;
		var target = e.target;
		for (; target && target !== document; target = target.parentNode) {
			if (target === $.targets.popover) {
				toggle = true;
			}
		}
		if (toggle) {
			e.detail.gesture.preventDefault(); //fixed hashchange
			togglePopover($.targets._popover, $.targets.popover);
		}
	});

	var togglePopover = function togglePopover(popover, anchor, state) {
		if (state === 'show' && popover.classList.contains(CLASS_ACTIVE) || state === 'hide' && !popover.classList.contains(CLASS_ACTIVE)) {
			return;
		}
		removeBackdropTimer && removeBackdropTimer.cancel(); //取消remove的timer
		//remove一遍，以免来回快速切换，导致webkitTransitionEnd不触发，无法remove
		popover.removeEventListener('webkitTransitionEnd', onPopoverShown);
		popover.removeEventListener('webkitTransitionEnd', onPopoverHidden);
		backdrop.classList.remove(CLASS_BAR_BACKDROP);
		backdrop.classList.remove(CLASS_ACTION_BACKDROP);
		var _popover = document.querySelector('.mui-popover.mui-active');
		if (_popover) {
			//			_popover.setAttribute('style', '');
			_popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
			_popover.classList.remove(CLASS_ACTIVE);
			//			_popover.removeEventListener('webkitTransitionEnd', onPopoverHidden);
			//同一个弹出则直接返回，解决同一个popover的toggle
			if (popover === _popover) {
				removeBackdrop(_popover);
				return;
			}
		}
		var isActionSheet = false;
		if (popover.classList.contains(CLASS_BAR_POPOVER) || popover.classList.contains(CLASS_ACTION_POPOVER)) {
			//navBar
			if (popover.classList.contains(CLASS_ACTION_POPOVER)) {
				//action sheet popover
				isActionSheet = true;
				backdrop.classList.add(CLASS_ACTION_BACKDROP);
			} else {
				//bar popover
				backdrop.classList.add(CLASS_BAR_BACKDROP);
				//				if (anchor) {
				//					if (anchor.parentNode) {
				//						var offsetWidth = anchor.offsetWidth;
				//						var offsetLeft = anchor.offsetLeft;
				//						var innerWidth = window.innerWidth;
				//						popover.style.left = (Math.min(Math.max(offsetLeft, defaultPadding), innerWidth - offsetWidth - defaultPadding)) + "px";
				//					} else {
				//						//TODO anchor is position:{left,top,bottom,right}
				//					}
				//				}
			}
		}
		setStyle(popover, 'block'); //actionsheet transform
		popover.offsetHeight;
		popover.classList.add(CLASS_ACTIVE);
		backdrop.setAttribute('style', '');
		document.body.appendChild(backdrop);
		calPosition(popover, anchor, isActionSheet); //position
		backdrop.classList.add(CLASS_ACTIVE);
		popover.addEventListener('webkitTransitionEnd', onPopoverShown);
	};
	var setStyle = function setStyle(popover, display, top, left) {
		var style = popover.style;
		if (typeof display !== 'undefined') style.display = display;
		if (typeof top !== 'undefined') style.top = top + 'px';
		if (typeof left !== 'undefined') style.left = left + 'px';
	};
	var calPosition = function calPosition(popover, anchor, isActionSheet) {
		if (!popover || !anchor) {
			return;
		}

		if (isActionSheet) {
			//actionsheet
			setStyle(popover, 'block');
			return;
		}

		var wWidth = window.innerWidth;
		var wHeight = window.innerHeight;

		var pWidth = popover.offsetWidth;
		var pHeight = popover.offsetHeight;

		var aWidth = anchor.offsetWidth;
		var aHeight = anchor.offsetHeight;
		var offset = $.offset(anchor);

		var arrow = popover.querySelector('.' + CLASS_POPOVER_ARROW);
		if (!arrow) {
			arrow = document.createElement('div');
			arrow.className = CLASS_POPOVER_ARROW;
			popover.appendChild(arrow);
		}
		var arrowSize = arrow && arrow.offsetWidth / 2 || 0;

		var pTop = 0;
		var pLeft = 0;
		var diff = 0;
		var arrowLeft = 0;
		var defaultPadding = popover.classList.contains(CLASS_ACTION_POPOVER) ? 0 : 5;

		var position = 'top';
		if (pHeight + arrowSize < offset.top - window.pageYOffset) {
			//top
			pTop = offset.top - pHeight - arrowSize;
		} else if (pHeight + arrowSize < wHeight - (offset.top - window.pageYOffset) - aHeight) {
			//bottom
			position = 'bottom';
			pTop = offset.top + aHeight + arrowSize;
		} else {
			//middle
			position = 'middle';
			pTop = Math.max((wHeight - pHeight) / 2 + window.pageYOffset, 0);
			pLeft = Math.max((wWidth - pWidth) / 2 + window.pageXOffset, 0);
		}
		if (position === 'top' || position === 'bottom') {
			pLeft = aWidth / 2 + offset.left - pWidth / 2;
			diff = pLeft;
			if (pLeft < defaultPadding) pLeft = defaultPadding;
			if (pLeft + pWidth > wWidth) pLeft = wWidth - pWidth - defaultPadding;

			if (arrow) {
				if (position === 'top') {
					arrow.classList.add(CLASS_BOTTOM);
				} else {
					arrow.classList.remove(CLASS_BOTTOM);
				}
				diff = diff - pLeft;
				arrowLeft = pWidth / 2 - arrowSize / 2 + diff;
				arrowLeft = Math.max(Math.min(arrowLeft, pWidth - arrowSize * 2 - 6), 6);
				arrow.setAttribute('style', 'left:' + arrowLeft + 'px');
			}
		} else if (position === 'middle') {
			arrow.setAttribute('style', 'display:none');
		}
		setStyle(popover, 'block', pTop, pLeft);
	};

	$.createMask = function (callback) {
		var element = document.createElement('div');
		element.classList.add(CLASS_BACKDROP);
		element.addEventListener($.EVENT_MOVE, $.preventDefault);
		element.addEventListener('tap', function () {
			mask.close();
		});
		var mask = [element];
		mask._show = false;
		mask.show = function () {
			mask._show = true;
			element.setAttribute('style', 'opacity:1');
			document.body.appendChild(element);
			return mask;
		};
		mask._remove = function () {
			if (mask._show) {
				mask._show = false;
				element.setAttribute('style', 'opacity:0');
				$.later(function () {
					var body = document.body;
					element.parentNode === body && body.removeChild(element);
				}, 350);
			}
			return mask;
		};
		mask.close = function () {
			if (callback) {
				if (callback() !== false) {
					mask._remove();
				}
			} else {
				mask._remove();
			}
		};
		return mask;
	};
	$.fn.popover = function () {
		var args = arguments;
		this.each(function () {
			$.targets._popover = this;
			if (args[0] === 'show' || args[0] === 'hide' || args[0] === 'toggle') {
				togglePopover(this, args[1], args[0]);
			}
		});
	};
})(mui, window, document, 'popover');
/**
 * segmented-controllers
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @param {type} undefined
 * @returns {undefined}
 */
(function ($, window, document, name, undefined) {

	var CLASS_CONTROL_ITEM = 'mui-control-item';
	var CLASS_SEGMENTED_CONTROL = 'mui-segmented-control';
	var CLASS_SEGMENTED_CONTROL_VERTICAL = 'mui-segmented-control-vertical';
	var CLASS_CONTROL_CONTENT = 'mui-control-content';
	var CLASS_TAB_BAR = 'mui-bar-tab';
	var CLASS_TAB_ITEM = 'mui-tab-item';
	var handle = function handle(event, target) {
		if (target.classList && (target.classList.contains(CLASS_CONTROL_ITEM) || target.classList.contains(CLASS_TAB_ITEM))) {
			if (target.parentNode && target.parentNode.classList && target.parentNode.classList.contains(CLASS_SEGMENTED_CONTROL_VERTICAL)) {
				//vertical 如果preventDefault会导致无法滚动
			} else {
				event.preventDefault(); //stop hash change				
			}
			//			if (target.hash) {
			return target;
			//			}
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 80,
		handle: handle,
		target: false
	});

	window.addEventListener('tap', function (e) {

		var targetTab = $.targets.tab;
		if (!targetTab) {
			return;
		}
		var activeTab;
		var activeBodies;
		var targetBody;
		var className = 'mui-active';
		var classSelector = '.' + className;
		var segmentedControl = targetTab.parentNode;

		for (; segmentedControl && segmentedControl !== document; segmentedControl = segmentedControl.parentNode) {
			if (segmentedControl.classList.contains(CLASS_SEGMENTED_CONTROL)) {
				activeTab = segmentedControl.querySelector(classSelector + '.' + CLASS_CONTROL_ITEM);
				break;
			} else if (segmentedControl.classList.contains(CLASS_TAB_BAR)) {
				activeTab = segmentedControl.querySelector(classSelector + '.' + CLASS_TAB_ITEM);
			}
		}

		if (activeTab) {
			activeTab.classList.remove(className);
		}

		var isLastActive = targetTab === activeTab;
		if (targetTab) {
			targetTab.classList.add(className);
		}

		if (!targetTab.hash) {
			return;
		}
		targetBody = document.getElementById(targetTab.hash.replace('#', ''));

		if (!targetBody) {
			return;
		}
		if (!targetBody.classList.contains(CLASS_CONTROL_CONTENT)) {
			//tab bar popover
			targetTab.classList[isLastActive ? 'remove' : 'add'](className);
			return;
		}
		if (isLastActive) {
			//same
			return;
		}
		var parentNode = targetBody.parentNode;
		activeBodies = parentNode.querySelectorAll('.' + CLASS_CONTROL_CONTENT + classSelector);
		for (var i = 0; i < activeBodies.length; i++) {
			var activeBody = activeBodies[i];
			activeBody.parentNode === parentNode && activeBody.classList.remove(className);
		}

		targetBody.classList.add(className);

		var contents = [];
		var _contents = parentNode.querySelectorAll('.' + CLASS_CONTROL_CONTENT);
		for (var i = 0; i < _contents.length; i++) {
			//查找直属子节点
			_contents[i].parentNode === parentNode && contents.push(_contents[i]);
		}
		$.trigger(targetBody, $.eventName('shown', name), {
			tabNumber: Array.prototype.indexOf.call(contents, targetBody)
		});
		e.detail && e.detail.gesture.preventDefault(); //fixed hashchange
	});
})(mui, window, document, 'tab');
/**
 * Toggles switch
 * @param {type} $
 * @param {type} window
 * @param {type} name
 * @returns {undefined}
 */
(function ($, window, name) {

	var CLASS_SWITCH = 'mui-switch';
	var CLASS_SWITCH_HANDLE = 'mui-switch-handle';
	var CLASS_ACTIVE = 'mui-active';
	var CLASS_DRAGGING = 'mui-dragging';

	var CLASS_DISABLED = 'mui-disabled';

	var SELECTOR_SWITCH_HANDLE = '.' + CLASS_SWITCH_HANDLE;

	var handle = function handle(event, target) {
		if (target.classList && target.classList.contains(CLASS_SWITCH)) {
			return target;
		}
		return false;
	};

	$.registerTarget({
		name: name,
		index: 100,
		handle: handle,
		target: false
	});

	var Toggle = function Toggle(element) {
		this.element = element;
		this.classList = this.element.classList;
		this.handle = this.element.querySelector(SELECTOR_SWITCH_HANDLE);
		this.init();
		this.initEvent();
	};
	Toggle.prototype.init = function () {
		this.toggleWidth = this.element.offsetWidth;
		this.handleWidth = this.handle.offsetWidth;
		this.handleX = this.toggleWidth - this.handleWidth - 3;
	};
	Toggle.prototype.initEvent = function () {
		this.element.addEventListener($.EVENT_START, this);
		this.element.addEventListener('drag', this);
		this.element.addEventListener('swiperight', this);
		this.element.addEventListener($.EVENT_END, this);
		this.element.addEventListener($.EVENT_CANCEL, this);
	};
	Toggle.prototype.handleEvent = function (e) {
		if (this.classList.contains(CLASS_DISABLED)) {
			return;
		}
		switch (e.type) {
			case $.EVENT_START:
				this.start(e);
				break;
			case 'drag':
				this.drag(e);
				break;
			case 'swiperight':
				this.swiperight();
				break;
			case $.EVENT_END:
			case $.EVENT_CANCEL:
				this.end(e);
				break;
		}
	};
	Toggle.prototype.start = function (e) {
		this.handle.style.webkitTransitionDuration = this.element.style.webkitTransitionDuration = '.2s';
		this.classList.add(CLASS_DRAGGING);
		if (this.toggleWidth === 0 || this.handleWidth === 0) {
			//当switch处于隐藏状态时，width为0，需要重新初始化
			this.init();
		}
	};
	Toggle.prototype.drag = function (e) {
		var detail = e.detail;
		if (!this.isDragging) {
			if (detail.direction === 'left' || detail.direction === 'right') {
				this.isDragging = true;
				this.lastChanged = undefined;
				this.initialState = this.classList.contains(CLASS_ACTIVE);
			}
		}
		if (this.isDragging) {
			this.setTranslateX(detail.deltaX);
			e.stopPropagation();
			detail.gesture.preventDefault();
		}
	};
	Toggle.prototype.swiperight = function (e) {
		if (this.isDragging) {
			e.stopPropagation();
		}
	};
	Toggle.prototype.end = function (e) {
		this.classList.remove(CLASS_DRAGGING);
		if (this.isDragging) {
			this.isDragging = false;
			e.stopPropagation();
			$.trigger(this.element, 'toggle', {
				isActive: this.classList.contains(CLASS_ACTIVE)
			});
		} else {
			this.toggle();
		}
	};
	Toggle.prototype.toggle = function (animate) {
		var classList = this.classList;
		if (animate === false) {
			this.handle.style.webkitTransitionDuration = this.element.style.webkitTransitionDuration = '0s';
		} else {
			this.handle.style.webkitTransitionDuration = this.element.style.webkitTransitionDuration = '.2s';
		}
		if (classList.contains(CLASS_ACTIVE)) {
			classList.remove(CLASS_ACTIVE);
			this.handle.style.webkitTransform = 'translate(0,0)';
		} else {
			classList.add(CLASS_ACTIVE);
			this.handle.style.webkitTransform = 'translate(' + this.handleX + 'px,0)';
		}
		$.trigger(this.element, 'toggle', {
			isActive: this.classList.contains(CLASS_ACTIVE)
		});
	};
	Toggle.prototype.setTranslateX = $.animationFrame(function (x) {
		if (!this.isDragging) {
			return;
		}
		var isChanged = false;
		if (this.initialState && -x > this.handleX / 2 || !this.initialState && x > this.handleX / 2) {
			isChanged = true;
		}
		if (this.lastChanged !== isChanged) {
			if (isChanged) {
				this.handle.style.webkitTransform = 'translate(' + (this.initialState ? 0 : this.handleX) + 'px,0)';
				this.classList[this.initialState ? 'remove' : 'add'](CLASS_ACTIVE);
			} else {
				this.handle.style.webkitTransform = 'translate(' + (this.initialState ? this.handleX : 0) + 'px,0)';
				this.classList[this.initialState ? 'add' : 'remove'](CLASS_ACTIVE);
			}
			this.lastChanged = isChanged;
		}
	});

	$.fn['switch'] = function (options) {
		var switchApis = [];
		this.each(function () {
			var switchApi = null;
			var id = this.getAttribute('data-switch');
			if (!id) {
				id = ++$.uuid;
				$.data[id] = new Toggle(this);
				this.setAttribute('data-switch', id);
			} else {
				switchApi = $.data[id];
			}
			switchApis.push(switchApi);
		});
		return switchApis.length > 1 ? switchApis : switchApis[0];
	};
	$.ready(function () {
		$('.' + CLASS_SWITCH)['switch']();
	});
})(mui, window, 'toggle');
/**
 * Tableviews
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {

	var CLASS_ACTIVE = 'mui-active';
	var CLASS_SELECTED = 'mui-selected';
	var CLASS_GRID_VIEW = 'mui-grid-view';
	var CLASS_RADIO_VIEW = 'mui-table-view-radio';
	var CLASS_TABLE_VIEW_CELL = 'mui-table-view-cell';
	var CLASS_COLLAPSE_CONTENT = 'mui-collapse-content';
	var CLASS_DISABLED = 'mui-disabled';
	var CLASS_TOGGLE = 'mui-switch';
	var CLASS_BTN = 'mui-btn';

	var CLASS_SLIDER_HANDLE = 'mui-slider-handle';
	var CLASS_SLIDER_LEFT = 'mui-slider-left';
	var CLASS_SLIDER_RIGHT = 'mui-slider-right';
	var CLASS_TRANSITIONING = 'mui-transitioning';

	var SELECTOR_SLIDER_HANDLE = '.' + CLASS_SLIDER_HANDLE;
	var SELECTOR_SLIDER_LEFT = '.' + CLASS_SLIDER_LEFT;
	var SELECTOR_SLIDER_RIGHT = '.' + CLASS_SLIDER_RIGHT;
	var SELECTOR_SELECTED = '.' + CLASS_SELECTED;
	var SELECTOR_BUTTON = '.' + CLASS_BTN;
	var overFactor = 0.8;
	var cell, a;

	var isMoved = isOpened = openedActions = progress = false;
	var sliderHandle = sliderActionLeft = sliderActionRight = buttonsLeft = buttonsRight = sliderDirection = sliderRequestAnimationFrame = false;
	var timer = translateX = lastTranslateX = sliderActionLeftWidth = sliderActionRightWidth = 0;

	var toggleActive = function toggleActive(isActive) {
		if (isActive) {
			if (a) {
				a.classList.add(CLASS_ACTIVE);
			} else if (cell) {
				cell.classList.add(CLASS_ACTIVE);
			}
		} else {
			timer && timer.cancel();
			if (a) {
				a.classList.remove(CLASS_ACTIVE);
			} else if (cell) {
				cell.classList.remove(CLASS_ACTIVE);
			}
		}
	};

	var updateTranslate = function updateTranslate() {
		if (translateX !== lastTranslateX) {
			if (buttonsRight && buttonsRight.length > 0) {
				progress = translateX / sliderActionRightWidth;
				if (translateX < -sliderActionRightWidth) {
					translateX = -sliderActionRightWidth - Math.pow(-translateX - sliderActionRightWidth, overFactor);
				}
				for (var i = 0, len = buttonsRight.length; i < len; i++) {
					var buttonRight = buttonsRight[i];
					if (typeof buttonRight._buttonOffset === 'undefined') {
						buttonRight._buttonOffset = buttonRight.offsetLeft;
					}
					buttonOffset = buttonRight._buttonOffset;
					setTranslate(buttonRight, translateX - buttonOffset * (1 + Math.max(progress, -1)));
				}
			}
			if (buttonsLeft && buttonsLeft.length > 0) {
				progress = translateX / sliderActionLeftWidth;
				if (translateX > sliderActionLeftWidth) {
					translateX = sliderActionLeftWidth + Math.pow(translateX - sliderActionLeftWidth, overFactor);
				}
				for (var i = 0, len = buttonsLeft.length; i < len; i++) {
					var buttonLeft = buttonsLeft[i];
					if (typeof buttonLeft._buttonOffset === 'undefined') {
						buttonLeft._buttonOffset = sliderActionLeftWidth - buttonLeft.offsetLeft - buttonLeft.offsetWidth;
					}
					buttonOffset = buttonLeft._buttonOffset;
					if (buttonsLeft.length > 1) {
						buttonLeft.style.zIndex = buttonsLeft.length - i;
					}
					setTranslate(buttonLeft, translateX + buttonOffset * (1 - Math.min(progress, 1)));
				}
			}
			setTranslate(sliderHandle, translateX);
			lastTranslateX = translateX;
		}
		sliderRequestAnimationFrame = requestAnimationFrame(function () {
			updateTranslate();
		});
	};
	var setTranslate = function setTranslate(element, x) {
		if (element) {
			element.style.webkitTransform = 'translate(' + x + 'px,0)';
		}
	};

	window.addEventListener($.EVENT_START, function (event) {
		if (cell) {
			toggleActive(false);
		}
		cell = a = false;
		isMoved = isOpened = openedActions = false;
		var target = event.target;
		var isDisabled = false;
		for (; target && target !== document; target = target.parentNode) {
			if (target.classList) {
				var classList = target.classList;
				if (target.tagName === 'INPUT' && target.type !== 'radio' && target.type !== 'checkbox' || target.tagName === 'BUTTON' || classList.contains(CLASS_TOGGLE) || classList.contains(CLASS_BTN) || classList.contains(CLASS_DISABLED)) {
					isDisabled = true;
				}
				if (classList.contains(CLASS_COLLAPSE_CONTENT)) {
					//collapse content
					break;
				}
				if (classList.contains(CLASS_TABLE_VIEW_CELL)) {
					cell = target;
					//TODO swipe to delete close
					var selected = cell.parentNode.querySelector(SELECTOR_SELECTED);
					if (!cell.parentNode.classList.contains(CLASS_RADIO_VIEW) && selected && selected !== cell) {
						$.swipeoutClose(selected);
						cell = isDisabled = false;
						return;
					}
					if (!cell.parentNode.classList.contains(CLASS_GRID_VIEW)) {
						var link = cell.querySelector('a');
						if (link && link.parentNode === cell) {
							//li>a
							a = link;
						}
					}
					var handle = cell.querySelector(SELECTOR_SLIDER_HANDLE);
					if (handle) {
						toggleEvents(cell);
						event.stopPropagation();
					}
					if (!isDisabled) {
						if (handle) {
							if (timer) {
								timer.cancel();
							}
							timer = $.later(function () {
								toggleActive(true);
							}, 100);
						} else {
							toggleActive(true);
						}
					}
					break;
				}
			}
		}
	});
	window.addEventListener($.EVENT_MOVE, function (event) {
		toggleActive(false);
	});

	var handleEvent = {
		handleEvent: function handleEvent(event) {
			switch (event.type) {
				case 'drag':
					this.drag(event);
					break;
				case 'dragend':
					this.dragend(event);
					break;
				case 'flick':
					this.flick(event);
					break;
				case 'swiperight':
					this.swiperight(event);
					break;
				case 'swipeleft':
					this.swipeleft(event);
					break;
			}
		},
		drag: function drag(event) {
			if (!cell) {
				return;
			}
			if (!isMoved) {
				//init
				sliderHandle = sliderActionLeft = sliderActionRight = buttonsLeft = buttonsRight = sliderDirection = sliderRequestAnimationFrame = false;
				sliderHandle = cell.querySelector(SELECTOR_SLIDER_HANDLE);
				if (sliderHandle) {
					sliderActionLeft = cell.querySelector(SELECTOR_SLIDER_LEFT);
					sliderActionRight = cell.querySelector(SELECTOR_SLIDER_RIGHT);
					if (sliderActionLeft) {
						sliderActionLeftWidth = sliderActionLeft.offsetWidth;
						buttonsLeft = sliderActionLeft.querySelectorAll(SELECTOR_BUTTON);
					}
					if (sliderActionRight) {
						sliderActionRightWidth = sliderActionRight.offsetWidth;
						buttonsRight = sliderActionRight.querySelectorAll(SELECTOR_BUTTON);
					}
					cell.classList.remove(CLASS_TRANSITIONING);
					isOpened = cell.classList.contains(CLASS_SELECTED);
					if (isOpened) {
						openedActions = cell.querySelector(SELECTOR_SLIDER_LEFT + SELECTOR_SELECTED) ? 'left' : 'right';
					}
				}
			}
			var detail = event.detail;
			var direction = detail.direction;
			var angle = detail.angle;
			if (direction === 'left' && (angle > 150 || angle < -150)) {
				if (buttonsRight || buttonsLeft && isOpened) {
					//存在右侧按钮或存在左侧按钮且是已打开状态
					isMoved = true;
				}
			} else if (direction === 'right' && angle > -30 && angle < 30) {
				if (buttonsLeft || buttonsRight && isOpened) {
					//存在左侧按钮或存在右侧按钮且是已打开状态
					isMoved = true;
				}
			}
			if (isMoved) {
				event.stopPropagation();
				event.detail.gesture.preventDefault();
				var translate = event.detail.deltaX;
				if (isOpened) {
					if (openedActions === 'right') {
						translate = translate - sliderActionRightWidth;
					} else {
						translate = translate + sliderActionLeftWidth;
					}
				}
				if (translate > 0 && !buttonsLeft || translate < 0 && !buttonsRight) {
					if (!isOpened) {
						return;
					}
					translate = 0;
				}
				if (translate < 0) {
					sliderDirection = 'toLeft';
				} else if (translate > 0) {
					sliderDirection = 'toRight';
				} else {
					if (!sliderDirection) {
						sliderDirection = 'toLeft';
					}
				}
				if (!sliderRequestAnimationFrame) {
					updateTranslate();
				}
				translateX = translate;
			}
		},
		flick: function flick(event) {
			if (isMoved) {
				event.stopPropagation();
			}
		},
		swipeleft: function swipeleft(event) {
			if (isMoved) {
				event.stopPropagation();
			}
		},
		swiperight: function swiperight(event) {
			if (isMoved) {
				event.stopPropagation();
			}
		},
		dragend: function dragend(event) {
			if (!isMoved) {
				return;
			}
			event.stopPropagation();
			if (sliderRequestAnimationFrame) {
				cancelAnimationFrame(sliderRequestAnimationFrame);
				sliderRequestAnimationFrame = null;
			}
			var detail = event.detail;
			isMoved = false;
			var action = 'close';
			var actionsWidth = sliderDirection === 'toLeft' ? sliderActionRightWidth : sliderActionLeftWidth;
			var isToggle = detail.swipe || Math.abs(translateX) > actionsWidth / 2;
			if (isToggle) {
				if (!isOpened) {
					action = 'open';
				} else if (detail.direction === 'left' && openedActions === 'right') {
					action = 'open';
				} else if (detail.direction === 'right' && openedActions === 'left') {
					action = 'open';
				}
			}
			cell.classList.add(CLASS_TRANSITIONING);
			var buttons;
			if (action === 'open') {
				var newTranslate = sliderDirection === 'toLeft' ? -actionsWidth : actionsWidth;
				setTranslate(sliderHandle, newTranslate);
				buttons = sliderDirection === 'toLeft' ? buttonsRight : buttonsLeft;
				if (typeof buttons !== 'undefined') {
					var button = null;
					for (var i = 0; i < buttons.length; i++) {
						button = buttons[i];
						setTranslate(button, newTranslate);
					}
					button.parentNode.classList.add(CLASS_SELECTED);
					cell.classList.add(CLASS_SELECTED);
					if (!isOpened) {
						$.trigger(cell, sliderDirection === 'toLeft' ? 'slideleft' : 'slideright');
					}
				}
			} else {
				setTranslate(sliderHandle, 0);
				sliderActionLeft && sliderActionLeft.classList.remove(CLASS_SELECTED);
				sliderActionRight && sliderActionRight.classList.remove(CLASS_SELECTED);
				cell.classList.remove(CLASS_SELECTED);
			}
			var buttonOffset;
			if (buttonsLeft && buttonsLeft.length > 0 && buttonsLeft !== buttons) {
				for (var i = 0, len = buttonsLeft.length; i < len; i++) {
					var buttonLeft = buttonsLeft[i];
					buttonOffset = buttonLeft._buttonOffset;
					if (typeof buttonOffset === 'undefined') {
						buttonLeft._buttonOffset = sliderActionLeftWidth - buttonLeft.offsetLeft - buttonLeft.offsetWidth;
					}
					setTranslate(buttonLeft, buttonOffset);
				}
			}
			if (buttonsRight && buttonsRight.length > 0 && buttonsRight !== buttons) {
				for (var i = 0, len = buttonsRight.length; i < len; i++) {
					var buttonRight = buttonsRight[i];
					buttonOffset = buttonRight._buttonOffset;
					if (typeof buttonOffset === 'undefined') {
						buttonRight._buttonOffset = buttonRight.offsetLeft;
					}
					setTranslate(buttonRight, -buttonOffset);
				}
			}
		}
	};

	function toggleEvents(element, isRemove) {
		var method = !!isRemove ? 'removeEventListener' : 'addEventListener';
		element[method]('drag', handleEvent);
		element[method]('dragend', handleEvent);
		element[method]('swiperight', handleEvent);
		element[method]('swipeleft', handleEvent);
		element[method]('flick', handleEvent);
	}
	/**
  * 打开滑动菜单
  * @param {Object} el
  * @param {Object} direction
  */
	$.swipeoutOpen = function (el, direction) {
		if (!el) return;
		var classList = el.classList;
		if (classList.contains(CLASS_SELECTED)) return;
		if (!direction) {
			if (el.querySelector(SELECTOR_SLIDER_RIGHT)) {
				direction = 'right';
			} else {
				direction = 'left';
			}
		}
		var swipeoutAction = el.querySelector($.classSelector(".slider-" + direction));
		if (!swipeoutAction) return;
		swipeoutAction.classList.add(CLASS_SELECTED);
		classList.add(CLASS_SELECTED);
		classList.remove(CLASS_TRANSITIONING);
		var buttons = swipeoutAction.querySelectorAll(SELECTOR_BUTTON);
		var swipeoutWidth = swipeoutAction.offsetWidth;
		var translate = direction === 'right' ? -swipeoutWidth : swipeoutWidth;
		var length = buttons.length;
		var button;
		for (var i = 0; i < length; i++) {
			button = buttons[i];
			if (direction === 'right') {
				setTranslate(button, -button.offsetLeft);
			} else {
				setTranslate(button, swipeoutWidth - button.offsetWidth - button.offsetLeft);
			}
		}
		classList.add(CLASS_TRANSITIONING);
		for (var i = 0; i < length; i++) {
			setTranslate(buttons[i], translate);
		}
		setTranslate(el.querySelector(SELECTOR_SLIDER_HANDLE), translate);
	};
	/**
  * 关闭滑动菜单
  * @param {Object} el
  */
	$.swipeoutClose = function (el) {
		if (!el) return;
		var classList = el.classList;
		if (!classList.contains(CLASS_SELECTED)) return;
		var direction = el.querySelector(SELECTOR_SLIDER_RIGHT + SELECTOR_SELECTED) ? 'right' : 'left';
		var swipeoutAction = el.querySelector($.classSelector(".slider-" + direction));
		if (!swipeoutAction) return;
		swipeoutAction.classList.remove(CLASS_SELECTED);
		classList.remove(CLASS_SELECTED);
		classList.add(CLASS_TRANSITIONING);
		var buttons = swipeoutAction.querySelectorAll(SELECTOR_BUTTON);
		var swipeoutWidth = swipeoutAction.offsetWidth;
		var length = buttons.length;
		var button;
		setTranslate(el.querySelector(SELECTOR_SLIDER_HANDLE), 0);
		for (var i = 0; i < length; i++) {
			button = buttons[i];
			if (direction === 'right') {
				setTranslate(button, -button.offsetLeft);
			} else {
				setTranslate(button, swipeoutWidth - button.offsetWidth - button.offsetLeft);
			}
		}
	};

	window.addEventListener($.EVENT_END, function (event) {
		//使用touchend来取消高亮，避免一次点击既不触发tap，doubletap，longtap的事件
		if (!cell) {
			return;
		}
		toggleActive(false);
		sliderHandle && toggleEvents(cell, true);
	});
	window.addEventListener($.EVENT_CANCEL, function (event) {
		//使用touchcancel来取消高亮，避免一次点击既不触发tap，doubletap，longtap的事件
		if (!cell) {
			return;
		}
		toggleActive(false);
		sliderHandle && toggleEvents(cell, true);
	});
	var radioOrCheckboxClick = function radioOrCheckboxClick(event) {
		var type = event.target && event.target.type || '';
		if (type === 'radio' || type === 'checkbox') {
			return;
		}
		var classList = cell.classList;
		if (classList.contains('mui-radio')) {
			var input = cell.querySelector('input[type=radio]');
			if (input) {
				//				input.click();
				if (!input.disabled && !input.readOnly) {
					input.checked = !input.checked;
					$.trigger(input, 'change');
				}
			}
		} else if (classList.contains('mui-checkbox')) {
			var input = cell.querySelector('input[type=checkbox]');
			if (input) {
				//				input.click();
				if (!input.disabled && !input.readOnly) {
					input.checked = !input.checked;
					$.trigger(input, 'change');
				}
			}
		}
	};
	//fixed hashchange(android)
	window.addEventListener($.EVENT_CLICK, function (e) {
		if (cell && cell.classList.contains('mui-collapse')) {
			e.preventDefault();
		}
	});
	window.addEventListener('doubletap', function (event) {
		if (cell) {
			radioOrCheckboxClick(event);
		}
	});
	var preventDefaultException = /^(INPUT|TEXTAREA|BUTTON|SELECT)$/;
	window.addEventListener('tap', function (event) {
		if (!cell) {
			return;
		}
		var isExpand = false;
		var classList = cell.classList;
		var ul = cell.parentNode;
		if (ul && ul.classList.contains(CLASS_RADIO_VIEW)) {
			if (classList.contains(CLASS_SELECTED)) {
				return;
			}
			var selected = ul.querySelector('li' + SELECTOR_SELECTED);
			if (selected) {
				selected.classList.remove(CLASS_SELECTED);
			}
			classList.add(CLASS_SELECTED);
			$.trigger(cell, 'selected', {
				el: cell
			});
			return;
		}
		if (classList.contains('mui-collapse') && !cell.parentNode.classList.contains('mui-unfold')) {
			if (!preventDefaultException.test(event.target.tagName)) {
				event.detail.gesture.preventDefault();
			}

			if (!classList.contains(CLASS_ACTIVE)) {
				//展开时,需要收缩其他同类
				var collapse = cell.parentNode.querySelector('.mui-collapse.mui-active');
				if (collapse) {
					collapse.classList.remove(CLASS_ACTIVE);
				}
				isExpand = true;
			}
			classList.toggle(CLASS_ACTIVE);
			if (isExpand) {
				//触发展开事件
				$.trigger(cell, 'expand');

				//scroll
				//暂不滚动
				// var offsetTop = $.offset(cell).top;
				// var scrollTop = document.body.scrollTop;
				// var height = window.innerHeight;
				// var offsetHeight = cell.offsetHeight;
				// var cellHeight = (offsetTop - scrollTop + offsetHeight);
				// if (offsetHeight > height) {
				// 	$.scrollTo(offsetTop, 300);
				// } else if (cellHeight > height) {
				// 	$.scrollTo(cellHeight - height + scrollTop, 300);
				// }
			}
		} else {
			radioOrCheckboxClick(event);
		}
	});
})(mui, window, document);
(function ($, window) {
	/**
  * 警告消息框
  */
	$.alert = function (message, title, btnValue, callback) {
		if ($.os.plus) {
			if (typeof message === 'undefined') {
				return;
			} else {
				if (typeof title === 'function') {
					callback = title;
					title = null;
					btnValue = '确定';
				} else if (typeof btnValue === 'function') {
					callback = btnValue;
					btnValue = null;
				}
				$.plusReady(function () {
					plus.nativeUI.alert(message, callback, title, btnValue);
				});
			}
		} else {
			//TODO H5版本
			window.alert(message);
		}
	};
})(mui, window);

(function ($, window) {
	/**
  * 确认消息框
  */
	$.confirm = function (message, title, btnArray, callback) {
		if ($.os.plus) {
			if (typeof message === 'undefined') {
				return;
			} else {
				if (typeof title === 'function') {
					callback = title;
					title = null;
					btnArray = null;
				} else if (typeof btnArray === 'function') {
					callback = btnArray;
					btnArray = null;
				}
				$.plusReady(function () {
					plus.nativeUI.confirm(message, callback, title, btnArray);
				});
			}
		} else {
			//H5版本，0为确认，1为取消
			if (window.confirm(message)) {
				callback({
					index: 0
				});
			} else {
				callback({
					index: 1
				});
			}
		}
	};
})(mui, window);

(function ($, window) {
	/**
  * 输入对话框
  */
	$.prompt = function (text, defaultText, title, btnArray, callback) {
		if ($.os.plus) {
			if (typeof message === 'undefined') {
				return;
			} else {

				if (typeof defaultText === 'function') {
					callback = defaultText;
					defaultText = null;
					title = null;
					btnArray = null;
				} else if (typeof title === 'function') {
					callback = title;
					title = null;
					btnArray = null;
				} else if (typeof btnArray === 'function') {
					callback = btnArray;
					btnArray = null;
				}
				$.plusReady(function () {
					plus.nativeUI.prompt(text, callback, title, defaultText, btnArray);
				});
			}
		} else {
			//H5版本(确认index为0，取消index为1)
			var result = window.prompt(text);
			if (result) {
				callback({
					index: 0,
					value: result
				});
			} else {
				callback({
					index: 1,
					value: ''
				});
			}
		}
	};
})(mui, window);
(function ($, window) {
	var CLASS_ACTIVE = 'mui-active';
	/**
  * 自动消失提示框
  */
	$.toast = function (message, options) {
		var durations = {
			'long': 3500,
			'short': 2000
		};

		//计算显示时间
		options = $.extend({
			duration: 'short'
		}, options || {});

		if ($.os.plus && options.type !== 'div') {
			//默认显示在底部；
			$.plusReady(function () {
				plus.nativeUI.toast(message, {
					verticalAlign: 'bottom',
					duration: options.duration
				});
			});
		} else {
			if (typeof options.duration === 'number') {
				duration = options.duration > 0 ? options.duration : durations['short'];
			} else {
				duration = durations[options.duration];
			}
			if (!duration) {
				duration = durations['short'];
			}
			var toast = document.createElement('div');
			toast.classList.add('mui-toast-container');
			toast.innerHTML = '<div class="' + 'mui-toast-message' + '">' + message + '</div>';
			toast.addEventListener('webkitTransitionEnd', function () {
				if (!toast.classList.contains(CLASS_ACTIVE)) {
					toast.parentNode.removeChild(toast);
					toast = null;
				}
			});
			//点击则自动消失
			toast.addEventListener('click', function () {
				toast.parentNode.removeChild(toast);
				toast = null;
			});
			document.body.appendChild(toast);
			toast.offsetHeight;
			toast.classList.add(CLASS_ACTIVE);
			setTimeout(function () {
				toast && toast.classList.remove(CLASS_ACTIVE);
			}, duration);

			return {
				isVisible: function isVisible() {
					return !!toast;
				}
			};
		}
	};
})(mui, window);
/**
 * Popup(alert,confirm,prompt)  
 * @param {Object} $
 * @param {Object} window
 * @param {Object} document
 */
(function ($, window, document) {
	var CLASS_POPUP = 'mui-popup';
	var CLASS_POPUP_BACKDROP = 'mui-popup-backdrop';
	var CLASS_POPUP_IN = 'mui-popup-in';
	var CLASS_POPUP_OUT = 'mui-popup-out';
	var CLASS_POPUP_INNER = 'mui-popup-inner';
	var CLASS_POPUP_TITLE = 'mui-popup-title';
	var CLASS_POPUP_TEXT = 'mui-popup-text';
	var CLASS_POPUP_INPUT = 'mui-popup-input';
	var CLASS_POPUP_BUTTONS = 'mui-popup-buttons';
	var CLASS_POPUP_BUTTON = 'mui-popup-button';
	var CLASS_POPUP_BUTTON_BOLD = 'mui-popup-button-bold';
	var CLASS_POPUP_BACKDROP = 'mui-popup-backdrop';
	var CLASS_ACTIVE = 'mui-active';

	var popupStack = [];
	var backdrop = function () {
		var element = document.createElement('div');
		element.classList.add(CLASS_POPUP_BACKDROP);
		element.addEventListener($.EVENT_MOVE, $.preventDefault);
		element.addEventListener('webkitTransitionEnd', function () {
			if (!this.classList.contains(CLASS_ACTIVE)) {
				element.parentNode && element.parentNode.removeChild(element);
			}
		});
		return element;
	}();

	var createInput = function createInput(placeholder) {
		return '<div class="' + CLASS_POPUP_INPUT + '"><input type="text" autofocus placeholder="' + (placeholder || '') + '"/></div>';
	};
	var createInner = function createInner(message, title, extra) {
		return '<div class="' + CLASS_POPUP_INNER + '"><div class="' + CLASS_POPUP_TITLE + '">' + title + '</div><div class="' + CLASS_POPUP_TEXT + '">' + message.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>") + '</div>' + (extra || '') + '</div>';
	};
	var createButtons = function createButtons(btnArray) {
		var length = btnArray.length;
		var btns = [];
		for (var i = 0; i < length; i++) {
			btns.push('<span class="' + CLASS_POPUP_BUTTON + (i === length - 1 ? ' ' + CLASS_POPUP_BUTTON_BOLD : '') + '">' + btnArray[i] + '</span>');
		}
		return '<div class="' + CLASS_POPUP_BUTTONS + '">' + btns.join('') + '</div>';
	};

	var createPopup = function createPopup(html, callback) {
		var popupElement = document.createElement('div');
		popupElement.className = CLASS_POPUP;
		popupElement.innerHTML = html;
		var removePopupElement = function removePopupElement() {
			popupElement.parentNode && popupElement.parentNode.removeChild(popupElement);
			popupElement = null;
		};
		popupElement.addEventListener($.EVENT_MOVE, $.preventDefault);
		popupElement.addEventListener('webkitTransitionEnd', function (e) {
			if (popupElement && e.target === popupElement && popupElement.classList.contains(CLASS_POPUP_OUT)) {
				removePopupElement();
			}
		});
		popupElement.style.display = 'block';
		document.body.appendChild(popupElement);
		popupElement.offsetHeight;
		popupElement.classList.add(CLASS_POPUP_IN);

		if (!backdrop.classList.contains(CLASS_ACTIVE)) {
			backdrop.style.display = 'block';
			document.body.appendChild(backdrop);
			backdrop.offsetHeight;
			backdrop.classList.add(CLASS_ACTIVE);
		}
		var btns = $.qsa('.' + CLASS_POPUP_BUTTON, popupElement);
		var input = popupElement.querySelector('.' + CLASS_POPUP_INPUT + ' input');
		var popup = {
			element: popupElement,
			close: function close(index, animate) {
				if (popupElement) {
					var result = callback && callback({
						index: index || 0,
						value: input && input.value || ''
					});
					if (result === false) {
						//返回false则不关闭当前popup
						return;
					}
					if (animate !== false) {
						popupElement.classList.remove(CLASS_POPUP_IN);
						popupElement.classList.add(CLASS_POPUP_OUT);
					} else {
						removePopupElement();
					}
					popupStack.pop();
					//如果还有其他popup，则不remove backdrop
					if (popupStack.length) {
						popupStack[popupStack.length - 1]['show'](animate);
					} else {
						backdrop.classList.remove(CLASS_ACTIVE);
					}
				}
			}
		};
		var handleEvent = function handleEvent(e) {
			popup.close(btns.indexOf(e.target));
		};
		$(popupElement).on('tap', '.' + CLASS_POPUP_BUTTON, handleEvent);
		if (popupStack.length) {
			popupStack[popupStack.length - 1]['hide']();
		}
		popupStack.push({
			close: popup.close,
			show: function show(animate) {
				popupElement.style.display = 'block';
				popupElement.offsetHeight;
				popupElement.classList.add(CLASS_POPUP_IN);
			},
			hide: function hide() {
				popupElement.style.display = 'none';
				popupElement.classList.remove(CLASS_POPUP_IN);
			}
		});
		return popup;
	};
	var createAlert = function createAlert(message, title, btnValue, callback, type) {
		if (typeof message === 'undefined') {
			return;
		} else {
			if (typeof title === 'function') {
				callback = title;
				type = btnValue;
				title = null;
				btnValue = null;
			} else if (typeof btnValue === 'function') {
				type = callback;
				callback = btnValue;
				btnValue = null;
			}
		}
		if (!$.os.plus || type === 'div') {
			return createPopup(createInner(message, title || '提示') + createButtons([btnValue || '确定']), callback);
		}
		return plus.nativeUI.alert(message, callback, title || '提示', btnValue || '确定');
	};
	var createConfirm = function createConfirm(message, title, btnArray, callback, type) {
		if (typeof message === 'undefined') {
			return;
		} else {
			if (typeof title === 'function') {
				callback = title;
				type = btnArray;
				title = null;
				btnArray = null;
			} else if (typeof btnArray === 'function') {
				type = callback;
				callback = btnArray;
				btnArray = null;
			}
		}
		if (!$.os.plus || type === 'div') {
			return createPopup(createInner(message, title || '提示') + createButtons(btnArray || ['取消', '确认']), callback);
		}
		return plus.nativeUI.confirm(message, callback, title, btnArray || ['取消', '确认']);
	};
	var createPrompt = function createPrompt(message, placeholder, title, btnArray, callback, type) {
		if (typeof message === 'undefined') {
			return;
		} else {
			if (typeof placeholder === 'function') {
				callback = placeholder;
				type = title;
				placeholder = null;
				title = null;
				btnArray = null;
			} else if (typeof title === 'function') {
				callback = title;
				type = btnArray;
				title = null;
				btnArray = null;
			} else if (typeof btnArray === 'function') {
				type = callback;
				callback = btnArray;
				btnArray = null;
			}
		}
		if (!$.os.plus || type === 'div') {
			return createPopup(createInner(message, title || '提示', createInput(placeholder)) + createButtons(btnArray || ['取消', '确认']), callback);
		}
		return plus.nativeUI.prompt(message, callback, title || '提示', placeholder, btnArray || ['取消', '确认']);
	};
	var closePopup = function closePopup() {
		if (popupStack.length) {
			popupStack[popupStack.length - 1]['close']();
			return true;
		} else {
			return false;
		}
	};
	var closePopups = function closePopups() {
		while (popupStack.length) {
			popupStack[popupStack.length - 1]['close']();
		}
	};

	$.closePopup = closePopup;
	$.closePopups = closePopups;
	$.alert = createAlert;
	$.confirm = createConfirm;
	$.prompt = createPrompt;
})(mui, window, document);
(function ($, document) {
	var CLASS_PROGRESSBAR = 'mui-progressbar';
	var CLASS_PROGRESSBAR_IN = 'mui-progressbar-in';
	var CLASS_PROGRESSBAR_OUT = 'mui-progressbar-out';
	var CLASS_PROGRESSBAR_INFINITE = 'mui-progressbar-infinite';

	var SELECTOR_PROGRESSBAR = '.mui-progressbar';

	var _findProgressbar = function _findProgressbar(container) {
		container = $(container || 'body');
		if (container.length === 0) return;
		container = container[0];
		if (container.classList.contains(CLASS_PROGRESSBAR)) {
			return container;
		}
		var progressbars = container.querySelectorAll(SELECTOR_PROGRESSBAR);
		if (progressbars) {
			for (var i = 0, len = progressbars.length; i < len; i++) {
				var progressbar = progressbars[i];
				if (progressbar.parentNode === container) {
					return progressbar;
				}
			}
		}
	};
	/**
  * 创建并显示进度条 
  * @param {Object} container  可选，默认body，支持selector,DOM Node,mui wrapper
  * @param {Object} progress 可选，undefined表示循环，数字表示具体进度
  * @param {Object} color 可选，指定颜色样式(目前暂未提供实际样式，可暂时不暴露此参数)
  */
	var showProgressbar = function showProgressbar(container, progress, color) {
		if (typeof container === 'number') {
			color = progress;
			progress = container;
			container = 'body';
		}
		container = $(container || 'body');
		if (container.length === 0) return;
		container = container[0];
		var progressbar;
		if (container.classList.contains(CLASS_PROGRESSBAR)) {
			progressbar = container;
		} else {
			var progressbars = container.querySelectorAll(SELECTOR_PROGRESSBAR + ':not(.' + CLASS_PROGRESSBAR_OUT + ')');
			if (progressbars) {
				for (var i = 0, len = progressbars.length; i < len; i++) {
					var _progressbar = progressbars[i];
					if (_progressbar.parentNode === container) {
						progressbar = _progressbar;
						break;
					}
				}
			}
			if (!progressbar) {
				progressbar = document.createElement('span');
				progressbar.className = CLASS_PROGRESSBAR + ' ' + CLASS_PROGRESSBAR_IN + (typeof progress !== 'undefined' ? '' : ' ' + CLASS_PROGRESSBAR_INFINITE) + (color ? ' ' + CLASS_PROGRESSBAR + '-' + color : '');
				if (typeof progress !== 'undefined') {
					progressbar.innerHTML = '<span></span>';
				}
				container.appendChild(progressbar);
			} else {
				progressbar.classList.add(CLASS_PROGRESSBAR_IN);
			}
		}
		if (progress) setProgressbar(container, progress);
		return progressbar;
	};
	/**
  * 关闭进度条 
  * @param {Object} container 可选，默认body，支持selector,DOM Node,mui wrapper
  */
	var hideProgressbar = function hideProgressbar(container) {
		var progressbar = _findProgressbar(container);
		if (!progressbar) {
			return;
		}
		var classList = progressbar.classList;
		if (!classList.contains(CLASS_PROGRESSBAR_IN) || classList.contains(CLASS_PROGRESSBAR_OUT)) {
			return;
		}
		classList.remove(CLASS_PROGRESSBAR_IN);
		classList.add(CLASS_PROGRESSBAR_OUT);
		progressbar.addEventListener('webkitAnimationEnd', function () {
			progressbar.parentNode && progressbar.parentNode.removeChild(progressbar);
			progressbar = null;
		});
		return;
	};
	/**
  * 设置指定进度条进度 
  * @param {Object} container  可选，默认body，支持selector,DOM Node,mui wrapper
  * @param {Object} progress 可选，默认0 取值范围[0-100]
  * @param {Object} speed 进度条动画时间
  */
	var setProgressbar = function setProgressbar(container, progress, speed) {
		if (typeof container === 'number') {
			speed = progress;
			progress = container;
			container = false;
		}
		var progressbar = _findProgressbar(container);
		if (!progressbar || progressbar.classList.contains(CLASS_PROGRESSBAR_INFINITE)) {
			return;
		}
		if (progress) progress = Math.min(Math.max(progress, 0), 100);
		progressbar.offsetHeight;
		var span = progressbar.querySelector('span');
		if (span) {
			var style = span.style;
			style.webkitTransform = 'translate3d(' + (-100 + progress) + '%,0,0)';
			if (typeof speed !== 'undefined') {
				style.webkitTransitionDuration = speed + 'ms';
			} else {
				style.webkitTransitionDuration = '';
			}
		}
		return progressbar;
	};
	$.fn.progressbar = function (options) {
		var progressbarApis = [];
		options = options || {};
		this.each(function () {
			var self = this;
			var progressbarApi = self.mui_plugin_progressbar;
			if (!progressbarApi) {
				self.mui_plugin_progressbar = progressbarApi = {
					options: options,
					setOptions: function setOptions(options) {
						this.options = options;
					},
					show: function show() {
						return showProgressbar(self, this.options.progress, this.options.color);
					},
					setProgress: function setProgress(progress) {
						return setProgressbar(self, progress);
					},
					hide: function hide() {
						return hideProgressbar(self);
					}
				};
			} else if (options) {
				progressbarApi.setOptions(options);
			}
			progressbarApis.push(progressbarApi);
		});
		return progressbarApis.length === 1 ? progressbarApis[0] : progressbarApis;
	};
	//	$.setProgressbar = setProgressbar;
	//	$.showProgressbar = showProgressbar;
	//	$.hideProgressbar = hideProgressbar;
})(mui, document);
/**
 * Input(TODO resize)
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {
	var CLASS_ICON = 'mui-icon';
	var CLASS_ICON_CLEAR = 'mui-icon-clear';
	var CLASS_ICON_SPEECH = 'mui-icon-speech';
	var CLASS_ICON_SEARCH = 'mui-icon-search';
	var CLASS_ICON_PASSWORD = 'mui-icon-eye';
	var CLASS_INPUT_ROW = 'mui-input-row';
	var CLASS_PLACEHOLDER = 'mui-placeholder';
	var CLASS_TOOLTIP = 'mui-tooltip';
	var CLASS_HIDDEN = 'mui-hidden';
	var CLASS_FOCUSIN = 'mui-focusin';
	var SELECTOR_ICON_CLOSE = '.' + CLASS_ICON_CLEAR;
	var SELECTOR_ICON_SPEECH = '.' + CLASS_ICON_SPEECH;
	var SELECTOR_ICON_PASSWORD = '.' + CLASS_ICON_PASSWORD;
	var SELECTOR_PLACEHOLDER = '.' + CLASS_PLACEHOLDER;
	var SELECTOR_TOOLTIP = '.' + CLASS_TOOLTIP;

	var findRow = function findRow(target) {
		for (; target && target !== document; target = target.parentNode) {
			if (target.classList && target.classList.contains(CLASS_INPUT_ROW)) {
				return target;
			}
		}
		return null;
	};
	var Input = function Input(element, options) {
		this.element = element;
		this.options = options || {
			actions: 'clear'
		};
		if (~this.options.actions.indexOf('slider')) {
			//slider
			this.sliderActionClass = CLASS_TOOLTIP + ' ' + CLASS_HIDDEN;
			this.sliderActionSelector = SELECTOR_TOOLTIP;
		} else {
			//clear,speech,search
			if (~this.options.actions.indexOf('clear')) {
				this.clearActionClass = CLASS_ICON + ' ' + CLASS_ICON_CLEAR + ' ' + CLASS_HIDDEN;
				this.clearActionSelector = SELECTOR_ICON_CLOSE;
			}
			if (~this.options.actions.indexOf('speech')) {
				//only for 5+
				this.speechActionClass = CLASS_ICON + ' ' + CLASS_ICON_SPEECH;
				this.speechActionSelector = SELECTOR_ICON_SPEECH;
			}
			if (~this.options.actions.indexOf('search')) {
				this.searchActionClass = CLASS_PLACEHOLDER;
				this.searchActionSelector = SELECTOR_PLACEHOLDER;
			}
			if (~this.options.actions.indexOf('password')) {
				this.passwordActionClass = CLASS_ICON + ' ' + CLASS_ICON_PASSWORD;
				this.passwordActionSelector = SELECTOR_ICON_PASSWORD;
			}
		}
		this.init();
	};
	Input.prototype.init = function () {
		this.initAction();
		this.initElementEvent();
	};
	Input.prototype.initAction = function () {
		var self = this;

		var row = self.element.parentNode;
		if (row) {
			if (self.sliderActionClass) {
				self.sliderAction = self.createAction(row, self.sliderActionClass, self.sliderActionSelector);
			} else {
				if (self.searchActionClass) {
					self.searchAction = self.createAction(row, self.searchActionClass, self.searchActionSelector);
					self.searchAction.addEventListener('tap', function (e) {
						$.focus(self.element);
						e.stopPropagation();
					});
				}
				if (self.speechActionClass) {
					self.speechAction = self.createAction(row, self.speechActionClass, self.speechActionSelector);
					self.speechAction.addEventListener('click', $.stopPropagation);
					self.speechAction.addEventListener('tap', function (event) {
						self.speechActionClick(event);
					});
				}
				if (self.clearActionClass) {
					self.clearAction = self.createAction(row, self.clearActionClass, self.clearActionSelector);
					self.clearAction.addEventListener('tap', function (event) {
						self.clearActionClick(event);
					});
				}
				if (self.passwordActionClass) {
					self.passwordAction = self.createAction(row, self.passwordActionClass, self.passwordActionSelector);
					self.passwordAction.addEventListener('tap', function (event) {
						self.passwordActionClick(event);
					});
				}
			}
		}
	};
	Input.prototype.createAction = function (row, actionClass, actionSelector) {
		var action = row.querySelector(actionSelector);
		if (!action) {
			var action = document.createElement('span');
			action.className = actionClass;
			if (actionClass === this.searchActionClass) {
				action.innerHTML = '<span class="' + CLASS_ICON + ' ' + CLASS_ICON_SEARCH + '"></span><span>' + this.element.getAttribute('placeholder') + '</span>';
				this.element.setAttribute('placeholder', '');
				if (this.element.value.trim()) {
					row.classList.add('mui-active');
				}
			}
			row.insertBefore(action, this.element.nextSibling);
		}
		return action;
	};
	Input.prototype.initElementEvent = function () {
		var element = this.element;

		if (this.sliderActionClass) {
			var tooltip = this.sliderAction;
			var timer = null;
			var showTip = function showTip() {
				//每次重新计算是因为控件可能被隐藏，初始化时计算是不正确的
				tooltip.classList.remove(CLASS_HIDDEN);
				var offsetLeft = element.offsetLeft;
				var width = element.offsetWidth - 28;
				var tooltipWidth = tooltip.offsetWidth;
				var distince = Math.abs(element.max - element.min);
				var scaleWidth = width / distince * Math.abs(element.value - element.min);
				tooltip.style.left = 14 + offsetLeft + scaleWidth - tooltipWidth / 2 + 'px';
				tooltip.innerText = element.value;
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(function () {
					tooltip.classList.add(CLASS_HIDDEN);
				}, 1000);
			};
			element.addEventListener('input', showTip);
			element.addEventListener('tap', showTip);
			element.addEventListener($.EVENT_MOVE, function (e) {
				e.stopPropagation();
			});
		} else {
			if (this.clearActionClass) {
				var action = this.clearAction;
				if (!action) {
					return;
				}
				$.each(['keyup', 'change', 'input', 'focus', 'cut', 'paste'], function (index, type) {
					(function (type) {
						element.addEventListener(type, function () {
							action.classList[element.value.trim() ? 'remove' : 'add'](CLASS_HIDDEN);
						});
					})(type);
				});
				element.addEventListener('blur', function () {
					action.classList.add(CLASS_HIDDEN);
				});
			}
			if (this.searchActionClass) {
				element.addEventListener('focus', function () {
					element.parentNode.classList.add('mui-active');
				});
				element.addEventListener('blur', function () {
					if (!element.value.trim()) {
						element.parentNode.classList.remove('mui-active');
					}
				});
			}
		}
	};
	Input.prototype.setPlaceholder = function (text) {
		if (this.searchActionClass) {
			var placeholder = this.element.parentNode.querySelector(SELECTOR_PLACEHOLDER);
			placeholder && (placeholder.getElementsByTagName('span')[1].innerText = text);
		} else {
			this.element.setAttribute('placeholder', text);
		}
	};
	Input.prototype.passwordActionClick = function (event) {
		if (this.element.type === 'text') {
			this.element.type = 'password';
		} else {
			this.element.type = 'text';
		}
		this.passwordAction.classList.toggle('mui-active');
		event.preventDefault();
	};
	Input.prototype.clearActionClick = function (event) {
		var self = this;
		self.element.value = '';
		$.focus(self.element);
		self.clearAction.classList.add(CLASS_HIDDEN);
		event.preventDefault();
	};
	Input.prototype.speechActionClick = function (event) {
		if (window.plus) {
			var self = this;
			var oldValue = self.element.value;
			self.element.value = '';
			document.body.classList.add(CLASS_FOCUSIN);
			plus.speech.startRecognize({
				engine: 'iFly'
			}, function (s) {
				self.element.value += s;
				$.focus(self.element);
				plus.speech.stopRecognize();
				$.trigger(self.element, 'recognized', {
					value: self.element.value
				});
				if (oldValue !== self.element.value) {
					$.trigger(self.element, 'change');
					$.trigger(self.element, 'input');
				}
				// document.body.classList.remove(CLASS_FOCUSIN);
			}, function (e) {
				document.body.classList.remove(CLASS_FOCUSIN);
			});
		} else {
			alert('only for 5+');
		}
		event.preventDefault();
	};
	$.fn.input = function (options) {
		var inputApis = [];
		this.each(function () {
			var inputApi = null;
			var actions = [];
			var row = findRow(this.parentNode);
			if (this.type === 'range' && row.classList.contains('mui-input-range')) {
				actions.push('slider');
			} else {
				var classList = this.classList;
				if (classList.contains('mui-input-clear')) {
					actions.push('clear');
				}
				if (!($.os.android && $.os.stream) && classList.contains('mui-input-speech')) {
					actions.push('speech');
				}
				if (classList.contains('mui-input-password')) {
					actions.push('password');
				}
				if (this.type === 'search' && row.classList.contains('mui-search')) {
					actions.push('search');
				}
			}
			var id = this.getAttribute('data-input-' + actions[0]);
			if (!id) {
				id = ++$.uuid;
				inputApi = $.data[id] = new Input(this, {
					actions: actions.join(',')
				});
				for (var i = 0, len = actions.length; i < len; i++) {
					this.setAttribute('data-input-' + actions[i], id);
				}
			} else {
				inputApi = $.data[id];
			}
			inputApis.push(inputApi);
		});
		return inputApis.length === 1 ? inputApis[0] : inputApis;
	};
	$.ready(function () {
		$('.mui-input-row input').input();
	});
})(mui, window, document);
(function ($, window) {
	var CLASS_ACTIVE = 'mui-active';
	var rgbaRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/;
	var getColor = function getColor(colorStr) {
		var matches = colorStr.match(rgbaRegex);
		if (matches && matches.length === 5) {
			return [matches[1], matches[2], matches[3], matches[4]];
		}
		return [];
	};
	var Transparent = function Transparent(element, options) {
		this.element = element;
		this.options = $.extend({
			top: 0, //距离顶部高度(到达该高度即触发)
			offset: 150, //滚动透明距离
			duration: 16, //过渡时间
			scrollby: window //监听滚动距离容器
		}, options || {});

		this.scrollByElem = this.options.scrollby || window;
		if (!this.scrollByElem) {
			throw new Error("监听滚动的元素不存在");
		}
		this.isNativeScroll = false;
		if (this.scrollByElem === window) {
			this.isNativeScroll = true;
		} else if (!~this.scrollByElem.className.indexOf('mui-scroll-wrapper')) {
			this.isNativeScroll = true;
		}

		this._style = this.element.style;
		this._bgColor = this._style.backgroundColor;
		var color = getColor(mui.getStyles(this.element, 'backgroundColor'));
		if (color.length) {
			this._R = color[0];
			this._G = color[1];
			this._B = color[2];
			this._A = parseFloat(color[3]);
			this.lastOpacity = this._A;
			this._bufferFn = $.buffer(this.handleScroll, this.options.duration, this);
			this.initEvent();
		} else {
			throw new Error("元素背景颜色必须为RGBA");
		}
	};

	Transparent.prototype.initEvent = function () {
		this.scrollByElem.addEventListener('scroll', this._bufferFn);
		if (this.isNativeScroll) {
			//原生scroll
			this.scrollByElem.addEventListener($.EVENT_MOVE, this._bufferFn);
		}
	};
	Transparent.prototype.handleScroll = function (e) {
		var y = window.scrollY;
		if (!this.isNativeScroll && e && e.detail) {
			y = -e.detail.y;
		}
		var opacity = (y - this.options.top) / this.options.offset + this._A;
		opacity = Math.min(Math.max(this._A, opacity), 1);
		this._style.backgroundColor = 'rgba(' + this._R + ',' + this._G + ',' + this._B + ',' + opacity + ')';
		if (opacity > this._A) {
			this.element.classList.add(CLASS_ACTIVE);
		} else {
			this.element.classList.remove(CLASS_ACTIVE);
		}
		if (this.lastOpacity !== opacity) {
			$.trigger(this.element, 'alpha', {
				alpha: opacity
			});
			this.lastOpacity = opacity;
		}
	};
	Transparent.prototype.destory = function () {
		this.scrollByElem.removeEventListener('scroll', this._bufferFn);
		this.scrollByElem.removeEventListener($.EVENT_MOVE, this._bufferFn);
		this.element.style.backgroundColor = this._bgColor;
		this.element.mui_plugin_transparent = null;
	};
	$.fn.transparent = function (options) {
		options = options || {};
		var transparentApis = [];
		this.each(function () {
			var transparentApi = this.mui_plugin_transparent;
			if (!transparentApi) {
				var top = this.getAttribute('data-top');
				var offset = this.getAttribute('data-offset');
				var duration = this.getAttribute('data-duration');
				var scrollby = this.getAttribute('data-scrollby');
				if (top !== null && typeof options.top === 'undefined') {
					options.top = top;
				}
				if (offset !== null && typeof options.offset === 'undefined') {
					options.offset = offset;
				}
				if (duration !== null && typeof options.duration === 'undefined') {
					options.duration = duration;
				}
				if (scrollby !== null && typeof options.scrollby === 'undefined') {
					options.scrollby = document.querySelector(scrollby) || window;
				}
				transparentApi = this.mui_plugin_transparent = new Transparent(this, options);
			}
			transparentApis.push(transparentApi);
		});
		return transparentApis.length === 1 ? transparentApis[0] : transparentApis;
	};
	$.ready(function () {
		$('.mui-bar-transparent').transparent();
	});
})(mui, window);
/**
 * 数字输入框
 * varstion 1.0.1
 * by Houfeng
 * Houfeng@DCloud.io
 */

(function ($) {

	var touchSupport = 'ontouchstart' in document;
	var tapEventName = touchSupport ? 'tap' : 'click';
	var changeEventName = 'change';
	var holderClassName = 'mui-numbox';
	var plusClassSelector = '.mui-btn-numbox-plus,.mui-numbox-btn-plus';
	var minusClassSelector = '.mui-btn-numbox-minus,.mui-numbox-btn-minus';
	var inputClassSelector = '.mui-input-numbox,.mui-numbox-input';

	var Numbox = $.Numbox = $.Class.extend({
		/**
   * 构造函数
   **/
		init: function init(holder, options) {
			var self = this;
			if (!holder) {
				throw "构造 numbox 时缺少容器元素";
			}
			self.holder = holder;
			options = options || {};
			options.step = parseInt(options.step || 1);
			self.options = options;
			self.input = $.qsa(inputClassSelector, self.holder)[0];
			self.plus = $.qsa(plusClassSelector, self.holder)[0];
			self.minus = $.qsa(minusClassSelector, self.holder)[0];
			self.checkValue();
			self.initEvent();
		},
		/**
   * 初始化事件绑定
   **/
		initEvent: function initEvent() {
			var self = this;
			self.plus.addEventListener(tapEventName, function (event) {
				var val = parseInt(self.input.value) + self.options.step;
				self.input.value = val.toString();
				$.trigger(self.input, changeEventName, null);
			});
			self.minus.addEventListener(tapEventName, function (event) {
				var val = parseInt(self.input.value) - self.options.step;
				self.input.value = val.toString();
				$.trigger(self.input, changeEventName, null);
			});
			self.input.addEventListener(changeEventName, function (event) {
				self.checkValue();
				var val = parseInt(self.input.value);
				//触发顶层容器
				$.trigger(self.holder, changeEventName, {
					value: val
				});
			});
		},
		/**
   * 获取当前值
   **/
		getValue: function getValue() {
			var self = this;
			return parseInt(self.input.value);
		},
		/**
   * 验证当前值是法合法
   **/
		checkValue: function checkValue() {
			var self = this;
			var val = self.input.value;
			if (val == null || val == '' || isNaN(val)) {
				self.input.value = self.options.min || 0;
				self.minus.disabled = self.options.min != null;
			} else {
				var val = parseInt(val);
				if (self.options.max != null && !isNaN(self.options.max) && val >= parseInt(self.options.max)) {
					val = self.options.max;
					self.plus.disabled = true;
				} else {
					self.plus.disabled = false;
				}
				if (self.options.min != null && !isNaN(self.options.min) && val <= parseInt(self.options.min)) {
					val = self.options.min;
					self.minus.disabled = true;
				} else {
					self.minus.disabled = false;
				}
				self.input.value = val;
			}
		},
		/**
   * 更新选项
   **/
		setOption: function setOption(name, value) {
			var self = this;
			self.options[name] = value;
		},
		/**
   * 动态设置新值
   **/
		setValue: function setValue(value) {
			this.input.value = value;
			this.checkValue();
		}
	});

	$.fn.numbox = function (options) {
		this.each(function (i, element) {
			if (element.numbox) {
				return;
			}
			if (options) {
				element.numbox = new Numbox(element, options);
			} else {
				var optionsText = element.getAttribute('data-numbox-options');
				var options = optionsText ? JSON.parse(optionsText) : {};
				options.step = element.getAttribute('data-numbox-step') || options.step;
				options.min = element.getAttribute('data-numbox-min') || options.min;
				options.max = element.getAttribute('data-numbox-max') || options.max;
				element.numbox = new Numbox(element, options);
			}
		});
		return this[0] ? this[0].numbox : null;
	};

	//自动处理 class='mui-locker' 的 dom
	$.ready(function () {
		$('.' + holderClassName).numbox();
	});
})(mui);
/**
 * Button
 * @param {type} $
 * @param {type} window
 * @param {type} document
 * @returns {undefined}
 */
(function ($, window, document) {
	var CLASS_DISABLED = 'mui-disabled';

	var STATE_RESET = 'reset';
	var STATE_LOADING = 'loading';

	var defaultOptions = {
		loadingText: 'Loading...', //文案
		loadingIcon: 'mui-spinner' + ' ' + 'mui-spinner-white', //图标，可为空
		loadingIconPosition: 'left' //图标所处位置，仅支持left|right
	};

	var Button = function Button(element, options) {
		this.element = element;
		this.options = $.extend({}, defaultOptions, options);
		if (!this.options.loadingText) {
			this.options.loadingText = defaultOptions.loadingText;
		}
		if (this.options.loadingIcon === null) {
			this.options.loadingIcon = 'mui-spinner';
			if ($.getStyles(this.element, 'color') === 'rgb(255, 255, 255)') {
				this.options.loadingIcon += ' ' + 'mui-spinner-white';
			}
		}
		this.isInput = this.element.tagName === 'INPUT';
		this.resetHTML = this.isInput ? this.element.value : this.element.innerHTML;
		this.state = '';
	};
	Button.prototype.loading = function () {
		this.setState(STATE_LOADING);
	};
	Button.prototype.reset = function () {
		this.setState(STATE_RESET);
	};
	Button.prototype.setState = function (state) {
		if (this.state === state) {
			return false;
		}
		this.state = state;
		if (state === STATE_RESET) {
			this.element.disabled = false;
			this.element.classList.remove(CLASS_DISABLED);
			this.setHtml(this.resetHTML);
		} else if (state === STATE_LOADING) {
			this.element.disabled = true;
			this.element.classList.add(CLASS_DISABLED);
			var html = this.isInput ? this.options.loadingText : '<span>' + this.options.loadingText + '</span>';
			if (this.options.loadingIcon && !this.isInput) {
				if (this.options.loadingIconPosition === 'right') {
					html += '&nbsp;<span class="' + this.options.loadingIcon + '"></span>';
				} else {
					html = '<span class="' + this.options.loadingIcon + '"></span>&nbsp;' + html;
				}
			}
			this.setHtml(html);
		}
	};
	Button.prototype.setHtml = function (html) {
		if (this.isInput) {
			this.element.value = html;
		} else {
			this.element.innerHTML = html;
		}
	};
	$.fn.button = function (state) {
		var buttonApis = [];
		this.each(function () {
			var buttonApi = this.mui_plugin_button;
			if (!buttonApi) {
				var loadingText = this.getAttribute('data-loading-text');
				var loadingIcon = this.getAttribute('data-loading-icon');
				var loadingIconPosition = this.getAttribute('data-loading-icon-position');
				this.mui_plugin_button = buttonApi = new Button(this, {
					loadingText: loadingText,
					loadingIcon: loadingIcon,
					loadingIconPosition: loadingIconPosition
				});
			}
			if (state === STATE_LOADING || state === STATE_RESET) {
				buttonApi.setState(state);
			}
			buttonApis.push(buttonApi);
		});
		return buttonApis.length === 1 ? buttonApis[0] : buttonApis;
	};
})(mui, window, document);

//export {reset} from "./component/mobile-reset.js";
//
//export {commonStyle} from "./component/mobile-commonStyle.js";
//
//export {scrollTopBottom} from "./component/mobile-scrollTopBottom.js";
//
//export {scrollLeftRight} from  "./component/mobile-scrollLeftRight.js";
//
//export {slide} from "./component/mobile-slide.js";
//
//export {tab} from "./component/mobile-tab.js";
//
//export {aside} from "./component/mobile-aside.js";
//
//export {fullpage} from "./component/mobile-fullpage.js";
//
//export {indexlist} from "./component/mobile-indexlist.js";
//
//export {spy} from "./component/mobile-spy.js";
//
//export {tableview} from "./component/mobile-tableview.js";
//
//export {overflow} from "./component/mobile-overflow.js";

})));
>>>>>>> 6a173c6534e8fdce85481ba8ec45c62e83e94d7c
