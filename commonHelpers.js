import"./assets/styles-cb056bb7.js";import{S as d,N as u,K as m}from"./assets/vendor-a81da787.js";const n=document.querySelector(".js-header"),c=document.querySelectorAll(".nav-menu a"),i=document.querySelectorAll("section"),s=document.querySelector(".js-mob-menu"),p=document.querySelector(".js-burger-menu"),b=document.querySelector(".js-close-btn"),g=s.querySelectorAll("a");function f(){s.classList.add("is-open"),document.body.classList.add("no-scroll")}function l(){s.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function a(e){const t=e.getAttribute("href").substring(1),o=document.getElementById(t);o&&o.scrollIntoView({behavior:"smooth"})}p.addEventListener("click",f);b.addEventListener("click",l);c.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),a(e)})});g.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),a(e),l()})});window.addEventListener("scroll",()=>{window.scrollY>10?n.classList.add("blured"):n.classList.remove("blured")});const v={root:null,rootMargin:`-${n.offsetHeight}px 0px 0px 0px`,threshold:.7};function h(e){e.forEach(t=>{if(t.isIntersecting){const o=t.target.getAttribute("id");c.forEach(r=>{r.classList.toggle("inactive",r.getAttribute("href").slice(1)===o)})}})}const w=new IntersectionObserver(h,v);i.forEach(e=>w.observe(e));console.log(i);const y=new d(".swiper",{modules:[u,m],navigation:{nextEl:".gallery-button-next.swiper-button-next",prevEl:".gallery-button-prev.swiper-button-prev"},direction:"horizontal",loop:!0,autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:2,spaceBetween:82}}});y.update();const E=document.querySelectorAll(".js-faq-btn");E.forEach(e=>{e.addEventListener("click",()=>{e.closest(".faq-item").classList.toggle("open")})});
//# sourceMappingURL=commonHelpers.js.map
