# Tarsia Builder v1

A lightweight, no-server Tarsia puzzle prototype designed to embed in Google Sites.

## Run
Open `index.html`, or serve the folder with any static web host.

For local testing:
`python3 -m http.server 8000`

## Google Sites deployment
Upload this folder to a static host (GitHub Pages, Cloudflare Pages, Firebase Hosting, etc.). In Google Sites choose Insert > Embed > URL and paste the public HTTPS URL.

## v1 features
- Triangle, square, diamond, and approximate hexagon layouts
- Manual term/match rows
- Bulk paste (`term | match` or tab-separated)
- Local browser autosave
- Live SVG preview
- Answer-key toggle
- Piece shuffle
- Browser Print / Save as PDF
- Responsive iframe-friendly UI

## Known v1 limitations
The geometry/layout engine is an early prototype. Shuffling changes piece ordering in the SVG but does not yet repack pieces into cut-sheet rows; long labels are truncated in preview; arbitrary image silhouettes are not included yet.
