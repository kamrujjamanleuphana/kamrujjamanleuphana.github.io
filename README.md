# Md Kamrujjaman — Personal Portfolio

A complete static portfolio built with plain HTML, CSS, and JavaScript. No accounts, build tools, packages, servers, or paid services are needed for GitHub Pages hosting.

## Preview on your computer

Open `index.html` in any modern web browser. The site is fully static and works directly from local files. Alternatively use a simple local server: `python3 -m http.server 8000` from this folder, then visit http://localhost:8000.

## Publish to GitHub Pages for free

1. Create a free GitHub account if you do not already have one.
2. Create a **public** repository named `yourusername.github.io` (replace `yourusername` with your exact GitHub username), or choose another repository name such as `portfolio`.
3. Upload **everything inside this folder** to the repository's root: `index.html`, `style.css`, `script.js`, `assets/`, and `README.md`. Don't upload only the ZIP.
4. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/ (root)` and **Save**.
5. Your address will be `https://yourusername.github.io/` for a username-named repository or `https://yourusername.github.io/portfolio/` for a project repository. GitHub Pages deployment can take a few minutes.
6. Update your site later by editing files in the repository and committing the changes. GitHub will publish your changes automatically.

## Update each section

All site text and cards are in `index.html`. Open the file in a text editor, find the HTML section using its `id`, edit the words and save/upload it.

| Content | Where to edit |
|---|---|
| Home headline, intro, links | `index.html` → `<section id="home">` |
| About / story and goals | `index.html` → `id="about"` |
| Education and credentials | `index.html` → `id="education"` |
| Awards and certificates | `index.html` → `id="achievements"` |
| Leadership & employment | `index.html` → `id="experience"` |
| Research/projects | `index.html` → `id="research"` |
| Skills and languages | `index.html` → `id="skills"` |
| CV download | `assets/Md-Kamrujjaman-CV.pdf` (replace with the latest PDF using the same name) |
| Email and social links | `index.html` → `id="contact"` |
| Layout, colors and fonts | `style.css` → `:root` variables and section styles |
| Navigation, filtering, reveal effects | `script.js` |

### Add a new achievement

1. Upload the real certificate image or PDF into `assets/certificates/`, e.g. `my-award-2027.pdf`.
2. In `index.html`, find `achievement-grid` and duplicate one `<article class="achievement-card ..."> ... </article>` block.
3. Update the award title, year, description, organization, and `data-category="academic"` or `data-category="debating"`.
4. Replace `<span class="certificate-note">Certificate coming soon</span>` with `<a class="certificate-link" href="assets/certificates/my-award-2027.pdf" target="_blank" rel="noopener noreferrer">View certificate ↗</a>`.
5. Optionally add this to `style.css`:
   `.certificate-link { color: var(--navy); font-size: 11px; font-weight: 750; text-decoration: underline; }`
6. Commit the files in GitHub. Certificate links will work automatically.

### Add a new project

Duplicate a `project-card` article inside `projects-grid`. Replace all descriptions and tags. Only describe completed research as completed if you have actual evidence/output. For a real PDF output, add an `<a>` pointing to an `assets/` document.

### Change your portrait or add photos

Replace `assets/photos/portrait.jpg` with a new image of exactly the same filename or change the `src` attribute in the hero image. For event images, place them in `assets/photos/` and add `<img src="assets/photos/filename.jpg" alt="Description of the event" loading="lazy">` to the desired card.

## Source integrity and privacy notes

- Drafted from your two supplied CVs and Deutschlandstipendium motivation letter, plus the academic project title and other context you supplied.
- The formal suit portrait is included. Other provided image is stored under `assets/photos/casual.jpg` and is not displayed publicly by default.
- **The one-page job-oriented CV is included for download**, not the more detailed German CV that contains your passport number, full residential address and date of birth. Publishing passport numbers, full home addresses or matriculation numbers openly is discouraged. If you replace the public CV, review it first.
- The source CVs differ on the exact beginning and ending dates of certain academic studies. The site deliberately omits those conflicting dates.
- Awards without uploaded evidence are marked 'Certificate coming soon'; no invented certificates or credentials.
- Research interest in behavioral economics is labeled as an interest, not a finished study.
- Academic software and statistics are not overstated as expert skills.
- No analytics, cookies, tracking scripts, remote fonts, or third-party dependencies are used. External social links lead to their respective services.

## Before publishing

Review the dates, titles, awards, pronunciation, languages and descriptions for accuracy; verify that you have permission to use any future event photography; and decide whether you want your personal phone number accessible through the WhatsApp link.
