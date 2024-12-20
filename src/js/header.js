//   <!-- Header and Navigation  -->
const header = document.querySelector('.js-header');
const headerLinks = document.querySelectorAll('.nav-menu a');

//   <!-- Mobile Menu  -->
const mobileMenu = document.querySelector('.js-mob-menu');
const burgerBtn = document.querySelector('.js-burger-menu');
const closeBtn = document.querySelector('.js-close-btn');
const mobileLinks = mobileMenu.querySelectorAll('a');

//   <!-- Open / Close mobile menu  -->
function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

// Smooth scroll to section
function scrollToSection(link) {
  const targetId = link.getAttribute('href').substring(1); // Видаляємо #
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event listeners
burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Header navigation links
headerLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    scrollToSection(link);
  });
});

// Mobile menu navigation links
mobileLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    scrollToSection(link);
    closeMenu();
  });
});
