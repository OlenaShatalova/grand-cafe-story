const faqBtn = document.querySelectorAll('.js-faq-btn');

faqBtn.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');

    item.classList.toggle('open');
   });
});
