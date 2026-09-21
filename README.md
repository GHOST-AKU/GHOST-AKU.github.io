# GHOST_AKU personal website

A small independent web home: editorial Chinese typography, cobalt orbital pixel ghost, selected public experiments. Plain HTML/CSS/JavaScript; no build step, analytics, cookies, or third-party runtime dependencies.

## Development

Run `python3 -m http.server 8000` from the repository root. Visit http://localhost:8000.

- `index.html`: content and accessible page structure
- `home/style.css`: responsive styling and reduced-motion support
- `home/app.js`: pointer-aware ghost and five-step greeting / night-mode easter egg
- `home/ghost.svg`: favicon
- `bw/index.html`, `bw/index.rsc`, `assets/`: preserved Bilibili World experience

GitHub Pages serves `main` at the repository root. The previous home page is preserved at `/bw/`; all pre-existing assets remain untouched. To restore the former home page, revert the personal-site commit.
