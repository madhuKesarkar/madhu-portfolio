// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Respect reduced motion: stop the blinking cursor if requested
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.querySelectorAll('.cursor').forEach(el => el.style.animation = 'none');
}
