//   <!-- Header and Navigation  -->
const header = document.querySelector('.js-header');
const headerLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section');

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

// Blured after scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('blured');
  } else {
    header.classList.remove('blured');
  }
});

//  Highligth active header link
const observerOptions = {
  root: null,
  rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
  threshold: 0.7,
};

function highlightActiveSection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute('id');
      headerLinks.forEach(link => {
        link.classList.toggle(
          'inactive',
          link.getAttribute('href').slice(1) === activeId
        );
      });
    }
  });
}

const observer = new IntersectionObserver(
  highlightActiveSection,
  observerOptions
);

sections.forEach(section => observer.observe(section));

console.log(sections);
