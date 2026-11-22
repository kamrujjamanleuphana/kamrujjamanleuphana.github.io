const themeButton = document.querySelector('.theme-toggle');
const root = document.documentElement;

function updateTheme() {
  const light = root.dataset.theme === 'light';
  themeButton.setAttribute('aria-pressed', String(light));
  themeButton.querySelector('.theme-icon').textContent = light ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').content = light ? '#f1f5fc' : '#0B1020';
}

themeButton.hidden = false;
updateTheme();
themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  updateTheme();
  try {
    localStorage.setItem('portfolio-theme', root.dataset.theme);
  } catch {
    // Keep using the in-page preference.
  }
});

const nav = document.querySelector('.site-nav');
const menu = document.querySelector('.menu-toggle');
const compact = matchMedia('(max-width: 960px)');

function setMenu(open) {
  nav.dataset.collapsed = String(compact.matches && !open);
  menu.setAttribute('aria-expanded', String(open && compact.matches));
  menu.hidden = !compact.matches;
}

setMenu(false);
compact.addEventListener('change', () => setMenu(false));
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') === 'false'));
nav.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && compact.matches) {
    setMenu(false);
    menu.focus();
  }
});

if ('IntersectionObserver' in window) {
  const reveals = new IntersectionObserver((entries, observer) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.classList.add('visible');
      observer.unobserve(target);
    }
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => reveals.observe(element));
}

document.querySelector('#year').textContent = new Date().getFullYear();
