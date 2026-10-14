# GIS 12 — Wix-ready tutorial website

## Included files
- `index.html` — complete website layout
- `styles.css` — responsive visual design
- `app.js` — exercise cards, search, filters, link handling, mobile menu
- `config.js` — **edit only this file to add/replace links**

## Links
Exercise 1 is pre-filled with the Dropbox Word link supplied by the user. The View button uses the Dropbox preview (`dl=0`); the Word button uses a download link (`dl=1`). Exercises 2–9 and the shared project data folder intentionally have empty placeholders.

Edit `config.js`:
- `projectDataUrl: ""` → shared folder link
- each exercise's `tutorialUrl: ""` → PDF or Word preview URL
- each exercise's `wordUrl: ""` → Word download URL

To view PDFs in browser, upload/export PDF versions of the Word tutorials and use their shared links as `tutorialUrl`. The provided Exercise 1 preview is a DOCX Dropbox link, not a PDF.

## Preview locally
Open `index.html` in Chrome or Edge. All files must remain in the same folder. No installation, backend, or build step is needed. Google Fonts require an internet connection; fallback fonts are provided.

## Publishing with Wix — IMPORTANT
Wix's HTML Embed element runs code in a sandboxed iframe. Pasting only `index.html` into an HTML embed **will not load** its relative CSS/JS files. Use one of these methods:

### Recommended: host this static site, then embed it in Wix
1. Upload these files to a static web host (GitHub Pages works, as in the LST GUI). For GitHub Pages, put them in a `docs/` folder and configure Pages to deploy from that folder, or place them at repository root and configure Pages accordingly.
2. Test the hosted URL in a browser, including mobile layout and document links.
3. In Wix Editor, add an **Embed HTML / Embed a Site** element (label varies by editor), choose the website URL option, and paste the hosted site URL.
4. Set the embed to a generous height (for nine cards, approximately 1900–2600 px on desktop; mobile may require more). An iframe with fixed height can create nested scrollbars; alternatively link Wix navigation directly to the hosted site.
5. Publish the Wix site and verify links open properly in the published version.

### Alternative: make the whole site native to Wix
Recreate the layout with Wix sections/cards and copy exercise links from `config.js`. This takes more manual work but avoids iframe scrolling and is easier for Wix-native SEO/navigation. The supplied files are source/reference for that approach, not a one-click Wix theme import.

## Notes
- No Wix account connection or Wix deployment is performed by this package.
- The data folder link and exercises 2–9 are intentionally not invented.
- Test Dropbox permissions in a private/incognito browser window to ensure students can access them.
- Do not share answer keys publicly unless intended.
