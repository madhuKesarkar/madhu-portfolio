// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Respect reduced motion: stop the blinking cursor if requested
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.querySelectorAll('.cursor').forEach(el => el.style.animation = 'none');
}

// Theme toggle (light/dark)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });
}