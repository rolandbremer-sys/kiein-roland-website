# KIein Roland – GitHub Pages Website

A static, mobile-responsive, three-language (DE / CZ / EN) marketing preview with a **synthetic** interactive demonstration. The website has no runtime dependencies, cookies, tracking, payments, accounts, external images or real elevator connections.

## Publish to GitHub Pages

1. Create a **separate public GitHub repository**, e.g. `kiein-roland-website`. Do **not** make the private Testlabor repository public.
2. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll` to the **root of the repository's main branch**.
3. Open repository **Settings → Pages → Build and deployment → Deploy from a branch**; select `main` and `/ (root)`; save.
4. Wait for the Pages deployment to complete. The URL is generally `https://<username>.github.io/<repository>/`, but confirm it in the repository Pages settings.
5. Test on Android, laptop, and all three languages. Run the simulation; confirm no real controls are connected.

## Before a public commercial launch

- Replace the legal placeholder with a legally reviewed imprint/operator identity, privacy notice and contractual terms as appropriate.
- Confirm ownership and licensing of all content and product claims.
- Replace mock interface with **real approved screenshots** only when verified.
- Connect a real demo only after security review; do not connect production data to the public mock demo.
- The preview shows the ten approved net EUR plans in DE, CZ and EN. Booking opens after product approval. Run `node --test tests/language.test.cjs` to verify price and interval parity and the translated billing disclosures.
- Static demo runs entirely in the browser and is not a functioning maintenance or diagnostic app.

## Smoke tests

- Language switch updates all UI text.
- All navigation anchors scroll to intended sections.
- Simulated scenarios: door, stale, identity mismatch, generic status.
- Reload does not persist user event data; language preference may be stored locally.
- No external JS, CSS, fonts or network requests are needed.

## Browser acceptance

Use `npm ci`, `npx playwright install chromium firefox webkit` and `npm run test:browser`. The suite serves the static preview on loopback under the project subpath and checks language changes, reload, demo text, mobile pricing and relative assets in each browser engine. Playwright runs only during testing.
