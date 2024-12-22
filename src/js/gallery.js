import SimpleLightbox from 'simplelightbox';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const gallerySwiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.gallery-button-next.swiper-button-next',
    prevEl: '.gallery-button-prev.swiper-button-prev',
  },

  direction: 'horizontal',
  loop:true,
  autoHeight: false,
  autoWidth: false,
  watchOverflow: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 82,
    },
  },
});

gallerySwiper.update();

// const lightbox = new SimpleLightbox('.gallery-link', {
//   fadeSpeed: 300, // Швидкість анімації закриття
//   overlay: false,
//   close: false,
//   scaleImageToRatio: false,
// });



// lightbox.on('shown.simplelightbox', function () {
//   const lightboxElement = document.querySelector('.simple-lightbox');

//   const swiperContainer = document.querySelector('.swiper.gallery-swiper');
//   const rect = swiperContainer.getBoundingClientRect();

//   console.log(rect.top);
//   console.log(lightboxElement);

//   // Встановлюємо координати вручну
//   // lightboxElement.style.position = 'absolute';
//   lightboxElement.style.top = `${rect.top + window.scrollY}px`;
//   // lightboxElement.style.top = '399px';
//   lightboxElement.style.zIndex = '1000';
//   // lightboxElement.style.left = '244px';
// });

// Закриваємо Lightbox по click на ньому
// lightbox.on('shown.simplelightbox', function () {
//   const lightboxElement = document.querySelector('.simple-lightbox');

//   lightboxElement.addEventListener('click', function (event) {
//     if (event.target.tagName.toLowerCase() === 'img') {
//       lightbox.close();
//     }
//   });
// });

