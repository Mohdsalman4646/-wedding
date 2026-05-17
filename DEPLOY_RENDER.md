# Deploying to Render (Static Site)

This repository is a Vite React static site. Follow these steps to deploy on Render.

1. Commit & push this repository to GitHub (or connect your Git provider).

   ```bash
   git add .
   git commit -m "Add render manifest and deployment docs"
   git push origin main
   ```

2. On Render (https://render.com) create a new **Static Site** service.
   - Connect your GitHub account and pick this repository and the `main` branch.
   - Render will detect `render.yaml` and use its settings automatically. If prompted, set:
     - **Build Command:** `npm ci && npm run build`
     - **Publish Directory:** `dist`
   - Click **Create Static Site** / **Deploy**.

3. Wait for the first build to finish. The site URL will be provided by Render.

4. Optional: set a custom domain in the Render dashboard and follow DNS instructions.

Troubleshooting
- If build fails due to missing Node version, set `Node` environment in Render to match your local Node (recommended: 18+).
- If you prefer Yarn, update `buildCommand` to `yarn && yarn build`.

If you want, I can:
- Push this repo to GitHub for you (I need remote repo URL and permission), or
- Generate a Render service via the Render API (requires an API key).