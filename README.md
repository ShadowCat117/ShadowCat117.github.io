# ShadowCat117.github.io

James Callan's portfolio, built with Angular and hosted at https://shadowcat117.github.io/.

## Local development

Use Node.js 24 and install the locked dependencies:

```bash
npm ci
npm start
```

Open http://localhost:4200/. Changes to the source files reload automatically.

## Build and test

```bash
npm run build
npm test -- --watch=false
```

The production website is generated in `dist/shadowcat117.github.io/browser/`.

## GitHub Pages deployment

The source files need to be compiled before GitHub Pages can serve the Angular app.
Publishing the repository root directly can display this README instead of the website.

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push these changes to `main`. The **Deploy GitHub Pages** workflow installs the
   dependencies, builds the app, and publishes only the production website.
4. Check the workflow in the **Actions** tab. It can also be run manually using
   **Run workflow**.

The site is hosted at the domain root, so its base URL is `/`.
The workflow also copies the app entry point to `404.html`, allowing Angular to
handle direct visits and refreshes on routes such as `/cv` and `/projects/wynntils`.
GitHub Pages returns HTTP 404 for those fallback responses, but the app still loads.
