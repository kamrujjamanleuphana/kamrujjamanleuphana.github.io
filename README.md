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

### Upload your public files

All paths are relative to the repository root and are case-sensitive. In GitHub, open the destination folder and use **Add file → Upload files**, or place the files at these paths in your local checkout and commit them.

| File | Upload path |
|---|---|
| Profile photo | `assets/photos/portrait.jpg` |
| Public CV PDF | `assets/Md-Kamrujjaman-CV.pdf` |
| Achievement photo | `assets/photos/achievements/<award-slug>.jpg` |
| PDF certificate | `assets/certificates/<award-slug>.pdf` |

Replace the portrait with a JPEG at the same path. If the dimensions or framing change, update its `width` and `height` in `index.html` and adjust `.portrait-frame img` in `style.css` as needed. Both CV buttons use the same PDF path. Replace the included German short-form CV with a version you have reviewed for public distribution.

### Add an achievement photo or certificate

1. Upload your files at the paths above, creating the folders if needed. Use a distinct lowercase filename for each award, such as `deutschlandstipendium.jpg` and `deutschlandstipendium.pdf`.
2. In `index.html`, find the corresponding `achievement-card` inside `achievement-grid`. For a new award, duplicate a card, update its content, and set `data-category` to `academic` or `debating`.
3. To display a photo, insert the following before the card footer and describe the actual photo in the `alt` text.

   ```html
   <img class="achievement-photo"
        src="assets/photos/achievements/deutschlandstipendium.jpg"
        alt="Describe the achievement photo"
        loading="lazy">
   ```

4. For a PDF, replace the card's `Certificate coming soon` span inside the footer with the link below. Use the actual award name in the accessible label.

   ```html
   <a class="certificate-link" href="assets/certificates/deutschlandstipendium.pdf"
      aria-label="View Deutschlandstipendium certificate (PDF)">
     View certificate (PDF)
   </a>
   ```

5. Preview the page and commit the uploaded files together with the HTML. Each card can have a photo, a PDF, or both.

### Add a new project

Duplicate a `project-card` article inside `projects-grid`. Replace all descriptions and tags. Only describe completed research as completed if you have actual evidence/output. For a real PDF output, add an `<a>` pointing to an `assets/` document.

## Source integrity and privacy notes

- Drafted from your two supplied CVs and Deutschlandstipendium motivation letter, plus the academic project title and other context you supplied.
- The source CVs differ on the exact beginning and ending dates of certain academic studies. The site deliberately omits those conflicting dates.
- Awards without uploaded evidence are marked 'Certificate coming soon'; no invented certificates or credentials.
- Research interest in behavioral economics is labeled as an interest, not a finished study.
- Academic software and statistics are not overstated as expert skills.
- No analytics, cookies, tracking scripts, remote fonts, or third-party dependencies are used. External social links lead to their respective services.

## Before publishing

Review the dates, titles, awards, pronunciation, languages and descriptions for accuracy; verify that you have permission to use any future event photography; and decide whether you want your personal phone number accessible through the WhatsApp link.
