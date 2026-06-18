const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const href = button.getAttribute('href');

    if (href && href.startsWith('#')) {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const hero = document.querySelector('.hero-section');

if (hero) {
  hero.addEventListener('mousemove', event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty('--mouse-x', x.toFixed(3));
    hero.style.setProperty('--mouse-y', y.toFixed(3));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.link-card, .highlight-card, .card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 60}ms`;
    card.classList.add('reveal');
  });
});
