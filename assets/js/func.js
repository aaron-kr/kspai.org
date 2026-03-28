// ── Theme Toggle ──
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('kspai-theme', next);
  document.querySelector('.theme-icon').textContent = next === 'dark' ? '🌙' : '☀️';
}

// Restore saved theme preference (icon only — theme applied in <head> inline script)
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('kspai-theme') || 'light';
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = saved === 'dark' ? '🌙' : '☀️';
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Nav active state on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}, { passive: true });

// ── Scroll fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.org-card, .research-card, .news-item, .news-main, .stat-item'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ── Transparent nav over hero ──
(function() {
  const nav  = document.querySelector('nav');
  const hero = document.querySelector('.hero');
  if (!nav) return;
  if (!hero) { nav.classList.add('nav-scrolled'); return; }

  // IntersectionObserver fires when the hero's BOTTOM EDGE
  // crosses the top of the viewport (rootMargin nudges by nav height)
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        nav.classList.remove('nav-scrolled');   // over hero → transparent
      } else {
        nav.classList.add('nav-scrolled');      // past hero → solid
      }
    },
    {
      // Fire when the hero bottom edge hits the nav bottom (64px)
      rootMargin: '-64px 0px 0px 0px',
      threshold: 0
    }
  );

  observer.observe(hero);

  // Handle initial load position (e.g. user reloads mid-page)
  const rect = hero.getBoundingClientRect();
  if (rect.bottom <= 64) {
    nav.classList.add('nav-scrolled');
  }
})();