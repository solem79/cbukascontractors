function initFaq() {
  const faqs = document.querySelectorAll('.faq-item');
  if (!faqs.length) return;

  faqs.forEach(faq => {
    faq.querySelector('.faq-question').addEventListener('click', () => {
      faq.classList.toggle('active');
    });
  });
}
