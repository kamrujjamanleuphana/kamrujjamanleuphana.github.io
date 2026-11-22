# Md Kamrujjaman — Personal Portfolio

A complete static portfolio built with plain HTML, CSS, and JavaScript. No accounts, build tools, packages, servers, or paid services are needed for GitHub Pages hosting.

## Preview on your computer

Open `index.html` in any modern web browser. The site is fully static and works directly from local files. Space Grotesk, Inter, and JetBrains Mono are served locally. Their licenses are in `assets/fonts/`. Alternatively use a simple local server: `python3 -m http.server 8000` from this folder, then visit http://localhost:8000.

## Publish to GitHub Pages for free

1. Create a free GitHub account if you do not already have one.
2. Create a **public** repository named `yourusername.github.io` (replace `yourusername` with your exact GitHub username), or choose another repository name such as `portfolio`.
3. Upload the site’s HTML, CSS, and JavaScript files and the `assets/` directory to the repository root. Don't upload only the ZIP.
4. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/ (root)` and **Save**.
5. Your address will be `https://yourusername.github.io/` for a username-named repository or `https://yourusername.github.io/portfolio/` for a project repository. GitHub Pages deployment can take a few minutes.
6. Update your site later by editing files in the repository and committing the changes. GitHub will publish your changes automatically.

## Update each section

The homepage is in `index.html`. Each detail page has its own HTML file. The pages share a stylesheet and the same header navigation. Update the navigation in each HTML file if you rename a page.

| Content | Where to edit |
|---|---|
| Home headline, intro, links | `index.html` → `<section id="home">` |
| About / story and goals | `about.html` |
| Education and credentials | `education.html` |
| Awards and certificates | `achievements.html` |
| Leadership & employment | `experience.html` |
| Research/projects | `projects.html` |
| Skills and languages | `skills.html` |
| Achievement records and gallery behavior | `achievements.js` and `gallery.js` |
| CV download | `assets/Md-Kamrujjaman-CV.pdf` (replace with the latest PDF using the same name) |
| Email and social links | `contact.html` |
| Layout, colors and fonts | `style.css` → `:root` variables and section styles |
| Navigation, theme, reveal effects | `script.js` |

### Upload your public files

All paths are relative to the repository root and are case-sensitive. In GitHub, open the destination folder and use **Add file → Upload files**, or place the files at these paths in your local checkout and commit them.

| File | Upload path |
|---|---|
| Profile photo | `assets/photos/portrait.jpg` |
| Public CV PDF | `assets/Md-Kamrujjaman-CV.pdf` |
| Achievement photo | `assets/photos/achievements/<award-slug>.jpg` |
| PDF certificate | `assets/certificates/<award-slug>.pdf` |

Replace the portrait with a JPEG at the same path. If the dimensions or framing change, update its `width` and `height` in `index.html` and adjust `.portrait-frame img` in `style.css` as needed. Both CV buttons use the same PDF path. Replace the included German CV with a version you have reviewed for public distribution.

### Add an achievement

Add one entry to the array in `achievements.js`. Enter the award, organization and date as they appear in your records. Categories include `academic`, `debating`, `leadership`, `volunteering`, and `certifications`. A filter appears when at least one entry uses that category.

```js
{
  category: "academic",
  title: "Award name",
  date: "2026",
  organization: "Awarding organization",
  description: "A short, verified summary.",
  details: "Optional longer text for the detail view.",
  photo: {
    src: "assets/photos/achievements/example-award.jpg",
    alt: "Describe the actual photograph."
  },
  certificate: "assets/certificates/example-award.pdf"
}
```

Omit `details`, `photo`, or `certificate` when unavailable. Upload any referenced media to the matching paths before committing. Review certificates for personal information before making them public.

### Add a new project

Duplicate a `project-card` in `projects.html`. Update its status, question, methods and tools, and outcome. Label unpublished material accordingly. Add charts and data sources only when you have real data to share.

## Source integrity and privacy notes

- Drafted from your two supplied CVs and Deutschlandstipendium motivation letter, plus the academic project title and other context you supplied.
- The source CVs differ on the exact beginning and ending dates of certain academic studies. The site deliberately omits those conflicting dates.
- Awards without uploaded evidence are marked 'Certificate coming soon'; no invented certificates or credentials.
- Research interest in behavioral economics is labeled as an interest, not a finished study.
- Academic software and statistics are not overstated as expert skills.
- The selected theme is stored locally in the browser. External social links lead to their respective services.

## Before publishing

Review the dates, titles, awards, pronunciation, languages and descriptions for accuracy; verify that you have permission to use any future event photography; and decide whether you want your personal phone number accessible through the WhatsApp link.
