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
