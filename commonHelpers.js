import"./assets/styles-fe16de24.js";import{S as m,N as f,K as p}from"./assets/vendor-eb29ed17.js";const c=document.querySelector(".js-header"),i=document.querySelectorAll(".nav-menu a"),b=document.querySelectorAll("section"),s=document.querySelector(".js-mob-menu"),a=document.querySelector(".js-burger-menu"),d=document.querySelector(".js-close-btn"),v=s.querySelectorAll(".mob-nav-list a");function h(){s.classList.add("is-open"),document.body.classList.add("no-scroll")}function l(){s.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function u(e){const t=e.getAttribute("href").substring(1),n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})}a.addEventListener("click",h);d.addEventListener("click",l);document.addEventListener("click",e=>{!s.contains(e.target)&&!a.contains(e.target)&&!d.contains(e.target)&&l()});i.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),u(e)})});v.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),u(e),l()})});window.addEventListener("scroll",()=>{window.scrollY>10?c.classList.add("blured"):c.classList.remove("blured")});const y={root:null,rootMargin:`-${c.offsetHeight}px 0px 0px 0px`,threshold:.7};function E(e){e.forEach(t=>{if(t.isIntersecting){const n=t.target.getAttribute("id");i.forEach(r=>{r.classList.toggle("inactive",r.getAttribute("href").slice(1)===n)})}})}const L=new IntersectionObserver(E,y);b.forEach(e=>L.observe(e));new m(".swiper",{modules:[f,p],navigation:{nextEl:".gallery-button-next.swiper-button-next",prevEl:".gallery-button-prev.swiper-button-prev"},direction:"horizontal",loop:!0,autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:82}}});if(window.innerWidth<=1200){const e=document.querySelectorAll(".js-gallery-picture"),t=document.querySelectorAll(".gallery-opened-image"),n=document.querySelectorAll(".js-gallery-btn button"),r=()=>{t.forEach(o=>o.classList.add("opened-active")),n.forEach(o=>o.classList.add("gallery-button-grey"))},g=()=>{t.forEach(o=>o.classList.remove("opened-active")),n.forEach(o=>o.classList.remove("gallery-button-grey"))};e.forEach(o=>o.addEventListener("click",r)),t.forEach(o=>o.addEventListener("click",g))}const w=document.querySelectorAll(".js-faq-btn");w.forEach(e=>{e.addEventListener("click",()=>{e.closest(".faq-item").classList.toggle("open")})});
//# sourceMappingURL=commonHelpers.js.map
