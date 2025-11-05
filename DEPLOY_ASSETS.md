Deployment note — hosting GIFs in production

This project stores GIFs in `src/assets/gifs` during development. Vite's dev server serves `/src/...` assets differently than the production build. For the production site (Cloudflare Pages), static files should be placed in `public/` so they are served from the site root.

What I changed
- `HomePage.jsx` now references GIFs as `/gifs/<name>.gif`, which means they must exist under `public/gifs/` in the built site.
- I added a cross-platform Node.js script `scripts/copy-gifs.js` that copies all `*.gif` files from `src/assets/gifs` to `public/gifs`.
- `package.json` now includes a `copy-gifs` script and a `prebuild` hook so GIFs are copied automatically before `npm run build`.

How to use
1. To copy GIFs manually:
   ```bash
   node scripts/copy-gifs.js
   # or via npm
   npm run copy-gifs
   ```
2. The `prebuild` script will copy GIFs automatically when you run:
   ```bash
   npm run build
   ```

Alternative approach
- If you prefer, move the GIFs directly into `public/gifs/` (create the folder) and commit them. Then no copy step is necessary. This is simplest for small static assets.

Troubleshooting
- If GIFs still don't show in production, open browser devtools > Network and check the request URL (should be `/gifs/<name>.gif`) and that it returns status 200.
- Check file name casing — production servers are case-sensitive.
- The Node.js copy script works cross-platform (Windows, Linux, macOS) so it runs on Cloudflare Pages' build environment.
