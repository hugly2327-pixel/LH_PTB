# GitHub Pages setup

This project uses Next.js static export and deploys the `out/` directory with GitHub Pages Actions.

## One-time repository setting

In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` or run **Actions → Build and Deploy LH PTB to GitHub Pages → Run workflow**.

The workflow intentionally does **not** enable npm caching because this project does not require a committed lockfile for the deployment workflow. It uses `npm install`, so the previous `Dependencies lock file is not found` failure cannot occur at the `setup-node` step.

If Pages is disabled, `actions/configure-pages@v5` will report that the Pages site was not found. The one-time Pages setting above is required by GitHub for the official Pages deployment flow.
