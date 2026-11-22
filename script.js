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

const sectionLinks = Array.from(nav.querySelectorAll('a'), (link) => ({
  link,
  section: document.querySelector(link.hash),
})).sort((a, b) => a.section.offsetTop - b.section.offsetTop);

for (const { link, section } of sectionLinks) {
  link.addEventListener('click', () => {
    if (!compact.matches) return;
    setMenu(false);
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  });
}

function updateCurrentSection() {
  let current;
  const threshold = Math.min(window.innerHeight * .33, 180);
  for (const item of sectionLinks) {
    if (item.section.getBoundingClientRect().top <= threshold) current = item;
  }
  if (window.scrollY + window.innerHeight >= root.scrollHeight - 2) {
    current = sectionLinks.at(-1);
  }
  for (const item of sectionLinks) {
    if (item === current) item.link.setAttribute('aria-current', 'location');
    else item.link.removeAttribute('aria-current');
  }
}

let scrollFrame;
function scheduleSectionUpdate() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = undefined;
    updateCurrentSection();
  });
}
window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
window.addEventListener('resize', scheduleSectionUpdate);
scheduleSectionUpdate();

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

const categories = {
  academic: 'Academic',
  debating: 'Debate',
  leadership: 'Leadership',
  volunteering: 'Volunteering',
  certifications: 'Certifications',
};

const gallery = document.querySelector('.achievement-grid');
const filters = document.querySelector('.filter-tabs');
const status = document.querySelector('#achievement-status');
const dialog = document.querySelector('#achievement-dialog');
const detail = dialog.querySelector('.dialog-content');
let opener;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function achievementPhoto({ photo }) {
  const image = element('img', 'achievement-photo');
  image.src = photo.src;
  image.alt = photo.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  return image;
}

function certificateLink(achievement) {
  const link = element('a', 'certificate-link', 'Certificate (PDF)');
  link.href = achievement.certificate;
  link.setAttribute('aria-label', `View certificate for ${achievement.title} (PDF)`);
  return link;
}

function openAchievement(achievement, button) {
  const title = element('h2', '', achievement.title);
  title.id = 'achievement-title';
  detail.replaceChildren(
    element('span', 'chip', `${categories[achievement.category]} · ${achievement.date}`),
    title,
    element('p', '', achievement.organization),
  );
  if (achievement.photo) detail.append(achievementPhoto(achievement));
  detail.append(element('p', '', achievement.details || achievement.description));
  if (achievement.certificate) detail.append(certificateLink(achievement));
  opener = button;
  dialog.showModal();
}

dialog.addEventListener('close', () => opener?.focus());

const cards = achievements.map((achievement) => {
  const article = element('article', 'achievement-card');
  const top = element('div', 'card-top');
  top.append(
    element('span', 'chip', categories[achievement.category]),
    element('span', 'card-date', achievement.date),
  );
  article.append(top);
  if (achievement.photo) article.append(achievementPhoto(achievement));
  article.append(
    element('h3', '', achievement.title),
    element('p', 'exp-organization', achievement.organization),
    element('p', '', achievement.description),
  );
  const footer = element('div', 'card-footer');
  const button = element('button', 'button', 'View details');
  button.type = 'button';
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-label', `View details for ${achievement.title}`);
  button.addEventListener('click', () => openAchievement(achievement, button));
  footer.append(button);
  if (achievement.certificate) footer.append(certificateLink(achievement));
  article.append(footer);
  gallery.append(article);
  return { article, category: achievement.category };
});

const filterOptions = [['all', 'All achievements'], ...Object.entries(categories)];
for (const [category, label] of filterOptions) {
  if (category !== 'all' && !cards.some((card) => card.category === category)) continue;
  const button = element('button', 'filter-tab', label);
  button.type = 'button';
  button.setAttribute('aria-pressed', String(category === 'all'));
  button.addEventListener('click', () => {
    for (const option of filters.querySelectorAll('button')) {
      option.setAttribute('aria-pressed', String(option === button));
    }
    let count = 0;
    for (const card of cards) {
      card.article.hidden = category !== 'all' && card.category !== category;
      if (!card.article.hidden) count++;
    }
    status.textContent = `${count} ${count === 1 ? 'achievement' : 'achievements'} shown.`;
  });
  filters.append(button);
}

document.querySelector('#year').textContent = new Date().getFullYear();
