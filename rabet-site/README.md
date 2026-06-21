# رابط · Rabet — website

The website for **Rabet**, a faceless Syrian digital agency.
Static site — plain HTML, CSS and JavaScript. No build step, no frameworks, no dependencies to install. Available in **5 languages**: العربية, English, Türkçe, Français, Deutsch.

---

## What's in the folder

```
rabet-site/
├── index.html         ← the page
├── css/
│   └── style.css       ← all styling (colours live at the top, in :root)
├── js/
│   ├── i18n.js         ← all website text, in all 5 languages — edit text here
│   └── main.js         ← behaviour (animations, language switch, contact form)
├── assets/
│   ├── rabet_hero.jpg   ← logo used in the hero
│   ├── rabet_mark.png   ← small round logo (nav + footer)
│   └── favicon.png      ← browser-tab icon
├── .nojekyll           ← tells GitHub Pages to serve the files as-is
└── README.md           ← this file
```

## See it on your computer

Double-click `index.html`. It opens in your browser. That's it.
(An internet connection is needed the first time so the fonts load from Google Fonts; everything else works offline.)

---

## Put it online with GitHub Pages (free)

You'll end up with a public address like `https://YOUR-USERNAME.github.io/rabet/`.

### The easy way — drag and drop (no commands)

1. Make a free account at **github.com** and sign in.
2. Click the **+** in the top-right → **New repository**.
3. Name it `rabet` (lowercase), leave it **Public**, click **Create repository**.
4. On the new repo page, click the link **"uploading an existing file"**.
5. Open the `rabet-site` folder on your computer, select **everything inside it** (the `index.html`, `css`, `js`, `assets` folders, `.nojekyll`), and **drag it all** into the upload box. Wait for the files to finish uploading.
6. Click **Commit changes**.
7. Go to the repo's **Settings** tab → **Pages** (left sidebar).
8. Under **Source**, choose **Deploy from a branch**. Set branch to **main** and folder to **/ (root)**. Click **Save**.
9. Wait about a minute, then refresh. GitHub shows the live link at the top of that Pages screen. Done.

> Tip: if the page loads but looks unstyled, give it another minute — the first deploy can lag — then hard-refresh (Ctrl/Cmd + Shift + R).

### The command-line way (if you use git)

```bash
cd rabet-site
git init
git add .
git commit -m "Rabet website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/rabet.git
git push -u origin main
```

Then follow steps 7–9 above to switch on Pages.

### Using your own domain (e.g. rabet.sy)

Once Pages is live, in **Settings → Pages → Custom domain**, type your domain and save, then add the DNS records GitHub shows you at your domain registrar. GitHub will issue a free HTTPS certificate automatically.

---

## Editing the site

- **Change any wording** → open `js/i18n.js`. Every line of text is there, with all five languages side by side. Edit the words between the quotes and save.
- **Change the colours** → open `css/style.css`. The palette is at the very top under `:root` (e.g. `--gold`, `--ink`). Change those values and the whole site updates.
- **Change the email address** → it appears in `index.html` and `js/main.js`. Search for `rabet.sy@outlook.com` and replace it everywhere.
- **Swap the logo** → replace the files in `assets/` with your own, keeping the same file names.

---

## Notes

- The **contact section** opens the visitor's own email app with a message already written to `rabet.sy@outlook.com`. It does not need a server. If you later want messages to arrive automatically in an inbox without the visitor's email app, that needs a form service (e.g. Formspree) or a small backend — happy to add it.
- The site **remembers each visitor's language** choice and also guesses it from their browser on the first visit.

© 2026 Rabet. All rights reserved.
