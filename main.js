(()=>{"use strict";var e={675:(e,t,s)=>{e.exports=s.p+"602e264d8fe6a7552568.jpg"},782:(e,t,s)=>{e.exports=s.p+"03266363159640930120.jpg"},294:(e,t,s)=>{e.exports=s.p+"7641a1a2ba5d46380397.jpg"},702:(e,t,s)=>{e.exports=s.p+"8c1ff2337f4ff49a82f7.png"}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,s),c.exports}s.p="",(()=>{s(702),s(294),s(782),s(675);var e=document.querySelectorAll(".menu__item"),t=document.querySelectorAll(".section"),o=document.querySelector(".header__logo"),n="menu__item_active",c="content__disabled",a=document.querySelector(".page"),r=[{name:"default",section:t[0]},{name:"first-screen",button:e[0],section:t[1]},{name:"second-screen",button:e[1],section:t[2]}];function i(){e.forEach((function(e){e.classList.remove(n)})),t.forEach((function(e){e.classList.add(c)})),t[0].classList.remove(c),a.classList.remove("page__light")}o.addEventListener("click",i),r.forEach((function(s){void 0!==s.button&&s.button.addEventListener("click",(function(){!function(s){var o=s.button,r=s.section;o.classList.contains(n)?i():(e.forEach((function(e){e.classList.remove(n)})),o.classList.add(n),t.forEach((function(e){e.classList.add(c)})),r.classList.remove(c),a.classList.add("page__light"))}(s)}))}))})()})();