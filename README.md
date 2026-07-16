# Nehir Aras — Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step — deployed on GitHub Pages.

## Structure

```
index.html    all page content and section markup
styles.css    styling (dark theme, layout, animations)
script.js     year stamp, scroll-reveal, nav active-state tracking
images/       project media, favicon
```

## Content

Everything lives in `index.html`, organized by section:

- **Header / hero** — name, role, and the two call-to-action buttons
- `#about` — bio and skill chips
- `#projects` — one `<article class="project-row">` per project (add `has-media` when it includes an image or gallery)
- `#skills` — grouped skills lists plus the "also familiar with" chips
- `#contact` — email link

Styling is in `styles.css`; scroll-reveal and nav behavior in `script.js`. No build tools — edit the files and push.

## Deploy to GitHub Pages

1. Push to a GitHub repo:
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```
2. On GitHub: repo → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. The site publishes at `https://<username>.github.io/` (or `/<repo-name>/` if the repo isn't named `<username>.github.io`), usually within 1–2 minutes of each push.
