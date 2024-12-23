import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const gallerySwiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.gallery-button-next.swiper-button-next',
    prevEl: '.gallery-button-prev.swiper-button-prev',
  },

  direction: 'horizontal',
  loop: true,
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

if (window.innerWidth <= 1200) {
  const galleryImages = document.querySelectorAll('.js-gallery-picture');
  const gallareOpenedImage = document.querySelectorAll('.gallery-opened-image');
  const galleryBtn = document.querySelectorAll('.js-gallery-btn button');

  const openImage = () => {
    gallareOpenedImage.forEach(image => image.classList.add('opened-active'));
    galleryBtn.forEach(btn => btn.classList.add('gallery-button-grey'));
  };

  const closeImage = () => {
    gallareOpenedImage.forEach(image =>
      image.classList.remove('opened-active')
    );
    galleryBtn.forEach(btn => btn.classList.remove('gallery-button-grey'));
  };

  galleryImages.forEach(image => image.addEventListener('click', openImage));

  gallareOpenedImage.forEach(image =>
    image.addEventListener('click', closeImage)
  );
}
