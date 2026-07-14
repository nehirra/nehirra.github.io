# Portfolio Site

Static site (HTML/CSS/JS, no build step) — ready for GitHub Pages.

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `yourusername.github.io` for a root URL, or any name like `portfolio`).
2. Push these files to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/REPO_NAME.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Your site will be live at:
   - `https://yourusername.github.io/` (if repo is named `yourusername.github.io`)
   - `https://yourusername.github.io/REPO_NAME/` (otherwise)

GitHub Pages usually takes 1-2 minutes to publish after each push.

## Editing content

All placeholder content lives in `index.html`:
- Name/title in the `<header>` and `.hero` section
- Bio in `#about`
- Projects in `#projects` (each `<article class="card">`)
- Skills list in `#skills`
- Contact links (email, GitHub, LinkedIn) in `#contact`

Styling is in `styles.css`. No build tools required — just edit and push.
