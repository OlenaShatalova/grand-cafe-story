import SimpleLightbox from 'simplelightbox';
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

const lightbox = new SimpleLightbox('.gallery-link', {
  fadeSpeed: 300, // Швидкість анімації закриття
  overlay: false,
  close: false,
});

lightbox.on('shown.simplelightbox', function () {
  const swiperContainer = document.querySelector('.swiper.gallery-swiper');
  const rect = swiperContainer.getBoundingClientRect();

  // Перевіряємо, чи лайтбокс відкритий
  if (lightbox.isOpen) {
    // Встановлюємо позицію лайтбоксу по вертикалі з врахуванням прокрутки
    lightbox.openPosition({
      y: rect.top, // Враховуємо прокрутку сторінки
    });
  }

  console.log(rect);
  console.log(swiperContainer);

  const lightboxElement = document.querySelector('.simple-lightbox');

  // Додаємо обробник кліку на весь лайтбокс
  lightboxElement.addEventListener('click', function (event) {
    // Перевіряємо, чи клік на саме зображення
    if (event.target.tagName.toLowerCase() === 'img') {
      lightbox.close(); // Закриваємо Lightbox
    }
  });
});

// lightbox.on('shown.simplelightbox', function () {
//   const lightboxElement = document.querySelector('.custom-lightbox');
//   const swiperContainer = document.querySelector('.swiper.gallery-swiper'); // Контейнер для лайтбоксу

//   if (lightboxElement && swiperContainer) {
//     const rect = swiperContainer.getBoundingClientRect();

//     // Позиціонуємо лайтбокс всередині контейнера .swiper.gallery-swiper
//     lightboxElement.style.position = 'absolute';
//     lightboxElement.style.top = `${rect.top + window.scrollY}px`; // Враховуємо прокрутку сторінки
//     lightboxElement.style.left = `${rect.left + window.scrollX}px`;
//     lightboxElement.style.width = `${rect.width}px`;
//     lightboxElement.style.height = `${rect.height}px`;
//   }

//   // Переконуємось, що зображення теж коректно масштабоване в межах лайтбоксу
//   const imgElement = lightboxElement.querySelector('img');
//   if (imgElement) {
//     imgElement.style.width = '100%'; // Ширина зображення 100% від контейнера
//     imgElement.style.height = '100%'; // Висота зображення 100% від контейнера
//     imgElement.style.objectFit = 'contain'; // Масштабування збереження пропорцій
//   }
// });
