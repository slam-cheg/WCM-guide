(()=>{"use strict";var e={675:(e,t,s)=>{e.exports=s.p+"602e264d8fe6a7552568.jpg"},122:(e,t,s)=>{e.exports=s.p+"68a58d7ceac22a4ebd3b.svg"},111:(e,t,s)=>{e.exports=s.p+"c902484204ade2eef6d4.svg"},796:(e,t,s)=>{e.exports=s.p+"74ed30536383b0f2ed52.svg"},762:(e,t,s)=>{e.exports=s.p+"253c7c0b6ed55f7a735c.svg"},867:(e,t,s)=>{e.exports=s.p+"0e9e864183dc0d7f9ea5.svg"},782:(e,t,s)=>{e.exports=s.p+"31e23d225efc40b824c4.jpg"},294:(e,t,s)=>{e.exports=s.p+"7641a1a2ba5d46380397.jpg"},702:(e,t,s)=>{e.exports=s.p+"8c1ff2337f4ff49a82f7.png"},580:(e,t,s)=>{e.exports=s.p+"0529b8514fcfc995423d.svg"},506:(e,t,s)=>{e.exports=s.p+"9c09c93bafb047a6def0.svg"},845:(e,t,s)=>{e.exports=s.p+"6ec2a987f166168b541e.svg"},655:(e,t,s)=>{e.exports=s.p+"e3e9fa8fa5b66a832418.svg"},493:(e,t,s)=>{e.exports=s.p+"126c777f8482be05d856.svg"}},t={};function s(c){var o=t[c];if(void 0!==o)return o.exports;var n=t[c]={exports:{}};return e[c](n,n.exports,s),n.exports}s.p="",(()=>{s(702),s(294),s(782),s(675),s(506),s(655),s(796),s(493),s(867),s(122),s(845),s(762),s(111),s(580);var e=document.querySelector(".sidebar"),t=e.querySelector(".menu"),c=document.querySelectorAll(".menu__item"),o=document.querySelectorAll(".section"),n=document.querySelector(".header__logo"),r="menu__item_active",a="content_disabled",i=document.querySelector(".page"),d=document.querySelector(".content__wrapper"),u=document.querySelectorAll(".section-content__card"),p=document.querySelector(".popup");function f(){p.addEventListener("click",(function(e){v(e)})),window.addEventListener("keyup",(function(e){!function(e){"Escape"===e.key&&l()}(e)})),p.classList.add("popup_opened")}function l(){p.classList.remove("popup_opened")}function v(e){"click"===e.type&&e.target===e.currentTarget&&l(),p.removeEventListener("click",(function(e){v(e)}))}var m=[];function L(){t.classList.remove("menu_disabled")}function b(){t.classList.add("menu_disabled")}function _(t){d.classList.add("content_resized"),e.classList.add("sidebar_disabled"),e.addEventListener("mouseout",b);var s=t.button,n=t.section;s.classList.contains(r)?g():(c.forEach((function(e){e.classList.remove(r)})),s.classList.add(r),o.forEach((function(e){e.classList.add(a)})),n.classList.remove(a),i.classList.add("page__light"))}function g(){c.forEach((function(e){e.classList.remove(r)})),o.forEach((function(e){e.classList.add(a)})),o[0].classList.remove(a),i.classList.remove("page__light"),e.classList.remove("sidebar_disabled"),e.removeEventListener("mouseout",b),d.classList.remove("content_resized"),L()}!function(t){t.forEach((function(e){m.push({name:"".concat(e.classList[1]),section:e})}));for(var s=0;s<m.length;s++)"home-screen"!==m[s].name&&(m[s].button=c[s-1]);e.addEventListener("mouseover",L),n.addEventListener("click",g),m.forEach((function(e){void 0!==e.button&&e.button.addEventListener("click",(function(){_(e)}))})),u.forEach((function(e){e.addEventListener("click",(function(e){f()}))}))}(o)})()})();