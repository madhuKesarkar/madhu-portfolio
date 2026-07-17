# madhukesarkar.netlify.app

Personal site for Madhu Kesarkar — QA & Engineering Leadership.

Plain HTML/CSS/JS. No build step, no framework — easy to edit directly.

## Files

- `index.html` — all page content (About, Experience, Writing, Contact)
- `styles.css` — all styling
- `script.js` — tiny bit of JS (footer year, reduced-motion handling)

## 1. Push this to GitHub

```bash
cd madhu-site          # this folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repo on GitHub first at github.com/new — don't add a README/license there, to avoid conflicts.)

## 2. Connect it to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Choose GitHub, authorize, and pick this repo.
3. Build settings: leave **Build command** blank and **Publish directory** as `/` (root) — this is a static site, nothing to build.
4. Click **Deploy**. Netlify will give you a URL; you can later point it at `madhukesarkar.netlify.app` (Site settings → Domain management → change site name) or a custom domain.

From now on: **every `git push` to `main` auto-deploys.**

## 3. Making future updates

- Job change / new role → edit the `<li class="role">` blocks in `index.html` (Experience section).
- New article published → move it from the "Writing" queue into a proper card with a link, and remove its `queued` status tag.
- New skill/tool → add a `<li>` to `.chip-list` in the About section.
- Resume ready → add a button in the Contact section:
  `<a class="btn btn-ghost" href="/resume.pdf" target="_blank">Resume ↓</a>`
  and drop `resume.pdf` in this same folder.

After editing, just:
```bash
git add .
git commit -m "Update experience section"
git push
```
Netlify redeploys automatically within a minute or two.
