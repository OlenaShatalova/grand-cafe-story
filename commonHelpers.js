/* empty css                      */import{S as d,N as f,K as m,a as p}from"./assets/vendor-dc0bc91f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();document.querySelector(".js-header");const g=document.querySelectorAll(".nav-menu a"),l=document.querySelector(".js-mob-menu"),y=document.querySelector(".js-burger-menu"),b=document.querySelector(".js-close-btn"),h=l.querySelectorAll("a");function w(){l.classList.add("is-open"),document.body.classList.add("no-scroll")}function a(){l.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function u(t){const o=t.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth"})}y.addEventListener("click",w);b.addEventListener("click",a);g.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),u(t)})});h.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),u(t),a()})});const v=new d(".swiper",{modules:[f,m],navigation:{nextEl:".gallery-button-next.swiper-button-next",prevEl:".gallery-button-prev.swiper-button-prev"},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:82}}});v.update();const i=new p(".gallery-link",{fadeSpeed:300,overlay:!1,close:!1});i.on("shown.simplelightbox",function(){const t=document.querySelector(".swiper.gallery-swiper"),o=t.getBoundingClientRect();i.isOpen&&i.openPosition({y:o.top}),console.log(o),console.log(t),document.querySelector(".simple-lightbox").addEventListener("click",function(s){s.target.tagName.toLowerCase()==="img"&&i.close()})});const L=document.querySelectorAll(".js-faq-btn");L.forEach(t=>{t.addEventListener("click",()=>{t.closest(".faq-item").classList.toggle("open")})});
//# sourceMappingURL=commonHelpers.js.map
