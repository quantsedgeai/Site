# QuantsEdge Website (Static, Netlify)

This repository contains the static website for QuantsEdge. It is deployed via Netlify without a build step.

## Development

- Local server: `python3 -m http.server 8000` and open http://localhost:8000
- Alternatively: `npm run dev` does the same using Python's http.server

## Deployment (Netlify)

- Netlify publishes from repo root (`publish = "."`).
- Build command is empty (no build): see `netlify.toml`.
- Caching and security headers are configured in `netlify.toml`.
- If a deploy looks stale, use "Clear cache and deploy site" on the Deploys tab.

## Repository structure

- `index.html`, `styles.css`, `app.js`, `images/` — live site assets
- `archive/` — legacy prototypes and the previous nested site (`archive/Site-legacy/`) — do not edit
- `netlify.toml` — deploy settings and headers
- `ssh_config.sample` — sample SSH config (renamed from config.toml to avoid Hugo autodetection)

## Notes

- Removed institutional claims and minimum AUM text.
- Removed audit trail and data-quality export content.
- Footer simplified; phone number removed.
- Navigation cleaned of dead links.

## License

MIT License
