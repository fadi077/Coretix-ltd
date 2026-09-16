# Coretix Ltd website

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form delivery

The contact form sends enquiries through Hostinger SMTP to `info@coretix.org`.
Configure these environment variables on the Hostinger Node.js application:

```text
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@coretix.org
SMTP_PASSWORD=your-hostinger-mailbox-password
CONTACT_TO=info@coretix.org
```

Keep the mailbox password in Hostinger’s environment settings. Do not commit it
to the repository or expose it through a `NEXT_PUBLIC_` variable.

The live deployment must run the Next.js server (`npm run build` followed by
`npm run start`). A static-only export will not include the `/api/contact`
route.
