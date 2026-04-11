// ── Theme Toggle ──
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('kspai-theme', next);
  document.querySelector('.theme-icon').textContent = next === 'dark' ? '☀️' : '🌙';
}

// Restore saved theme preference (icon only — theme applied in <head> inline script)
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('kspai-theme') || 'light';
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = saved === 'dark' ? '☀️' : '🌙';
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
const fadeObserver = new IntersectionObserver((entries) => {
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
  fadeObserver.observe(el);
});

// ── Transparent nav over hero ──
(function() {
  const nav  = document.querySelector('nav');
  const hero = document.querySelector('.hero');
  if (!nav) return;
  if (!hero) { nav.classList.add('nav-scrolled'); return; }

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        nav.classList.remove('nav-scrolled');
      } else {
        nav.classList.add('nav-scrolled');
      }
    },
    {
      rootMargin: '-64px 0px 0px 0px',
      threshold: 0
    }
  );

  heroObserver.observe(hero);

  // Handle initial load position (e.g. user reloads mid-page)
  const rect = hero.getBoundingClientRect();
  if (rect.bottom <= 64) {
    nav.classList.add('nav-scrolled');
  }
})();

// ── Desktop dropdown menus ──
document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const item = this.closest('.nav-item--dropdown');
    const isOpen = item.classList.contains('is-open');

    // Close all other open dropdowns
    document.querySelectorAll('.nav-item--dropdown.is-open').forEach(el => {
      el.classList.remove('is-open');
      el.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });

    // Toggle this one
    if (!isOpen) {
      item.classList.add('is-open');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

// Close dropdowns on outside click
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item--dropdown.is-open').forEach(el => {
    el.classList.remove('is-open');
    el.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
});

// Close dropdowns on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.nav-item--dropdown.is-open').forEach(el => {
      el.classList.remove('is-open');
      el.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
    // Also close mobile menu if open
    const menu = document.getElementById('mobile-menu');
    const btn  = document.querySelector('.mobile-menu-btn');
    if (menu && !menu.hidden) closeMobileMenu(menu, btn);
  }
});

// ── Mobile menu ──
function closeMobileMenu(menu, btn) {
  menu.setAttribute('data-open', 'false');
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';
  }
  setTimeout(() => { menu.hidden = true; }, 300);
}

function toggleMobileMenu(btn) {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;

  const isOpen = menu.getAttribute('data-open') === 'true';

  if (isOpen) {
    closeMobileMenu(menu, btn);
  } else {
    menu.hidden = false;
    // Tiny rAF so the browser registers the element before animating
    requestAnimationFrame(() => {
      menu.setAttribute('data-open', 'true');
    });
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = '✕';
  }
}

// Close mobile menu when any link inside it is tapped
document.querySelectorAll('.mobile-menu-item').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.querySelector('.mobile-menu-btn');
    if (menu && menu.getAttribute('data-open') === 'true') {
      closeMobileMenu(menu, btn);
    }
  });
});