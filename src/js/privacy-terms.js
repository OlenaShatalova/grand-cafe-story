const header = document.querySelector('.privacy-terms-header');
const triggerPoint = header.offsetTop - 24;

window.addEventListener('scroll', () => {
  if (window.scrollY >= triggerPoint) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
