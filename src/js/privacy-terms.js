const headerTerms = document.querySelector('.privacy-terms-header');
const triggerPoint = headerTerms.offsetTop - 24;

window.addEventListener('scroll', () => {
  if (window.scrollY >= triggerPoint) {
    headerTerms.classList.add('sticky');
  } else {
    headerTerms.classList.remove('sticky');
  }
});
