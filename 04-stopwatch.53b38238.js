parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oPjN":[function(require,module,exports) {
const t={startBtn:document.querySelector("[data-start]"),resetBtn:document.querySelector("[data-reset]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};function e(){const t=new Date;intervalId=setInterval(()=>{const e=r(new Date-t);console.log(e),n(e)},1e3)}function n(e){t.days.textContent=o(e.days),t.hours.textContent=o(e.hours),t.minutes.textContent=o(e.minutes),t.seconds.textContent=o(e.seconds)}function o(t){return t.toString().padStart(2,0)}function s(){clearInterval(intervalId),t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00"}function r(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%864e5%36e5/6e4),seconds:Math.floor(t%864e5%36e5%6e4/1e3)}}t.startBtn.addEventListener("click",e),t.resetBtn.addEventListener("click",s);
},{}]},{},["oPjN"], null)
//# sourceMappingURL=/goit-js-hw--09/04-stopwatch.53b38238.js.map