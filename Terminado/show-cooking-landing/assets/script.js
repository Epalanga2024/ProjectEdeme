// Navegação suave entre secções (ignora links "#" vazios, como o do Facebook).
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  const id = link.getAttribute('href');
  if (id.length < 2) return;

  link.addEventListener('click', e => {
    const alvo = document.querySelector(id);
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: reduzirMovimento ? 'auto' : 'smooth' });
    }
  });
});
