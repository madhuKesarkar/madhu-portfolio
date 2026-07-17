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

// Contact form: submit via fetch so the page doesn't reload (Netlify Forms)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const body = new URLSearchParams(data).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
      .then(() => {
        formStatus.textContent = "Thanks — your message is on its way. I'll reply soon.";
        contactForm.reset();
      })
      .catch(() => {
        formStatus.textContent = 'Something went wrong. Please try emailing directly instead.';
      });
  });
}