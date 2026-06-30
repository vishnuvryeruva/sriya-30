# Sriya's 30th Birthday 🎉

A single-page static keepsake site. No build step, no backend, no dependencies —
just open `index.html` or push the folder to any free host.

## How to customize (2 minutes)

Everything lives in **`config.js`**. Open it and edit:

1. **Name, milestone, headline** — the hero text at the top.
2. **`quotes`** — the elegant pull-quotes between sections. Add/remove freely.
3. **`gallery`** — list your photo filenames + optional captions.
4. **`video`** — pick a mode:
   - `"youtube"` → set `youtubeId` to your unlisted video's ID
     (the part after `watch?v=`).
   - `"mp4"` → set `mp4Src` to a local file (e.g. `"video/montage.mp4"`).
   - `"none"` → hides the video section.
5. **`closing`** — the final birthday message + signature.

## Add photos

Drop image files into the **`/images`** folder, then list their filenames in
`config.js`. See `images/README.md` for sizing tips. Missing files degrade
gracefully to a soft placeholder.

## Preview locally

Just double-click `index.html`. (Or run `python3 -m http.server` in this folder
and open http://localhost:8000 for an exact production-like preview.)

## Deploy for free (zero config)

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
3. Live at `https://<username>.github.io/<repo>/` in a minute.

**Netlify** — drag-and-drop this folder onto https://app.netlify.com/drop. Done.

**Vercel** — `vercel` CLI in this folder, or import the repo at vercel.com.
No framework, no settings needed.

Then make a QR code pointing at the URL (e.g. qr-code-generator.com) for the party.

## Files

| File         | What it is                                            |
|--------------|-------------------------------------------------------|
| `index.html` | Page structure (rarely needs editing).                |
| `config.js`  | **All your content lives here.** ← edit this          |
| `styles.css` | The look & feel (colors at the top under `:root`).     |
| `script.js`  | Renders config into the page. Leave it alone.          |
| `images/`    | Your photos.                                          |
