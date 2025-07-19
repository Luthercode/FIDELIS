// Scroll suave para navegação
const links = document.querySelectorAll('.nav a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
}
// Fade-in ao rolar
const fadeEls = document.querySelectorAll('.hero, .sobre-content, .galeria, .regras, .footer');
const fadeInOnScroll = () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);