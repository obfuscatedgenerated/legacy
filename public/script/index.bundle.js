/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a11y.ts":
/*!*********************!*\
  !*** ./src/a11y.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeContentBionic = void 0;
var text_vide_1 = __webpack_require__(/*! text-vide */ "./node_modules/text-vide/dist/index.mjs");
var makeContentBionic = function () {
    var body = document.body;
    if (body.dataset.bionic === "true") {
        console.warn("Content is already bionic");
        return;
    }
    body.dataset.bionic = "true";
    body.innerHTML = (0, text_vide_1.textVide)(body.innerHTML);
    var style = document.createElement("style");
    style.innerHTML = "\n    * {\n        font-family: OpenDyslexic3, \"OpenDyslexic3\", \"Comic Sans MS\", Arial, sans-serif;\n    }\n\n    *:not(b) {\n        font-weight: normal;\n        color: #aaa;\n    }\n    .project-title:not(b), .project-description:not(b) {\n        font-weight: normal !important;\n        color: #ccc !important;\n    }\n\n    b {\n        color: #fff !important;\n    }\n\n\n    .project-blocker {\n        background: #000;\n    }\n    .project-blocker:hover {\n        opacity: 1;\n    }\n    ";
    document.head.appendChild(style);
    document.querySelectorAll(".scroll-anim").forEach(function (el) {
        el.classList.add("visible");
    });
};
exports.makeContentBionic = makeContentBionic;


/***/ }),

/***/ "./node_modules/text-vide/dist/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/text-vide/dist/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textVide": () => (/* binding */ Z)
/* harmony export */ });
var _=Object.defineProperty;var T=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(t,n,e)=>n in t?_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,u=(t,n)=>{for(var e in n||(n={}))N.call(n,e)&&h(t,e,n[e]);if(T)for(var e of T(n))k.call(n,e)&&h(t,e,n[e]);return t};var L=t=>t==null||t==="";var x=(t,n)=>Object.keys(t).reduce((o,r)=>(n(o[r])&&delete o[r],o),t);var I=(t,n)=>u(u({},n),x(t,L));var F=["<b>","</b>"],M=1,P=!0,E=t=>I(t,{sep:F,fixationPoint:M,ignoreHtmlTag:P});var y=[[0,4,12,17,24,29,35,42,48],[1,2,7,10,13,14,19,22,25,28,31,34,37,40,43,46,49],[1,2,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49],[0,2,4,5,6,8,9,11,14,15,17,18,20,0,21,23,24,26,27,29,30,32,33,35,36,38,39,41,42,44,45,47,48],[0,2,3,5,6,7,8,10,11,12,14,15,17,19,20,21,23,24,25,26,28,29,30,32,33,34,35,37,38,39,41,42,43,44,46,47,48]],O=(t,n)=>{var i;let{length:e}=t,o=(i=y[n-1])!=null?i:y[0],r=o.findIndex(a=>e<=a),s=e-r;return r===-1&&(s=e-o.length),Math.max(s,0)};var R=(t,n)=>typeof n=="string"?`${n}${t}${n}`:`${n[0]}${t}${n[1]}`;var b=/(<!--[\s\S]*?-->)|(<[^>]*>)/g,A=t=>{let n=t.matchAll(b),o=$(n).reverse();return r=>{let s=r.index,i=o.find(([m])=>s>m);if(!i)return!1;let[,a]=i;return s<a}},$=t=>[...t].map(n=>{let e=n.index,[o]=n,{length:r}=o;return[e,e+r-1]});var G=/(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu,Z=(t,n={})=>{if(!(t!=null&&t.length))return"";let{fixationPoint:e,sep:o,ignoreHtmlTag:r}=E(n),s=t.matchAll(G),i="",a=0,g;r&&(g=A(t));for(let d of s){if(g==null?void 0:g(d))continue;let[H]=d,f=d.index,p=f+O(H,e);i+=t.slice(a,f),f!==p&&(i+=R(t.slice(f,p),o)),a=p}let m=t.slice(a);return i+m};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var a11y = __webpack_require__(/*! ./a11y */ "./src/a11y.ts");
window.test = a11y.makeContentBionic;
var params = new URLSearchParams(window.location.search);
var ro = new IntersectionObserver(function (el) {
    for (var _i = 0, el_1 = el; _i < el_1.length; _i++) {
        var e = el_1[_i];
        if (e.intersectionRatio > 0) {
            e.target.classList.add("visible");
        }
    }
});
document.querySelectorAll(".scroll-anim").forEach(function (el) {
    el.classList.add("fade-on-scroll");
    ro.observe(el);
});
function clean_fade_in() {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");
    setTimeout(function () {
        document.body.classList.remove("fade-in");
    }, 250);
}
window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
        console.log("page was persisted");
        clean_fade_in();
    }
});
if (params.has("fade-in")) {
    clean_fade_in();
}
function link_transition(e, el) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(function () {
        window.location.assign(el.href);
    }, 250);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL25vZGVfbW9kdWxlcy90ZXh0LXZpZGUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRleHRWaWRlIH0gZnJvbSBcInRleHQtdmlkZVwiO1xyXG5cclxuZXhwb3J0IGxldCBtYWtlQ29udGVudEJpb25pYyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBpZiAoYm9keS5kYXRhc2V0LmJpb25pYyA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJDb250ZW50IGlzIGFscmVhZHkgYmlvbmljXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBib2R5LmRhdGFzZXQuYmlvbmljID0gXCJ0cnVlXCI7XHJcbiAgICBib2R5LmlubmVySFRNTCA9IHRleHRWaWRlKGJvZHkuaW5uZXJIVE1MKTtcclxuXHJcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBgXHJcbiAgICAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbkR5c2xleGljMywgXCJPcGVuRHlzbGV4aWMzXCIsIFwiQ29taWMgU2FucyBNU1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAqOm5vdChiKSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0LXRpdGxlOm5vdChiKSwgLnByb2plY3QtZGVzY3JpcHRpb246bm90KGIpIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBiIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucHJvamVjdC1ibG9ja2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLnByb2plY3QtYmxvY2tlcjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbC1hbmltXCIpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcbn0iLCJ2YXIgXz1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFQ9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczt2YXIgTj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGs9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTt2YXIgaD0odCxuLGUpPT5uIGluIHQ/Xyh0LG4se2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KTp0W25dPWUsdT0odCxuKT0+e2Zvcih2YXIgZSBpbiBufHwobj17fSkpTi5jYWxsKG4sZSkmJmgodCxlLG5bZV0pO2lmKFQpZm9yKHZhciBlIG9mIFQobikpay5jYWxsKG4sZSkmJmgodCxlLG5bZV0pO3JldHVybiB0fTt2YXIgTD10PT50PT1udWxsfHx0PT09XCJcIjt2YXIgeD0odCxuKT0+T2JqZWN0LmtleXModCkucmVkdWNlKChvLHIpPT4obihvW3JdKSYmZGVsZXRlIG9bcl0sbyksdCk7dmFyIEk9KHQsbik9PnUodSh7fSxuKSx4KHQsTCkpO3ZhciBGPVtcIjxiPlwiLFwiPC9iPlwiXSxNPTEsUD0hMCxFPXQ9PkkodCx7c2VwOkYsZml4YXRpb25Qb2ludDpNLGlnbm9yZUh0bWxUYWc6UH0pO3ZhciB5PVtbMCw0LDEyLDE3LDI0LDI5LDM1LDQyLDQ4XSxbMSwyLDcsMTAsMTMsMTQsMTksMjIsMjUsMjgsMzEsMzQsMzcsNDAsNDMsNDYsNDldLFsxLDIsNSw3LDksMTEsMTMsMTUsMTcsMTksMjEsMjMsMjUsMjcsMjksMzEsMzMsMzUsMzcsMzksNDEsNDMsNDUsNDcsNDldLFswLDIsNCw1LDYsOCw5LDExLDE0LDE1LDE3LDE4LDIwLDAsMjEsMjMsMjQsMjYsMjcsMjksMzAsMzIsMzMsMzUsMzYsMzgsMzksNDEsNDIsNDQsNDUsNDcsNDhdLFswLDIsMyw1LDYsNyw4LDEwLDExLDEyLDE0LDE1LDE3LDE5LDIwLDIxLDIzLDI0LDI1LDI2LDI4LDI5LDMwLDMyLDMzLDM0LDM1LDM3LDM4LDM5LDQxLDQyLDQzLDQ0LDQ2LDQ3LDQ4XV0sTz0odCxuKT0+e3ZhciBpO2xldHtsZW5ndGg6ZX09dCxvPShpPXlbbi0xXSkhPW51bGw/aTp5WzBdLHI9by5maW5kSW5kZXgoYT0+ZTw9YSkscz1lLXI7cmV0dXJuIHI9PT0tMSYmKHM9ZS1vLmxlbmd0aCksTWF0aC5tYXgocywwKX07dmFyIFI9KHQsbik9PnR5cGVvZiBuPT1cInN0cmluZ1wiP2Ake259JHt0fSR7bn1gOmAke25bMF19JHt0fSR7blsxXX1gO3ZhciBiPS8oPCEtLVtcXHNcXFNdKj8tLT4pfCg8W14+XSo+KS9nLEE9dD0+e2xldCBuPXQubWF0Y2hBbGwoYiksbz0kKG4pLnJldmVyc2UoKTtyZXR1cm4gcj0+e2xldCBzPXIuaW5kZXgsaT1vLmZpbmQoKFttXSk9PnM+bSk7aWYoIWkpcmV0dXJuITE7bGV0WyxhXT1pO3JldHVybiBzPGF9fSwkPXQ9PlsuLi50XS5tYXAobj0+e2xldCBlPW4uaW5kZXgsW29dPW4se2xlbmd0aDpyfT1vO3JldHVybltlLGUrci0xXX0pO3ZhciBHPS8oXFxwe0x9fFxccHtOZH0pKlxccHtMfShcXHB7TH18XFxwe05kfSkqL2d1LFo9KHQsbj17fSk9PntpZighKHQhPW51bGwmJnQubGVuZ3RoKSlyZXR1cm5cIlwiO2xldHtmaXhhdGlvblBvaW50OmUsc2VwOm8saWdub3JlSHRtbFRhZzpyfT1FKG4pLHM9dC5tYXRjaEFsbChHKSxpPVwiXCIsYT0wLGc7ciYmKGc9QSh0KSk7Zm9yKGxldCBkIG9mIHMpe2lmKGc9PW51bGw/dm9pZCAwOmcoZCkpY29udGludWU7bGV0W0hdPWQsZj1kLmluZGV4LHA9ZitPKEgsZSk7aSs9dC5zbGljZShhLGYpLGYhPT1wJiYoaSs9Uih0LnNsaWNlKGYscCksbykpLGE9cH1sZXQgbT10LnNsaWNlKGEpO3JldHVybiBpK219O2V4cG9ydHtaIGFzIHRleHRWaWRlfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgYTExeSBmcm9tIFwiLi9hMTF5XCI7XHJcblxyXG4vL2ExMXkubWFrZUNvbnRlbnRCaW9uaWMoKTtcclxuXHJcbig8YW55PndpbmRvdykudGVzdCA9IGExMXkubWFrZUNvbnRlbnRCaW9uaWM7XHJcblxyXG5jb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuY29uc3Qgcm8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZWwgPT4ge1xyXG4gICAgZm9yIChjb25zdCBlIG9mIGVsKSB7XHJcbiAgICAgICAgaWYgKGUuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbC1hbmltXCIpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImZhZGUtb24tc2Nyb2xsXCIpOyAvLyB0aGVyZWZvcmUgb25seSB3b3JrcyB3aXRoIGpzIG9uXHJcbiAgICByby5vYnNlcnZlKGVsKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjbGVhbl9mYWRlX2luKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1vdXRcIik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1pblwiKTtcclxuICAgIH0sIDI1MCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnBlcnNpc3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZSB3YXMgcGVyc2lzdGVkXCIpO1xyXG4gICAgICAgIGNsZWFuX2ZhZGVfaW4oKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5pZiAocGFyYW1zLmhhcyhcImZhZGUtaW5cIikpIHtcclxuICAgIGNsZWFuX2ZhZGVfaW4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlua190cmFuc2l0aW9uKGUsIGVsKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlLW91dFwiKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oZWwuaHJlZik7XHJcbiAgICB9LCAyNTApO1xyXG59XHJcblxyXG4vL2Z1bmN0aW9uIGFkZF9jYXJkKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGlkKSB7XHJcbi8vICAgIC8vIHRoaXMgbmVlZHMgY2xlYW5pbmcgdXAhXHJcbi8vICAgIHZhciBoeXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4vLyAgICBoeXBlci5ocmVmID0gYC4vcHJvamVjdC8ke2lkfWA7XHJcbi8vICAgIGh5cGVyLm9uY2xpY2sgPSAoZSkgPT4geyBsaW5rX3RyYW5zaXRpb24oZSwgaHlwZXIpIH07XHJcbi8vICAgIGh5cGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG4vLyAgICBoeXBlci5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWFuaW1cIik7XHJcbi8vICAgIGh5cGVyLmNsYXNzTGlzdC5hZGQoXCJmYWRlLW9uLXNjcm9sbFwiKTtcclxuLy8gICAgaHlwZXIuaWQgPSBcInByb2plY3QtXCIgKyBpZC5yZXBsYWNlKC9cXHMvZywgXCJcIikucmVwbGFjZSgvXFwuL2csIFwiXCIpO1xyXG4vLyAgICBoeXBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcXFwiXCIgKyBpbWFnZSArIFwiXFxcIilcIjtcclxuLy8gICAgdmFyIGJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICBibG9ja2VyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJsb2NrZXJcIik7XHJcbi8vICAgIHZhciB0ZXh0dGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuLy8gICAgdGV4dHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4vLyAgICB0ZXh0dGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XHJcbi8vICAgIHZhciB0ZXh0ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuLy8gICAgdGV4dGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4vLyAgICB0ZXh0ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVzY3JpcHRpb25cIik7XHJcbi8vICAgIGJsb2NrZXIuYXBwZW5kQ2hpbGQodGV4dHRpdGxlKTtcclxuLy8gICAgYmxvY2tlci5hcHBlbmRDaGlsZCh0ZXh0ZGVzY3JpcHRpb24pO1xyXG4vLyAgICBoeXBlci5hcHBlbmRDaGlsZChibG9ja2VyKTtcclxuLy8gICAgYmxvY2tlci5vbm1vdXNlZW50ZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgaHlwZXIuaWQgKyBcIiA+IC5wcm9qZWN0LWJsb2NrZXJcIikuZm9yRWFjaChlbCA9PiB7XHJcbi8vICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbnRhaW5lci13aWR0aFwiLCBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfVxyXG4vLyAgICBibG9ja2VyLm9ubW91c2VleGl0ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNcIiArIGh5cGVyLmlkICsgXCIgPiAucHJvamVjdC1ibG9ja2VyXCIpLmZvckVhY2goZWwgPT4ge1xyXG4vLyAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb250YWluZXItd2lkdGhcIiwgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgIH1cclxuLy8gICAgYmxvY2tlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB7XHJcbi8vICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgaHlwZXIuaWQgKyBcIiA+IC5wcm9qZWN0LWJsb2NrZXJcIikuZm9yRWFjaChlbCA9PiB7XHJcbi8vICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbnRhaW5lci13aWR0aFwiLCBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfSk7XHJcbi8vICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1zaGVsZlwiKS5hcHBlbmRDaGlsZChoeXBlcik7XHJcbi8vICAgIHJvLm9ic2VydmUoaHlwZXIpO1xyXG4vLyAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI1wiICsgaHlwZXIuaWQpIHtcclxuLy8gICAgICAgIGh5cGVyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4vLyAgICAgICAgaHlwZXIuc2Nyb2xsSW50b1ZpZXcoKTtcclxuLy8gICAgfVxyXG4vL31cclxuXHJcbi8vYWxlcnQoXCJUaGlzIHBhZ2UgaXMgdW5kZXIgY29uc3RydWN0aW9uLiBFeHBlY3QgY2hhbmdlcyFcIilcclxuXHJcbi8vIHBsYWNlaG9sZGVyIFxyXG4vLyBmb3IgKGxldCBpIGluIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdKSB7XHJcbi8vICAgICBhZGRfY2FyZChcInBsYWNlaG9sZGVyX1wiICsgU3RyaW5nKGkpLCBcIkxvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiLCBcIi9wdWJsaWMvbG9nby5wbmdcIiwgXCJodHRwczovL2V4YW1wbGUuY29tXCIpO1xyXG4vLyB9XHJcblxyXG4vL2ZldGNoKFwiL3B1YmxpYy9wcm9qZWN0cy5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XHJcbi8vICAgIGZvciAobGV0IGkgaW4gZGF0YS5wcm9qZWN0cykge1xyXG4vLyAgICAgICAgLy8gc3Bvb2t5IHNjYXJ5IENMUyBzZW5kcyBzaGl2ZXJzIGRvd24geW91ciBzcGluZVxyXG4vLyAgICAgICAgLy8gdGhpcyBjb3VsZCBiZSBpbXByb3ZlZCB3aXRoIGEgcGxhY2Vob2xkZXJcclxuLy8gICAgICAgIC8vIG9yIHdlIGNvdWxkIHByZWJha2Ugd2l0aCBoYW5kbGViYXJzLCBhbHNvIHByZXZlbnRzIGhhdmluZyB0byBvdmVycmlkZSB0aGUgaGFzaCBzY3JvbGwgdmlhIGpzIGFzIHRoZSBlbGVtZW50IGlzIGF2YWlsYWJsZSBhdCBmaXJzdCBwYWludFxyXG4vLyAgICAgICAgYWRkX2NhcmQoZGF0YS5wcm9qZWN0c1tpXS50aXRsZSwgZGF0YS5wcm9qZWN0c1tpXS5kZXNjcmlwdGlvbiwgZGF0YS5wcm9qZWN0c1tpXS5pbWFnZSwgZGF0YS5wcm9qZWN0c1tpXS5pZCk7XHJcbi8vICAgIH1cclxuLy8gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIikubWF0Y2hlcykge1xyXG4vLyAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJsb2NrZXJcIikuZm9yRWFjaChlbCA9PiB7XHJcbi8vICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbnRhaW5lci13aWR0aFwiLCBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfVxyXG4vL30pLmNhdGNoKGVyciA9PiB7XHJcbi8vICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgIC8vIGFzIG11Y2ggYXMgSSBkZW1vbmlzZSBpbm5lckhUTUwgb3ZlciBpbm5lclRleHQgYW5kIGlubGluZSBzdHlsZXMgb3ZlciBhIHNoZWV0LCBpdCdzIG5vdCB3b3J0aCB0aGUgaGFzc2xlIGZvciBzb21ldGhpbmcgd2l0aG91dCB1c2VyIGludGVyYWN0aW9uXHJcbi8vICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1zaGVsZlwiKS5pbm5lckhUTUwgPSBcIjxoMj5FcnJvciBsb2FkaW5nIHByb2plY3RzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLCBvciA8YSBzdHlsZT1cXFwiY29sb3I6ICNmZmY7XFxcIiBocmVmPVxcXCIvcHVibGljL3Byb2plY3RzLmpzb25cXFwiPnZpZXcgdGhlIHJhdyBKU09OIGRhdGE8L2E+LjwvaDI+XCI7XHJcbi8vfSk7XHJcblxyXG4vL2lmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PSBcIiNyb2JlcnRcIikge1xyXG4vLyAgICBzZXRUaW1lb3V0KCgpID0+IHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvYmVydFwiKS5zY3JvbGxJbnRvVmlldygpO30sIDE1MDApOyAvLyBtYWtlcyBpdCByZWFwcGVhciBpbiBjYXNlIGl0J3MgdGhlIGZpcnN0IHZpZXcgKGJlY2F1c2UgY29udGVudCBpcyBhZGRlZCBhbmQgbW92ZWQgZm9yIHRoZSBmaXJzdCB0aW1lKVxyXG4vL30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=