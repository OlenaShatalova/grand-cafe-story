import"./assets/styles-164a9637.js";import{S as u,N as m,K as g}from"./assets/vendor-a81da787.js";const s=document.querySelector(".js-header"),i=document.querySelectorAll(".nav-menu a"),p=document.querySelectorAll("section"),n=document.querySelector(".js-mob-menu"),l=document.querySelector(".js-burger-menu"),a=document.querySelector(".js-close-btn"),b=n.querySelectorAll(".mob-nav-list a");function f(){n.classList.add("is-open"),document.body.classList.add("no-scroll")}function r(){n.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function d(e){const t=e.getAttribute("href").substring(1),o=document.getElementById(t);o&&o.scrollIntoView({behavior:"smooth"})}l.addEventListener("click",f);a.addEventListener("click",r);document.addEventListener("click",e=>{!n.contains(e.target)&&!l.contains(e.target)&&!a.contains(e.target)&&r()});i.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),d(e)})});b.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),d(e),r()})});window.addEventListener("scroll",()=>{window.scrollY>10?s.classList.add("blured"):s.classList.remove("blured")});const v={root:null,rootMargin:`-${s.offsetHeight}px 0px 0px 0px`,threshold:.7};function h(e){e.forEach(t=>{if(t.isIntersecting){const o=t.target.getAttribute("id");i.forEach(c=>{c.classList.toggle("inactive",c.getAttribute("href").slice(1)===o)})}})}const w=new IntersectionObserver(h,v);p.forEach(e=>w.observe(e));const E=new u(".swiper",{modules:[m,g],navigation:{nextEl:".gallery-button-next.swiper-button-next",prevEl:".gallery-button-prev.swiper-button-prev"},direction:"horizontal",loop:!0,autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:82}}});E.update();const L=document.querySelectorAll(".js-faq-btn");L.forEach(e=>{e.addEventListener("click",()=>{e.closest(".faq-item").classList.toggle("open")})});
//# sourceMappingURL=commonHelpers.js.map
