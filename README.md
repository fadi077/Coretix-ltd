# Coretix Ltd website

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The production site URL is `https://coreit-x.com`. Set this variable in the
Hostinger Node.js application environment so generated canonical URLs,
sitemaps, robots metadata and social previews use the production domain:

```text
NEXT_PUBLIC_SITE_URL=https://coreit-x.com
```

## Contact form delivery

The contact form sends enquiries through Hostinger SMTP to `info@coreit-x.com`.
Configure these environment variables on the Hostinger Node.js application:

```text
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@coreit-x.com
SMTP_PASSWORD=your-hostinger-mailbox-password
CONTACT_TO=info@coreit-x.com
```

Keep the mailbox password in Hostinger’s environment settings. Do not commit it
to the repository or expose it through a `NEXT_PUBLIC_` variable.

The live deployment must run the Next.js server (`npm run build` followed by
`npm run start`). A static-only export will not include the `/api/contact`
route.

## Hostinger production builds

Use these settings for the Node.js application:

- Application type: Next.js
- Node.js: 22 (use the latest available 22.x patch)
- Project root: the folder containing `package.json` and `package-lock.json`
- Install command: `npm ci` if configurable; Hostinger's default `npm install`
  also uses the committed lockfile
- Build command: `npm run build`
- Output directory: `.next`
- Start command: `npm run start` if configurable

The production build script explicitly runs `next build --webpack`. Keep the
`npm run build` command in Hostinger rather than overriding it with `next build`,
which uses Turbopack by default.

### Why Webpack is selected

The supplied Hostinger log for Next.js 16.3.8 fails while processing
`src/app/globals.css`: Turbopack reports `creating new process` followed by
`node process exited before we could connect to it with exit status: 0`.
There is no CSS syntax diagnostic or worker stderr. This establishes a worker
startup/connection failure in that build environment; the log does not establish
whether the underlying cause is sandboxing, networking or process limits.

Webpack bypasses Turbopack's failing worker startup path while retaining Next.js,
Tailwind v4, the existing PostCSS configuration and the `.next` server output.
The PostCSS configuration already exports the required default object.
Dependency deprecation and audit warnings are separate from this fatal error.

### Uploading a source archive

Upload the updated source, including `package.json`, `package-lock.json`,
`next.config.ts`, `postcss.config.mjs`, `src/` and `public/`. Do not upload
`node_modules/`, `.next/`, `.git/`, `tmp/` or local `.env` files. Set production
environment variables in Hostinger and request a fresh build if its interface
offers a build-cache reset.

Confirm the new build log prints `next build --webpack`. A log that still shows
plain `next build` is using an older archive or an overriding build command.
After deploying, check the homepage, a service page, the case study,
`/sitemap.xml`, `/robots.txt` and `/opengraph-image`. Successful local validation
does not confirm a successful Hostinger deployment; verify its new build log.
