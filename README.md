# DFW Tech Job Board

A single-page job board for remote and hybrid tech openings in the Dallas–Fort Worth
metroplex, sorted by application deadline. Built with Vite, React, TypeScript and
Tailwind CSS, and deployed as a static site on Netlify.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

| Script | Description |
| --- | --- |
| `npm run build` | Typecheck, then build the production bundle into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run typecheck` | Run TypeScript with no emit |

## Deploying to Netlify

Build settings live in [`netlify.toml`](./netlify.toml), so Netlify picks them up
automatically — there is nothing to configure in the UI:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 22 (also pinned in `.nvmrc`)

The config also adds an SPA fallback redirect, long-lived caching for hashed assets
in `/assets/*`, and a few baseline security headers.

### Option 1 — connect the Git repository (continuous deployment)

1. In Netlify, choose **Add new site → Import an existing project** and pick this
   repository.
2. Accept the detected build command and publish directory (they come from
   `netlify.toml`).
3. Deploy. Every push to the production branch triggers a new deploy, and pull
   requests get deploy previews.

### Option 2 — deploy from the command line

```bash
npm install -g netlify-cli
netlify login
netlify init          # link or create a site
netlify deploy --build            # draft deploy with a preview URL
netlify deploy --build --prod     # promote to production
```

No environment variables or build secrets are required — the job listings are
static data compiled into the bundle.

## Updating job listings

Listings live in [`src/data/jobs.ts`](./src/data/jobs.ts) as a typed `Job[]`. Add or
edit entries there and redeploy. `deadline` must be an ISO `YYYY-MM-DD` date; the
"days left" badges and the deadline sort are derived from it at render time against
the viewer's local date.

## Project layout

```
index.html            # Vite entry document
netlify.toml          # Netlify build config, redirects, headers
src/
  main.tsx            # React root
  App.tsx             # Job board UI
  index.css           # Tailwind entry
  data/jobs.ts        # Job listings + Job type
  lib/deadline.ts     # Deadline parsing, formatting and countdown helpers
public/favicon.svg
```
