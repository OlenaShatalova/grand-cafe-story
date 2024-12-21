import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';

const gallerySwiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.gallery-button-next.swiper-button-next',
    prevEl: '.gallery-button-prev.swiper-button-prev',
  },

  direction: 'horizontal',
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